import{R as at,r as Xs,k as so,l as KP,c as io,S as YP,a as QP,m as ZP,e as JP,j as Js,f as aw}from"./index-90c8ce41.js";import{a as XP}from"./blogUtils-970908a7.js";var kr=m=>m.type==="checkbox",vi=m=>m instanceof Date,It=m=>m==null;const pw=m=>typeof m=="object";var ht=m=>!It(m)&&!Array.isArray(m)&&pw(m)&&!vi(m),kw=m=>ht(m)&&m.target?kr(m.target)?m.target.checked:m.target.value:m,ez=m=>m.substring(0,m.search(/\.\d+(\.|$)/))||m,bw=(m,S)=>m.has(ez(S)),br=m=>Array.isArray(m)?m.filter(Boolean):[],dt=m=>m===void 0,K=(m,S,E)=>{if(!S||!ht(m))return E;const R=br(S.split(/[,[\].]+?/)).reduce((b,L)=>It(b)?b:b[L],m);return dt(R)||R===m?dt(m[S])?E:m[S]:R};const na={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},an={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},zn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},tz=at.createContext(null),vu=()=>at.useContext(tz);var ww=(m,S,E,R=!0)=>{const b={defaultValues:S._defaultValues};for(const L in m)Object.defineProperty(b,L,{get:()=>{const y=L;return S._proxyFormState[y]!==an.all&&(S._proxyFormState[y]=!R||an.all),E&&(E[y]=!0),m[y]}});return b},Qt=m=>ht(m)&&!Object.keys(m).length,_w=(m,S,E,R)=>{E(m);const{name:b,...L}=m;return Qt(L)||Object.keys(L).length>=Object.keys(S).length||Object.keys(L).find(y=>S[y]===(!R||an.all))},ea=m=>Array.isArray(m)?m:[m],Aw=(m,S,E)=>E&&S?m===S:!m||!S||m===S||ea(m).some(R=>R&&(R.startsWith(S)||S.startsWith(R)));function yu(m){const S=at.useRef(m);S.current=m,at.useEffect(()=>{const E=!m.disabled&&S.current.subject.subscribe({next:S.current.next});return()=>{E&&E.unsubscribe()}},[m.disabled])}function nz(m){const S=vu(),{control:E=S.control,disabled:R,name:b,exact:L}=m||{},[y,C]=at.useState(E._formState),h=at.useRef(!0),x=at.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),M=at.useRef(b);return M.current=b,yu({disabled:R,next:T=>h.current&&Aw(M.current,T.name,L)&&_w(T,x.current,E._updateFormState)&&C({...E._formState,...T}),subject:E._subjects.state}),at.useEffect(()=>{h.current=!0;const T=E._proxyFormState.isDirty&&E._getDirty();return T!==E._formState.isDirty&&E._subjects.state.next({isDirty:T}),x.current.isValid&&E._updateValid(!0),()=>{h.current=!1}},[E]),ww(y,E,x.current,!1)}var Cn=m=>typeof m=="string",Cw=(m,S,E,R,b)=>Cn(m)?(R&&S.watch.add(m),K(E,m,b)):Array.isArray(m)?m.map(L=>(R&&S.watch.add(L),K(E,L))):(R&&(S.watchAll=!0),E),oz=m=>{const S=m.constructor&&m.constructor.prototype;return ht(S)&&S.hasOwnProperty("isPrototypeOf")},xu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ro(m){let S;const E=Array.isArray(m);if(m instanceof Date)S=new Date(m);else if(m instanceof Set)S=new Set(m);else if(!(xu&&(m instanceof Blob||m instanceof FileList))&&(E||ht(m)))if(S=E?[]:{},!Array.isArray(m)&&!oz(m))S=m;else for(const R in m)S[R]=ro(m[R]);else return m;return S}function iz(m){const S=vu(),{control:E=S.control,name:R,defaultValue:b,disabled:L,exact:y}=m||{},C=at.useRef(R);C.current=R,yu({disabled:L,subject:E._subjects.watch,next:M=>{Aw(C.current,M.name,y)&&x(ro(Cw(C.current,E._names,M.values||E._formValues,!1,b)))}});const[h,x]=at.useState(E._getWatch(R,b));return at.useEffect(()=>E._removeUnmounted()),h}function ku(m){const S=vu(),{name:E,control:R=S.control,shouldUnregister:b}=m,L=bw(R._names.array,E),y=iz({control:R,name:E,defaultValue:K(R._formValues,E,K(R._defaultValues,E,m.defaultValue)),exact:!0}),C=nz({control:R,name:E}),h=at.useRef(R.register(E,{...m.rules,value:y}));return at.useEffect(()=>{const x=(M,T)=>{const B=K(R._fields,M);B&&(B._f.mount=T)};return x(E,!0),()=>{const M=R._options.shouldUnregister||b;(L?M&&!R._stateFlags.action:M)?R.unregister(E):x(E,!1)}},[E,R,L,b]),{field:{name:E,value:y,onChange:at.useCallback(x=>h.current.onChange({target:{value:kw(x),name:E},type:na.CHANGE}),[E]),onBlur:at.useCallback(()=>h.current.onBlur({target:{value:K(R._formValues,E),name:E},type:na.BLUR}),[E,R]),ref:x=>{const M=K(R._fields,E);M&&x&&(M._f.ref={focus:()=>x.focus(),select:()=>x.select(),setCustomValidity:T=>x.setCustomValidity(T),reportValidity:()=>x.reportValidity()})}},formState:C,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!K(C.errors,E)},isDirty:{enumerable:!0,get:()=>!!K(C.dirtyFields,E)},isTouched:{enumerable:!0,get:()=>!!K(C.touchedFields,E)},error:{enumerable:!0,get:()=>K(C.errors,E)}})}}var rz=(m,S,E,R,b)=>S?{...E[m],types:{...E[m]&&E[m].types?E[m].types:{},[R]:b||!0}}:{},Eu=m=>/^\w*$/.test(m),vw=m=>br(m.replace(/["|']|\]/g,"").split(/\.|\[/));function Ze(m,S,E){let R=-1;const b=Eu(S)?[S]:vw(S),L=b.length,y=L-1;for(;++R<L;){const C=b[R];let h=E;if(R!==y){const x=m[C];h=ht(x)||Array.isArray(x)?x:isNaN(+b[R+1])?{}:[]}m[C]=h,m=m[C]}return m}const Cu=(m,S,E)=>{for(const R of E||Object.keys(m)){const b=K(m,R);if(b){const{_f:L,...y}=b;if(L&&S(L.name)){if(L.ref.focus){L.ref.focus();break}else if(L.refs&&L.refs[0].focus){L.refs[0].focus();break}}else ht(y)&&Cu(y,S)}}};var cw=m=>({isOnSubmit:!m||m===an.onSubmit,isOnBlur:m===an.onBlur,isOnChange:m===an.onChange,isOnAll:m===an.all,isOnTouch:m===an.onTouched}),lw=(m,S,E)=>!E&&(S.watchAll||S.watch.has(m)||[...S.watch].some(R=>m.startsWith(R)&&/^\.\w+/.test(m.slice(R.length)))),sz=(m,S,E)=>{const R=br(K(m,E));return Ze(R,"root",S[E]),Ze(m,E,R),m},yi=m=>typeof m=="boolean",Du=m=>m.type==="file",xi=m=>typeof m=="function",oa=m=>{if(!xu)return!1;const S=m?m.ownerDocument:0;return m instanceof(S&&S.defaultView?S.defaultView.HTMLElement:HTMLElement)},ta=m=>Cn(m)||at.isValidElement(m),Su=m=>m.type==="radio",ia=m=>m instanceof RegExp;const dw={value:!1,isValid:!1},uw={value:!0,isValid:!0};var yw=m=>{if(Array.isArray(m)){if(m.length>1){const S=m.filter(E=>E&&E.checked&&!E.disabled).map(E=>E.value);return{value:S,isValid:!!S.length}}return m[0].checked&&!m[0].disabled?m[0].attributes&&!dt(m[0].attributes.value)?dt(m[0].value)||m[0].value===""?uw:{value:m[0].value,isValid:!0}:uw:dw}return dw};const hw={isValid:!1,value:null};var xw=m=>Array.isArray(m)?m.reduce((S,E)=>E&&E.checked&&!E.disabled?{isValid:!0,value:E.value}:S,hw):hw;function fw(m,S,E="validate"){if(ta(m)||Array.isArray(m)&&m.every(ta)||yi(m)&&!m)return{type:E,message:ta(m)?m:"",ref:S}}var Ci=m=>ht(m)&&!ia(m)?m:{value:m,message:""},gw=async(m,S,E,R,b)=>{const{ref:L,refs:y,required:C,maxLength:h,minLength:x,min:M,max:T,pattern:B,validate:k,name:I,valueAsNumber:de,mount:Se,disabled:Je}=m._f,Y=K(S,I);if(!Se||Je)return{};const Ee=y?y[0]:L,Te=ie=>{R&&Ee.reportValidity&&(Ee.setCustomValidity(yi(ie)?"":ie||""),Ee.reportValidity())},_e={},X=Su(L),re=kr(L),ce=X||re,fe=(de||Du(L))&&dt(L.value)&&dt(Y)||oa(L)&&L.value===""||Y===""||Array.isArray(Y)&&!Y.length,me=rz.bind(null,I,E,_e),Ae=(ie,ee,be,Fe=zn.maxLength,Ie=zn.minLength)=>{const ye=ie?ee:be;_e[I]={type:ie?Fe:Ie,message:ye,ref:L,...me(ie?Fe:Ie,ye)}};if(b?!Array.isArray(Y)||!Y.length:C&&(!ce&&(fe||It(Y))||yi(Y)&&!Y||re&&!yw(y).isValid||X&&!xw(y).isValid)){const{value:ie,message:ee}=ta(C)?{value:!!C,message:C}:Ci(C);if(ie&&(_e[I]={type:zn.required,message:ee,ref:Ee,...me(zn.required,ee)},!E))return Te(ee),_e}if(!fe&&(!It(M)||!It(T))){let ie,ee;const be=Ci(T),Fe=Ci(M);if(!It(Y)&&!isNaN(Y)){const Ie=L.valueAsNumber||Y&&+Y;It(be.value)||(ie=Ie>be.value),It(Fe.value)||(ee=Ie<Fe.value)}else{const Ie=L.valueAsDate||new Date(Y),ye=At=>new Date(new Date().toDateString()+" "+At),lt=L.type=="time",Ln=L.type=="week";Cn(be.value)&&Y&&(ie=lt?ye(Y)>ye(be.value):Ln?Y>be.value:Ie>new Date(be.value)),Cn(Fe.value)&&Y&&(ee=lt?ye(Y)<ye(Fe.value):Ln?Y<Fe.value:Ie<new Date(Fe.value))}if((ie||ee)&&(Ae(!!ie,be.message,Fe.message,zn.max,zn.min),!E))return Te(_e[I].message),_e}if((h||x)&&!fe&&(Cn(Y)||b&&Array.isArray(Y))){const ie=Ci(h),ee=Ci(x),be=!It(ie.value)&&Y.length>ie.value,Fe=!It(ee.value)&&Y.length<ee.value;if((be||Fe)&&(Ae(be,ie.message,ee.message),!E))return Te(_e[I].message),_e}if(B&&!fe&&Cn(Y)){const{value:ie,message:ee}=Ci(B);if(ia(ie)&&!Y.match(ie)&&(_e[I]={type:zn.pattern,message:ee,ref:L,...me(zn.pattern,ee)},!E))return Te(ee),_e}if(k){if(xi(k)){const ie=await k(Y,S),ee=fw(ie,Ee);if(ee&&(_e[I]={...ee,...me(zn.validate,ee.message)},!E))return Te(ee.message),_e}else if(ht(k)){let ie={};for(const ee in k){if(!Qt(ie)&&!E)break;const be=fw(await k[ee](Y,S),Ee,ee);be&&(ie={...be,...me(ee,be.message)},Te(be.message),E&&(_e[I]=ie))}if(!Qt(ie)&&(_e[I]={ref:Ee,...ie},!E))return _e}}return Te(!0),_e};function az(m,S){const E=S.slice(0,-1).length;let R=0;for(;R<E;)m=dt(m)?R++:m[S[R++]];return m}function cz(m){for(const S in m)if(!dt(m[S]))return!1;return!0}function xt(m,S){const E=Array.isArray(S)?S:Eu(S)?[S]:vw(S),R=E.length===1?m:az(m,E),b=E.length-1,L=E[b];return R&&delete R[L],b!==0&&(ht(R)&&Qt(R)||Array.isArray(R)&&cz(R))&&xt(m,E.slice(0,-1)),m}function bu(){let m=[];return{get observers(){return m},next:b=>{for(const L of m)L.next(b)},subscribe:b=>(m.push(b),{unsubscribe:()=>{m=m.filter(L=>L!==b)}}),unsubscribe:()=>{m=[]}}}var ra=m=>It(m)||!pw(m);function Vo(m,S){if(ra(m)||ra(S))return m===S;if(vi(m)&&vi(S))return m.getTime()===S.getTime();const E=Object.keys(m),R=Object.keys(S);if(E.length!==R.length)return!1;for(const b of E){const L=m[b];if(!R.includes(b))return!1;if(b!=="ref"){const y=S[b];if(vi(L)&&vi(y)||ht(L)&&ht(y)||Array.isArray(L)&&Array.isArray(y)?!Vo(L,y):L!==y)return!1}}return!0}var Ew=m=>m.type==="select-multiple",lz=m=>Su(m)||kr(m),wu=m=>oa(m)&&m.isConnected,Dw=m=>{for(const S in m)if(xi(m[S]))return!0;return!1};function sa(m,S={}){const E=Array.isArray(m);if(ht(m)||E)for(const R in m)Array.isArray(m[R])||ht(m[R])&&!Dw(m[R])?(S[R]=Array.isArray(m[R])?[]:{},sa(m[R],S[R])):It(m[R])||(S[R]=!0);return S}function Sw(m,S,E){const R=Array.isArray(m);if(ht(m)||R)for(const b in m)Array.isArray(m[b])||ht(m[b])&&!Dw(m[b])?dt(S)||ra(E[b])?E[b]=Array.isArray(m[b])?sa(m[b],[]):{...sa(m[b])}:Sw(m[b],It(S)?{}:S[b],E[b]):Vo(m[b],S[b])?delete E[b]:E[b]=!0;return E}var _u=(m,S)=>Sw(m,S,sa(S)),Tw=(m,{valueAsNumber:S,valueAsDate:E,setValueAs:R})=>dt(m)?m:S?m===""?NaN:m&&+m:E&&Cn(m)?new Date(m):R?R(m):m;function Au(m){const S=m.ref;if(!(m.refs?m.refs.every(E=>E.disabled):S.disabled))return Du(S)?S.files:Su(S)?xw(m.refs).value:Ew(S)?[...S.selectedOptions].map(({value:E})=>E):kr(S)?yw(m.refs).value:Tw(dt(S.value)?m.ref.value:S.value,m)}var dz=(m,S,E,R)=>{const b={};for(const L of m){const y=K(S,L);y&&Ze(b,L,y._f)}return{criteriaMode:E,names:[...m],fields:b,shouldUseNativeValidation:R}},pr=m=>dt(m)?m:ia(m)?m.source:ht(m)?ia(m.value)?m.value.source:m.value:m,uz=m=>m.mount&&(m.required||m.min||m.max||m.maxLength||m.minLength||m.pattern||m.validate);function mw(m,S,E){const R=K(m,E);if(R||Eu(E))return{error:R,name:E};const b=E.split(".");for(;b.length;){const L=b.join("."),y=K(S,L),C=K(m,L);if(y&&!Array.isArray(y)&&E!==L)return{name:E};if(C&&C.type)return{name:L,error:C};b.pop()}return{name:E}}var hz=(m,S,E,R,b)=>b.isOnAll?!1:!E&&b.isOnTouch?!(S||m):(E?R.isOnBlur:b.isOnBlur)?!m:(E?R.isOnChange:b.isOnChange)?m:!0,fz=(m,S)=>!br(K(m,S)).length&&xt(m,S);const gz={mode:an.onSubmit,reValidateMode:an.onChange,shouldFocusError:!0};function mz(m={},S){let E={...gz,...m};const R=m.resetOptions&&m.resetOptions.keepDirtyValues;let b={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},L={},y=ht(E.defaultValues)||ht(E.values)?ro(E.defaultValues||E.values)||{}:{},C=E.shouldUnregister?{}:ro(y),h={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},M,T=0;const B={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={watch:bu(),array:bu(),state:bu()},I=cw(E.mode),de=cw(E.reValidateMode),Se=E.criteriaMode===an.all,Je=v=>O=>{clearTimeout(T),T=window.setTimeout(v,O)},Y=async v=>{if(B.isValid||v){const O=E.resolver?Qt((await fe()).errors):await Ae(L,!0);O!==b.isValid&&k.state.next({isValid:O})}},Ee=v=>B.isValidating&&k.state.next({isValidating:v}),Te=(v,O=[],F,$,Q=!0,U=!0)=>{if($&&F){if(h.action=!0,U&&Array.isArray(K(L,v))){const te=F(K(L,v),$.argA,$.argB);Q&&Ze(L,v,te)}if(U&&Array.isArray(K(b.errors,v))){const te=F(K(b.errors,v),$.argA,$.argB);Q&&Ze(b.errors,v,te),fz(b.errors,v)}if(B.touchedFields&&U&&Array.isArray(K(b.touchedFields,v))){const te=F(K(b.touchedFields,v),$.argA,$.argB);Q&&Ze(b.touchedFields,v,te)}B.dirtyFields&&(b.dirtyFields=_u(y,C)),k.state.next({name:v,isDirty:ee(v,O),dirtyFields:b.dirtyFields,errors:b.errors,isValid:b.isValid})}else Ze(C,v,O)},_e=(v,O)=>{Ze(b.errors,v,O),k.state.next({errors:b.errors})},X=(v,O,F,$)=>{const Q=K(L,v);if(Q){const U=K(C,v,dt(F)?K(y,v):F);dt(U)||$&&$.defaultChecked||O?Ze(C,v,O?U:Au(Q._f)):Ie(v,U),h.mount&&Y()}},re=(v,O,F,$,Q)=>{let U=!1,te=!1;const We={name:v};if(!F||$){B.isDirty&&(te=b.isDirty,b.isDirty=We.isDirty=ee(),U=te!==We.isDirty);const Ve=Vo(K(y,v),O);te=K(b.dirtyFields,v),Ve?xt(b.dirtyFields,v):Ze(b.dirtyFields,v,!0),We.dirtyFields=b.dirtyFields,U=U||B.dirtyFields&&te!==!Ve}if(F){const Ve=K(b.touchedFields,v);Ve||(Ze(b.touchedFields,v,F),We.touchedFields=b.touchedFields,U=U||B.touchedFields&&Ve!==F)}return U&&Q&&k.state.next(We),U?We:{}},ce=(v,O,F,$)=>{const Q=K(b.errors,v),U=B.isValid&&yi(O)&&b.isValid!==O;if(m.delayError&&F?(M=Je(()=>_e(v,F)),M(m.delayError)):(clearTimeout(T),M=null,F?Ze(b.errors,v,F):xt(b.errors,v)),(F?!Vo(Q,F):Q)||!Qt($)||U){const te={...$,...U&&yi(O)?{isValid:O}:{},errors:b.errors,name:v};b={...b,...te},k.state.next(te)}Ee(!1)},fe=async v=>await E.resolver(C,E.context,dz(v||x.mount,L,E.criteriaMode,E.shouldUseNativeValidation)),me=async v=>{const{errors:O}=await fe();if(v)for(const F of v){const $=K(O,F);$?Ze(b.errors,F,$):xt(b.errors,F)}else b.errors=O;return O},Ae=async(v,O,F={valid:!0})=>{for(const $ in v){const Q=v[$];if(Q){const{_f:U,...te}=Q;if(U){const We=x.array.has(U.name),Ve=await gw(Q,C,Se,E.shouldUseNativeValidation,We);if(Ve[U.name]&&(F.valid=!1,O))break;!O&&(K(Ve,U.name)?We?sz(b.errors,Ve,U.name):Ze(b.errors,U.name,Ve[U.name]):xt(b.errors,U.name))}te&&await Ae(te,O,F)}}return F.valid},ie=()=>{for(const v of x.unMount){const O=K(L,v);O&&(O._f.refs?O._f.refs.every(F=>!wu(F)):!wu(O._f.ref))&&vn(v)}x.unMount=new Set},ee=(v,O)=>(v&&O&&Ze(C,v,O),!Vo(ao(),y)),be=(v,O,F)=>Cw(v,x,{...h.mount?C:dt(O)?y:Cn(v)?{[v]:O}:O},F,O),Fe=v=>br(K(h.mount?C:y,v,m.shouldUnregister?K(y,v,[]):[])),Ie=(v,O,F={})=>{const $=K(L,v);let Q=O;if($){const U=$._f;U&&(!U.disabled&&Ze(C,v,Tw(O,U)),Q=oa(U.ref)&&It(O)?"":O,Ew(U.ref)?[...U.ref.options].forEach(te=>te.selected=Q.includes(te.value)):U.refs?kr(U.ref)?U.refs.length>1?U.refs.forEach(te=>(!te.defaultChecked||!te.disabled)&&(te.checked=Array.isArray(Q)?!!Q.find(We=>We===te.value):Q===te.value)):U.refs[0]&&(U.refs[0].checked=!!Q):U.refs.forEach(te=>te.checked=te.value===Q):Du(U.ref)?U.ref.value="":(U.ref.value=Q,U.ref.type||k.watch.next({name:v})))}(F.shouldDirty||F.shouldTouch)&&re(v,Q,F.shouldTouch,F.shouldDirty,!0),F.shouldValidate&&At(v)},ye=(v,O,F)=>{for(const $ in O){const Q=O[$],U=`${v}.${$}`,te=K(L,U);(x.array.has(v)||!ra(Q)||te&&!te._f)&&!vi(Q)?ye(U,Q,F):Ie(U,Q,F)}},lt=(v,O,F={})=>{const $=K(L,v),Q=x.array.has(v),U=ro(O);Ze(C,v,U),Q?(k.array.next({name:v,values:C}),(B.isDirty||B.dirtyFields)&&F.shouldDirty&&k.state.next({name:v,dirtyFields:_u(y,C),isDirty:ee(v,U)})):$&&!$._f&&!It(U)?ye(v,U,F):Ie(v,U,F),lw(v,x)&&k.state.next({}),k.watch.next({name:v}),!h.mount&&S()},Ln=async v=>{const O=v.target;let F=O.name;const $=K(L,F),Q=()=>O.type?Au($._f):kw(v);if($){let U,te;const We=Q(),Ve=v.type===na.BLUR||v.type===na.FOCUS_OUT,Vt=!uz($._f)&&!E.resolver&&!K(b.errors,F)&&!$._f.deps||hz(Ve,K(b.touchedFields,F),b.isSubmitted,de,I),lo=lw(F,x,Ve);Ze(C,F,We),Ve?($._f.onBlur&&$._f.onBlur(v),M&&M(0)):$._f.onChange&&$._f.onChange(v);const xn=re(F,We,Ve,!1),Di=!Qt(xn)||lo;if(!Ve&&k.watch.next({name:F,type:v.type}),Vt)return B.isValid&&Y(),Di&&k.state.next({name:F,...lo?{}:xn});if(!Ve&&lo&&k.state.next({}),Ee(!0),E.resolver){const{errors:Me}=await fe([F]),Rn=mw(b.errors,L,F),En=mw(Me,L,Rn.name||F);U=En.error,F=En.name,te=Qt(Me)}else U=(await gw($,C,Se,E.shouldUseNativeValidation))[F],U?te=!1:B.isValid&&(te=await Ae(L,!0));$._f.deps&&At($._f.deps),ce(F,te,U,xn)}},At=async(v,O={})=>{let F,$;const Q=ea(v);if(Ee(!0),E.resolver){const U=await me(dt(v)?v:Q);F=Qt(U),$=v?!Q.some(te=>K(U,te)):F}else v?($=(await Promise.all(Q.map(async U=>{const te=K(L,U);return await Ae(te&&te._f?{[U]:te}:te)}))).every(Boolean),!(!$&&!b.isValid)&&Y()):$=F=await Ae(L);return k.state.next({...!Cn(v)||B.isValid&&F!==b.isValid?{}:{name:v},...E.resolver||!v?{isValid:F}:{},errors:b.errors,isValidating:!1}),O.shouldFocus&&!$&&Cu(L,U=>U&&K(b.errors,U),v?Q:x.mount),$},ao=v=>{const O={...y,...h.mount?C:{}};return dt(v)?O:Cn(v)?K(O,v):v.map(F=>K(O,F))},Ho=(v,O)=>({invalid:!!K((O||b).errors,v),isDirty:!!K((O||b).dirtyFields,v),isTouched:!!K((O||b).touchedFields,v),error:K((O||b).errors,v)}),_=v=>{v&&ea(v).forEach(O=>xt(b.errors,O)),k.state.next({errors:v?b.errors:{}})},Ue=(v,O,F)=>{const $=(K(L,v,{_f:{}})._f||{}).ref;Ze(b.errors,v,{...O,ref:$}),k.state.next({name:v,errors:b.errors,isValid:!1}),F&&F.shouldFocus&&$&&$.focus&&$.focus()},Uo=(v,O)=>xi(v)?k.watch.subscribe({next:F=>v(be(void 0,O),F)}):be(v,O,!0),vn=(v,O={})=>{for(const F of v?ea(v):x.mount)x.mount.delete(F),x.array.delete(F),K(L,F)&&(O.keepValue||(xt(L,F),xt(C,F)),!O.keepError&&xt(b.errors,F),!O.keepDirty&&xt(b.dirtyFields,F),!O.keepTouched&&xt(b.touchedFields,F),!E.shouldUnregister&&!O.keepDefaultValue&&xt(y,F));k.watch.next({}),k.state.next({...b,...O.keepDirty?{isDirty:ee()}:{}}),!O.keepIsValid&&Y()},cn=(v,O={})=>{let F=K(L,v);const $=yi(O.disabled);return Ze(L,v,{...F||{},_f:{...F&&F._f?F._f:{ref:{name:v}},name:v,mount:!0,...O}}),x.mount.add(v),F?$&&Ze(C,v,O.disabled?void 0:K(C,v,Au(F._f))):X(v,!0,O.value),{...$?{disabled:O.disabled}:{},...E.shouldUseNativeValidation?{required:!!O.required,min:pr(O.min),max:pr(O.max),minLength:pr(O.minLength),maxLength:pr(O.maxLength),pattern:pr(O.pattern)}:{},name:v,onChange:Ln,onBlur:Ln,ref:Q=>{if(Q){cn(v,O),F=K(L,v);const U=dt(Q.value)&&Q.querySelectorAll&&Q.querySelectorAll("input,select,textarea")[0]||Q,te=lz(U),We=F._f.refs||[];if(te?We.find(Ve=>Ve===U):U===F._f.ref)return;Ze(L,v,{_f:{...F._f,...te?{refs:[...We.filter(wu),U,...Array.isArray(K(y,v))?[{}]:[]],ref:{type:U.type,name:v}}:{ref:U}}}),X(v,!1,void 0,U)}else F=K(L,v,{}),F._f&&(F._f.mount=!1),(E.shouldUnregister||O.shouldUnregister)&&!(bw(x.array,v)&&h.action)&&x.unMount.add(v)}}},co=()=>E.shouldFocusError&&Cu(L,v=>v&&K(b.errors,v),x.mount),Ei=(v,O)=>async F=>{F&&(F.preventDefault&&F.preventDefault(),F.persist&&F.persist());let $=ro(C);if(k.state.next({isSubmitting:!0}),E.resolver){const{errors:Q,values:U}=await fe();b.errors=Q,$=U}else await Ae(L);xt(b.errors,"root"),Qt(b.errors)?(k.state.next({errors:{}}),await v($,F)):(O&&await O({...b.errors},F),co()),k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qt(b.errors),submitCount:b.submitCount+1,errors:b.errors})},Wo=(v,O={})=>{K(L,v)&&(dt(O.defaultValue)?lt(v,K(y,v)):(lt(v,O.defaultValue),Ze(y,v,O.defaultValue)),O.keepTouched||xt(b.touchedFields,v),O.keepDirty||(xt(b.dirtyFields,v),b.isDirty=O.defaultValue?ee(v,K(y,v)):ee()),O.keepError||(xt(b.errors,v),B.isValid&&Y()),k.state.next({...b}))},Zt=(v,O={})=>{const F=v||y,$=ro(F),Q=v&&!Qt(v)?$:y;if(O.keepDefaultValues||(y=F),!O.keepValues){if(O.keepDirtyValues||R)for(const U of x.mount)K(b.dirtyFields,U)?Ze(Q,U,K(C,U)):lt(U,K(Q,U));else{if(xu&&dt(v))for(const U of x.mount){const te=K(L,U);if(te&&te._f){const We=Array.isArray(te._f.refs)?te._f.refs[0]:te._f.ref;if(oa(We)){const Ve=We.closest("form");if(Ve){Ve.reset();break}}}}L={}}C=m.shouldUnregister?O.keepDefaultValues?ro(y):{}:$,k.array.next({values:Q}),k.watch.next({values:Q})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!h.mount&&S(),h.mount=!B.isValid||!!O.keepIsValid,h.watch=!!m.shouldUnregister,k.state.next({submitCount:O.keepSubmitCount?b.submitCount:0,isDirty:O.keepDirty||O.keepDirtyValues?b.isDirty:!!(O.keepDefaultValues&&!Vo(v,y)),isSubmitted:O.keepIsSubmitted?b.isSubmitted:!1,dirtyFields:O.keepDirty||O.keepDirtyValues?b.dirtyFields:O.keepDefaultValues&&v?_u(y,v):{},touchedFields:O.keepTouched?b.touchedFields:{},errors:O.keepErrors?b.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},On=(v,O)=>Zt(xi(v)?v(C):v,O),ft=(v,O={})=>{const F=K(L,v),$=F&&F._f;if($){const Q=$.refs?$.refs[0]:$.ref;Q.focus&&(Q.focus(),O.shouldSelect&&Q.select())}},yn=v=>{b={...b,...v}};return xi(E.defaultValues)&&E.defaultValues().then(v=>{On(v,E.resetOptions),k.state.next({isLoading:!1})}),{control:{register:cn,unregister:vn,getFieldState:Ho,_executeSchema:fe,_focusError:co,_getWatch:be,_getDirty:ee,_updateValid:Y,_removeUnmounted:ie,_updateFieldArray:Te,_getFieldArray:Fe,_reset:Zt,_updateFormState:yn,_subjects:k,_proxyFormState:B,get _fields(){return L},get _formValues(){return C},get _stateFlags(){return h},set _stateFlags(v){h=v},get _defaultValues(){return y},get _names(){return x},set _names(v){x=v},get _formState(){return b},set _formState(v){b=v},get _options(){return E},set _options(v){E={...E,...v}}},trigger:At,register:cn,handleSubmit:Ei,watch:Uo,setValue:lt,getValues:ao,reset:On,resetField:Wo,clearErrors:_,unregister:vn,setError:Ue,setFocus:ft,getFieldState:Ho}}function pz(m={}){const S=at.useRef(),[E,R]=at.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:xi(m.defaultValues)?void 0:m.defaultValues});S.current||(S.current={...mz(m,()=>R(L=>({...L}))),formState:E});const b=S.current.control;return b._options=m,yu({subject:b._subjects.state,next:L=>{_w(L,b._proxyFormState,b._updateFormState,!0)&&R({...b._formState})}}),at.useEffect(()=>{b._stateFlags.mount||(b._updateValid(),b._stateFlags.mount=!0),b._stateFlags.watch&&(b._stateFlags.watch=!1,b._subjects.state.next({})),b._removeUnmounted()}),at.useEffect(()=>{m.values&&!Vo(m.values,b._defaultValues)&&b._reset(m.values,b._options.resetOptions)},[m.values,b]),at.useEffect(()=>{E.submitCount&&b._focusError()},[b,E.submitCount]),S.current.formState=ww(E,b),S.current}let Iw=(m=21)=>crypto.getRandomValues(new Uint8Array(m)).reduce((S,E)=>(E&=63,E<36?S+=E.toString(36):E<62?S+=(E-26).toString(36).toUpperCase():E>62?S+="-":S+="_",S),"");var aa={},kz={get exports(){return aa},set exports(m){aa=m}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(m,S){(function(E,R){m.exports=R(Xs)})(self,E=>(()=>{var R={703:(C,h,x)=>{var M=x(414);function T(){}function B(){}B.resetWarningCache=T,C.exports=function(){function k(Se,Je,Y,Ee,Te,_e){if(_e!==M){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}function I(){return k}k.isRequired=k;var de={array:k,bigint:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:I,element:k,elementType:k,instanceOf:I,node:k,objectOf:I,oneOf:I,oneOfType:I,shape:I,exact:I,checkPropTypes:B,resetWarningCache:T};return de.PropTypes=de,de}},697:(C,h,x)=>{C.exports=x(703)()},414:C=>{C.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:C=>{C.exports=E}},b={};function L(C){var h=b[C];if(h!==void 0)return h.exports;var x=b[C]={exports:{}};return R[C](x,x.exports,L),x.exports}L.n=C=>{var h=C&&C.__esModule?()=>C.default:()=>C;return L.d(h,{a:h}),h},L.d=(C,h)=>{for(var x in h)L.o(h,x)&&!L.o(C,x)&&Object.defineProperty(C,x,{enumerable:!0,get:h[x]})},L.o=(C,h)=>Object.prototype.hasOwnProperty.call(C,h),L.r=C=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})};var y={};return(()=>{L.r(y),L.d(y,{CKEditor:()=>In,CKEditorContext:()=>Yn});var C=L(787),h=L.n(C),x=L(697),M=L.n(x);const T=function(f){var g=typeof f;return f!=null&&(g=="object"||g=="function")},B=typeof so=="object"&&so&&so.Object===Object&&so;var k=typeof self=="object"&&self&&self.Object===Object&&self;const I=B||k||Function("return this")(),de=function(){return I.Date.now()};var Se=/\s/;const Je=function(f){for(var g=f.length;g--&&Se.test(f.charAt(g)););return g};var Y=/^\s+/;const Ee=function(f){return f&&f.slice(0,Je(f)+1).replace(Y,"")},Te=I.Symbol;var _e=Object.prototype,X=_e.hasOwnProperty,re=_e.toString,ce=Te?Te.toStringTag:void 0;const fe=function(f){var g=X.call(f,ce),w=f[ce];try{f[ce]=void 0;var P=!0}catch{}var Z=re.call(f);return P&&(g?f[ce]=w:delete f[ce]),Z};var me=Object.prototype.toString;const Ae=function(f){return me.call(f)};var ie=Te?Te.toStringTag:void 0;const ee=function(f){return f==null?f===void 0?"[object Undefined]":"[object Null]":ie&&ie in Object(f)?fe(f):Ae(f)},be=function(f){return f!=null&&typeof f=="object"},Fe=function(f){return typeof f=="symbol"||be(f)&&ee(f)=="[object Symbol]"};var Ie=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,lt=/^0o[0-7]+$/i,Ln=parseInt;const At=function(f){if(typeof f=="number")return f;if(Fe(f))return NaN;if(T(f)){var g=typeof f.valueOf=="function"?f.valueOf():f;f=T(g)?g+"":g}if(typeof f!="string")return f===0?f:+f;f=Ee(f);var w=ye.test(f);return w||lt.test(f)?Ln(f.slice(2),w?2:8):Ie.test(f)?NaN:+f};var ao=Math.max,Ho=Math.min;const _=function(f,g,w){var P,Z,se,ue,he,Xe,Qe=0,Zo=!1,en=!1,Ut=!0;if(typeof f!="function")throw new TypeError("Expected a function");function Ot(ut){var nn=P,ei=Z;return P=Z=void 0,Qe=ut,ue=f.apply(ei,nn)}function Jo(ut){return Qe=ut,he=setTimeout(Dt,g),Zo?Ot(ut):ue}function bo(ut){var nn=ut-Xe;return Xe===void 0||nn>=g||nn<0||en&&ut-Qe>=se}function Dt(){var ut=de();if(bo(ut))return tn(ut);he=setTimeout(Dt,function(nn){var ei=g-(nn-Xe);return en?Ho(ei,se-(nn-Qe)):ei}(ut))}function tn(ut){return he=void 0,Ut&&P?Ot(ut):(P=Z=void 0,ue)}function Xo(){var ut=de(),nn=bo(ut);if(P=arguments,Z=this,Xe=ut,nn){if(he===void 0)return Jo(Xe);if(en)return clearTimeout(he),he=setTimeout(Dt,g),Ot(Xe)}return he===void 0&&(he=setTimeout(Dt,g)),ue}return g=At(g)||0,T(w)&&(Zo=!!w.leading,se=(en="maxWait"in w)?ao(At(w.maxWait)||0,g):se,Ut="trailing"in w?!!w.trailing:Ut),Xo.cancel=function(){he!==void 0&&clearTimeout(he),Qe=0,P=Xe=Z=he=void 0},Xo.flush=function(){return he===void 0?ue:tn(de())},Xo},Ue=function(f,g,w){var P=!0,Z=!0;if(typeof f!="function")throw new TypeError("Expected a function");return T(w)&&(P="leading"in w?!!w.leading:P,Z="trailing"in w?!!w.trailing:Z),_(f,g,{leading:P,maxWait:g,trailing:Z})},Uo=function(){this.__data__=[],this.size=0},vn=function(f,g){return f===g||f!=f&&g!=g},cn=function(f,g){for(var w=f.length;w--;)if(vn(f[w][0],g))return w;return-1};var co=Array.prototype.splice;const Ei=function(f){var g=this.__data__,w=cn(g,f);return!(w<0)&&(w==g.length-1?g.pop():co.call(g,w,1),--this.size,!0)},Wo=function(f){var g=this.__data__,w=cn(g,f);return w<0?void 0:g[w][1]},Zt=function(f){return cn(this.__data__,f)>-1},On=function(f,g){var w=this.__data__,P=cn(w,f);return P<0?(++this.size,w.push([f,g])):w[P][1]=g,this};function ft(f){var g=-1,w=f==null?0:f.length;for(this.clear();++g<w;){var P=f[g];this.set(P[0],P[1])}}ft.prototype.clear=Uo,ft.prototype.delete=Ei,ft.prototype.get=Wo,ft.prototype.has=Zt,ft.prototype.set=On;const yn=ft,v=function(){this.__data__=new yn,this.size=0},O=function(f){var g=this.__data__,w=g.delete(f);return this.size=g.size,w},F=function(f){return this.__data__.get(f)},$=function(f){return this.__data__.has(f)},Q=function(f){if(!T(f))return!1;var g=ee(f);return g=="[object Function]"||g=="[object GeneratorFunction]"||g=="[object AsyncFunction]"||g=="[object Proxy]"},U=I["__core-js_shared__"];var te=function(){var f=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}();const We=function(f){return!!te&&te in f};var Ve=Function.prototype.toString;const Vt=function(f){if(f!=null){try{return Ve.call(f)}catch{}try{return f+""}catch{}}return""};var lo=/^\[object .+?Constructor\]$/,xn=Function.prototype,Di=Object.prototype,Me=xn.toString,Rn=Di.hasOwnProperty,En=RegExp("^"+Me.call(Rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const qo=function(f){return!(!T(f)||We(f))&&(Q(f)?En:lo).test(Vt(f))},jn=function(f,g){return f==null?void 0:f[g]},ln=function(f,g){var w=jn(f,g);return qo(w)?w:void 0},Fn=ln(I,"Map"),we=ln(Object,"create"),Si=function(){this.__data__=we?we(null):{},this.size=0},la=function(f){var g=this.has(f)&&delete this.__data__[f];return this.size-=g?1:0,g};var da=Object.prototype.hasOwnProperty;const ua=function(f){var g=this.__data__;if(we){var w=g[f];return w==="__lodash_hash_undefined__"?void 0:w}return da.call(g,f)?g[f]:void 0};var wr=Object.prototype.hasOwnProperty;const ha=function(f){var g=this.__data__;return we?g[f]!==void 0:wr.call(g,f)},fa=function(f,g){var w=this.__data__;return this.size+=this.has(f)?0:1,w[f]=we&&g===void 0?"__lodash_hash_undefined__":g,this};function Vn(f){var g=-1,w=f==null?0:f.length;for(this.clear();++g<w;){var P=f[g];this.set(P[0],P[1])}}Vn.prototype.clear=Si,Vn.prototype.delete=la,Vn.prototype.get=ua,Vn.prototype.has=ha,Vn.prototype.set=fa;const Ti=Vn,ga=function(){this.size=0,this.__data__={hash:new Ti,map:new(Fn||yn),string:new Ti}},ma=function(f){var g=typeof f;return g=="string"||g=="number"||g=="symbol"||g=="boolean"?f!=="__proto__":f===null},Hn=function(f,g){var w=f.__data__;return ma(g)?w[typeof g=="string"?"string":"hash"]:w.map},gt=function(f){var g=Hn(this,f).delete(f);return this.size-=g?1:0,g},Et=function(f){return Hn(this,f).get(f)},pa=function(f){return Hn(this,f).has(f)},_r=function(f,g){var w=Hn(this,f),P=w.size;return w.set(f,g),this.size+=w.size==P?0:1,this};function Un(f){var g=-1,w=f==null?0:f.length;for(this.clear();++g<w;){var P=f[g];this.set(P[0],P[1])}}Un.prototype.clear=ga,Un.prototype.delete=gt,Un.prototype.get=Et,Un.prototype.has=pa,Un.prototype.set=_r;const ka=Un,Lt=function(f,g){var w=this.__data__;if(w instanceof yn){var P=w.__data__;if(!Fn||P.length<199)return P.push([f,g]),this.size=++w.size,this;w=this.__data__=new ka(P)}return w.set(f,g),this.size=w.size,this};function Wn(f){var g=this.__data__=new yn(f);this.size=g.size}Wn.prototype.clear=v,Wn.prototype.delete=O,Wn.prototype.get=F,Wn.prototype.has=$,Wn.prototype.set=Lt;const Ht=Wn,Ar=function(f,g){for(var w=-1,P=f==null?0:f.length;++w<P&&g(f[w],w,f)!==!1;);return f},Cr=function(){try{var f=ln(Object,"defineProperty");return f({},"",{}),f}catch{}}(),vr=function(f,g,w){g=="__proto__"&&Cr?Cr(f,g,{configurable:!0,enumerable:!0,value:w,writable:!0}):f[g]=w};var uo=Object.prototype.hasOwnProperty;const yr=function(f,g,w){var P=f[g];uo.call(f,g)&&vn(P,w)&&(w!==void 0||g in f)||vr(f,g,w)},Go=function(f,g,w,P){var Z=!w;w||(w={});for(var se=-1,ue=g.length;++se<ue;){var he=g[se],Xe=P?P(w[he],f[he],he,w,f):void 0;Xe===void 0&&(Xe=f[he]),Z?vr(w,he,Xe):yr(w,he,Xe)}return w},ba=function(f,g){for(var w=-1,P=Array(f);++w<f;)P[w]=g(w);return P},xr=function(f){return be(f)&&ee(f)=="[object Arguments]"};var Er=Object.prototype,wa=Er.hasOwnProperty,_a=Er.propertyIsEnumerable;const Aa=xr(function(){return arguments}())?xr:function(f){return be(f)&&wa.call(f,"callee")&&!_a.call(f,"callee")},$o=Array.isArray,Ca=function(){return!1};var Jt=S&&!S.nodeType&&S,Dr=Jt&&!0&&m&&!m.nodeType&&m,mt=Dr&&Dr.exports===Jt?I.Buffer:void 0;const Sr=(mt?mt.isBuffer:void 0)||Ca;var Mt=/^(?:0|[1-9]\d*)$/;const va=function(f,g){var w=typeof f;return!!(g=g??9007199254740991)&&(w=="number"||w!="symbol"&&Mt.test(f))&&f>-1&&f%1==0&&f<g},Tr=function(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=9007199254740991};var ze={};ze["[object Float32Array]"]=ze["[object Float64Array]"]=ze["[object Int8Array]"]=ze["[object Int16Array]"]=ze["[object Int32Array]"]=ze["[object Uint8Array]"]=ze["[object Uint8ClampedArray]"]=ze["[object Uint16Array]"]=ze["[object Uint32Array]"]=!0,ze["[object Arguments]"]=ze["[object Array]"]=ze["[object ArrayBuffer]"]=ze["[object Boolean]"]=ze["[object DataView]"]=ze["[object Date]"]=ze["[object Error]"]=ze["[object Function]"]=ze["[object Map]"]=ze["[object Number]"]=ze["[object Object]"]=ze["[object RegExp]"]=ze["[object Set]"]=ze["[object String]"]=ze["[object WeakMap]"]=!1;const Ir=function(f){return be(f)&&Tr(f.length)&&!!ze[ee(f)]},Ii=function(f){return function(g){return f(g)}};var Mi=S&&!S.nodeType&&S,ho=Mi&&!0&&m&&!m.nodeType&&m,fo=ho&&ho.exports===Mi&&B.process;const qn=function(){try{var f=ho&&ho.require&&ho.require("util").types;return f||fo&&fo.binding&&fo.binding("util")}catch{}}();var Mr=qn&&qn.isTypedArray;const ya=Mr?Ii(Mr):Ir;var Br=Object.prototype.hasOwnProperty;const Nr=function(f,g){var w=$o(f),P=!w&&Aa(f),Z=!w&&!P&&Sr(f),se=!w&&!P&&!Z&&ya(f),ue=w||P||Z||se,he=ue?ba(f.length,String):[],Xe=he.length;for(var Qe in f)!g&&!Br.call(f,Qe)||ue&&(Qe=="length"||Z&&(Qe=="offset"||Qe=="parent")||se&&(Qe=="buffer"||Qe=="byteLength"||Qe=="byteOffset")||va(Qe,Xe))||he.push(Qe);return he};var xa=Object.prototype;const Bi=function(f){var g=f&&f.constructor;return f===(typeof g=="function"&&g.prototype||xa)},Ct=function(f,g){return function(w){return f(g(w))}},Ea=Ct(Object.keys,Object);var Da=Object.prototype.hasOwnProperty;const Sa=function(f){if(!Bi(f))return Ea(f);var g=[];for(var w in Object(f))Da.call(f,w)&&w!="constructor"&&g.push(w);return g},Gn=function(f){return f!=null&&Tr(f.length)&&!Q(f)},Ni=function(f){return Gn(f)?Nr(f):Sa(f)},Ko=function(f,g){return f&&Go(g,Ni(g),f)},Ta=function(f){var g=[];if(f!=null)for(var w in Object(f))g.push(w);return g};var Ia=Object.prototype.hasOwnProperty;const Ma=function(f){if(!T(f))return Ta(f);var g=Bi(f),w=[];for(var P in f)(P!="constructor"||!g&&Ia.call(f,P))&&w.push(P);return w},Pi=function(f){return Gn(f)?Nr(f,!0):Ma(f)},Ba=function(f,g){return f&&Go(g,Pi(g),f)};var Pr=S&&!S.nodeType&&S,zr=Pr&&!0&&m&&!m.nodeType&&m,Lr=zr&&zr.exports===Pr?I.Buffer:void 0,Or=Lr?Lr.allocUnsafe:void 0;const Na=function(f,g){if(g)return f.slice();var w=f.length,P=Or?Or(w):new f.constructor(w);return f.copy(P),P},$n=function(f,g){var w=-1,P=f.length;for(g||(g=Array(P));++w<P;)g[w]=f[w];return g},Yo=function(f,g){for(var w=-1,P=f==null?0:f.length,Z=0,se=[];++w<P;){var ue=f[w];g(ue,w,f)&&(se[Z++]=ue)}return se},Rr=function(){return[]};var Pa=Object.prototype.propertyIsEnumerable,jr=Object.getOwnPropertySymbols;const zi=jr?function(f){return f==null?[]:(f=Object(f),Yo(jr(f),function(g){return Pa.call(f,g)}))}:Rr,za=function(f,g){return Go(f,zi(f),g)},Fr=function(f,g){for(var w=-1,P=g.length,Z=f.length;++w<P;)f[Z+w]=g[w];return f},Li=Ct(Object.getPrototypeOf,Object),Vr=Object.getOwnPropertySymbols?function(f){for(var g=[];f;)Fr(g,zi(f)),f=Li(f);return g}:Rr,La=function(f,g){return Go(f,Vr(f),g)},Hr=function(f,g,w){var P=g(f);return $o(f)?P:Fr(P,w(f))},Oa=function(f){return Hr(f,Ni,zi)},Ra=function(f){return Hr(f,Pi,Vr)},Oi=ln(I,"DataView"),Xt=ln(I,"Promise"),Ri=ln(I,"Set"),go=ln(I,"WeakMap");var ji="[object Map]",Ur="[object Promise]",Wr="[object Set]",qr="[object WeakMap]",Gr="[object DataView]",ja=Vt(Oi),Dn=Vt(Fn),Fa=Vt(Xt),Va=Vt(Ri),Ha=Vt(go),Sn=ee;(Oi&&Sn(new Oi(new ArrayBuffer(1)))!=Gr||Fn&&Sn(new Fn)!=ji||Xt&&Sn(Xt.resolve())!=Ur||Ri&&Sn(new Ri)!=Wr||go&&Sn(new go)!=qr)&&(Sn=function(f){var g=ee(f),w=g=="[object Object]"?f.constructor:void 0,P=w?Vt(w):"";if(P)switch(P){case ja:return Gr;case Dn:return ji;case Fa:return Ur;case Va:return Wr;case Ha:return qr}return g});const Fi=Sn;var Ua=Object.prototype.hasOwnProperty;const Wa=function(f){var g=f.length,w=new f.constructor(g);return g&&typeof f[0]=="string"&&Ua.call(f,"index")&&(w.index=f.index,w.input=f.input),w},$r=I.Uint8Array,Vi=function(f){var g=new f.constructor(f.byteLength);return new $r(g).set(new $r(f)),g},qa=function(f,g){var w=g?Vi(f.buffer):f.buffer;return new f.constructor(w,f.byteOffset,f.byteLength)};var Ga=/\w*$/;const $a=function(f){var g=new f.constructor(f.source,Ga.exec(f));return g.lastIndex=f.lastIndex,g};var dn=Te?Te.prototype:void 0,Kr=dn?dn.valueOf:void 0;const mo=function(f){return Kr?Object(Kr.call(f)):{}},Ka=function(f,g){var w=g?Vi(f.buffer):f.buffer;return new f.constructor(w,f.byteOffset,f.length)},po=function(f,g,w){var P=f.constructor;switch(g){case"[object ArrayBuffer]":return Vi(f);case"[object Boolean]":case"[object Date]":return new P(+f);case"[object DataView]":return qa(f,w);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ka(f,w);case"[object Map]":case"[object Set]":return new P;case"[object Number]":case"[object String]":return new P(f);case"[object RegExp]":return $a(f);case"[object Symbol]":return mo(f)}};var Yr=Object.create;const Ya=function(){function f(){}return function(g){if(!T(g))return{};if(Yr)return Yr(g);f.prototype=g;var w=new f;return f.prototype=void 0,w}}(),Qa=function(f){return typeof f.constructor!="function"||Bi(f)?{}:Ya(Li(f))},Za=function(f){return be(f)&&Fi(f)=="[object Map]"};var Qr=qn&&qn.isMap;const Ja=Qr?Ii(Qr):Za,Xa=function(f){return be(f)&&Fi(f)=="[object Set]"};var Zr=qn&&qn.isSet;const ec=Zr?Ii(Zr):Xa;var Jr="[object Arguments]",Xr="[object Function]",es="[object Object]",Le={};Le[Jr]=Le["[object Array]"]=Le["[object ArrayBuffer]"]=Le["[object DataView]"]=Le["[object Boolean]"]=Le["[object Date]"]=Le["[object Float32Array]"]=Le["[object Float64Array]"]=Le["[object Int8Array]"]=Le["[object Int16Array]"]=Le["[object Int32Array]"]=Le["[object Map]"]=Le["[object Number]"]=Le[es]=Le["[object RegExp]"]=Le["[object Set]"]=Le["[object String]"]=Le["[object Symbol]"]=Le["[object Uint8Array]"]=Le["[object Uint8ClampedArray]"]=Le["[object Uint16Array]"]=Le["[object Uint32Array]"]=!0,Le["[object Error]"]=Le[Xr]=Le["[object WeakMap]"]=!1;const tc=function f(g,w,P,Z,se,ue){var he,Xe=1&w,Qe=2&w,Zo=4&w;if(P&&(he=se?P(g,Z,se,ue):P(g)),he!==void 0)return he;if(!T(g))return g;var en=$o(g);if(en){if(he=Wa(g),!Xe)return $n(g,he)}else{var Ut=Fi(g),Ot=Ut==Xr||Ut=="[object GeneratorFunction]";if(Sr(g))return Na(g,Xe);if(Ut==es||Ut==Jr||Ot&&!se){if(he=Qe||Ot?{}:Qa(g),!Xe)return Qe?La(g,Ba(he,g)):za(g,Ko(he,g))}else{if(!Le[Ut])return se?g:{};he=po(g,Ut,Xe)}}ue||(ue=new Ht);var Jo=ue.get(g);if(Jo)return Jo;ue.set(g,he),ec(g)?g.forEach(function(Dt){he.add(f(Dt,w,P,Dt,g,ue))}):Ja(g)&&g.forEach(function(Dt,tn){he.set(tn,f(Dt,w,P,tn,g,ue))});var bo=en?void 0:(Zo?Qe?Ra:Oa:Qe?Pi:Ni)(g);return Ar(bo||g,function(Dt,tn){bo&&(Dt=g[tn=Dt]),yr(he,tn,f(Dt,w,P,tn,g,ue))}),he},nc=function(f,g){return tc(f,5,g=typeof g=="function"?g:void 0)};var oc=Function.prototype,Kn=Object.prototype,Hi=oc.toString,ic=Kn.hasOwnProperty,rc=Hi.call(Object);const sc=function(f){if(!be(f)||ee(f)!="[object Object]")return!1;var g=Li(f);if(g===null)return!0;var w=ic.call(g,"constructor")&&g.constructor;return typeof w=="function"&&w instanceof w&&Hi.call(w)==rc},ac=function(f){return be(f)&&f.nodeType===1&&!sc(f)};function Ui(f,g=new Set){const w=[f],P=new Set;let Z=0;for(;w.length>Z;){const se=w[Z++];if(!(P.has(se)||Qo(se)||g.has(se)))if(P.add(se),se[Symbol.iterator])try{for(const ue of se)w.push(ue)}catch{}else for(const ue in se)ue!=="defaultValue"&&w.push(se[ue])}return P}function Qo(f){const g=Object.prototype.toString.call(f),w=typeof f;return w==="number"||w==="boolean"||w==="string"||w==="symbol"||w==="function"||g==="[object Date]"||g==="[object RegExp]"||g==="[object Module]"||f==null||f._watchdogExcluded===!0||f instanceof EventTarget||f instanceof Event}function ts(f,g,w=new Set){if(f===g&&typeof(P=f)=="object"&&P!==null)return!0;var P;const Z=Ui(f,w),se=Ui(g,w);for(const ue of Z)if(se.has(ue))return!0;return!1}class ns{constructor(g){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof g.crashNumberLimit=="number"?g.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof g.minimumNonErrorTimePeriod=="number"?g.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=w=>{const P=w.error||w.reason;P instanceof Error&&this._handleError(P,w)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(g){this._creator=g}setDestructor(g){this._destructor=g}destroy(){this._stopErrorHandling(),this._listeners={}}on(g,w){this._listeners[g]||(this._listeners[g]=[]),this._listeners[g].push(w)}off(g,w){this._listeners[g]=this._listeners[g].filter(P=>P!==w)}_fire(g,...w){const P=this._listeners[g]||[];for(const Z of P)Z.apply(this,[null,...w])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(g,w){if(this._shouldReactToError(g)){this.crashes.push({message:g.message,stack:g.stack,filename:w.filename,lineno:w.lineno,colno:w.colno,date:this._now()});const P=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:g,causesRestart:P}),P?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(g){return g.is&&g.is("CKEditorError")&&g.context!==void 0&&g.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(g)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class os extends ns{constructor(g,w={}){super(w),this._editor=null,this._throttledSave=Ue(this._save.bind(this),typeof w.saveInterval=="number"?w.saveInterval:5e3),this._creator=(P,Z)=>g.create(P,Z),this._destructor=P=>P.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(g=>{console.error("An error happened during the editor destroying.",g)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const g=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,g,g.context)}}).then(()=>{this._fire("restart")})}create(g=this._elementOrData,w=this._config,P){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=g,this._config=this._cloneEditorConfiguration(w)||{},this._config.context=P,this._creator(g,this._config))).then(Z=>{this._editor=Z,Z.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=Z.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const g=this._editor;return this._editor=null,g.model.document.off("change:data",this._throttledSave),this._destructor(g)})}_save(){const g=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=g}catch(w){console.error(w,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(g){this._excludedProps=g}_getData(){const g={};for(const w of this._editor.model.document.getRootNames())g[w]=this._editor.data.get({rootName:w});return g}_isErrorComingFromThisItem(g){return ts(this._editor,g.context,this._excludedProps)}_cloneEditorConfiguration(g){return nc(g,(w,P)=>ac(w)||P==="context"?w:void 0)}}const pt=new Array(256).fill("").map((f,g)=>("0"+g.toString(16)).slice(-2)),ko=Symbol("MainQueueId");class is extends ns{constructor(g,w={}){super(w),this._watchdogs=new Map,this._watchdogConfig=w,this._context=null,this._contextProps=new Set,this._actionQueues=new cc,this._creator=P=>g.create(P),this._destructor=P=>P.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(g={}){return this._actionQueues.enqueue(ko,()=>(this._contextConfig=g,this._create()))}getItem(g){return this._getWatchdog(g)._item}getItemState(g){return this._getWatchdog(g).state}add(g){const w=rs(g);return Promise.all(w.map(P=>this._actionQueues.enqueue(P.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let Z;if(this._watchdogs.has(P.id))throw new Error(`Item with the given id is already added: '${P.id}'.`);if(P.type==="editor")return Z=new os(this._watchdogConfig),Z.setCreator(P.creator),Z._setExcludedProperties(this._contextProps),P.destructor&&Z.setDestructor(P.destructor),this._watchdogs.set(P.id,Z),Z.on("error",(se,{error:ue,causesRestart:he})=>{this._fire("itemError",{itemId:P.id,error:ue}),he&&this._actionQueues.enqueue(P.id,()=>new Promise(Xe=>{Z.on("restart",function Qe(){Z.off("restart",Qe),this._fire("itemRestart",{itemId:P.id}),Xe()}.bind(this))}))}),Z.create(P.sourceElementOrData,P.config,this._context);throw new Error(`Not supported item type: '${P.type}'.`)})))}remove(g){const w=rs(g);return Promise.all(w.map(P=>this._actionQueues.enqueue(P,()=>{const Z=this._getWatchdog(P);return this._watchdogs.delete(P),Z.destroy()})))}destroy(){return this._actionQueues.enqueue(ko,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ko,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(g=>{console.error("An error happened during destroying the context or items.",g)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(g=>(this._context=g,this._contextProps=Ui(this._context),Promise.all(Array.from(this._watchdogs.values()).map(w=>(w._setExcludedProperties(this._contextProps),w.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const g=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(w=>w.destroy())).then(()=>this._destructor(g))})}_getWatchdog(g){const w=this._watchdogs.get(g);if(!w)throw new Error(`Item with the given id was not registered: ${g}.`);return w}_isErrorComingFromThisItem(g){for(const w of this._watchdogs.values())if(w._isErrorComingFromThisItem(g))return!1;return ts(this._context,g.context)}}class cc{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(g){this._onEmptyCallbacks.push(g)}enqueue(g,w){const P=g===ko;this._activeActions++,this._queues.get(g)||this._queues.set(g,Promise.resolve());const Z=(P?Promise.all(this._queues.values()):Promise.all([this._queues.get(ko),this._queues.get(g)])).then(w),se=Z.catch(()=>{});return this._queues.set(g,se),Z.finally(()=>{this._activeActions--,this._queues.get(g)===se&&this._activeActions===0&&this._onEmptyCallbacks.forEach(ue=>ue())})}}function rs(f){return Array.isArray(f)?f:[f]}const Tn=h().createContext("contextWatchdog");class Yn extends h().Component{constructor(g,w){super(g,w),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(g){return g.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(g.config)),g.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(g.config),!0):this.props.children!==g.children}render(){return h().createElement(Tn.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(g){this.contextWatchdog=new is(this.props.context),this.contextWatchdog.on("error",(w,P)=>{this.props.onError(P.error,{phase:"runtime",willContextRestart:P.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(g).catch(w=>{this.props.onError(w,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Yn.defaultProps={isLayoutReady:!0,onError:(f,g)=>console.error(f,g)},Yn.propTypes={id:M().string,isLayoutReady:M().bool,context:M().func,config:M().object,onReady:M().func,onError:M().func};const Wi="Lock from React integration (@ckeditor/ckeditor5-react)";class In extends h().Component{constructor(g){super(g),this.editorDestructionInProgress=null,this.domContainer=h().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:w}=window;if(w){const[P]=w.split(".").map(Number);P<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(g){return!!this.editor&&(g.id!==this.props.id||(this._shouldUpdateEditor(g)&&this.editor.setData(g.data),"disabled"in g&&(g.disabled?this.editor.enableReadOnlyMode(Wi):this.editor.disableReadOnlyMode(Wi)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return h().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof is?this.watchdog=new lc(this.context):this.watchdog=new In._EditorWatchdog(this.props.editor),this.watchdog.setCreator((g,w)=>this._createEditor(g,w)),this.watchdog.on("error",(g,{error:w,causesRestart:P})=>{this.props.onError(w,{phase:"runtime",willEditorRestart:P})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(g=>this.props.onError(g,{phase:"initialization",willEditorRestart:!1})))}_createEditor(g,w){return this.props.editor.create(g,w).then(P=>{"disabled"in this.props&&this.props.disabled&&P.enableReadOnlyMode(Wi);const Z=P.model.document,se=P.editing.view.document;return Z.on("change:data",ue=>{this.props.onChange&&this.props.onChange(ue,P)}),se.on("focus",ue=>{this.props.onFocus&&this.props.onFocus(ue,P)}),se.on("blur",ue=>{this.props.onBlur&&this.props.onBlur(ue,P)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(P)}),P})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(g=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,g()}):g()})})}_shouldUpdateEditor(g){return this.props.data!==g.data&&this.editor.getData()!==g.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class lc{constructor(g){this._contextWatchdog=g,this._id=function(){const w=4294967296*Math.random()>>>0,P=4294967296*Math.random()>>>0,Z=4294967296*Math.random()>>>0,se=4294967296*Math.random()>>>0;return"e"+pt[w>>0&255]+pt[w>>8&255]+pt[w>>16&255]+pt[w>>24&255]+pt[P>>0&255]+pt[P>>8&255]+pt[P>>16&255]+pt[P>>24&255]+pt[Z>>0&255]+pt[Z>>8&255]+pt[Z>>16&255]+pt[Z>>24&255]+pt[se>>0&255]+pt[se>>8&255]+pt[se>>16&255]+pt[se>>24&255]}()}setCreator(g){this._creator=g}create(g,w){return this._contextWatchdog.add({sourceElementOrData:g,config:w,creator:this._creator,id:this._id,type:"editor"})}on(g,w){this._contextWatchdog.on("itemError",(P,{itemId:Z,causesRestart:se,error:ue})=>{Z===this._id&&w(null,{error:ue,causesRestart:se})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}In.contextType=Tn,In.propTypes={editor:M().func.isRequired,data:M().string,config:M().object,onChange:M().func,onReady:M().func,onFocus:M().func,onBlur:M().func,onError:M().func,disabled:M().bool,onInit:(f,g)=>{if(f[g])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},In.defaultProps={config:{},onError:(f,g)=>console.error(f,g)},In._EditorWatchdog=os})(),y})())})(kz,aa);var ca={},bz={get exports(){return ca},set exports(m){ca=m}};(function(m,S){(function(E){const R=E.ko=E.ko||{};R.dictionary=Object.assign(R.dictionary||{},{"%0 of %1":"%0 / %1",Aquamarine:"연한 청록색",Big:"큰",Black:"검은색","Block quote":"인용 단락",Blue:"파랑색",Bold:"굵게","Break text":"텍스트 분리","Bulleted List":"불릿 목록",Cancel:"취소","Cannot determine a category for the uploaded file.":"업로드된 파일의 카테고리를 확인할 수 없습니다.","Cannot upload file:":"파일 업로드할 수 없음: ","Caption for image: %0":"이미지용 캡션: %0","Caption for the image":"이미지용 캡션","Centered image":"가운데 정렬","Change image text alternative":"대체 문구 변경","Choose heading":"제목 선택",Code:"코드",Column:"열","Decrease indent":"들여쓰기 줄이기",Default:"기본","Delete column":"열 삭제","Delete row":"행 삭제","Dim grey":"진한 회색","Document colors":"문서 색깔들",Downloadable:"다운로드 가능","Dropdown toolbar":"드롭다운 툴바","Edit block":"편집 영역","Edit link":"링크 편집","Editor block content toolbar":"편집기 영역 내용 툴바","Editor contextual toolbar":"편집기 문맥 툴바","Editor editing area: %0":"편집기 편집 영역: %0","Editor toolbar":"편집기 툴바","Enter image caption":"사진 설명을 입력하세요","Font Color":"글자 색깔","Font Size":"글자 크기","Full size image":"꽉 찬 크기",Green:"초록색",Grey:"회색","Header column":"헤더 열","Header row":"헤더 행",Heading:"제목","Heading 1":"제목 1","Heading 2":"제목 2","Heading 3":"제목 3","Heading 4":"제목 4","Heading 5":"제목 5","Heading 6":"제목 6",Huge:"매우 큰","Image resize list":"사진 크기 목록","Image toolbar":"사진 툴바","image widget":"사진 위젯","In line":"줄 안에","Increase indent":"들여쓰기 늘리기","Insert code block":"코드 블럭 삽입","Insert column left":"왼쪽에 열 삽입","Insert column right":"오른쪽에 열 삽입","Insert image":"사진 삽입","Insert media":"미디어 삽입","Insert paragraph after block":"블록 뒤에 단락 삽입","Insert paragraph before block":"블록 앞에 단락 삽입","Insert row above":"위에 행 삽입","Insert row below":"아래에 행 삽입","Insert table":"테이블 삽입",Italic:"기울임꼴","Left aligned image":"왼쪽 정렬","Light blue":"연한 파랑색","Light green":"연한 초록색","Light grey":"밝은 회색",Link:"링크","Link URL":"링크 주소","Media URL":"미디어 URL","media widget":"미디어 위젯","Merge cell down":"아래 셀과 병합","Merge cell left":"왼쪽 셀과 병합","Merge cell right":"오른쪽 셀과 병합","Merge cell up":"위 셀과 병합","Merge cells":"셀 병합",Next:"다음","Numbered List":"번호 목록","Open file manager":"파일 관리자 열기","Open in a new tab":"새 탭에서 열기","Open link in new tab":"새 탭에서 링크 열기","Open media in new tab":"새 탭에서 미디어 열기",Orange:"주황색",Original:"원본",Paragraph:"문단","Paste the media URL in the input.":"미디어 URL을 입력해주세요.","Plain text":"평문","Press Enter to type after or press Shift + Enter to type before the widget":"엔터를 눌러서 위젯 뒤에 입력하거나 시프트 + 엔터를 눌러서 위젯 앞에 입력하세요",Previous:"이전",Purple:"보라색",Red:"빨간색",Redo:"다시 실행","Remove color":"색깔 제거","Resize image":"사진 크기 조절","Resize image to %0":"사진의 크기를 %0으로 조절","Resize image to the original size":"사진을 원래 크기로 돌려놓기","Rich Text Editor":"서식 있는 텍스트 편집기","Right aligned image":"오른쪽 정렬",Row:"행",Save:"저장","Select all":"전체 선택","Select column":"열 선택","Select row":"행 선택","Show more items":"더보기","Side image":"본문 옆에 배치",Small:"작은","Split cell horizontally":"가로로 셀 분할","Split cell vertically":"세로로 셀 분할","Table toolbar":"표 도구 모음","Text alternative":"대체 문구","The URL must not be empty.":"URL이 비어있을 수 없습니다.","This link has no URL":"이 주소에는 URL이 없습니다.","This media URL is not supported.":"이 미디어 URL은 지원되지 않습니다.",Tiny:"매우 작은","Tip: Paste the URL into the content to embed faster.":"팁: URL을 붙여넣으면 더 빨리 삽입할 수 있습니다.","Toggle caption off":"캡션 지우기","Toggle caption on":"캡션 넣기",Turquoise:"청록색",Undo:"실행 취소",Unlink:"링크 삭제","Upload failed":"업로드 실패","Upload in progress":"업로드 진행 중",White:"흰색","Widget toolbar":"위젯 툴바","Wrap text":"텍스트 줄 바꿈",Yellow:"노랑색"}),R.getPluralForm=function(b){return 0}})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(R,b){m.exports=b()})(self,()=>(()=>{var E={8180:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const I=k},636:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const I=k},390:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const I=k},9085:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content pre{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{background:var(--ck-color-code-block-label-background);color:#fff;font-family:var(--ck-font-face);font-size:10px;line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);right:10px;top:-1px;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-code-block/theme/codeblock.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-code-block/codeblock.css"],names:[],mappings:"AAKA,gBAGC,4BAAiC,CACjC,wBAAiC,CACjC,iBAAkB,CAHlB,aAAwB,CAOxB,aAAc,CAMd,iBAAkB,CAGlB,eAAgB,CAjBhB,WAAY,CAUZ,UAAW,CAHX,eAAgB,CAIhB,oBAaD,CALC,qBACC,gBAAiB,CAEjB,eAAgB,CADhB,SAED,CAGD,4BACC,iBAMD,CAJC,iDACC,2BAA4B,CAC5B,iBACD,CCjCD,MACC,8CACD,CAEA,iDAGC,sDAAuD,CAMvD,UAAuB,CAHvB,+BAAgC,CADhC,cAAe,CAEf,gBAAiB,CACjB,uDAAwD,CANxD,UAAW,CADX,QAAS,CAST,kBACD,CAEA,+CAEC,gBAAiB,CAEjB,iBAAkB,CADlB,eAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content pre {
	padding: 1em;
	color: hsl(0, 0%, 20.8%);
	background: hsla(0, 0%, 78%, 0.3);
	border: 1px solid hsl(0, 0%, 77%);
	border-radius: 2px;

	/* Code block are language direction–agnostic. */
	text-align: left;
	direction: ltr;

	tab-size: 4;
	white-space: pre-wrap;

	/* Don't inherit the style, e.g. when in a block quote. */
	font-style: normal;

	/* Don't let the code be squashed e.g. when in a table cell. */
	min-width: 200px;

	& code {
		background: unset;
		padding: 0;
		border-radius: 0;
	}
}

.ck.ck-editor__editable pre {
	position: relative;

	&[data-language]::after {
		content: attr(data-language);
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-code-block-label-background: hsl(0, 0%, 46%);
}

.ck.ck-editor__editable pre[data-language]::after {
	top: -1px;
	right: 10px;
	background: var(--ck-color-code-block-label-background);

	font-size: 10px;
	font-family: var(--ck-font-face);
	line-height: 16px;
	padding: var(--ck-spacing-tiny) var(--ck-spacing-medium);
	color: hsl(0, 0%, 100%);
	white-space: nowrap;
}

.ck.ck-code-block-dropdown .ck-dropdown__panel {
	/* There could be dozens of languages available. Use scroll to prevent a 10e6px dropdown. */
	max-height: 250px;
	overflow-y: auto;
	overflow-x: hidden;
}
`],sourceRoot:""}]);const I=k},3638:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},8894:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const I=k},4401:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const I=k},2585:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-button.ck-color-table__remove-color{align-items:center;display:flex;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontcolor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-font/fontcolor.css"],names:[],mappings:"AAKA,4CAEC,kBAAmB,CADnB,YAAa,CAEb,UACD,CAEA,8BACC,iBACD,CCNA,4CAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,wDACC,mDACD,CAEA,kEAEE,uCAMF,CARA,kEAME,sCAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-button.ck-color-table__remove-color {
	display: flex;
	align-items: center;
	width: 100%;
}

label.ck.ck-color-grid__label {
	font-weight: unset;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck .ck-button.ck-color-table__remove-color {
	padding: calc(var(--ck-spacing-standard) / 2 ) var(--ck-spacing-standard);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	&:not(:focus) {
		border-bottom: 1px solid var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-standard);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-standard);
		}
	}
}

`],sourceRoot:""}]);const I=k},6203:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]);const I=k},3230:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const I=k},9048:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const I=k},8662:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const I=k},1043:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const I=k},4622:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},9899:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const I=k},9825:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const I=k},5870:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const I=k},6831:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},399:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const I=k},9465:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},4827:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},9989:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},5777:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const I=k},952:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},3525:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},8085:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/inserttable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const I=k},4104:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const I=k},4777:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const I=k},5593:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},4499:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const I=k},9681:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const I=k},4923:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const I=k},3488:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},6875:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},66:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},5075:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const I=k},4547:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=k},5523:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const I=k},1174:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},6985:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=k},2751:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const I=k},8111:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},1162:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},8245:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=k},1757:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const I=k},3553:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=k},3609:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=k},1590:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const I=k},6706:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const I=k},5571:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const I=k},9948:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const I=k},6150:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const I=k},6507:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const I=k},2263:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const I=k},5137:(y,C,h)=>{h.d(C,{Z:()=>I});var x=h(4015),M=h.n(x),T=h(3645),B=h.n(T),k=B()(M());k.push([y.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const I=k},3645:y=>{y.exports=function(C){var h=[];return h.toString=function(){return this.map(function(M){var T=C(M);return M[2]?"@media ".concat(M[2]," {").concat(T,"}"):T}).join("")},h.i=function(x,M,T){typeof x=="string"&&(x=[[null,x,""]]);var B={};if(T)for(var k=0;k<this.length;k++){var I=this[k][0];I!=null&&(B[I]=!0)}for(var de=0;de<x.length;de++){var Se=[].concat(x[de]);T&&B[Se[0]]||(M&&(Se[2]?Se[2]="".concat(M," and ").concat(Se[2]):Se[2]=M),h.push(Se))}},h}},4015:y=>{function C(k,I){return B(k)||T(k,I)||x(k,I)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(k,I){if(k){if(typeof k=="string")return M(k,I);var de=Object.prototype.toString.call(k).slice(8,-1);if(de==="Object"&&k.constructor&&(de=k.constructor.name),de==="Map"||de==="Set")return Array.from(k);if(de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de))return M(k,I)}}function M(k,I){(I==null||I>k.length)&&(I=k.length);for(var de=0,Se=new Array(I);de<I;de++)Se[de]=k[de];return Se}function T(k,I){var de=k&&(typeof Symbol<"u"&&k[Symbol.iterator]||k["@@iterator"]);if(de!=null){var Se=[],Je=!0,Y=!1,Ee,Te;try{for(de=de.call(k);!(Je=(Ee=de.next()).done)&&(Se.push(Ee.value),!(I&&Se.length===I));Je=!0);}catch(_e){Y=!0,Te=_e}finally{try{!Je&&de.return!=null&&de.return()}finally{if(Y)throw Te}}return Se}}function B(k){if(Array.isArray(k))return k}y.exports=function(I){var de=C(I,4),Se=de[1],Je=de[3];if(!Je)return Se;if(typeof btoa=="function"){var Y=btoa(unescape(encodeURIComponent(JSON.stringify(Je)))),Ee="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(Y),Te="/*# ".concat(Ee," */"),_e=Je.sources.map(function(X){return"/*# sourceURL=".concat(Je.sourceRoot||"").concat(X," */")});return[Se].concat(_e).concat([Te]).join(`
`)}return[Se].join(`
`)}},3379:(y,C,h)=>{var x=function(){var re;return function(){return typeof re>"u"&&(re=Boolean(window&&document&&document.all&&!window.atob)),re}}(),M=function(){var re={};return function(fe){if(typeof re[fe]>"u"){var me=document.querySelector(fe);if(window.HTMLIFrameElement&&me instanceof window.HTMLIFrameElement)try{me=me.contentDocument.head}catch{me=null}re[fe]=me}return re[fe]}}(),T=[];function B(X){for(var re=-1,ce=0;ce<T.length;ce++)if(T[ce].identifier===X){re=ce;break}return re}function k(X,re){for(var ce={},fe=[],me=0;me<X.length;me++){var Ae=X[me],ie=re.base?Ae[0]+re.base:Ae[0],ee=ce[ie]||0,be="".concat(ie," ").concat(ee);ce[ie]=ee+1;var Fe=B(be),Ie={css:Ae[1],media:Ae[2],sourceMap:Ae[3]};Fe!==-1?(T[Fe].references++,T[Fe].updater(Ie)):T.push({identifier:be,updater:_e(Ie,re),references:1}),fe.push(be)}return fe}function I(X){var re=document.createElement("style"),ce=X.attributes||{};if(typeof ce.nonce>"u"){var fe=h.nc;fe&&(ce.nonce=fe)}if(Object.keys(ce).forEach(function(Ae){re.setAttribute(Ae,ce[Ae])}),typeof X.insert=="function")X.insert(re);else{var me=M(X.insert||"head");if(!me)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");me.appendChild(re)}return re}function de(X){if(X.parentNode===null)return!1;X.parentNode.removeChild(X)}var Se=function(){var re=[];return function(fe,me){return re[fe]=me,re.filter(Boolean).join(`
`)}}();function Je(X,re,ce,fe){var me=ce?"":fe.media?"@media ".concat(fe.media," {").concat(fe.css,"}"):fe.css;if(X.styleSheet)X.styleSheet.cssText=Se(re,me);else{var Ae=document.createTextNode(me),ie=X.childNodes;ie[re]&&X.removeChild(ie[re]),ie.length?X.insertBefore(Ae,ie[re]):X.appendChild(Ae)}}function Y(X,re,ce){var fe=ce.css,me=ce.media,Ae=ce.sourceMap;if(me?X.setAttribute("media",me):X.removeAttribute("media"),Ae&&typeof btoa<"u"&&(fe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ae))))," */")),X.styleSheet)X.styleSheet.cssText=fe;else{for(;X.firstChild;)X.removeChild(X.firstChild);X.appendChild(document.createTextNode(fe))}}var Ee=null,Te=0;function _e(X,re){var ce,fe,me;if(re.singleton){var Ae=Te++;ce=Ee||(Ee=I(re)),fe=Je.bind(null,ce,Ae,!1),me=Je.bind(null,ce,Ae,!0)}else ce=I(re),fe=Y.bind(null,ce,re),me=function(){de(ce)};return fe(X),function(ee){if(ee){if(ee.css===X.css&&ee.media===X.media&&ee.sourceMap===X.sourceMap)return;fe(X=ee)}else me()}}y.exports=function(X,re){re=re||{},!re.singleton&&typeof re.singleton!="boolean"&&(re.singleton=x()),X=X||[];var ce=k(X,re);return function(me){if(me=me||[],Object.prototype.toString.call(me)==="[object Array]"){for(var Ae=0;Ae<ce.length;Ae++){var ie=ce[Ae],ee=B(ie);T[ee].references--}for(var be=k(me,re),Fe=0;Fe<ce.length;Fe++){var Ie=ce[Fe],ye=B(Ie);T[ye].references===0&&(T[ye].updater(),T.splice(ye,1))}ce=be}}}}},R={};function b(y){var C=R[y];if(C!==void 0)return C.exports;var h=R[y]={id:y,exports:{}};return E[y](h,h.exports,b),h.exports}b.n=y=>{var C=y&&y.__esModule?()=>y.default:()=>y;return b.d(C,{a:C}),C},b.d=(y,C)=>{for(var h in C)b.o(C,h)&&!b.o(y,h)&&Object.defineProperty(y,h,{enumerable:!0,get:C[h]})},b.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),b.o=(y,C)=>Object.prototype.hasOwnProperty.call(y,C),b.nc=void 0;var L={};return(()=>{b.d(L,{default:()=>$P});function y({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!e())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;t()})}function C(o){const e=o;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function h({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}function x({keystrokeHandler:o,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:i}){const r=typeof n=="number"?()=>n:n;o.set("arrowright",s((l,d)=>i==="rtl"?c(l,d.length):a(l,d.length))),o.set("arrowleft",s((l,d)=>i==="rtl"?a(l,d.length):c(l,d.length))),o.set("arrowup",s((l,d)=>{let u=l-r();return u<0&&(u=l+r()*Math.floor(d.length/r()),u>d.length-1&&(u-=r())),u})),o.set("arrowdown",s((l,d)=>{let u=l+r();return u>d.length-1&&(u=l%r()),u}));function s(l){return d=>{const u=t.find(D=>D.element===e.focusedElement),p=t.getIndex(u),A=l(p,t);t.get(A).focus(),d.stopPropagation(),d.preventDefault()}}function a(l,d){return l===d-1?0:l+1}function c(l,d){return l===0?d-1:l-1}}function M(){try{return navigator.userAgent.toLowerCase()}catch{return""}}const T=M(),k={isMac:I(T),isWindows:de(T),isGecko:Se(T),isSafari:Je(T),isiOS:Y(T),isAndroid:Ee(T),isBlink:Te(T),features:{isRegExpUnicodePropertySupported:_e()}};function I(o){return o.indexOf("macintosh")>-1}function de(o){return o.indexOf("windows")>-1}function Se(o){return!!o.match(/gecko\/\d+/)}function Je(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}function Y(o){return!!o.match(/iphone|ipad/i)||I(o)&&navigator.maxTouchPoints>0}function Ee(o){return o.indexOf("android")>-1}function Te(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}function _e(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}function X(o,e,t,n){t=t||function(c,l){return c===l};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(e)?e:Array.prototype.slice.call(e),s=re(i,r,t);return n?Ae(s,r.length):me(r,s)}function re(o,e,t){const n=ce(o,e,t);if(n===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const i=fe(o,n),r=fe(e,n),s=ce(i,r,t),a=o.length-s,c=e.length-s;return{firstIndex:n,lastIndexOld:a,lastIndexNew:c}}function ce(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function fe(o,e){return o.slice(e).reverse()}function me(o,e){const t=[],{firstIndex:n,lastIndexOld:i,lastIndexNew:r}=e;return r-n>0&&t.push({index:n,type:"insert",values:o.slice(n,r)}),i-n>0&&t.push({index:n+(r-n),type:"delete",howMany:i-n}),t}function Ae(o,e){const{firstIndex:t,lastIndexOld:n,lastIndexNew:i}=o;if(t===-1)return Array(e).fill("equal");let r=[];return t>0&&(r=r.concat(Array(t).fill("equal"))),i-t>0&&(r=r.concat(Array(i-t).fill("insert"))),n-t>0&&(r=r.concat(Array(n-t).fill("delete"))),i<e&&(r=r.concat(Array(e-i).fill("equal"))),r}function ie(o,e,t){t=t||function(N,j){return N===j};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return ie.fastDiff(o,e,t,!0);let r,s;if(i<n){const N=o;o=e,e=N,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=e.length,l=c-a,d={},u={};function p(N){const j=(u[N-1]!==void 0?u[N-1]:-1)+1,q=u[N+1]!==void 0?u[N+1]:-1,G=j>q?-1:1;d[N+G]&&(d[N]=d[N+G].slice(0)),d[N]||(d[N]=[]),d[N].push(j>q?r:s);let ve=Math.max(j,q),$e=ve-N;for(;$e<a&&ve<c&&t(o[$e],e[ve]);)$e++,ve++,d[N].push("equal");return ve}let A=0,D;do{for(D=-A;D<l;D++)u[D]=p(D);for(D=l+A;D>l;D--)u[D]=p(D);u[l]=p(l),A++}while(u[l]!==c);return d[l].slice(1)}ie.fastDiff=X;function ee(o,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertySymbols(t);n.concat(i).forEach(r=>{if(r in o.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const s=Object.getOwnPropertyDescriptor(t,r);s.enumerable=!1,Object.defineProperty(o.prototype,r,s)})})}function be(){return function o(){o.called=!0}}const Fe=be;class Ie{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=Fe(),this.off=Fe()}}const ye=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function lt(){const o=Math.random()*4294967296>>>0,e=Math.random()*4294967296>>>0,t=Math.random()*4294967296>>>0,n=Math.random()*4294967296>>>0;return"e"+ye[o>>0&255]+ye[o>>8&255]+ye[o>>16&255]+ye[o>>24&255]+ye[e>>0&255]+ye[e>>8&255]+ye[e>>16&255]+ye[e>>24&255]+ye[t>>0&255]+ye[t>>8&255]+ye[t>>16&255]+ye[t>>24&255]+ye[n>>0&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]}const At={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function ao(o,e){const t=At.get(e.priority);for(let n=0;n<o.length;n++)if(At.get(o[n].priority)<t){o.splice(n,0,e);return}o.push(e)}const Ho="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class _ extends Error{constructor(e,t,n){super(cn(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new _(e.message,t);throw n.stack=e.stack,n}}function Ue(o,e){console.warn(...co(o,e))}function Uo(o,e){console.error(...co(o,e))}function vn(o){return`
Read more: ${Ho}#error-${o}`}function cn(o,e){const t=new WeakSet,i=e?` ${JSON.stringify(e,(s,a)=>{if(typeof a=="object"&&a!==null){if(t.has(a))return`[object ${a.constructor.name}]`;t.add(a)}return a})}`:"",r=vn(o);return o+i+r}function co(o,e){const t=vn(o);return e?[o,e,t]:[o,t]}const Ei="36.0.1",Wo=typeof window=="object"?window:b.g;if(Wo.CKEDITOR_VERSION)throw new _("ckeditor-duplicated-modules",null);Wo.CKEDITOR_VERSION=Ei;const Zt=Symbol("listeningTo"),On=Symbol("emitterId"),ft=Symbol("delegations"),yn=v(Object);function v(o){if(!o)return yn;class e extends o{on(n,i,r){this.listenTo(this,n,i,r)}once(n,i,r){let s=!1;const a=(c,...l)=>{s||(s=!0,c.off(),i.call(this,c,...l))};this.listenTo(this,n,a,r)}off(n,i){this.stopListening(this,n,i)}listenTo(n,i,r,s={}){let a,c;this[Zt]||(this[Zt]={});const l=this[Zt];$(n)||F(n);const d=$(n);(a=l[d])||(a=l[d]={emitter:n,callbacks:{}}),(c=a.callbacks[i])||(c=a.callbacks[i]=[]),c.push(r),lo(this,n,i,r,s)}stopListening(n,i,r){const s=this[Zt];let a=n&&$(n);const c=s&&a?s[a]:void 0,l=c&&i?c.callbacks[i]:void 0;if(!(!s||n&&!c||i&&!l))if(r)xn(this,n,i,r),l.indexOf(r)!==-1&&(l.length===1?delete c.callbacks[i]:xn(this,n,i,r));else if(l){for(;r=l.pop();)xn(this,n,i,r);delete c.callbacks[i]}else if(c){for(i in c.callbacks)this.stopListening(n,i);delete s[a]}else{for(a in s)this.stopListening(s[a].emitter);delete this[Zt]}}fire(n,...i){try{const r=n instanceof Ie?n:new Ie(this,n),s=r.name;let a=Ve(this,s);if(r.path.push(this),a){const l=[r,...i];a=Array.from(a);for(let d=0;d<a.length&&(a[d].callback.apply(this,l),r.off.called&&(delete r.off.called,this._removeEventListener(s,a[d].callback)),!r.stop.called);d++);}const c=this[ft];if(c){const l=c.get(s),d=c.get("*");l&&Vt(l,r,i),d&&Vt(d,r,i)}return r.return}catch(r){_.rethrowUnexpectedError(r,this)}}delegate(...n){return{to:(i,r)=>{this[ft]||(this[ft]=new Map),n.forEach(s=>{const a=this[ft].get(s);a?a.set(i,r):this[ft].set(s,new Map([[i,r]]))})}}}stopDelegating(n,i){if(this[ft])if(!n)this[ft].clear();else if(!i)this[ft].delete(n);else{const r=this[ft].get(n);r&&r.delete(i)}}_addEventListener(n,i,r){te(this,n);const s=We(this,n),a=At.get(r.priority),c={callback:i,priority:a};for(const l of s)ao(l,c)}_removeEventListener(n,i){const r=We(this,n);for(const s of r)for(let a=0;a<s.length;a++)s[a].callback==i&&(s.splice(a,1),a--)}}return e}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{v[o]=yn.prototype[o]});function O(o,e){const t=o[Zt];return t&&t[e]?t[e].emitter:null}function F(o,e){o[On]||(o[On]=e||lt())}function $(o){return o[On]}function Q(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function U(){return{callbacks:[],childEvents:[]}}function te(o,e){const t=Q(o);if(t[e])return;let n=e,i=null;const r=[];for(;n!==""&&!t[n];)t[n]=U(),r.push(t[n]),i&&t[n].childEvents.push(i),i=n,n=n.substr(0,n.lastIndexOf(":"));if(n!==""){for(const s of r)s.callbacks=t[n].callbacks.slice();t[n].childEvents.push(i)}}function We(o,e){const t=Q(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const r=We(o,t.childEvents[i]);n=n.concat(r)}return n}function Ve(o,e){let t;return!o._events||!(t=o._events[e])||!t.callbacks.length?e.indexOf(":")>-1?Ve(o,e.substr(0,e.lastIndexOf(":"))):null:t.callbacks}function Vt(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const r=new Ie(e.source,i);r.path=[...e.path],n.fire(r,...t)}}function lo(o,e,t,n,i){e._addEventListener?e._addEventListener(t,n,i):o._addEventListener.call(e,t,n,i)}function xn(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}function Di(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}const Me=Di,Rn=Symbol("observableProperties"),En=Symbol("boundObservables"),qo=Symbol("boundProperties"),jn=Symbol("decoratedMethods"),ln=Symbol("decoratedOriginal"),Fn=we(v());function we(o){if(!o)return Fn;class e extends o{set(n,i){if(Me(n)){Object.keys(n).forEach(s=>{this.set(s,n[s])},this);return}Si(this);const r=this[Rn];if(n in this&&!r.has(n))throw new _("observable-set-cannot-override",this);Object.defineProperty(this,n,{enumerable:!0,configurable:!0,get(){return r.get(n)},set(s){const a=r.get(n);let c=this.fire(`set:${n}`,n,s,a);c===void 0&&(c=s),(a!==c||!r.has(n))&&(r.set(n,c),this.fire(`change:${n}`,n,c,a))}}),this[n]=i}bind(...n){if(!n.length||!wr(n))throw new _("observable-bind-wrong-properties",this);if(new Set(n).size!==n.length)throw new _("observable-bind-duplicate-properties",this);Si(this);const i=this[qo];n.forEach(s=>{if(i.has(s))throw new _("observable-bind-rebind",this)});const r=new Map;return n.forEach(s=>{const a={property:s,to:[]};i.set(s,a),r.set(s,a)}),{to:la,toMany:da,_observable:this,_bindProperties:n,_to:[],_bindings:r}}unbind(...n){if(!this[Rn])return;const i=this[qo],r=this[En];if(n.length){if(!wr(n))throw new _("observable-unbind-wrong-properties",this);n.forEach(s=>{const a=i.get(s);a&&(a.to.forEach(([c,l])=>{const d=r.get(c),u=d[l];u.delete(a),u.size||delete d[l],Object.keys(d).length||(r.delete(c),this.stopListening(c,"change"))}),i.delete(s))})}else r.forEach((s,a)=>{this.stopListening(a,"change")}),r.clear(),i.clear()}decorate(n){Si(this);const i=this[n];if(!i)throw new _("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:n});this.on(n,(r,s)=>{r.return=i.apply(this,s)}),this[n]=function(...r){return this.fire(n,r)},this[n][ln]=i,this[jn]||(this[jn]=[]),this[jn].push(n)}stopListening(n,i,r){if(!n&&this[jn]){for(const s of this[jn])this[s]=this[s][ln];delete this[jn]}super.stopListening(n,i,r)}}return e}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{we[o]=Fn.prototype[o]});function Si(o){o[Rn]||(Object.defineProperty(o,Rn,{value:new Map}),Object.defineProperty(o,En,{value:new Map}),Object.defineProperty(o,qo,{value:new Map}))}function la(...o){const e=ha(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new _("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new _("observable-bind-to-extra-callback",this);e.to.forEach(i=>{if(i.properties.length&&i.properties.length!==n)throw new _("observable-bind-to-properties-length",this);i.properties.length||(i.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),ga(this._observable,this._to),Vn(this),this._bindProperties.forEach(i=>{Ti(this._observable,i)})}function da(o,e,t){if(this._bindings.size>1)throw new _("observable-bind-to-many-not-one-binding",this);this.to(...ua(o,e),t)}function ua(o,e){const t=o.map(n=>[n,e]);return Array.prototype.concat.apply([],t)}function wr(o){return o.every(e=>typeof e=="string")}function ha(...o){if(!o.length)throw new _("observable-bind-to-parse-error",null);const e={to:[]};let t;return typeof o[o.length-1]=="function"&&(e.callback=o.pop()),o.forEach(n=>{if(typeof n=="string")t.properties.push(n);else if(typeof n=="object")t={observable:n,properties:[]},e.to.push(t);else throw new _("observable-bind-to-parse-error",null)}),e}function fa(o,e,t,n){const i=o[En],r=i.get(t),s=r||{};s[n]||(s[n]=new Set),s[n].add(e),r||i.set(t,s)}function Vn(o){let e;o._bindings.forEach((t,n)=>{o._to.forEach(i=>{e=i.properties[t.callback?0:o._bindProperties.indexOf(n)],t.to.push([i.observable,e]),fa(o._observable,t,i.observable,e)})})}function Ti(o,e){const n=o[qo].get(e);let i;n.callback?i=n.callback.apply(o,n.to.map(r=>r[0][r[1]])):(i=n.to[0],i=i[0][i[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=i:o.set(e,i)}function ga(o,e){e.forEach(t=>{const n=o[En];let i;n.get(t.observable)||o.listenTo(t.observable,"change",(r,s)=>{i=n.get(t.observable)[s],i&&i.forEach(a=>{Ti(o,a.property)})})})}class ma{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Hn(o){let e=0;for(const t of o)e++;return e}function gt(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function Et(o){return!!(o&&o[Symbol.iterator])}var pa=typeof so=="object"&&so&&so.Object===Object&&so;const _r=pa;var Un=typeof self=="object"&&self&&self.Object===Object&&self,ka=_r||Un||Function("return this")();const Lt=ka;var Wn=Lt.Symbol;const Ht=Wn;var Ar=Object.prototype,Cr=Ar.hasOwnProperty,vr=Ar.toString,uo=Ht?Ht.toStringTag:void 0;function yr(o){var e=Cr.call(o,uo),t=o[uo];try{o[uo]=void 0;var n=!0}catch{}var i=vr.call(o);return n&&(e?o[uo]=t:delete o[uo]),i}const Go=yr;var ba=Object.prototype,xr=ba.toString;function Er(o){return xr.call(o)}const wa=Er;var _a="[object Null]",Aa="[object Undefined]",$o=Ht?Ht.toStringTag:void 0;function Ca(o){return o==null?o===void 0?Aa:_a:$o&&$o in Object(o)?Go(o):wa(o)}const Jt=Ca;var Dr=Array.isArray;const mt=Dr;function Sr(o){return o!=null&&typeof o=="object"}const Mt=Sr;var va="[object String]";function Tr(o){return typeof o=="string"||!mt(o)&&Mt(o)&&Jt(o)==va}const ze=Tr;function Ir(o,e,t={},n=[]){const i=t&&t.xmlns,r=i?o.createElementNS(i,e):o.createElement(e);for(const s in t)r.setAttribute(s,t[s]);(ze(n)||!Et(n))&&(n=[n]);for(let s of n)ze(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}function Ii(o,e){return function(t){return o(e(t))}}const Mi=Ii;var ho=Mi(Object.getPrototypeOf,Object);const fo=ho;var qn="[object Object]",Mr=Function.prototype,ya=Object.prototype,Br=Mr.toString,Nr=ya.hasOwnProperty,xa=Br.call(Object);function Bi(o){if(!Mt(o)||Jt(o)!=qn)return!1;var e=fo(o);if(e===null)return!0;var t=Nr.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Br.call(t)==xa}const Ct=Bi;function Ea(){this.__data__=[],this.size=0}const Da=Ea;function Sa(o,e){return o===e||o!==o&&e!==e}const Gn=Sa;function Ni(o,e){for(var t=o.length;t--;)if(Gn(o[t][0],e))return t;return-1}const Ko=Ni;var Ta=Array.prototype,Ia=Ta.splice;function Ma(o){var e=this.__data__,t=Ko(e,o);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():Ia.call(e,t,1),--this.size,!0}const Pi=Ma;function Ba(o){var e=this.__data__,t=Ko(e,o);return t<0?void 0:e[t][1]}const Pr=Ba;function zr(o){return Ko(this.__data__,o)>-1}const Lr=zr;function Or(o,e){var t=this.__data__,n=Ko(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this}const Na=Or;function $n(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}$n.prototype.clear=Da,$n.prototype.delete=Pi,$n.prototype.get=Pr,$n.prototype.has=Lr,$n.prototype.set=Na;const Yo=$n;function Rr(){this.__data__=new Yo,this.size=0}const Pa=Rr;function jr(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t}const zi=jr;function za(o){return this.__data__.get(o)}const Fr=za;function Li(o){return this.__data__.has(o)}const Vr=Li;var La="[object AsyncFunction]",Hr="[object Function]",Oa="[object GeneratorFunction]",Ra="[object Proxy]";function Oi(o){if(!Me(o))return!1;var e=Jt(o);return e==Hr||e==Oa||e==La||e==Ra}const Xt=Oi;var Ri=Lt["__core-js_shared__"];const go=Ri;var ji=function(){var o=/[^.]+$/.exec(go&&go.keys&&go.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();function Ur(o){return!!ji&&ji in o}const Wr=Ur;var qr=Function.prototype,Gr=qr.toString;function ja(o){if(o!=null){try{return Gr.call(o)}catch{}try{return o+""}catch{}}return""}const Dn=ja;var Fa=/[\\^$.*+?()[\]{}|]/g,Va=/^\[object .+?Constructor\]$/,Ha=Function.prototype,Sn=Object.prototype,Fi=Ha.toString,Ua=Sn.hasOwnProperty,Wa=RegExp("^"+Fi.call(Ua).replace(Fa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $r(o){if(!Me(o)||Wr(o))return!1;var e=Xt(o)?Wa:Va;return e.test(Dn(o))}const Vi=$r;function qa(o,e){return o==null?void 0:o[e]}const Ga=qa;function $a(o,e){var t=Ga(o,e);return Vi(t)?t:void 0}const dn=$a;var Kr=dn(Lt,"Map");const mo=Kr;var Ka=dn(Object,"create");const po=Ka;function Yr(){this.__data__=po?po(null):{},this.size=0}const Ya=Yr;function Qa(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e}const Za=Qa;var Qr="__lodash_hash_undefined__",Ja=Object.prototype,Xa=Ja.hasOwnProperty;function Zr(o){var e=this.__data__;if(po){var t=e[o];return t===Qr?void 0:t}return Xa.call(e,o)?e[o]:void 0}const ec=Zr;var Jr=Object.prototype,Xr=Jr.hasOwnProperty;function es(o){var e=this.__data__;return po?e[o]!==void 0:Xr.call(e,o)}const Le=es;var tc="__lodash_hash_undefined__";function nc(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=po&&e===void 0?tc:e,this}const oc=nc;function Kn(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Kn.prototype.clear=Ya,Kn.prototype.delete=Za,Kn.prototype.get=ec,Kn.prototype.has=Le,Kn.prototype.set=oc;const Hi=Kn;function ic(){this.size=0,this.__data__={hash:new Hi,map:new(mo||Yo),string:new Hi}}const rc=ic;function sc(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null}const ac=sc;function Ui(o,e){var t=o.__data__;return ac(e)?t[typeof e=="string"?"string":"hash"]:t.map}const Qo=Ui;function ts(o){var e=Qo(this,o).delete(o);return this.size-=e?1:0,e}const ns=ts;function os(o){return Qo(this,o).get(o)}const pt=os;function ko(o){return Qo(this,o).has(o)}const is=ko;function cc(o,e){var t=Qo(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this}const rs=cc;function Tn(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Tn.prototype.clear=rc,Tn.prototype.delete=ns,Tn.prototype.get=pt,Tn.prototype.has=is,Tn.prototype.set=rs;const Yn=Tn;var Wi=200;function In(o,e){var t=this.__data__;if(t instanceof Yo){var n=t.__data__;if(!mo||n.length<Wi-1)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new Yn(n)}return t.set(o,e),this.size=t.size,this}const lc=In;function f(o){var e=this.__data__=new Yo(o);this.size=e.size}f.prototype.clear=Pa,f.prototype.delete=zi,f.prototype.get=Fr,f.prototype.has=Vr,f.prototype.set=lc;const g=f;function w(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o}const P=w;var Z=function(){try{var o=dn(Object,"defineProperty");return o({},"",{}),o}catch{}}();const se=Z;function ue(o,e,t){e=="__proto__"&&se?se(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t}const he=ue;var Xe=Object.prototype,Qe=Xe.hasOwnProperty;function Zo(o,e,t){var n=o[e];(!(Qe.call(o,e)&&Gn(n,t))||t===void 0&&!(e in o))&&he(o,e,t)}const en=Zo;function Ut(o,e,t,n){var i=!t;t||(t={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=n?n(t[a],o[a],a,t,o):void 0;c===void 0&&(c=o[a]),i?he(t,a,c):en(t,a,c)}return t}const Ot=Ut;function Jo(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n}const bo=Jo;var Dt="[object Arguments]";function tn(o){return Mt(o)&&Jt(o)==Dt}const Xo=tn;var ut=Object.prototype,nn=ut.hasOwnProperty,ei=ut.propertyIsEnumerable,Mw=Xo(function(){return arguments}())?Xo:function(o){return Mt(o)&&nn.call(o,"callee")&&!ei.call(o,"callee")};const dc=Mw;function Bw(){return!1}const Nw=Bw;var Tu=S&&!S.nodeType&&S,Iu=Tu&&!0&&m&&!m.nodeType&&m,Pw=Iu&&Iu.exports===Tu,Mu=Pw?Lt.Buffer:void 0,zw=Mu?Mu.isBuffer:void 0,Lw=zw||Nw;const qi=Lw;var Ow=9007199254740991,Rw=/^(?:0|[1-9]\d*)$/;function jw(o,e){var t=typeof o;return e=e??Ow,!!e&&(t=="number"||t!="symbol"&&Rw.test(o))&&o>-1&&o%1==0&&o<e}const uc=jw;var Fw=9007199254740991;function Vw(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Fw}const Bu=Vw;var Hw="[object Arguments]",Uw="[object Array]",Ww="[object Boolean]",qw="[object Date]",Gw="[object Error]",$w="[object Function]",Kw="[object Map]",Yw="[object Number]",Qw="[object Object]",Zw="[object RegExp]",Jw="[object Set]",Xw="[object String]",e_="[object WeakMap]",t_="[object ArrayBuffer]",n_="[object DataView]",o_="[object Float32Array]",i_="[object Float64Array]",r_="[object Int8Array]",s_="[object Int16Array]",a_="[object Int32Array]",c_="[object Uint8Array]",l_="[object Uint8ClampedArray]",d_="[object Uint16Array]",u_="[object Uint32Array]",Ke={};Ke[o_]=Ke[i_]=Ke[r_]=Ke[s_]=Ke[a_]=Ke[c_]=Ke[l_]=Ke[d_]=Ke[u_]=!0,Ke[Hw]=Ke[Uw]=Ke[t_]=Ke[Ww]=Ke[n_]=Ke[qw]=Ke[Gw]=Ke[$w]=Ke[Kw]=Ke[Yw]=Ke[Qw]=Ke[Zw]=Ke[Jw]=Ke[Xw]=Ke[e_]=!1;function h_(o){return Mt(o)&&Bu(o.length)&&!!Ke[Jt(o)]}const f_=h_;function g_(o){return function(e){return o(e)}}const hc=g_;var Nu=S&&!S.nodeType&&S,Gi=Nu&&!0&&m&&!m.nodeType&&m,m_=Gi&&Gi.exports===Nu,fc=m_&&_r.process,p_=function(){try{var o=Gi&&Gi.require&&Gi.require("util").types;return o||fc&&fc.binding&&fc.binding("util")}catch{}}();const ti=p_;var Pu=ti&&ti.isTypedArray,k_=Pu?hc(Pu):f_;const gc=k_;var b_=Object.prototype,w_=b_.hasOwnProperty;function __(o,e){var t=mt(o),n=!t&&dc(o),i=!t&&!n&&qi(o),r=!t&&!n&&!i&&gc(o),s=t||n||i||r,a=s?bo(o.length,String):[],c=a.length;for(var l in o)(e||w_.call(o,l))&&!(s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||uc(l,c)))&&a.push(l);return a}const zu=__;var A_=Object.prototype;function C_(o){var e=o&&o.constructor,t=typeof e=="function"&&e.prototype||A_;return o===t}const mc=C_;var v_=Mi(Object.keys,Object);const y_=v_;var x_=Object.prototype,E_=x_.hasOwnProperty;function D_(o){if(!mc(o))return y_(o);var e=[];for(var t in Object(o))E_.call(o,t)&&t!="constructor"&&e.push(t);return e}const S_=D_;function T_(o){return o!=null&&Bu(o.length)&&!Xt(o)}const ss=T_;function I_(o){return ss(o)?zu(o):S_(o)}const pc=I_;function M_(o,e){return o&&Ot(e,pc(e),o)}const B_=M_;function N_(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e}const P_=N_;var z_=Object.prototype,L_=z_.hasOwnProperty;function O_(o){if(!Me(o))return P_(o);var e=mc(o),t=[];for(var n in o)n=="constructor"&&(e||!L_.call(o,n))||t.push(n);return t}const R_=O_;function j_(o){return ss(o)?zu(o,!0):R_(o)}const ni=j_;function F_(o,e){return o&&Ot(e,ni(e),o)}const V_=F_;var Lu=S&&!S.nodeType&&S,Ou=Lu&&!0&&m&&!m.nodeType&&m,H_=Ou&&Ou.exports===Lu,Ru=H_?Lt.Buffer:void 0,ju=Ru?Ru.allocUnsafe:void 0;function U_(o,e){if(e)return o.slice();var t=o.length,n=ju?ju(t):new o.constructor(t);return o.copy(n),n}const Fu=U_;function W_(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e}const Vu=W_;function q_(o,e){for(var t=-1,n=o==null?0:o.length,i=0,r=[];++t<n;){var s=o[t];e(s,t,o)&&(r[i++]=s)}return r}const G_=q_;function $_(){return[]}const Hu=$_;var K_=Object.prototype,Y_=K_.propertyIsEnumerable,Uu=Object.getOwnPropertySymbols,Q_=Uu?function(o){return o==null?[]:(o=Object(o),G_(Uu(o),function(e){return Y_.call(o,e)}))}:Hu;const kc=Q_;function Z_(o,e){return Ot(o,kc(o),e)}const J_=Z_;function X_(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o}const Wu=X_;var eA=Object.getOwnPropertySymbols,tA=eA?function(o){for(var e=[];o;)Wu(e,kc(o)),o=fo(o);return e}:Hu;const qu=tA;function nA(o,e){return Ot(o,qu(o),e)}const oA=nA;function iA(o,e,t){var n=e(o);return mt(o)?n:Wu(n,t(o))}const Gu=iA;function rA(o){return Gu(o,pc,kc)}const bc=rA;function sA(o){return Gu(o,ni,qu)}const aA=sA;var cA=dn(Lt,"DataView");const wc=cA;var lA=dn(Lt,"Promise");const _c=lA;var dA=dn(Lt,"Set");const Ac=dA;var uA=dn(Lt,"WeakMap");const Cc=uA;var $u="[object Map]",hA="[object Object]",Ku="[object Promise]",Yu="[object Set]",Qu="[object WeakMap]",Zu="[object DataView]",fA=Dn(wc),gA=Dn(mo),mA=Dn(_c),pA=Dn(Ac),kA=Dn(Cc),wo=Jt;(wc&&wo(new wc(new ArrayBuffer(1)))!=Zu||mo&&wo(new mo)!=$u||_c&&wo(_c.resolve())!=Ku||Ac&&wo(new Ac)!=Yu||Cc&&wo(new Cc)!=Qu)&&(wo=function(o){var e=Jt(o),t=e==hA?o.constructor:void 0,n=t?Dn(t):"";if(n)switch(n){case fA:return Zu;case gA:return $u;case mA:return Ku;case pA:return Yu;case kA:return Qu}return e});const $i=wo;var bA=Object.prototype,wA=bA.hasOwnProperty;function _A(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&wA.call(o,"index")&&(t.index=o.index,t.input=o.input),t}const AA=_A;var CA=Lt.Uint8Array;const as=CA;function vA(o){var e=new o.constructor(o.byteLength);return new as(e).set(new as(o)),e}const vc=vA;function yA(o,e){var t=e?vc(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)}const xA=yA;var EA=/\w*$/;function DA(o){var e=new o.constructor(o.source,EA.exec(o));return e.lastIndex=o.lastIndex,e}const SA=DA;var Ju=Ht?Ht.prototype:void 0,Xu=Ju?Ju.valueOf:void 0;function TA(o){return Xu?Object(Xu.call(o)):{}}const IA=TA;function MA(o,e){var t=e?vc(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)}const eh=MA;var BA="[object Boolean]",NA="[object Date]",PA="[object Map]",zA="[object Number]",LA="[object RegExp]",OA="[object Set]",RA="[object String]",jA="[object Symbol]",FA="[object ArrayBuffer]",VA="[object DataView]",HA="[object Float32Array]",UA="[object Float64Array]",WA="[object Int8Array]",qA="[object Int16Array]",GA="[object Int32Array]",$A="[object Uint8Array]",KA="[object Uint8ClampedArray]",YA="[object Uint16Array]",QA="[object Uint32Array]";function ZA(o,e,t){var n=o.constructor;switch(e){case FA:return vc(o);case BA:case NA:return new n(+o);case VA:return xA(o,t);case HA:case UA:case WA:case qA:case GA:case $A:case KA:case YA:case QA:return eh(o,t);case PA:return new n;case zA:case RA:return new n(o);case LA:return SA(o);case OA:return new n;case jA:return IA(o)}}const JA=ZA;var th=Object.create,XA=function(){function o(){}return function(e){if(!Me(e))return{};if(th)return th(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}();const eC=XA;function tC(o){return typeof o.constructor=="function"&&!mc(o)?eC(fo(o)):{}}const nh=tC;var nC="[object Map]";function oC(o){return Mt(o)&&$i(o)==nC}const iC=oC;var oh=ti&&ti.isMap,rC=oh?hc(oh):iC;const sC=rC;var aC="[object Set]";function cC(o){return Mt(o)&&$i(o)==aC}const lC=cC;var ih=ti&&ti.isSet,dC=ih?hc(ih):lC;const uC=dC;var hC=1,fC=2,gC=4,rh="[object Arguments]",mC="[object Array]",pC="[object Boolean]",kC="[object Date]",bC="[object Error]",sh="[object Function]",wC="[object GeneratorFunction]",_C="[object Map]",AC="[object Number]",ah="[object Object]",CC="[object RegExp]",vC="[object Set]",yC="[object String]",xC="[object Symbol]",EC="[object WeakMap]",DC="[object ArrayBuffer]",SC="[object DataView]",TC="[object Float32Array]",IC="[object Float64Array]",MC="[object Int8Array]",BC="[object Int16Array]",NC="[object Int32Array]",PC="[object Uint8Array]",zC="[object Uint8ClampedArray]",LC="[object Uint16Array]",OC="[object Uint32Array]",qe={};qe[rh]=qe[mC]=qe[DC]=qe[SC]=qe[pC]=qe[kC]=qe[TC]=qe[IC]=qe[MC]=qe[BC]=qe[NC]=qe[_C]=qe[AC]=qe[ah]=qe[CC]=qe[vC]=qe[yC]=qe[xC]=qe[PC]=qe[zC]=qe[LC]=qe[OC]=!0,qe[bC]=qe[sh]=qe[EC]=!1;function cs(o,e,t,n,i,r){var s,a=e&hC,c=e&fC,l=e&gC;if(t&&(s=i?t(o,n,i,r):t(o)),s!==void 0)return s;if(!Me(o))return o;var d=mt(o);if(d){if(s=AA(o),!a)return Vu(o,s)}else{var u=$i(o),p=u==sh||u==wC;if(qi(o))return Fu(o,a);if(u==ah||u==rh||p&&!i){if(s=c||p?{}:nh(o),!a)return c?oA(o,V_(s,o)):J_(o,B_(s,o))}else{if(!qe[u])return i?o:{};s=JA(o,u,a)}}r||(r=new g);var A=r.get(o);if(A)return A;r.set(o,s),uC(o)?o.forEach(function(j){s.add(cs(j,e,t,j,o,r))}):sC(o)&&o.forEach(function(j,q){s.set(q,cs(j,e,t,q,o,r))});var D=l?c?aA:bc:c?ni:pc,N=d?void 0:D(o);return P(N||o,function(j,q){N&&(q=j,j=o[q]),en(s,q,cs(j,e,t,q,o,r))}),s}const yc=cs;var RC=1,jC=4;function FC(o,e){return e=typeof e=="function"?e:void 0,yc(o,RC|jC,e)}const ch=FC;function VC(o){return Mt(o)&&o.nodeType===1&&!Ct(o)}const Ki=VC;class lh{constructor(e,t){this._config={},t&&this.define(dh(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(Ct(t)){this._setObjectToTarget(e,t,i);return}const r=t.split(".");t=r.pop();for(const s of r)Ct(e[s])||(e[s]={}),e=e[s];if(Ct(n)){Ct(e[t])||(e[t]={}),e=e[t],this._setObjectToTarget(e,n,i);return}i&&typeof e[t]<"u"||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!Ct(e[i])){e=null;break}e=e[i]}return e?dh(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function dh(o){return ch(o,HC)}function HC(o){return Ki(o)?o:void 0}function Qn(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function ls(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const uh=Zn(v());function Zn(o){if(!o)return uh;class e extends o{listenTo(n,i,r,s={}){if(Qn(n)||ls(n)){const a={capture:!!s.useCapture,passive:!!s.usePassive},c=this._getProxyEmitter(n,a)||new UC(n,a);this.listenTo(c,i,r,s)}else super.listenTo(n,i,r,s)}stopListening(n,i,r){if(Qn(n)||ls(n)){const s=this._getAllProxyEmitters(n);for(const a of s)this.stopListening(a,i,r)}else super.stopListening(n,i,r)}_getProxyEmitter(n,i){return O(this,hh(n,i))}_getAllProxyEmitters(n){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(i=>this._getProxyEmitter(n,i)).filter(i=>!!i)}}return e}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Zn[o]=uh.prototype[o]});class UC extends v(){constructor(e,t){super(),F(this,hh(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;this._domListeners[e]&&(!(t=this._events[e])||!t.callbacks.length)&&this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),v().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){v().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function WC(o){return o["data-ck-expando"]||(o["data-ck-expando"]=lt())}function hh(o,e){let t=WC(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let xc;try{xc={window,document}}catch{xc={window:{},document:{}}}const pe=xc;function fh(o){const e=[];let t=o;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function qC(o){return o instanceof HTMLTextAreaElement?o.value:o.innerHTML}function ot(o){return Object.prototype.toString.call(o)=="[object Text]"}function ds(o){return Object.prototype.toString.apply(o)=="[object Range]"}function gh(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const mh=["top","right","bottom","left","width","height"];class He{constructor(e){const t=ds(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),kh(e)||t)if(t){const n=He.getDomRangeRects(e);us(this,He.getBoundingRect(n))}else us(this,e.getBoundingClientRect());else if(ls(e)){const{innerWidth:n,innerHeight:i}=e;us(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else us(this,e)}clone(){return new He(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new He(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!ph(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!ph(n);){const i=new He(n),r=t.getIntersection(i);if(r)r.getArea()<t.getArea()&&(t=r);else return null;n=n.parentNode}}return t}isEqual(e){for(const t of mh)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!!(t&&t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(ls(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const r=gh(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new He(i));else{let i=e.startContainer;ot(i)&&(i=i.parentNode);const r=new He(i.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new He(t))}}function us(o,e){for(const t of mh)o[t]=e[t]}function ph(o){return kh(o)?o===o.ownerDocument.body:!1}function kh(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}class Ye{constructor(e,t){Ye._observerInstance||Ye._createObserver(),this._element=e,this._callback=t,Ye._addElementCallback(e,t),Ye._observerInstance.observe(e)}destroy(){Ye._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Ye._elementCallbacks||(Ye._elementCallbacks=new Map);let n=Ye._elementCallbacks.get(e);n||(n=new Set,Ye._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=Ye._getElementCallbacks(e);n&&(n.delete(t),n.size||(Ye._elementCallbacks.delete(e),Ye._observerInstance.unobserve(e))),Ye._elementCallbacks&&!Ye._elementCallbacks.size&&(Ye._observerInstance=null,Ye._elementCallbacks=null)}static _getElementCallbacks(e){return Ye._elementCallbacks?Ye._elementCallbacks.get(e):null}static _createObserver(){Ye._observerInstance=new pe.window.ResizeObserver(e=>{for(const t of e){const n=Ye._getElementCallbacks(t.target);if(n)for(const i of n)i(t)}})}}Ye._observerInstance=null,Ye._elementCallbacks=null;function bh(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function Ec(o){return e=>e+o}function hs(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function wh(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function oi(o){return o&&o.nodeType===Node.COMMENT_NODE}function _o(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}function GC(o){return!o||!o.parentNode||o.offsetParent===pe.document.body?null:o.offsetParent}function _h({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Xt(e)&&(e=e()),Xt(n)&&(n=n());const s=GC(o),a=new He(o),c=new He(e);let l;const d=i&&$C(r)||null,u={targetRect:c,elementRect:a,positionedElementAncestor:s,viewportRect:d};if(!n&&!i)l=new Dc(t[0],u);else{const p=n&&new He(n).getVisible();Object.assign(u,{limiterRect:p,viewportRect:d}),l=KC(t,u)||new Dc(t[0],u)}return l}function $C(o){o=Object.assign({top:0,bottom:0,left:0,right:0},o);const e=new He(pe.window);return e.top+=o.top,e.height-=o.top,e.bottom-=o.bottom,e.height-=o.bottom,e}function KC(o,e){const{elementRect:t}=e,n=t.getArea(),i=o.map(a=>new Dc(a,e)).filter(a=>!!a.name);let r=0,s=null;for(const a of i){const{limiterIntersectionArea:c,viewportIntersectionArea:l}=a;if(c===n)return a;const d=l**2+c**2;d>r&&(r=d,s=a)}return s}function YC(o,e){const t=Ah(new He(e)),n=gh(e);let i=0,r=0;i-=t.left,r-=t.top,i+=e.scrollLeft,r+=e.scrollTop,i-=n.left,r-=n.top,o.moveBy(i,r)}function Ah(o){const{scrollX:e,scrollY:t}=pe.window;return o.clone().moveBy(e,t)}class Dc{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCorrdinates={left:i,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(t){const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}else return e.getIntersectionArea(this._rect)}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect?this._cachedRect:(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top),this._cachedRect)}get _absoluteRect(){return this._cachedAbsoluteRect?this._cachedAbsoluteRect:(this._cachedAbsoluteRect=Ah(this._rect),this._options.positionedElementAncestor&&YC(this._cachedAbsoluteRect,this._options.positionedElementAncestor),this._cachedAbsoluteRect)}}function Ch(o){const e=o.parentNode;e&&e.removeChild(o)}function QC({target:o,viewportOffset:e=0}){const t=Sc(o);let n=t,i=null;for(;n;){let r;n==t?r=Dh(o):r=Dh(i),JC(r,()=>Sh(o,n));const s=Sh(o,n);if(ZC(n,s,e),n.parent!=n){if(i=n.frameElement,n=n.parent,!i)return}else n=null}}function ZC(o,e,t){const n=e.clone().moveBy(0,t),i=e.clone().moveBy(0,-t),r=new He(o).excludeScrollbarsAndBorders();if(![i,n].every(a=>r.contains(a))){let{scrollX:a,scrollY:c}=o;yh(i,r)?c-=r.top-e.top+t:vh(n,r)&&(c+=e.bottom-r.bottom+t),xh(e,r)?a-=r.left-e.left+t:Eh(e,r)&&(a+=e.right-r.right+t),o.scrollTo(a,c)}}function JC(o,e){const t=Sc(o);let n,i;for(;o!=t.document.body;)i=e(),n=new He(o).excludeScrollbarsAndBorders(),n.contains(i)||(yh(i,n)?o.scrollTop-=n.top-i.top:vh(i,n)&&(o.scrollTop+=i.bottom-n.bottom),xh(i,n)?o.scrollLeft-=n.left-i.left:Eh(i,n)&&(o.scrollLeft+=i.right-n.right)),o=o.parentNode}function vh(o,e){return o.bottom>e.bottom}function yh(o,e){return o.top<e.top}function xh(o,e){return o.left<e.left}function Eh(o,e){return o.right>e.right}function Sc(o){return ds(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Dh(o){if(ds(o)){let e=o.commonAncestorContainer;return ot(e)&&(e=e.parentNode),e}else return o.parentNode}function Sh(o,e){const t=Sc(o),n=new He(o);if(t===e)return n;{let i=t;for(;i!=e;){const r=i.frameElement,s=new He(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const XC={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},ev={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Ce=rv(),tv=Object.fromEntries(Object.entries(Ce).map(([o,e])=>[e,o.charAt(0).toUpperCase()+o.slice(1)]));function ii(o){let e;if(typeof o=="string"){if(e=Ce[o.toLowerCase()],!e)throw new _("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?Ce.alt:0)+(o.ctrlKey?Ce.ctrl:0)+(o.shiftKey?Ce.shift:0)+(o.metaKey?Ce.cmd:0);return e}function Tc(o){return typeof o=="string"&&(o=sv(o)),o.map(e=>typeof e=="string"?ov(e):e).reduce((e,t)=>t+e,0)}function Th(o){let e=Tc(o);return Object.entries(k.isMac?XC:ev).reduce((i,[r,s])=>(e&Ce[r]&&(e&=~Ce[r],i+=s),i),"")+(e?tv[e]:"")}function nv(o){return o==Ce.arrowright||o==Ce.arrowleft||o==Ce.arrowup||o==Ce.arrowdown}function Ic(o,e){const t=e==="ltr";switch(o){case Ce.arrowleft:return t?"left":"right";case Ce.arrowright:return t?"right":"left";case Ce.arrowup:return"up";case Ce.arrowdown:return"down"}}function ov(o){if(o.endsWith("!"))return ii(o.slice(0,-1));const e=ii(o);return k.isMac&&e==Ce.ctrl?Ce.cmd:e}function iv(o,e){const t=Ic(o,e);return t==="down"||t==="right"}function rv(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);o[t.toLowerCase()]=e}for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;for(const e of"`-=[];',./\\")o[e]=e.charCodeAt(0);return o}function sv(o){return o.split("+").map(e=>e.trim())}function kt(o){return Array.isArray(o)?o:[o]}pe.window.CKEDITOR_TRANSLATIONS||(pe.window.CKEDITOR_TRANSLATIONS={});function av(o,e,t=1){if(typeof t!="number")throw new _("translation-service-quantity-not-a-number",null,{quantity:t});const n=lv();n===1&&(o=Object.keys(pe.window.CKEDITOR_TRANSLATIONS)[0]);const i=e.id||e.string;if(n===0||!cv(o,i))return t!==1?e.plural:e.string;const r=pe.window.CKEDITOR_TRANSLATIONS[o].dictionary,s=pe.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(l=>l===1?0:1),a=r[i];if(typeof a=="string")return a;const c=Number(s(t));return a[c]}function cv(o,e){return!!pe.window.CKEDITOR_TRANSLATIONS[o]&&!!pe.window.CKEDITOR_TRANSLATIONS[o].dictionary[e]}function lv(){return Object.keys(pe.window.CKEDITOR_TRANSLATIONS).length}const dv=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ih(o){return dv.includes(o)?"rtl":"ltr"}class uv{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Ih(this.uiLanguage),this.contentLanguageDirection=Ih(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=kt(t),typeof e=="string"&&(e={string:e});const i=!!e.plural?t[0]:1,r=av(this.uiLanguage,e,i);return hv(r,t)}}function hv(o,e){return o.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)}class St extends v(){constructor(e={},t={}){super();const n=Et(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new _("collection-add-item-invalid-index",this);let n=0;for(const i of e){const r=this._getItemIdBeforeAdding(i),s=t+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else if(typeof e=="number")t=this._items[e];else throw new _("collection-get-invalid-arg",this);return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=this._idProperty,n=e[t];return n&&this._itemMap.has(n)}}getIndex(e){let t;return typeof e=="string"?t=this._itemMap.get(e):t=e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new _("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,r,s)=>{const a=t._bindToCollection==this,c=t._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=e(r);if(!l){this._skippedIndexesFromExternal.push(s);return}let d=s;for(const u of this._skippedIndexesFromExternal)s>u&&d--;for(const u of t._skippedIndexesFromExternal)d>=u&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let u=0;u<t._skippedIndexesFromExternal.length;u++)d<=t._skippedIndexesFromExternal[u]&&t._skippedIndexesFromExternal[u]++}};for(const i of t)n(null,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new _("collection-add-invalid-id",this);if(this.get(n))throw new _("collection-add-item-already-exists",this)}else e[t]=n=lt();return n}_remove(e){let t,n,i,r=!1;const s=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),r=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],r=!i,i&&(n=i[s])):(i=e,n=i[s],t=this._items.indexOf(i),r=t==-1||!this._itemMap.get(n)),r)throw new _("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function et(o){const e=o.next();return e.done?null:e.value}class Bt extends Zn(we()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new _("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Wt{constructor(){this._listener=new(Zn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+ii(n),n)})}set(e,t,n={}){const i=Tc(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{t(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+ii(e),e)}destroy(){this._listener.stopListening()}}function fv(o){const e=new Map;for(const t in o)e.set(t,o[t]);return e}function un(o){return Et(o)?new Map(o):fv(o)}const gv=1e4;function mv(o,e,t,n){if(Math.max(e.length,o.length)>gv)return o.slice(0,t).concat(e).concat(o.slice(t+n,o.length));{const i=Array.from(o);return i.splice(t,n,...e),i}}function pv(o){return!!o&&o.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(o)}function kv(o){return!!o&&o.length==1&&/[\ud800-\udbff]/.test(o)}function bv(o){return!!o&&o.length==1&&/[\udc00-\udfff]/.test(o)}function Mh(o,e){return kv(o.charAt(e-1))&&bv(o.charAt(e))}function Bh(o,e){return pv(o.charAt(e))}const wv=Av();function _v(o,e){const t=String(o).matchAll(wv);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}function Av(){const o=[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u],e=/\p{Regional_Indicator}{2}/u.source,t="(?:"+o.map(i=>i.source).join("|")+")",n=`${e}|${t}(?:‍${t})*`;return new RegExp(n,"ug")}class Mn extends St{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!Cv(e))throw new _("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const r of e)i.delegate(r).to(t)}),this.on("remove",(n,i)=>{for(const r of e)i.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}function Cv(o){return o.every(e=>typeof e=="string")}var vv=b(3379),ne=b.n(vv),Nh=b(6150),Mc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Mc.insert="head",Mc.singleton=!0,ne()(Nh.Z,Mc),Nh.Z.locals;class ke extends Zn(we()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new St,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Nt.bind(this,this)}createCollection(e){const t=new Mn(e);return this._viewCollections.add(t),t}registerChild(e){Et(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Et(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Nt(e)}extendTemplate(e){Nt.extend(this.template,e)}render(){if(this.isRendered)throw new _("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}const yv="http://www.w3.org/1999/xhtml";class Nt extends v(){constructor(e){super(),Object.assign(this,Oh(Lh(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData=Uh(),this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new _("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){function*e(t){if(t.children)for(const n of t.children)gs(n)?yield n:Bc(n)&&(yield*e(n))}yield*e(this)}static bind(e,t){return{to(n,i){return new xv({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i})},if(n,i,r){return new Ph({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:r})}}}static extend(e,t){if(e._isRendered)throw new _("template-extend-render",[this,e]);Vh(e,Oh(Lh(t)))}_renderNode(e){let t;if(e.node?t=this.tag&&this.text:t=this.tag?this.text:!this.text,t)throw new _("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||yv,this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),fs(this.text)?this._bindToObservable({schema:this.text,updater:Dv(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const i in this.attributes){const r=t.getAttribute(i),s=this.attributes[i];n&&(n.attributes[i]=r);const a=Hh(s)?s[0].ns:null;if(fs(s)){const c=Hh(s)?s[0].value:s;n&&Wh(i)&&c.unshift(r),this._bindToObservable({schema:c,updater:Sv(t,i,a),data:e})}else if(i=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],e);else{n&&r&&Wh(i)&&s.unshift(r);const c=s.map(l=>l&&(l.value||l)).reduce((l,d)=>l.concat(d),[]).reduce(jh,"");ri(c)||t.setAttributeNS(a,i,c)}}}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const r=e[i];fs(r)?this._bindToObservable({schema:[r],updater:Tv(n,i),data:t}):n.style[i]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let r=0;for(const s of this.children)if(Nc(s)){if(!i){s.setParent(t);for(const a of s)n.appendChild(a.element)}}else if(gs(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(Qn(s))n.appendChild(s);else if(i){const a=e.revertData,c=Uh();a.children.push(c),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:c})}else n.appendChild(s.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[r,s]=t.split("@");return i.activateDomEventListener(r,s,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;zh(e,t,n);const r=e.filter(s=>!ri(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(e,t,n));i&&i.bindings.push(r)}_revertTemplateFromNode(e,t){for(const i of t.bindings)for(const r of i)r();if(t.text){e.textContent=t.text;return}const n=e;for(const i in t.attributes){const r=t.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],t.children[i])}}class Yi{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>zh(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class xv extends Yi{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const i=(r,s)=>{(!t||s.target.matches(t))&&(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class Ph extends Yi{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){const t=super.getValue(e);return ri(t)?!1:this.valueIfTrue||!0}}function fs(o){return o?(o.value&&(o=o.value),Array.isArray(o)?o.some(fs):o instanceof Yi):!1}function Ev(o,e){return o.map(t=>t instanceof Yi?t.getValue(e):t)}function zh(o,e,{node:t}){const n=Ev(o,t);let i;o.length==1&&o[0]instanceof Ph?i=n[0]:i=n.reduce(jh,""),ri(i)?e.remove():e.set(i)}function Dv(o){return{set(e){o.textContent=e},remove(){o.textContent=""}}}function Sv(o,e,t){return{set(n){o.setAttributeNS(t,e,n)},remove(){o.removeAttributeNS(t,e)}}}function Tv(o,e){return{set(t){o.style[e]=t},remove(){o.style[e]=null}}}function Lh(o){return ch(o,t=>{if(t&&(t instanceof Yi||Bc(t)||gs(t)||Nc(t)))return t})}function Oh(o){if(typeof o=="string"?o=Bv(o):o.text&&Nv(o),o.on&&(o.eventListeners=Mv(o.on),delete o.on),!o.text){o.attributes&&Iv(o.attributes);const e=[];if(o.children)if(Nc(o.children))e.push(o.children);else for(const t of o.children)Bc(t)||gs(t)||Qn(t)?e.push(t):e.push(new Nt(t));o.children=e}return o}function Iv(o){for(const e in o)o[e].value&&(o[e].value=kt(o[e].value)),Rh(o,e)}function Mv(o){for(const e in o)Rh(o,e);return o}function Bv(o){return{text:[o]}}function Nv(o){o.text=kt(o.text)}function Rh(o,e){o[e]=kt(o[e])}function jh(o,e){return ri(e)?o:ri(o)?e:`${o} ${e}`}function Fh(o,e){for(const t in e)o[t]?o[t].push(...e[t]):o[t]=e[t]}function Vh(o,e){if(e.attributes&&(o.attributes||(o.attributes={}),Fh(o.attributes,e.attributes)),e.eventListeners&&(o.eventListeners||(o.eventListeners={}),Fh(o.eventListeners,e.eventListeners)),e.text&&o.text.push(...e.text),e.children&&e.children.length){if(o.children.length!=e.children.length)throw new _("ui-template-extend-children-mismatch",o);let t=0;for(const n of e.children)Vh(o.children[t++],n)}}function ri(o){return!o&&o!==0}function gs(o){return o instanceof ke}function Bc(o){return o instanceof Nt}function Nc(o){return o instanceof Mn}function Hh(o){return Me(o[0])&&o[0].ns}function Uh(){return{children:[],bindings:[],attributes:{}}}function Wh(o){return o=="class"||o=="style"}class Pv extends Mn{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Nt({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Ir(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var qh=b(1174),Pc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Pc.insert="head",Pc.singleton=!0,ne()(qh.Z,Pc),qh.Z.locals;class Ao extends ke{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),n=t.getAttribute("viewBox");n&&(this.viewBox=n);for(const{name:i,value:r}of Array.from(t.attributes))Ao.presentationalAttributeNames.includes(i)&&this.element.setAttribute(i,r);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}Ao.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Gh=b(4499),zc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};zc.insert="head",zc.singleton=!0,ne()(Gh.Z,zc),Gh.Z.locals;class Be extends ke{constructor(e){super(e);const t=this.bindTemplate,n=lt();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new Ao,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",r=>!r),t.if("isVisible","ck-hidden",r=>!r),t.to("isOn",r=>r?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",r=>r||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,r=>!r),"aria-pressed":t.to("isOn",r=>this.isToggleable?String(!!r):!1),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};k.isSafari&&(i.on.mousedown=t.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new ke,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new ke;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Th(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Th(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var $h=b(9681),Lc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Lc.insert="head",Lc.singleton=!0,ne()($h.Z,Lc),$h.Z.locals;class ms extends Be{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new ke;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}function zv(o,e){const t=o.t,n={Black:t("Black"),"Dim grey":t("Dim grey"),Grey:t("Grey"),"Light grey":t("Light grey"),White:t("White"),Red:t("Red"),Orange:t("Orange"),Yellow:t("Yellow"),"Light green":t("Light green"),Green:t("Green"),Aquamarine:t("Aquamarine"),Turquoise:t("Turquoise"),"Light blue":t("Light blue"),Blue:t("Blue"),Purple:t("Purple")};return e.map(i=>{const r=n[i.label];return r&&r!=i.label&&(i.label=r),i})}function Lv(o){return o.map(Ov).filter(e=>!!e)}function Ov(o){return typeof o=="string"?{model:o,label:o,hasBorder:!1,view:{name:"span",styles:{color:o}}}:{model:o.color,label:o.label||o.color,hasBorder:o.hasBorder===void 0?!1:o.hasBorder,view:{name:"span",styles:{color:`${o.color}`}}}}const Rv='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035 8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>';class Kh extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set("color",void 0),this.set("hasBorder",!1),this.icon=Rv,this.extendTemplate({attributes:{style:{backgroundColor:t.to("color")},class:["ck","ck-color-grid__tile",t.if("hasBorder","ck-color-table__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}var Yh=b(4923),Oc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Oc.insert="head",Oc.singleton=!0,ne()(Yh.Z,Oc),Yh.Z.locals;class Qh extends ke{constructor(e,t){super(e);const n=t&&t.colorDefinitions||[];this.columns=t&&t.columns?t.columns:5;const i={gridTemplateColumns:`repeat( ${this.columns}, 1fr)`};this.set("selectedColor",void 0),this.items=this.createCollection(),this.focusTracker=new Bt,this.keystrokes=new Wt,this.items.on("add",(r,s)=>{s.isOn=s.color===this.selectedColor}),n.forEach(r=>{const s=new Kh;s.set({color:r.color,label:r.label,tooltip:!0,hasBorder:r.options.hasBorder}),s.on("execute",()=>{this.fire("execute",{value:r.color,hasBorder:r.options.hasBorder,label:r.label})}),this.items.add(s)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:i}}),this.on("change:selectedColor",(r,s,a)=>{for(const c of this.items)c.isOn=c.color===a})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),x({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:this.columns,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}}class jv{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Rc(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new _("componentfactory-item-missing",this,{name:e});return this._components.get(Rc(e)).callback(this.editor.locale)}has(e){return this._components.has(Rc(e))}}function Rc(o){return String(o).toLowerCase()}var Zh=b(3488),jc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};jc.insert="head",jc.singleton=!0,ne()(Zh.Z,jc),Zh.Z.locals;class si extends ke{constructor(e,t,n){super(e);const i=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Wt,this.focusTracker=new Bt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",r=>!r)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":i.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,i)=>{i&&(this.panelPosition==="auto"?this.panelView.position=si._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:i,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:l,northMiddleWest:d}=si.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,a,c,e,r,s,l,d,t]:[i,n,c,a,e,s,r,d,l,t]}}si.defaultPanelPositions={south:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),southMiddleEast:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/4,name:"sme"}),southMiddleWest:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)*3/4,name:"smw"}),north:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/2,name:"n"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),northMiddleEast:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/4,name:"nme"}),northMiddleWest:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)*3/4,name:"nmw"})},si._getOptimalPosition=_h;const Jh='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Xh extends Be{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Ao;return e.content=Jh,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var ef=b(66),Fc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Fc.insert="head",Fc.singleton=!0,ne()(ef.Z,Fc),ef.Z.locals;class ps extends ke{constructor(e){super(e);const t=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Wt,this.focusTracker=new Bt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new Be;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new Be,t=e.bindTemplate;return e.icon=Jh,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class Fv extends ke{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():Ue("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}class Co{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const i of n)e.keystrokeHandler.set(i,(r,s)=>{this[t](),s()})}}get first(){return this.focusables.find(Vc)||null}get last(){return this.focusables.filter(Vc).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const i=t.element===this.focusTracker.focusedElement;return i&&(e=n),i}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let i=(t+n+e)%n;do{const r=this.focusables.get(i);if(Vc(r))return r;i=(i+n+e)%n}while(i!==t);return null}}function Vc(o){return!!(o.focus&&_o(o.element))}class tf extends ke{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Vv extends ke{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Hv(o){return o.bindTemplate.to(e=>{e.target===o.element&&e.preventDefault()})}function nf(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}class V extends we(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",of,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",of),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function of(o){o.return=!1,o.stop()}class ge extends we(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",rf,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",rf),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function rf(o){o.return=!1,o.stop()}class sf extends ge{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){ao(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class af extends v(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new _("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,r=this._context;A(e),N(e);const s=e.filter(J=>!u(J,t)),a=[...D(s)];st(a,n);const c=ve(a);return $e(c,"init").then(()=>$e(c,"afterInit")).then(()=>c);function l(J){return typeof J=="function"}function d(J){return l(J)&&J.isContextPlugin}function u(J,le){return le.some(oe=>oe===J||p(J)===oe||p(oe)===J)}function p(J){return l(J)?J.pluginName||J.name:J}function A(J,le=new Set){J.forEach(oe=>{l(oe)&&(le.has(oe)||(le.add(oe),oe.pluginName&&!i._availablePlugins.has(oe.pluginName)&&i._availablePlugins.set(oe.pluginName,oe),oe.requires&&A(oe.requires,le)))})}function D(J,le=new Set){return J.map(oe=>l(oe)?oe:i._availablePlugins.get(oe)).reduce((oe,nt)=>le.has(nt)?oe:(le.add(nt),nt.requires&&(N(nt.requires,nt),D(nt.requires,le).forEach(Fo=>oe.add(Fo))),oe.add(nt)),new Set)}function N(J,le=null){J.map(oe=>l(oe)?oe:i._availablePlugins.get(oe)||oe).forEach(oe=>{j(oe,le),q(oe,le),G(oe,le)})}function j(J,le){if(!l(J))throw le?new _("plugincollection-soft-required",r,{missingPlugin:J,requiredBy:p(le)}):new _("plugincollection-plugin-not-found",r,{plugin:J})}function q(J,le){if(d(le)&&!d(J))throw new _("plugincollection-context-required",r,{plugin:p(J),requiredBy:p(le)})}function G(J,le){if(le&&u(J,t))throw new _("plugincollection-required",r,{plugin:p(J),requiredBy:p(le)})}function ve(J){return J.map(le=>{let oe=i._contextPlugins.get(le);return oe=oe||new le(r),i._add(le,oe),oe})}function $e(J,le){return J.reduce((oe,nt)=>!nt[le]||i._contextPlugins.has(nt)?oe:oe.then(nt[le].bind(nt)),Promise.resolve())}function st(J,le){for(const oe of le){if(typeof oe!="function")throw new _("plugincollection-replace-plugin-invalid-type",null,{pluginItem:oe});const nt=oe.pluginName;if(!nt)throw new _("plugincollection-replace-plugin-missing-name",null,{pluginItem:oe});if(oe.requires&&oe.requires.length)throw new _("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:nt});const Fo=i._availablePlugins.get(nt);if(!Fo)throw new _("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:nt});const sw=J.indexOf(Fo);if(sw===-1){if(i._contextPlugins.has(Fo))return;throw new _("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:nt})}if(Fo.requires&&Fo.requires.length)throw new _("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:nt});J.splice(sw,1,oe),i._availablePlugins.set(nt,oe)}}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy=="function"&&!this._contextPlugins.has(t)&&e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new _("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Uv{constructor(e){this.config=new lh(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new af(this,t);const n=this.config.get("language")||{};this.locale=new uv({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new St,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new _("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new _("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new _("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class ks extends we(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var cf=b(8894),Hc={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Hc.insert="head",Hc.singleton=!0,ne()(cf.Z,Hc),cf.Z.locals;const bs=new WeakMap;function lf(o){const{view:e,element:t,text:n,isDirectHost:i=!0,keepOnFocus:r=!1}=o,s=e.document;bs.has(s)||(bs.set(s,new Map),s.registerPostFixer(a=>Uc(s,a)),s.on("change:isComposing",()=>{e.change(a=>Uc(s,a))},{priority:"high"})),bs.get(s).set(t,{text:n,isDirectHost:i,keepOnFocus:r,hostElement:i?t:null}),e.change(a=>Uc(s,a))}function Wv(o,e){return e.hasClass("ck-placeholder")?!1:(o.addClass("ck-placeholder",e),!0)}function qv(o,e){return e.hasClass("ck-placeholder")?(o.removeClass("ck-placeholder",e),!0):!1}function Gv(o,e){if(!o.isAttached()||Array.from(o.getChildren()).some(s=>!s.is("uiElement")))return!1;const n=o.document,r=n.selection.anchor;return n.isComposing&&r&&r.parent===o?!1:e||!n.isFocused?!0:!!r&&r.parent!==o}function Uc(o,e){const t=bs.get(o),n=[];let i=!1;for(const[r,s]of t)s.isDirectHost&&(n.push(r),df(e,r,s)&&(i=!0));for(const[r,s]of t){if(s.isDirectHost)continue;const a=$v(r);a&&(n.includes(a)||(s.hostElement=a,df(e,r,s)&&(i=!0)))}return i}function df(o,e,t){const{text:n,isDirectHost:i,hostElement:r}=t;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||e.childCount==1)&&Gv(r,t.keepOnFocus)?Wv(o,r)&&(s=!0):qv(o,r)&&(s=!0),s}function $v(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class vo{is(){throw new Error("is() method is abstract")}}var Kv=4;function Yv(o){return yc(o,Kv)}const uf=Yv;class yo extends v(vo){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new _("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=gt(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this==e||this.root!==e.root?!1:!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=uf(this);return delete e.parent,e}}yo.prototype.is=function(o){return o==="node"||o==="view:node"};class Oe extends yo{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Oe?this===e||this.data===e.data:!1}_clone(){return new Oe(this.document,this.data)}}Oe.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class hn extends vo{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new _("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new _("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}hn.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class fn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=hf(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const r=hf(n,i);r&&t.push({element:n,pattern:i,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e!="function"&&t&&!(t instanceof RegExp)?t:null}}function hf(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=Qv(e.name,o.name),!t.name)||e.attributes&&(t.attributes=ey(e.attributes,o),!t.attributes)||e.classes&&(t.classes=ty(e.classes,o),!t.classes)||e.styles&&(t.styles=ny(e.styles,o),!t.styles)?null:t}function Qv(o,e){return o instanceof RegExp?!!e.match(o):o===e}function Wc(o,e,t){const n=Zv(o),i=Array.from(e),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{Jv(s,c)&&Xv(a,c,t)&&r.push(c)})}),!(!n.length||r.length<n.length))return r}function Zv(o){return Array.isArray(o)?o.map(e=>Ct(e)?((e.key===void 0||e.value===void 0)&&Ue("matcher-pattern-missing-key-or-value",e),[e.key,e.value]):[e,!0]):Ct(o)?Object.entries(o):[[o,!0]]}function Jv(o,e){return o===!0||o===e||o instanceof RegExp&&e.match(o)}function Xv(o,e,t){if(o===!0)return!0;const n=t(e);return o===n||o instanceof RegExp&&!!String(n).match(o)}function ey(o,e){const t=new Set(e.getAttributeKeys());return Ct(o)?(o.style!==void 0&&Ue("matcher-pattern-deprecated-attributes-style-key",o),o.class!==void 0&&Ue("matcher-pattern-deprecated-attributes-class-key",o)):(t.delete("style"),t.delete("class")),Wc(o,t,n=>e.getAttribute(n))}function ty(o,e){return Wc(o,e.getClassNames(),()=>{})}function ny(o,e){return Wc(o,e.getStyleNames(!0),t=>e.getStyle(t))}var oy="[object Symbol]";function iy(o){return typeof o=="symbol"||Mt(o)&&Jt(o)==oy}const ws=iy;var ry=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sy=/^\w*$/;function ay(o,e){if(mt(o))return!1;var t=typeof o;return t=="number"||t=="symbol"||t=="boolean"||o==null||ws(o)?!0:sy.test(o)||!ry.test(o)||e!=null&&o in Object(e)}const cy=ay;var ly="Expected a function";function qc(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError(ly);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return t.cache=r.set(i,s)||r,s};return t.cache=new(qc.Cache||Yn),t}qc.Cache=Yn;const dy=qc;var uy=500;function hy(o){var e=dy(o,function(n){return t.size===uy&&t.clear(),n}),t=e.cache;return e}const fy=hy;var gy=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,my=/\\(\\)?/g,py=fy(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(gy,function(t,n,i,r){e.push(i?r.replace(my,"$1"):n||t)}),e});const ky=py;function by(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i}const wy=by;var _y=1/0,ff=Ht?Ht.prototype:void 0,gf=ff?ff.toString:void 0;function mf(o){if(typeof o=="string")return o;if(mt(o))return wy(o,mf)+"";if(ws(o))return gf?gf.call(o):"";var e=o+"";return e=="0"&&1/o==-_y?"-0":e}const Ay=mf;function Cy(o){return o==null?"":Ay(o)}const Gc=Cy;function vy(o,e){return mt(o)?o:cy(o,e)?[o]:ky(Gc(o))}const $c=vy;function yy(o){var e=o==null?0:o.length;return e?o[e-1]:void 0}const xy=yy;var Ey=1/0;function Dy(o){if(typeof o=="string"||ws(o))return o;var e=o+"";return e=="0"&&1/o==-Ey?"-0":e}const Kc=Dy;function Sy(o,e){e=$c(e,o);for(var t=0,n=e.length;o!=null&&t<n;)o=o[Kc(e[t++])];return t&&t==n?o:void 0}const pf=Sy;function Ty(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+e];return r}const kf=Ty;function Iy(o,e){return e.length<2?o:pf(o,kf(e,0,-1))}const My=Iy;function By(o,e){return e=$c(e,o),o=My(o,e),o==null||delete o[Kc(xy(e))]}const Ny=By;function Py(o,e){return o==null?!0:Ny(o,e)}const zy=Py;function Ly(o,e,t){var n=o==null?void 0:pf(o,e);return n===void 0?t:n}const _s=Ly;function Oy(o,e,t){(t!==void 0&&!Gn(o[e],t)||t===void 0&&!(e in o))&&he(o,e,t)}const Yc=Oy;function Ry(o){return function(e,t,n){for(var i=-1,r=Object(e),s=n(e),a=s.length;a--;){var c=s[o?a:++i];if(t(r[c],c,r)===!1)break}return e}}var jy=Ry();const Fy=jy;function Vy(o){return Mt(o)&&ss(o)}const Hy=Vy;function Uy(o,e){if(!(e==="constructor"&&typeof o[e]=="function")&&e!="__proto__")return o[e]}const Qc=Uy;function Wy(o){return Ot(o,ni(o))}const qy=Wy;function Gy(o,e,t,n,i,r,s){var a=Qc(o,t),c=Qc(e,t),l=s.get(c);if(l){Yc(o,t,l);return}var d=r?r(a,c,t+"",o,e,s):void 0,u=d===void 0;if(u){var p=mt(c),A=!p&&qi(c),D=!p&&!A&&gc(c);d=c,p||A||D?mt(a)?d=a:Hy(a)?d=Vu(a):A?(u=!1,d=Fu(c,!0)):D?(u=!1,d=eh(c,!0)):d=[]:Ct(c)||dc(c)?(d=a,dc(a)?d=qy(a):(!Me(a)||Xt(a))&&(d=nh(c))):u=!1}u&&(s.set(c,d),i(d,c,n,r,s),s.delete(c)),Yc(o,t,d)}const $y=Gy;function bf(o,e,t,n,i){o!==e&&Fy(e,function(r,s){if(i||(i=new g),Me(r))$y(o,e,s,t,bf,n,i);else{var a=n?n(Qc(o,s),r,s+"",o,e,i):void 0;a===void 0&&(a=r),Yc(o,s,a)}},ni)}const Ky=bf;function Yy(o){return o}const xo=Yy;function Qy(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)}const Zy=Qy;var wf=Math.max;function Jy(o,e,t){return e=wf(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,r=wf(n.length-e,0),s=Array(r);++i<r;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=t(s),Zy(o,this,a)}}const Xy=Jy;function e0(o){return function(){return o}}const t0=e0;var n0=se?function(o,e){return se(o,"toString",{configurable:!0,enumerable:!1,value:t0(e),writable:!0})}:xo;const o0=n0;var i0=800,r0=16,s0=Date.now;function a0(o){var e=0,t=0;return function(){var n=s0(),i=r0-(n-t);if(t=n,i>0){if(++e>=i0)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}var c0=a0(o0);const l0=c0;function d0(o,e){return l0(Xy(o,e,xo),o+"")}const u0=d0;function h0(o,e,t){if(!Me(t))return!1;var n=typeof e;return(n=="number"?ss(t)&&uc(e,t.length):n=="string"&&e in t)?Gn(t[e],o):!1}const f0=h0;function g0(o){return u0(function(e,t){var n=-1,i=t.length,r=i>1?t[i-1]:void 0,s=i>2?t[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&f0(t[0],t[1],s)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var a=t[n];a&&o(e,a,n,r)}return e})}const _f=g0;var m0=_f(function(o,e,t){Ky(o,e,t)});const Af=m0;function p0(o,e,t,n){if(!Me(o))return o;e=$c(e,o);for(var i=-1,r=e.length,s=r-1,a=o;a!=null&&++i<r;){var c=Kc(e[i]),l=t;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var d=a[c];l=n?n(d,c,a):void 0,l===void 0&&(l=Me(d)?d:uc(e[i+1])?[]:{})}en(a,c,l),a=a[c]}return o}const k0=p0;function b0(o,e,t){return o==null?o:k0(o,e,t)}const w0=b0;class _0{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(C0(e).entries());for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const n=this._styleProcessor.getReducedForm(e,this._styles).find(([i])=>i===e);return Array.isArray(n)}set(e,t){if(Me(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Zc(e);zy(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Me(this._styles[e]))return this._styles[e];const n=this._styleProcessor.getReducedForm(e,this._styles).find(([i])=>i===e);if(Array.isArray(n))return n[1]}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([n])=>n)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const i=t.splice(0,t.length-1).join("."),r=_s(this._styles,i);if(!r)return;!Array.from(Object.keys(r)).length&&this.remove(i)}}class A0{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Me(t)){Jc(n,Zc(e),t);return}if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:r,value:s}=i(t);Jc(n,r,s)}else Jc(n,e,t)}getNormalized(e,t){if(!e)return Af({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return _s(t,n);const i=n(e,t);if(i)return i}return _s(t,Zc(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function C0(o){let e=null,t=0,n=0,i=null;const r=new Map;if(o==="")return r;o.charAt(o.length-1)!=";"&&(o=o+";");for(let s=0;s<o.length;s++){const a=o.charAt(s);if(e===null)switch(a){case":":i||(i=o.substr(t,s-t),n=s+1);break;case'"':case"'":e=a;break;case";":{const c=o.substr(n,s-n);i&&r.set(i.trim(),c.trim()),i=null,t=s+1;break}}else a===e&&(e=null)}return r}function Zc(o){return o.replace("-",".")}function Jc(o,e,t){let n=t;Me(t)&&(n=Af({},_s(o,e),t)),w0(o,e,n)}class Rt extends yo{constructor(e,t,n,i){if(super(e),this.name=t,this._attrs=v0(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Cf(this._classes,r),this._attrs.delete("class")}this._styles=new _0(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Rt))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new fn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=y0(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?Cf(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0?(this._classes.clear(),!0):!1:e=="style"?this._styles.isEmpty?!1:(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of kt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of kt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Ct(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of kt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Rt.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};function v0(o){const e=un(o);for(const[t,n]of e)n===null?e.delete(t):typeof n!="string"&&e.set(t,String(n));return e}function Cf(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}function y0(o,e){return typeof e=="string"?[new Oe(o,e)]:(Et(e)||(e=[e]),Array.from(e).map(t=>typeof t=="string"?new Oe(o,t):t instanceof hn?new Oe(o,t.data):t))}class Qi extends Rt{constructor(...e){super(...e),this.getFillerOffset=vf}}Qi.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};function vf(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}class As extends we(Qi){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}As.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const yf=Symbol("rootName");class xf extends As{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(yf)}set rootName(e){this._setCustomProperty(yf,e)}set _name(e){this.name=e}}xf.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Eo{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new _("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new _("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=W._createAt(e.startPosition):this.position=W._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,i;do i=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof Oe){if(e.isAtEnd)return this.position=W._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof Rt)return this.shallow?e.offset++:e=new W(i,0),this.position=e,this._formatReturnValue("elementStart",i,t,e,1);if(i instanceof Oe){if(this.singleCharacters)return e=new W(i,0),this.position=e,this._next();{let r=i.data.length,s;return i==this._boundaryEndParent?(r=this.boundaries.end.offset,s=new hn(i,0,r),e=W._createAfter(s)):(s=new hn(i,0,i.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,r)}}else if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const s=new hn(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",s,t,e,r)}else return e=W._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof Oe){if(e.isAtStart)return this.position=W._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof Rt)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new W(i,i.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof Oe){if(this.singleCharacters)return e=new W(i,i.data.length),this.position=e,this._previous();{let r=i.data.length,s;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;s=new hn(i,a,i.data.length-a),r=s.data.length,e=W._createBefore(s)}else s=new hn(i,0,i.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,r)}}else if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-a}e.offset-=r;const s=new hn(n,e.offset,r);return this.position=e,this._formatReturnValue("text",s,t,e,r)}else return e=W._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,r){return t instanceof hn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction=="forward"&&!(this.boundaries&&this.boundaries.end.isEqual(this.position))?(i=W._createAfter(t.textNode),this.position=i):n=W._createAfter(t.textNode)),t.offsetInText===0&&(this.direction=="backward"&&!(this.boundaries&&this.boundaries.start.isEqual(this.position))?(i=W._createBefore(t.textNode),this.position=i):n=W._createBefore(t.textNode))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:r}}}}class W extends vo{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof As);)if(e.parent)e=e.parent;else return null;return e}getShiftedBy(e){const t=W._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Eo(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=gt(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Eo(e)}clone(){return new W(this.parent,this.offset)}static _createAt(e,t){if(e instanceof W)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new _("view-createpositionat-offset-required",n)}return new W(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new W(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new _("view-position-after-root",e,{root:e});return new W(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new W(e.textNode,e.offsetInText);if(!e.parent)throw new _("view-position-before-root",e,{root:e});return new W(e.parent,e.index)}}W.prototype.is=function(o){return o==="position"||o==="view:position"};class ae extends vo{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Eo({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Cs,{direction:"backward"}),t=this.end.getLastMatchingPosition(Cs);return e.parent.is("$text")&&e.isAtStart&&(e=W._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=W._createAfter(t.parent)),new ae(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Cs);if(e.isAfter(this.end)||e.isEqual(this.end))return new ae(e,e);let t=this.end.getLastMatchingPosition(Cs,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new W(n,0)),i&&i.is("$text")&&(t=new W(i,i.data.length)),new ae(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ae(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ae(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ae(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Eo(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new ae(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Eo(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Eo(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new W(e,t),new W(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(W._createBefore(e),t)}}ae.prototype.is=function(o){return o==="range"||o==="view:range"};function Cs(o){return!!(o.item.is("attributeElement")||o.item.is("uiElement"))}class gn extends v(vo){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Hn(this.getRanges()),n=Hn(e.getRanges());if(t!=n)return!1;if(t==0)return!0;for(let i of this.getRanges()){i=i.getTrimmed();let r=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),i.start.isEqual(s.start)&&i.end.isEqual(s.end)){r=!0;break}if(!r)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof gn||t instanceof Xc)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof ae)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof W)this._setRanges([new ae(t)]),this._setFakeOptions(i);else if(t instanceof yo){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new _("view-selection-setto-required-second-parameter",this);n=="in"?s=ae._createIn(t):n=="on"?s=ae._createOn(t):s=new ae(W._createAt(t,n)),this._setRanges([s],r),this._setFakeOptions(i)}else if(Et(t))this._setRanges(t,i&&i.backward),this._setFakeOptions(i);else throw new _("view-selection-setto-not-selectable",this);this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new _("view-selection-setfocus-no-ranges",this);const n=W._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new ae(n,i),!0):this._addRange(new ae(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof ae))throw new _("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new _("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new ae(e.start,e.end))}}gn.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Xc extends v(vo){constructor(...e){super(),this._selection=new gn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Xc.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class ai extends Ie{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const el=Symbol("bubbling contexts");function tl(o){class e extends o{fire(n,...i){try{const r=n instanceof Ie?n:new Ie(this,n),s=nl(this);if(!s.size)return;if(Zi(r,"capturing",this),ci(s,"$capture",r,...i))return r.return;const a=r.startRange||this.selection.getFirstRange(),c=a?a.getContainedElement():null,l=c?Boolean(Ef(s,c)):!1;let d=c||x0(a);if(Zi(r,"atTarget",d),!l){if(ci(s,"$text",r,...i))return r.return;Zi(r,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(ci(s,"$root",r,...i))return r.return}else if(d.is("element")&&ci(s,d.name,r,...i))return r.return;if(ci(s,d,r,...i))return r.return;d=d.parent,Zi(r,"bubbling",d)}return Zi(r,"bubbling",this),ci(s,"$document",r,...i),r.return}catch(r){_.rethrowUnexpectedError(r,this)}}_addEventListener(n,i,r){const s=kt(r.context||"$document"),a=nl(this);for(const c of s){let l=a.get(c);l||(l=new(v()),a.set(c,l)),this.listenTo(l,n,i,r)}}_removeEventListener(n,i){const r=nl(this);for(const s of r.values())this.stopListening(s,n,i)}}return e}{const o=tl(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{tl[e]=o.prototype[e]})}function Zi(o,e,t){o instanceof ai&&(o._eventPhase=e,o._currentTarget=t)}function ci(o,e,t,...n){const i=typeof e=="string"?o.get(e):Ef(o,e);return i?(i.fire(t,...n),t.stop.called):!1}function Ef(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function nl(o){return o[el]||(o[el]=new Map),o[el]}function x0(o){if(!o)return null;const e=o.start.parent,t=o.end.parent,n=e.getPath(),i=t.getPath();return n.length>i.length?e:t}class vs extends tl(we()){constructor(e){super(),this.selection=new Xc,this.roots=new St({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}const Df=10;class Do extends Rt{constructor(...e){super(...e),this.getFillerOffset=E0,this._priority=Df,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new _("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}Do.DEFAULT_PRIORITY=Df,Do.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};function E0(){if(ol(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(ol(o)>1)return null;o=o.parent}return!o||ol(o)>1?null:this.childCount}function ol(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}class il extends Rt{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=D0}_insertChild(e,t){if(t&&(t instanceof yo||Array.from(t).length>0))throw new _("view-emptyelement-cannot-add",[this,t]);return 0}}il.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};function D0(){return null}class ys extends Rt{constructor(...e){super(...e),this.getFillerOffset=T0}_insertChild(e,t){if(t&&(t instanceof yo||Array.from(t).length>0))throw new _("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}ys.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};function S0(o){o.document.on("arrowKey",(e,t)=>I0(e,t,o.domConverter),{priority:"low"})}function T0(){return null}function I0(o,e,t){if(e.keyCode==Ce.arrowright){const n=e.domTarget.ownerDocument.defaultView.getSelection(),i=n.rangeCount==1&&n.getRangeAt(0).collapsed;if(i||e.shiftKey){const r=n.focusNode,s=n.focusOffset,a=t.domPositionToView(r,s);if(a===null)return;let c=!1;const l=a.getLastMatchingPosition(d=>(d.item.is("uiElement")&&(c=!0),!!(d.item.is("uiElement")||d.item.is("attributeElement"))));if(c){const d=t.viewPositionToDom(l);i?n.collapse(d.parent,d.offset):n.extend(d.parent,d.offset)}}}}class rl extends Rt{constructor(...e){super(...e),this.getFillerOffset=M0}_insertChild(e,t){if(t&&(t instanceof yo||Array.from(t).length>0))throw new _("view-rawelement-cannot-add",[this,t]);return 0}render(){}}rl.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};function M0(){return null}class So extends v(vo){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t),this._customProperties=new Map}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=B0(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}So.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};function B0(o,e){return typeof e=="string"?[new Oe(o,e)]:(Et(e)||(e=[e]),Array.from(e).map(t=>typeof t=="string"?new Oe(o,t):t instanceof hn?new Oe(o,t.data):t))}class Sf{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new So(this.document,e)}createText(e){return new Oe(this.document,e)}createAttributeElement(e,t,n={}){const i=new Do(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let r=null;Ct(n)?i=n:r=n;const s=new Qi(this.document,e,t,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(e,t,n={}){const i=new As(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new il(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new ys(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const r=new rl(this.document,e,t);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ct(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof W?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new _("view-writer-break-non-container-element",this.document);if(!t.parent)throw new _("view-writer-break-root",this.document);if(e.isAtStart)return W._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(W._createAfter(t),n);const i=new ae(e,W._createAt(t,"end")),r=new W(n,0);this.move(i,r)}return W._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new W(s,a))}const i=n.getChild(t-1),r=n.getChild(t);if(!i||!r)return e;if(i.is("$text")&&r.is("$text"))return If(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new W(i,s))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!t||!n||!t.is("containerElement")||!n.is("containerElement"))throw new _("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),r=i instanceof Oe?W._createAt(i,"end"):W._createAt(t,"end");return this.move(ae._createIn(n),W._createAt(t,"end")),this.remove(ae._createOn(n)),r}insert(e,t){t=Et(t)?[...t]:[t],Mf(t,this.document);const n=t.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return!c||c.breakAttributes!=l?s.push({breakAttributes:l,nodes:[a]}):c.nodes.push(a),s},[]);let i=null,r=e;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new ae(i,r):new ae(e)}remove(e){const t=e instanceof ae?e:ae._createOn(e);if(Ji(t,this.document),t.isCollapsed)return new So(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return t.start=c,t.end=c.clone(),new So(this.document,a)}clear(e,t){Ji(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&t.isSimilar(r))s=ae._createOn(r);else if(!i.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&t.isSimilar(c));a&&(s=ae._createIn(a))}s&&(s.end.isAfter(e.end)&&(s.end=e.end),s.start.isBefore(e.start)&&(s.start=e.start),this.remove(s))}}move(e,t){let n;if(t.isAfter(e.end)){t=this._breakAttributes(t,!0);const i=t.parent,r=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Do))throw new _("view-writer-wrap-invalid-attribute",this.document);if(Ji(e,this.document),e.isCollapsed){let n=e.start;n.parent.is("element")&&!N0(n.parent)&&(n=n.getLastMatchingPosition(r=>r.item.is("uiElement"))),n=this._wrapPosition(n,t);const i=this.document.selection;return i.isCollapsed&&i.getFirstPosition().isEqual(e.start)&&this.setSelection(n),new ae(n)}else return this._wrapRange(e,t)}unwrap(e,t){if(!(t instanceof Do))throw new _("view-writer-unwrap-invalid-attribute",this.document);if(Ji(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new ae(a,c)}rename(e,t){const n=new Qi(this.document,e,t.getAttributes());return this.insert(W._createAfter(t),n),this.move(ae._createIn(t),W._createAt(n,0)),this.remove(ae._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return W._createAt(e,t)}createPositionAfter(e){return W._createAfter(e)}createPositionBefore(e){return W._createBefore(e)}createRange(...e){return new ae(...e)}createRangeOn(e){return ae._createOn(e)}createRangeIn(e){return ae._createIn(e)}createSelection(...e){return new gn(...e)}createSlot(e){if(!this._slotFactory)throw new _("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i;if(n?i=sl(e):i=e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new _("view-writer-invalid-position-container",this.document);let r;n?r=this._breakAttributes(e,!0):r=e.parent.is("$text")?al(e):e;const s=i._insertChild(r.offset,t);for(const d of t)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new ae(c,l)}_wrapChildren(e,t,n,i){let r=t;const s=[];for(;r<n;){const c=e.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(i,c))s.push(new W(e,r));else if(l||!d||P0(i,c)){const u=i._clone();c._remove(),u._appendChild(c),e._insertChild(r,u),this._addToClonedElementsGroup(u),s.push(new W(e,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s){if(c.offset-=a,c.offset==t)continue;this.mergeAttributes(c).isEqual(c)||(a++,n--)}return ae._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let r=t;const s=[];for(;r<n;){const c=e.getChild(r);if(!c.is("attributeElement")){r++;continue}if(c.isSimilar(i)){const l=c.getChildren(),d=c.childCount;c._remove(),e._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new W(e,r),new W(e,r+d)),r+=d,n+=d-1;continue}if(this._unwrapAttributeElement(i,c)){s.push(new W(e,r),new W(e,r+1)),r++;continue}this._unwrapChildren(c,0,c.childCount,i),r++}let a=0;for(const c of s){if(c.offset-=a,c.offset==t||c.offset==n)continue;this.mergeAttributes(c).isEqual(c)||(a++,n--)}return ae._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new ae(a,c)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Tf(e.clone());e.parent.is("$text")&&(e=al(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new ae(e,e.getShiftedBy(1));this.wrap(i,t);const r=new W(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Oe&&a instanceof Oe?If(s,a):Tf(r)}_wrapAttributeElement(e,t){if(!Bf(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(!(n==="class"||n==="style")&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n==="class"||n==="style"||t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t);for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Bf(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(!(n==="class"||n==="style")&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n==="class"||n==="style"||this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(Ji(e,this.document),e.isCollapsed){const c=this._breakAttributes(e.start,t);return new ae(c,c)}const r=this._breakAttributes(i,t),s=r.parent.childCount,a=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-s,new ae(a,r)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new _("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new _("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new _("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&cl(i.parent)||cl(i))return e.clone();if(i.is("$text"))return this._breakAttributes(al(e),t);const r=i.childCount;if(n==r){const s=new W(i.parent,i.index+1);return this._breakAttributes(s,t)}else if(n===0){const s=new W(i.parent,i.index);return this._breakAttributes(s,t)}else{const s=i.index+1,a=i._clone();i.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const c=i.childCount-n,l=i._removeChildren(n,c);a._appendChild(l);const d=new W(i.parent,s);return this._breakAttributes(d,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function N0(o){return Array.from(o.getChildren()).some(e=>!e.is("uiElement"))}function sl(o){let e=o.parent;for(;!cl(e);){if(!e)return;e=e.parent}return e}function P0(o,e){return o.priority<e.priority?!0:o.priority>e.priority?!1:o.getIdentity()<e.getIdentity()}function Tf(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new W(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new W(t,0):o}function al(o){if(o.offset==o.parent.data.length)return new W(o.parent.parent,o.parent.index+1);if(o.offset===0)return new W(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Oe(o.root.document,e)),new W(o.parent.parent,o.parent.index+1)}function If(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new W(o,t)}const z0=[Oe,Do,Qi,il,rl,ys];function Mf(o,e){for(const t of o){if(!z0.some(n=>t instanceof n))throw new _("view-writer-insert-invalid-node-type",e);t.is("$text")||Mf(t.getChildren(),e)}}function cl(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Ji(o,e){const t=sl(o.start),n=sl(o.end);if(!t||!n||t!==n)throw new _("view-writer-invalid-range-container",e)}function Bf(o,e){return o.id===null&&e.id===null}const Nf=o=>o.createTextNode(" "),Pf=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},zf=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},mn=7,xs="⁠".repeat(mn);function jt(o){return ot(o)&&o.data.substr(0,mn)===xs}function Xi(o){return o.data.length==mn&&jt(o)}function Lf(o){return jt(o)?o.data.slice(mn):o.data}function L0(o){o.document.on("arrowKey",O0,{priority:"low"})}function O0(o,e){if(e.keyCode==Ce.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;jt(n)&&i<=mn&&t.collapse(n,0)}}}var Of=b(4401),ll={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};ll.insert="head",ll.singleton=!0,ne()(Of.Z,ll),Of.Z.locals;class R0 extends we(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),k.isBlink&&!k.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else if(e==="children")this.markedChildren.add(t);else throw new _("view-renderer-unknown-type",this)}}render(){if(this.isComposing&&!k.isAndroid)return;let e=null;const t=k.isBlink&&!k.isAndroid?!this.isSelecting:!0;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=W._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;jt(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Rf(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const n=Array.from(this.domConverter.mapViewToDom(e).childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findReplaceActions(r,n,i);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="replace"){const l=a.equal+a.insert,d=a.equal+a.delete,u=e.getChild(l);u&&!(u.is("uiElement")||u.is("rawElement"))&&this._updateElementMappings(u,n[d]),Ch(i[l]),a.equal++}else a[c]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?W._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&ot(t.parent)&&jt(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!jt(e))throw new _("view-renderer-filler-was-lost",this);Xi(e)?e.remove():e.data=e.data.substr(mn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!j0(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,r=e.nodeAfter;return!(i instanceof Oe||r instanceof Oe||k.isAndroid&&(i||r))}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let r=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(r=xs+r),Vf(n,r)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),i=e.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(k.isAndroid){let u=null;for(const p of Array.from(n.childNodes)){if(u&&ot(u)&&ot(p)){n.normalize();break}u=p}}const i=t.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Rf(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=k.isAndroid?this._findReplaceActions(a,r,s,{replaceText:!0}):a;let l=0;const d=new Set;for(const u of c)u==="delete"?(d.add(r[l]),Ch(r[l])):(u==="equal"||u==="replace")&&l++;l=0;for(const u of c)u==="insert"?(wh(n,l,s[l]),l++):u==="replace"?(Vf(r[l],s[l].data),l++):u==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const u of d)u.parentNode||this.domConverter.unbindDomElement(u)}_diffNodeLists(e,t){return e=H0(e,this._fakeSelectionContainer),ie(e,t,F0.bind(null,this.domConverter))}_findReplaceActions(e,t,n,i={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of e)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(t[c.equal+c.delete]):(r=r.concat(ie(s,a,i.replaceText?Ff:jf).map(d=>d==="equal"?"replace":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(ie(s,a,i.replaceText?Ff:jf).map(l=>l==="equal"?"replace":l))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(k.isBlink&&!k.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0){this._removeDomSelection(),this._removeFakeSelection();return}const e=this.domConverter.mapViewToDom(this.selection.editableElement);!this.isFocused||!e||(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&k.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=U0(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;(!n.parentElement||n.parentElement!=e)&&e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),r=t.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(i.parent,i.offset),k.isGecko&&V0(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return!(t&&this.selection.isEqual(t)||!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)?!0:t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function j0(o){if(o.getAttribute("contenteditable")=="false")return!1;const e=o.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||e.getAttribute("contenteditable")=="true"}function Rf(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(ot(i))return i.data=xs+i.data,i;{const r=o.createTextNode(xs);return Array.isArray(e)?n.splice(t,0,r):wh(e,t,r),r}}function jf(o,e){return Qn(o)&&Qn(e)&&!ot(o)&&!ot(e)&&!oi(o)&&!oi(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function Ff(o,e){return Qn(o)&&Qn(e)&&ot(o)&&ot(e)}function F0(o,e,t){return e===t?!0:ot(e)&&ot(t)?e.data===t.data:!!(o.isBlockFiller(e)&&o.isBlockFiller(t))}function V0(o,e){const t=o.parent;if(t.nodeType!=Node.ELEMENT_NODE||o.offset!=t.childNodes.length-1)return;const n=t.childNodes[o.offset];n&&n.tagName=="BR"&&e.addRange(e.getRangeAt(0))}function H0(o,e){const t=Array.from(o);return t.length==0||!e||t[t.length-1]==e&&t.pop(),t}function U0(o){const e=o.createElement("div");return e.className="ck-fake-selection-container",Object.assign(e.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),e.textContent=" ",e}function Vf(o,e){const t=o.data;if(t==e)return;const n=X(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const W0=zf(pe.document),q0=Nf(pe.document),G0=Pf(pe.document),Es="data-ck-unsafe-attribute-",Hf="data-ck-unsafe-element";class Ds{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?pe.document:pe.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new fn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new gn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"?!0:(e=e.toLowerCase(),e.startsWith("on")||e==="srcdoc"&&t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i)?!1:n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"?!0:!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data"){e.innerHTML=t;return}const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const u of l.getAttributeNames())this.setDomElementAttribute(l,u,l.getAttribute(u));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(qf(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}else{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return e.name==="$comment"?n=this._domDocument.createComment(e.getCustomProperty("$rawContent")):n=e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(qf(e.name),n=this._createReplacementDomElement(e.name)):e.hasAttribute("xmlns")?n=this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):n=this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const i of e.getAttributeKeys())this.setDomElementAttribute(n,i,e.getAttribute(i),e)}if(t.withChildren!==!1)for(const i of this.viewChildrenToDom(e,t))n.appendChild(i);return n}}setDomElementAttribute(e,t,n,i){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);r||Ue("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(Es+t)&&r&&e.removeAttribute(Es+t),e.setAttribute(r?t:Es+t,n)}removeDomElementAttribute(e,t){t!=Hf&&(e.removeAttribute(t),e.removeAttribute(Es+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!et(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(s&&Ue("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return jt(n)&&(i+=mn),{parent:n,offset:i}}else{let n,i,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(i=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!i)return null;n=i.parentNode,r=i.nextSibling}if(ot(r)&&jt(r))return{parent:r,offset:mn};const s=i?hs(i)+1:0;return{parent:n,offset:s}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(oi(e)&&t.skipComments)return null;if(ot(e)){if(Xi(e))return null;{const i=this._processDataFromDomText(e);return i===""?null:new Oe(this.document,i)}}else{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new So(this.document),t.bind&&this.bindDocumentFragments(e,i);else{i=this._createViewElement(e,t),t.bind&&this.bindElements(e,i);const r=e.attributes;if(r)for(let s=r.length,a=0;a<s;a++)i._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(i,t)||oi(e)){const s=oi(e)?e.data:e.innerHTML;return i._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(e),i}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))i._appendChild(r);return i}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n],r=this.domToView(i,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;ot(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const r=e.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new gn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new ae(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,hs(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return W._createBefore(n);if(ot(e)){if(Xi(e))return this.domPositionToView(e.parentNode,hs(e));const i=this.findCorrespondingViewText(e);let r=t;return i?(jt(e)&&(r-=mn,r=r<0?0:r),new W(i,r)):null}else{if(t===0){const i=this.mapDomToView(e);if(i)return new W(i,0)}else{const i=e.childNodes[t-1];if(ot(i)&&Xi(i))return this.domPositionToView(i.parentNode,hs(i));const r=ot(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new W(r.parent,r.index+1)}return null}}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Xi(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof Oe?r:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const r=i.getChild(0);return r instanceof Oe?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=pe.window,r=[];Uf(t,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),t.focus(),Uf(t,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),pe.window.scrollTo(n,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(W0):e.tagName==="BR"&&Wf(e,this.blockElements)&&e.parentNode.childNodes.length===1?!0:e.isEqualNode(G0)||K0(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=fh(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Nf(this._domDocument);case"markedNbsp":return Pf(this._domDocument);case"br":return zf(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(ot(e)&&jt(e)&&t<mn||this.isElement(e)&&jt(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!(n&&(n.is("uiElement")||n.is("rawElement")))}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n)||!n)&&(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";(t.charAt(t.length-2)==" "||!n||i)&&(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if($0(e,this.preElements))return Lf(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),i=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),s=this._checkShouldRightTrimDomText(e,i);r&&(t=t.replace(/^ /,"")),s&&(t=t.replace(/ $/,"")),t=Lf(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const a=i&&this.isElement(i)&&i.tagName!="BR",c=i&&ot(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!i||a||c)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return t?this.isElement(t)?t.tagName==="BR":this._encounteredRawContentDomNodes.has(e.previousSibling)?!1:/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)):!0}_checkShouldRightTrimDomText(e,t){return t?!1:!jt(e)}_getTouchingInlineViewNode(e,t){const n=new Eo({startPosition:t?W._createAfter(e):W._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",i=t?"nextSibling":"previousSibling";let r=!0,s=e;do if(!r&&s[n]?s=s[n]:s[i]?(s=s[i],r=!1):(s=s.parentNode,r=!0),!s||this._isBlockElement(s))return null;while(!(ot(s)||s.tagName=="BR"||this._isInlineObjectElement(s)));return s}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(oi(e))return new ys(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Rt(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Hf,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function $0(o,e){return fh(o).some(n=>n.tagName&&e.includes(n.tagName.toLowerCase()))}function Uf(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function K0(o,e){return o.isEqualNode(q0)&&Wf(o,e)&&o.parentNode.childNodes.length===1}function Wf(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function qf(o){o==="script"&&Ue("domconverter-unsafe-script-element-detected"),o==="style"&&Ue("domconverter-unsafe-style-element-detected")}class pn extends Zn(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!e||e.nodeType!==1?!1:e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}var Y0=_f(function(o,e){Ot(e,ni(e),o)});const Gf=Y0;class li{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Gf(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Jn extends pn{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(n=>{this.listenTo(e,n,(i,r)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(r.target)&&this.onDomEvent(r)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new li(this.view,t,n))}}class Q0 extends Jn{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return ii(this)}};this.fire(e.type,e,t)}}var Z0=function(){return Lt.Date.now()};const dl=Z0;var J0=/\s/;function X0(o){for(var e=o.length;e--&&J0.test(o.charAt(e)););return e}const e1=X0;var t1=/^\s+/;function n1(o){return o&&o.slice(0,e1(o)+1).replace(t1,"")}const o1=n1;var $f=0/0,i1=/^[-+]0x[0-9a-f]+$/i,r1=/^0b[01]+$/i,s1=/^0o[0-7]+$/i,a1=parseInt;function c1(o){if(typeof o=="number")return o;if(ws(o))return $f;if(Me(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=Me(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o1(o);var t=r1.test(o);return t||s1.test(o)?a1(o.slice(2),t?2:8):i1.test(o)?$f:+o}const Kf=c1;var l1="Expected a function",d1=Math.max,u1=Math.min;function h1(o,e,t){var n,i,r,s,a,c,l=0,d=!1,u=!1,p=!0;if(typeof o!="function")throw new TypeError(l1);e=Kf(e)||0,Me(t)&&(d=!!t.leading,u="maxWait"in t,r=u?d1(Kf(t.maxWait)||0,e):r,p="trailing"in t?!!t.trailing:p);function A(J){var le=n,oe=i;return n=i=void 0,l=J,s=o.apply(oe,le),s}function D(J){return l=J,a=setTimeout(q,e),d?A(J):s}function N(J){var le=J-c,oe=J-l,nt=e-le;return u?u1(nt,r-oe):nt}function j(J){var le=J-c,oe=J-l;return c===void 0||le>=e||le<0||u&&oe>=r}function q(){var J=dl();if(j(J))return G(J);a=setTimeout(q,N(J))}function G(J){return a=void 0,p&&n?A(J):(n=i=void 0,s)}function ve(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0}function $e(){return a===void 0?s:G(dl())}function st(){var J=dl(),le=j(J);if(n=arguments,i=this,c=J,le){if(a===void 0)return D(c);if(u)return clearTimeout(a),a=setTimeout(q,e),A(c)}return a===void 0&&(a=setTimeout(q,e)),s}return st.cancel=ve,st.flush=$e,st}const er=h1;class f1 extends pn{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=er(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new gn(t.getRanges(),{backward:t.isBackward,fake:!1});(e==Ce.arrowleft||e==Ce.arrowup)&&n.setTo(n.getFirstPosition()),(e==Ce.arrowright||e==Ce.arrowdown)&&n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}var g1="__lodash_hash_undefined__";function m1(o){return this.__data__.set(o,g1),this}const p1=m1;function k1(o){return this.__data__.has(o)}const b1=k1;function Ss(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new Yn;++e<t;)this.add(o[e])}Ss.prototype.add=Ss.prototype.push=p1,Ss.prototype.has=b1;const w1=Ss;function _1(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1}const A1=_1;function C1(o,e){return o.has(e)}const v1=C1;var y1=1,x1=2;function E1(o,e,t,n,i,r){var s=t&y1,a=o.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),d=r.get(e);if(l&&d)return l==e&&d==o;var u=-1,p=!0,A=t&x1?new w1:void 0;for(r.set(o,e),r.set(e,o);++u<a;){var D=o[u],N=e[u];if(n)var j=s?n(N,D,u,e,o,r):n(D,N,u,o,e,r);if(j!==void 0){if(j)continue;p=!1;break}if(A){if(!A1(e,function(q,G){if(!v1(A,G)&&(D===q||i(D,q,t,n,r)))return A.push(G)})){p=!1;break}}else if(!(D===N||i(D,N,t,n,r))){p=!1;break}}return r.delete(o),r.delete(e),p}const Yf=E1;function D1(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t}const S1=D1;function T1(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t}const I1=T1;var M1=1,B1=2,N1="[object Boolean]",P1="[object Date]",z1="[object Error]",L1="[object Map]",O1="[object Number]",R1="[object RegExp]",j1="[object Set]",F1="[object String]",V1="[object Symbol]",H1="[object ArrayBuffer]",U1="[object DataView]",Qf=Ht?Ht.prototype:void 0,ul=Qf?Qf.valueOf:void 0;function W1(o,e,t,n,i,r,s){switch(t){case U1:if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case H1:return!(o.byteLength!=e.byteLength||!r(new as(o),new as(e)));case N1:case P1:case O1:return Gn(+o,+e);case z1:return o.name==e.name&&o.message==e.message;case R1:case F1:return o==e+"";case L1:var a=S1;case j1:var c=n&M1;if(a||(a=I1),o.size!=e.size&&!c)return!1;var l=s.get(o);if(l)return l==e;n|=B1,s.set(o,e);var d=Yf(a(o),a(e),n,i,r,s);return s.delete(o),d;case V1:if(ul)return ul.call(o)==ul.call(e)}return!1}const q1=W1;var G1=1,$1=Object.prototype,K1=$1.hasOwnProperty;function Y1(o,e,t,n,i,r){var s=t&G1,a=bc(o),c=a.length,l=bc(e),d=l.length;if(c!=d&&!s)return!1;for(var u=c;u--;){var p=a[u];if(!(s?p in e:K1.call(e,p)))return!1}var A=r.get(o),D=r.get(e);if(A&&D)return A==e&&D==o;var N=!0;r.set(o,e),r.set(e,o);for(var j=s;++u<c;){p=a[u];var q=o[p],G=e[p];if(n)var ve=s?n(G,q,p,e,o,r):n(q,G,p,o,e,r);if(!(ve===void 0?q===G||i(q,G,t,n,r):ve)){N=!1;break}j||(j=p=="constructor")}if(N&&!j){var $e=o.constructor,st=e.constructor;$e!=st&&"constructor"in o&&"constructor"in e&&!(typeof $e=="function"&&$e instanceof $e&&typeof st=="function"&&st instanceof st)&&(N=!1)}return r.delete(o),r.delete(e),N}const Q1=Y1;var Z1=1,Zf="[object Arguments]",Jf="[object Array]",Ts="[object Object]",J1=Object.prototype,Xf=J1.hasOwnProperty;function X1(o,e,t,n,i,r){var s=mt(o),a=mt(e),c=s?Jf:$i(o),l=a?Jf:$i(e);c=c==Zf?Ts:c,l=l==Zf?Ts:l;var d=c==Ts,u=l==Ts,p=c==l;if(p&&qi(o)){if(!qi(e))return!1;s=!0,d=!1}if(p&&!d)return r||(r=new g),s||gc(o)?Yf(o,e,t,n,i,r):q1(o,e,c,t,n,i,r);if(!(t&Z1)){var A=d&&Xf.call(o,"__wrapped__"),D=u&&Xf.call(e,"__wrapped__");if(A||D){var N=A?o.value():o,j=D?e.value():e;return r||(r=new g),i(N,j,t,n,r)}}return p?(r||(r=new g),Q1(o,e,t,n,i,r)):!1}const ex=X1;function eg(o,e,t,n,i){return o===e?!0:o==null||e==null||!Mt(o)&&!Mt(e)?o!==o&&e!==e:ex(o,e,t,n,eg,i)}const tg=eg;function tx(o,e,t){t=typeof t=="function"?t:void 0;var n=t?t(o,e):void 0;return n===void 0?tg(o,e,void 0,t):!!n}const nx=tx;class ng extends pn{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const s of e){const a=t.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type==="childList"&&!this._isBogusBrMutation(s)&&i.add(a))}for(const s of e){const a=t.mapDomToView(s.target);if(!(a&&(a.is("uiElement")||a.is("rawElement")))&&s.type==="characterData"){const c=t.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&jt(s.target)&&i.add(t.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of i){const a=t.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(t.domChildrenToView(a,{withChildren:!1}));nx(c,l,ox)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function ox(o,e){if(!Array.isArray(o))return o===e?!0:o.is("$text")&&e.is("$text")?o.data===e.data:!1}class hl extends Jn{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const r=t.selection.editableElement;(r===null||r===i.target)&&(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ix extends pn{constructor(e){super(e),this.mutationObserver=e.getObserver(ng),this.focusObserver=e.getObserver(hl),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=er(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=er(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},i=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",n,{priority:"highest"}),this.listenTo(e,"keydown",i,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",i,{priority:"highest",useCapture:!0}),!this._documents.has(t)&&(this.listenTo(t,"mouseup",i,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(r,s)=>{this.document.isComposing&&!k.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount==0){this.view.hasDomSelection=!1;return}if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n))&&!(++this._loopbackCounter>60))if(this.focusObserver.flush(),this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class rx extends Jn{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class og{constructor(e,t={}){this._files=t.cacheFiles?ig(e):null,this._native=e}get files(){return this._files||(this._files=ig(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function ig(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class sx extends Jn{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(e.dataTransfer&&(r=new og(e.dataTransfer)),e.data!==null?s=e.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(t.length)a=t.map(c=>n.domConverter.domRangeToView(c));else if(k.isAndroid){const c=e.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(k.isAndroid&&e.inputType=="insertCompositionText"&&s&&s.endsWith(`
`)){this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});return}if(e.inputType=="insertText"&&s&&s.includes(`
`)){const c=s.split(/\n{1,2}/g);let l=a;for(let d=0;d<c.length;d++){const u=c[d];u!=""&&(this.fire(e.type,e,{data:u,dataTransfer:r,targetRanges:l,inputType:e.inputType,isComposing:e.isComposing}),l=[i.selection.getFirstRange()]),d+1<c.length&&(this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:l}),l=[i.selection.getFirstRange()])}return}this.fire(e.type,e,{data:s,dataTransfer:r,targetRanges:a,inputType:e.inputType,isComposing:e.isComposing})}}class ax extends pn{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&nv(n.keyCode)){const i=new ai(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(i,n),i.stop.called&&t.stop()}})}observe(){}}class cx extends pn{constructor(e){super(e);const t=this.document;t.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=Ce.tab||i.ctrlKey)return;const r=new ai(t,"tab",t.selection.getFirstRange());t.fire(r,i),r.stop.called&&n.stop()})}observe(){}}class lx extends we(){constructor(e){super(),this.document=new vs(e),this.domConverter=new Ds(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new R0(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Sf(this.document),this.addObserver(ng),this.addObserver(hl),this.addObserver(ix),this.addObserver(Q0),this.addObserver(f1),this.addObserver(rx),this.addObserver(ax),this.addObserver(sx),this.addObserver(cx),L0(this),S0(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const i={};for(const{name:s,value:a}of Array.from(e.attributes))i[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(e,i);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:i})=>t.removeAttribute(i));const n=this._initialDomRootAttributes.get(t);for(const i in n)t.setAttribute(i,n[i]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,i]of this.domRoots)t.observe(i,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&QC({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new _("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){_.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(hl).flush(),this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return W._createAt(e,t)}createPositionAfter(e){return W._createAfter(e)}createPositionBefore(e){return W._createBefore(e)}createRange(...e){return new ae(...e)}createRangeOn(e){return ae._createOn(e)}createRangeIn(e){return ae._createIn(e)}createSelection(...e){return new gn(...e)}_disableRendering(e){this._renderingDisabled=e,e==!1&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Xn{is(){throw new Error("is() method is abstract")}}class di extends Xn{constructor(e){super(),this.parent=null,this._attrs=un(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new _("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new _("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=gt(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this==e||this.root!==e.root?!1:!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=un(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}di.prototype.is=function(o){return o==="node"||o==="model:node"};class tr{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new _("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new _("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof di))throw new _("model-nodelist-insertnodes-not-node",this);this._nodes=mv(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Re extends di{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Re(this.data,this.getAttributes())}static fromJSON(e){return new Re(e.data,e.attributes)}}Re.prototype.is=function(o){return o==="$text"||o==="model:$text"||o==="text"||o==="model:text"||o==="node"||o==="model:node"};class on extends Xn{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new _("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new _("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}on.prototype.is=function(o){return o==="$textProxy"||o==="model:$textProxy"||o==="textProxy"||o==="model:textProxy"};class Ne extends di{constructor(e,t,n){super(t),this._children=new tr,this.name=e,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new Ne(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=dx(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(Ne.fromJSON(n)):t.push(Re.fromJSON(n))}return new Ne(e.name,e.attributes,t)}}Ne.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="model:element"):o==="element"||o==="model:element"||o==="node"||o==="model:node"};function dx(o){return typeof o=="string"?[new Re(o)]:(Et(o)||(o=[o]),Array.from(o).map(e=>typeof e=="string"?new Re(e):e instanceof on?new Re(e.data,e.getAttributes()):e))}class kn{constructor(e){if(!e||!e.boundaries&&!e.startPosition)throw new _("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new _("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=H._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,i,r;do i=this.position,r=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const i=nr(t,n),r=i||rg(t,n,i);if(r instanceof Ne)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,To("elementStart",r,e,t,1);if(r instanceof Re){let s;if(this.singleCharacters)s=1;else{let l=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<l&&(l=this.boundaries.end.offset),s=l-t.offset}const a=t.offset-r.startOffset,c=new on(r,a,s);return t.offset+=s,this.position=t,To("text",c,e,t,s)}else return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():To("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const i=t.parent,r=nr(t,i),s=r||sg(t,i,r);if(s instanceof Ne)return t.offset--,this.shallow?(this.position=t,To("elementStart",s,e,t,1)):(t.path.push(s.maxOffset),this.position=t,this._visitedParent=s,this.ignoreElementEnd?this._previous():To("elementEnd",s,e,t));if(s instanceof Re){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=t.offset-d}const c=t.offset-s.startOffset,l=new on(s,c-a,a);return t.offset-=a,this.position=t,To("text",l,e,t,a)}else return t.path.pop(),this.position=t,this._visitedParent=n.parent,To("elementStart",n,e,t,1)}}function To(o,e,t,n,i){return{done:!1,value:{type:o,item:e,previousPosition:t,nextPosition:n,length:i}}}class H extends Xn{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new _("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new _("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new _("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new _("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return nr(this,this.parent)}get nodeAfter(){const e=this.parent;return rg(this,e,nr(this,e))}get nodeBefore(){const e=this.parent;return sg(this,e,nr(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=gt(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new kn(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=gt(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){if(this.root!==e.root)return!1;const t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){const i=this.path[n]-e.path[n];if(i<-1||i>1)return!1;if(i===1)return ag(e,this,n);if(i===-1)return ag(this,e,n)}return this.path.length===e.path.length?!0:this.path.length>e.path.length?fl(this.path,t):fl(e.path,t)}hasSameParentAs(e){if(this.root!==e.root)return!1;const t=this.getParentPath(),n=e.getParentPath();return gt(t,n)=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=H._createAt(this);break}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange,n=t.containsPosition(this)||t.start.isEqual(this);let i;return n?(i=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(i=i._getTransformedByDeletion(e.deletionPosition,1))):this.isEqual(e.deletionPosition)?i=H._createAt(e.deletionPosition):i=this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),i}_getTransformedByDeletion(e,t){const n=H._createAt(this);if(this.root!=e.root)return n;if(gt(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(gt(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;if(e.offset<=this.path[i]){if(e.offset+t>this.path[i])return null;n.path[i]-=t}}return n}_getTransformedByInsertion(e,t){const n=H._createAt(this);if(this.root!=e.root)return n;if(gt(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(gt(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;e.offset<=this.path[i]&&(n.path[i]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return H._createAt(this);const i=this._getTransformedByDeletion(e,n);return i===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):i._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,i=H._createAt(t);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-e.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof H)return new H(e.root,e.path,e.stickiness);{const i=e;if(t=="end")t=i.maxOffset;else{if(t=="before")return this._createBefore(i,n);if(t=="after")return this._createAfter(i,n);if(t!==0&&!t)throw new _("model-createpositionat-offset-required",[this,e])}if(!i.is("element")&&!i.is("documentFragment"))throw new _("model-position-parent-incorrect",[this,e]);const r=i.getPath();return r.push(t),new this(i.root,r,n)}}static _createAfter(e,t){if(!e.parent)throw new _("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new _("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new H(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new _("model-position-fromjson-no-root",t,{rootName:e.root});return new H(t.getRoot(e.root),e.path,e.stickiness)}}H.prototype.is=function(o){return o==="position"||o==="model:position"};function nr(o,e){const t=e.getChild(e.offsetToIndex(o.offset));return t&&t.is("$text")&&t.startOffset<o.offset?t:null}function rg(o,e,t){return t!==null?null:e.getChild(e.offsetToIndex(o.offset))}function sg(o,e,t){return t!==null?null:e.getChild(e.offsetToIndex(o.offset)-1)}function ag(o,e,t){return!(t+1===o.path.length||!fl(e.path,t+1)||!ux(o,t+1))}function fl(o,e){for(;e<o.length;){if(o[e]!==0)return!1;e++}return!0}function ux(o,e){let t=o.parent,n=o.path.length-1,i=0;for(;n>=e;){if(o.path[n]+i!==t.maxOffset)return!1;i=1,n--,t=t.parent}return!0}class z extends Xn{constructor(e,t){super(),this.start=H._createAt(e),this.end=t?H._createAt(t):H._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new kn({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){const e=this.start.getParentPath(),t=this.end.getParentPath();return gt(e,t)=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}containsItem(e){const t=H._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new z(this.start,e.start)),this.containsPosition(e.end)&&t.push(new z(e.end,this.end))):t.push(new z(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new z(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(this.start.isBefore(e.start)?n=t?this.end.isTouching(e.start):this.end.isEqual(e.start):n=t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let i=this.start,r=this.end;return e.start.isBefore(i)&&(i=e.start),e.end.isAfter(r)&&(r=e.end),new z(i,r)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=H._createAt(this.start);let i=n.parent;for(;n.path.length>t+1;){const r=i.maxOffset-n.offset;r!==0&&e.push(new z(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&e.push(new z(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new kn(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new kn(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new kn(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new z(this.start,this.end)]}getTransformedByOperations(e){const t=[new z(this.start,this.end)];for(const n of e)for(let i=0;i<t.length;i++){const r=t[i].getTransformedByOperation(n);t.splice(i,1,...r),i+=r.length-1}for(let n=0;n<t.length;n++){const i=t[n];for(let r=n+1;r<t.length;r++){const s=t[r];(i.containsRange(s)||s.containsRange(i)||i.isEqual(s))&&t.splice(r,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,i=e.howMany,r=e.targetPosition;return this._getTransformedByMove(n,r,i,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new z(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new z(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=H._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new z(t,n)):new z(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new z(this.start,e),new z(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new z(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,n,i=!1){if(this.isCollapsed){const u=this.start._getTransformedByMove(e,t,n);return[new z(u)]}const r=z._createFromPositionAndShift(e,n),s=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!i&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const u=this.start._getTransformedByMove(e,t,n),p=this.end._getTransformedByMove(e,t,n);return[new z(u,p)]}let a;const c=this.getDifference(r);let l=null;const d=this.getIntersection(r);if(c.length==1?l=new z(c[0].start._getTransformedByDeletion(e,n),c[0].end._getTransformedByDeletion(e,n)):c.length==2&&(l=new z(this.start,this.end._getTransformedByDeletion(e,n))),l?a=l._getTransformedByInsertion(s,n,d!==null||i):a=[],d){const u=new z(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,u):a.push(u)}return a}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),i=this.end._getTransformedByDeletion(e,t);return n==null&&i==null?null:(n==null&&(n=e),i==null&&(i=e),new z(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return new this(H._createAt(e,0),H._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(H._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new _("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=e.indexOf(t),i=new this(t.start,t.end);if(n>0)for(let r=n-1;e[r].end.isEqual(i.start);r++)i.start=H._createAt(e[r].start);for(let r=n+1;r<e.length&&e[r].start.isEqual(i.end);r++)i.end=H._createAt(e[r].end);return i}static fromJSON(e,t){return new this(H.fromJSON(e.start,t),H.fromJSON(e.end,t))}}z.prototype.is=function(o){return o==="range"||o==="model:range"};class cg extends v(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new _("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),i=this._viewToModelMapping.get(n),r=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=H._createAt(i,r)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const i of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(i);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const i=this._elementToMarkerNames.get(e)||new Set;i.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,i)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const i=this._elementToMarkerNames.get(e);i&&(i.delete(t),i.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new z(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new ae(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const i of t)if(i.is("attributeElement"))for(const r of i.getElementsWithSameId())n.add(r);else n.add(i);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e){const r=this._toModelOffset(e.parent,e.index,n),s=this._toModelOffset(e,t,e);return r+s}if(e.is("$text"))return t;let i=0;for(let r=0;r<t;r++)i+=this.getModelLength(e.getChild(r));return i}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,i=0,r=0,s=0;if(e.is("$text"))return new W(e,t);for(;r<t;)n=e.getChild(s),i=this.getModelLength(n),r+=i,s++;return r==t?this._moveViewPositionToTextNode(new W(e,s)):this.findPositionIn(n,t-(r-i))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof Oe?new W(t,t.data.length):n instanceof Oe?new W(n,0):e}}class hx{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Is(t),e instanceof on&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Is(t),e instanceof on&&(e=this._getSymbolForTextProxy(e)),this.test(e,t)?(this._consumable.get(e).set(t,!1),!0):!1}test(e,t){t=Is(t),e instanceof on&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const i=n.get(t);return i===void 0?null:i}revert(e,t){t=Is(t),e instanceof on&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n===!0?!1:null}verifyAllConsumed(e){const t=[];for(const[n,i]of this._consumable)for(const[r,s]of i){const a=r.split(":")[0];s&&e==a&&t.push({event:r,item:n.name||n.description})}if(t.length)throw new _("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const i=n.get(e.endOffset);i&&(t=i.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,i=e.parent,r=Symbol("$textProxy:"+e.data);let s,a;return s=this._textProxyRegistry.get(t),s||(s=new Map,this._textProxyRegistry.set(t,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(i,r),r}}function Is(o){const e=o.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?o:e.length>1?e[0]+":"+e[1]:e[0]}class lg extends v(){constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const i=this._createConversionApi(n,e.getRefreshedItems());for(const s of e.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,i);const r=this._reduceChanges(e.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(z._createFromPositionAndShift(s.position,s.length),i):s.type==="reinsert"?this._convertReinsert(z._createFromPositionAndShift(s.position,s.length),i):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,i):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,i);for(const s of i.mapper.flushUnboundMarkerNames()){const a=t.get(s).getRange();this._convertMarkerRemove(s,a,i),this._convertMarkerAdd(s,a,i)}for(const s of e.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(e,t,n,i={}){const r=this._createConversionApi(n,void 0,i);this._convertInsert(e,r);for(const[s,a]of t)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const i=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,e,i),this.fire("selection",{selection:e},r),!!e.isCollapsed){for(const s of i){const a=s.getRange();if(!fx(e.getFirstPosition(),s,r.mapper))continue;const c={item:e,markerName:s.name,markerRange:a};r.consumable.test(e,"addMarker:"+s.name)&&this.fire(`addMarker:${s.name}`,c,r)}for(const s of e.getAttributeKeys()){const a={item:e,range:e.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:e.getAttribute(s)};r.consumable.test(e,"attribute:"+a.attributeKey)&&this.fire(`attribute:${a.attributeKey}:$text`,a,r)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const i of Array.from(e.getWalker({shallow:!0})).map(dg))this._testAndFire("insert",i,t)}_convertRemove(e,t,n,i){this.fire(`remove:${n}`,{position:e,length:t},i)}_convertAttribute(e,t,n,i,r){this._addConsumablesForRange(r.consumable,e,`attribute:${t}`);for(const s of e){const a={item:s.item,range:z._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:t,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${t}`,a,r)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const i of n.map(dg))this._testAndFire("insert",{...i,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const i=`addMarker:${e}`;if(n.consumable.add(t,i),this.fire(i,{markerName:e,markerRange:t},n),!!n.consumable.consume(t,i)){this._addConsumablesForRange(n.consumable,t,i);for(const r of t.getItems()){if(!n.consumable.test(r,i))continue;const s={item:r,range:z._createOn(r),markerName:e,markerRange:t};this.fire(i,s,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const i=n.item;if(e.test(i,"insert")===null){e.add(i,"insert");for(const r of i.getAttributeKeys())e.add(i,"attribute:"+r)}}return e}_addConsumablesForRange(e,t,n){for(const i of t.getItems())e.add(i,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const i of n)e.add(t,"addMarker:"+i.name);for(const i of t.getAttributeKeys())e.add(t,"attribute:"+i);return e}_testAndFire(e,t,n){const i=gx(e,t),r=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,s=this._firedEventsMap.get(n),a=s.get(r);if(!a)s.set(r,new Set([i]));else if(!a.has(i))a.add(i);else return;this.fire(i,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:z._createOn(e)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,t)}_createConversionApi(e,t=new Set,n={}){const i={...this._conversionApi,consumable:new hx,writer:e,options:n,convertItem:r=>this._convertInsert(z._createOn(r),i),convertChildren:r=>this._convertInsert(z._createIn(r),i,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,i),canReuseView:r=>!t.has(i.mapper.toModelElement(r))};return this._firedEventsMap.set(i,new Map),i}}function fx(o,e,t){const n=e.getRange(),i=Array.from(o.getAncestors());return i.shift(),i.reverse(),!i.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function gx(o,e){const t=e.item.is("element")?e.item.name:"$text";return`${o}:${t}`}function dg(o){const e=o.item,t=z._createFromPositionAndShift(o.previousPosition,o.length);return{item:e,range:t}}class bn extends v(Xn){constructor(...e){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1?this._ranges[0].isCollapsed:!1}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new z(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?new z(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?new z(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof bn)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof z)this._setRanges([t],!!i&&!!i.backward);else if(t instanceof H)this._setRanges([new z(t)]);else if(t instanceof di){const r=!!i&&!!i.backward;let s;if(n=="in")s=z._createIn(t);else if(n=="on")s=z._createOn(t);else if(n!==void 0)s=new z(H._createAt(t,n));else throw new _("model-selection-setto-required-second-parameter",[this,t]);this._setRanges([s],r)}else if(Et(t))this._setRanges(t,i&&!!i.backward);else throw new _("model-selection-setto-not-selectable",[this,t])}_setRanges(e,t=!1){const n=Array.from(e),i=n.some(r=>{if(!(r instanceof z))throw new _("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(r))});n.length===this._ranges.length&&!i||(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new _("model-selection-setfocus-no-ranges",[this,e]);const n=H._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new z(n,i)),this._lastRangeBackward=!0):(this._pushRange(new z(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=hg(t.start,e);n&&gl(n,t)&&(yield n);for(const r of t.getWalker()){const s=r.item;r.type=="elementEnd"&&mx(s,e,t)&&(yield s)}const i=hg(t.end,e);i&&!t.end.isTouching(H._createAt(i,0))&&gl(i,t)&&(yield i)}}containsEntireContent(e=this.anchor.root){const t=H._createAt(e,0),n=H._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new z(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new _("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}bn.prototype.is=function(o){return o==="selection"||o==="model:selection"};function ug(o,e){return e.has(o)?!1:(e.add(o),o.root.document.model.schema.isBlock(o)&&!!o.parent)}function mx(o,e,t){return ug(o,e)&&gl(o,t)}function hg(o,e){const n=o.parent.root.document.model.schema,i=o.parent.getAncestors({parentFirst:!0,includeSelf:!0});let r=!1;const s=i.find(a=>r?!1:(r=n.isLimit(a),!r&&ug(a,e)));return i.forEach(a=>e.add(a)),s}function gl(o,e){const t=px(o);return t?!e.containsRange(z._createOn(t),!0):!0}function px(o){const e=o.root.document.model.schema;let t=o.parent;for(;t;){if(e.isBlock(t))return t;t=t.parent}}class rn extends v(z){constructor(e,t){super(e,t),kx.call(this)}detach(){this.stopListening()}toRange(){return new z(this.start,this.end)}static fromRange(e){return new rn(e.start,e.end)}}rn.prototype.is=function(o){return o==="liveRange"||o==="model:liveRange"||o=="range"||o==="model:range"};function kx(){this.listenTo(this.root.document.model,"applyOperation",(o,e)=>{const t=e[0];t.isDocumentOperation&&bx.call(this,t)},{priority:"low"})}function bx(o){const e=this.getTransformedByOperation(o),t=z._createFromRanges(e),n=!t.isEqual(this),i=wx(this,o);let r=null;if(n){t.root.rootName=="$graveyard"&&(o.type=="remove"?r=o.sourcePosition:r=o.deletionPosition);const s=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",s,{deletionPosition:r})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:r})}function wx(o,e){switch(e.type){case"insert":return o.containsPosition(e.position);case"move":case"remove":case"reinsert":case"merge":return o.containsPosition(e.sourcePosition)||o.start.isEqual(e.sourcePosition)||o.containsPosition(e.targetPosition);case"split":return o.containsPosition(e.splitPosition)||o.containsPosition(e.insertionPosition)}return!1}const or="selection:";class qt extends v(Xn){constructor(e){super(),this._selection=new _x(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return or+e}static _isStoreAttributeKey(e){return e.startsWith(or)}}qt.prototype.is=function(o){return o==="selection"||o=="model:selection"||o=="documentSelection"||o=="model:documentSelection"};class _x extends bn{constructor(e){super(),this.markers=new St({idProperty:"name"}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=e.model,this._document=e,this.listenTo(this._model,"applyOperation",(t,n)=>{const i=n[0];!i.isDocumentOperation||i.type=="marker"||i.type=="rename"||i.type=="noop"||(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,i,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(t,n)=>{Ax(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=lt();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new _("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new _("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=rn.fromRange(e);return t.on("change:range",(n,i,r)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(t);this._ranges.splice(s,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const i of this._model.markers){const r=i.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=i.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&e.push(i)}const n=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const r=Array.from(this.markers),s=this.markers.has(e);if(!t)s&&(this.markers.remove(e),i=!0);else{let a=!1;for(const c of this.getRanges())if(t.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(e),i=!0):!a&&s&&(this.markers.remove(e),i=!0)}i&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(e){const t=un(this._getSurroundingAttributes()),n=un(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(t);const i=[];for(const[r,s]of this.getAttributes())(!n.has(r)||n.get(r)!==s)&&i.push(r);for(const[r]of n)this.hasAttribute(r)||i.push(r);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(e,t,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(e)=="normal"||super.getAttribute(e)===t?!1:(this._attrs.set(e,t),this._attributePriority.set(e,i),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return n=="low"&&this._attributePriority.get(e)=="normal"||(this._attributePriority.set(e,n),!super.hasAttribute(e))?!1:(this._attrs.delete(e),!0)}_setAttributesTo(e){const t=new Set;for(const[n,i]of this.getAttributes())e.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of e)this._setAttribute(n,i,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(or)&&(yield[t.substr(or.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const i=e.textNode?e.textNode:e.nodeBefore,r=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Ms(i)),n||(n=Ms(r)),!this.isGravityOverridden&&!n){let s=i;for(;s&&!t.isInline(s)&&!n;)s=s.previousSibling,n=Ms(s)}if(!n){let s=r;for(;s&&!t.isInline(s)&&!n;)s=s.nextSibling,n=Ms(s)}n||(n=this.getStoredAttributes())}else{const i=this.getFirstRange();for(const r of i){if(r.item.is("element")&&t.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Ms(o){return o instanceof on||o instanceof Re?o.getAttributes():null}function Ax(o,e){const t=o.document.differ;for(const n of t.getChanges()){if(n.type!="insert")continue;const i=n.position.parent;n.length===i.maxOffset&&o.enqueueChange(e,s=>{const a=Array.from(i.getAttributeKeys()).filter(c=>c.startsWith(or));for(const c of a)s.removeAttribute(c,i)})}}class fg{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}var Cx=1,vx=4;function yx(o){return yc(o,Cx|vx)}const Io=yx;class xx extends fg{elementToElement(e){return this.add(Ux(e))}elementToStructure(e){return this.add(Wx(e))}attributeToElement(e){return this.add(qx(e))}attributeToAttribute(e){return this.add(Gx(e))}markerToElement(e){return this.add($x(e))}markerToHighlight(e){return this.add(Yx(e))}markerToData(e){return this.add(Kx(e))}}function gg(){return(o,e,t)=>{if(!t.consumable.consume(e.item,o.name))return;const n=t.writer,i=t.mapper.toViewPosition(e.range.start),r=n.createText(e.item.data);n.insert(i,r)}}function mg(){return(o,e,t)=>{t.convertAttributes(e.item),!e.reconversion&&e.item.is("element")&&!e.item.isEmpty&&t.convertChildren(e.item)}}function Ex(){return(o,e,t)=>{const n=t.mapper.toViewPosition(e.position),i=e.position.getShiftedBy(e.length),r=t.mapper.toViewPosition(i,{isPhantom:!0}),s=t.writer.createRange(n,r),a=t.writer.remove(s.getTrimmed());for(const c of t.writer.createRangeIn(a).getItems())t.mapper.unbindViewElement(c,{defer:!0})}}function pg(o,e){const t=o.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Dx(){return(o,e,t)=>{const n=e.selection;if(n.isCollapsed||!t.consumable.consume(n,"selection"))return;const i=[];for(const r of n.getRanges())i.push(t.mapper.toViewRange(r));t.writer.setSelection(i,{backward:n.isBackward})}}function Sx(){return(o,e,t)=>{const n=e.selection;if(!n.isCollapsed||!t.consumable.consume(n,"selection"))return;const i=t.writer,r=n.getFirstPosition(),s=t.mapper.toViewPosition(r),a=i.breakAttributes(s);i.setSelection(a)}}function Tx(){return(o,e,t)=>{const n=t.writer,i=n.document.selection;for(const r of i.getRanges())r.isCollapsed&&r.end.parent.isAttached()&&t.writer.mergeAttributes(r.start);n.setSelection(null)}}function Ix(o){return(e,t,n)=>{if(!n.consumable.test(t.item,e.name))return;const i=o(t.attributeOldValue,n,t),r=o(t.attributeNewValue,n,t);if(!i&&!r)return;n.consumable.consume(t.item,e.name);const s=n.writer,a=s.document.selection;if(t.item instanceof bn||t.item instanceof qt)s.wrap(a.getFirstRange(),r);else{let c=n.mapper.toViewRange(t.range);t.attributeOldValue!==null&&i&&(c=s.unwrap(c,i)),t.attributeNewValue!==null&&r&&s.wrap(c,r)}}}function Mx(o,e=nE){return(t,n,i)=>{if(!e(n.item,i.consumable,{preflight:!0}))return;const r=o(n.item,i,n);if(!r)return;e(n.item,i.consumable);const s=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(n.item,r),i.writer.insert(s,r),i.convertAttributes(n.item),vg(r,n.item.getChildren(),i,{reconversion:n.reconversion})}}function Bx(o,e){return(t,n,i)=>{if(!e(n.item,i.consumable,{preflight:!0}))return;const r=new Map;i.writer._registerSlotFactory(Jx(n.item,r,i));const s=o(n.item,i,n);if(i.writer._clearSlotFactory(),!s)return;Xx(n.item,r,i),e(n.item,i.consumable);const a=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(n.item,s),i.writer.insert(a,s),i.convertAttributes(n.item),eE(s,r,i,{reconversion:n.reconversion})}}function Nx(o){return(e,t,n)=>{t.isOpening=!0;const i=o(t,n);t.isOpening=!1;const r=o(t,n);if(!i||!r)return;const s=t.markerRange;if(s.isCollapsed&&!n.consumable.consume(s,e.name))return;for(const l of s)if(!n.consumable.consume(l.item,e.name))return;const a=n.mapper,c=n.writer;c.insert(a.toViewPosition(s.start),i),n.mapper.bindElementToMarker(i,t.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),n.mapper.bindElementToMarker(r,t.markerName)),e.stop()}}function Px(){return(o,e,t)=>{const n=t.mapper.markerNameToElements(e.markerName);if(n){for(const i of n)t.mapper.unbindElementFromMarkerName(i,e.markerName),t.writer.clear(t.writer.createRangeOn(i),i);t.writer.clearClonedElementsGroup(e.markerName),o.stop()}}}function zx(o){return(e,t,n)=>{const i=o(t.markerName,n);if(!i)return;const r=t.markerRange;n.consumable.consume(r,e.name)&&(kg(r,!1,n,t,i),kg(r,!0,n,t,i),e.stop())}}function kg(o,e,t,n,i){const r=e?o.start:o.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let l,d;e&&s||!e&&!a?(l=s,d=!0):(l=a,d=!1);const u=t.mapper.toViewElement(l);if(u){Lx(u,e,d,t,n,i);return}}const c=t.mapper.toViewPosition(r);Ox(c,e,t,n,i)}function Lx(o,e,t,n,i,r){const s=`data-${r.group}-${e?"start":"end"}-${t?"before":"after"}`,a=o.hasAttribute(s)?o.getAttribute(s).split(","):[];a.unshift(r.name),n.writer.setAttribute(s,a.join(","),o),n.mapper.bindElementToMarker(o,i.markerName)}function Ox(o,e,t,n,i){const r=`${i.group}-${e?"start":"end"}`,s=i.name?{name:i.name}:null,a=t.writer.createUIElement(r,s);t.writer.insert(o,a),t.mapper.bindElementToMarker(a,n.markerName)}function Rx(o){return(e,t,n)=>{const i=o(t.markerName,n);if(!i)return;const r=n.mapper.markerNameToElements(t.markerName);if(!r)return;for(const a of r)n.mapper.unbindElementFromMarkerName(a,t.markerName),a.is("containerElement")?(s(`data-${i.group}-start-before`,a),s(`data-${i.group}-start-after`,a),s(`data-${i.group}-end-before`,a),s(`data-${i.group}-end-after`,a)):n.writer.clear(n.writer.createRangeOn(a),a);n.writer.clearClonedElementsGroup(t.markerName),e.stop();function s(a,c){if(c.hasAttribute(a)){const l=new Set(c.getAttribute(a).split(","));l.delete(i.name),l.size==0?n.writer.removeAttribute(a,c):n.writer.setAttribute(a,Array.from(l).join(","),c)}}}}function jx(o){return(e,t,n)=>{if(!n.consumable.test(t.item,e.name))return;const i=o(t.attributeOldValue,n,t),r=o(t.attributeNewValue,n,t);if(!i&&!r)return;n.consumable.consume(t.item,e.name);const s=n.mapper.toViewElement(t.item),a=n.writer;if(!s)throw new _("conversion-attribute-to-attribute-on-text",n.dispatcher,t);if(t.attributeOldValue!==null&&i)if(i.key=="class"){const c=kt(i.value);for(const l of c)a.removeClass(l,s)}else if(i.key=="style"){const c=Object.keys(i.value);for(const l of c)a.removeStyle(l,s)}else a.removeAttribute(i.key,s);if(t.attributeNewValue!==null&&r)if(r.key=="class"){const c=kt(r.value);for(const l of c)a.addClass(l,s)}else if(r.key=="style"){const c=Object.keys(r.value);for(const l of c)a.setStyle(l,r.value[l],s)}else a.setAttribute(r.key,r.value,s)}}function Fx(o){return(e,t,n)=>{if(!t.item||!(t.item instanceof bn||t.item instanceof qt)&&!t.item.is("$textProxy"))return;const i=ml(o,t,n);if(!i||!n.consumable.consume(t.item,e.name))return;const r=n.writer,s=pg(r,i),a=r.document.selection;if(t.item instanceof bn||t.item instanceof qt)r.wrap(a.getFirstRange(),s);else{const c=n.mapper.toViewRange(t.range),l=r.wrap(c,s);for(const d of l.getItems())if(d.is("attributeElement")&&d.isSimilar(s)){n.mapper.bindElementToMarker(d,t.markerName);break}}}}function Vx(o){return(e,t,n)=>{if(!t.item||!(t.item instanceof Ne))return;const i=ml(o,t,n);if(!i||!n.consumable.test(t.item,e.name))return;const r=n.mapper.toViewElement(t.item);if(r&&r.getCustomProperty("addHighlight")){n.consumable.consume(t.item,e.name);for(const a of z._createIn(t.item))n.consumable.consume(a.item,e.name);r.getCustomProperty("addHighlight")(r,i,n.writer),n.mapper.bindElementToMarker(r,t.markerName)}}}function Hx(o){return(e,t,n)=>{if(t.markerRange.isCollapsed)return;const i=ml(o,t,n);if(!i)return;const r=pg(n.writer,i),s=n.mapper.markerNameToElements(t.markerName);if(s){for(const a of s)n.mapper.unbindElementFromMarkerName(a,t.markerName),a.is("attributeElement")?n.writer.unwrap(n.writer.createRangeOn(a),r):a.getCustomProperty("removeHighlight")(a,i.id,n.writer);n.writer.clearClonedElementsGroup(t.markerName),e.stop()}}}function Ux(o){const e=bg(o.model),t=ir(o.view,"container");return e.attributes.length&&(e.children=!0),n=>{n.on(`insert:${e.name}`,Mx(t,Cg(e)),{priority:o.converterPriority||"normal"}),(e.children||e.attributes.length)&&n.on("reduceChanges",Ag(e),{priority:"low"})}}function Wx(o){const e=bg(o.model),t=ir(o.view,"container");return e.children=!0,n=>{if(n._conversionApi.schema.checkChild(e.name,"$text"))throw new _("conversion-element-to-structure-disallowed-text",n,{elementName:e.name});n.on(`insert:${e.name}`,Bx(t,Cg(e)),{priority:o.converterPriority||"normal"}),n.on("reduceChanges",Ag(e),{priority:"low"})}}function qx(o){o=Io(o);let e=o.model;typeof e=="string"&&(e={key:e});let t=`attribute:${e.key}`;if(e.name&&(t+=":"+e.name),e.values)for(const i of e.values)o.view[i]=ir(o.view[i],"attribute");else o.view=ir(o.view,"attribute");const n=wg(o);return i=>{i.on(t,Ix(n),{priority:o.converterPriority||"normal"})}}function Gx(o){o=Io(o);let e=o.model;typeof e=="string"&&(e={key:e});let t=`attribute:${e.key}`;if(e.name&&(t+=":"+e.name),e.values)for(const i of e.values)o.view[i]=_g(o.view[i]);else o.view=_g(o.view);const n=wg(o);return i=>{i.on(t,jx(n),{priority:o.converterPriority||"normal"})}}function $x(o){const e=ir(o.view,"ui");return t=>{t.on(`addMarker:${o.model}`,Nx(e),{priority:o.converterPriority||"normal"}),t.on(`removeMarker:${o.model}`,Px(),{priority:o.converterPriority||"normal"})}}function Kx(o){o=Io(o);const e=o.model;let t=o.view;return t||(t=n=>({group:e,name:n.substr(o.model.length+1)})),n=>{n.on(`addMarker:${e}`,zx(t),{priority:o.converterPriority||"normal"}),n.on(`removeMarker:${e}`,Rx(t),{priority:o.converterPriority||"normal"})}}function Yx(o){return e=>{e.on(`addMarker:${o.model}`,Fx(o.view),{priority:o.converterPriority||"normal"}),e.on(`addMarker:${o.model}`,Vx(o.view),{priority:o.converterPriority||"normal"}),e.on(`removeMarker:${o.model}`,Hx(o.view),{priority:o.converterPriority||"normal"})}}function bg(o){return typeof o=="string"&&(o={name:o}),o.attributes?Array.isArray(o.attributes)||(o.attributes=[o.attributes]):o.attributes=[],o.children=!!o.children,o}function ir(o,e){return typeof o=="function"?o:(t,n)=>Qx(o,n,e)}function Qx(o,e,t){typeof o=="string"&&(o={name:o});let n;const i=e.writer,r=Object.assign({},o.attributes);if(t=="container")n=i.createContainerElement(o.name,r);else if(t=="attribute"){const s={priority:o.priority||Do.DEFAULT_PRIORITY};n=i.createAttributeElement(o.name,r,s)}else n=i.createUIElement(o.name,r);if(o.styles){const s=Object.keys(o.styles);for(const a of s)i.setStyle(a,o.styles[a],n)}if(o.classes){const s=o.classes;if(typeof s=="string")i.addClass(s,n);else for(const a of s)i.addClass(a,n)}return n}function wg(o){return o.model.values?(e,t,n)=>{const i=o.view[e];return i?i(e,t,n):null}:o.view}function _g(o){return typeof o=="string"?e=>({key:o,value:e}):typeof o=="object"?o.value?()=>o:e=>({key:o.key,value:e}):o}function ml(o,e,t){const n=typeof o=="function"?o(e,t):o;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function Zx(o){return(e,t)=>{if(!e.is("element",o.name))return!1;if(t.type=="attribute"){if(o.attributes.includes(t.attributeKey))return!0}else if(o.children)return!0;return!1}}function Ag(o){const e=Zx(o);return(t,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(!s||!e(s,r)){i.push(r);continue}if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=H._createBefore(s);i.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}n.changes=i}}function Cg(o){return(e,t,n={})=>{const i=["insert"];for(const r of o.attributes)e.hasAttribute(r)&&i.push(`attribute:${r}`);return i.every(r=>t.test(e,r))?(n.preflight||i.forEach(r=>t.consume(e,r)),!0):!1}}function Jx(o,e,t){return(n,i="children")=>{const r=n.createContainerElement("$slot");let s=null;if(i==="children")s=Array.from(o.getChildren());else if(typeof i=="function")s=Array.from(o.getChildren()).filter(a=>i(a));else throw new _("conversion-slot-mode-unknown",t.dispatcher,{modeOrFilter:i});return e.set(r,s),r}}function Xx(o,e,t){const n=Array.from(e.values()).flat(),i=new Set(n);if(i.size!=n.length)throw new _("conversion-slot-filter-overlap",t.dispatcher,{element:o});if(i.size!=o.childCount)throw new _("conversion-slot-filter-incomplete",t.dispatcher,{element:o})}function eE(o,e,t,n){t.mapper.on("modelToViewPosition",s,{priority:"highest"});let i=null,r=null;for([i,r]of e)vg(o,r,t,n),t.writer.move(t.writer.createRangeIn(i),t.writer.createPositionBefore(i)),t.writer.remove(i);t.mapper.off("modelToViewPosition",s);function s(a,c){const l=c.modelPosition.nodeAfter,d=r.indexOf(l);d<0||(c.viewPosition=c.mapper.findPositionIn(i,d))}}function vg(o,e,t,n){for(const i of e)tE(o.root,i,t,n)||t.convertItem(i)}function tE(o,e,t,n){const{writer:i,mapper:r}=t;if(!n.reconversion)return!1;const s=r.toViewElement(e);return!s||s.root==o||!t.canReuseView(s)?!1:(i.move(i.createRangeOn(s),r.toViewPosition(H._createBefore(e))),!0)}function nE(o,e,{preflight:t}={}){return t?e.test(o,"insert"):e.consume(o,"insert")}function yg(o){const{schema:e,document:t}=o.model;for(const n of t.getRootNames()){const i=t.getRoot(n);if(i.isEmpty&&!e.checkChild(i,"$text")&&e.checkChild(i,"paragraph"))return o.insertElement("paragraph",i),!0}return!1}function xg(o,e,t){const n=t.createContext(o);return!(!t.checkChild(n,"paragraph")||!t.checkChild(n.push("paragraph"),e))}function Eg(o,e){const t=e.createElement("paragraph");return e.insert(t,o),e.createPositionAt(t,0)}class oE extends fg{elementToElement(e){return this.add(Sg(e))}elementToAttribute(e){return this.add(sE(e))}attributeToAttribute(e){return this.add(aE(e))}elementToMarker(e){return this.add(cE(e))}dataToMarker(e){return this.add(lE(e))}}function Dg(){return(o,e,t)=>{if(!e.modelRange&&t.consumable.consume(e.viewItem,{name:!0})){const{modelRange:n,modelCursor:i}=t.convertChildren(e.viewItem,e.modelCursor);e.modelRange=n,e.modelCursor=i}}}function iE(){return(o,e,{schema:t,consumable:n,writer:i})=>{let r=e.modelCursor;if(!n.test(e.viewItem))return;if(!t.checkChild(r,"$text")){if(!xg(r,"$text",t)||e.viewItem.data.trim().length==0)return;const a=r.nodeBefore;r=Eg(r,i),a&&a.is("element","$marker")&&(i.move(i.createRangeOn(a),r),r=i.createPositionAfter(a))}n.consume(e.viewItem);const s=i.createText(e.viewItem.data);i.insert(s,r),e.modelRange=i.createRange(r,r.getShiftedBy(s.offsetSize)),e.modelCursor=e.modelRange.end}}function rE(o,e){return(t,n)=>{const i=n.newSelection,r=[];for(const a of i.getRanges())r.push(e.toModelRange(a));const s=o.createSelection(r,{backward:i.isBackward});s.isEqual(o.document.selection)||o.change(a=>{a.setSelection(s)})}}function Sg(o){o=Io(o);const e=kl(o),t=pl(o.view),n=t?`element:${t}`:"element";return i=>{i.on(n,e,{priority:o.converterPriority||"normal"})}}function sE(o){o=Io(o),Tg(o);const e=Ig(o,!1),t=pl(o.view),n=t?`element:${t}`:"element";return i=>{i.on(n,e,{priority:o.converterPriority||"low"})}}function aE(o){o=Io(o);let e=null;(typeof o.view=="string"||o.view.key)&&(e=hE(o)),Tg(o,e);const t=Ig(o,!0);return n=>{n.on("element",t,{priority:o.converterPriority||"low"})}}function cE(o){const e=mE(o.model);return Sg({...o,model:e})}function lE(o){o=Io(o),o.model||(o.model=i=>i?o.view+":"+i:o.view);const e={view:o.view,model:o.model},t=kl(Mg(e,"start")),n=kl(Mg(e,"end"));return i=>{i.on(`element:${o.view}-start`,t,{priority:o.converterPriority||"normal"}),i.on(`element:${o.view}-end`,n,{priority:o.converterPriority||"normal"});const r=At.get("low"),s=At.get("highest"),a=At.get(o.converterPriority)/s;i.on("element",dE(e),{priority:r+a})}}function dE(o){return(e,t,n)=>{const i=`data-${o.view}`;if(!n.consumable.test(t.viewItem,{attributes:i+"-end-after"})&&!n.consumable.test(t.viewItem,{attributes:i+"-start-after"})&&!n.consumable.test(t.viewItem,{attributes:i+"-end-before"})&&!n.consumable.test(t.viewItem,{attributes:i+"-start-before"}))return;t.modelRange||Object.assign(t,n.convertChildren(t.viewItem,t.modelCursor)),n.consumable.consume(t.viewItem,{attributes:i+"-end-after"})&&r(t.modelRange.end,t.viewItem.getAttribute(i+"-end-after").split(",")),n.consumable.consume(t.viewItem,{attributes:i+"-start-after"})&&r(t.modelRange.end,t.viewItem.getAttribute(i+"-start-after").split(",")),n.consumable.consume(t.viewItem,{attributes:i+"-end-before"})&&r(t.modelRange.start,t.viewItem.getAttribute(i+"-end-before").split(",")),n.consumable.consume(t.viewItem,{attributes:i+"-start-before"})&&r(t.modelRange.start,t.viewItem.getAttribute(i+"-start-before").split(","));function r(s,a){for(const c of a){const l=o.model(c,n),d=n.writer.createElement("$marker",{"data-name":l});n.writer.insert(d,s),t.modelCursor.isEqual(s)?t.modelCursor=t.modelCursor.getShiftedBy(1):t.modelCursor=t.modelCursor._getTransformedByInsertion(s,1),t.modelRange=t.modelRange._getTransformedByInsertion(s,1)[0]}}}}function pl(o){return typeof o=="string"?o:typeof o=="object"&&typeof o.name=="string"?o.name:null}function kl(o){const e=new fn(o.view);return(t,n,i)=>{const r=e.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!i.consumable.test(n.viewItem,s))return;const a=uE(o.model,n.viewItem,i);a&&i.safeInsert(a,n.modelCursor)&&(i.consumable.consume(n.viewItem,s),i.convertChildren(n.viewItem,a),i.updateConversionResult(a,n))}}function uE(o,e,t){return o instanceof Function?o(e,t):t.writer.createElement(o)}function hE(o){typeof o.view=="string"&&(o.view={key:o.view});const e=o.view.key;let t;if(e=="class"||e=="style")t={[e=="class"?"classes":"styles"]:o.view.value};else{const n=typeof o.view.value>"u"?/[\s\S]*/:o.view.value;t={attributes:{[e]:n}}}return o.view.name&&(t.name=o.view.name),o.view=t,e}function Tg(o,e=null){const t=e===null?!0:r=>r.getAttribute(e),n=typeof o.model!="object"?o.model:o.model.key,i=typeof o.model!="object"||typeof o.model.value>"u"?t:o.model.value;o.model={key:n,value:i}}function Ig(o,e){const t=new fn(o.view);return(n,i,r)=>{if(!i.modelRange&&e)return;const s=t.match(i.viewItem);if(!s||(fE(o.view,i.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(i.viewItem,s.match)))return;const a=o.model.key,c=typeof o.model.value=="function"?o.model.value(i.viewItem,r):o.model.value;if(c===null)return;i.modelRange||Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor)),gE(i.modelRange,{key:a,value:c},e,r)&&(r.consumable.test(i.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(i.viewItem,s.match))}}function fE(o,e){const t=typeof o=="function"?o(e):o;return typeof t=="object"&&!pl(t)?!1:!t.classes&&!t.attributes&&!t.styles}function gE(o,e,t,n){let i=!1;for(const r of Array.from(o.getItems({shallow:t})))n.schema.checkAttribute(r,e.key)&&(i=!0,!r.hasAttribute(e.key)&&n.writer.setAttribute(e.key,e.value,r));return i}function mE(o){return(e,t)=>{const n=typeof o=="string"?o:o(e,t);return t.writer.createElement("$marker",{"data-name":n})}}function Mg(o,e){const t=(n,i)=>{const r=n.getAttribute("name"),s=o.model(r,i);return i.writer.createElement("$marker",{"data-name":s})};return{view:`${o.view}-${e}`,model:t}}class pE extends we(){constructor(e,t){super(),this.model=e,this.view=new lx(t),this.mapper=new cg,this.downcastDispatcher=new lg({mapper:this.mapper,schema:e.schema});const n=this.model.document,i=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(i,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",rE(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",gg(),{priority:"lowest"}),this.downcastDispatcher.on("insert",mg(),{priority:"lowest"}),this.downcastDispatcher.on("remove",Ex(),{priority:"low"}),this.downcastDispatcher.on("selection",Tx(),{priority:"high"}),this.downcastDispatcher.on("selection",Dx(),{priority:"low"}),this.downcastDispatcher.on("selection",Sx(),{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const a=new xf(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new _("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class rr{constructor(){this._consumables=new Map}add(e,t){let n;if(e.is("$text")||e.is("documentFragment")){this._consumables.set(e,!0);return}this._consumables.has(e)?n=this._consumables.get(e):(n=new kE(e),this._consumables.set(e,n)),n.add(t)}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return this.test(e,t)?(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0):!1}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const s of n)s=="style"||s=="class"||t.attributes.push(s);const i=e.getClassNames();for(const s of i)t.classes.push(s);const r=e.getStyleNames();for(const s of r)t.styles.push(s);return t}static createFrom(e,t){if(t||(t=new rr),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,rr.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=rr.createFrom(n,t);return t}}const Bs=["attributes","classes","styles"];class kE{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of Bs)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of Bs)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of Bs)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of Bs)t in e&&this._revert(t,e[t])}_add(e,t){const n=mt(t)?t:[t],i=this._consumables[e];for(const r of n){if(e==="attributes"&&(r==="class"||r==="style"))throw new _("viewconsumable-invalid-attribute",this);if(i.set(r,!0),e==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!0)}}_test(e,t){const n=mt(t)?t:[t],i=this._consumables[e];for(const r of n)if(e==="attributes"&&(r==="class"||r==="style")){const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}else{const s=i.get(r);if(s===void 0)return null;if(!s)return!1}return!0}_consume(e,t){const n=mt(t)?t:[t],i=this._consumables[e];for(const r of n)if(e==="attributes"&&(r==="class"||r==="style")){const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}else if(i.set(r,!1),e=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!1)}_revert(e,t){const n=mt(t)?t:[t],i=this._consumables[e];for(const r of n)if(e==="attributes"&&(r==="class"||r==="style")){const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}else i.get(r)===!1&&i.set(r,!0)}}class bE extends we(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new Mo(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new Mo(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new _("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new _("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return typeof e=="string"?t=e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?t="$text":t=e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!!(t&&t.isBlock)}isLimit(e){const t=this.getDefinition(e);return t?!!(t.isLimit||t.isObject):!1}isObject(e){const t=this.getDefinition(e);return t?!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent):!1}isInline(e){const t=this.getDefinition(e);return!!(t&&t.isInline)}isSelectable(e){const t=this.getDefinition(e);return t?!!(t.isSelectable||t.isObject):!1}isContent(e){const t=this.getDefinition(e);return t?!!(t.isContent||t.isObject):!1}checkChild(e,t){return t?this._checkContextMatch(t,e):!1}checkAttribute(e,t){const n=this.getDefinition(e.last);return n?n.allowAttributes.includes(t):!1}checkMerge(e,t){if(e instanceof H){const n=e.nodeBefore,i=e.nodeAfter;if(!(n instanceof Ne))throw new _("schema-check-merge-no-element-before",this);if(!(i instanceof Ne))throw new _("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,i])=>{if(!i)return;const r=e(n,i);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,i])=>{const r=e(n,i);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof H?t=e.parent:t=(e instanceof z?[e]:Array.from(e.getRanges())).reduce((i,r)=>{const s=r.getCommonAncestor();return i?i.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const i=[...e.getFirstPosition().getAncestors(),new Re("",e.getAttributes())];return this.checkAttribute(i,t)}else{const n=e.getRanges();for(const i of n)for(const r of i)if(this.checkAttribute(r.item,t))return!0}return!1}*getValidRanges(e,t){e=PE(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new z(e);let n,i;const r=e.getAncestors().reverse().find(s=>this.isLimit(s))||e.root;(t=="both"||t=="backward")&&(n=new kn({boundaries:z._createIn(r),startPosition:e,direction:"backward"})),(t=="both"||t=="forward")&&(i=new kn({boundaries:z._createIn(r),startPosition:e}));for(const s of NE(n,i)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return z._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new z(c.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const i=n.model;for(const[r,s]of Object.entries(t))i.schema.checkAttribute(e,r)&&n.setAttribute(r,s,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))Bg(this,n,t);else{const r=z._createIn(n).getPositions();for(const s of r){const a=s.nodeBefore||s.parent;Bg(this,a,t)}}}getAttributesWithProperty(e,t,n){const i={};for(const[r,s]of e.getAttributes()){const a=this.getAttributeProperties(r);a[t]!==void 0&&(n===void 0||n===a[t])&&(i[r]=s)}return i}createContext(e){return new Mo(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const i of n)e[i]=wE(t[i],i);for(const i of n)_E(e,i);for(const i of n)AE(e,i);for(const i of n)CE(e,i);for(const i of n)vE(e,i),yE(e,i);for(const i of n)xE(e,i),EE(e,i),DE(e,i);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const i=t.getItem(n);if(e.allowIn.includes(i.name)){if(n==0)return!0;{const r=this.getDefinition(i);return this._checkContextMatch(r,t,n-1)}}else return!1}*_getValidRangesForRange(e,t){let n=e.start,i=e.start;for(const r of e.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(z._createIn(r),t)),this.checkAttribute(r,t)||(n.isEqual(i)||(yield new z(n,i)),n=H._createAfter(r)),i=H._createAfter(r);n.isEqual(i)||(yield new z(n,i))}}class Mo{constructor(e){if(e instanceof Mo)return e;let t;typeof e=="string"?t=[e]:Array.isArray(e)?t=e:t=e.getAncestors({includeSelf:!0}),this._items=t.map(BE)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Mo([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function wE(o,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return SE(o,t),Bo(o,t,"allowIn"),Bo(o,t,"allowContentOf"),Bo(o,t,"allowWhere"),Bo(o,t,"allowAttributes"),Bo(o,t,"allowAttributesOf"),Bo(o,t,"allowChildren"),Bo(o,t,"inheritTypesFrom"),TE(o,t),t}function _E(o,e){const t=o[e];for(const n of t.allowChildren){const i=o[n];i&&i.allowIn.push(e)}t.allowChildren.length=0}function AE(o,e){for(const t of o[e].allowContentOf)o[t]&&IE(o,t).forEach(i=>{i.allowIn.push(e)});delete o[e].allowContentOf}function CE(o,e){for(const t of o[e].allowWhere){const n=o[t];if(n){const i=n.allowIn;o[e].allowIn.push(...i)}}delete o[e].allowWhere}function vE(o,e){for(const t of o[e].allowAttributesOf){const n=o[t];if(n){const i=n.allowAttributes;o[e].allowAttributes.push(...i)}}delete o[e].allowAttributesOf}function yE(o,e){const t=o[e];for(const n of t.inheritTypesFrom){const i=o[n];if(i){const r=Object.keys(i).filter(s=>s.startsWith("is"));for(const s of r)s in t||(t[s]=i[s])}}delete t.inheritTypesFrom}function xE(o,e){const t=o[e],n=t.allowIn.filter(i=>o[i]);t.allowIn=Array.from(new Set(n))}function EE(o,e){const t=o[e];for(const n of t.allowIn)o[n].allowChildren.push(e)}function DE(o,e){const t=o[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function SE(o,e){for(const t of o){const n=Object.keys(t).filter(i=>i.startsWith("is"));for(const i of n)e[i]=!!t[i]}}function Bo(o,e,t){for(const n of o){const i=n[t];typeof i=="string"?e[t].push(i):Array.isArray(i)&&e[t].push(...i)}}function TE(o,e){for(const t of o){const n=t.inheritAllFrom;n&&(e.allowContentOf.push(n),e.allowWhere.push(n),e.allowAttributesOf.push(n),e.inheritTypesFrom.push(n))}}function IE(o,e){const t=o[e];return ME(o).filter(n=>n.allowIn.includes(t.name))}function ME(o){return Object.keys(o).map(e=>o[e])}function BE(o){return typeof o=="string"||o.is("documentFragment")?{name:typeof o=="string"?o:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:o.is("element")?o.name:"$text",*getAttributeKeys(){yield*o.getAttributeKeys()},getAttribute(e){return o.getAttribute(e)}}}function*NE(o,e){let t=!1;for(;!t;){if(t=!0,o){const n=o.next();n.done||(t=!1,yield{walker:o,value:n.value})}if(e){const n=e.next();n.done||(t=!1,yield{walker:e,value:n.value})}}}function*PE(o){for(const e of o)yield*e.getMinimalFlatRanges()}function Bg(o,e,t){for(const n of e.getAttributeKeys())o.checkAttribute(e,n)||t.removeAttribute(n,e)}class zE extends v(){constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=OE(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=rr.createFrom(e),this.conversionApi.store={};const{modelRange:i}=this._convertItem(e,this._modelCursor),r=t.createDocumentFragment();if(i){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))t.append(s,r);r.markers=LE(r,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof z))throw new _("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:H._createAt(t,0);const i=new z(n);for(const r of Array.from(e.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof z&&(i.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return n?(this.conversionApi.writer.insert(e,n.position),!0):!1}_updateConversionResult(e,t){const n=this._getSplitParts(e),i=this.conversionApi.writer;t.modelRange||(t.modelRange=i.createRange(i.createPositionBefore(e),i.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(e);r?t.modelCursor=i.createPositionAt(r,0):t.modelCursor=t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:i}=this.conversionApi;let r=n.findAllowedParent(t,e);if(r){if(r===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return xg(t,e,n)?{position:Eg(t,i)}:null;const s=this.conversionApi.writer.split(t,r),a=[];for(const l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{const d=a.pop(),u=l.item;this._registerSplitPair(d,u)}const c=s.range.end.parent;return this._cursorParents.set(e,c),{position:s.position,cursorParent:c}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return this._splitParts.has(e)?t=this._splitParts.get(e):t=[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}function LE(o,e){const t=new Set,n=new Map,i=z._createIn(o).getItems();for(const r of i)r.is("element","$marker")&&t.add(r);for(const r of t){const s=r.getAttribute("data-name"),a=e.createPositionBefore(r);n.has(s)?n.get(s).end=a.clone():n.set(s,new z(a.clone())),e.remove(r)}return n}function OE(o,e){let t;for(const n of new Mo(o)){const i={};for(const s of n.getAttributeKeys())i[s]=n.getAttribute(s);const r=e.createElement(n.name,i);t&&e.insert(r,t),t=H._createAt(r,0)}return t}class RE{getHtml(e){const n=document.implementation.createHTMLDocument("").createElement("div");return n.appendChild(e),n.innerHTML}}class jE{constructor(e){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new Ds(e,{renderingMode:"data"}),this.htmlWriter=new RE}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t,{skipComments:this.skipComments})}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class FE extends v(){constructor(e,t){super(),this.model=e,this.mapper=new cg,this.downcastDispatcher=new lg({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",gg(),{priority:"lowest"}),this.downcastDispatcher.on("insert",mg(),{priority:"lowest"}),this.upcastDispatcher=new zE({schema:e.schema}),this.viewDocument=new vs(t),this.stylesProcessor=t,this.htmlProcessor=new jE(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Sf(this.viewDocument),this.upcastDispatcher.on("text",iE(),{priority:"lowest"}),this.upcastDispatcher.on("element",Dg(),{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",Dg(),{priority:"lowest"}),we().prototype.decorate.call(this,"init"),we().prototype.decorate.call(this,"set"),we().prototype.decorate.call(this,"get"),we().prototype.decorate.call(this,"toView"),we().prototype.decorate.call(this,"toModel"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},yg)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new _("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(t);return n==="empty"&&!this.model.hasContent(i,{ignoreWhitespaces:!0})?"":this.stringify(i,e)}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const r=z._createIn(e),s=new So(n);this.mapper.bindElements(e,s);const a=e.is("documentFragment")?e.markers:VE(e);return this.downcastDispatcher.convert(r,a,i,t),s}init(e){if(this.model.document.version)throw new _("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new _("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(t)){const r=this.model.document.getRoot(i);n.insert(this.parse(t[i],r),r,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new _("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);i.remove(i.createRangeIn(s)),i.insert(this.parse(n[r],s),s,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}function VE(o){const e=[],t=o.root.document;if(!t)return new Map;const n=z._createIn(o);for(const i of t.model.markers){const r=i.getRange(),s=r.isCollapsed,a=r.start.isEqual(n.start)||r.end.isEqual(n.end);if(s&&a)e.push([i.name,r]);else{const c=n.getIntersection(r);c&&e.push([i.name,c])}}return e.sort(([i,r],[s,a])=>{if(r.end.compareWith(a.start)!=="after")return 1;if(r.start.compareWith(a.end)!=="before")return-1;switch(r.start.compareWith(a.start)){case"before":return 1;case"after":return-1;default:switch(r.end.compareWith(a.end)){case"before":return 1;case"after":return-1;default:return s.localeCompare(i)}}}),new Map(e)}class HE{constructor(e,t){this._helpers=new Map,this._downcast=kt(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=kt(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new _("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new _("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of bl(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of bl(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of bl(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new _("conversion-group-exists",this);const i=n?new xx(t):new oE(t);this._helpers.set(e,i)}}function*bl(o){if(o.model.values)for(const e of o.model.values){const t={key:o.model.key,value:e},n=o.view[e],i=o.upcastAlso?o.upcastAlso[e]:void 0;yield*Ng(t,n,i)}else yield*Ng(o.model,o.view,o.upcastAlso)}function*Ng(o,e,t){if(yield{model:o,view:e},t)for(const n of kt(t))yield{model:o,view:n}}class Gt{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function wl(o,e){const t=zg(e),n=t.reduce((s,a)=>s+a.offsetSize,0),i=o.parent;cr(o);const r=o.index;return i._insertChild(r,t),ar(i,r+t.length),ar(i,r),new z(o,o.getShiftedBy(n))}function Pg(o){if(!o.isFlat)throw new _("operation-utils-remove-range-not-flat",this);const e=o.start.parent;cr(o.start),cr(o.end);const t=e._removeChildren(o.start.index,o.end.index-o.start.index);return ar(e,o.start.index),t}function sr(o,e){if(!o.isFlat)throw new _("operation-utils-move-range-not-flat",this);const t=Pg(o);return e=e._getTransformedByDeletion(o.start,o.end.offset-o.start.offset),wl(e,t)}function UE(o,e,t){cr(o.start),cr(o.end);for(const n of o.getItems({shallow:!0})){const i=n.is("$textProxy")?n.textNode:n;t!==null?i._setAttribute(e,t):i._removeAttribute(e),ar(i.parent,i.index)}ar(o.end.parent,o.end.index)}function zg(o){const e=[];function t(n){if(typeof n=="string")e.push(new Re(n));else if(n instanceof on)e.push(new Re(n.data,n.getAttributes()));else if(n instanceof di)e.push(n);else if(Et(n))for(const i of n)t(i)}t(o);for(let n=1;n<e.length;n++){const i=e[n],r=e[n-1];i instanceof Re&&r instanceof Re&&Lg(i,r)&&(e.splice(n-1,2,new Re(r.data+i.data,r.getAttributes())),n--)}return e}function ar(o,e){const t=o.getChild(e-1),n=o.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&Lg(t,n)){const i=new Re(t.data+n.data,t.getAttributes());o._removeChildren(e-1,2),o._insertChild(e-1,i)}}function cr(o){const e=o.textNode,t=o.parent;if(e){const n=o.offset-e.startOffset,i=e.index;t._removeChildren(i,1);const r=new Re(e.data.substr(0,n),e.getAttributes()),s=new Re(e.data.substr(n),e.getAttributes());t._insertChild(i,[r,s])}}function Lg(o,e){const t=o.getAttributes(),n=e.getAttributes();for(const i of t){if(i[1]!==e.getAttribute(i[0]))return!1;n.next()}return n.next().done}class De extends Gt{constructor(e,t,n,i){super(i),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new De(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new De(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new _("move-operation-nodes-do-not-exist",this);if(e===t&&n<i&&i<n+this.howMany)throw new _("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&gt(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new _("move-operation-node-into-itself",this)}}_execute(){sr(z._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=H.fromJSON(e.sourcePosition,t),i=H.fromJSON(e.targetPosition,t);return new this(n,e.howMany,i,e.baseVersion)}}class bt extends Gt{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new tr(zg(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new tr([...this.nodes].map(n=>n._clone(!0))),t=new bt(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new H(e,[0]);return new De(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new _("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new tr([...e].map(t=>t._clone(!0))),wl(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const r of e.nodes)r.name?n.push(Ne.fromJSON(r)):n.push(Re.fromJSON(r));const i=new bt(H.fromJSON(e.position,t),n,e.baseVersion);return i.shouldReceiveAttributes=e.shouldReceiveAttributes,i}}class Pt extends Gt{constructor(e,t,n,i,r,s){super(s),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=i}get type(){return"marker"}clone(){return new Pt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Pt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Pt(e.name,e.oldRange?z.fromJSON(e.oldRange,t):null,e.newRange?z.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}function WE(o,e){return tg(o,e)}const Og=WE;class ct extends Gt{constructor(e,t,n,i,r){super(r),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new ct(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new ct(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new _("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Og(e.getAttribute(this.key),this.oldValue))throw new _("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new _("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Og(this.oldValue,this.newValue)||UE(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new ct(z.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class wt extends Gt{get type(){return"noop"}clone(){return new wt(this.baseVersion)}getReversed(){return new wt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class zt extends Gt{constructor(e,t,n,i){super(i),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new zt(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new zt(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(e instanceof Ne){if(e.name!==this.oldName)throw new _("rename-operation-wrong-name",this)}else throw new _("rename-operation-wrong-position",this)}_execute(){const e=this.position.nodeAfter;e.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new zt(H.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Bn extends Gt{constructor(e,t,n,i,r){super(r),this.root=e,this.key=t,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Bn(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Bn(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new _("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new _("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new _("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new _("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new Bn(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class it extends Gt{constructor(e,t,n,i,r){super(r),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new H(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new z(this.sourcePosition,e)}clone(){return new it(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new H(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new je(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(e.parent)if(t.parent){if(this.howMany!=e.maxOffset)throw new _("merge-operation-how-many-invalid",this)}else throw new _("merge-operation-target-position-invalid",this);else throw new _("merge-operation-source-position-invalid",this)}_execute(){const e=this.sourcePosition.parent,t=z._createIn(e);sr(t,this.targetPosition),sr(z._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=H.fromJSON(e.sourcePosition,t),i=H.fromJSON(e.targetPosition,t),r=H.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,i,r,e.baseVersion)}}class je extends Gt{constructor(e,t,n,i,r){super(r),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new H(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new z(this.splitPosition,e)}clone(){return new je(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new H(e,[0]);return new it(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new _("split-operation-position-invalid",this);if(e.parent){if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new _("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new _("split-operation-graveyard-position-invalid",this)}else throw new _("split-operation-split-in-root",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)sr(z._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const n=e._clone();wl(this.insertionPosition,n)}const t=new z(H._createAt(e,this.splitPosition.offset),H._createAt(e,e.maxOffset));sr(t,this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new H(e.root,t,"toPrevious")}static fromJSON(e,t){const n=H.fromJSON(e.splitPosition,t),i=H.fromJSON(e.insertionPosition,t),r=e.graveyardPosition?H.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,i,r,e.baseVersion)}}const sn={};sn[ct.className]=ct,sn[bt.className]=bt,sn[Pt.className]=Pt,sn[De.className]=De,sn[wt.className]=wt,sn[Gt.className]=Gt,sn[zt.className]=zt,sn[Bn.className]=Bn,sn[je.className]=je,sn[it.className]=it;class qE{static fromJSON(e,t){return sn[e.__className].fromJSON(e,t)}}const _l=new Map;function xe(o,e,t){let n=_l.get(o);n||(n=new Map,_l.set(o,n)),n.set(e,t)}function GE(o,e){const t=_l.get(o);return t&&t.has(e)?t.get(e):$E}function $E(o){return[o]}function Rg(o,e,t={}){const n=GE(o.constructor,e.constructor);try{return o=o.clone(),n(o,e,t)}catch(i){throw i}}function KE(o,e,t){o=o.slice(),e=e.slice();const n=new YE(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(o),n.setOriginalOperations(e);const i=n.originalOperations;if(o.length==0||e.length==0)return{operationsA:o,operationsB:e,originalOperations:i};const r=new WeakMap;for(const c of o)r.set(c,0);const s={nextBaseVersionA:o[o.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:o.length,originalOperationsBCount:e.length};let a=0;for(;a<o.length;){const c=o[a],l=r.get(c);if(l==e.length){a++;continue}const d=e[l],u=Rg(c,d,n.getContext(c,d,!0)),p=Rg(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(u,c),n.setOriginalOperations(p,d);for(const A of u)r.set(A,l+p.length);o.splice(a,1,...u),e.splice(l,1,...p)}if(t.padWithNoOps){const c=o.length-s.originalOperationsACount,l=e.length-s.originalOperationsBCount;Fg(o,l-c),Fg(e,c-l)}return jg(o,s.nextBaseVersionB),jg(e,s.nextBaseVersionA),{operationsA:o,operationsB:e,originalOperations:i}}class YE{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const i of e)this.originalOperations.set(i,n||i)}updateRelation(e,t){if(e instanceof De)t instanceof it?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof De&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof je){if(t instanceof it)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof De)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=z._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=n.end.offset-e.splitPosition.offset,r=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:i,offset:r})}}}else if(e instanceof it)t instanceof it?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof je&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof Pt){const n=e.newRange;if(!n)return;if(t instanceof De){const i=z._createFromPositionAndShift(t.sourcePosition,t.howMany),r=i.containsPosition(n.start)||i.start.isEqual(n.start),s=i.containsPosition(n.end)||i.end.isEqual(n.end);(r||s)&&!i.containsRange(n)&&this._setRelation(e,t,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(t instanceof it){const i=n.start.isEqual(t.targetPosition),r=n.start.isEqual(t.deletionPosition),s=n.end.isEqual(t.deletionPosition),a=n.end.isEqual(t.sourcePosition);(i||r||s||a)&&this._setRelation(e,t,{wasInLeftElement:i,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),i=this._history.getUndoneOperation(n);if(!i)return null;const r=this.originalOperations.get(e),s=this._relations.get(r);return s&&s.get(i)||null}_setRelation(e,t,n){const i=this.originalOperations.get(e),r=this.originalOperations.get(t);let s=this._relations.get(i);s||(s=new Map,this._relations.set(i,s)),s.set(r,n)}}function jg(o,e){for(const t of o)t.baseVersion=e++}function Fg(o,e){for(let t=0;t<e;t++)o.push(new wt(0))}xe(ct,ct,(o,e,t)=>{if(o.key===e.key&&o.range.start.hasSameParentAs(e.range.start)){const n=o.range.getDifference(e.range).map(r=>new ct(r,o.key,o.oldValue,o.newValue,0)),i=o.range.getIntersection(e.range);return i&&t.aIsStrong&&n.push(new ct(i,e.key,e.newValue,o.newValue,0)),n.length==0?[new wt(0)]:n}else return[o]}),xe(ct,bt,(o,e)=>{if(o.range.start.hasSameParentAs(e.position)&&o.range.containsPosition(e.position)){const n=o.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(i=>new ct(i,o.key,o.oldValue,o.newValue,o.baseVersion));if(e.shouldReceiveAttributes){const i=Vg(e,o.key,o.oldValue);i&&n.unshift(i)}return n}return o.range=o.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[o]});function Vg(o,e,t){const i=o.nodes.getNode(0).getAttribute(e);if(i==t)return null;const r=new z(o.position,o.position.getShiftedBy(o.howMany));return new ct(r,e,i,t,0)}xe(ct,it,(o,e)=>{const t=[];o.range.start.hasSameParentAs(e.deletionPosition)&&(o.range.containsPosition(e.deletionPosition)||o.range.start.isEqual(e.deletionPosition))&&t.push(z._createFromPositionAndShift(e.graveyardPosition,1));const n=o.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(i=>new ct(i,o.key,o.oldValue,o.newValue,o.baseVersion))}),xe(ct,De,(o,e)=>QE(o.range,e).map(n=>new ct(n,o.key,o.oldValue,o.newValue,o.baseVersion)));function QE(o,e){const t=z._createFromPositionAndShift(e.sourcePosition,e.howMany);let n=null,i=[];t.containsRange(o,!0)?n=o:o.start.hasSameParentAs(t.start)?(i=o.getDifference(t),n=o.getIntersection(t)):i=[o];const r=[];for(let s of i){s=s._getTransformedByDeletion(e.sourcePosition,e.howMany);const a=e.getMovedRangeStart(),c=s.start.hasSameParentAs(a),l=s._getTransformedByInsertion(a,e.howMany,c);r.push(...l)}return n&&r.push(n._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!1)[0]),r}xe(ct,je,(o,e)=>{if(o.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||o.range.end.offset++,[o];if(o.range.start.hasSameParentAs(e.splitPosition)&&o.range.containsPosition(e.splitPosition)){const t=o.clone();return t.range=new z(e.moveTargetPosition.clone(),o.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),o.range.end=e.splitPosition.clone(),o.range.end.stickiness="toPrevious",[o,t]}return o.range=o.range._getTransformedBySplitOperation(e),[o]}),xe(bt,ct,(o,e)=>{const t=[o];if(o.shouldReceiveAttributes&&o.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(o.position)){const n=Vg(o,e.key,e.newValue);n&&t.push(n)}return t}),xe(bt,bt,(o,e,t)=>o.position.isEqual(e.position)&&t.aIsStrong?[o]:(o.position=o.position._getTransformedByInsertOperation(e),[o])),xe(bt,De,(o,e)=>(o.position=o.position._getTransformedByMoveOperation(e),[o])),xe(bt,je,(o,e)=>(o.position=o.position._getTransformedBySplitOperation(e),[o])),xe(bt,it,(o,e)=>(o.position=o.position._getTransformedByMergeOperation(e),[o])),xe(Pt,bt,(o,e)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertOperation(e)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertOperation(e)[0]),[o])),xe(Pt,Pt,(o,e,t)=>{if(o.name==e.name)if(t.aIsStrong)o.oldRange=e.newRange?e.newRange.clone():null;else return[new wt(0)];return[o]}),xe(Pt,it,(o,e)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByMergeOperation(e)),o.newRange&&(o.newRange=o.newRange._getTransformedByMergeOperation(e)),[o])),xe(Pt,De,(o,e,t)=>{if(o.oldRange&&(o.oldRange=z._createFromRanges(o.oldRange._getTransformedByMoveOperation(e))),o.newRange){if(t.abRelation){const n=z._createFromRanges(o.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(o.newRange.start))return o.newRange.end=n.end,o.newRange.start.path=t.abRelation.path,[o];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(o.newRange.end))return o.newRange.start=n.start,o.newRange.end.path=t.abRelation.path,[o]}o.newRange=z._createFromRanges(o.newRange._getTransformedByMoveOperation(e))}return[o]}),xe(Pt,je,(o,e,t)=>{if(o.oldRange&&(o.oldRange=o.oldRange._getTransformedBySplitOperation(e)),o.newRange){if(t.abRelation){const n=o.newRange._getTransformedBySplitOperation(e);return o.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?o.newRange.start=H._createAt(e.insertionPosition):o.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(o.newRange.start=H._createAt(e.moveTargetPosition)),o.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?o.newRange.end=H._createAt(e.moveTargetPosition):o.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?o.newRange.end=H._createAt(e.insertionPosition):o.newRange.end=n.end,[o]}o.newRange=o.newRange._getTransformedBySplitOperation(e)}return[o]}),xe(it,bt,(o,e)=>(o.sourcePosition.hasSameParentAs(e.position)&&(o.howMany+=e.howMany),o.sourcePosition=o.sourcePosition._getTransformedByInsertOperation(e),o.targetPosition=o.targetPosition._getTransformedByInsertOperation(e),[o])),xe(it,it,(o,e,t)=>{if(o.sourcePosition.isEqual(e.sourcePosition)&&o.targetPosition.isEqual(e.targetPosition))if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),o.sourcePosition=new H(e.graveyardPosition.root,n),o.howMany=0,[o]}else return[new wt(0)];if(o.sourcePosition.isEqual(e.sourcePosition)&&!o.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=o.targetPosition.root.rootName=="$graveyard",i=e.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const c=e.targetPosition._getTransformedByMergeOperation(e),l=o.targetPosition._getTransformedByMergeOperation(e);return[new De(c,o.howMany,l,0)]}else return[new wt(0)]}return o.sourcePosition.hasSameParentAs(e.targetPosition)&&(o.howMany+=e.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMergeOperation(e),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(e),(!o.graveyardPosition.isEqual(e.graveyardPosition)||!t.aIsStrong)&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(e)),[o]}),xe(it,De,(o,e,t)=>{const n=z._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&o.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(o.sourcePosition)?[new wt(0)]:(o.sourcePosition.hasSameParentAs(e.targetPosition)&&(o.howMany+=e.howMany),o.sourcePosition.hasSameParentAs(e.sourcePosition)&&(o.howMany-=e.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMoveOperation(e),o.targetPosition=o.targetPosition._getTransformedByMoveOperation(e),o.graveyardPosition.isEqual(e.targetPosition)||(o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(e)),[o])}),xe(it,je,(o,e,t)=>{if(e.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),o.deletionPosition.isEqual(e.graveyardPosition)&&(o.howMany=e.howMany)),o.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,i=e.graveyardPosition&&o.deletionPosition.isEqual(e.graveyardPosition);if(n||i||t.abRelation=="mergeTargetNotMoved")return o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(e),[o]}if(o.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return o.howMany=0,o.targetPosition=o.targetPosition._getTransformedBySplitOperation(e),[o];if(t.abRelation=="mergeSameElement"||o.sourcePosition.offset>0)return o.sourcePosition=e.moveTargetPosition.clone(),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(e),[o]}return o.sourcePosition.hasSameParentAs(e.splitPosition)&&(o.howMany=e.splitPosition.offset),o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(e),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(e),[o]}),xe(De,bt,(o,e)=>{const n=z._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByInsertOperation(e,!1)[0];return o.sourcePosition=n.start,o.howMany=n.end.offset-n.start.offset,o.targetPosition.isEqual(e.position)||(o.targetPosition=o.targetPosition._getTransformedByInsertOperation(e)),[o]}),xe(De,De,(o,e,t)=>{const n=z._createFromPositionAndShift(o.sourcePosition,o.howMany),i=z._createFromPositionAndShift(e.sourcePosition,e.howMany);let r=t.aIsStrong,s=!t.aIsStrong;t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?s=!0:(t.abRelation=="insertAfter"||t.baRelation=="insertBefore")&&(s=!1);let a;if(o.targetPosition.isEqual(e.targetPosition)&&s?a=o.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):a=o.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Hg(o,e)&&Hg(e,o))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ui([n],a);if(i.containsPosition(o.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),ui([n],a);const d=gt(o.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(d=="prefix"||d=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ui([n],a);o.type=="remove"&&e.type!="remove"&&!t.aWasUndone&&!t.forceWeakRemove?r=!0:o.type!="remove"&&e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&(r=!1);const u=[],p=n.getDifference(i);for(const D of p){D.start=D.start._getTransformedByDeletion(e.sourcePosition,e.howMany),D.end=D.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const N=gt(D.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",j=D._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,N);u.push(...j)}const A=n.getIntersection(i);return A!==null&&r&&(A.start=A.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),A.end=A.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),u.length===0?u.push(A):u.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?u.unshift(A):u.push(A):u.splice(1,0,A)),u.length===0?[new wt(o.baseVersion)]:ui(u,a)}),xe(De,je,(o,e,t)=>{let n=o.targetPosition.clone();(!o.targetPosition.isEqual(e.insertionPosition)||!e.graveyardPosition||t.abRelation=="moveTargetAfter")&&(n=o.targetPosition._getTransformedBySplitOperation(e));const i=z._createFromPositionAndShift(o.sourcePosition,o.howMany);if(i.end.isEqual(e.insertionPosition))return e.graveyardPosition||o.howMany++,o.targetPosition=n,[o];if(i.start.hasSameParentAs(e.splitPosition)&&i.containsPosition(e.splitPosition)){let a=new z(e.splitPosition,i.end);a=a._getTransformedBySplitOperation(e);const c=[new z(i.start,e.splitPosition),a];return ui(c,n)}o.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),o.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=o.targetPosition);const s=[i._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const a=i.start.isEqual(e.graveyardPosition)||i.containsPosition(e.graveyardPosition);o.howMany>1&&a&&!t.aWasUndone&&s.push(z._createFromPositionAndShift(e.insertionPosition,1))}return ui(s,n)}),xe(De,it,(o,e,t)=>{const n=z._createFromPositionAndShift(o.sourcePosition,o.howMany);if(e.deletionPosition.hasSameParentAs(o.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(o.type=="remove"&&!t.forceWeakRemove){if(!t.aWasUndone){const s=[];let a=e.graveyardPosition.clone(),c=e.targetPosition._getTransformedByMergeOperation(e);o.howMany>1&&(s.push(new De(o.sourcePosition,o.howMany-1,o.targetPosition,0)),a=a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1),c=c._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1));const l=e.deletionPosition._getCombined(o.sourcePosition,o.targetPosition),d=new De(a,1,l,0),u=d.getMovedRangeStart().path.slice();u.push(0);const p=new H(d.targetPosition.root,u);c=c._getTransformedByMove(a,l,1);const A=new De(c,e.howMany,p,0);return s.push(d),s.push(A),s}}else if(o.howMany==1)return t.bWasUndone?(o.sourcePosition=e.graveyardPosition.clone(),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(e),[o]):[new wt(0)]}const r=z._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByMergeOperation(e);return o.sourcePosition=r.start,o.howMany=r.end.offset-r.start.offset,o.targetPosition=o.targetPosition._getTransformedByMergeOperation(e),[o]}),xe(zt,bt,(o,e)=>(o.position=o.position._getTransformedByInsertOperation(e),[o])),xe(zt,it,(o,e)=>o.position.isEqual(e.deletionPosition)?(o.position=e.graveyardPosition.clone(),o.position.stickiness="toNext",[o]):(o.position=o.position._getTransformedByMergeOperation(e),[o])),xe(zt,De,(o,e)=>(o.position=o.position._getTransformedByMoveOperation(e),[o])),xe(zt,zt,(o,e,t)=>{if(o.position.isEqual(e.position))if(t.aIsStrong)o.oldName=e.newName;else return[new wt(0)];return[o]}),xe(zt,je,(o,e)=>{const t=o.position.path,n=e.splitPosition.getParentPath();if(gt(t,n)=="same"&&!e.graveyardPosition){const i=new zt(o.position.getShiftedBy(1),o.oldName,o.newName,0);return[o,i]}return o.position=o.position._getTransformedBySplitOperation(e),[o]}),xe(Bn,Bn,(o,e,t)=>{if(o.root===e.root&&o.key===e.key){if(!t.aIsStrong||o.newValue===e.newValue)return[new wt(0)];o.oldValue=e.newValue}return[o]}),xe(je,bt,(o,e)=>(o.splitPosition.hasSameParentAs(e.position)&&o.splitPosition.offset<e.position.offset&&(o.howMany+=e.howMany),o.splitPosition=o.splitPosition._getTransformedByInsertOperation(e),o.insertionPosition=o.insertionPosition._getTransformedByInsertOperation(e),[o])),xe(je,it,(o,e,t)=>{if(!o.graveyardPosition&&!t.bWasUndone&&o.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new H(e.graveyardPosition.root,n),r=je.getInsertionPosition(new H(e.graveyardPosition.root,n)),s=new je(i,0,r,null,0);return o.splitPosition=o.splitPosition._getTransformedByMergeOperation(e),o.insertionPosition=je.getInsertionPosition(o.splitPosition),o.graveyardPosition=s.insertionPosition.clone(),o.graveyardPosition.stickiness="toNext",[s,o]}return o.splitPosition.hasSameParentAs(e.deletionPosition)&&!o.splitPosition.isAfter(e.deletionPosition)&&o.howMany--,o.splitPosition.hasSameParentAs(e.targetPosition)&&(o.howMany+=e.howMany),o.splitPosition=o.splitPosition._getTransformedByMergeOperation(e),o.insertionPosition=je.getInsertionPosition(o.splitPosition),o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(e)),[o]}),xe(je,De,(o,e,t)=>{const n=z._createFromPositionAndShift(e.sourcePosition,e.howMany);if(o.graveyardPosition){const r=n.start.isEqual(o.graveyardPosition)||n.containsPosition(o.graveyardPosition);if(!t.bWasUndone&&r){const s=o.splitPosition._getTransformedByMoveOperation(e),a=o.graveyardPosition._getTransformedByMoveOperation(e),c=a.path.slice();c.push(0);const l=new H(a.root,c);return[new De(s,o.howMany,l,0)]}o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(e)}const i=o.splitPosition.isEqual(e.targetPosition);if(i&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return o.howMany+=e.howMany,o.splitPosition=o.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),o.insertionPosition=je.getInsertionPosition(o.splitPosition),[o];if(i&&t.abRelation&&t.abRelation.howMany){const{howMany:r,offset:s}=t.abRelation;return o.howMany+=r,o.splitPosition=o.splitPosition.getShiftedBy(s),[o]}if(o.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(o.splitPosition)){const r=e.howMany-(o.splitPosition.offset-e.sourcePosition.offset);return o.howMany-=r,o.splitPosition.hasSameParentAs(e.targetPosition)&&o.splitPosition.offset<e.targetPosition.offset&&(o.howMany+=e.howMany),o.splitPosition=e.sourcePosition.clone(),o.insertionPosition=je.getInsertionPosition(o.splitPosition),[o]}return e.sourcePosition.isEqual(e.targetPosition)||(o.splitPosition.hasSameParentAs(e.sourcePosition)&&o.splitPosition.offset<=e.sourcePosition.offset&&(o.howMany-=e.howMany),o.splitPosition.hasSameParentAs(e.targetPosition)&&o.splitPosition.offset<e.targetPosition.offset&&(o.howMany+=e.howMany)),o.splitPosition.stickiness="toNone",o.splitPosition=o.splitPosition._getTransformedByMoveOperation(e),o.splitPosition.stickiness="toNext",o.graveyardPosition?o.insertionPosition=o.insertionPosition._getTransformedByMoveOperation(e):o.insertionPosition=je.getInsertionPosition(o.splitPosition),[o]}),xe(je,je,(o,e,t)=>{if(o.splitPosition.isEqual(e.splitPosition)){if(!o.graveyardPosition&&!e.graveyardPosition)return[new wt(0)];if(o.graveyardPosition&&e.graveyardPosition&&o.graveyardPosition.isEqual(e.graveyardPosition))return[new wt(0)];if(t.abRelation=="splitBefore")return o.howMany=0,o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(e),[o]}if(o.graveyardPosition&&e.graveyardPosition&&o.graveyardPosition.isEqual(e.graveyardPosition)){const n=o.splitPosition.root.rootName=="$graveyard",i=e.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const c=[];return e.howMany&&c.push(new De(e.moveTargetPosition,e.howMany,e.splitPosition,0)),o.howMany&&c.push(new De(o.splitPosition,o.howMany,o.moveTargetPosition,0)),c}else return[new wt(0)]}if(o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(e)),o.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return o.howMany++,[o];if(e.splitPosition.isEqual(o.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const i=new H(e.insertionPosition.root,n),r=new De(o.insertionPosition,1,i,0);return[o,r]}return o.splitPosition.hasSameParentAs(e.splitPosition)&&o.splitPosition.offset<e.splitPosition.offset&&(o.howMany-=e.howMany),o.splitPosition=o.splitPosition._getTransformedBySplitOperation(e),o.insertionPosition=je.getInsertionPosition(o.splitPosition),[o]});function Hg(o,e){return o.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function ui(o,e){const t=[];for(let n=0;n<o.length;n++){const i=o[n],r=new De(i.start,i.end.offset-i.start.offset,e,0);t.push(r);for(let s=n+1;s<o.length;s++)o[s]=o[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return t}class vt extends v(H){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new _("model-liveposition-root-not-rootelement",e);ZE.call(this)}detach(){this.stopListening()}toPosition(){return new H(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}vt.prototype.is=function(o){return o==="livePosition"||o==="model:livePosition"||o=="position"||o==="model:position"};function ZE(){this.listenTo(this.root.document.model,"applyOperation",(o,e)=>{const t=e[0];t.isDocumentOperation&&JE.call(this,t)},{priority:"low"})}function JE(o){const e=this.getTransformedByOperation(o);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}class hi{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},Ue("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:i=!1,isTyping:r=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=i,this.isTyping=r}get type(){return Ue("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class XE{constructor(e){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=e}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":{if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break}case"addAttribute":case"removeAttribute":case"changeAttribute":{for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break}case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),i=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),i||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=z._createFromPositionAndShift(t.position,1);for(const i of this._markerCollection.getMarkersIntersectingRange(n)){const r=i.getData();this.bufferMarkerChange(i.name,r,r)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const i=t.graveyardPosition.parent;this._markInsert(i,t.graveyardPosition.offset,1);const r=t.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const i=this._changedMarkers.get(e);i?(i.newMarkerData=n,i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,i=!e.range&&t.range,r=e.range&&t.range&&!e.range.isEqual(t.range);if(n||i||r)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((d,u)=>d.offset===u.offset?d.type!=u.type?d.type=="remove"?-1:1:0:d.offset<u.offset?-1:1),r=this._elementSnapshots.get(n),s=Ug(n.getChildren()),a=eD(r.length,i);let c=0,l=0;for(const d of a)if(d==="i")t.push(this._getInsertDiff(n,c,s[c])),c++;else if(d==="r")t.push(this._getRemoveDiff(n,c,r[l])),l++;else if(d==="a"){const u=s[c].attributes,p=r[l].attributes;let A;if(s[c].name=="$text")A=new z(H._createAt(n,c),H._createAt(n,c+1));else{const D=n.offsetToIndex(c);A=new z(H._createAt(n,c),H._createAt(n.getChild(D),0))}t.push(...this._getAttributesDiff(A,p,u)),c++,l++}else c++,l++}t.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<t.length;n++){const r=t[i],s=t[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),t[n]=null):i=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(tD),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=z._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_markInsert(e,t,n){const i={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i)}_markRemove(e,t,n){const i={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Ug(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const i=e.offset+e.howMany,r=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<r&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<r){const s=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:i,howMany:s-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=e.howMany;else if(i<=r)if(e.offset<n.offset){const s=i-n.offset;n.offset=e.offset,n.howMany-=s,e.nodesToHandle-=s}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<r){const s=r-e.offset;n.howMany-=s,e.nodesToHandle-=s}}if(n.type=="remove"&&(i<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const s=i-n.offset;n.offset=e.offset,n.howMany-=s}else if(e.offset<r)if(i<=r){const s=n.howMany;n.howMany=e.offset-n.offset;const a=s-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&i>n.offset){if(i>r){const s={type:"attribute",offset:r,howMany:i-r,count:this._changeCount++};this._handleChange(s,t),t.push(s)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<r&&(i>r?(e.nodesToHandle=i-r,e.offset=r):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&i>n.offset){const s={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(s,t),t.push(s),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&i<=r?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&i>=r&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:H._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:H._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const i=[];n=new Map(n);for(const[r,s]of t){const a=n.has(r)?n.get(r):null;a!==s&&i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return i}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),i=e.startOffset;if(n){for(const r of n)if(r.type=="insert"&&i>=r.offset&&i<r.offset+r.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const i=new z(H._createAt(e,t),H._createAt(e,t+n));for(const r of i.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function Ug(o){const e=[];for(const t of o)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function eD(o,e){const t=[];let n=0,i=0;for(const r of e){if(r.offset>n){for(let s=0;s<r.offset-n;s++)t.push("e");i+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)t.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)t.push("r");n=r.offset,i+=r.howMany}else t.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,i+=r.howMany}if(i<o)for(let r=0;r<o-i-n;r++)t.push("e");return t}function tD(o){const e="position"in o&&o.position.root.rootName=="$graveyard",t="range"in o&&o.range.root.rootName=="$graveyard";return!e&&!t}class nD{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new _("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let i=t-1;for(const[a,c]of this._gaps)e>a&&e<c&&(e=c),i>a&&i<c&&(i=a-1);if(i<n.baseVersion||e>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(e);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(i);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Ns extends Ne{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}Ns.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"):o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"||o==="node"||o==="model:node"};const Al="$graveyard";class oD extends v(){constructor(e){super(),this.model=e,this.history=new nD,this.selection=new qt(this),this.roots=new St({idProperty:"rootName"}),this.differ=new XE(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Al),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,i,r,s)=>{const a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),i===null&&n.on("change",(c,l)=>{const d=n.getData();this.differ.bufferMarkerChange(n.name,{...d,range:l},d)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Al)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new _("model-document-createroot-name-exists",this,{name:t});const n=new Ns(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Al)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=uf(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,i=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(i)||t.createRange(i)}_validateSelectionRange(e){return Wg(e.start)&&Wg(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Wg(o){const e=o.textNode;if(e){const t=e.data,n=o.offset-e.startOffset;return!Mh(t,n)&&!Bh(t,n)}return!0}class iD extends v(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof fi?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,i=!1){const r=e instanceof fi?e.name:e;if(r.includes(","))throw new _("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const l=s.getData(),d=s.getRange();let u=!1;return d.isEqual(t)||(s._attachLiveRange(rn.fromRange(t)),u=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,u=!0),typeof i=="boolean"&&i!=s.affectsData&&(s._affectsData=i,u=!0),u&&this.fire(`update:${r}`,s,d,t,l),s}const a=rn.fromRange(t),c=new fi(r,a,n,i);return this._markers.set(r,c),this.fire(`update:${r}`,c,null,t,{...c.getData(),range:null}),c}_remove(e){const t=e instanceof fi?e.name:e,n=this._markers.get(t);return n?(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0):!1}_refresh(e){const t=e instanceof fi?e.name:e,n=this._markers.get(t);if(!n)throw new _("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire(`update:${t}`,n,i,i,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class fi extends v(Xn){constructor(e,t,n,i){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}fi.prototype.is=function(o){return o==="marker"||o==="model:marker"};class rD extends Gt{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new _("detach-operation-on-document-node",this)}_execute(){Pg(z._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Nn extends Xn{constructor(e){super(),this.markers=new Map,this._children=new tr,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Ne.fromJSON(n)):t.push(Re.fromJSON(n));return new Nn(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=sD(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}}Nn.prototype.is=function(o){return o==="documentFragment"||o==="model:documentFragment"};function sD(o){return typeof o=="string"?[new Re(o)]:(Et(o)||(o=[o]),Array.from(o).map(e=>typeof e=="string"?new Re(e):e instanceof on?new Re(e.data,e.getAttributes()):e))}class aD{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Re(e,t)}createElement(e,t){return new Ne(e,t)}createDocumentFragment(){return new Nn}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof Re&&e.data=="")return;const i=H._createAt(t,n);if(e.parent)if($g(e.root,i.root)){this.move(z._createOn(e),i);return}else{if(e.root.document)throw new _("model-writer-insert-forbidden-move",this);this.remove(e)}const r=i.root.document?i.root.document.version:null,s=new bt(i,e,r);if(e instanceof Re&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),e instanceof Nn)for(const[a,c]of e.markers){const l=H._createAt(c.root,0),u={range:new z(c.start._getCombined(l,i),c.end._getCombined(l,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,u):this.addMarker(a,u)}}insertText(e,t,n,i){t instanceof Nn||t instanceof Ne||t instanceof H?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,i)}insertElement(e,t,n,i){t instanceof Nn||t instanceof Ne||t instanceof H?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,i)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof Nn||t instanceof Ne?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof Nn||t instanceof Ne?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof z){const i=n.getMinimalFlatRanges();for(const r of i)qg(this,e,t,r)}else Gg(this,e,t,n)}setAttributes(e,t){for(const[n,i]of un(e))this.setAttribute(n,i,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof z){const n=t.getMinimalFlatRanges();for(const i of n)qg(this,e,null,i)}else Gg(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(!(e instanceof z))t(e);else for(const n of e.getItems())t(n)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof z))throw new _("writer-move-invalid-range",this);if(!e.isFlat)throw new _("writer-move-range-not-flat",this);const i=H._createAt(t,n);if(i.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!$g(e.root,i.root))throw new _("writer-move-different-document",this);const r=e.root.document?e.root.document.version:null,s=new De(e.start,e.end.offset-e.start.offset,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(e){this._assertWriterUsedCorrectly();const n=(e instanceof z?e:z._createOn(e)).getMinimalFlatRanges().reverse();for(const i of n)this._addOperationForAffectedMarkers("move",i),cD(i.start,i.end.offset-i.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Ne))throw new _("writer-merge-no-element-before",this);if(!(n instanceof Ne))throw new _("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(z._createIn(n),H._createAt(t,"end")),this.remove(n)}_merge(e){const t=H._createAt(e.nodeBefore,"end"),n=H._createAt(e.nodeAfter,0),i=e.root.document.graveyard,r=new H(i,[0]),s=e.root.document.version,a=new it(n,e.nodeAfter.maxOffset,t,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Ne))throw new _("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,i=new zt(H._createBefore(e),e.name,t,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(e,t){this._assertWriterUsedCorrectly();let n=e.parent;if(!n.parent)throw new _("writer-split-element-no-parent",this);if(t||(t=n.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new _("writer-split-invalid-limit-element",this);let i,r;do{const s=n.root.document?n.root.document.version:null,a=n.maxOffset-e.offset,c=je.getInsertionPosition(e),l=new je(e,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),!i&&!r&&(i=n,r=e.parent.nextSibling),e=this.createPositionAfter(e.parent),n=e.parent}while(n!==t);return{position:e,range:new z(H._createAt(i,"end"),H._createAt(r,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new _("writer-wrap-range-not-flat",this);const n=t instanceof Ne?t:new Ne(t);if(n.childCount>0)throw new _("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new _("writer-wrap-element-attached",this);this.insert(n,e.start);const i=new z(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(i,H._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new _("writer-unwrap-element-no-parent",this);this.move(z._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new _("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,i=t.range,r=t.affectsData===void 0?!1:t.affectsData;if(this.model.markers.has(e))throw new _("writer-addmarker-marker-exists",this);if(!i)throw new _("writer-addmarker-no-range",this);return n?(lr(this,e,null,i,r),this.model.markers.get(e)):this.model.markers._set(e,i,n,r)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,i=this.model.markers.get(n);if(!i)throw new _("writer-updatemarker-marker-not-exists",this);if(!t){Ue("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),this.model.markers._refresh(i);return}const r=typeof t.usingOperation=="boolean",s=typeof t.affectsData=="boolean",a=s?t.affectsData:i.affectsData;if(!r&&!t.range&&!s)throw new _("writer-updatemarker-wrong-options",this);const c=i.getRange(),l=t.range?t.range:c;if(r&&t.usingOperation!==i.managedUsingOperations){t.usingOperation?lr(this,n,null,l,a):(lr(this,n,c,null,a),this.model.markers._set(n,l,void 0,a));return}i.managedUsingOperations?lr(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new _("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations){this.model.markers._remove(t);return}const i=n.getRange();lr(this,t,i,null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,i]of un(e))this._setSelectionAttribute(n,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=qt._getStoreAttributeKey(e);this.setAttribute(i,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=qt._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new _("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let r=!1;if(e==="move"){const s=t;r=s.containsPosition(i.start)||s.start.isEqual(i.start)||s.containsPosition(i.end)||s.end.isEqual(i.end)}else{const s=t,a=s.nodeBefore,c=s.nodeAfter,l=i.start.parent==a&&i.start.isAtEnd,d=i.end.parent==c&&i.end.offset==0,u=i.end.nodeAfter==c,p=i.start.nodeAfter==c;r=l||d||u||p}r&&this.updateMarker(n.name,{range:i})}}}function qg(o,e,t,n){const i=o.model,r=i.document;let s=n.start,a,c,l;for(const u of n.getWalker({shallow:!0}))l=u.item.getAttribute(e),a&&c!=l&&(c!=t&&d(),s=a),a=u.nextPosition,c=l;a instanceof H&&a!=s&&c!=t&&d();function d(){const u=new z(s,a),p=u.root.document?r.version:null,A=new ct(u,e,c,t,p);o.batch.addOperation(A),i.applyOperation(A)}}function Gg(o,e,t,n){const i=o.model,r=i.document,s=n.getAttribute(e);let a,c;if(s!=t){if(n.root===n){const d=n.document?r.version:null;c=new Bn(n,e,s,t,d)}else{a=new z(H._createBefore(n),o.createPositionAfter(n));const d=a.root.document?r.version:null;c=new ct(a,e,s,t,d)}o.batch.addOperation(c),i.applyOperation(c)}}function lr(o,e,t,n,i){const r=o.model,s=r.document,a=new Pt(e,t,n,r.markers,!!i,s.version);o.batch.addOperation(a),r.applyOperation(a)}function cD(o,e,t,n){let i;if(o.root.document){const r=n.document,s=new H(r.graveyard,[0]);i=new De(o,e,s,r.version)}else i=new rD(o,e);t.addOperation(i),n.applyOperation(i)}function $g(o,e){return o===e||o instanceof Ns&&e instanceof Ns}function lD(o){o.document.registerPostFixer(e=>dD(e,o))}function dD(o,e){const t=e.document.selection,n=e.schema,i=[];let r=!1;for(const s of t.getRanges()){const a=uD(s,n);a&&!a.isEqual(s)?(i.push(a),r=!0):i.push(s)}return r&&o.setSelection(mD(i),{backward:t.isBackward}),!1}function uD(o,e){return o.isCollapsed?hD(o,e):fD(o,e)}function hD(o,e){const t=o.start,n=e.getNearestSelectionRange(t);if(!n){const r=t.getAncestors().reverse().find(s=>e.isObject(s));return r?z._createOn(r):null}if(!n.isCollapsed)return n;const i=n.start;return t.isEqual(i)?null:new z(i)}function fD(o,e){const{start:t,end:n}=o,i=e.checkChild(t,"$text"),r=e.checkChild(n,"$text"),s=e.getLimitElement(t),a=e.getLimitElement(n);if(s===a){if(i&&r)return null;if(gD(t,n,e)){const u=t.nodeAfter&&e.isSelectable(t.nodeAfter)?null:e.getNearestSelectionRange(t,"forward"),A=n.nodeBefore&&e.isSelectable(n.nodeBefore)?null:e.getNearestSelectionRange(n,"backward"),D=u?u.start:t,N=A?A.end:n;return new z(D,N)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const d=t.nodeAfter&&n.nodeBefore&&t.nodeAfter.parent===n.nodeBefore.parent,u=c&&(!d||!Yg(t.nodeAfter,e)),p=l&&(!d||!Yg(n.nodeBefore,e));let A=t,D=n;return u&&(A=H._createBefore(Kg(s,e))),p&&(D=H._createAfter(Kg(a,e))),new z(A,D)}return null}function Kg(o,e){let t=o,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function gD(o,e,t){const n=o.nodeAfter&&!t.isLimit(o.nodeAfter)||t.checkChild(o,"$text"),i=e.nodeBefore&&!t.isLimit(e.nodeBefore)||t.checkChild(e,"$text");return n||i}function mD(o){const e=[...o],t=new Set;let n=1;for(;n<e.length;){const r=e[n],s=e.slice(0,n);for(const[a,c]of s.entries())if(!t.has(a)){if(r.isEqual(c))t.add(a);else if(r.isIntersecting(c)){t.add(a),t.add(n);const l=r.getJoined(c);e.push(l)}}n++}return e.filter((r,s)=>!t.has(s))}function Yg(o,e){return o&&e.isSelectable(o)}function pD(o,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=o.schema;o.change(r=>{if(!t.doNotResetEntireContent&&xD(i,e)){yD(r,e);return}const s={};if(!t.doNotAutoparagraph){const l=e.getSelectedElement();l&&Object.assign(s,i.getAttributesWithProperty(l,"copyOnReplace",!0))}const[a,c]=kD(n);a.isTouching(c)||r.remove(r.createRange(a,c)),t.leaveUnmerged||(wD(r,a,c),i.removeDisallowedAttributes(a.parent.getChildren(),r)),Xg(r,e,a),!t.doNotAutoparagraph&&CD(i,a)&&Jg(r,a,e,s),a.detach(),c.detach()})}function kD(o){const e=o.root.document.model,t=o.start;let n=o.end;if(e.hasContent(o,{ignoreMarkers:!0})){const i=bD(n);if(i&&n.isTouching(e.createPositionAt(i,0))){const r=e.createSelection(o);e.modifySelection(r,{direction:"backward"});const s=r.getLastPosition(),a=e.createRange(s,n);e.hasContent(a,{ignoreMarkers:!0})||(n=s)}}return[vt.fromPosition(t,"toPrevious"),vt.fromPosition(n,"toNext")]}function bD(o){const e=o.parent,t=e.root.document.model.schema,n=e.getAncestors({parentFirst:!0,includeSelf:!0});for(const i of n){if(t.isLimit(i))return null;if(t.isBlock(i))return i}}function wD(o,e,t){const n=o.model;if(!Cl(o.model.schema,e,t))return;const[i,r]=AD(e,t);!i||!r||(!n.hasContent(i,{ignoreMarkers:!0})&&n.hasContent(r,{ignoreMarkers:!0})?Zg(o,e,t,i.parent):Qg(o,e,t,i.parent))}function Qg(o,e,t,n){const i=e.parent,r=t.parent;if(!(i==n||r==n)){for(e=o.createPositionAfter(i),t=o.createPositionBefore(r),t.isEqual(e)||o.insert(r,e),o.merge(e);t.parent.isEmpty;){const s=t.parent;t=o.createPositionBefore(s),o.remove(s)}Cl(o.model.schema,e,t)&&Qg(o,e,t,n)}}function Zg(o,e,t,n){const i=e.parent,r=t.parent;if(!(i==n||r==n)){for(e=o.createPositionAfter(i),t=o.createPositionBefore(r),t.isEqual(e)||o.insert(i,t);e.parent.isEmpty;){const s=e.parent;e=o.createPositionBefore(s),o.remove(s)}t=o.createPositionBefore(r),_D(o,t),Cl(o.model.schema,e,t)&&Zg(o,e,t,n)}}function _D(o,e){const t=e.nodeBefore,n=e.nodeAfter;t.name!=n.name&&o.rename(t,n.name),o.clearAttributes(t),o.setAttributes(Object.fromEntries(n.getAttributes()),t),o.merge(e)}function Cl(o,e,t){const n=e.parent,i=t.parent;return n==i||o.isLimit(n)||o.isLimit(i)?!1:vD(e,t,o)}function AD(o,e){const t=o.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]&&t[i]==n[i];)i++;return[t[i],n[i]]}function CD(o,e){const t=o.checkChild(e,"$text"),n=o.checkChild(e,"paragraph");return!t&&n}function vD(o,e,t){const n=new z(o,e);for(const i of n.getWalker())if(t.isLimit(i.item))return!1;return!0}function Jg(o,e,t,n={}){const i=o.createElement("paragraph");o.model.schema.setAllowedAttributes(i,n,o),o.insert(i,e),Xg(o,t,o.createPositionAt(i,0))}function yD(o,e){const t=o.model.schema.getLimitElement(e);o.remove(o.createRangeIn(t)),Jg(o,o.createPositionAt(t,0),e)}function xD(o,e){const t=o.getLimitElement(e);if(!e.containsEntireContent(t))return!1;const n=e.getFirstRange();return n.start.parent==n.end.parent?!1:o.checkChild(t,"paragraph")}function Xg(o,e,t){e instanceof qt?o.setSelection(t):e.setTo(t)}function ED(o,e){return o.change(t=>{const n=t.createDocumentFragment(),i=e.getFirstRange();if(!i||i.isCollapsed)return n;const r=i.start.root,s=i.start.getCommonPath(i.end),a=r.getNodeByPath(s);let c;i.start.parent==i.end.parent?c=i:c=t.createRange(t.createPositionAt(a,i.start.path[s.length]),t.createPositionAt(a,i.end.path[s.length]+1));const l=c.end.offset-c.start.offset;for(const d of c.getItems({shallow:!0}))d.is("$textProxy")?t.appendText(d.data,d.getAttributes(),n):t.append(t.cloneElement(d,!0),n);if(c!=i){const d=i._getTransformedByMove(c.start,t.createPositionAt(n,0),l)[0],u=t.createRange(t.createPositionAt(n,0),d.start),p=t.createRange(d.end,t.createPositionAt(n,"end"));em(p,t),em(u,t)}return n})}function em(o,e){const t=[];Array.from(o.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(o.start)||n.start.isEqual(o.start))&&(n.end.isBefore(o.end)||n.end.isEqual(o.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const r=e.createRangeOn(i);i=i.parent,e.remove(r)}})}function DD(o,e,t,n){return o.change(i=>{let r;t?t instanceof bn||t instanceof qt?r=t:r=i.createSelection(t,n):r=o.document.selection,r.isCollapsed||o.deleteContent(r,{doNotAutoparagraph:!0});const s=new SD(o,i,r.anchor),a=[];let c;if(e.is("documentFragment")){if(e.markers.size){const u=[];for(const[p,A]of e.markers){const{start:D,end:N}=A,j=D.isEqual(N);u.push({position:D,name:p,isCollapsed:j},{position:N,name:p,isCollapsed:j})}u.sort(({position:p},{position:A})=>p.isBefore(A)?1:-1);for(const{position:p,name:A,isCollapsed:D}of u){let N=null,j=null;const q=p.parent===e&&p.isAtStart,G=p.parent===e&&p.isAtEnd;!q&&!G?(N=i.createElement("$marker"),i.insert(N,p)):D&&(j=q?"start":"end"),a.push({name:A,element:N,collapsed:j})}}c=e.getChildren()}else c=[e];s.handleNodes(c);let l=s.getSelectionRange();if(e.is("documentFragment")&&a.length){const u=l?rn.fromRange(l):null,p={};for(let A=a.length-1;A>=0;A--){const{name:D,element:N,collapsed:j}=a[A],q=!p[D];if(q&&(p[D]=[]),N){const G=i.createPositionAt(N,"before");p[D].push(G),i.remove(N)}else{const G=s.getAffectedRange();if(!G){j&&p[D].push(s.position);continue}j?p[D].push(G[j]):p[D].push(q?G.start:G.end)}}for(const[A,[D,N]]of Object.entries(p))D&&N&&D.root===N.root&&i.addMarker(A,{usingOperation:!0,affectsData:!0,range:new z(D,N)});u&&(l=u.toRange(),u.detach())}l&&(r instanceof qt?i.setSelection(l):r.setTo(l));const d=s.getAffectedRange()||o.createRange(r.anchor);return s.destroy(),d})}class SD{constructor(e,t,n){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0)}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new _("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?z._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new z(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e)){this._handleObject(e);return}let t=this._checkAndAutoParagraphToAllowedPosition(e);if(!t&&(t=this._checkAndSplitToAllowedPosition(e),!t)){this._handleDisallowedNode(e);return}this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=vt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new _("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=vt.fromPosition(e,"toPrevious")),(!this._affectedEnd||this._affectedEnd.isBefore(e))&&(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=vt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Ne)||!this._canMergeLeft(e))return;const t=vt._createBefore(e);t.stickiness="toNext";const n=vt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=vt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=vt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Ne)||!this._canMergeRight(e))return;const t=vt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new _("insertcontent-invalid-insertion-position",this);this.position=H._createAt(t.nodeBefore,"end");const n=vt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=vt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=vt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Ne&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Ne&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function tm(o,e,t="auto"){const n=o.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const i=et(o.getSelectedBlocks());if(!i)return e.createRange(o.focus);if(i.isEmpty)return e.createRange(e.createPositionAt(i,0));const r=e.createPositionAfter(i);return o.focus.isTouching(r)?e.createRange(r):e.createRange(e.createPositionBefore(i))}function TD(o,e,t,n,i={}){if(!o.schema.isObject(e))throw new _("insertobject-element-not-an-object",o,{object:e});let r;t?t instanceof bn||t instanceof qt?r=t:r=o.createSelection(t,n):r=o.document.selection;let s=r;i.findOptimalPosition&&o.schema.isBlock(e)&&(s=o.createSelection(tm(r,o,i.findOptimalPosition)));const a=et(r.getSelectedBlocks()),c={};return a&&Object.assign(c,o.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),o.change(l=>{s.isCollapsed||o.deleteContent(s,{doNotAutoparagraph:!0});let d=e;const u=s.anchor.parent;!o.schema.checkChild(u,e)&&o.schema.checkChild(u,"paragraph")&&o.schema.checkChild("paragraph",e)&&(d=l.createElement("paragraph"),l.insert(e,d)),o.schema.setAllowedAttributes(d,c,l);const p=o.insertContent(d,s);return p.isCollapsed||i.setSelection&&ID(l,e,i.setSelection,c),p})}function ID(o,e,t,n){const i=o.model;if(t=="on"){o.setSelection(e,"on");return}if(t!="after")throw new _("insertobject-invalid-place-parameter-value",i);let r=e.nextSibling;if(i.schema.isInline(e)){o.setSelection(e,"after");return}!(r&&i.schema.checkChild(r,"$text"))&&i.schema.checkChild(e.parent,"paragraph")&&(r=o.createElement("paragraph"),i.schema.setAllowedAttributes(r,n,o),i.insertContent(r,o.createPositionAfter(e))),r&&o.setSelection(r,0)}const MD=' ,.?!:;"-()';function BD(o,e,t={}){const n=o.schema,i=t.direction!="backward",r=t.unit?t.unit:"character",s=!!t.treatEmojiAsSingleUnit,a=e.focus,c=new kn({boundaries:LD(a,i),singleCharacters:!0,direction:i?"forward":"backward"}),l={walker:c,schema:n,isForward:i,unit:r,treatEmojiAsSingleUnit:s};let d;for(;d=c.next();){if(d.done)return;const u=ND(l,d.value);if(u){e instanceof qt?o.change(p=>{p.setSelectionFocus(u)}):e.setFocus(u);return}}}function ND(o,e){const{isForward:t,walker:n,unit:i,schema:r,treatEmojiAsSingleUnit:s}=o,{type:a,item:c,nextPosition:l}=e;if(a=="text")return o.unit==="word"?zD(n,t):PD(n,i,s);if(a==(t?"elementStart":"elementEnd")){if(r.isSelectable(c))return H._createAt(c,t?"after":"before");if(r.checkChild(l,"$text"))return l}else{if(r.isLimit(c)){n.skip(()=>!0);return}if(r.checkChild(l,"$text"))return l}}function PD(o,e,t){const n=o.position.textNode;if(n){const i=n.data;let r=o.position.offset-n.startOffset;for(;Mh(i,r)||e=="character"&&Bh(i,r)||t&&_v(i,r);)o.next(),r=o.position.offset-n.startOffset}return o.position}function zD(o,e){let t=o.position.textNode;for(t||(t=e?o.position.nodeAfter:o.position.nodeBefore);t&&t.is("$text");){const n=o.position.offset-t.startOffset;if(RD(t,n,e))t=e?o.position.nodeAfter:o.position.nodeBefore;else{if(OD(t.data,n,e))break;o.next()}}return o.position}function LD(o,e){const t=o.root,n=H._createAt(t,e?"end":0);return e?new z(o,n):new z(n,o)}function OD(o,e,t){const n=e+(t?0:-1);return MD.includes(o.charAt(n))}function RD(o,e,t){return e===(t?o.offsetSize:0)}class jD extends we(){constructor(){super(),this.markers=new iD,this.document=new oD(this),this.schema=new bE,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),lD(this),this.document.registerPostFixer(yg)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new hi,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){_.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new hi):e instanceof hi||(e=new hi(e)):e=new hi,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){_.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return DD(this,e,t,n)}insertObject(e,t,n,i){return TD(this,e,t,n,i)}deleteContent(e,t){pD(this,e,t)}modifySelection(e,t){BD(this,e,t)}getSelectedContent(e){return ED(this,e)}hasContent(e,t={}){const n=e instanceof z?e:z._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:r=!1}=t;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s))if(s.is("$textProxy"))if(i){if(s.data.search(/\S/)!==-1)return!0}else return!0;else return!0;return!1}createPositionFromPath(e,t,n){return new H(e,t,n)}createPositionAt(e,t){return H._createAt(e,t)}createPositionAfter(e){return H._createAfter(e)}createPositionBefore(e){return H._createBefore(e)}createRange(e,t){return new z(e,t)}createRangeIn(e){return z._createIn(e)}createRangeOn(e){return z._createOn(e)}createSelection(...e){return new bn(...e)}createBatch(e){return new hi(e)}createOperationFromJSON(e){return qE.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new aD(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class FD extends Jn{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class Ps extends Jn{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class No{constructor(e){this.document=e}createDocumentFragment(e){return new So(this.document,e)}createElement(e,t,n){return new Rt(this.document,e,t,n)}createText(e){return new Oe(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const i=n.getChildIndex(e);return this.removeChildren(i,1,n),this.insertChild(i,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Rt(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ct(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return W._createAt(e,t)}createPositionAfter(e){return W._createAfter(e)}createPositionBefore(e){return W._createBefore(e)}createRange(e,t){return new ae(e,t)}createRangeOn(e){return ae._createOn(e)}createRangeIn(e){return ae._createIn(e)}createSelection(...e){return new gn(...e)}}const VD=/^([+-]?[0-9]*([.][0-9]+)?(px|cm|mm|in|pc|pt|ch|em|ex|rem|vh|vw|vmin|vmax)|0)$/;function HD(o){return VD.test(o)}const UD=/^[+-]?[0-9]*([.][0-9]+)?%$/;function WD(o){return UD.test(o)}class qD{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new _("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class GD extends Wt{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(r,s)=>{this.editor.execute(i),s()}}super.set(e,t,n)}}class $D extends we(){constructor(e={}){super();const t=this.constructor,n=e.language||t.defaultConfig&&t.defaultConfig.language;this._context=e.context||new Uv({language:n}),this._context._addEditor(this,!e.context);const i=Array.from(t.builtinPlugins||[]);this.config=new lh(e,t.defaultConfig),this.config.define("plugins",i),this.config.define(this._context._getEditorConfig()),this.plugins=new af(this,i,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new qD,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new jD;const r=new A0;this.data=new FE(this.model,r),this.editing=new pE(this.model,r),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new HE([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new GD(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new _("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new _("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new _("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],i=e.get("extraPlugins")||[],r=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(i),n,r)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(e,...t){try{return this.commands.execute(e,...t)}catch(n){_.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}function KD(o){if(!Xt(o.updateSourceElement))throw new _("attachtoform-missing-elementapi-interface",o);const e=o.sourceElement;if(YD(e)&&e.form){let t;const n=e.form,i=()=>o.updateSourceElement();Xt(n.submit)&&(t=n.submit,n.submit=()=>{i(),t.apply(n)}),n.addEventListener("submit",i),o.on("destroy",()=>{n.removeEventListener("submit",i),t&&(n.submit=t)})}}function YD(o){return!!o&&o.tagName.toLowerCase()==="textarea"}function zs(o){class e extends o{setData(n){this.data.set(n)}getData(n){return this.data.get(n)}}return e}{const o=zs(Object);zs.setData=o.prototype.setData,zs.getData=o.prototype.getData}function vl(o){class e extends o{updateSourceElement(n=this.data.get()){if(!this.sourceElement)throw new _("editor-missing-sourceelement",this);const i=this.config.get("updateSourceElementOnDestroy"),r=this.sourceElement instanceof HTMLTextAreaElement;if(!i&&!r){bh(this.sourceElement,"");return}bh(this.sourceElement,n)}}return e}vl.updateSourceElement=vl(Object).prototype.updateSourceElement;class nm extends ks{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new St({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new _("pendingactions-add-invalid-message",this);const t=new(we());return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Ge={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};var om=b(5571),yl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};yl.insert="head",yl.singleton=!0,ne()(om.Z,yl),om.Z.locals;const{threeVerticalDots:im}=Ge,QD={alignLeft:Ge.alignLeft,bold:Ge.bold,importExport:Ge.importExport,paragraph:Ge.paragraph,plus:Ge.plus,text:Ge.text,threeVerticalDots:Ge.threeVerticalDots};class xl extends ke{constructor(e,t){super(e);const n=this.bindTemplate,i=this.t;this.options=t||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Bt,this.keystrokes=new Wt,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new ZD(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=e.uiLanguageDirection==="rtl";this._focusCycler=new Co({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:Hv(this)}}),this._behavior=this.options.shouldGroupWhenFull?new XD(this):new JD(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){this.items.addMany(this._buildItemsFromConfig(e,t,n))}_buildItemsFromConfig(e,t,n){const i=nf(e),r=n||i.removeItems;return this._cleanItemsConfiguration(i.items,t,r).map(a=>Me(a)?this._createNestedToolbarDropdown(a,t,r):a==="|"?new tf:a==="-"?new Vv:t.create(a)).filter(a=>!!a)}_cleanItemsConfiguration(e,t,n){const i=e.filter((r,s,a)=>r==="|"?!0:n.indexOf(r)!==-1?!1:r==="-"?this.options.shouldGroupWhenFull?(Ue("toolbarview-line-break-ignored-when-grouping-items",a),!1):!0:!Me(r)&&!t.has(r)?(Ue("toolbarview-item-unavailable",{item:r}),!1):!0);return this._cleanSeparatorsAndLineBreaks(i)}_cleanSeparatorsAndLineBreaks(e){const t=s=>s!=="-"&&s!=="|",n=e.length,i=e.findIndex(t);if(i===-1)return[];const r=n-e.slice().reverse().findIndex(t);return e.slice(i,r).filter((s,a,c)=>t(s)?!0:!(a>0&&c[a-1]===s))}_createNestedToolbarDropdown(e,t,n){let{label:i,icon:r,items:s,tooltip:a=!0,withText:c=!1}=e;if(s=this._cleanItemsConfiguration(s,t,n),!s.length)return null;const l=this.locale,d=$t(l);return i||Ue("toolbarview-nested-toolbar-dropdown-missing-label",e),d.class="ck-toolbar__nested-toolbar-dropdown",d.buttonView.set({label:i,tooltip:a,withText:!!c}),r!==!1?d.buttonView.icon=QD[r]||r||im:d.buttonView.withText=!0,Tl(d,()=>d.toolbarView._buildItemsFromConfig(s,t,n)),d}}class ZD extends ke{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class JD{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class XD{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("change",this._updateFocusCycleableItems.bind(this)),e.children.on("change",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const i=n.index,r=Array.from(n.added);for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+r.length;s++){const a=r[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!_o(this.viewElement)){this.shouldUpdateGroupingOnNextResize=!0;return}const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new He(e.lastChild),i=new He(e);if(!this.cachedPadding){const r=pe.window.getComputedStyle(e),s=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return t==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new Ye(this.viewElement,t=>{(!e||e!==t.contentRect.width||this.shouldUpdateGroupingOnNextResize)&&(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new tf),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=$t(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",Tl(n,this.groupedItems),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:im}),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var rm=b(1162),El={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};El.insert="head",El.singleton=!0,ne()(rm.Z,El),rm.Z.locals;class eS extends ke{constructor(e){super(e);const t=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new Bt,this.keystrokes=new Wt,this._focusCycler=new Co({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.set("ariaLabel",void 0),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"],"aria-label":t.to("ariaLabel")},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class sm extends ke{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class tS extends ke{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var am=b(5075),Dl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Dl.insert="head",Dl.singleton=!0,ne()(am.Z,Dl),am.Z.locals;var cm=b(6875),Sl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Sl.insert="head",Sl.singleton=!0,ne()(cm.Z,Sl),cm.Z.locals;function $t(o,e=Xh){const t=new e(o),n=new Fv(o),i=new si(o,t,n);return t.bind("isEnabled").to(i),t instanceof ps?t.arrowView.bind("isOn").to(i,"isOpen"):t.bind("isOn").to(i,"isOpen"),nS(i),i}function Tl(o,e,t={}){o.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),o.isOpen?lm(o,e,t):o.once("change:isOpen",()=>lm(o,e,t),{priority:"highest"}),t.enableActiveItemFocusOnDropdownOpen&&Il(o,()=>o.toolbarView.items.find(n=>n.isOn))}function lm(o,e,t){const n=o.locale,i=n.t,r=o.toolbarView=new xl(n),s=typeof e=="function"?e():e;r.ariaLabel=t.ariaLabel||i("Dropdown toolbar"),t.maxWidth&&(r.maxWidth=t.maxWidth),t.class&&(r.class=t.class),t.isCompact&&(r.isCompact=t.isCompact),t.isVertical&&(r.isVertical=!0),s instanceof Mn?r.items.bindTo(s).using(a=>a):r.items.addMany(s),o.panelView.children.add(r),r.items.delegate("execute").to(o)}function dr(o,e,t={}){o.isOpen?dm(o,e,t):o.once("change:isOpen",()=>dm(o,e,t),{priority:"highest"}),Il(o,()=>o.listView.items.find(n=>n instanceof sm?n.children.first.isOn:!1))}function dm(o,e,t){const n=o.locale,i=o.listView=new eS(n),r=typeof e=="function"?e():e;i.ariaLabel=t.ariaLabel,i.items.bindTo(r).using(s=>{if(s.type==="separator")return new tS(n);if(s.type==="button"||s.type==="switchbutton"){const a=new sm(n);let c;return s.type==="button"?c=new Be(n):c=new ms(n),c.bind(...Object.keys(s.model)).to(s.model),c.delegate("execute").to(a),a.children.add(c),a}return null}),o.panelView.children.add(i),i.items.delegate("execute").to(o)}function Il(o,e){o.on("change:isOpen",()=>{if(!o.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():Ue("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:At.low-10})}function nS(o){oS(o),iS(o),rS(o),sS(o),aS(o),cS(o)}function oS(o){o.on("render",()=>{y({emitter:o,activator:()=>o.isOpen,callback:()=>{o.isOpen=!1},contextElements:[o.element]})})}function iS(o){o.on("execute",e=>{e.source instanceof ms||(o.isOpen=!1)})}function rS(o){o.focusTracker.on("change:isFocused",(e,t,n)=>{o.isOpen&&!n&&(o.isOpen=!1)})}function sS(o){o.keystrokes.set("arrowdown",(e,t)=>{o.isOpen&&(o.panelView.focus(),t())}),o.keystrokes.set("arrowup",(e,t)=>{o.isOpen&&(o.panelView.focusLast(),t())})}function aS(o){o.on("change:isOpen",(e,t,n)=>{if(n)return;const i=o.panelView.element;i&&i.contains(pe.document.activeElement)&&o.buttonView.focus()})}function cS(o){o.on("change:isOpen",(e,t,n)=>{n&&o.panelView.focus()},{priority:"low"})}var um=b(8245),Ml={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Ml.insert="head",Ml.singleton=!0,ne()(um.Z,Ml),um.Z.locals;const hm=Ec("px"),fm=pe.document.body;class Tt extends ke{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",hm),left:t.to("left",hm)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Tt.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:fm,fitInViewport:!0},e),i=Tt._getOptimalPosition(n),r=parseInt(i.left),s=parseInt(i.top),a=i.name,c=i.config||{},{withArrow:l=!0}=c;this.top=s,this.left=r,this.position=a,this.withArrow=l}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=Bl(e.target),n=e.limiter?Bl(e.limiter):fm;this.listenTo(pe.document,"scroll",(i,r)=>{const s=r.target,a=t&&s.contains(t),c=n&&s.contains(n);(a||c||!t||!n)&&this.attachTo(e)},{useCapture:!0}),this.listenTo(pe.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(pe.document,"scroll"),this.stopListening(pe.window,"resize")}}Tt.arrowSideOffset=25,Tt.arrowHeightOffset=10,Tt.stickyVerticalOffset=20,Tt._getOptimalPosition=_h,Tt.defaultPositions=gm();function Bl(o){return Ki(o)?o:ds(o)?o.commonAncestorContainer:typeof o=="function"?Bl(o()):null}function gm(o={}){const{sideOffset:e=Tt.arrowSideOffset,heightOffset:t=Tt.arrowHeightOffset,stickyVerticalOffset:n=Tt.stickyVerticalOffset,config:i}=o;return{northWestArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left-e,name:"arrow_sw",...i&&{config:i}}),northWestArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left-c.width*.25-e,name:"arrow_smw",...i&&{config:i}}),northWestArrowSouth:(a,c)=>({top:r(a,c),left:a.left-c.width/2,name:"arrow_s",...i&&{config:i}}),northWestArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left-c.width*.75+e,name:"arrow_sme",...i&&{config:i}}),northWestArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left-c.width+e,name:"arrow_se",...i&&{config:i}}),northArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-e,name:"arrow_sw",...i&&{config:i}}),northArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width*.25-e,name:"arrow_smw",...i&&{config:i}}),northArrowSouth:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s",...i&&{config:i}}),northArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width*.75+e,name:"arrow_sme",...i&&{config:i}}),northArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width+e,name:"arrow_se",...i&&{config:i}}),northEastArrowSouthWest:(a,c)=>({top:r(a,c),left:a.right-e,name:"arrow_sw",...i&&{config:i}}),northEastArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.right-c.width*.25-e,name:"arrow_smw",...i&&{config:i}}),northEastArrowSouth:(a,c)=>({top:r(a,c),left:a.right-c.width/2,name:"arrow_s",...i&&{config:i}}),northEastArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.right-c.width*.75+e,name:"arrow_sme",...i&&{config:i}}),northEastArrowSouthEast:(a,c)=>({top:r(a,c),left:a.right-c.width+e,name:"arrow_se",...i&&{config:i}}),southWestArrowNorthWest:a=>({top:s(a),left:a.left-e,name:"arrow_nw",...i&&{config:i}}),southWestArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left-c.width*.25-e,name:"arrow_nmw",...i&&{config:i}}),southWestArrowNorth:(a,c)=>({top:s(a),left:a.left-c.width/2,name:"arrow_n",...i&&{config:i}}),southWestArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left-c.width*.75+e,name:"arrow_nme",...i&&{config:i}}),southWestArrowNorthEast:(a,c)=>({top:s(a),left:a.left-c.width+e,name:"arrow_ne",...i&&{config:i}}),southArrowNorthWest:a=>({top:s(a),left:a.left+a.width/2-e,name:"arrow_nw",...i&&{config:i}}),southArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width*.25-e,name:"arrow_nmw",...i&&{config:i}}),southArrowNorth:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n",...i&&{config:i}}),southArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width*.75+e,name:"arrow_nme",...i&&{config:i}}),southArrowNorthEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width+e,name:"arrow_ne",...i&&{config:i}}),southEastArrowNorthWest:a=>({top:s(a),left:a.right-e,name:"arrow_nw",...i&&{config:i}}),southEastArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.right-c.width*.25-e,name:"arrow_nmw",...i&&{config:i}}),southEastArrowNorth:(a,c)=>({top:s(a),left:a.right-c.width/2,name:"arrow_n",...i&&{config:i}}),southEastArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.right-c.width*.75+e,name:"arrow_nme",...i&&{config:i}}),southEastArrowNorthEast:(a,c)=>({top:s(a),left:a.right-c.width+e,name:"arrow_ne",...i&&{config:i}}),westArrowEast:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.left-c.width-t,name:"arrow_e",...i&&{config:i}}),eastArrowWest:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.right+t,name:"arrow_w",...i&&{config:i}}),viewportStickyNorth:(a,c,l)=>a.getIntersection(l)?{top:l.top+n,left:a.left+a.width/2-c.width/2,name:"arrowless",config:{withArrow:!1,...i}}:null};function r(a,c){return a.top-c.height-t}function s(a){return a.bottom+t}}var mm=b(9948),Nl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Nl.insert="head",Nl.singleton=!0,ne()(mm.Z,Nl),mm.Z.locals;const pm="ck-tooltip";class _t extends Zn(){constructor(e){if(super(),_t._editors.add(e),_t._instance)return _t._instance;_t._instance=this,this.tooltipTextView=new ke(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Tt(e.locale),this.balloonPanelView.class=pm,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=er(this._pinTooltip,600),this.listenTo(pe.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(pe.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(pe.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(pe.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(pe.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){const t=e.ui.view&&e.ui.view.body;_t._editors.delete(e),this.stopListening(e.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),_t._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),_t._instance=null)}static getPositioningFunctions(e){const t=_t.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}_onEnterOrFocus(e,{target:t}){const n=Pl(t);n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,lS(n)))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!Ki(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const i=Pl(t),r=Pl(n);i&&i!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:i}){const r=et(_t._editors.values()).ui.view.body;r.has(this.balloonPanelView)||r.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:_t.getPositioningFunctions(n)}),this._resizeObserver=new Ye(e,()=>{_o(e)||this._unpinTooltip()}),this.balloonPanelView.class=[pm,i].filter(s=>s).join(" ");for(const s of _t._editors)this.listenTo(s.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of _t._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){if(!_o(this._currentElementWithTooltip)){this._unpinTooltip();return}this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:_t.getPositioningFunctions(this._currentTooltipPosition)})}}_t.defaultBalloonPositions=gm({heightOffset:5,sideOffset:13}),_t._editors=new Set,_t._instance=null;function Pl(o){return Ki(o)?o.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}function lS(o){return{text:o.dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}}class dS extends we(){constructor(e){super(),this.editor=e,this.componentFactory=new jv(e),this.focusTracker=new Bt,this.tooltipManager=new _t(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(t.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();(!c||!i)&&(i=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<i.length;l++){const d=i.shift();if(i.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),e.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):e.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(_o(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>km(t)-km(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),_o(t.element)?(t.focus(),!0):!1}}function km(o){const{toolbarView:e,options:t}=o;let n=10;return _o(e.element)&&n--,t.isContextual&&n--,n}var bm=b(4547),zl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};zl.insert="head",zl.singleton=!0,ne()(bm.Z,zl),bm.Z.locals;class uS extends ke{constructor(e){super(e),this.body=new Pv(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var wm=b(2751),Ll={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Ll.insert="head",Ll.singleton=!0,ne()(wm.Z,Ll),wm.Z.locals;class Ol extends ke{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${lt()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class hS extends uS{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Ol;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class fS extends ke{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;e.isRenderingInProgress?n(this):t(this);function t(i){e.change(r=>{const s=e.document.getRoot(i.name);r.addClass(i.isFocused?"ck-focused":"ck-blurred",s),r.removeClass(i.isFocused?"ck-blurred":"ck-focused",s)})}function n(i){e.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):t(i)})}}}class gS extends fS{constructor(e,t,n,i={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var _m=b(5523),Rl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Rl.insert="head",Rl.singleton=!0,ne()(_m.Z,Rl),_m.Z.locals;var Am=b(6985),jl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};jl.insert="head",jl.singleton=!0,ne()(Am.Z,jl),Am.Z.locals;class mS extends ke{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new Bt,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=pS(this.element)}_setDomElementValue(e){this.element.value=!e&&e!==0?"":e}}function pS(o){return!o.value}class kS extends mS{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var Cm=b(8111),Fl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Fl.insert="head",Fl.singleton=!0,ne()(Cm.Z,Fl),Cm.Z.locals;class Vl extends ke{constructor(e,t){super(e);const n=`ck-labeled-field-view-${lt()}`,i=`ck-labeled-field-view-status-${lt()}`;this.fieldView=t(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new Ol(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new ke(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function Hl(o,e,t){const n=new kS(o.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(o,"isEnabled",i=>!i),n.bind("hasError").to(o,"errorText",i=>!!i),n.on("input",()=>{o.errorText=null}),o.bind("isEmpty","isFocused","placeholder").to(n),n}class vm extends ks{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class ur extends we(){constructor(e,t){super(),t&&Gf(this,t),e&&this.set(e)}}const bS='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>',wS='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>';var ym=b(1757),Ul={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Ul.insert="head",Ul.singleton=!0,ne()(ym.Z,Ul),ym.Z.locals;var xm=b(3553),Wl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Wl.insert="head",Wl.singleton=!0,ne()(xm.Z,Wl),xm.Z.locals;const Ls=Ec("px");class Os extends V{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,i=t.document.selection.editableElement;return i?t.domConverter.mapViewToDom(i.root):null},this.set("visibleView",null),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=null,this._fakePanelsView=null}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new _("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t)){this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,(!this._visibleStack||e.singleViewMode)&&this.showStack(t);return}const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new _("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new _("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Tt(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(n=>n[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new _S(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new AS(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class _S extends ke{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Bt,this.buttonPrevView=this._createButtonView(t("Previous"),bS),this.buttonNextView=this._createButtonView(t("Next"),wS),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Be(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class AS extends ke{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Ls),left:n.to("left",Ls),width:n.to("width",Ls),height:n.to("height",Ls)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ke;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new He(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Em=b(3609),ql={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};ql.insert="head",ql.singleton=!0,ne()(Em.Z,ql),Em.Z.locals;const hr=Ec("px");class CS extends ke{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Nt({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?hr(this._panelRect.height):null)}}}).render(),this._contentPanel=new Nt({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?hr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?hr(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?hr(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(pe.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:hr(-pe.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var Dm=b(6706),Gl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Gl.insert="head",Gl.singleton=!0,ne()(Dm.Z,Gl),Dm.Z.locals;class vS extends dS{constructor(e,t){super(e),this.view=t,this._toolbarConfig=nf(e.config.get("toolbar")),this._elementReplacer=new ma}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement,r=e.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");r&&lf({view:t,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var Sm=b(3638),$l={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};$l.insert="head",$l.singleton=!0,ne()(Sm.Z,$l),Sm.Z.locals;class yS extends hS{constructor(e,t,n={}){super(e),this.stickyPanel=new CS(e),this.toolbar=new xl(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new gS(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class xS extends zs(vl($D)){constructor(e,t={}){if(!Rs(e)&&t.initialData!==void 0)throw new _("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",ES(e)),Rs(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new yS(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new vS(this,i),KD(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(Rs(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function ES(o){return Rs(o)?qC(o):o}function Rs(o){return Ki(o)}class Tm{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(n,i)=>{i.isLocal&&i.isUndoable&&i!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){(!this.isLocked||e)&&(this._batch=null,this._size=0)}}class DS extends ge{constructor(e,t){super(e),this._buffer=new Tm(e.model,t)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,n=t.document,i=e.text||"",r=i.length;let s=n.selection;e.selection?s=e.selection:e.range&&(s=t.createSelection(e.range));const a=e.resultRange;t.enqueueChange(this._buffer.batch,c=>{this._buffer.lock(),t.deleteContent(s),i&&t.insertContent(c.createText(i,n.selection.getAttributes()),s),a?c.setSelection(a):s.is("documentSelection")||c.setSelection(s),this._buffer.unlock(),this._buffer.input(r)})}}const Im=["insertText","insertReplacementText"];class SS extends pn{constructor(e){super(e),k.isAndroid&&Im.push("insertCompositionText");const t=e.document;t.on("beforeinput",(n,i)=>{if(!this.isEnabled)return;const{data:r,targetRanges:s,inputType:a,domEvent:c}=i;if(!Im.includes(a))return;const l=new Ie(t,"insertText");t.fire(l,new li(e,c,{text:r,selection:e.createSelection(s)})),l.stop.called&&n.stop()}),t.on("compositionend",(n,{data:i,domEvent:r})=>{!this.isEnabled||k.isAndroid||i&&t.fire("insertText",new li(e,r,{text:i,selection:t.selection}))},{priority:"lowest"})}observe(){}}class Mm extends V{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,n=e.editing.view,i=t.document.selection;n.addObserver(SS);const r=new DS(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",r),e.commands.add("input",r),this.listenTo(n.document,"insertText",(s,a)=>{n.document.isComposing||a.preventDefault();const{text:c,selection:l,resultRange:d}=a,u=Array.from(l.getRanges()).map(D=>e.editing.mapper.toModelRange(D));let p=c;if(k.isAndroid){const D=Array.from(u[0].getItems()).reduce((N,j)=>N+(j.is("$textProxy")?j.data:""),"");D&&(D.length<=p.length?p.startsWith(D)&&(p=p.substring(D.length),u[0].start=u[0].start.getShiftedBy(D.length)):D.startsWith(p)&&(u[0].start=u[0].start.getShiftedBy(p.length),p=""))}const A={text:p,selection:t.createSelection(u)};d&&(A.resultRange=e.editing.mapper.toModelRange(d)),e.execute("insertText",A)}),k.isAndroid?this.listenTo(n.document,"keydown",(s,a)=>{i.isCollapsed||a.keyCode!=229||!n.document.isComposing||Bm(t,r)}):this.listenTo(n.document,"compositionstart",()=>{i.isCollapsed||Bm(t,r)})}}function Bm(o,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),o.enqueueChange(t.batch,()=>{o.deleteContent(o.document.selection)}),t.unlock()}class Nm extends ge{constructor(e,t){super(e),this.direction=t,this._buffer=new Tm(e.model,e.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,n=t.document;t.enqueueChange(this._buffer.batch,i=>{this._buffer.lock();const r=i.createSelection(e.selection||n.selection),s=e.sequence||1,a=r.isCollapsed;if(r.isCollapsed&&t.modifySelection(r,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(s)){this._replaceEntireContentWithParagraph(i);return}if(this._shouldReplaceFirstBlockWithParagraph(r,s)){this.editor.execute("paragraph",{selection:r});return}if(r.isCollapsed)return;let c=0;r.getFirstRange().getMinimalFlatRanges().forEach(l=>{c+=Hn(l.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(r,{doNotResetEntireContent:a,direction:this.direction}),this._buffer.input(c),i.setSelection(r),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,i=t.document.selection,r=t.schema.getLimitElement(i);if(!(i.isCollapsed&&i.containsEntireContent(r))||!t.schema.checkChild(r,"paragraph"))return!1;const a=r.getChild(0);return!(a&&a.is("element","paragraph"))}_replaceEntireContentWithParagraph(e){const t=this.editor.model,i=t.document.selection,r=t.schema.getLimitElement(i),s=e.createElement("paragraph");e.remove(e.createRangeIn(r)),e.insert(s,r),e.setSelection(s,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const n=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const i=e.getFirstPosition(),r=n.schema.getLimitElement(i),s=r.getChild(0);return!(i.parent!=s||!e.containsEntireContent(s)||!n.schema.checkChild(r,"paragraph")||s.name=="paragraph")}}const TS="character",Pm="word",IS="codePoint",eo="selection",gi="backward",fr="forward",zm={deleteContent:{unit:eo,direction:gi},deleteContentBackward:{unit:IS,direction:gi},deleteWordBackward:{unit:Pm,direction:gi},deleteHardLineBackward:{unit:eo,direction:gi},deleteSoftLineBackward:{unit:eo,direction:gi},deleteContentForward:{unit:TS,direction:fr},deleteWordForward:{unit:Pm,direction:fr},deleteHardLineForward:{unit:eo,direction:fr},deleteSoftLineForward:{unit:eo,direction:fr}};class MS extends pn{constructor(e){super(e);const t=e.document;let n=0;t.on("keydown",()=>{n++}),t.on("keyup",()=>{n=0}),t.on("beforeinput",(i,r)=>{if(!this.isEnabled)return;const{targetRanges:s,domEvent:a,inputType:c}=r,l=zm[c];if(!l)return;const d={direction:l.direction,unit:l.unit,sequence:n};d.unit==eo&&(d.selectionToRemove=e.createSelection(s[0])),k.isAndroid&&c==="deleteContentBackward"&&(d.sequence=1,s.length==1&&(s[0].start.parent!=s[0].end.parent||s[0].start.offset+1!=s[0].end.offset)&&(d.unit=eo,d.selectionToRemove=e.createSelection(s)));const u=new ai(t,"delete",s[0]);t.fire(u,new li(e,a,d)),u.stop.called&&i.stop()}),k.isBlink&&BS(this)}observe(){}}function BS(o){const e=o.view,t=e.document;let n=null,i=!1;t.on("keydown",(a,{keyCode:c})=>{n=c,i=!1}),t.on("keyup",(a,{keyCode:c,domEvent:l})=>{const d=t.selection,u=o.isEnabled&&c==n&&r(c)&&!d.isCollapsed&&!i;if(n=null,u){const p=d.getFirstRange(),A=new ai(t,"delete",p),D={unit:eo,direction:s(c),selectionToRemove:d};t.fire(A,new li(e,l,D))}}),t.on("beforeinput",(a,{inputType:c})=>{const l=zm[c];r(n)&&l&&l.direction==s(n)&&(i=!0)},{priority:"high"}),t.on("beforeinput",(a,{inputType:c,data:l})=>{n==Ce.delete&&c=="insertText"&&l==""&&a.stop()},{priority:"high"});function r(a){return a==Ce.backspace||a==Ce.delete}function s(a){return a==Ce.backspace?gi:fr}}class to extends V{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,n=t.document,i=e.model.document;t.addObserver(MS),this._undoOnBackspace=!1;const r=new Nm(e,"forward");e.commands.add("deleteForward",r),e.commands.add("forwardDelete",r),e.commands.add("delete",new Nm(e,"backward")),this.listenTo(n,"delete",(s,a)=>{n.isComposing||a.preventDefault();const{direction:c,sequence:l,selectionToRemove:d,unit:u}=a,p=c==="forward"?"deleteForward":"delete",A={sequence:l};if(u=="selection"){const D=Array.from(d.getRanges()).map(N=>e.editing.mapper.toModelRange(N));A.selection=e.model.createSelection(D)}else A.unit=u;e.execute(p,A),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(s,a)=>{this._undoOnBackspace&&a.direction=="backward"&&a.sequence==1&&a.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),a.preventDefault(),s.stop())},{context:"$capture"}),this.listenTo(i,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class NS extends V{static get requires(){return[Mm,to]}static get pluginName(){return"Typing"}}function Lm(o,e){let t=o.start;return{text:Array.from(o.getItems()).reduce((i,r)=>r.is("$text")||r.is("$textProxy")?i+r.data:(t=e.createPositionAfter(r),""),""),range:e.createRange(t,o.end)}}class Om extends we(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const t=this.model.document;this.listenTo(t.selection,"change:range",(n,{directChange:i})=>{if(i){if(!t.selection.isCollapsed){this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1);return}this._evaluateTextBeforeSelection("selection")}}),this.listenTo(t,"change:data",(n,i)=>{i.isUndo||!i.isLocal||this._evaluateTextBeforeSelection("data",{batch:i})})}_evaluateTextBeforeSelection(e,t={}){const n=this.model,r=n.document.selection,s=n.createRange(n.createPositionAt(r.focus.parent,0),r.focus),{text:a,range:c}=Lm(s,n),l=this.testCallback(a);if(!l&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!l,l){const d=Object.assign(t,{text:a,range:c});typeof l=="object"&&Object.assign(d,l),this.fire(`matched:${e}`,d)}}}class js extends V{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,n=e.editing.view,i=e.locale,r=t.document.selection;this.listenTo(n.document,"arrowKey",(s,a)=>{if(!r.isCollapsed||a.shiftKey||a.altKey||a.ctrlKey)return;const c=a.keyCode==Ce.arrowright,l=a.keyCode==Ce.arrowleft;if(!c&&!l)return;const d=i.contentLanguageDirection;let u=!1;d==="ltr"&&c||d==="rtl"&&l?u=this._handleForwardMovement(a):u=this._handleBackwardMovement(a),u===!0&&s.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(r,"change:range",(s,a)=>{if(this._isNextGravityRestorationSkipped){this._isNextGravityRestorationSkipped=!1;return}this._isGravityOverridden&&(!a.directChange&&Vs(r.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,i=this.editor.model.document.selection,r=i.getFirstPosition();return this._isGravityOverridden||r.isAtStart&&Kl(i,t)?!1:Vs(r,t)?(Fs(e),this._overrideGravity(),!0):!1}_handleBackwardMovement(e){const t=this.attributes,n=this.editor.model,i=n.document.selection,r=i.getFirstPosition();return this._isGravityOverridden?(Fs(e),this._restoreGravity(),Yl(n,t,r),!0):r.isAtStart?Kl(i,t)?(Fs(e),Yl(n,t,r),!0):!1:PS(r,t)?r.isAtEnd&&!Kl(i,t)&&Vs(r,t)?(Fs(e),Yl(n,t,r),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):!1}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Kl(o,e){for(const t of e)if(o.hasAttribute(t))return!0;return!1}function Yl(o,e,t){const n=t.nodeBefore;o.change(i=>{n?i.setSelectionAttribute(n.getAttributes()):i.removeSelectionAttribute(e)})}function Fs(o){o.preventDefault()}function PS(o,e){const t=o.getShiftedBy(-1);return Vs(t,e)}function Vs(o,e){const{nodeBefore:t,nodeAfter:n}=o;for(const i of e){const r=t?t.getAttribute(i):void 0;if((n?n.getAttribute(i):void 0)!==r)return!0}return!1}var Rm=/[\\^$.*+?()[\]{}|]/g,zS=RegExp(Rm.source);function LS(o){return o=Gc(o),o&&zS.test(o)?o.replace(Rm,"\\$&"):o}const OS=LS,jm={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:mi('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:mi("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:mi("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:mi('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:mi('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:mi("'"),to:[null,"‚",null,"’"]}},Fm={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},RS=["symbols","mathematical","typography","quotes"];class jS extends V{static get requires(){return["Delete","Input"]}static get pluginName(){return"TextTransformation"}constructor(e){super(e),e.config.define("typing",{transformations:{include:RS}})}init(){const t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const e=this.editor,t=e.model,n=e.plugins.get("Delete"),i=US(e.config.get("typing.transformations")),r=a=>{for(const c of i)if(c.from.test(a))return{normalizedTransformation:c}},s=new Om(e.model,r);s.on("matched:data",(a,c)=>{if(!c.batch.isTyping)return;const{from:l,to:d}=c.normalizedTransformation,u=l.exec(c.text),p=d(u.slice(1)),A=c.range;let D=u.index;t.enqueueChange(N=>{for(let j=1;j<u.length;j++){const q=u[j],G=p[j-1];if(G==null){D+=q.length;continue}const ve=A.start.getShiftedBy(D),$e=t.createRange(ve,ve.getShiftedBy(q.length)),st=HS(ve);t.insertContent(N.createText(G,st),$e),D+=G.length}t.enqueueChange(()=>{n.requestUndoOnBackspace()})})}),s.bind("isEnabled").to(this)}}function FS(o){return typeof o=="string"?new RegExp(`(${OS(o)})$`):o}function VS(o){return typeof o=="string"?()=>[o]:o instanceof Array?()=>o:o}function HS(o){return(o.textNode?o.textNode:o.nodeAfter).getAttributes()}function mi(o){return new RegExp(`(^|\\s)(${o})([^${o}]*)(${o})$`)}function US(o){const e=o.extra||[],t=o.remove||[],n=r=>!t.includes(r),i=o.include.concat(e).filter(n);return WS(i).filter(n).map(r=>typeof r=="string"&&jm[r]?jm[r]:r).filter(r=>typeof r=="object").map(r=>({from:FS(r.from),to:VS(r.to)}))}function WS(o){const e=new Set;for(const t of o)if(typeof t=="string"&&Fm[t])for(const n of Fm[t])e.add(n);else e.add(t);return Array.from(e)}function pi(o,e,t,n){return n.createRange(Vm(o,e,t,!0,n),Vm(o,e,t,!1,n))}function Vm(o,e,t,n,i){let r=o.textNode||(n?o.nodeBefore:o.nodeAfter),s=null;for(;r&&r.getAttribute(e)==t;)s=r,r=n?r.previousSibling:r.nextSibling;return s?i.createPositionAt(s,n?"before":"after"):o}function Hm(o,e,t,n){const i=o.editing.view,r=new Set;i.document.registerPostFixer(s=>{const a=o.model.document.selection;let c=!1;if(a.hasAttribute(e)){const l=pi(a.getFirstPosition(),e,a.getAttribute(e),o.model),d=o.editing.mapper.toViewRange(l);for(const u of d.getItems())u.is("element",t)&&!u.hasClass(n)&&(s.addClass(n,u),r.add(u),c=!0)}return c}),o.conversion.for("editingDowncast").add(s=>{s.on("insert",a,{priority:"highest"}),s.on("remove",a,{priority:"highest"}),s.on("attribute",a,{priority:"highest"}),s.on("selection",a,{priority:"highest"});function a(){i.change(c=>{for(const l of r.values())c.removeClass(n,l),r.delete(l)})}})}function no(o,e,t,n){let i,r=null;typeof n=="function"?i=n:(r=o.commands.get(n),i=()=>{o.execute(n)}),o.model.document.on("change:data",(s,a)=>{if(r&&!r.isEnabled||!e.isEnabled)return;const c=et(o.model.document.selection.getRanges());if(!c.isCollapsed||a.isUndo||!a.isLocal)return;const l=Array.from(o.model.document.differ.getChanges()),d=l[0];if(l.length!=1||d.type!=="insert"||d.name!="$text"||d.length!=1)return;const u=d.position.parent;if(u.is("element","codeBlock")||u.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||r&&r.value===!0)return;const p=u.getChild(0),A=o.model.createRangeOn(p);if(!A.containsRange(c)&&!c.end.isEqual(A.end))return;const D=t.exec(p.data.substr(0,c.end.offset));D&&o.model.enqueueChange(N=>{const j=N.createPositionAt(u,0),q=N.createPositionAt(u,D[0].length),G=new rn(j,q);if(i({match:D})!==!1){N.remove(G);const $e=o.model.document.selection.getFirstRange(),st=N.createRangeIn(u);u.isEmpty&&!st.isEqual($e)&&!st.containsRange($e,!0)&&N.remove(u)}G.detach(),o.model.enqueueChange(()=>{o.plugins.get("Delete").requestUndoOnBackspace()})})})}function ki(o,e,t,n){let i,r;t instanceof RegExp?i=t:r=t,r=r||(s=>{let a;const c=[],l=[];for(;(a=i.exec(s))!==null&&!(a&&a.length<4);){let{index:d,1:u,2:p,3:A}=a;const D=u+p+A;d+=a[0].length-D.length;const N=[d,d+u.length],j=[d+u.length+p.length,d+u.length+p.length+A.length];c.push(N),c.push(j),l.push([d+u.length,d+u.length+p.length])}return{remove:c,format:l}}),o.model.document.on("change:data",(s,a)=>{if(a.isUndo||!a.isLocal||!e.isEnabled)return;const c=o.model,l=c.document.selection;if(!l.isCollapsed)return;const d=Array.from(c.document.differ.getChanges()),u=d[0];if(d.length!=1||u.type!=="insert"||u.name!="$text"||u.length!=1)return;const p=l.focus,A=p.parent,{text:D,range:N}=qS(c.createRange(c.createPositionAt(A,0),p),c),j=r(D),q=Um(N.start,j.format,c),G=Um(N.start,j.remove,c);q.length&&G.length&&c.enqueueChange(ve=>{if(n(ve,q)!==!1){for(const st of G.reverse())ve.remove(st);c.enqueueChange(()=>{o.plugins.get("Delete").requestUndoOnBackspace()})}})})}function Um(o,e,t){return e.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>t.createRange(o.getShiftedBy(n[0]),o.getShiftedBy(n[1])))}function qS(o,e){let t=o.start;return{text:Array.from(o.getItems()).reduce((i,r)=>!(r.is("$text")||r.is("$textProxy"))||r.getAttribute("code")?(t=e.createPositionAfter(r),""):i+r.data,""),range:e.createRange(t,o.end)}}class GS extends V{static get requires(){return[to]}static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){const e=this.editor.commands;e.get("bulletedList")&&no(this.editor,this,/^[*-]\s$/,"bulletedList"),e.get("numberedList")&&no(this.editor,this,/^1[.|)]\s$/,"numberedList"),e.get("todoList")&&no(this.editor,this,/^\[\s?\]\s$/,"todoList"),e.get("checkTodoList")&&no(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){const e=this.editor.commands;if(e.get("bold")){const t=Hs(this.editor,"bold");ki(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,t),ki(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,t)}if(e.get("italic")){const t=Hs(this.editor,"italic");ki(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,t),ki(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,t)}if(e.get("code")){const t=Hs(this.editor,"code");ki(this.editor,this,/(`)([^`]+)(`)$/g,t)}if(e.get("strikethrough")){const t=Hs(this.editor,"strikethrough");ki(this.editor,this,/(~~)([^~]+)(~~)$/g,t)}}_addHeadingAutoformats(){const e=this.editor.commands.get("heading");e&&e.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{const n=t[7],i=new RegExp(`^(#{${n}})\\s$`);no(this.editor,this,i,()=>{if(!e.isEnabled||e.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&no(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){const e=this.editor,t=e.model.document.selection;e.commands.get("codeBlock")&&no(e,this,/^```$/,()=>{if(t.getFirstPosition().parent.is("element","listItem"))return!1;this.editor.execute("codeBlock",{usePreviousLanguageChoice:!0})})}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&no(this.editor,this,/^---$/,"horizontalLine")}}function Hs(o,e){return(t,n)=>{if(!o.commands.get(e).isEnabled)return!1;const r=o.model.schema.getValidRanges(n,e);for(const s of r)t.setAttribute(e,!0,s);t.removeSelectionAttribute(e)}}function*Wm(o,e){for(const t of e)t&&o.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class $S extends ge{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,n=t.document.selection,i=t.schema,r=n.isCollapsed,s=n.getFirstRange(),a=s.start.parent,c=s.end.parent;if(i.isLimit(a)||i.isLimit(c))return!r&&a==c&&t.deleteContent(n),!1;if(r){const l=Wm(e.model.schema,n.getAttributes());return qm(e,s.start),e.setSelectionAttribute(l),!0}else{const l=!(s.start.isAtStart&&s.end.isAtEnd),d=a==c;if(t.deleteContent(n,{leaveUnmerged:l}),l){if(d)return qm(e,n.focus),!0;e.setSelection(c,0)}}return!1}}function qm(o,e){o.split(e),o.setSelection(e.parent.nextSibling,0)}const KS={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class Gm extends pn{constructor(e){super(e);const t=this.document;t.on("beforeinput",(n,i)=>{if(!this.isEnabled)return;const r=i.domEvent,s=KS[i.inputType];if(!s)return;const a=new ai(t,"enter",i.targetRanges[0]);t.fire(a,new li(e,r,{isSoft:s.isSoft})),a.stop.called&&n.stop()})}observe(){}}class Us extends V{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,n=t.document;t.addObserver(Gm),e.commands.add("enter",new $S(e)),this.listenTo(n,"enter",(i,r)=>{n.isComposing||r.preventDefault(),!r.isSoft&&(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class YS extends ge{execute(){const e=this.editor.model,t=e.document;e.change(n=>{ZS(e,n,t.selection),this.fire("afterExecute",{writer:n})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=QS(e.schema,t.selection)}}function QS(o,e){if(e.rangeCount>1)return!1;const t=e.anchor;if(!t||!o.checkChild(t,"softBreak"))return!1;const n=e.getFirstRange(),i=n.start.parent,r=n.end.parent;return!((Ql(i,o)||Ql(r,o))&&i!==r)}function ZS(o,e,t){const n=t.isCollapsed,i=t.getFirstRange(),r=i.start.parent,s=i.end.parent,a=r==s;if(n){const c=Wm(o.schema,t.getAttributes());$m(o,e,i.end),e.removeSelectionAttribute(t.getAttributeKeys()),e.setSelectionAttribute(c)}else{const c=!(i.start.isAtStart&&i.end.isAtEnd);o.deleteContent(t,{leaveUnmerged:c}),a?$m(o,e,t.focus):c&&e.setSelection(s,0)}}function $m(o,e,t){const n=e.createElement("softBreak");o.insertContent(n,t),e.setSelection(n,"after")}function Ql(o,e){return o.is("rootElement")?!1:e.isLimit(o)||Ql(o.parent,e)}class Km extends V{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,n=e.conversion,i=e.editing.view,r=i.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(s,{writer:a})=>a.createEmptyElement("br")}),i.addObserver(Gm),e.commands.add("shiftEnter",new YS(e)),this.listenTo(r,"enter",(s,a)=>{r.isComposing||a.preventDefault(),a.isSoft&&(e.execute("shiftEnter"),i.scrollToTheSelection())},{priority:"low"})}}class JS extends ge{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,n=t.schema,i=t.document.selection,r=Array.from(i.getSelectedBlocks()),s=e.forceValue===void 0?!this.value:e.forceValue;t.change(a=>{if(!s)this._removeQuote(a,r.filter(Ws));else{const c=r.filter(l=>Ws(l)||Qm(n,l));this._applyQuote(a,c)}})}_getValue(){const e=this.editor.model.document.selection,t=et(e.getSelectedBlocks());return!!(t&&Ws(t))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=et(e.getSelectedBlocks());return n?Qm(t,n):!1}_removeQuote(e,t){Ym(e,t).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd){e.unwrap(n.start.parent);return}if(n.start.isAtStart){const r=e.createPositionBefore(n.start.parent);e.move(n,r);return}n.end.isAtEnd||e.split(n.end);const i=e.createPositionAfter(n.end.parent);e.move(n,i)})}_applyQuote(e,t){const n=[];Ym(e,t).reverse().forEach(i=>{let r=Ws(i.start);r||(r=e.createElement("blockQuote"),e.wrap(i,r)),n.push(r)}),n.reverse().reduce((i,r)=>i.nextSibling==r?(e.merge(e.createPositionAfter(i)),i):r)}}function Ws(o){return o.parent.name=="blockQuote"?o.parent:null}function Ym(o,e){let t,n=0;const i=[];for(;n<e.length;){const r=e[n],s=e[n+1];t||(t=o.createPositionBefore(r)),(!s||r.nextSibling!=s)&&(i.push(o.createRange(t,o.createPositionAfter(r))),t=null),n++}return i}function Qm(o,e){const t=o.checkChild(e.parent,"blockQuote"),n=o.checkChild(["$root","blockQuote"],e);return t&&n}class XS extends V{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Us,to]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new JS(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(s=>{const a=e.model.document.differ.getChanges();for(const c of a)if(c.type=="insert"){const l=c.position.nodeAfter;if(!l)continue;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0;if(l.is("element","blockQuote")&&!t.checkChild(c.position,l))return s.unwrap(l),!0;if(l.is("element")){const d=s.createRangeIn(l);for(const u of d.getItems())if(u.is("element","blockQuote")&&!t.checkChild(s.createPositionBefore(u),u))return s.unwrap(u),!0}}else if(c.type=="remove"){const l=c.position.parent;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0}return!1});const n=this.editor.editing.view.document,i=e.model.document.selection,r=e.commands.get("blockQuote");this.listenTo(n,"enter",(s,a)=>{if(!i.isCollapsed||!r.value)return;i.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(s,a)=>{if(a.direction!="backward"||!i.isCollapsed||!r.value)return;const c=i.getLastPosition().parent;c.isEmpty&&!c.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"})}}var Zm=b(636),Zl={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Zl.insert="head",Zl.singleton=!0,ne()(Zm.Z,Zl),Zm.Z.locals;class eT extends V{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",n=>{const i=e.commands.get("blockQuote"),r=new Be(n);return r.set({label:t("Block quote"),icon:Ge.quote,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),r})}}class tT extends V{static get requires(){return[XS,eT]}static get pluginName(){return"BlockQuote"}}class Jl extends ge{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,i=t.document.selection,r=e.forceValue===void 0?!this.value:e.forceValue;t.change(s=>{if(i.isCollapsed)r?s.setSelectionAttribute(this.attributeKey,!0):s.removeSelectionAttribute(this.attributeKey);else{const a=t.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const c of a)r?s.setAttribute(this.attributeKey,r,c):s.removeAttribute(this.attributeKey,c)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const i of n.getRanges())for(const r of i.getItems())if(t.checkAttribute(r,this.attributeKey))return r.hasAttribute(this.attributeKey);return!1}}const bi="bold";class nT extends V{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:bi}),e.model.schema.setAttributeProperties(bi,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:bi,view:"strong",upcastAlso:["b",t=>{const n=t.getStyle("font-weight");return n&&(n=="bold"||Number(n)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(bi,new Jl(e,bi)),e.keystrokes.set("CTRL+B",bi)}}const Xl="bold";class oT extends V{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Xl,n=>{const i=e.commands.get(Xl),r=new Be(n);return r.set({label:t("Bold"),icon:Ge.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(Xl),e.editing.view.focus()}),r})}}class iT extends V{static get requires(){return[nT,oT]}static get pluginName(){return"Bold"}}const rT='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>';class sT extends V{static get pluginName(){return"CKBoxUI"}afterInit(){const e=this.editor;if(!e.commands.get("ckbox"))return;const t=e.t;e.ui.componentFactory.add("ckbox",i=>{const r=e.commands.get("ckbox"),s=new Be(i);return s.set({label:t("Open file manager"),icon:rT,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{e.execute("ckbox")}),s})}}const aT=4e3,cT=80,lT=10;function Jm({token:o,id:e,origin:t,width:n,extension:i}){const r=Xm(o),s=dT(n),a=uT(i),c=ep({environmentId:r,id:e,origin:t,width:n,extension:a}),d=[{srcset:s.map(u=>`${ep({environmentId:r,id:e,origin:t,width:u,extension:"webp"})} ${u}w`).join(","),sizes:`(max-width: ${n}px) 100vw, ${n}px`,type:"image/webp"}];return{imageFallbackUrl:c,imageSources:d}}function Xm(o){const[,e]=o.value.split(".");return JSON.parse(atob(e)).aud}function dT(o){const e=[o*lT/100,cT],t=Math.floor(Math.max(...e)),n=[Math.min(o,aT)];let i=n[0];for(;i-t>=t;)i-=t,n.unshift(i);return n}function uT(o){return o==="bmp"||o==="tiff"||o==="jpg"?"jpeg":o}function ep({environmentId:o,id:e,origin:t,width:n,extension:i}){const r=`${o}/assets/${e}/images/${n}.${i}`;return new URL(r,t).toString()}const hT=1e3;class fT extends ge{constructor(e){super(e),this._chosenAssets=new Set,this._wrapper=null,this._initListeners()}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){this.fire("ckbox:open")}_getValue(){return this._wrapper!==null}_checkEnabled(){const e=this.editor.commands.get("insertImage"),t=this.editor.commands.get("link");return!(!e.isEnabled&&!t.isEnabled)}_prepareOptions(){const t=this.editor.config.get("ckbox");return{theme:t.theme,language:t.language,tokenUrl:t.tokenUrl,serviceOrigin:t.serviceOrigin,assetsOrigin:t.assetsOrigin,dialog:{onClose:()=>this.fire("ckbox:close")},assets:{onChoose:n=>this.fire("ckbox:choose",n)}}}_initListeners(){const e=this.editor,t=e.model,n=!e.config.get("ckbox.ignoreDataId");this.on("ckbox",()=>{this.refresh()},{priority:"low"}),this.on("ckbox:open",()=>{!this.isEnabled||this.value||(this._wrapper=Ir(document,"div",{class:"ck ckbox-wrapper"}),document.body.appendChild(this._wrapper),window.CKBox.mount(this._wrapper,this._prepareOptions()))}),this.on("ckbox:close",()=>{this.value&&(this._wrapper.remove(),this._wrapper=null)}),this.on("ckbox:choose",(i,r)=>{if(!this.isEnabled)return;const s=e.commands.get("insertImage"),a=e.commands.get("link"),c=e.plugins.get("CKBoxEditing"),l=e.config.get("ckbox.assetsOrigin"),d=gT({assets:r,origin:l,token:c.getToken(),isImageAllowed:s.isEnabled,isLinkAllowed:a.isEnabled});d.length!==0&&t.change(u=>{for(const p of d){const A=p===d[d.length-1];this._insertAsset(p,A,u),n&&(setTimeout(()=>this._chosenAssets.delete(p),hT),this._chosenAssets.add(p))}})}),this.listenTo(e,"destroy",()=>{this.fire("ckbox:close"),this._chosenAssets.clear()})}_insertAsset(e,t,n){const s=this.editor.model.document.selection;n.removeSelectionAttribute("linkHref"),e.type==="image"?this._insertImage(e):this._insertLink(e,n),t||n.setSelection(s.getLastPosition())}_insertImage(e){const t=this.editor,{imageFallbackUrl:n,imageSources:i,imageTextAlternative:r}=e.attributes;t.execute("insertImage",{source:{src:n,sources:i,alt:r}})}_insertLink(e,t){const n=this.editor,i=n.model,r=i.document.selection,{linkName:s,linkHref:a}=e.attributes;if(r.isCollapsed){const c=un(r.getAttributes()),l=t.createText(s,c),d=i.insertContent(l);t.setSelection(d)}n.execute("link",a)}}function gT({assets:o,origin:e,token:t,isImageAllowed:n,isLinkAllowed:i}){return o.map(r=>({id:r.data.id,type:tp(r)?"image":"link",attributes:mT(r,t,e)})).filter(r=>r.type==="image"?n:i)}function mT(o,e,t){if(tp(o)){const{imageFallbackUrl:n,imageSources:i}=Jm({token:e,origin:t,id:o.data.id,width:o.data.metadata.width,extension:o.data.extension});return{imageFallbackUrl:n,imageSources:i,imageTextAlternative:o.data.metadata.description||""}}return{linkName:o.data.name,linkHref:pT(o,e,t)}}function tp(o){const e=o.data.metadata;return e?e.width&&e.height:!1}function pT(o,e,t){const n=Xm(e),i=new URL(`${n}/assets/${o.data.id}/file`,t);return i.searchParams.set("download","true"),i.toString()}class kT extends we(){constructor(){super();const e=new window.FileReader;this._reader=e,this._data=void 0,this.set("loaded",0),e.onprogress=t=>{this.loaded=t.loaded}}get error(){return this._reader.error}get data(){return this._data}read(e){const t=this._reader;return this.total=e.size,new Promise((n,i)=>{t.onload=()=>{const r=t.result;this._data=r,n(r)},t.onerror=()=>{i("error")},t.onabort=()=>{i("aborted")},this._reader.readAsDataURL(e)})}abort(){this._reader.abort()}}class Po extends V{static get pluginName(){return"FileRepository"}static get requires(){return[nm]}init(){this.loaders=new St,this.loaders.on("change",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(e,t)=>t?e/t*100:0)}getLoader(e){return this._loadersMap.get(e)||null}createLoader(e){if(!this.createUploadAdapter)return Ue("filerepository-no-upload-adapter"),null;const t=new np(Promise.resolve(e),this.createUploadAdapter);return this.loaders.add(t),this._loadersMap.set(e,t),e instanceof Promise&&t.file.then(n=>{this._loadersMap.set(n,t)}).catch(()=>{}),t.on("change:uploaded",()=>{let n=0;for(const i of this.loaders)n+=i.uploaded;this.uploaded=n}),t.on("change:uploadTotal",()=>{let n=0;for(const i of this.loaders)i.uploadTotal&&(n+=i.uploadTotal);this.uploadTotal=n}),t}destroyLoader(e){const t=e instanceof np?e:this.getLoader(e);t._destroy(),this.loaders.remove(t),this._loadersMap.forEach((n,i)=>{n===t&&this._loadersMap.delete(i)})}_updatePendingAction(){const e=this.editor.plugins.get(nm);if(this.loaders.length){if(!this._pendingAction){const t=this.editor.t,n=i=>`${t("Upload in progress")} ${parseInt(i)}%.`;this._pendingAction=e.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else e.remove(this._pendingAction),this._pendingAction=null}}class np extends we(){constructor(e,t){super(),this.id=lt(),this._filePromiseWrapper=this._createFilePromiseWrapper(e),this._adapter=t(this),this._reader=new kT,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(n,i)=>i?n/i*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(e=>this._filePromiseWrapper?e:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if(this.status!="idle")throw new _("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(e=>this._reader.read(e)).then(e=>{if(this.status!=="reading")throw this.status;return this.status="idle",e}).catch(e=>{throw e==="aborted"?(this.status="aborted","aborted"):(this.status="error",this._reader.error?this._reader.error:e)})}upload(){if(this.status!="idle")throw new _("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(e=>(this.uploadResponse=e,this.status="idle",e)).catch(e=>{throw this.status==="aborted"?"aborted":(this.status="error",e)})}abort(){const e=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?e=="reading"?this._reader.abort():e=="uploading"&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(e){const t={};return t.promise=new Promise((n,i)=>{t.rejecter=i,t.isFulfilled=!1,e.then(r=>{t.isFulfilled=!0,n(r)}).catch(r=>{t.isFulfilled=!0,i(r)})}),t}}class bT extends ke{constructor(e){super(e),this.buttonView=new Be(e),this._fileInputView=new wT(e),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class wT extends ke{constructor(e){super(e),this.set("acceptedType",void 0),this.set("allowMultipleFiles",!1);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:t.to("acceptedType"),multiple:t.to("allowMultipleFiles")},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}class _T extends V{static get requires(){return["ImageUploadEditing","ImageUploadProgress",Po,ed]}static get pluginName(){return"CKBoxUploadAdapter"}async afterInit(){const e=this.editor,t=!!e.config.get("ckbox"),n=!!window.CKBox;if(!t&&!n)return;const i=e.plugins.get(Po),r=e.plugins.get(ed);i.createUploadAdapter=c=>new AT(c,r.getToken(),e);const s=!e.config.get("ckbox.ignoreDataId"),a=e.plugins.get("ImageUploadEditing");s&&a.on("uploadComplete",(c,{imageElement:l,data:d})=>{e.model.change(u=>{u.setAttribute("ckboxImageId",d.ckboxImageId,l)})})}}class AT{constructor(e,t,n){this.loader=e,this.token=t,this.editor=n,this.controller=new AbortController,this.serviceOrigin=n.config.get("ckbox.serviceOrigin"),this.assetsOrigin=n.config.get("ckbox.assetsOrigin")}async getAvailableCategories(e=0){const n=new URL("categories",this.serviceOrigin);return n.searchParams.set("limit",50 .toString()),n.searchParams.set("offset",e.toString()),this._sendHttpRequest({url:n}).then(async i=>{if(i.totalCount-(e+50)>0){const s=await this.getAvailableCategories(e+50);return[...i.items,...s]}return i.items}).catch(()=>{this.controller.signal.throwIfAborted(),Uo("ckbox-fetch-category-http-error")})}async getCategoryIdForFile(e){const t=op(e.name),n=await this.getAvailableCategories();if(!n)return null;const i=this.editor.config.get("ckbox.defaultUploadCategories");if(i){const s=Object.keys(i).find(a=>i[a].includes(t));if(s){const a=n.find(c=>c.id===s||c.name===s);return a?a.id:null}}const r=n.find(s=>s.extensions.includes(t));return r?r.id:null}async upload(){const e=this.editor.t,t=e("Cannot determine a category for the uploaded file."),n=await this.loader.file,i=await this.getCategoryIdForFile(n);if(!i)return Promise.reject(t);const r=new URL("assets",this.serviceOrigin),s=new FormData;s.append("categoryId",i),s.append("file",n);const a={method:"POST",url:r,data:s,onUploadProgress:c=>{c.lengthComputable&&(this.loader.uploadTotal=c.total,this.loader.uploaded=c.loaded)}};return this._sendHttpRequest(a).then(async c=>{const l=await this._getImageWidth(),d=op(n.name),u=Jm({token:this.token,id:c.id,origin:this.assetsOrigin,width:l,extension:d});return{ckboxImageId:c.id,default:u.imageFallbackUrl,sources:u.imageSources}}).catch(()=>{const c=e("Cannot upload file:")+` ${n.name}.`;return Promise.reject(c)})}abort(){this.controller.abort()}_sendHttpRequest(e){const{url:t,data:n,onUploadProgress:i}=e,r=e.method||"GET",s=this.controller.signal,a=new XMLHttpRequest;a.open(r,t.toString(),!0),a.setRequestHeader("Authorization",this.token.value),a.setRequestHeader("CKBox-Version","CKEditor 5"),a.responseType="json";const c=()=>{a.abort()};return new Promise((l,d)=>{s.addEventListener("abort",c),a.addEventListener("loadstart",()=>{s.addEventListener("abort",c)}),a.addEventListener("loadend",()=>{s.removeEventListener("abort",c)}),a.addEventListener("error",()=>{d()}),a.addEventListener("abort",()=>{d()}),a.addEventListener("load",async()=>{const u=a.response;return!u||u.statusCode>=400?d(u&&u.message):l(u)}),i&&a.upload.addEventListener("progress",u=>{i(u)}),a.send(n)})}_getImageWidth(){return new Promise(e=>{const t=new Image;t.onload=()=>{URL.revokeObjectURL(t.src),e(t.width)},t.src=this.loader.data})}}function op(o){const e=/\.(?<ext>[^.]+)$/;return o.match(e).groups.ext}class ed extends V{static get pluginName(){return"CKBoxEditing"}static get requires(){return["CloudServices","LinkEditing","PictureEditing",_T]}async init(){const e=this.editor,t=!!e.config.get("ckbox"),n=!!window.CKBox;if(!t&&!n)return;this._initConfig();const i=e.plugins.get("CloudServicesCore"),r=e.config.get("ckbox.tokenUrl"),s=e.config.get("cloudServices.tokenUrl");r===s?this._token=e.plugins.get("CloudServices").token:this._token=await i.createToken(r).init(),e.config.get("ckbox.ignoreDataId")||(this._initSchema(),this._initConversion(),this._initFixers()),n&&e.commands.add("ckbox",new fT(e))}getToken(){return this._token}_initConfig(){const e=this.editor;if(e.config.define("ckbox",{serviceOrigin:"https://api.ckbox.io",assetsOrigin:"https://ckbox.cloud",defaultUploadCategories:null,ignoreDataId:!1,language:e.locale.uiLanguage,theme:"default",tokenUrl:e.config.get("cloudServices.tokenUrl")}),!e.config.get("ckbox.tokenUrl"))throw new _("ckbox-plugin-missing-token-url",this);!e.plugins.has("ImageBlockEditing")&&!e.plugins.has("ImageInlineEditing")&&Uo("ckbox-plugin-image-feature-missing",e)}_initSchema(){const t=this.editor.model.schema;t.extend("$text",{allowAttributes:"ckboxLinkId"}),t.isRegistered("imageBlock")&&t.extend("imageBlock",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),t.isRegistered("imageInline")&&t.extend("imageInline",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),t.addAttributeCheck((n,i)=>{if(!!!n.last.getAttribute("linkHref")&&i==="ckboxLinkId")return!1})}_initConversion(){const e=this.editor;e.conversion.for("downcast").add(t=>{t.on("attribute:ckboxLinkId:imageBlock",(n,i,r)=>{const{writer:s,mapper:a,consumable:c}=r;if(!c.consume(i.item,n.name))return;const d=[...a.toViewElement(i.item).getChildren()].find(u=>u.name==="a");d&&(i.item.hasAttribute("ckboxLinkId")?s.setAttribute("data-ckbox-resource-id",i.item.getAttribute("ckboxLinkId"),d):s.removeAttribute("data-ckbox-resource-id",d))},{priority:"low"}),t.on("attribute:ckboxLinkId",(n,i,r)=>{const{writer:s,mapper:a,consumable:c}=r;if(c.consume(i.item,n.name)){if(i.attributeOldValue){const l=ip(s,i.attributeOldValue);s.unwrap(a.toViewRange(i.range),l)}if(i.attributeNewValue){const l=ip(s,i.attributeNewValue);if(i.item.is("selection")){const d=s.document.selection;s.wrap(d.getFirstRange(),l)}else s.wrap(a.toViewRange(i.range),l)}}},{priority:"low"})}),e.conversion.for("upcast").add(t=>{t.on("element:a",(n,i,r)=>{const{writer:s,consumable:a}=r;if(!i.viewItem.getAttribute("href"))return;const c={attributes:["data-ckbox-resource-id"]};if(!a.consume(i.viewItem,c))return;const l=i.viewItem.getAttribute("data-ckbox-resource-id");if(l)if(i.modelRange)for(let d of i.modelRange.getItems())d.is("$textProxy")&&(d=d.textNode),xT(d)&&s.setAttribute("ckboxLinkId",l,d);else{const d=i.modelCursor.nodeBefore||i.modelCursor.parent;s.setAttribute("ckboxLinkId",l,d)}},{priority:"low"})}),e.conversion.for("downcast").attributeToAttribute({model:"ckboxImageId",view:"data-ckbox-resource-id"}),e.conversion.for("upcast").elementToAttribute({model:{key:"ckboxImageId",value:t=>t.getAttribute("data-ckbox-resource-id")},view:{attributes:{"data-ckbox-resource-id":/[\s\S]+/}}})}_initFixers(){const e=this.editor,t=e.model,n=t.document.selection;t.document.registerPostFixer(CT(e)),t.document.registerPostFixer(vT(n))}}function CT(o){return e=>{let t=!1;const n=o.model,i=o.commands.get("ckbox");if(!i)return t;for(const r of n.document.differ.getChanges()){if(r.type!=="insert"&&r.type!=="attribute")continue;const s=r.type==="insert"?new z(r.position,r.position.getShiftedBy(r.length)):r.range,a=r.type==="attribute"&&r.attributeKey==="linkHref"&&r.attributeNewValue===null;for(const c of s.getItems()){if(a&&c.hasAttribute("ckboxLinkId")){e.removeAttribute("ckboxLinkId",c),t=!0;continue}const l=yT(c,i._chosenAssets);for(const d of l){const u=d.type==="image"?"ckboxImageId":"ckboxLinkId";d.id!==c.getAttribute(u)&&(e.setAttribute(u,d.id,c),t=!0)}}}return t}}function vT(o){return e=>{!o.hasAttribute("linkHref")&&o.hasAttribute("ckboxLinkId")&&e.removeSelectionAttribute("ckboxLinkId")}}function yT(o,e){const t=o.is("element","imageInline")||o.is("element","imageBlock"),n=o.hasAttribute("linkHref");return[...e].filter(i=>{if(i.type==="image"&&t)return i.attributes.imageFallbackUrl===o.getAttribute("src");if(i.type==="link"&&n)return i.attributes.linkHref===o.getAttribute("linkHref")})}function ip(o,e){const t=o.createAttributeElement("a",{"data-ckbox-resource-id":e},{priority:5});return o.setCustomProperty("link",!0,t),t}function xT(o){return!!(o.is("$text")||o.is("element","imageInline")||o.is("element","imageBlock"))}class ET extends V{static get pluginName(){return"CKBox"}static get requires(){return[ed,sT]}}const td={autoRefresh:!0},rp=36e5;class qs{constructor(e,t=td){if(!e)throw new _("token-missing-token-url",this);t.initValue&&this._validateTokenValue(t.initValue),this.set("value",t.initValue),typeof e=="function"?this._refresh=e:this._refresh=()=>DT(e),this._options=Object.assign({},td,t)}init(){return new Promise((e,t)=>{if(!this.value){this.refreshToken().then(e).catch(t);return}this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)})}refreshToken(){return this._refresh().then(e=>{this._validateTokenValue(e),this.set("value",e),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){const t=typeof e=="string",n=!/^".*"$/.test(e),i=t&&e.split(".").length===3;if(!(n&&i))throw new _("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},e)}_getTokenRefreshTimeoutTime(){try{const[,e]=this.value.split("."),{exp:t}=JSON.parse(atob(e));return t?Math.floor((t*1e3-Date.now())/2):rp}catch{return rp}}static create(e,t=td){return new qs(e,t).init()}}ee(qs,we);function DT(o){return new Promise((e,t)=>{const n=new XMLHttpRequest;n.open("GET",o),n.addEventListener("load",()=>{const i=n.status,r=n.response;return i<200||i>299?t(new _("token-cannot-download-new-token",null)):e(r)}),n.addEventListener("error",()=>t(new Error("Network Error"))),n.addEventListener("abort",()=>t(new Error("Abort"))),n.send()})}const ST=qs,nd=/^data:(\S*?);base64,/;class sp{constructor(e,t,n){if(!e)throw new _("fileuploader-missing-file",null);if(!t)throw new _("fileuploader-missing-token",null);if(!n)throw new _("fileuploader-missing-api-address",null);this.file=IT(e)?TT(e):e,this._token=t,this._apiAddress=n}onProgress(e){return this.on("progress",(t,n)=>e(n)),this}onError(e){return this.once("error",(t,n)=>e(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open("POST",this._apiAddress),e.setRequestHeader("Authorization",this._token.value),e.responseType="json",this.xhr=e}_attachXHRListeners(){const e=this,t=this.xhr;t.addEventListener("error",n("Network Error")),t.addEventListener("abort",n("Abort")),t.upload&&t.upload.addEventListener("progress",i=>{i.lengthComputable&&this.fire("progress",{total:i.total,uploaded:i.loaded})}),t.addEventListener("load",()=>{const i=t.status,r=t.response;if(i<200||i>299)return this.fire("error",r.message||r.error)});function n(i){return()=>e.fire("error",i)}}_sendRequest(){const e=new FormData,t=this.xhr;return e.append("file",this.file),new Promise((n,i)=>{t.addEventListener("load",()=>{const r=t.status,s=t.response;return r<200||r>299?s.message?i(new _("fileuploader-uploading-data-failed",this,{message:s.message})):i(s.error):n(s)}),t.addEventListener("error",()=>i(new Error("Network Error"))),t.addEventListener("abort",()=>i(new Error("Abort"))),t.send(e)})}}ee(sp,v);function TT(o,e=512){try{const t=o.match(nd)[1],n=atob(o.replace(nd,"")),i=[];for(let r=0;r<n.length;r+=e){const s=n.slice(r,r+e),a=new Array(s.length);for(let c=0;c<s.length;c++)a[c]=s.charCodeAt(c);i.push(new Uint8Array(a))}return new Blob(i,{type:t})}catch{throw new _("fileuploader-decoding-image-data-error",null)}}function IT(o){if(typeof o!="string")return!1;const e=o.match(nd);return!!(e&&e.length)}class MT{constructor(e,t){if(!e)throw new _("uploadgateway-missing-token",null);if(!t)throw new _("uploadgateway-missing-api-address",null);this._token=e,this._apiAddress=t}upload(e){return new sp(e,this._token,this._apiAddress)}}class BT extends ks{static get pluginName(){return"CloudServicesCore"}createToken(e,t){return new ST(e,t)}createUploadGateway(e,t){return new MT(e,t)}}class NT extends ks{static get pluginName(){return"CloudServices"}static get requires(){return[BT]}init(){const t=this.context.config.get("cloudServices")||{};for(const n in t)this[n]=t[n];if(this._tokens=new Map,!this.tokenUrl){this.token=null;return}return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init()}registerTokenUrl(e){if(this._tokens.has(e))return Promise.resolve(this.getTokenFor(e));const t=this.context.plugins.get("CloudServicesCore").createToken(e);return this._tokens.set(e,t),t.init()}getTokenFor(e){const t=this._tokens.get(e);if(!t)throw new _("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(const e of this._tokens.values())e.destroy()}}const zo="code",PT="ck-code_selected";class zT extends V{static get pluginName(){return"CodeEditing"}static get requires(){return[js]}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:zo}),e.model.schema.setAttributeProperties(zo,{isFormatting:!0,copyOnEnter:!1}),e.conversion.attributeToElement({model:zo,view:"code",upcastAlso:{styles:{"word-wrap":"break-word"}}}),e.commands.add(zo,new Jl(e,zo)),e.plugins.get(js).registerAttribute(zo),Hm(e,zo,"code",PT)}}const LT='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 5.7 5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>';var ap=b(8180),od={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};od.insert="head",od.singleton=!0,ne()(ap.Z,od),ap.Z.locals;const id="code";class OT extends V{static get pluginName(){return"CodeUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(id,n=>{const i=e.commands.get(id),r=new Be(n);return r.set({label:t("Code"),icon:LT,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(id),e.editing.view.focus()}),r})}}class RT extends V{static get requires(){return[zT,OT]}static get pluginName(){return"Code"}}function rd(o){const e=o.t,t=o.config.get("codeBlock.languages");for(const n of t)n.label==="Plain text"&&(n.label=e("Plain text")),n.class===void 0&&(n.class=`language-${n.language}`);return t}function sd(o,e,t){const n={};for(const i of o)if(e==="class"){const r=i[e].split(" ").shift();n[r]=i[t]}else n[i[e]]=i[t];return n}function ad(o){return o.data.match(/^(\s*)/)[0]}function jT(o,e){const t=o.createDocumentFragment(),n=e.split(`
`),i=n.reduce((r,s,a)=>(r.push(s),a<n.length-1&&r.push(o.createElement("br")),r),[]);return o.appendChild(i,t),t}function cd(o){const e=o.document.selection,t=[];if(e.isCollapsed)return[e.anchor];const n=e.getFirstRange().getWalker({ignoreElementEnd:!0,direction:"backward"});for(const{item:i}of n){if(!i.is("$textProxy"))continue;const{parent:r,startOffset:s}=i.textNode;if(!r.is("element","codeBlock"))continue;const a=ad(i.textNode),c=o.createPositionAt(r,s+a.length);t.push(c)}return t}function cp(o){const e=et(o.getSelectedBlocks());return!!e&&e.is("element","codeBlock")}function lp(o,e){return e.is("rootElement")||o.isLimit(e)?!1:o.checkChild(e.parent,"codeBlock")}class FT extends ge{constructor(e){super(e),this._lastLanguage=null}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor,n=t.model,i=n.document.selection,s=rd(t)[0],a=Array.from(i.getSelectedBlocks()),c=e.forceValue==null?!this.value:e.forceValue,l=VT(e,this._lastLanguage,s.language);n.change(d=>{c?this._applyCodeBlock(d,a,l):this._removeCodeBlock(d,a)})}_getValue(){const e=this.editor.model.document.selection,t=et(e.getSelectedBlocks());return!!(t&&t.is("element","codeBlock"))?t.getAttribute("language"):!1}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=et(e.getSelectedBlocks());return n?lp(t,n):!1}_applyCodeBlock(e,t,n){this._lastLanguage=n;const i=this.editor.model.schema,r=t.filter(s=>lp(i,s));for(const s of r)e.rename(s,"codeBlock"),e.setAttribute("language",n,s),i.removeDisallowedAttributes([s],e),Array.from(s.getChildren()).filter(a=>!i.checkChild(s,a)).forEach(a=>e.remove(a));r.reverse().forEach((s,a)=>{const c=r[a+1];s.previousSibling===c&&(e.appendElement("softBreak",c),e.merge(e.createPositionBefore(s)))})}_removeCodeBlock(e,t){const n=t.filter(i=>i.is("element","codeBlock"));for(const i of n){const r=e.createRangeOn(i);for(const s of Array.from(r.getItems()).reverse())if(s.is("element","softBreak")&&s.parent.is("element","codeBlock")){const{position:a}=e.split(e.createPositionBefore(s)),c=a.nodeAfter;e.rename(c,"paragraph"),e.removeAttribute("language",c),e.remove(s)}e.rename(i,"paragraph"),e.removeAttribute("language",i)}}}function VT(o,e,t){return o.language?o.language:o.usePreviousLanguageChoice&&e?e:t}class HT extends ge{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model;t.change(n=>{const i=cd(t);for(const r of i){const s=n.createText(this._indentSequence);t.insertContent(s,r)}})}_checkEnabled(){return this._indentSequence?cp(this.editor.model.document.selection):!1}}class UT extends ge{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model;t.change(()=>{const n=cd(t);for(const i of n){const r=dp(t,i,this._indentSequence);r&&t.deleteContent(t.createSelection(r))}})}_checkEnabled(){if(!this._indentSequence)return!1;const e=this.editor.model;return cp(e.document.selection)?cd(e).some(t=>dp(e,t,this._indentSequence)):!1}}function dp(o,e,t){const n=WT(e);if(!n)return null;const i=ad(n),r=i.lastIndexOf(t);if(r+t.length!==i.length||r===-1)return null;const{parent:s,startOffset:a}=n;return o.createRange(o.createPositionAt(s,a+r),o.createPositionAt(s,a+r+t.length))}function WT(o){let e=o.parent.getChild(o.index);return(!e||e.is("element","softBreak"))&&(e=o.nodeBefore),!e||e.is("element","softBreak")?null:e}function up(o,e,t=!1){const n=sd(e,"language","class"),i=sd(e,"language","label");return(r,s,a)=>{const{writer:c,mapper:l,consumable:d}=a;if(!d.consume(s.item,"insert"))return;const u=s.item.getAttribute("language"),p=l.toViewPosition(o.createPositionBefore(s.item)),A={};t&&(A["data-language"]=i[u],A.spellcheck="false");const D=n[u]?{class:n[u]}:void 0,N=c.createContainerElement("code",D),j=c.createContainerElement("pre",A,N);c.insert(p,j),l.bindElements(s.item,N)}}function qT(o){return(e,t,n)=>{if(t.item.parent.name!=="codeBlock")return;const{writer:i,mapper:r,consumable:s}=n;if(!s.consume(t.item,"insert"))return;const a=r.toViewPosition(o.createPositionBefore(t.item));i.insert(a,i.createText(`
`))}}function GT(o,e){const t=sd(e,"class","language"),n=e[0].language;return(i,r,s)=>{const a=r.viewItem,c=a.parent;if(!c||!c.is("element","pre")||r.modelCursor.findAncestor("codeBlock"))return;const{consumable:l,writer:d}=s;if(!l.test(a,{name:!0}))return;const u=d.createElement("codeBlock"),p=[...a.getClassNames()];p.length||p.push("");for(const A of p){const D=t[A];if(D){d.setAttribute("language",D,u);break}}u.hasAttribute("language")||d.setAttribute("language",n,u),s.convertChildren(a,u),s.safeInsert(u,r.modelCursor)&&(l.consume(a,{name:!0}),s.updateConversionResult(u,r))}}function $T(){return(o,e,{consumable:t,writer:n})=>{let i=e.modelCursor;if(!t.test(e.viewItem)||!i.findAncestor("codeBlock"))return;t.consume(e.viewItem);const s=e.viewItem.data.split(`
`).map(c=>n.createText(c)),a=s[s.length-1];for(const c of s)if(n.insert(c,i),i=i.getShiftedBy(c.offsetSize),c!==a){const l=n.createElement("softBreak");n.insert(l,i),i=n.createPositionAfter(l)}e.modelRange=n.createRange(e.modelCursor,i),e.modelCursor=i}}function KT(){return(o,e,{consumable:t})=>{const n=e.viewItem;if(n.findAncestor("pre"))return;const i=Array.from(n.getChildren()),r=i.find(s=>s.is("element","code"));if(r)for(const s of i)s===r||!s.is("$text")||t.consume(s,{name:!0})}}const hp="paragraph";class YT extends V{static get pluginName(){return"CodeBlockEditing"}static get requires(){return[Km]}constructor(e){super(e),e.config.define("codeBlock",{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"}],indentSequence:"	"})}init(){const e=this.editor,t=e.model.schema,n=e.model,i=e.editing.view,r=e.plugins.has("DocumentListEditing"),s=rd(e);e.commands.add("codeBlock",new FT(e)),e.commands.add("indentCodeBlock",new HT(e)),e.commands.add("outdentCodeBlock",new UT(e)),this.listenTo(i.document,"tab",(a,c)=>{const l=c.shiftKey?"outdentCodeBlock":"indentCodeBlock";e.commands.get(l).isEnabled&&(e.execute(l),c.stopPropagation(),c.preventDefault(),a.stop())},{context:"pre"}),t.register("codeBlock",{allowWhere:"$block",allowChildren:"$text",isBlock:!0,allowAttributes:["language"]}),t.addAttributeCheck((a,c)=>{const l=a.endsWith("codeBlock")&&c.startsWith("list")&&c!=="list";if(r&&l)return!0;if(a.endsWith("codeBlock $text"))return!1}),e.model.schema.addChildCheck((a,c)=>{if(a.endsWith("codeBlock")&&c.isObject)return!1}),e.editing.downcastDispatcher.on("insert:codeBlock",up(n,s,!0)),e.data.downcastDispatcher.on("insert:codeBlock",up(n,s)),e.data.downcastDispatcher.on("insert:softBreak",qT(n),{priority:"high"}),e.data.upcastDispatcher.on("element:code",GT(i,s)),e.data.upcastDispatcher.on("text",$T()),e.data.upcastDispatcher.on("element:pre",KT(),{priority:"high"}),this.listenTo(e.editing.view.document,"clipboardInput",(a,c)=>{let l=n.createRange(n.document.selection.anchor);if(c.targetRanges&&(l=e.editing.mapper.toModelRange(c.targetRanges[0])),!l.start.parent.is("element","codeBlock"))return;const d=c.dataTransfer.getData("text/plain"),u=new No(e.editing.view.document);c.content=jT(u,d)}),this.listenTo(n,"getSelectedContent",(a,[c])=>{const l=c.anchor;c.isCollapsed||!l.parent.is("element","codeBlock")||!l.hasSameParentAs(c.focus)||n.change(d=>{const u=a.return;if(l.parent.is("element")&&(u.childCount>1||c.containsEntireContent(l.parent))){const A=d.createElement("codeBlock",l.parent.getAttributes());d.append(u,A);const D=d.createDocumentFragment();d.append(A,D),a.return=D;return}const p=u.getChild(0);t.checkAttribute(p,"code")&&d.setAttribute("code",!0,p)})})}afterInit(){const e=this.editor,t=e.commands,n=t.get("indent"),i=t.get("outdent");n&&n.registerChildCommand(t.get("indentCodeBlock"),{priority:"highest"}),i&&i.registerChildCommand(t.get("outdentCodeBlock")),this.listenTo(e.editing.view.document,"enter",(r,s)=>{e.model.document.selection.getLastPosition().parent.is("element","codeBlock")&&(!ZT(e,s.isSoft)&&!JT(e,s.isSoft)&&QT(e),s.preventDefault(),r.stop())},{context:"pre"})}}function QT(o){const t=o.model.document,n=t.selection.getLastPosition(),i=n.nodeBefore||n.textNode;let r;i&&i.is("$text")&&(r=ad(i)),o.model.change(s=>{o.execute("shiftEnter"),r&&s.insertText(r,t.selection.anchor)})}function ZT(o,e){const n=o.model.document,i=o.editing.view,r=n.selection.getLastPosition(),s=r.nodeAfter;return e||!n.selection.isCollapsed||!r.isAtStart||!Lo(s)?!1:(o.model.change(a=>{o.execute("enter");const c=n.selection.anchor.parent.previousSibling;a.rename(c,hp),a.setSelection(c,"in"),o.model.schema.removeDisallowedAttributes([c],a),a.remove(s)}),i.scrollToTheSelection(),!0)}function JT(o,e){const t=o.model,n=t.document,i=o.editing.view,r=n.selection.getLastPosition(),s=r.nodeBefore;let a;if(e||!n.selection.isCollapsed||!r.isAtEnd||!s||!s.previousSibling)return!1;if(Lo(s)&&Lo(s.previousSibling))a=t.createRange(t.createPositionBefore(s.previousSibling),t.createPositionAfter(s));else if(ld(s)&&Lo(s.previousSibling)&&Lo(s.previousSibling.previousSibling))a=t.createRange(t.createPositionBefore(s.previousSibling.previousSibling),t.createPositionAfter(s));else if(ld(s)&&Lo(s.previousSibling)&&ld(s.previousSibling.previousSibling)&&s.previousSibling.previousSibling&&Lo(s.previousSibling.previousSibling.previousSibling))a=t.createRange(t.createPositionBefore(s.previousSibling.previousSibling.previousSibling),t.createPositionAfter(s));else return!1;return o.model.change(c=>{c.remove(a),o.execute("enter");const l=n.selection.anchor.parent;c.rename(l,hp),o.model.schema.removeDisallowedAttributes([l],c)}),i.scrollToTheSelection(),!0}function ld(o){return o&&o.is("$text")&&!o.data.match(/\S/)}function Lo(o){return o&&o.is("element","softBreak")}const XT='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z"/></svg>';var fp=b(9085),dd={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};dd.insert="head",dd.singleton=!0,ne()(fp.Z,dd),fp.Z.locals;class eI extends V{static get pluginName(){return"CodeBlockUI"}init(){const e=this.editor,t=e.t,n=e.ui.componentFactory,i=rd(e);n.add("codeBlock",r=>{const s=e.commands.get("codeBlock"),a=$t(r,ps),c=a.buttonView;return c.set({label:t("Insert code block"),tooltip:!0,icon:XT,isToggleable:!0}),c.bind("isOn").to(s,"value",l=>!!l),c.on("execute",()=>{e.execute("codeBlock",{usePreviousLanguageChoice:!0}),e.editing.view.focus()}),a.on("execute",l=>{e.execute("codeBlock",{language:l.source._codeBlockLanguage,forceValue:!0}),e.editing.view.focus()}),a.class="ck-code-block-dropdown",a.bind("isEnabled").to(s),dr(a,()=>this._getLanguageListItemDefinitions(i)),a})}_getLanguageListItemDefinitions(e){const n=this.editor.commands.get("codeBlock"),i=new St;for(const r of e){const s={type:"button",model:new ur({_codeBlockLanguage:r.language,label:r.label,withText:!0})};s.model.bind("isOn").to(n,"value",a=>a===s.model._codeBlockLanguage),i.add(s)}return i}}class tI extends V{static get requires(){return[YT,eI]}static get pluginName(){return"CodeBlock"}}class ud extends Jn{constructor(e){super(e);const t=this.document;this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"});function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new Ie(t,i);t.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new og(t,{cacheFiles:n})};(e.type=="drop"||e.type=="dragover")&&(i.dropRange=nI(this.view,e)),this.fire(e.type,e,i)}}function nI(o,e){const t=e.target.ownerDocument,n=e.clientX,i=e.clientY;let r;return t.caretRangeFromPoint&&t.caretRangeFromPoint(n,i)?r=t.caretRangeFromPoint(n,i):e.rangeParent&&(r=t.createRange(),r.setStart(e.rangeParent,e.rangeOffset),r.collapse(!0)),r?o.domConverter.domRangeToView(r):null}function oI(o){return o=o.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;"),(o.includes("</p><p>")||o.includes("<br>"))&&(o=`<p>${o}</p>`),o}function iI(o){return o.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>t.length==1?" ":t).replace(/<!--[\s\S]*?-->/g,"")}const gp=["figcaption","li"];function mp(o){let e="";if(o.is("$text")||o.is("$textProxy"))e=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))e=o.getAttribute("alt");else if(o.is("element","br"))e=`
`;else{let t=null;for(const n of o.getChildren()){const i=mp(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(gp.includes(t.name)||gp.includes(n.name)?e+=`
`:e+=`
