;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPrefix.js' */
window.__require=window.require;window.__requirejs=window.requirejs;window.__define=window.define;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'thirdparty/almond.js' */
var requirejs,require,define;(function(e){var h,a,l,m,d={},c={},s={},p={},k=Object.prototype.hasOwnProperty,i=[].slice,j=/\.js$/;function t(u,v){return k.call(u,v)}function n(x,v){var F,B,z,C,G,y,I,J,E,D,A,H=v&&v.split("/"),w=s.map,u=(w&&w["*"])||{};if(x&&x.charAt(0)==="."){if(v){x=x.split("/");G=x.length-1;if(s.nodeIdCompat&&j.test(x[G])){x[G]=x[G].replace(j,"")}x=H.slice(0,H.length-1).concat(x);for(E=0;E<x.length;E+=1){A=x[E];if(A==="."){x.splice(E,1);E-=1}else{if(A===".."){if(E===1&&(x[2]===".."||x[0]==="..")){break}else{if(E>0){x.splice(E-1,2);E-=2}}}}}x=x.join("/")}else{if(x.indexOf("./")===0){x=x.substring(2)}}}if((H||u)&&w){F=x.split("/");for(E=F.length;E>0;E-=1){B=F.slice(0,E).join("/");if(H){for(D=H.length;D>0;D-=1){z=w[H.slice(0,D).join("/")];if(z){z=z[B];if(z){C=z;y=E;break}}}}if(C){break}if(!I&&u&&u[B]){I=u[B];J=E}}if(!C&&I){C=I;y=J}if(C){F.splice(0,y,C);x=F.join("/")}}return x}function r(u,v){return function(){var w=i.call(arguments,0);if(typeof w[0]!=="string"&&w.length===1){w.push(null)}return a.apply(e,w.concat([u,v]))}}function o(u){return function(v){return n(v,u)}}function f(u){return function(v){d[u]=v}}function g(v){if(t(c,v)){var u=c[v];delete c[v];p[v]=true;h.apply(e,u)}if(!t(d,v)&&!t(p,v)){throw new Error("No "+v)}return d[v]}function q(v){var w,u=v?v.indexOf("!"):-1;if(u>-1){w=v.substring(0,u);v=v.substring(u+1,v.length)}return[w,v]}l=function(v,u){var w,y=q(v),x=y[0];v=y[1];if(x){x=n(x,u);w=g(x)}if(x){if(w&&w.normalize){v=w.normalize(v,o(u))}else{v=n(v,u)}}else{v=n(v,u);y=q(v);x=y[0];v=y[1];if(x){w=g(x)}}return{f:x?x+"!"+v:v,n:v,pr:x,p:w}};function b(u){return function(){return(s&&s.config&&s.config[u])||{}}}m={require:function(u){return r(u)},exports:function(u){var v=d[u];if(typeof v!=="undefined"){return v}else{return(d[u]={})}},module:function(u){return{id:u,uri:"",exports:d[u],config:b(u)}}};h=function(v,F,E,D){var y,C,z,u,x,A=[],w=typeof E,B;D=D||v;if(w==="undefined"||w==="function"){F=!F.length&&E.length?["require","exports","module"]:F;for(x=0;x<F.length;x+=1){u=l(F[x],D);C=u.f;if(C==="require"){A[x]=m.require(v)}else{if(C==="exports"){A[x]=m.exports(v);B=true}else{if(C==="module"){y=A[x]=m.module(v)}else{if(t(d,C)||t(c,C)||t(p,C)){A[x]=g(C)}else{if(u.p){u.p.load(u.n,r(D,true),f(C),{});A[x]=d[C]}else{throw new Error(v+" missing "+C)}}}}}}z=E?E.apply(d[v],A):undefined;if(v){if(y&&y.exports!==e&&y.exports!==d[v]){d[v]=y.exports}else{if(z!==e||!B){d[v]=z}}}}else{if(v){d[v]=E}}};requirejs=require=a=function(x,y,u,v,w){if(typeof x==="string"){if(m[x]){return m[x](y)}return g(l(x,y).f)}else{if(!x.splice){s=x;if(s.deps){a(s.deps,s.callback)}if(!y){return}if(y.splice){x=y;y=u;u=null}else{x=e}}}y=y||function(){};if(typeof u==="function"){u=v;v=w}if(v){h(e,x,y,u)}else{setTimeout(function(){h(e,x,y,u)},4)}return a};a.config=function(u){return a(u)};requirejs._defined=d;define=function(u,v,w){if(typeof u!=="string"){throw new Error("See almond README: incorrect module build, no module name")}if(!v.splice){w=v;v=[]}if(!t(d,u)&&!t(c,u)){c[u]=[u,v,w]}};define.amd={jQuery:true}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPostfix.js' */
if(window.__require){window.require=window.__require;window.requirejs=window.__requirejs;window.define=window.__define}else{delete window.define.amd};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondRegistrations.js' */
delete define.amd;define("jquery",[],function(){return jQuery});define("selectize",[],function(){return Selectize});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
