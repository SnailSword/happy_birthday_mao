import React, { Fragment } from 'react';

const ResultIcon = ({canvasKey}) => {
    return <span dangerouslySetInnerHTML={{__html: window.resultStore[canvasKey]}}></span>
}

export default class Home extends React.Component {

    componentDidMount() {
        if (!window.model) {
            this.props.history.push('/');
            return;
        }
    }

    render() {
        if (!window.model) {
            return null;
        }
        return <Fragment>
            <p>大一<ResultIcon canvasKey="basketball"/>课上认识了你，这个相识直接把体育课变成聊天课，导致我学了两年篮球，都还不懂篮球比赛规则。</p>
            <p>普普通通的相遇之后，我们开始了普普通通的友谊，一起做了过很多普普通通的事，从普普通通的生活中找乐子：</p>
            <p>对比全家和711<ResultIcon canvasKey="ice_cream"/>的性价比</p>
            <p>薅摩拜的羊毛大晚上出去骑车，还得骑几分钟交换一下</p>
            <p>从红光到犀浦你坐高铁我骑<ResultIcon canvasKey="bicycle"/>一起出发我比你早到好多</p>
            <p>实在受不了我家的粘粘锅，过生日你送了我个高级<ResultIcon canvasKey="frying_pan"/></p>
            <p>… …</p>
            <p>还有像唱K、旅游、去游戏厅、看电影、狼人杀，甚至像吃面、逛超市、上自习这种最最正常的事，但不知道为什么，只要是和你在一起经历的，都会发生些神奇的事情。</p>
            <br></br>
            <p>你说我用一把旧<ResultIcon canvasKey="key"/>，敲开了厚厚的墙。墙上的砖层层展开后，我发现墙里的世界就和这小巷一样，普普通通，却又其乐无穷，而且现在我也不知道那边是墙里，哪那边是墙外了。</p>
            <p>我们都好像得到了那时所期望的东西，过上了从前期望的日子，我们都走到了曾以为的终点，却好像都把它当做了新的起点。</p>
            <br></br>
            <p>我记性很差，好多事，都要靠看原来的照片和日记才能回忆起来，比如这里面的好多素材，我都是看<a href="https://snailsword.github.io/2017/01/28/onemao/" target="_blank">这篇日记</a>才想起来的，真的就像日记里写的那样，慢慢的忘了，不过好在，还写下了一部分，而且事情虽然忘了，但是我相信，我们经历过的每一件事情，都会化作自己性格的一部分，潜移默化地影响日后的生活。</p>
            <ResultIcon canvasKey="smiley_face"/>
        </Fragment>
    }
}
