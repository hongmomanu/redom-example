!function(){'use strict';var c=35,d=46,f=0,g=1,h=2,i=function(a){var b=null,e=null,i=null,j=f,k='';for(var l=0;l<=a.length;l++){var m=a.charCodeAt(l),n=m===c,o=m===d,p=!m;n||o||p?(j===f?(l===0?(b='div'):(b=k)):j===g?(e=k):i?(i+=' '+k):(i=k),n?(j=g):o&&(j=h),k=''):(k+=a[l])}return{tag:b,id:e,className:i}},j=function(a,b){var c=i(a),d=c.tag,e=c.id,f=c.className,g=b?document.createElementNS(b,d):document.createElement(d);e&&(g.id=e);f&&(b?g.setAttribute('class',f):(g.className=f));return g},k=function(a,b,c){var d=b.__redom_lifecycle;if(!d){b.__redom_mounted=!1;return}var e=c;b.__redom_mounted&&p(b,'onunmount');while(e){var f=e.__redom_lifecycle||(e.__redom_lifecycle={}),g=!1;for(var h in d)f[h]&&(f[h]-=d[h]),f[h]&&(g=!0);g||(e.__redom_lifecycle=null);e=e.parentNode}},l=['onmount','onunmount'],m='ShadowRoot' in window,n=function(a,b,c){var d=w(a),e=w(b);b===e&&e.__redom_view&&(b=e.__redom_view);b!==e&&(e.__redom_view=b);var f=e.__redom_mounted,g=e.parentNode;f&&g!==d&&k(b,e,g);c!=null?d.insertBefore(e,w(c)):d.appendChild(e);o(b,e,d,g);return b},o=function(a,b,c,d){var e=b.__redom_lifecycle||(b.__redom_lifecycle={}),f=c===d,g=!1;for(var h=0;h<l.length;h++){var i=l[h];!f&&a!==b&&i in a&&(e[i]=(e[i]||0)+1);e[i]&&(g=!0)}if(!g){b.__redom_mounted=!0;return}var j=c,k=!1;(f||!k&&(j&&j.__redom_mounted))&&(p(b,f?'onremount':'onmount'),k=!0);if(f){return}while(j){var n=j.parentNode,o=j.__redom_lifecycle||(j.__redom_lifecycle={});for(var q in e)o[q]=(o[q]||0)+e[q];!k&&(j===document||m&&j instanceof window.ShadowRoot||n&&n.__redom_mounted)&&(p(j,f?'onremount':'onmount'),k=!0);j=n}},p=function(a,b){b==='onmount'?(a.__redom_mounted=!0):b==='onunmount'&&(a.__redom_mounted=!1);var c=a.__redom_lifecycle;if(!c){return}var d=a.__redom_view,e=0;d&&d[b]&&d[b]();for(var f in c)f&&e++;if(e){var g=a.firstChild;while(g){var h=g.nextSibling;p(g,b);g=h}}},q=function(a,b,c){var d=w(a);if(c!==undefined)d.style[b]=c;else if(x(b))d.setAttribute('style',b);else{for(var e in b)q(d,e,b[e])}},r='http://www.w3.org/1999/xlink',s=function(a,b,c){var d=w(a),e=d instanceof SVGElement;if(c!==undefined){if(b==='style')q(d,c);else if(e&&z(c))d[b]=c;else if(!e&&(b in d||z(c)))d[b]=c;else{if(e&&b==='xlink'){t(d,c);return}d.setAttribute(b,c)}}else{for(var f in b)s(d,f,b[f])}};function t(a,b){for(var c in b)a.setAttributeNS(r,c,b[c])}var u=function(a){return document.createTextNode(a)},v=function(a,b){for(var c=0;c<b.length;c++){var d=b[c];if(d!==0&&!d){continue}typeof d==='function'?d(a):x(d)||y(d)?a.appendChild(u(d)):A(w(d))?n(a,d):d.length?v(a,d):typeof d==='object'&&s(a,d)}},w=function(a){return a.nodeType&&a||!a.el&&a||w(a.el)},x=function(a){return typeof a==='string'},y=function(a){return typeof a==='number'},z=function(a){return typeof a==='function'},A=function(a){return a&&a.nodeType},B={},C=function(a){return B[a]||(B[a]=j(a))},D=function(a){var b=arguments,c=[],d=arguments.length-1;while(d-->0)c[d]=b[d+1];var e;if(x(a))e=C(a).cloneNode(!1);else if(A(a))e=a.cloneNode(!1);else{throw new Error('At least one argument required')};v(e,c);return e};D.extend=function(a){var b=arguments,c=[],d=arguments.length-1;while(d-->0)c[d]=b[d+1];var e=C(a);return D.bind.apply(D,[this,e].concat(c))};var E=D,F=function(a,b){var c=a.el||a,d=function(a){var c=a.detail,d=c.type,e=c.data;b[d]&&b[d](e)};c.addEventListener('redom',d);return{destroy:function a(){c.removeEventListener('redom',d)}}},G=function a(){this.el=E('h1','Hello 吞吞吐吐拖  ',this.subject=u('RE:DOM反反复复付付'),'!')};G.prototype.update=function b(a){var c=a.subject;this.subject.textContent=c||'RE:DOM';this.data=a};var H=function a(){this.el=E('canvas',{style:'width: 400px;height:300px'})};H.prototype.onmount=function a(){console.log('mounted WhiteBoard');paper.install(window);var b=new paper.PaperScope();b.setup(this.el)};H.prototype.draw=function a(){var b=new Tool(),c,d=new Layer();b.onMouseDown=function(a){console.log('mouse down');c=new Path();c.strokeColor=new Color({hue:Math.random()*360,saturation:1,brightness:1});c.add(a.point)};b.onMouseUp=function(a){};b.onMouseDrag=function(a){c.add(a.point)};d.addChild(c)};H.prototype.update=function b(a){};var I=function a(){var b=this;this.el=E('.app',this.hello=new G(),this.whiteboard=new H(),this.beginBtn=E('button','1212',{onclick:function(a){return b.whiteboard.draw()}}))};I.prototype.update=function b(a){var c=a.hello;this.hello.update(c)};var J=function a(){this.data={}};J.prototype.get=function b(a){if(!a){return this.data}var c=a.split('.'),d=this.data;for(var e=0;e<c.length;e++){var f=c[e];if(f in d)d=d[f];else{return}}return d};J.prototype.set=function c(a,b){var d=a.split('.'),e=this.data=Object.assign({},this.data);for(var f=0;f<d.length;f++){var g=d[f];f===d.length-1?(e[g]=b):(e=e[g]=Object.assign({},e[g]))}};var K=function(a){var b=new J(),c;F(a,{hello:function b(a){d('hello.subject',a)}});var d=function(d,e){b.set(d,e);c||(c=window.requestAnimationFrame(function(){c=!1;a.update(b.get())}))}},L=new I();K(L);n(document.body,L)}()
//# sourceMappingURL=main.js.map