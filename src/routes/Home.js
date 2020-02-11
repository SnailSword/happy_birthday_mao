import React, { Fragment } from 'react';
import * as tf from '@tensorflow/tfjs';

export default class Home extends React.Component {
    state = {
        modelLoaded: false
    }

    loadModel = async () => {
        //load the model
        const model = await tf.loadLayersModel('./model/model.json')

        //warm up
        model.predict(tf.zeros([1, 28, 28, 1]))
        window.model = model;
        this.setState({
            modelLoaded: true
        });
    }

    componentDidMount() {
        if (!window.model) {
            this.loadModel();
        }
    }

    render() {
        const {modelLoaded} = this.state;
        return <Fragment>
            <h1>你画你猜</h1>
            <h1>{modelLoaded ? '加载好了' : '加载中'}</h1>
        </Fragment>
    }
}
