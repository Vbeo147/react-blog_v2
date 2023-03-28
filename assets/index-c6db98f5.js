import{r as e}from"./index-90c8ce41.js";import{u as w,s as F,a as $,P as U,i as b,L as A}from"./motion-3294bdbd.js";function I(){const n=e.useRef(!1);return w(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function K(){const n=I(),[o,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(o+1)},[o]);return[e.useCallback(()=>F.postRender(r),[r]),o]}class O extends e.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function S({children:n,isPresent:o}){const t=e.useId(),r=e.useRef(null),m=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:a,height:f,top:u,left:h}=m.current;if(o||!r.current||!a||!f)return;r.current.dataset.motionPopId=t;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${f}px !important;
            top: ${u}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[o]),e.createElement(O,{isPresent:o,childRef:r,sizeRef:m},e.cloneElement(n,{ref:r}))}const g=({children:n,initial:o,isPresent:t,onExitComplete:r,custom:m,presenceAffectsLayout:a,mode:f})=>{const u=$(G),h=e.useId(),d=e.useMemo(()=>({id:h,initial:o,isPresent:t,custom:m,onExitComplete:i=>{u.set(i,!0);for(const c of u.values())if(!c)return;r&&r()},register:i=>(u.set(i,!1),()=>u.delete(i))}),a?void 0:[t]);return e.useMemo(()=>{u.forEach((i,c)=>u.set(c,!1))},[t]),e.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),f==="popLayout"&&(n=e.createElement(S,{isPresent:t},n)),e.createElement(U.Provider,{value:d},n)};function G(){return new Map}function T(n){return e.useEffect(()=>()=>n(),[])}const E=n=>n.key||"";function B(n,o){n.forEach(t=>{const r=E(t);o.set(r,t)})}function D(n){const o=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&o.push(t)}),o}const W=({children:n,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:a=!0,mode:f="sync"})=>{b(!m);let[u]=K();const h=e.useContext(A).forceRender;h&&(u=h);const d=I(),i=D(n);let c=i;const l=new Set,R=e.useRef(c),C=e.useRef(new Map).current,x=e.useRef(!0);if(w(()=>{x.current=!1,B(i,C),R.current=c}),T(()=>{x.current=!0,C.clear(),l.clear()}),x.current)return e.createElement(e.Fragment,null,c.map(s=>e.createElement(g,{key:E(s),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:a,mode:f},s)));c=[...c];const y=R.current.map(E),M=i.map(E),P=y.length;for(let s=0;s<P;s++){const p=y[s];M.indexOf(p)===-1&&l.add(p)}return f==="wait"&&l.size&&(c=[]),l.forEach(s=>{if(M.indexOf(s)!==-1)return;const p=C.get(s);if(!p)return;const z=y.indexOf(s),L=()=>{C.delete(s),l.delete(s);const k=R.current.findIndex(v=>v.key===s);if(R.current.splice(k,1),!l.size){if(R.current=i,d.current===!1)return;u(),r&&r()}};c.splice(z,0,e.createElement(g,{key:E(p),isPresent:!1,onExitComplete:L,custom:o,presenceAffectsLayout:a,mode:f},p))}),c=c.map(s=>{const p=s.key;return l.has(p)?s:e.createElement(g,{key:E(s),isPresent:!0,presenceAffectsLayout:a,mode:f},s)}),e.createElement(e.Fragment,null,l.size?c:c.map(s=>e.cloneElement(s)))};export{W as A};