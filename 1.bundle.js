/*! For license information please see 1.bundle.js.LICENSE */
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class le extends oe{constructor(){super(...arguments),this.lastSize=[0,0]}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}}!function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);a>3&&o&&Object.defineProperty(t,n,o)}([Q("svg"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",SVGSVGElement)],le.prototype,"svg",void 0);class ue{constructor(e,t){this.xi=Number.MAX_VALUE,this.yi=Number.MAX_VALUE,this.px1=e[0],this.py1=e[1],this.px2=t[0],this.py2=t[1],this.a=this.py2-this.py1,this.b=this.px1-this.px2,this.c=this.px2*this.py1-this.px1*this.py2,this._undefined=0===this.a&&0===this.b&&0===this.c}isUndefined(){return this._undefined}intersects(e){if(this.isUndefined()||e.isUndefined())return!1;let t=Number.MAX_VALUE,n=Number.MAX_VALUE,r=0,i=0;const a=this.a,o=this.b,s=this.c;return Math.abs(o)>1e-5&&(t=-a/o,r=-s/o),Math.abs(e.b)>1e-5&&(n=-e.a/e.b,i=-e.c/e.b),t===Number.MAX_VALUE?n===Number.MAX_VALUE?-s/a==-e.c/e.a&&(this.py1>=Math.min(e.py1,e.py2)&&this.py1<=Math.max(e.py1,e.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.py2>=Math.min(e.py1,e.py2)&&this.py2<=Math.max(e.py1,e.py2)&&(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=this.px1,this.yi=n*this.xi+i,!((this.py1-this.yi)*(this.yi-this.py2)<-1e-5||(e.py1-this.yi)*(this.yi-e.py2)<-1e-5||Math.abs(e.a)<1e-5&&(e.px1-this.xi)*(this.xi-e.px2)<-1e-5)):n===Number.MAX_VALUE?(this.xi=e.px1,this.yi=t*this.xi+r,!((e.py1-this.yi)*(this.yi-e.py2)<-1e-5||(this.py1-this.yi)*(this.yi-this.py2)<-1e-5||Math.abs(a)<1e-5&&(this.px1-this.xi)*(this.xi-this.px2)<-1e-5)):t===n?r===i&&(this.px1>=Math.min(e.px1,e.px2)&&this.px1<=Math.max(e.py1,e.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.px2>=Math.min(e.px1,e.px2)&&this.px2<=Math.max(e.px1,e.px2)&&(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=(i-r)/(t-n),this.yi=t*this.xi+r,!((this.px1-this.xi)*(this.xi-this.px2)<-1e-5||(e.px1-this.xi)*(this.xi-e.px2)<-1e-5))}}class ce{constructor(e,t,n,r,i,a,o,s){this.deltaX=0,this.hGap=0,this.top=e,this.bottom=t,this.left=n,this.right=r,this.gap=i,this.sinAngle=a,this.tanAngle=s,Math.abs(a)<1e-4?this.pos=n+i:Math.abs(a)>.9999?this.pos=e+i:(this.deltaX=(t-e)*Math.abs(s),this.pos=n-Math.abs(this.deltaX),this.hGap=Math.abs(i/o),this.sLeft=new ue([n,t],[n,e]),this.sRight=new ue([r,t],[r,e]))}nextLine(){if(Math.abs(this.sinAngle)<1e-4){if(this.pos<this.right){const e=[this.pos,this.top,this.pos,this.bottom];return this.pos+=this.gap,e}}else if(Math.abs(this.sinAngle)>.9999){if(this.pos<this.bottom){const e=[this.left,this.pos,this.right,this.pos];return this.pos+=this.gap,e}}else{let e=this.pos-this.deltaX/2,t=this.pos+this.deltaX/2,n=this.bottom,r=this.top;if(this.pos<this.right+this.deltaX){for(;e<this.left&&t<this.left||e>this.right&&t>this.right;)if(this.pos+=this.hGap,e=this.pos-this.deltaX/2,t=this.pos+this.deltaX/2,this.pos>this.right+this.deltaX)return null;const i=new ue([e,n],[t,r]);this.sLeft&&i.intersects(this.sLeft)&&(e=i.xi,n=i.yi),this.sRight&&i.intersects(this.sRight)&&(t=i.xi,r=i.yi),this.tanAngle>0&&(e=this.right-(e-this.left),t=this.right-(t-this.left));const a=[e,n,t,r];return this.pos+=this.hGap,a}}return null}}function de(e,t){const n=[],r=new ue([e[0],e[1]],[e[2],e[3]]);for(let e=0;e<t.length;e++){const i=new ue(t[e],t[(e+1)%t.length]);r.intersects(i)&&n.push([r.xi,r.yi])}return n}function he(e,t,n,r,i,a,o){return[-n*a-r*i+n+a*e+i*t,o*(n*i-r*a)+r+-o*i*e+o*a*t]}class pe{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(e,t){this.p=`${this.p}M ${e} ${t} `}bcurveTo(e,t,n,r,i,a){this.p=`${this.p}C ${e} ${t}, ${n} ${r}, ${i} ${a} `}}function fe(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e);if(t)for(const e in t)n.setAttributeNS(null,e,t[e]);return n}function me(e,t){return 1*(Math.random()*(t-e)+e)}function ge(e,t,n,r,i){const a=Math.pow(e-n,2)+Math.pow(t-r,2);let o=2;o*o*100>a&&(o=Math.sqrt(a)/10);const s=o/2,l=.2+.2*Math.random();let u=1.7*(r-t)/200,c=1.7*(e-n)/200;u=me(-u,u),c=me(-c,c);const d=i||new pe;return d.moveTo(e+me(-o,o),t+me(-o,o)),d.bcurveTo(u+e+(n-e)*l+me(-o,o),c+t+(r-t)*l+me(-o,o),u+e+2*(n-e)*l+me(-o,o),c+t+2*(r-t)*l+me(-o,o),n+me(-o,o),r+me(-o,o)),d.moveTo(e+me(-s,s),t+me(-s,s)),d.bcurveTo(u+e+(n-e)*l+me(-s,s),c+t+(r-t)*l+me(-s,s),u+e+2*(n-e)*l+me(-s,s),c+t+2*(r-t)*l+me(-s,s),n+me(-s,s),r+me(-s,s)),d}function ve(e,t,n,r,i=!1,a=!1,o){o=o||new pe;const s=Math.pow(e-n,2)+Math.pow(t-r,2);let l=2;l*l*100>s&&(l=Math.sqrt(s)/10);const u=l/2,c=.2+.2*Math.random();let d=1.7*(r-t)/200,h=1.7*(e-n)/200;return d=me(-d,d),h=me(-h,h),i&&o.moveTo(e+me(-l,l),t+me(-l,l)),a?o.bcurveTo(d+e+(n-e)*c+me(-u,u),h+t+(r-t)*c+me(-u,u),d+e+2*(n-e)*c+me(-u,u),h+t+2*(r-t)*c+me(-u,u),n+me(-u,u),r+me(-u,u)):o.bcurveTo(d+e+(n-e)*c+me(-l,l),h+t+(r-t)*c+me(-l,l),d+e+2*(n-e)*c+me(-l,l),h+t+2*(r-t)*c+me(-l,l),n+me(-l,l),r+me(-l,l)),o}function ye(e,t,n,r,i,a,o,s){const l=me(-.5,.5)-Math.PI/2,u=[];u.push([me(-a,a)+t+.9*r*Math.cos(l-e),me(-a,a)+n+.9*i*Math.sin(l-e)]);for(let o=l;o<2*Math.PI+l-.01;o+=e)u.push([me(-a,a)+t+r*Math.cos(o),me(-a,a)+n+i*Math.sin(o)]);return u.push([me(-a,a)+t+r*Math.cos(l+2*Math.PI+.5*o),me(-a,a)+n+i*Math.sin(l+2*Math.PI+.5*o)]),u.push([me(-a,a)+t+.98*r*Math.cos(l+o),me(-a,a)+n+.98*i*Math.sin(l+o)]),u.push([me(-a,a)+t+.9*r*Math.cos(l+.5*o),me(-a,a)+n+.9*i*Math.sin(l+.5*o)]),function(e,t){const n=e.length;let r=t||new pe;if(n>3){const t=[],i=1;r.moveTo(e[1][0],e[1][1]);for(let a=1;a+2<n;a++){const n=e[a];t[0]=[n[0],n[1]],t[1]=[n[0]+(i*e[a+1][0]-i*e[a-1][0])/6,n[1]+(i*e[a+1][1]-i*e[a-1][1])/6],t[2]=[e[a+1][0]+(i*e[a][0]-i*e[a+2][0])/6,e[a+1][1]+(i*e[a][1]-i*e[a+2][1])/6],t[3]=[e[a+1][0],e[a+1][1]],r.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[3][0],t[3][1])}}else 3===n?(r.moveTo(e[0][0],e[0][1]),r.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1])):2===n&&(r=ge(e[0][0],e[0][1],e[1][0],e[1][1],r));return r}(u,s)}function be(e,t,n,r,i){const a=fe("path",{d:ge(t,n,r,i).value});return e.appendChild(a),a}function xe(e,t,n,r,i){i-=4;let a=ge(t+=2,n+=2,t+(r-=4),n);const o=fe("path",{d:(a=ge(t,n+i,t,n,a=ge(t+r,n+i,t,n+i,a=ge(t+r,n,t+r,n+i,a)))).value});return e.appendChild(o),o}function _e(e,t,n,r,i){r=Math.max(r>10?r-4:r-1,1),i=Math.max(i>10?i-4:i-1,1);const a=2*Math.PI/9;let o=Math.abs(r/2),s=Math.abs(i/2),l=ye(a,t,n,o+=me(.05*-o,.05*o),s+=me(.05*-s,.05*s),1,a*me(.1,me(.4,1)));const u=fe("path",{d:(l=ye(a,t,n,o,s,1.5,0,l)).value});return e.appendChild(u),u}function we(e){const t=fe("g");let n=null;return e.forEach(e=>{be(t,e[0][0],e[0][1],e[1][0],e[1][1]),n&&be(t,n[0],n[1],e[0][0],e[0][1]),n=e[1]}),t}const ke={bowing:.85,curveStepCount:9,curveTightness:0,dashGap:0,dashOffset:0,fill:"#000",fillStyle:"hachure",fillWeight:1,hachureAngle:-41,hachureGap:5,maxRandomnessOffset:2,roughness:1,simplification:1,stroke:"#000",strokeWidth:2,zigzagOffset:0};function Ce(e){return we(function(e,t){const n=[];if(e&&e.length){let r=e[0][0],i=e[0][0],a=e[0][1],o=e[0][1];for(let t=1;t<e.length;t++)r=Math.min(r,e[t][0]),i=Math.max(i,e[t][0]),a=Math.min(a,e[t][1]),o=Math.max(o,e[t][1]);const s=t.hachureAngle;let l=t.hachureGap;l<0&&(l=4*t.strokeWidth),l=Math.max(l,.1);const u=s%180*(Math.PI/180),c=Math.cos(u),d=Math.sin(u),h=Math.tan(u),p=new ce(a-1,o+1,r-1,i+1,l,d,c,h);let f;for(;null!=(f=p.nextLine());){const t=de(f,e);for(let e=0;e<t.length;e++)if(e<t.length-1){const r=t[e],i=t[e+1];n.push([r,i])}}}return n}(e,ke))}function Se(e,t,n,r){return we(function(e,t,n,r,i,a){const o=[];let s=Math.abs(r/2),l=Math.abs(i/2);s+=e.randOffset(.05*s,a),l+=e.randOffset(.05*l,a);let u=a.hachureGap;u<=0&&(u=4*a.strokeWidth);let c=a.fillWeight;c<0&&(c=a.strokeWidth/2);const d=a.hachureAngle%180*(Math.PI/180),h=Math.tan(d),p=l/s,f=Math.sqrt(p*h*p*h+1),m=p*h/f,g=1/f,v=u/(s*l/Math.sqrt(l*g*(l*g)+s*m*(s*m))/s);let y=Math.sqrt(s*s-(t-s+v)*(t-s+v));for(let e=t-s+v;e<t+s;e+=v){const r=he(e,n-(y=Math.sqrt(s*s-(t-e)*(t-e))),t,n,m,g,p),i=he(e,n+y,t,n,m,g,p);o.push([r,i])}return o}({randOffset:(e,t)=>me(-e,e)},e,t,n,r,ke))}function Te(e,t,n,r=!0,i=!0){if(t){const a={bubbles:"boolean"!=typeof r||r,composed:"boolean"!=typeof i||i};n&&(a.detail=n);const o=window.SlickCustomEvent||CustomEvent;e.dispatchEvent(new o(t,a))}}var Me=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ee=class extends le{constructor(){super(),this.elevation=1,this.disabled=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return R`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-2*(n-1),height:t[1]-2*(n-1)};xe(e,0,0,r.width,r.height);for(let t=1;t<n;t++)be(e,2*t,r.height+2*t,r.width+2*t,r.height+2*t).style.opacity=`${(75-10*t)/100}`,be(e,r.width+2*t,r.height+2*t,r.width+2*t,2*t).style.opacity=`${(75-10*t)/100}`,be(e,2*t,r.height+2*t,r.width+2*t,r.height+2*t).style.opacity=`${(75-10*t)/100}`,be(e,r.width+2*t,r.height+2*t,r.width+2*t,2*t).style.opacity=`${(75-10*t)/100}`}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.observe&&this.resizeObserver.observe(this.button)}detachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this.button)}};Me([Z({type:Number}),Oe("design:type",Object)],Ee.prototype,"elevation",void 0),Me([Z({type:Boolean,reflect:!0}),Oe("design:type",Object)],Ee.prototype,"disabled",void 0),Me([Q("button"),Oe("design:type",HTMLButtonElement)],Ee.prototype,"button",void 0),Ee=Me([$("wired-button"),Oe("design:paramtypes",[])],Ee);var De=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Pe=class extends oe{constructor(){super(...arguments),this.elevation=3,this.disabled=!1,this.initials=!1,this.format=e=>this.months_short[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear(),this.weekdays_short=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.months_short=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.firstOfMonthDate=new Date,this.fDate=void 0,this.lDate=void 0,this.calendarRefSize={width:0,height:0},this.tblColWidth=0,this.tblRowHeight=0,this.tblHeadHeight=0,this.monthYear="",this.weeks=[[]]}connectedCallback(){super.connectedCallback(),this.resizeHandler||(this.resizeHandler=this.debounce(this.resized.bind(this),200,!1,this),window.addEventListener("resize",this.resizeHandler)),this.localizeCalendarHeaders(),this.setInitialConditions(),this.computeCalendar(),this.refreshSelection(),setTimeout(()=>this.updated())}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),delete this.resizeHandler)}static get styles(){return ae`
    :host {
      display: inline-block;
      font-family: inherit;
      position: relative;
      outline: none;
      opacity: 0;
    }

    :host(.wired-disabled) {
      opacity: 0.5 !important;
      cursor: default;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.02);
    }

    :host(.wired-rendered) {
      opacity: 1;
    }

    :host(:focus) path {
      stroke-width: 1.5;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    svg {
      display: block;
    }

    .calendar path {
      stroke: var(--wired-calendar-color, black);
      stroke-width: 0.7;
      fill: transparent;
    }

    .selected path {
      stroke: var(--wired-calendar-selected-color, red);
      stroke-width: 2.5;
      fill: transparent;
      transition: transform 0.05s ease;
    }

    table {
      position: relative;
      background: var(--wired-calendar-bg, white);
      border-collapse: collapse;
      font-size: inherit;
      text-transform: capitalize;
      line-height: unset;
      cursor: default;
      overflow: hidden;
    }

    table:focus {
      outline: none !important;
    }

    td,
    th {
      border-radius: 4px;
      text-align: center;
    }

    td.disabled {
      color: var(--wired-calendar-disabled-color, lightgray);
      cursor: not-allowed;
    }

    td.dimmed {
      color: var(--wired-calendar-dimmed-color, gray);
    }

    td.selected {
      position: absolute;
    }

    td:not(.disabled):not(.selected):hover {
      background-color: #d0d0d0;
      cursor: pointer;
    }

    .pointer {
      cursor: pointer;
    }

    `}render(){return R`
    <table style="width:${this.calendarRefSize.width}px;height:${this.calendarRefSize.height}px;border:${8}px solid transparent"
            @mousedown="${this.onItemClick}"
            @touchstart="${this.onItemClick}">
      ${""}
      <tr class="top-header" style="height:${this.tblHeadHeight}px;">
        <th id="prevCal" class="pointer" @click="${this.onPrevClick}"><<</th>
        <th colSpan="5">${this.monthYear}</th>
        <th id="nextCal" class="pointer" @click="${this.onNextClick}">>></th>
      </tr>
      ${""}
      <tr class="header" style="height:${this.tblHeadHeight}px;">
        ${this.weekdays_short.map(e=>R`<th style="width: ${this.tblColWidth};">${this.initials?e[0]:e}</th>
            `)}
      </tr>
      ${""}
      ${this.weeks.map(e=>R`<tr style="height:${this.tblRowHeight}px;">
              ${""}
              ${e.map(e=>R`${e.selected?R`
                            <td class="selected" value="${e.value}">
                            <div style="width: ${this.tblColWidth}px; line-height:${this.tblRowHeight}px;">${e.text}</div>
                            <div class="overlay">
                              <svg id="svgTD" class="selected"></svg>
                            </div></td>
                        `:R`
                            <td .className="${e.disabled?"disabled":e.dimmed?"dimmed":""}"
                                value="${e.disabled?"":e.value}">${e.text}</td>
                        `}
                    `)}${""}
            </tr>`)}${""}
    </table>
    <div class="overlay">
      <svg id="svg" class="calendar"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","dialog")}updated(e){e&&e instanceof Map&&(e.has("disabled")&&this.refreshDisabledState(),e.has("selected")&&this.refreshSelection());const t=this.shadowRoot.getElementById("svg");for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.getCalendarSize(),r=Math.min(Math.max(1,this.elevation),5),i=n.width+2*(r-1),a=n.height+2*(r-1);t.setAttribute("width",`${i}`),t.setAttribute("height",`${a}`),xe(t,2,2,n.width-4,n.height-4);for(let e=1;e<r;e++)be(t,2*e,n.height-4+2*e,n.width-4+2*e,n.height-4+2*e).style.opacity=`${(85-10*e)/100}`,be(t,n.width-4+2*e,n.height-4+2*e,n.width-4+2*e,2*e).style.opacity=`${(85-10*e)/100}`,be(t,2*e,n.height-4+2*e,n.width-4+2*e,n.height-4+2*e).style.opacity=`${(85-10*e)/100}`,be(t,n.width-4+2*e,n.height-4+2*e,n.width-4+2*e,2*e).style.opacity=`${(85-10*e)/100}`;const o=this.shadowRoot.getElementById("svgTD");if(o){for(;o.hasChildNodes();)o.removeChild(o.lastChild);const e=Math.max(1*this.tblColWidth,20),t=Math.max(.9*this.tblRowHeight,18),n=_e(o,this.tblColWidth/2,this.tblRowHeight/2,e,t);o.appendChild(n)}this.classList.add("wired-rendered")}setSelectedDate(e){if(this.selected=e,this.selected){const e=new Date(this.selected);this.firstOfMonthDate=new Date(e.getFullYear(),e.getMonth(),1),this.computeCalendar(),this.requestUpdate(),this.fireSelected()}}localizeCalendarHeaders(){if(!this.locale){const e=navigator;e.hasOwnProperty("systemLanguage")?this.locale=e.systemLanguage:e.hasOwnProperty("browserLanguage")?this.locale=e.browserLanguage:this.locale=(navigator.languages||["en"])[0]}const e=(this.locale||"").toLowerCase();if("en-us"!==e&&"en"!==e){const e=new Date,t=e.getUTCDay(),n=new Date(e.getTime()-864e5*t),r=new Date(n);for(let e=0;e<7;e++)r.setDate(n.getDate()+e),this.weekdays_short[e]=r.toLocaleString(this.locale,{weekday:"short"});e.setDate(1);for(let t=0;t<12;t++)e.setMonth(t),this.months[t]=e.toLocaleString(this.locale,{month:"long"})}}setInitialConditions(){let e;this.calendarRefSize=this.getCalendarSize(),this.selected?(e=new Date(this.selected),this.value={date:new Date(this.selected),text:this.selected}):e=new Date,this.firstOfMonthDate=new Date(e.getFullYear(),e.getMonth(),1),this.firstdate&&(this.fDate=new Date(this.firstdate)),this.lastdate&&(this.lDate=new Date(this.lastdate))}refreshSelection(){this.weeks.forEach(e=>e.forEach(e=>{e.selected=this.selected&&e.value===this.selected||!1})),this.requestUpdate()}resized(){this.calendarRefSize=this.getCalendarSize(),this.computeCalendar(),this.refreshSelection()}getCalendarSize(){const e=this.getBoundingClientRect();return{width:e.width>180?e.width:320,height:e.height>180?e.height:320}}computeCellsizes(e,t){this.tblColWidth=e.width/7-2,this.tblHeadHeight=.25*e.height/2-2,this.tblRowHeight=.75*e.height/t-2}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}onItemClick(e){e.stopPropagation();const t=e.target;t&&t.hasAttribute("value")&&""!==t.getAttribute("value")&&(this.selected=t.getAttribute("value")||void 0,this.refreshSelection(),this.fireSelected())}fireSelected(){this.selected&&(this.value={date:new Date(this.selected),text:this.selected},Te(this,"selected",{selected:this.selected}))}computeCalendar(){this.monthYear=this.months[this.firstOfMonthDate.getMonth()]+" "+this.firstOfMonthDate.getFullYear();const e=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth(),1);let t=0-e.getDay();const n=Math.ceil((new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,0).getDate()-t)/7);this.weeks=[];for(let r=0;r<n;r++){this.weeks[r]=[];for(let n=0;n<7;n++){const i=new Date(e.getTime()+864e5*t),a=this.format(i);this.weeks[r][n]={value:a,text:i.getDate().toString(),selected:a===this.selected,dimmed:i.getMonth()!==e.getMonth(),disabled:this.isDateOutOfRange(i)},t++}}this.computeCellsizes(this.calendarRefSize,n)}onPrevClick(){void 0!==this.fDate&&new Date(this.fDate.getFullYear(),this.fDate.getMonth()-1,1).getMonth()===new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()-1,1).getMonth()||(this.firstOfMonthDate=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()-1,1),this.computeCalendar(),this.refreshSelection())}onNextClick(){void 0!==this.lDate&&new Date(this.lDate.getFullYear(),this.lDate.getMonth()+1,1).getMonth()===new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,1).getMonth()||(this.firstOfMonthDate=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,1),this.computeCalendar(),this.refreshSelection())}isDateOutOfRange(e){return this.fDate&&this.lDate?e<this.fDate||this.lDate<e:this.fDate?e<this.fDate:!!this.lDate&&this.lDate<e}debounce(e,t,n,r){let i=0;return()=>{const a=arguments,o=n&&!i;clearTimeout(i),i=window.setTimeout(()=>{i=0,n||e.apply(r,a)},t),o&&e.apply(r,a)}}};De([Z({type:Number}),Le("design:type",Object)],Pe.prototype,"elevation",void 0),De([Z({type:String}),Le("design:type",String)],Pe.prototype,"selected",void 0),De([Z({type:String}),Le("design:type",String)],Pe.prototype,"firstdate",void 0),De([Z({type:String}),Le("design:type",String)],Pe.prototype,"lastdate",void 0),De([Z({type:String}),Le("design:type",String)],Pe.prototype,"locale",void 0),De([Z({type:Boolean,reflect:!0}),Le("design:type",Object)],Pe.prototype,"disabled",void 0),De([Z({type:Boolean,reflect:!0}),Le("design:type",Object)],Pe.prototype,"initials",void 0),De([Z({type:Object}),Le("design:type",Object)],Pe.prototype,"value",void 0),De([Z({type:Function}),Le("design:type",Function)],Pe.prototype,"format",void 0),Pe=De([$("wired-calendar")],Pe);var Ne=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Ae=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ie=class extends le{constructor(){super(),this.elevation=1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        .cardFill path {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return R`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r=t[0]-2*(n-1),i=t[1]-2*(n-1);if(this.fill&&this.fill.trim()){const t=Ce([[2,2],[r-4,2],[r-2,i-4],[2,i-4]]);t.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(t)}xe(e,2,2,r-4,i-4);for(let t=1;t<n;t++)be(e,2*t,i-4+2*t,r-4+2*t,i-4+2*t).style.opacity=`${(85-10*t)/100}`,be(e,r-4+2*t,i-4+2*t,r-4+2*t,2*t).style.opacity=`${(85-10*t)/100}`,be(e,2*t,i-4+2*t,r-4+2*t,i-4+2*t).style.opacity=`${(85-10*t)/100}`,be(e,r-4+2*t,i-4+2*t,r-4+2*t,2*t).style.opacity=`${(85-10*t)/100}`}};Ne([Z({type:Number}),Ae("design:type",Object)],Ie.prototype,"elevation",void 0),Ne([Z({type:String}),Ae("design:type",String)],Ie.prototype,"fill",void 0),Ie=Ne([$("wired-card"),Ae("design:paramtypes",[])],Ie);var Re=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ye=class extends le{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return R`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),Te(this,"change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){xe(e,0,0,t[0],t[1]),this.svgCheck=fe("g"),e.appendChild(this.svgCheck),be(this.svgCheck,.3*t[0],.4*t[1],.5*t[0],.7*t[1]),be(this.svgCheck,.5*t[0],.7*t[1],t[0]+5,-5)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Re([Z({type:Boolean}),je("design:type",Object)],Ye.prototype,"checked",void 0),Re([Z({type:Boolean,reflect:!0}),je("design:type",Object)],Ye.prototype,"disabled",void 0),Re([Z(),je("design:type",Object)],Ye.prototype,"focused",void 0),Re([Q("input"),je("design:type",HTMLInputElement)],Ye.prototype,"input",void 0),Ye=Re([$("wired-checkbox")],Ye);var Fe=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},ze=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Be=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.cardShowing=!1,this.itemNodes=[]}static get styles(){return ae`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return R`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0)}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${n.width}`),t.setAttribute("height",`${n.height}`);const r=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=r.height+"px",xe(t,0,0,r.width,r.height);const i=r.width-4;xe(t,i,0,34,r.height);const a=Math.max(0,Math.abs((r.height-24)/2)),o=function(e,t){let n;const r=t.length;if(r>2)for(let e=0;e<2;e++){let i=!0;for(let e=1;e<r;e++)n=ve(t[e-1][0],t[e-1][1],t[e][0],t[e][1],i,e>0,n),i=!1;n=ve(t[r-1][0],t[r-1][1],t[0][0],t[0][1],i,e>0,n)}else n=2===r?ge(t[0][0],t[0][1],t[1][0],t[1][1]):new pe;const i=fe("path",{d:n.value});return e.appendChild(i),i}(t,[[i+8,5+a],[i+26,5+a],[i+17,a+Math.min(r.height,18)]]);if(o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];"WIRED-ITEM"===n.tagName&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let n=0;n<e.length;n++){const r=e[n];if("WIRED-ITEM"===r.tagName){const e=r.value||r.getAttribute("value")||"";if(this.selected&&e===this.selected){t=r;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(e=>e.nodeType===Node.ELEMENT_NODE).forEach(e=>{const t=e;t.requestUpdate&&t.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Te(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Fe([Z({type:Object}),ze("design:type",Object)],Be.prototype,"value",void 0),Fe([Z({type:String}),ze("design:type",String)],Be.prototype,"selected",void 0),Fe([Z({type:Boolean,reflect:!0}),ze("design:type",Object)],Be.prototype,"disabled",void 0),Fe([Q("svg"),ze("design:type",SVGSVGElement)],Be.prototype,"svg",void 0),Fe([Q("#card"),ze("design:type",HTMLDivElement)],Be.prototype,"card",void 0),Be=Fe([$("wired-combo")],Be);var He=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},We=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ve=class extends oe{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return ae`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return R`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};He([Z({type:Number}),We("design:type",Object)],Ve.prototype,"elevation",void 0),He([Z({type:Boolean,reflect:!0}),We("design:type",Object)],Ve.prototype,"open",void 0),He([Q("wired-card"),We("design:type",Ie)],Ve.prototype,"card",void 0),Ve=He([$("wired-dialog")],Ve);var Ue=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Ge=class extends le{constructor(){super(...arguments),this.elevation=1}static get styles(){return[se,ae`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return R`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,6*t]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5);for(let r=0;r<n;r++)be(e,0,6*r+3,t[0],6*r+3)}};Ue([Z({type:Number}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Ge.prototype,"elevation",void 0),Ge=Ue([$("wired-divider")],Ge);var Xe=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},qe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ke=class extends le{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return R`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]),r=Se(n/2,n/2,n,n);e.appendChild(r)}};Xe([Z({type:Boolean,reflect:!0}),qe("design:type",Object)],Ke.prototype,"disabled",void 0),Xe([Q("button"),qe("design:type",HTMLButtonElement)],Ke.prototype,"button",void 0),Ke=Xe([$("wired-fab")],Ke);var $e=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ze=class extends le{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return R`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]);e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),_e(e,n/2,n/2,n,n)}};$e([Z({type:Boolean,reflect:!0}),Je("design:type",Object)],Ze.prototype,"disabled",void 0),$e([Q("button"),Je("design:type",HTMLButtonElement)],Ze.prototype,"button",void 0),Ze=$e([$("wired-icon-button")],Ze);var Qe=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},et=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let tt=class extends le{constructor(){super(),this.elevation=1,this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return R`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r=t[0]-2*(n-1),i=t[1]-2*(n-1);xe(e,2,2,r-4,i-4);for(let t=1;t<n;t++)be(e,2*t,i-4+2*t,r-4+2*t,i-4+2*t).style.opacity=`${(85-10*t)/100}`,be(e,r-4+2*t,i-4+2*t,r-4+2*t,2*t).style.opacity=`${(85-10*t)/100}`,be(e,2*t,i-4+2*t,r-4+2*t,i-4+2*t).style.opacity=`${(85-10*t)/100}`,be(e,r-4+2*t,i-4+2*t,r-4+2*t,2*t).style.opacity=`${(85-10*t)/100}`}};Qe([Z({type:Number}),et("design:type",Object)],tt.prototype,"elevation",void 0),Qe([Z({type:String}),et("design:type",String)],tt.prototype,"src",void 0),tt=Qe([$("wired-image"),et("design:paramtypes",[])],tt);var nt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},rt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let it=class extends le{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
      `]}render(){return R`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e)}else this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,2,2,t[0]-2,t[1]-2)}refire(e){e.stopPropagation(),Te(this,e.type,{sourceEvent:e})}};nt([Z({type:Boolean,reflect:!0}),rt("design:type",Object)],it.prototype,"disabled",void 0),nt([Z({type:String}),rt("design:type",Object)],it.prototype,"placeholder",void 0),nt([Z({type:String}),rt("design:type",String)],it.prototype,"name",void 0),nt([Z({type:String}),rt("design:type",String)],it.prototype,"min",void 0),nt([Z({type:String}),rt("design:type",String)],it.prototype,"max",void 0),nt([Z({type:String}),rt("design:type",String)],it.prototype,"step",void 0),nt([Z({type:String}),rt("design:type",Object)],it.prototype,"type",void 0),nt([Z({type:String}),rt("design:type",Object)],it.prototype,"autocomplete",void 0),nt([Z({type:String}),rt("design:type",Object)],it.prototype,"autocapitalize",void 0),nt([Z({type:String}),rt("design:type",Object)],it.prototype,"autocorrect",void 0),nt([Z({type:Boolean}),rt("design:type",Object)],it.prototype,"required",void 0),nt([Z({type:Boolean}),rt("design:type",Object)],it.prototype,"autofocus",void 0),nt([Z({type:Boolean}),rt("design:type",Object)],it.prototype,"readonly",void 0),nt([Z({type:Number}),rt("design:type",Number)],it.prototype,"minlength",void 0),nt([Z({type:Number}),rt("design:type",Number)],it.prototype,"maxlength",void 0),nt([Z({type:Number}),rt("design:type",Number)],it.prototype,"size",void 0),nt([Q("input"),rt("design:type",HTMLInputElement)],it.prototype,"textInput",void 0),it=nt([$("wired-input")],it);var at=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},ot=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let st=class extends le{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return R`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const n=Ce([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]]);e.appendChild(n)}};at([Z(),ot("design:type",Object)],st.prototype,"value",void 0),at([Z(),ot("design:type",Object)],st.prototype,"name",void 0),at([Z({type:Boolean}),ot("design:type",Object)],st.prototype,"selected",void 0),st=at([$("wired-item")],st);var lt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},ut=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ct=class extends le{constructor(){super(...arguments),this.elevation=1}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return R`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,e.height+2*(t-1)]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0],height:t[1]-2*(n-1)};for(let t=0;t<n;t++)be(e,0,r.height+2*t-2,r.width,r.height+2*t-2),be(e,0,r.height+2*t-2,r.width,r.height+2*t-2)}};lt([Z({type:Number}),ut("design:type",Object)],ct.prototype,"elevation",void 0),lt([Z({type:String}),ut("design:type",String)],ct.prototype,"href",void 0),lt([Z({type:String}),ut("design:type",String)],ct.prototype,"target",void 0),lt([Q("a"),ut("design:type",HTMLAnchorElement)],ct.prototype,"anchor",void 0),ct=lt([$("wired-link")],ct);var dt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},ht=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let pt=class extends le{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return R`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];"WIRED-ITEM"===n.tagName&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let n=0;n<e.length;n++){const r=e[n];if("WIRED-ITEM"===r.tagName){const e=r.value||"";if(this.selected&&e===this.selected){t=r;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}fireSelected(){Te(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,0,0,t[0],t[1])}};dt([Z({type:Object}),ht("design:type",Object)],pt.prototype,"value",void 0),dt([Z({type:String}),ht("design:type",String)],pt.prototype,"selected",void 0),dt([Z({type:Boolean}),ht("design:type",Object)],pt.prototype,"horizontal",void 0),pt=dt([$("wired-listbox")],pt);var ft=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},mt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let gt=class extends le{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      .progbox path {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return R`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,2,2,t[0]-2,t[1]-2)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const n=t.width*Math.max(0,Math.min(e,100));this.progBox=Ce([[0,0],[n,0],[n,t.height],[0,t.height]]),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};ft([Z({type:Number}),mt("design:type",Object)],gt.prototype,"value",void 0),ft([Z({type:Number}),mt("design:type",Object)],gt.prototype,"min",void 0),ft([Z({type:Number}),mt("design:type",Object)],gt.prototype,"max",void 0),ft([Z({type:Boolean}),mt("design:type",Object)],gt.prototype,"percentage",void 0),gt=ft([$("wired-progress")],gt);var vt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},yt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let bt=class extends le{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return R`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),Te(this,"change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){_e(e,t[0]/2,t[1]/2,t[0],t[1]),this.svgCheck=fe("g"),e.appendChild(this.svgCheck);const n=Math.max(.6*t[0],5),r=Math.max(.6*t[1],5);_e(this.svgCheck,t[0]/2,t[1]/2,n,r)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};vt([Z({type:Boolean}),yt("design:type",Object)],bt.prototype,"checked",void 0),vt([Z({type:Boolean,reflect:!0}),yt("design:type",Object)],bt.prototype,"disabled",void 0),vt([Z({type:String}),yt("design:type",String)],bt.prototype,"name",void 0),vt([Z(),yt("design:type",Object)],bt.prototype,"focused",void 0),vt([Q("input"),yt("design:type",HTMLInputElement)],bt.prototype,"input",void 0),bt=vt([$("wired-radio")],bt);var xt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let _t=class extends oe{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return ae`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return R`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,n=e.target,r=n.name||"";t?(this.selected=t&&r||"",this.fireSelected()):n.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}})}updated(){const e=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];if("WIRED-RADIO"===n.tagName){this.radioNodes.push(n);const e=n.name||"";this.selected&&e===this.selected?n.checked=!0:n.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let t=0;t<e.length;t++)if(e[t].name===this.selected){n=t;break}n<0?t=e[0]:(--n<0&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let t=0;t<e.length;t++)if(e[t].name===this.selected){n=t;break}n<0?t=e[0]:(++n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Te(this,"selected",{selected:this.selected})}};xt([Z({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],_t.prototype,"selected",void 0),_t=xt([$("wired-radio-group")],_t);var wt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ct=class extends le{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return R`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,2,2,t[0]-2,t[1]-2),this.searchIcon=fe("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),_e(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20),be(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15),this.closeIcon=fe("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),be(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28),be(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),Te(this,e.type,{sourceEvent:e})}};wt([Z({type:Boolean,reflect:!0}),kt("design:type",Object)],Ct.prototype,"disabled",void 0),wt([Z({type:String}),kt("design:type",Object)],Ct.prototype,"placeholder",void 0),wt([Z({type:String}),kt("design:type",Object)],Ct.prototype,"autocomplete",void 0),wt([Z({type:String}),kt("design:type",Object)],Ct.prototype,"autocorrect",void 0),wt([Z({type:Boolean}),kt("design:type",Object)],Ct.prototype,"autofocus",void 0),wt([Q("input"),kt("design:type",HTMLInputElement)],Ct.prototype,"textInput",void 0),Ct=wt([$("wired-search-input")],Ct);var St=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Tt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mt=class extends le{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||this.value||+(this.getAttribute("value")||this.min),delete this.pendingValue}render(){return R`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&Te(this,"change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const n=Math.round(t[1]/2);be(e,0,n,t[0],n).classList.add("bar"),this.knob=_e(e,10,n,20,20),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),n=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${n*(this.canvasWidth-20)}px)`)}}};St([Z({type:Number}),Tt("design:type",Object)],Mt.prototype,"min",void 0),St([Z({type:Number}),Tt("design:type",Object)],Mt.prototype,"max",void 0),St([Z({type:Number}),Tt("design:type",Object)],Mt.prototype,"step",void 0),St([Z({type:Boolean,reflect:!0}),Tt("design:type",Object)],Mt.prototype,"disabled",void 0),St([Q("input"),Tt("design:type",HTMLInputElement)],Mt.prototype,"input",void 0),Mt=St([$("wired-slider")],Mt);var Ot=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Et=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Dt=class extends le{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return R`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){_e(e,t[0]/2,t[1]/2,Math.floor(.8*t[0]),Math.floor(.8*t[1])),this.knob=Se(0,0,20,20),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(360*this.value*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Ot([Z({type:Boolean}),Et("design:type",Object)],Dt.prototype,"spinning",void 0),Ot([Z({type:Number}),Et("design:type",Object)],Dt.prototype,"duration",void 0),Dt=Ot([$("wired-spinner")],Dt);var Lt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Pt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Nt=class extends le{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return R`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,2,2,t[0]-4,t[1]-4)}};Lt([Z({type:String}),Pt("design:type",Object)],Nt.prototype,"name",void 0),Lt([Z({type:String}),Pt("design:type",Object)],Nt.prototype,"label",void 0),Nt=Lt([$("wired-tab"),Pt("design:paramtypes",[])],Nt);const At=(e,t)=>{const n=e.startNode.parentNode,r=void 0===t?e.endNode:t.startNode,i=n.insertBefore(g(),r);n.insertBefore(g(),r);const a=new S(e.options);return a.insertAfterNode(i),a},It=(e,t)=>(e.setValue(t),e.commit(),e),Rt=(e,t,n)=>{const r=e.startNode.parentNode,i=n?n.startNode:e.endNode,a=t.endNode.nextSibling;a!==i&&((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(r,t.startNode,a,i)},jt=e=>{o(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Yt=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Ft=new WeakMap,zt=new WeakMap,Bt=(...e)=>{const t=((e,t,n)=>{let r;return void 0===n?n=t:void 0!==t&&(r=t),t=>{if(!(t instanceof S))throw new Error("repeat can only be used in text bindings");const i=Ft.get(t)||[],a=zt.get(t)||[],o=[],s=[],l=[];let u,c,d=0;for(const t of e)l[d]=r?r(t,d):d,s[d]=n(t,d),d++;let h=0,p=i.length-1,f=0,m=s.length-1;for(;h<=p&&f<=m;)if(null===i[h])h++;else if(null===i[p])p--;else if(a[h]===l[f])o[f]=It(i[h],s[f]),h++,f++;else if(a[p]===l[m])o[m]=It(i[p],s[m]),p--,m--;else if(a[h]===l[m])o[m]=It(i[h],s[m]),Rt(t,i[h],o[m+1]),h++,m--;else if(a[p]===l[f])o[f]=It(i[p],s[f]),Rt(t,i[p],i[h]),p--,f++;else if(void 0===u&&(u=Yt(l,f,m),c=Yt(a,h,p)),u.has(a[h]))if(u.has(a[p])){const e=c.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=At(t,i[h]);It(e,s[f]),o[f]=e}else o[f]=It(n,s[f]),Rt(t,n,i[h]),i[e]=null;f++}else jt(i[p]),p--;else jt(i[h]),h++;for(;f<=m;){const e=At(t,o[m+1]);It(e,s[f]),o[f++]=e}for(;h<=p;){const e=i[h++];null!==e&&jt(e)}Ft.set(t,o),zt.set(t,l)}})(...e);return r.set(t,!0),t};var Ht=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Vt=class extends oe{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[se,ae`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return R`
    <div id="bar">
      ${Bt(this.pages,e=>e.name,e=>R`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const n=e[t];if(n.nodeType===Node.ELEMENT_NODE&&"wired-tab"===n.tagName.toLowerCase()){const e=n;this.pages.push(e);const t=e.getAttribute("name")||"";t&&t.trim().split(" ").forEach(t=>{t&&this.pageMap.set(t,e)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const n=this.pages[t];n===e?n.classList.remove("hidden"):n.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e=void 0;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};Ht([Z({type:String}),Wt("design:type",String)],Vt.prototype,"selected",void 0),Ht([Q("slot"),Wt("design:type",HTMLSlotElement)],Vt.prototype,"slotElement",void 0),Vt=Ht([$("wired-tabs")],Vt);var Ut=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Xt=class extends le{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return R`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;t&&(t.value=e)}else this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,4,4,t[0]-4,t[1]-4)}refire(e){e.stopPropagation(),Te(this,e.type,{sourceEvent:e})}};Ut([Z({type:Boolean,reflect:!0}),Gt("design:type",Object)],Xt.prototype,"disabled",void 0),Ut([Z({type:Number}),Gt("design:type",Object)],Xt.prototype,"rows",void 0),Ut([Z({type:Number}),Gt("design:type",Object)],Xt.prototype,"maxrows",void 0),Ut([Z({type:String}),Gt("design:type",Object)],Xt.prototype,"autocomplete",void 0),Ut([Z({type:Boolean}),Gt("design:type",Object)],Xt.prototype,"autofocus",void 0),Ut([Z({type:String}),Gt("design:type",Object)],Xt.prototype,"inputmode",void 0),Ut([Z({type:String}),Gt("design:type",Object)],Xt.prototype,"placeholder",void 0),Ut([Z({type:Boolean}),Gt("design:type",Object)],Xt.prototype,"required",void 0),Ut([Z({type:Boolean}),Gt("design:type",Object)],Xt.prototype,"readonly",void 0),Ut([Z({type:Number}),Gt("design:type",Number)],Xt.prototype,"minlength",void 0),Ut([Z({type:Number}),Gt("design:type",Number)],Xt.prototype,"maxlength",void 0),Ut([Q("textarea"),Gt("design:type",HTMLTextAreaElement)],Xt.prototype,"textareaInput",void 0),Xt=Ut([$("wired-textarea")],Xt);var qt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $t=class extends le{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[se,ae`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      .knobfill path {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked .knobfill path {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked .knobfill path {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return R`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),Te(this,"change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){xe(e,16,8,t[0]-32,18),this.knob=fe("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const n=Se(16,16,32,32);n.classList.add("knobfill"),this.knob.appendChild(n),_e(this.knob,16,16,32,32)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};qt([Z({type:Boolean}),Kt("design:type",Object)],$t.prototype,"checked",void 0),qt([Z({type:Boolean,reflect:!0}),Kt("design:type",Object)],$t.prototype,"disabled",void 0),qt([Q("input"),Kt("design:type",HTMLInputElement)],$t.prototype,"input",void 0),$t=qt([$("wired-toggle")],$t);var Jt=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},Zt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qt=class extends le{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[se,ae`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return R`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){xe(e,2,2,t[0]-4,t[1]-4)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60);return`${t}:${Math.round(e-60*t)}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=100*this.video.volume)}};Jt([Z({type:String}),Zt("design:type",Object)],Qt.prototype,"src",void 0),Jt([Z({type:Boolean}),Zt("design:type",Object)],Qt.prototype,"autoplay",void 0),Jt([Z({type:Boolean}),Zt("design:type",Object)],Qt.prototype,"loop",void 0),Jt([Z({type:Boolean}),Zt("design:type",Object)],Qt.prototype,"muted",void 0),Jt([Z({type:Boolean}),Zt("design:type",Object)],Qt.prototype,"playsinline",void 0),Jt([Z(),Zt("design:type",Object)],Qt.prototype,"playing",void 0),Jt([Z(),Zt("design:type",Object)],Qt.prototype,"timeDisplay",void 0),Jt([Q("wired-progress"),Zt("design:type",gt)],Qt.prototype,"progressBar",void 0),Jt([Q("wired-slider"),Zt("design:type",Mt)],Qt.prototype,"slider",void 0),Jt([Q("video"),Zt("design:type",HTMLVideoElement)],Qt.prototype,"video",void 0),Qt=Jt([$("wired-video"),Zt("design:paramtypes",[])],Qt)}]]);