import React, { Fragment } from 'react';
import * as tf from '@tensorflow/tfjs';
import {Toast, WingBlank, WhiteSpace} from 'antd-mobile';

export default class Home extends React.Component {
    state = {
        modelLoaded: false,
        status: ''
    }

    loadModel = async () => {
        this.setState({
            status: '模型加载中...'
        });
        //load the model
        const model = await tf.loadLayersModel('./model/model.json')
        this.setState({
            status: '模型加载完成，预热中...'
        });
        //warm up
        model.predict(tf.zeros([1, 28, 28, 1]))
        window.model = model;
        this.setState({
            modelLoaded: true,
            status: '我准备好了，可以开始啦'
        });
    }

    componentDidMount() {
        if (!window.model) {
            this.loadModel();
        }
        window.resultStore = {};
    }

    startGame = () => {
        this.props.history.push('/happy_birthday_mao/game');
    }

    render() {
        const {modelLoaded, status} = this.state;
        return <Fragment>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <h1>你画你猜</h1>
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
            {
                modelLoaded
                ? <wired-button onClick={this.startGame}>开始游戏</wired-button>
                : <wired-button disabled>等一下再开始游戏</wired-button>
            }
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <p>{status}</p>
            </WingBlank>
            {/* <wired-button onClick={this.startGame}>开始游戏</wired-button> */}
        </Fragment>
    }
}
