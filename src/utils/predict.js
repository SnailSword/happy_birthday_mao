import * as tf from '@tensorflow/tfjs';
import classNames from './classNames';

const preprocess = imgData => {
    return tf.tidy(() => {
        //convert to a tensor
        let tensor = tf.browser.fromPixels(imgData, 1)

        //resize
        const resized = tf.image.resizeBilinear(tensor, [28, 28]).toFloat()

        //normalize
        const offset = tf.scalar(255.0);
        const normalized = tf.scalar(1.0).sub(resized.div(offset));

        //We add a dimension to get a batch shape
        const batched = normalized.expandDims(0)
        return batched
    })
}

export const getPrediction = (canvas, coords) => {
    //make sure we have at least two recorded coordinates
    if (coords.length >= 2) {

        //get the image data from the canvas
        const imgData = getImageData(canvas, coords)

        //get the prediction
        const pred = model.predict(preprocess(imgData)).dataSync()

        //find the top 5 predictions
        // const indices = findIndicesOfMax(pred, 5)
        // const probs = findTopValues(pred, 5)
        // const names = getClassNames(indices)

        //set the table
        // setTable(names, probs)
        return pred;
    }
    return new Array(100);
}

const getMinBox = coords => {
    //get coordinates
    var coorX = coords.map(function(p) {
        return p.x
    });
    var coorY = coords.map(function(p) {
        return p.y
    });

    //find top left and bottom right corners
    var min_coords = {
        x: Math.min.apply(null, coorX),
        y: Math.min.apply(null, coorY)
    }
    var max_coords = {
        x: Math.max.apply(null, coorX),
        y: Math.max.apply(null, coorY)
    }
    //return as strucut
    return {
        min: min_coords,
        max: max_coords
    }
}

function getImageData(canvas, coords) {
    //get the minimum bounding box around the drawing
    const mbb = getMinBox(coords);

    //get image data according to dpi
    const dpi = window.devicePixelRatio;
    // console.log(mbb.max.x * dpi, mbb.max.y * dpi);
    // const imgData = canvas.contextContainer.getImageData(0,0,300,300);
    const imgData = canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
                                                  (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.min.y) * dpi);

    return imgData;
}

export const checkPrinting = (canvas, coords, key) => {
    const res = getPrediction(canvas, coords);
    let keyIndex = classNames.indexOf(key);
    console.log(keyIndex, key, res[keyIndex]);
    return res[keyIndex];
}
