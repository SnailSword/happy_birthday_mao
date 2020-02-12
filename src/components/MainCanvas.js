import React, { Fragment } from 'react';
import {fabric} from 'fabric';
import {WingBlank} from 'antd-mobile';

import {checkPrinting} from '@/utils/predict';
import BrushSizePicker from './BrushSizePicker';

const getBrushSize = num => 2 + num * 4;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.initData(props);
        this.randomText = Math.random().toString(36).substr(2);
    }

    initData = (props) => {
        this.key = props.canvasKey || 'default';

        this.coords = [];
        this.pressed = false;
    }

    state = {

    }

    get id() {
        return `canvas-${this.randomText}`;
    }

    recordCoor = event => {
        let pointer = this.canvas.getPointer(event.e);
        let posX = pointer.x;
        let posY = pointer.y;
        // console.log(posX, posY);
        if (posX >= 0 && posY >= 0 && this.pressed) {
            this.coords.push(pointer)
        }
    }

    allowDrawing = () => {
        canvas.isDrawingMode = 1;

    }

    onBrushSizeChange = e => {
        this.canvas.freeDrawingBrush.width = getBrushSize(e);
    }

    componentDidMount() {
        if (!window.model) {
            // todo
            console.log('跳回首页');
        }
        let canvas = new fabric.Canvas(this.id);
        this.canvas = canvas;
        // this.cxt = document.getContext('2d');
        // console.log('this.canvas', this.canvas);
        canvas.backgroundColor = '#ffffff';
        canvas.isDrawingMode = 1;
        canvas.freeDrawingBrush.color = "black";
        canvas.freeDrawingBrush.width = getBrushSize(2);
        canvas.renderAll();
        canvas.on('mouse:up', e => {
            // this.getFrame();
            // mousePressed = false
            setTimeout(() => {
                let prob = checkPrinting(this.canvas, this.coords, this.key);
                this.pressed = false;
                if (this.props.onChange) {
                    this.props.onChange(prob);
                }
            }, 0);
        });
        canvas.on('mouse:down', e => {
            this.pressed = true;
        });
        canvas.on('mouse:move', e => {
            this.recordCoor(e)
        });
    }

    UNSAFE_componentWillUpdate(props) {
        if (props.canvasKey && (props.canvasKey !== this.props.canvasKey)) {
            this.initData(props);
            this.onClear();
        }
    }

    onClear = e => {
        this.coords = [];
        this.canvas.clear();
        this.canvas.backgroundColor = '#ffffff';
    }

    render() {
        return <Fragment>
            <WingBlank>
                <wired-card>
                    <canvas id={this.id} width="300" height="300"></canvas>
                </wired-card>
            </WingBlank>
            <wired-button onClick={this.onClear}>清空</wired-button>
            <WingBlank>
            <BrushSizePicker counts={5} initValue={2} onChange={this.onBrushSizeChange}></BrushSizePicker>
            {/* <canvas id="aaa" width="900" height="900"></canvas> */}

            </WingBlank>
        </Fragment>
    }
}
