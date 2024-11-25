(function(){"use strict";var s={2126:function(s,e,a){var o=a(3751),t=a(641);const n={class:"app-body"};function i(s,e,a,o,i,r){const l=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("body",null,[(0,t.Lk)("div",n,[(0,t.bF)(l)])])}function r(s,e){return(0,t.uX)(),(0,t.CE)("form",null,e[0]||(e[0]=[(0,t.Lk)("div",{id:"logincontainer"},[(0,t.Lk)("span",{class:"login-form"},[(0,t.Lk)("input",{type:"text",class:"login-info",name:"email",value:"E-mail",onfocus:"this. value=''"})]),(0,t.Lk)("span",{class:"login-form"},[(0,t.Lk)("input",{type:"text",class:"login-info",name:"password",value:"password",onfocus:"this. value=''"})])],-1)]))}var l=a(6262);const c={},d=(0,l.A)(c,[["render",r]]);var u=d;const h={class:"button-container"},f={class:"buttons-vue"};function v(s,e){return(0,t.uX)(),(0,t.CE)("div",h,[(0,t.Lk)("button",f,[(0,t.RG)(s.$slots,"default")])])}const k={},p=(0,l.A)(k,[["render",v]]);var m=p,b=a(7318),g={components:{Buttonsvue:m,ModalForm:u},data:()=>({title:"Ambii",showModal:!1,frontImage:a(8041)}),directives:{lazy:b.A},head:{title(){return{inner:this.title}},meta:[{name:"description",content:"My description"}]},methods:{toggleModal(){this.showModal=!this.showModal}}};const L=(0,l.A)(g,[["render",i]]);var C=L,M=a(5220),x=a(33),D=a.p+"media/ambii.0e6d26aa.mp4";const w={class:"title"},T={class:"slogan"},y={key:0};function F(s,e,a,o,n,i){const r=(0,t.g2)("ModalForm"),l=(0,t.g2)("Buttonsvue"),c=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("h1",w,(0,x.v_)(s.title),1),(0,t.Lk)("h2",T,(0,x.v_)(s.slogan),1),e[0]||(e[0]=(0,t.Lk)("video",{autoplay:"",loop:"",muted:""},[(0,t.Lk)("source",{src:D,type:"video/webm"}),(0,t.Lk)("source",{src:D,type:"video/mp4"})],-1)),s.showModal?((0,t.uX)(),(0,t.CE)("div",y,[(0,t.bF)(r)])):(0,t.Q3)("",!0),(0,t.bF)(l,{onClick:i.toggleModal},{default:(0,t.k6)((()=>[(0,t.eW)((0,x.v_)(s.buttonText),1)])),_:1},8,["onClick"]),(0,t.bF)(c)],64)}a(4114);var P={components:{Buttonsvue:m,ModalForm:u},data:()=>({title:"Ambii",slogan:"We are ambitious",showModal:!1,frontImage:a(8041),buttonText:"Enter",formShown:!1}),directives:{lazy:b.A},head:{title(){return{inner:this.title}},meta:[{name:"description",content:"My description"}]},methods:{toggleModal(){this.showModal&&"Submit"===this.buttonText?this.$router.push({name:"Dashboard"}):(this.showModal=!this.showModal,this.buttonText=this.showModal?"Submit":"Enter",this.showModal&&(this.formShown=!0))}}};const E=(0,l.A)(P,[["render",F]]);var A=E;const $={id:"dashContainer"},B={class:"picContainer"},X=["src"],_={id:"messageContainer"};function O(s,e,a,o,n,i){const r=(0,t.g2)("Buttonsvue");return(0,t.uX)(),(0,t.CE)("div",$,[(0,t.Lk)("div",B,[(0,t.Lk)("img",{id:"profilePic",src:s.profilePic,onClick:e[0]||(e[0]=(...s)=>i.toProfile&&i.toProfile(...s))},null,8,X)]),(0,t.Lk)("div",{class:"matchContainer",onClick:e[1]||(e[1]=(...s)=>i.toMatches&&i.toMatches(...s))}),(0,t.Lk)("div",_,[(0,t.Lk)("div",{class:"message",onClick:e[2]||(e[2]=(...s)=>i.toMessages&&i.toMessages(...s))}),(0,t.Lk)("div",{class:"message",onClick:e[3]||(e[3]=(...s)=>i.toMessages&&i.toMessages(...s))}),(0,t.Lk)("div",{class:"message",onClick:e[4]||(e[4]=(...s)=>i.toMessages&&i.toMessages(...s))}),(0,t.Lk)("div",{class:"message",onClick:e[5]||(e[5]=(...s)=>i.toMessages&&i.toMessages(...s))})]),(0,t.Lk)("div",{class:"group-container",onClick:e[6]||(e[6]=(...s)=>i.toFeatured&&i.toFeatured(...s))},e[7]||(e[7]=[(0,t.Lk)("div",{class:"groups"},null,-1),(0,t.Lk)("div",{class:"groups"},null,-1),(0,t.Lk)("div",{class:"groups"},null,-1)])),(0,t.bF)(r,{class:"dashbutton",onClick:i.sendHome},{default:(0,t.k6)((()=>[(0,t.eW)((0,x.v_)(s.buttonText),1)])),_:1},8,["onClick"])])}var W={data:()=>({buttonText:"Back",profilePic:a(3269)}),components:{Buttonsvue:m},methods:{sendHome(){this.$router.push({name:"Home"})},toProfile(){this.$router.push({name:"Profile"})},toMessages(){this.$router.push({name:"MessengerDash"})},toMatches(){this.$router.push({name:"Matches"})},toFeatured(){this.$router.push({name:"Featured"})}}};const j=(0,l.A)(W,[["render",O]]);var H=j;const S={id:"profileContainer"},z={class:"profPicContainer"},I=["src"];function K(s,e,a,o,n,i){const r=(0,t.g2)("Buttonsvue");return(0,t.uX)(),(0,t.CE)("div",S,[(0,t.Lk)("div",z,[(0,t.Lk)("img",{id:"profilePicture",src:s.profilePic,onClick:e[0]||(e[0]=(...s)=>i.toProfile&&i.toProfile(...s))},null,8,I)]),e[1]||(e[1]=(0,t.Fv)('<div class="bioContainer"></div><div id="hobbiesContainer"><div class="hobby"></div><div class="hobby"></div><div class="hobby"></div></div><div class="pillsContainer"><div class="pill"></div><div class="pill"></div><div class="pill"></div><div class="pill"></div></div><div class="prompt"></div>',4)),(0,t.bF)(r,{class:"dashbutton",onClick:i.backToDash},{default:(0,t.k6)((()=>[(0,t.eW)((0,x.v_)(s.buttonText),1)])),_:1},8,["onClick"])])}var G={data:()=>({buttonText:"Back",profilePic:a(3269)}),components:{Buttonsvue:m},methods:{backToDash(){this.$router.push({name:"Dashboard"})},toProfile(){this.$router.push({name:"Profile"})}}};const Q=(0,l.A)(G,[["render",K]]);var R=Q;const q={id:"messengerContainer"},J={class:"detailsContainer"};function N(s,e,a,o,n,i){const r=(0,t.g2)("Buttonsvue");return(0,t.uX)(),(0,t.CE)("div",q,[(0,t.Lk)("div",J,[(0,t.bF)(r,{class:"backToDash",onClick:i.backToDash},{default:(0,t.k6)((()=>e[0]||(e[0]=[(0,t.Lk)("i",{class:"fa-solid fa-left-long fa-2xl"},null,-1)]))),_:1},8,["onClick"]),e[1]||(e[1]=(0,t.Lk)("div",{class:"icon-border"},[(0,t.Lk)("i",{class:"fa-solid fa-user"})],-1))]),e[2]||(e[2]=(0,t.Fv)('<div class="speechBubble">hi</div><div class="speechBubble"></div><div class="textField"><div class="calender-button"><i class="fa-regular fa-calendar-days"></i></div><div id="submit-button"><i class="fa-solid fa-paper-plane"></i></div></div>',3))])}var U={methods:{backToDash(){this.$router.push({name:"Dashboard"})}}};const V=(0,l.A)(U,[["render",N]]);var Y=V;const Z={class:"messageDashContainer"},ss={class:"card"},es={class:"chat-container"};function as(s,e,a,o,n,i){const r=(0,t.g2)("backToDash");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(r,{class:"button-dash"},{default:(0,t.k6)((()=>e[7]||(e[7]=[(0,t.Lk)("i",{class:"fa-solid fa-left-long fa-2xl"},null,-1)]))),_:1}),(0,t.Lk)("div",Z,[(0,t.Lk)("div",ss,[(0,t.Lk)("div",{class:"tab",onClick:e[0]||(e[0]=s=>i.toMessenger())},e[8]||(e[8]=[(0,t.Lk)("a",{href:"#"},[(0,t.Lk)("i",{class:"fa-solid fa-message fa-xs"})],-1)])),(0,t.Lk)("div",{class:"tab",onClick:e[1]||(e[1]=s=>i.toMessenger())},e[9]||(e[9]=[(0,t.Lk)("a",{href:"#"},[(0,t.Lk)("i",{class:"fa-solid fa-user fa-xs"})],-1)])),(0,t.Lk)("div",{class:"tab",onClick:e[2]||(e[2]=s=>i.toMessenger())},e[10]||(e[10]=[(0,t.Lk)("a",{href:"#"},[(0,t.Lk)("i",{class:"fa-solid fa-user fa-xs"})],-1)])),(0,t.Lk)("div",{class:"tab",onClick:e[3]||(e[3]=s=>i.toMessenger())},e[11]||(e[11]=[(0,t.Lk)("a",{href:"#"},[(0,t.Lk)("i",{class:"fa-solid fa-user fa-xs"})],-1)]))]),(0,t.Lk)("div",es,[(0,t.Lk)("div",{class:"chatMessage",onClick:e[4]||(e[4]=s=>i.toMessenger())},e[12]||(e[12]=[(0,t.Lk)("div",{class:"iconpic"},[(0,t.Lk)("i",{class:"fa-solid fa-user fa-xs"})],-1),(0,t.eW)(" hi")])),(0,t.Lk)("div",{class:"chatMessage",onClick:e[5]||(e[5]=s=>i.toMessenger())},e[13]||(e[13]=[(0,t.Lk)("div",{class:"iconpic"},[(0,t.Lk)("i",{class:"fa-solid fa-user fa-xs"})],-1),(0,t.eW)(" hi")])),(0,t.Lk)("div",{class:"chatMessage",onClick:e[6]||(e[6]=s=>i.toMessenger())},e[14]||(e[14]=[(0,t.Lk)("div",{class:"iconpic"},[(0,t.Lk)("i",{class:"fa-solid fa-user fa-xs"})],-1),(0,t.eW)(" hi")]))])])],64)}function os(s,e,a,o,n,i){const r=(0,t.g2)("Buttonsvue");return(0,t.uX)(),(0,t.Wv)(r,{class:"backToDash",onClick:i.backToDash},{default:(0,t.k6)((()=>e[0]||(e[0]=[(0,t.Lk)("i",{class:"fa-solid fa-left-long fa-2xl"},null,-1)]))),_:1},8,["onClick"])}var ts={methods:{backToDash(){this.$router.push({name:"Dashboard"})}}};const ns=(0,l.A)(ts,[["render",os]]);var is=ns,rs={components:{backToDash:is},methods:{backToDash(){this.$router.push({name:"Dashboard"})},toMessenger(){this.$router.push({name:"Messenger"})}}};const ls=(0,l.A)(rs,[["render",as]]);var cs=ls;const ds={class:"matchesContainer"};function us(s,e,a,o,n,i){const r=(0,t.g2)("Buttonsvue");return(0,t.uX)(),(0,t.CE)("div",ds,[(0,t.bF)(r,{class:"backToDash",onClick:i.backToDash},{default:(0,t.k6)((()=>e[0]||(e[0]=[(0,t.Lk)("i",{class:"fa-solid fa-left-long fa-2xl"},null,-1)]))),_:1},8,["onClick"]),e[1]||(e[1]=(0,t.Fv)('<div class="border"><a><i class="fa-regular fa-handshake fa-xl"></i></a></div><div class="matchPic"><div class="circle"><i class="fa-solid fa-arrow-left-long"></i></div><div class="circle"><i class="fa-solid fa-arrow-right-long"></i></div></div>',2))])}var hs={methods:{backToDash(){this.$router.push({name:"Dashboard"})}}};const fs=(0,l.A)(hs,[["render",us]]);var vs=fs;const ks={class:"featuredContainer"};function ps(s,e,a,o,n,i){const r=(0,t.g2)("backToDash");return(0,t.uX)(),(0,t.CE)("div",ks,[(0,t.Lk)("h3",null,[(0,t.bF)(r,{class:"dash-button"})]),e[0]||(e[0]=(0,t.Lk)("div",{class:"featuredPic"},null,-1))])}var ms={components:{backToDash:is},methods:{backToDash(){this.$router.push({name:"Dashboard"})}}};const bs=(0,l.A)(ms,[["render",ps]]);var gs=bs;const Ls=[{path:"/",name:"Home",component:A},{path:"/dashboard",name:"Dashboard",component:H},{path:"/profile",name:"Profile",component:R},{path:"/messenger",name:"Messenger",component:Y},{path:"/messengerdash",name:"MessengerDash",component:cs},{path:"/matches",name:"Matches",component:vs},{path:"/featured",name:"Featured",component:gs}],Cs=(0,M.aE)({history:(0,M.LA)("/ambii-app/"),routes:Ls});var Ms=Cs;(0,o.Ef)(C).use(Ms).mount("#app")},8041:function(s,e,a){s.exports=a.p+"img/gradientblob.97643a7a.jpg"},3269:function(s,e,a){s.exports=a.p+"img/profilepic.021aeaf0.png"}},e={};function a(o){var t=e[o];if(void 0!==t)return t.exports;var n=e[o]={exports:{}};return s[o].call(n.exports,n,n.exports,a),n.exports}a.m=s,function(){var s=[];a.O=function(e,o,t,n){if(!o){var i=1/0;for(d=0;d<s.length;d++){o=s[d][0],t=s[d][1],n=s[d][2];for(var r=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(s){return a.O[s](o[l])}))?o.splice(l--,1):(r=!1,n<i&&(i=n));if(r){s.splice(d--,1);var c=t();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=s.length;d>0&&s[d-1][2]>n;d--)s[d]=s[d-1];s[d]=[o,t,n]}}(),function(){a.d=function(s,e){for(var o in e)a.o(e,o)&&!a.o(s,o)&&Object.defineProperty(s,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){a.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)}}(),function(){a.p="/ambii-app/"}(),function(){var s={524:0};a.O.j=function(e){return 0===s[e]};var e=function(e,o){var t,n,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==s[e]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(l)var d=l(a)}for(e&&e(o);c<i.length;c++)n=i[c],a.o(s,n)&&s[n]&&s[n][0](),s[n]=0;return a.O(d)},o=self["webpackChunkpages"]=self["webpackChunkpages"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(2126)}));o=a.O(o)})();
//# sourceMappingURL=app.0bfafdc6.js.map