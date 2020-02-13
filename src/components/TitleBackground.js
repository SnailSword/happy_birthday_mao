import React from 'react'
import ReactDOM from 'react-dom';
import rough from 'roughjs/bundled/rough.esm';

export default class TitleBackground extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        this.ctx = dom.getContext('2d');
        this.canvas = rough.canvas(dom);
        this.draw(this.props);
    }

    draw = (props) => {
        this.ctx.clearRect(0, 0, 500, 200);
        // this.canvas.rectangle(25, 25, this.width, this.height); // x, y, width, height
        this.canvas.rectangle(5, 5, props.width, props.height, {
            fill: "rgb(30,190,30)",
            fillWeight: 3, // thicker lines for hachure
            stroke: 'transparent'
        }); // x, y, width, height
    }

    render() {
        const {width, height} = this.props;
        return <canvas width={width + 10} height={height + 10}></canvas>;
    }
}
