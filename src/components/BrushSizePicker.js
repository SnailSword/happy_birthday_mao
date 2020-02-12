import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {WingBlank, Slider, Drawer} from 'antd-mobile';
import rough from 'roughjs/bundled/rough.esm';

class SingleRoughCircle extends React.Component {

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        this.ctx = dom.getContext('2d');
        this.rc = rough.canvas(dom);
        this.draw(this.props);
    }

    UNSAFE_componentWillUpdate(props) {
        if (props.checked^this.props.checked) {
            this.draw(props);
        }
    }

    draw = (props) => {
        const {size, checked} = props;
        this.ctx.clearRect(0, 0, 50, 50);
        this.rc.circle(25, 25, 8 + size * 5, {
            roughness: 1,
            strokeWidth: 1,
            fill: checked ? '#000' : null,
            stroke: '#000',
            fillStyle: 'hachure',
            hachureGap: 1
        });
    }

    render() {
        return <canvas onClick={this.props.onClick} width="50" height="50"></canvas>;
    }
}

export default class BrushSizePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initValue || 1
        }
    }

    state = {}

    componentDidMount() {

    }

    onCircleClick = e => {
        const {onChange} = this.props;
        if (onChange) {
            onChange(e);
        }
        this.setState({
            value: e
        });
    }

    render() {
        const {counts} = this.props;
        const {value} = this.state;
        const circles = [];
        for (let i = 1; i <= counts; i++) {
            circles.push(<SingleRoughCircle key={'c-' + i} onClick={() => this.onCircleClick(i)} size={i} checked={value === i}/>);
        }
        return circles;
    }
}
