import React, { Fragment } from 'react';
import {Toast, WingBlank, WhiteSpace} from 'antd-mobile';

import MainCanvas from '@/components/MainCanvas';
import ProgressButton from '@/components/ProgressButton';
import TitleBackgound from '@/components/TitleBackground';

const CanvasWithQuestion = ({canvasKey, question, onChange}) => {
    return <div>
            {/* <TitleBackgound height={30} width={200}></TitleBackgound> */}
            <h2 className="question">{question}</h2>
            <WhiteSpace size="lg"/>
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
                question: <span>你大学体育课选的什么课</span>,
                key: 'basketball',
                p: 0.2
            },
            {
                question: <span>7-11什么东西6块钱一个</span>,
                key: 'ice_cream',
                p: 0.3
            },
            {
                question: <span>画个自行车骑着去下一关</span>,
                key: 'bicycle',
                p: 0.12
            },
            {
                question: <span>红太狼打灰太狼用什么</span>,
                key: 'frying_pan',
                p: 0.2
            },
            {
                question: <span>画一个哈哈大笑</span>,
                key: 'smiley_face',
                p: 0.3
            },
            {
                question: <span>画一把钥匙，并大喊芝麻开门</span>,
                key: 'key',
                p: 0.01
            }
        ];
    }

    componentDidMount() {
        if (!window.model) {
            this.props.history.push('/happy_birthday_mao/');
            return;
        }
    }

    onProbChange = e => {
        const {currentIndex} = this.state;
        console.log(e, this.data[currentIndex].p);
        this.setState({
            passed: e > this.data[currentIndex].p,
            progress: (e / this.data[currentIndex].p)
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
            passed: false,
            progress: 0
        });
    }

    showToast = () => {
        Toast.info('nonono', 1);
    }

    toResult = () => {
        this.props.history.push('/happy_birthday_mao/result');
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
        const {currentIndex, passed, progress} = this.state;
        const isLast = currentIndex === this.data.length - 1;
        return <Fragment>
            <WhiteSpace size="lg"/>
            <CanvasWithQuestion
                canvasKey={this.data[currentIndex].key}
                question={this.data[currentIndex].question}
                onChange={this.onProbChange} />
            {
                // this.getButton()
            }
            <WingBlank size="lg">
                <ProgressButton progress={progress}></ProgressButton>
                {passed && !isLast && <p onClick={this.toNext} className="next-question-button"><span>下一题</span></p>}
                {passed && isLast && <p onClick={this.toResult} className="next-question-button"><span>芝麻开门</span></p>}
            </WingBlank>
            {/* <span>{progress}</span> */}
        </Fragment>
    }
}
