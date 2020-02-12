import React from 'react'
import ReactDOM from 'react-dom';

export default class ResultIcon extends React.Component {

    constructor(props) {
        super(props);
        this.key = props.key;
    }

    componentDidMount() {
        const {canvasKey} = this.props;
        if (!window.resultStore[canvasKey]) {
            return null;
        }
        const dom = ReactDOM.findDOMNode(this);
        this.ctx = dom.getContext('2d');
        this.ctx.putImageData(window.resultStore[canvasKey], 0, 0);
    }


    render() {
        const {size = 30, canvasKey} = this.props;
        if (!window.resultStore[canvasKey]) {
            return null;
        }
        this.size = size;
        return <canvas style={{height: size, width: size}} width={900} height={900}></canvas>;
    }
}
