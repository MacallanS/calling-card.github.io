import Be from"./DOjoTNY4.js";import Re from"./DczDJj4W.js";import Pe from"./C6ZLhm_q.js";import{_ as He,a as Ue}from"./DwlJVdep.js";import Xe from"./-YXIYOYZ.js";import{_ as R,o as S,c as T,v as ze,a as r,b as c,w as h,d as b,F as z,n as M,r as d,x as X,y as j,z as de,A as We,B as Ye,C as V,g as ae,D as Ae,E as B,G as D,t as re,s as W,p as je,e as $e,h as Ge,H as Le,u as A,I as me,J as Fe,T as qe,K as Je,q as Ne,L as Ke}from"./BJUxeeZ9.js";import{_ as Ee}from"./DunAS5i4.js";import Qe from"./CUhsDwPx.js";import Ze from"./Dba8rFeg.js";import et from"./BBRdBsPG.js";import"./CGYEJ7Y1.js";const tt={},nt={class:"lg:mx-4 mx-2 2xl:text-5xl 2xl:py-7 2xl:px-28 xl:text-4xl xl:py-6 xl:px-20 text-2xl py-4 px-12 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110"};function ot(e,t){return S(),T("button",nt,[ze(e.$slots,"default")])}const st=R(tt,[["render",ot]]),lt={},it={class:"buttons-animation flex flex-col items-center lg:w-6/12 relative"},at=r("h3",{class:"lg:text-5xl text-3xl mb-8 text-4xl lg:text-end text-center"}," Список навыков/умений: ",-1),rt={class:"grid gap-8 grid-cols-2 justify-items-center"};function ct(e,t){const n=Xe,o=st,i=He;return S(),T(z,null,[r("div",it,[at,c(n,{class:"me absolute lg:top-8 top-4 lg:-right-72 -right-32",filled:""}),r("div",rt,[c(o,null,{default:h(()=>[b("HTML/CSS")]),_:1}),c(o,null,{default:h(()=>[b("JS/TS")]),_:1}),c(o,null,{default:h(()=>[b("SCSS/SASS")]),_:1}),c(o,null,{default:h(()=>[b("GIT")]),_:1}),c(o,null,{default:h(()=>[b("TAILWIND")]),_:1}),c(o,null,{default:h(()=>[b("VUE")]),_:1}),c(o,null,{default:h(()=>[b("NUXT")]),_:1}),c(o,null,{default:h(()=>[b("FIGMA/TILDA")]),_:1}),c(o,null,{default:h(()=>[b("React")]),_:1}),c(o,null,{default:h(()=>[b("Django")]),_:1})])]),c(i)],64)}const ut=R(lt,[["render",ct]]);/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ce={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function dt({config:e,slidesCount:t}){const{snapAlign:n,wrapAround:o,itemsToShow:i=1}=e;if(o)return Math.max(t-1,0);let l;switch(n){case"start":l=t-i;break;case"end":l=t-1;break;case"center":case"center-odd":l=t-Math.ceil((i-.5)/2);break;case"center-even":l=t-Math.ceil(i/2);break;default:l=0;break}return Math.max(l,0)}function mt({config:e,slidesCount:t}){const{wrapAround:n,snapAlign:o,itemsToShow:i=1}=e;let l=0;if(n||i>t)return l;switch(o){case"start":l=0;break;case"end":l=i-1;break;case"center":case"center-odd":l=Math.floor((i-1)/2);break;case"center-even":l=Math.floor((i-2)/2);break;default:l=0;break}return l}function ce({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,n),t)}function pt({config:e,currentSlide:t,slidesCount:n}){const{snapAlign:o,wrapAround:i,itemsToShow:l=1}=e;let u=t;switch(o){case"center":case"center-odd":u-=(l-1)/2;break;case"center-even":u-=(l-2)/2;break;case"end":u-=l-1;break}return i?u:ce({val:u,max:n-l,min:0})}function De(e){return e?e.reduce((t,n)=>{var o;return n.type===z?[...t,...De(n.children)]:((o=n.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?[...t,n]:t},[]):[]}function ue({val:e,max:t,min:n=0}){return e>t?ue({val:e-(t+1),max:t,min:n}):e<n?ue({val:e+(t+1),max:t,min:n}):e}function _t(e,t){let n;return t?function(...o){const i=this;n||(e.apply(i,o),n=!0,setTimeout(()=>n=!1,t))}:e}function ft(e,t){let n;return function(...o){n&&clearTimeout(n),n=setTimeout(()=>{e(...o),n=null},t)}}function xt(e="",t={}){return Object.entries(t).reduce((n,[o,i])=>n.replace(`{${o}}`,String(i)),e)}var vt=M({name:"ARIA",setup(){const e=D("config",X(Object.assign({},v))),t=D("currentSlide",d(0)),n=D("slidesCount",d(0));return()=>B("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},xt(e.i18n.itemXofY,{currentSlide:t.value+1,slidesCount:n.value}))}}),gt=M({name:"Carousel",props:Ce,setup(e,{slots:t,emit:n,expose:o}){var i;const l=d(null),u=d([]),_=d(0),m=d(0),a=X(Object.assign({},v));let g=Object.assign({},v),k;const p=d((i=e.modelValue)!==null&&i!==void 0?i:0),w=d(0),$=d(0),C=d(0),P=d(0);let O,Q;j("config",a),j("slidesCount",m),j("currentSlide",p),j("maxSlide",C),j("minSlide",P),j("slideWidth",_);function Z(){k=Object.assign({},e.breakpoints),g=Object.assign(Object.assign(Object.assign({},g),e),{i18n:Object.assign(Object.assign({},g.i18n),e.i18n),breakpoints:void 0}),pe(g)}function Y(){if(!k||!Object.keys(k).length)return;const s=Object.keys(k).map(f=>Number(f)).sort((f,I)=>+I-+f);let x=Object.assign({},g);s.some(f=>{const I=window.matchMedia(`(min-width: ${f}px)`).matches;return I&&(x=Object.assign(Object.assign({},x),k[f])),I}),pe(x)}function pe(s){Object.entries(s).forEach(([x,f])=>a[x]=f)}const _e=ft(()=>{Y(),G(),H()},16);function H(){if(!l.value)return;const s=l.value.getBoundingClientRect();_.value=s.width/a.itemsToShow}function G(){m.value<=0||($.value=Math.ceil((m.value-1)/2),C.value=dt({config:a,slidesCount:m.value}),P.value=mt({config:a,slidesCount:m.value}),a.wrapAround||(p.value=ce({val:p.value,max:C.value,min:P.value})))}de(()=>{We(()=>H()),setTimeout(()=>H(),1e3),Y(),ge(),window.addEventListener("resize",_e,{passive:!0}),n("init")}),Ye(()=>{Q&&clearTimeout(Q),O&&clearInterval(O),window.removeEventListener("resize",_e,{passive:!0})});let y=!1;const F={x:0,y:0},q={x:0,y:0},L=X({x:0,y:0}),J=d(!1),ee=d(!1),Me=()=>{J.value=!0},Oe=()=>{J.value=!1};function fe(s){["INPUT","TEXTAREA","SELECT"].includes(s.target.tagName)||(y=s.type==="touchstart",y||s.preventDefault(),!(!y&&s.button!==0||N.value)&&(F.x=y?s.touches[0].clientX:s.clientX,F.y=y?s.touches[0].clientY:s.clientY,document.addEventListener(y?"touchmove":"mousemove",xe,!0),document.addEventListener(y?"touchend":"mouseup",ve,!0)))}const xe=_t(s=>{ee.value=!0,q.x=y?s.touches[0].clientX:s.clientX,q.y=y?s.touches[0].clientY:s.clientY;const x=q.x-F.x,f=q.y-F.y;L.y=f,L.x=x},a.throttle);function ve(){const s=a.dir==="rtl"?-1:1,x=Math.sign(L.x)*.4,f=Math.round(L.x/_.value+x)*s;if(f&&!y){const I=Te=>{window.removeEventListener("click",I,!0)};window.addEventListener("click",I,!0)}E(p.value-f),L.x=0,L.y=0,ee.value=!1,document.removeEventListener(y?"touchmove":"mousemove",xe,!0),document.removeEventListener(y?"touchend":"mouseup",ve,!0)}function ge(){!a.autoplay||a.autoplay<=0||(O=setInterval(()=>{a.pauseAutoplayOnHover&&J.value||K()},a.autoplay))}function he(){O&&(clearInterval(O),O=null),ge()}const N=d(!1);function E(s){const x=a.wrapAround?s:ce({val:s,max:C.value,min:P.value});p.value===x||N.value||(n("slide-start",{slidingToIndex:s,currentSlideIndex:p.value,prevSlideIndex:w.value,slidesCount:m.value}),N.value=!0,w.value=p.value,p.value=x,Q=setTimeout(()=>{if(a.wrapAround){const f=ue({val:x,max:C.value,min:0});f!==p.value&&(p.value=f,n("loop",{currentSlideIndex:p.value,slidingToIndex:s}))}n("update:modelValue",p.value),n("slide-end",{currentSlideIndex:p.value,prevSlideIndex:w.value,slidesCount:m.value}),N.value=!1,he()},a.transition))}function K(){E(p.value+a.itemsToScroll)}function te(){E(p.value-a.itemsToScroll)}const we={slideTo:E,next:K,prev:te};j("nav",we),j("isSliding",N);const be=V(()=>pt({config:a,currentSlide:p.value,slidesCount:m.value}));j("slidesToScroll",be);const Ve=V(()=>{const s=a.dir==="rtl"?-1:1,x=be.value*_.value*s;return{transform:`translateX(${L.x-x}px)`,transition:`${N.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${m.value*_.value}px`:"",width:"100%"}});function Se(){Z(),Y(),G(),H(),he()}Object.keys(Ce).forEach(s=>{["modelValue"].includes(s)||ae(()=>e[s],Se)}),ae(()=>e.modelValue,s=>{s!==p.value&&E(Number(s))}),ae(m,G),n("before-init"),Z();const ye={config:a,slidesCount:m,slideWidth:_,next:K,prev:te,slideTo:E,currentSlide:p,maxSlide:C,minSlide:P,middleSlide:$};o({updateBreakpointsConfigs:Y,updateSlidesData:G,updateSlideWidth:H,initDefaultConfigs:Z,restartCarousel:Se,slideTo:E,next:K,prev:te,nav:we,data:ye});const ne=t.default||t.slides,oe=t.addons,ke=X(ye);return()=>{const s=De(ne==null?void 0:ne(ke)),x=(oe==null?void 0:oe(ke))||[];s.forEach((se,le)=>se.props.index=le);let f=s;if(a.wrapAround){const se=s.map((ie,U)=>Ae(ie,{index:-s.length+U,isClone:!0,key:`clone-before-${U}`})),le=s.map((ie,U)=>Ae(ie,{index:s.length+U,isClone:!0,key:`clone-after-${U}`}));f=[...se,...s,...le]}u.value=s,m.value=Math.max(s.length,1);const I=B("ol",{class:"carousel__track",style:Ve.value,onMousedownCapture:a.mouseDrag?fe:null,onTouchstartPassiveCapture:a.touchDrag?fe:null},f),Te=B("div",{class:"carousel__viewport"},I);return B("section",{ref:l,class:{carousel:!0,"is-sliding":N.value,"is-dragging":ee.value,"is-hover":J.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:Me,onMouseleave:Oe},[Te,x,B(vt)])}}}),Ie;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(Ie||(Ie={}));var ht=M({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=D("config",X(Object.assign({},v))),o=D("currentSlide",d(0)),i=D("slidesToScroll",d(0)),l=D("isSliding",d(!1)),u=V(()=>e.index===o.value),_=V(()=>e.index===o.value-1),m=V(()=>e.index===o.value+1),a=V(()=>{const g=Math.floor(i.value),k=Math.ceil(i.value+n.itemsToShow-1);return e.index>=g&&e.index<=k});return()=>{var g;return B("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a.value,"carousel__slide--active":u.value,"carousel__slide--prev":_.value,"carousel__slide--next":m.value,"carousel__slide--sliding":l.value},"aria-hidden":!a.value},(g=t.default)===null||g===void 0?void 0:g.call(t,{isActive:u.value,isClone:e.isClone,isPrev:_.value,isNext:m.value,isSliding:l.value,isVisible:a.value}))}}});const wt=e=>(je("data-v-f9791736"),e=e(),$e(),e),bt={key:0,class:"absolute inset-0 flex justify-center items-center"},St={class:"drop flex sm:flex-row flex-col items-center justify-center lg:w-2/3 lg:mx-20 sm:p-5 pt-3 rounded-3xl"},yt=["src"],kt={class:"flex flex-col text-center justify-center xl:p-20 sm:p-5 p-1 xl:w-1/2 sm:w-3/4 w-full xl:h-full"},Tt={class:"xl:text-4xl text-2xl p-5"},At=wt(()=>r("br",null,null,-1)),Ct={class:"flex flex-row justify-center p-3"},It=M({__name:"DropInformation",props:{show:{},image:{},dropText:{},dropLink:{}},emits:["update:show"],setup(e,{emit:t}){const n=t;function o(){n("update:show",!1)}return(i,l)=>{const u=Ee;return i.show?(S(),T("div",bt,[r("div",St,[r("img",{class:"border-2 border-solid border-black rounded-3xl w-1/2 h-full",src:i.image,alt:"Image project"},null,8,yt),r("div",kt,[r("p",Tt,[b("Детали проекта: "),At,b(re(i.dropText),1)]),r("div",Ct,[c(u,{class:"mx-2 text-2xl xl:py-5 py-2 lg:px-12 px-6 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110",href:i.dropLink,target:"_blank"},{default:h(()=>[b(" Ссылка на проект ")]),_:1},8,["href"]),r("button",{class:"mx-2 text-2xl xl:py-5 py-2 xl:px-12 px-5 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110",onClick:o}," Закрыть ")])])])])):W("",!0)}}}),jt=R(It,[["__scopeId","data-v-f9791736"]]),$t=["src","alt"],Lt=["onClick"],Nt=M({__name:"SliderCarousel",setup(e){const t=d(),n=d(!1);function o(m){n.value=!n.value,t.value=m-1,n.value&&window.addEventListener("scroll",i,!0)}function i(){n.value=!1,t.value=null,window.removeEventListener("scroll",i,!0)}const l=[{index:1,image:"/project-1.jpg",text:"Данный проект сейчас находится в разработке, поэтому ссылку на него я оставить не могу, но работа идет полным ходом.",link:"https://gitlab.com/knoli/frontend/web"},{index:2,image:"/project-4.jpg",text:"Данный проект был разработан при изучении HTML/CSS. Кроме того включает в себя исползование некоторых библиотек (featch, anime.js), а так же фраемворк Vue.js",link:"http://saasto.std-2145.ist.mospolytech.ru"},{index:3,image:"/project-3.jpg",text:"Данный проект был создан первым при знакомстве с Vue.js. Он включает в себя Api запросы с созданием комметраев и публикации их. Вы можете опробовать данный проект по ссылке. ",link:"http://vue.std-2145.ist.mospolytech.ru"},{index:4,image:"/project-2.jpg",text:"Данный проект является тестовым заданием для РосАтома и написан на чистом JavaScript. Он использует локальное хранилище браузера для сохранения данных пользователя.",link:"http://rosatom.std-2145.ist.mospolytech.ru"},{index:5,image:"/project-5.jpg",text:"Данный проект был разработан для применения моих навыков на практике. Сайт написан при использовании Nuxt.js. Здесь я попытался максимально проявить свои навыки в плане дизайна и создания веб-приложений.",link:"https://aksenov.netlify.app"}],u=d(3.95),_=()=>{u.value=window.innerWidth<1280?2.95:3.95,u.value=window.innerWidth<768?1.5:3.95};return de(()=>{_(),window.addEventListener("resize",_)}),Ge(()=>{window.removeEventListener("resize",_)}),(m,a)=>{const g=ht,k=gt,p=jt;return S(),T("section",null,[c(k,{"items-to-show":A(u),"wrap-around":!0,transition:500},{default:h(()=>[(S(),T(z,null,Le(l,w=>c(g,{key:w.index,index:w.index},{default:h(()=>[r("img",{class:"rounded-3xl",src:w.image,alt:"Slide "+w.index},null,8,$t),r("button",{class:"lg:mx-4 mx-2 lg:text-2xl text-xl lg:py-3 py-1 lg:px-10 px-4 rounded-full border-2 border-solid border-red-300 cursor-pointer transition-transform duration-500 ease transform hover:scale-110",onClick:$=>o(w.index)}," Подробнее ",8,Lt)]),_:2},1032,["index"])),64))]),_:1},8,["items-to-show"]),c(qe,{name:"scale"},{default:h(()=>{var w,$,C;return[A(t)!==null?(S(),me(p,{key:0,show:A(n),image:(w=l[A(t)])==null?void 0:w.image,"drop-text":($=l[A(t)])==null?void 0:$.text,"drop-link":(C=l[A(t)])==null?void 0:C.link,"onUpdate:show":i,onClick:Fe(i,["self"])},null,8,["show","image","drop-text","drop-link"])):W("",!0)]}),_:1})])}}}),Et=R(Nt,[["__scopeId","data-v-62f96911"]]),Dt=e=>(je("data-v-b7d59565"),e=e(),$e(),e),Mt=Dt(()=>r("h2",{class:"lg:text-7xl text-4xl lg:mt-8 mt-4"},"Часто задаваемые вопросы",-1)),Ot={class:"flex flex-row justify-between items-end relative after:h-px after:bg-gray-500 after:w-full after:absolute lg:after:top-28 after:top-20"},Vt={class:"lg:text-5xl text-3xl lg:mt-12 mt-7"},Bt=["onClick"],Rt=M({__name:"AnswerItem",setup(e){const t=d([{question:"Есть ли у меня опыт в коммерческих проектах?",answer:"Да, у меня есть опыт работы в коммерческих проектах, где я приобрел ценный опыт и навыки.",open:!1},{question:"Как я отношусь к работе в коллективе?",answer:"Я прекрасно умею работать в команде. Я коммуникабельный человек и готов вносить свой вклад в общее дело.",open:!1},{question:"Готов ли я присоединиться к вашей команде?",answer:"Конечно, я готов присоединиться к вашей команде и внести свой вклад в достижение общих целей.",open:!1}]);function n(o){t.value[o].open=!t.value[o].open}return(o,i)=>{const l=Qe;return S(),T(z,null,[Mt,r("ul",null,[(S(!0),T(z,null,Le(A(t),(u,_)=>(S(),T("li",{key:_},[r("div",Ot,[r("h3",Vt,re(u.question),1),r("button",{style:Je({transform:u.open?"rotate(45deg)":""}),onClick:m=>n(_)},[c(l,{class:"plus",filled:""})],12,Bt)]),u.open?(S(),T("p",{key:0,class:Ne(["lg:text-4xl text-2xl lg:mt-12 mt-6 text-gray-400",{"text-answer":u.open}])},re(u.answer),3)):W("",!0)]))),128))])],64)}}}),Pt=R(Rt,[["__scopeId","data-v-b7d59565"]]),Ht={};function Ut(e,t){const n=et,o=Ee;return S(),me(o,{href:"/contact",class:"link lg:py-10 py-5 lg:px-24 px-12 lg:text-5xl text-3xl m-4 rounded-3xl border-2 border-solid border-red-300 cursor-pointer"},{default:h(()=>[b(" Contact me "),c(n,{class:"bell",filled:""})]),_:1})}const Xt=R(Ht,[["render",Ut],["__scopeId","data-v-d9478d66"]]),zt=Ke("/photo.jpg"),Wt={class:"sm:mx-20 mx-10 lg:mt-40 sm:mt-28 mt-10"},Yt={class:"flex lg:mx-28 mx-8 lg:justify-between gap-10 lg:flex-row flex-col items-center"},Gt={id:"about",class:"title-animation flex flex-col lg:items-end items-center lg:w-6/12 relative"},Ft=r("h2",{class:"lg:text-7xl text-4xl w-fit lg:text-end text-center"}," Привет, меня зовут Артём ",-1),qt=r("p",{class:"my-1 lg:text-3xl text-2xl w-fit text-red-300"},"Khametov Artem",-1),Jt=r("h3",{class:"lg:text-5xl text-3xl lg:text-end text-center mt-8"}," Я студент 2 курса Московского Политеха. Учусь на направлении веб-разработка, также заканчивал курс. Разработкой занимаюсь не первый год и за это время смог поучавстовать в различных проектах, о которых вы можете прочитать ниже. ",-1),Kt=r("img",{class:"img-animation rounded-full lg:w-fit lg:h-fit w-72 h-72",src:zt,alt:"photo"},null,-1),Qt={class:"lines-animation"},Zt={class:"-rotate-3"},en={class:"rotate-3"},tn={class:"flex xl:mx-28 mx-0 justify-between xl:flex-row flex-col items-center"},nn={class:"slider-animation lg:mt-52 mt-48"},on={class:"lines-animation"},sn={id:"projects",class:"rotate-3"},ln={class:"-rotate-3"},an={class:"buttons-animation flex flex-col xl:w-6/12 sm:w-2/3 mx-auto"},rn={id:"contact",class:"lines-animation lg:my-28 my-10 m-auto flex flex-col items-center lg:w-6/12 relative"},cn=r("h3",{class:"lg:text-5xl text-3xl lg:m-8 m-4 text-center"}," Вам понравился мой сайт? Обязательно свяжитесь со мной любым удобным способом ",-1),bn=M({__name:"index",setup(e){const t=d(!0);setTimeout(()=>{t.value=!1},500);const n=d(!1);function o(){const i=document.querySelectorAll(".title-animation, .img-animation, .lines-animation, .buttons-animation, .slider-animation");for(let l=0;l<i.length;l++){const u=window.innerHeight;i[l].getBoundingClientRect().top<u-150?i[l].classList.add("active"):i[l].classList.remove("active")}}return de(()=>{window.addEventListener("scroll",o),n.value=!0}),(i,l)=>{const u=Be,_=Re,m=Pe,a=Ue,g=ut,k=Et,p=Pt,w=Ze,$=Xt;return S(),T("div",Wt,[A(t)?W("",!0):(S(),T("section",{key:0,class:Ne(["lg:my-20 mt-10 flex relative",{loading:A(t)}])},[c(u,{class:"img ml-auto svg-animation-bg",filled:""}),c(_,{class:"developer svg-animation-text absolute lg:left-24 -left-4 lg:bottom-40 bottom-20",filled:""})],2)),r("section",Yt,[r("div",Gt,[Ft,qt,c(m,{class:"me absolute -top-36 -right-72",filled:""}),Jt]),Kt]),r("section",Qt,[r("div",Zt,[c(a,{class:"running-animation-first"})]),r("div",en,[c(a,{class:"running-animation-second"})])]),r("section",tn,[c(g)]),r("section",nn,[A(n)?(S(),me(k,{key:0})):W("",!0)]),r("section",on,[r("div",sn,[c(a,{class:"running-animation-first"})]),r("div",ln,[c(a,{class:"running-animation-second"})])]),r("section",an,[c(p)]),r("section",rn,[cn,c(w,{class:"end absolute xl:top-28 top-24 xl:-right-20 right-0 sm:invisible xl:visible",filled:""}),c($)])])}}});export{bn as default};