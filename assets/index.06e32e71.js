(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function V(){}function ke(e){return e()}function ae(){return Object.create(null)}function O(e){e.forEach(ke)}function Ge(e){return typeof e=="function"}function Ee(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function je(e){return Object.keys(e).length===0}function a(e,n){e.appendChild(n)}function G(e,n,t){e.insertBefore(n,t||null)}function v(e){e.parentNode.removeChild(e)}function Te(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function S(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function T(){return C(" ")}function Re(){return C("")}function B(e,n,t,i){return e.addEventListener(n,t,i),()=>e.removeEventListener(n,t,i)}function W(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function ce(e){return e===""?null:+e}function De(e){return Array.from(e.childNodes)}function N(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function z(e,n){e.value=n==null?"":n}let le;function L(e){le=e}const x=[],me=[],q=[],he=[],He=Promise.resolve();let ne=!1;function Ae(){ne||(ne=!0,He.then(Ce))}function te(e){q.push(e)}const X=new Set;let Z=0;function Ce(){const e=le;do{for(;Z<x.length;){const n=x[Z];Z++,L(n),We(n.$$)}for(L(null),x.length=0,Z=0;me.length;)me.pop()();for(let n=0;n<q.length;n+=1){const t=q[n];X.has(t)||(X.add(t),t())}q.length=0}while(x.length);for(;he.length;)he.pop()();ne=!1,X.clear(),L(e)}function We(e){if(e.fragment!==null){e.update(),O(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(te)}}const $e=new Set;function Be(e,n){e&&e.i&&($e.delete(e),e.i(n))}function Ne(e,n,t,i){const{fragment:o,after_update:u}=e.$$;o&&o.m(n,t),i||te(()=>{const f=e.$$.on_mount.map(ke).filter(Ge);e.$$.on_destroy?e.$$.on_destroy.push(...f):O(f),e.$$.on_mount=[]}),u.forEach(te)}function Ie(e,n){const t=e.$$;t.fragment!==null&&(O(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function Pe(e,n){e.$$.dirty[0]===-1&&(x.push(e),Ae(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Ke(e,n,t,i,o,u,f,s=[-1]){const w=le;L(e);const d=e.$$={fragment:null,ctx:[],props:u,update:V,not_equal:o,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(w?w.$$.context:[])),callbacks:ae(),dirty:s,skip_bound:!1,root:n.target||w.$$.root};f&&f(d.root);let c=!1;if(d.ctx=t?t(e,n.props||{},(_,y,...b)=>{const j=b.length?b[0]:y;return d.ctx&&o(d.ctx[_],d.ctx[_]=j)&&(!d.skip_bound&&d.bound[_]&&d.bound[_](j),c&&Pe(e,_)),y}):[],d.update(),c=!0,O(d.before_update),d.fragment=i?i(d.ctx):!1,n.target){if(n.hydrate){const _=De(n.target);d.fragment&&d.fragment.l(_),_.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&Be(e.$$.fragment),Ne(e,n.target,n.anchor,n.customElement),Ce()}L(w)}class Oe{$destroy(){Ie(this,1),this.$destroy=V}$on(n,t){if(!Ge(t))return V;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(t),()=>{const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}$set(n){this.$$set&&!je(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}class l{constructor(n,t,i,o,u,f){this.type=n,this.set=t,this.name=i,this.difficulty=o,this.difficultyMultiplayer=u,this.difficultySolo=f,this.enabled=!0}getDifficulty(n){return this.difficulty!==void 0?this.difficulty:n?this.difficultySolo:this.difficultyMultiplayer}}function Y(e,n){return e.filter(t=>t.type===n)}const $=[new l("villain","Core Set","Rhino",void 0,6,0),new l("villain","Core Set","Klaw",void 0,10,3),new l("villain","Core Set","Ultron",void 0,9,12),new l("villain","Wrecking Crew","Wrecking Crew",void 0,-2,2),new l("villain","Green Goblin","Risky Business",void 0,0,-1),new l("villain","Green Goblin","Mutagen Formula",void 0,11,10),new l("villain","Rise of Red Skull","Crossbones",void 0,3,0),new l("villain","Rise of Red Skull","Absorbing Man",void 0,2,-1),new l("villain","Rise of Red Skull","Taskmaster",void 0,4,5),new l("villain","Rise of Red Skull","Zola",void 0,14,9),new l("villain","Rise of Red Skull","Red Skull",void 0,14,16),new l("villain","Kang","Kang",void 0,10,9),new l("villain","Galaxy's Most Wanted","Brotherhood of Badoon",void 0,-1,6),new l("villain","Galaxy's Most Wanted","Infiltrate the Museum",void 0,10,8),new l("villain","Galaxy's Most Wanted","Escape the Museum",void 0,8,10),new l("villain","Galaxy's Most Wanted","Nebula",void 0,13,16),new l("villain","Galaxy's Most Wanted","Ronan the Accuser",void 0,23,22),new l("villain","Galaxy's Most Wanted","Ebony Maw",void 0,5,9),new l("villain","Galaxy's Most Wanted","Tower Defense",void 0,-2,-1),new l("villain","Galaxy's Most Wanted","Thanos",void 0,3,4),new l("villain","Galaxy's Most Wanted","Hela",void 0,5,3),new l("villain","Galaxy's Most Wanted","Loki",void 0,13,13),new l("villain","The Hood","The Hood",void 0,6,6),new l("villain","Sinister Motives","Sandman",void 0,3,0),new l("villain","Sinister Motives","Venom",void 0,12,1),new l("villain","Sinister Motives","Mysterio",void 0,-2,-3),new l("villain","Sinister Motives","The Sinister Six",void 0,6,2),new l("villain","Sinister Motives","Venom Goblin",void 0,12,15),new l("module","Core Set","Bomb Scare",-3),new l("module","Core Set","Masters of Evil",1),new l("module","Core Set","Under Attack",1),new l("module","Core Set","Legions of Hydra",4),new l("module","Core Set","Doomsday Chair",3),new l("module","Green Goblin","Goblin Gimmicks",-4),new l("module","Green Goblin","Mess of Things",0),new l("module","Green Goblin","Power Drain",-3),new l("module","Green Goblin","Running Interference",-1),new l("module","Green Goblin","Kree Fanatic",8),new l("module","Rise of Red Skull","Experimental Weapons",-2),new l("module","Rise of Red Skull","Hydra Assault",-2),new l("module","Rise of Red Skull","Hydra Patrol",-1),new l("module","Rise of Red Skull","Weapon Master",0),new l("module","Kang","Temporal",-3),new l("module","Kang","Master of Time",0),new l("module","Kang","Anachronauts",1),new l("module","Galaxy's Most Wanted","Band of Badoon",-3),new l("module","Galaxy's Most Wanted","Menagerie Medley",3),new l("module","Galaxy's Most Wanted","Galactic Artifacts",0),new l("module","Galaxy's Most Wanted","Space Pirates",-1),new l("module","Galaxy's Most Wanted","Kree Militants",-3),new l("module","Galaxy's Most Wanted","Ship Command",0),new l("module","Galaxy's Most Wanted","Badoon Headhunter",-2),new l("module","Mad Titan's Shadow","Black Order",1),new l("module","Mad Titan's Shadow","Armies of Titan",-3),new l("module","Mad Titan's Shadow","Children of Thanos",3),new l("module","Mad Titan's Shadow","Legions of Hel",-2),new l("module","Mad Titan's Shadow","Frost Giants",3),new l("module","Mad Titan's Shadow","Enchantress",6),new l("module","Mad Titan's Shadow","Infinity Gauntlet",7),new l("module","The Hood","Beasty Boys",1),new l("module","The Hood","Brothers Grimm",1),new l("module","The Hood","Crossfire's Crew",2),new l("module","The Hood","Mister Hyde",-3),new l("module","The Hood","Ransacked Armory",-3),new l("module","The Hood","Sinister Syndicate",0),new l("module","The Hood","State of Emergency",0),new l("module","The Hood","Streets of Mayhem",2),new l("module","The Hood","Wrecking Crew",2),new l("module","Sinister Motives","City in Chaos",4),new l("module","Sinister Motives","Down to Earth",-2),new l("module","Sinister Motives","Goblin Gear",5),new l("module","Sinister Motives","Guerrilla Tactics",2),new l("module","Sinister Motives","Osborn Tech",0),new l("module","Sinister Motives","Personal Nightmare",2),new l("module","Sinister Motives","Symbiotic Strength",4),new l("module","Sinister Motives","Whispers of Paranoia",4),new l("module","Hero Packs","Armadillo",2),new l("module","Hero Packs","Zzzax",-1),new l("adjustment","Core Set","Standard",0),new l("adjustment","Core Set","Expert",5),new l("adjustment","Core Set","Heroic (per level)",9),new l("adjustment","Core Set","Skirmish Level 1",-16),new l("adjustment","Core Set","Skirmish Level 2",-6),new l("adjustment","The Hood","Standard II",7),new l("adjustment","The Hood","Expert II",14)];class xe{constructor(){this.villain=void 0,this.module=[],this.adjustment=void 0}calc_difficulty(n){return this.villain.getDifficulty(n)+this.module.reduce((t,i)=>t+i.getDifficulty(n),0)+this.adjustment.getDifficulty(n)}addVillain(n){this.villain=n}addModule(n){this.module.push(n)}addAdjustment(n){this.adjustment=n}}function ee(e,n=void 0,t=void 0,i){let o=[];if(n===void 0||t===void 0?o=e:o.map(s=>s.getDifficulty(i)>=n-t&&s.getDifficulty(i)<=n+t),o.length>0)return o[Math.floor(Math.random()*o.length)];let u=Math.abs(n-e[0].getDifficulty(i)),f=e[0];for(let s=0;s<e.length;s++)Math.abs(n-e[s].getDifficulty(i))<u&&(f=e[s],u=n-e[s].getDifficulty(i));return f}function Le(e){const n=e.difficulty,t=e.moduleNumber,i=e.solo,o=Y($,"modules"),u=Y($,"adjustments"),f=Y($,"villain"),s=new xe;let w=u[0].getDifficulty(i),d=u[0].getDifficulty(i);for(let y=0;y<u.length;y++){const b=u[y];b.getDifficulty(i)>w&&(w=b.getDifficulty(i)),b.getDifficulty(i)<d&&(d=b.getDifficulty(i))}let c=f.filter(y=>y.getDifficulty(i)<=n+w&&y.getDifficulty(i)>=n+d);c=c.filter(y=>e.solo===y.solo),s.addVillain(ee(c));for(let y=0;y<Math.round(t*2/3);y++){const b=Math.floor(Math.random()*o.length);s.addModule(o[b]),o.splice(b,1)}let _=n-s.calc_difficulty();s.addAdjustment(ee(u,_,2));for(let y=0;y<Math.round(t*1/3);y++){_=n-s.calc_difficulty();const b=ee(o,_,2),j=o.findIndex(g=>g.name===b.name);s.addModule(b),o.splice(j,1)}return s}function Ve(e){return e<=4?"Beginner":e<=10?"Standard!":e<=16?"Hard!!":e<=22?"Heroic!!!":"Impossible!!!!"}const pe=[...new Set($.map(e=>e.set))].map(e=>({name:e,enabled:!0}));function we(e){return $.filter(n=>e===n.set)}function _e(e,n){for(let t=0;t<$.length;t++)$[t].set===e&&($[t].enabled=n)}function ye(e,n,t){const i=e.slice();return i[16]=n[t],i}function be(e,n,t){const i=e.slice();return i[19]=n[t],i[20]=n,i[21]=t,i}function Fe(e){let n;return{c(){n=C("Multiplayer")},m(t,i){G(t,n,i)},d(t){t&&v(n)}}}function Ue(e){let n;return{c(){n=C("Solo")},m(t,i){G(t,n,i)},d(t){t&&v(n)}}}function ge(e){let n=e[19].name+"",t,i,o,u,f,s;function w(){e[15].call(o,e[20],e[21])}return{c(){t=C(n),i=T(),o=S("input"),u=S("br"),W(o,"type","checkbox")},m(d,c){G(d,t,c),G(d,i,c),G(d,o,c),o.checked=e[19].enabled,G(d,u,c),f||(s=B(o,"change",w),f=!0)},p(d,c){e=d,c&6&&n!==(n=e[19].name+"")&&N(t,n),c&6&&(o.checked=e[19].enabled)},d(d){d&&v(t),d&&v(i),d&&v(o),d&&v(u),f=!1,s()}}}function Me(e){let n,t=e[16].name+"",i,o,u,f,s,w,d,c,_,y;function b(){return e[13](e[16])}function j(){return e[14](e[16])}let g=e[2](e[16].name),m=[];for(let r=0;r<g.length;r+=1)m[r]=ge(be(e,g,r));return{c(){n=S("b"),i=C(t),o=T(),u=S("button"),u.textContent="select all",f=T(),s=S("button"),s.textContent="select none ",w=S("br"),d=T();for(let r=0;r<m.length;r+=1)m[r].c();c=Re()},m(r,k){G(r,n,k),a(n,i),G(r,o,k),G(r,u,k),G(r,f,k),G(r,s,k),G(r,w,k),G(r,d,k);for(let M=0;M<m.length;M+=1)m[M].m(r,k);G(r,c,k),_||(y=[B(u,"click",b),B(s,"click",j)],_=!0)},p(r,k){if(e=r,k&2&&t!==(t=e[16].name+"")&&N(i,t),k&6){g=e[2](e[16].name);let M;for(M=0;M<g.length;M+=1){const h=be(e,g,M);m[M]?m[M].p(h,k):(m[M]=ge(h),m[M].c(),m[M].m(c.parentNode,c))}for(;M<m.length;M+=1)m[M].d(1);m.length=g.length}},d(r){r&&v(n),r&&v(o),r&&v(u),r&&v(f),r&&v(s),r&&v(w),r&&v(d),Te(m,r),r&&v(c),_=!1,O(y)}}}function Se(e){let n,t,i=e[6].villain.name+e[6].villain.solo+"",o,u,f,s,w=e[6].module.map(ve).join(", ")+"",d,c,_,y,b=e[6].adjustment.name+"",j,g,m,r,k=e[6].calc_difficulty()+"",M;return{c(){n=S("p"),t=C("Enconter: "),o=C(i),u=T(),f=S("p"),s=C("Modules: "),d=C(w),c=T(),_=S("p"),y=C("Adjustment: "),j=C(b),g=T(),m=S("p"),r=C("Enconter Difficulty: "),M=C(k)},m(h,R){G(h,n,R),a(n,t),a(n,o),G(h,u,R),G(h,f,R),a(f,s),a(f,d),G(h,c,R),G(h,_,R),a(_,y),a(_,j),G(h,g,R),G(h,m,R),a(m,r),a(m,M)},p(h,R){R&64&&i!==(i=h[6].villain.name+h[6].villain.solo+"")&&N(o,i),R&64&&w!==(w=h[6].module.map(ve).join(", ")+"")&&N(d,w),R&64&&b!==(b=h[6].adjustment.name+"")&&N(j,b),R&64&&k!==(k=h[6].calc_difficulty()+"")&&N(M,k)},d(h){h&&v(n),h&&v(u),h&&v(f),h&&v(c),h&&v(_),h&&v(g),h&&v(m)}}}function ze(e){let n,t,i,o,u,f,s,w,d,c,_,y,b,j,g,m,r,k,M,h,R,J,ie,P,oe,F,ue,de,Q,re;function se(p,A){return p[7]?Ue:Fe}let U=se(e),I=U(e),K=e[1],D=[];for(let p=0;p<K.length;p+=1)D[p]=Me(ye(e,K,p));let H=e[5]&&Se(e);return{c(){n=S("main"),t=S("div"),i=S("p"),i.textContent="Dificult setting",o=T(),u=S("input"),f=T(),s=S("p"),w=C(e[0]),d=T(),c=S("p"),_=C(e[8]),y=T(),b=S("p"),b.textContent="Module Number",j=T(),g=S("input"),m=T(),r=S("p"),k=C(e[4]),M=T(),h=S("button"),h.textContent="Generate Enconter",R=T(),J=S("p"),J.textContent="Number of players",ie=T(),P=S("input"),oe=T(),F=S("p"),I.c(),ue=T();for(let p=0;p<D.length;p+=1)D[p].c();de=T(),H&&H.c(),W(u,"type","range"),W(u,"min","1"),W(u,"max","30"),W(u,"class","slider"),W(u,"id","myRange"),W(g,"type","range"),W(g,"min","1"),W(g,"max","10"),W(g,"class","slider"),W(g,"id","myRange"),W(P,"type","checkbox")},m(p,A){G(p,n,A),a(n,t),a(t,i),a(t,o),a(t,u),z(u,e[0]),a(t,f),a(t,s),a(s,w),a(t,d),a(t,c),a(c,_),a(t,y),a(t,b),a(t,j),a(t,g),z(g,e[4]),a(t,m),a(t,r),a(r,k),a(t,M),a(t,h),a(t,R),a(t,J),a(t,ie),a(t,P),P.checked=e[7],a(t,oe),a(t,F),I.m(F,null),a(t,ue);for(let E=0;E<D.length;E+=1)D[E].m(t,null);a(n,de),H&&H.m(n,null),Q||(re=[B(u,"change",e[10]),B(u,"input",e[10]),B(g,"change",e[11]),B(g,"input",e[11]),B(h,"click",e[9]),B(P,"change",e[12])],Q=!0)},p(p,[A]){if(A&1&&z(u,p[0]),A&1&&N(w,p[0]),A&256&&N(_,p[8]),A&16&&z(g,p[4]),A&16&&N(k,p[4]),A&128&&(P.checked=p[7]),U!==(U=se(p))&&(I.d(1),I=U(p),I&&(I.c(),I.m(F,null))),A&14){K=p[1];let E;for(E=0;E<K.length;E+=1){const fe=ye(p,K,E);D[E]?D[E].p(fe,A):(D[E]=Me(fe),D[E].c(),D[E].m(t,null))}for(;E<D.length;E+=1)D[E].d(1);D.length=K.length}p[5]?H?H.p(p,A):(H=Se(p),H.c(),H.m(n,null)):H&&(H.d(1),H=null)},i:V,o:V,d(p){p&&v(n),I.d(),Te(D,p),H&&H.d(),Q=!1,O(re)}}}const ve=e=>e.name;function Ze(e,n,t){let i,o=10,u=2,f=!1,s,w=!0;function d(){t(6,s=Le({difficulty:o,moduleNumber:u,solo:w})),t(5,f=!0)}function c(){o=ce(this.value),t(0,o)}function _(){u=ce(this.value),t(4,u)}function y(){w=this.checked,t(7,w)}const b=m=>{_e(m.name,!0),t(3,$)},j=m=>{_e(m.name,!1),t(3,$)};function g(m,r){m[r].enabled=this.checked,t(2,we),t(1,pe)}return e.$$.update=()=>{e.$$.dirty&1&&t(8,i=Ve(o))},[o,pe,we,$,u,f,s,w,i,d,c,_,y,b,j,g]}class qe extends Oe{constructor(n){super(),Ke(this,n,Ze,ze,Ee,{})}}new qe({target:document.getElementById("app")});