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

export const getPrediction = (canvas, coords, key) => {
    //make sure we have at least two recorded coordinates
    if (coords.length >= 2) {

        //get the image data from the canvas
        const imgData = getImageData(canvas, coords, key)

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
    const buffer = 20;
    const min = m => (m - buffer) > 0 ? (m - buffer) : 0;
    const max = m => (m + buffer) > 300 ? 300 : (m + buffer);
    //find top left and bottom right corners
    var min_coords = {
        x: min(Math.min(...coorX)),
        y: min(Math.min(...coorY))
    }
    var max_coords = {
        x: max(Math.max(...coorX)),
        y: max(Math.max(...coorY))
    }
    //return as strucut
    return {
        min: min_coords,
        max: max_coords
    }
}

function getImageData(canvas, coords, key) {
    //get the minimum bounding box around the drawing
    const mbb = getMinBox(coords);

    //get image data according to dpi
    const dpi = window.devicePixelRatio;
    // const imgData = canvas.contextContainer.getImageData(0,0,300,300);
    const imgData = canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
                                                  (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.min.y) * dpi);
        // window.resultStore[key] = this.canvas.toDataURL({
        //     format: 'png',
        //     multiplier: 0.2
        // });
        window.resultStore[key] = canvas.toSVG({
            viewBox: {
              x: mbb.min.x,
              y: mbb.min.y,
              width: mbb.max.x - mbb.min.x,
              height: mbb.max.y - mbb.min.y
            },
            width: 50,
            height: 50
        });
    // console.log('imgData', imgData);
    // canvas.clear();
    // let a = document.getElementById('aaa').getContext("2d");
    // a.fillStyle="#333";
    // a.fillRect(0,0,900,900);
    // a.putImageData(imgData,0,0);
    return imgData;
}

export const checkPrinting = (canvas, coords, key) => {
    const res = getPrediction(canvas, coords, key);
    let keyIndex = classNames.indexOf(key);
    console.log(keyIndex, key, res[keyIndex]);
    return res[keyIndex];
}
