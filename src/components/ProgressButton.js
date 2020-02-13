import React from 'react'
import ReactDOM from 'react-dom';
import rough from 'roughjs/bundled/rough.esm';

export default class ProgressButton extends React.Component {

    constructor(props) {
        super(props);
        this.width = 300;
        this.height = 40;
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        this.ctx = dom.getContext('2d');
        this.canvas = rough.canvas(dom);
        this.draw(this.props);
    }

    UNSAFE_componentWillUpdate(props) {
        if (props.progress !== this.props.progress) {
            this.draw(props);
        }
    }

    draw = (props) => {
        this.ctx.clearRect(0, 0, 500, 200);
        this.canvas.rectangle(25, 25, this.width, this.height); // x, y, width, height
        let p = props.progress || 0;
        p = p > 1 ? 1 : p;
        if (p) {
            this.canvas.rectangle(29, 29, (this.width - 8) * p, this.height - 8, {
                fill: "rgb(30,190,30)",
                fillWeight: 3, // thicker lines for hachure
                stroke: 'transparent'
            }); // x, y, width, height
        }
    }

    render() {
        const {progress} = this.props;
        return <canvas width={350} height={100}></canvas>;
    }
}
