import React, { Fragment } from 'react';
import MainCanvas from '@/components/MainCanvas';
import {Toast} from 'antd-mobile';

const CanvasWithQuestion = ({canvasKey, question, onChange}) => {
    return <div>
            <h2>{question}</h2>
            <MainCanvas canvasKey={canvasKey} onChange={onChange}/>
        </div>;
}

export default class Game extends React.Component {
    state = {
        passed: false,
        currentIndex: 0
    }

    constructor(props) {
        super(props);
        this.data = [
            {
                question: <span>你大学体育课选的什么课?</span>,
                key: 'basketball',
                p: 0.2
            },
            {
                question: <span>冰激凌</span>,
                key: 'ice_cream',
                p: 0.3
            },
            {
                question: <span>自行车</span>,
                key: 'bicycle',
                p: 0.12
            },
            {
                question: <span>钥匙</span>,
                key: 'key',
                p: 0.01
            },
            {
                question: <span>红太狼打灰太狼用什么</span>,
                key: 'frying_pan',
                p: 0.2
            },
            {
                question: <span>笑脸</span>,
                key: 'smiley_face',
                p: 0.6
            },
        ];
    }

    componentDidMount() {
        if (!window.model) {
            this.props.history.push('/');
            return;
        }
    }

    onProbChange = e => {
        const {currentIndex} = this.state;
        console.log(e, this.data[currentIndex].p);
        this.setState({
            passed: e > this.data[currentIndex].p
        });
    }

    toNext = () => {
        const {currentIndex, passed} = this.state;
        if (!passed) {
            this.showToast;
        }
        let index = currentIndex + 1;
        this.setState({
            currentIndex: index,
            passed: false
        });
    }

    showToast = () => {
        Toast.info('nonono', 1);
    }

    toResult = () => {
        this.props.history.push('/result');
    }

    getButton = () => {
        const {currentIndex, passed} = this.state;
        if (currentIndex === this.data.length - 1) {
            if (passed) {
                return <wired-button onClick={this.toResult}>开始表演</wired-button>;
            }
            return <wired-button disabled onClick={this.showToast}>开始表演</wired-button>;
        }
        if (passed) {
            return <wired-button onClick={this.toNext}>下一题</wired-button>;
        }
        return <wired-button disabled onClick={this.showToast}>下一题</wired-button>;
    }

    render() {
        const {currentIndex, passed} = this.state;
        return <Fragment>
            <CanvasWithQuestion
                canvasKey={this.data[currentIndex].key}
                question={this.data[currentIndex].question}
                onChange={this.onProbChange} />
            {
                this.getButton()
            }
        </Fragment>
    }
}
