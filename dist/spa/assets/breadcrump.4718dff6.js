var x=Object.defineProperty,w=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))E.call(a,t)&&p(e,t,a[t]);if(k)for(var t of k(a))R.call(a,t)&&p(e,t,a[t]);return e},b=(e,a)=>w(e,z(a));import{I as h,Z as A,_ as I,H as i,U as l,a3 as S,Y as L,a4 as N,a5 as T,a6 as P,a7 as V,a8 as D,a9 as F,aa as H,a as M,o as _,c as f,b as y,e as q,w as U,F as Y,B as Z,i as j}from"./vendor.236b7206.js";import{_ as G}from"./index.4f996167.js";const J=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],K=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var ie=h({name:"QSkeleton",props:b(v({},A),{tag:{type:String,default:"div"},type:{type:String,validator:e=>J.includes(e),default:"rect"},animation:{type:String,validator:e=>K.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String}),setup(e,{slots:a}){const t=L(),o=I(e,t.proxy.$q),u=i(()=>{const s=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:s[0],height:s[1]}}),d=i(()=>`q-skeleton q-skeleton--${o.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>l(e.tag,{class:d.value,style:u.value},S(a.default))}}),Q=h({name:"QBreadcrumbsEl",props:b(v({},N),{label:String,icon:String,tag:{type:String,default:"span"}}),setup(e,{slots:a}){const{linkTag:t,linkProps:o,linkClass:u,hasRouterLink:d,navigateToRouterLink:s}=T(),c=i(()=>{const n=v({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+u.value:"q-breadcrumbs__el--disable")},o.value);return d.value===!0&&(n.onClick=s),n}),m=i(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const n=[];return e.icon!==void 0&&n.push(l(P,{class:m.value,name:e.icon})),e.label!==void 0&&n.push(e.label),l(t.value,v({},c.value),V(a.default,n))}}});const O=[void 0,!0];var W=h({name:"QBreadcrumbs",props:b(v({},D),{separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}}),setup(e,{slots:a}){const t=F(e),o=i(()=>`flex items-center ${t.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),u=i(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=i(()=>` text-${e.activeColor}`);return()=>{const s=H(S(a.default));if(s.length===0)return;let c=1;const m=[],n=s.filter(r=>r.type!==void 0&&r.type.name==="QBreadcrumbsEl").length,B=a.separator!==void 0?a.separator:()=>e.separator;return s.forEach(r=>{if(r.type!==void 0&&r.type.name==="QBreadcrumbsEl"){const g=c<n,C=r.props!==null&&O.includes(r.props.disable),$=(g===!0?"":" q-breadcrumbs--last")+(C!==!0&&g===!0?d.value:"");c++,m.push(l("div",{class:`flex items-center${$}`},[r])),g===!0&&m.push(l("div",{class:"q-breadcrumbs__separator"+u.value},B()))}else m.push(r)}),l("div",{class:"q-breadcrumbs"},[l("div",{class:o.value},m)])}}});const X=M({name:"BreadCrump",props:{childrens:Array},created(){}}),ee={class:"pokedexBreadcrump"},ae={class:"row"},te={class:"column"};function se(e,a,t,o,u,d){return _(),f("div",ee,[y("div",ae,[y("div",te,[q(W,null,{default:U(()=>[q(Q,{icon:"home",to:"/"}),(_(!0),f(Y,null,Z(e.childrens,(s,c)=>(_(),j(Q,{key:c,label:e.$t(s.label),to:s.path},null,8,["label","to"]))),128))]),_:1})])])])}var oe=G(X,[["render",se],["__scopeId","data-v-4523d082"]]);export{oe as B,ie as Q};
