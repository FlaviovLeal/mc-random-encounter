(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function g(){}function K(e){return e()}function I(){return Object.create(null)}function O(e){e.forEach(K)}function z(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let L;function M(e,t){return L||(L=document.createElement("a")),L.href=t,e===L.href}function Y(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function v(){return N(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let P;function b(e){P=e}const x=[],T=[],S=[],F=[],ne=Promise.resolve();let j=!1;function re(){j||(j=!0,ne.then(H))}function V(e){S.push(e)}const k=new Set;let C=0;function H(){const e=P;do{for(;C<x.length;){const t=x[C];C++,b(t),oe(t.$$)}for(b(null),x.length=0,C=0;T.length;)T.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];k.has(n)||(k.add(n),n())}S.length=0}while(x.length);for(;F.length;)F.pop()();j=!1,k.clear(),b(e)}function oe(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const A=new Set;let ie;function J(e,t){e&&e.i&&(A.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),ie.c.push(()=>{A.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){e&&e.c()}function Q(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||V(()=>{const i=e.$$.on_mount.map(K).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...i):O(i),e.$$.on_mount=[]}),s.forEach(V)}function R(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(x.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,r,o,s,i,d=[-1]){const h=P;b(e);const l=e.$$={fragment:null,ctx:[],props:s,update:g,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:I(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};i&&i(l.root);let $=!1;if(l.ctx=n?n(e,t.props||{},(u,f,...y)=>{const _=y.length?y[0]:f;return l.ctx&&o(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),$&&ce(e,u)),f}):[],l.update(),$=!0,O(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);l.fragment&&l.fragment.l(u),u.forEach(q)}else l.fragment&&l.fragment.c();t.intro&&J(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),H()}b(h)}class W{$destroy(){R(this,1),this.$destroy=g}$on(t,n){if(!z(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="/assets/svelte.a39f39b7.svg";function fe(e){let t,n,r,o,s;return{c(){t=a("button"),n=N("count is "),r=N(e[0])},m(i,d){G(i,t,d),c(t,n),c(t,r),o||(s=Z(t,"click",e[1]),o=!0)},p(i,[d]){d&1&&te(r,i[0])},i:g,o:g,d(i){i&&q(t),o=!1,s()}}}function ae(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class de extends W{constructor(t){super(),U(this,t,ae,fe,D,{})}}function me(e){let t,n,r,o,s,i,d,h,l,$,u,f,y,_,B,w,E;return f=new de({}),{c(){t=a("main"),n=a("div"),r=a("img"),s=v(),i=a("img"),h=v(),l=a("h1"),l.textContent="Vite + Svelte",$=v(),u=a("div"),le(f.$$.fragment),y=v(),_=a("p"),_.textContent="Check out the official Svelte app framework powered by Vite!",B=v(),w=a("p"),w.textContent="Click on the Vite and Svelte logos to learn more",M(r.src,o="/vite.svg")||m(r,"src",o),m(r,"class","logo svelte-c9fbf7"),m(r,"alt","Vite Logo"),M(i.src,d=ue)||m(i,"src",d),m(i,"class","logo svelte svelte-c9fbf7"),m(i,"alt","Svelte Logo"),m(u,"class","card"),m(w,"class","read-the-docs svelte-c9fbf7")},m(p,X){G(p,t,X),c(t,n),c(n,r),c(n,s),c(n,i),c(t,h),c(t,l),c(t,$),c(t,u),Q(f,u,null),c(t,y),c(t,_),c(t,B),c(t,w),E=!0},p:g,i(p){E||(J(f.$$.fragment,p),E=!0)},o(p){se(f.$$.fragment,p),E=!1},d(p){p&&q(t),R(f)}}}class he extends W{constructor(t){super(),U(this,t,null,me,D,{})}}new he({target:document.getElementById("app")});