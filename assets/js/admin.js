!function(a,b,c){function d(a,b,c,d){for(var e=[],f=0;f<a.length;f++){var g=a[f];if(g){var h=tinycolor(g),i=h.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";i+=tinycolor.equals(b,g)?" sp-thumb-active":"";var j=h.toString(d||"rgb"),k=r?"background-color:"+h.toRgbString():"filter:"+h.toFilter();e.push('<span title="'+j+'" data-color="'+h.toRgbString()+'" class="'+i+'"><span class="sp-thumb-inner" style="'+k+';" /></span>')}else{var l="sp-clear-display";e.push('<span title="No Color Selected" data-color="" style="background-color:transparent;" class="'+l+'"></span>')}}return"<div class='sp-cf "+c+"'>"+e.join("")+"</div>"}function e(){for(var a=0;a<p.length;a++)p[a]&&p[a].hide()}function f(a,c){var d=b.extend({},o,a);return d.callbacks={move:l(d.move,c),change:l(d.change,c),show:l(d.show,c),hide:l(d.hide,c),beforeShow:l(d.beforeShow,c)},d}function g(g,j){function l(){if(T.showPaletteOnly&&(T.showPalette=!0),T.palette){lb=T.palette.slice(0),mb=b.isArray(lb[0])?lb:[lb],nb={};for(var a=0;a<mb.length;a++)for(var c=0;c<mb[a].length;c++){var d=tinycolor(mb[a][c]).toRgbString();nb[d]=!0}}wb.toggleClass("sp-flat",U),wb.toggleClass("sp-input-disabled",!T.showInput),wb.toggleClass("sp-alpha-enabled",T.showAlpha),wb.toggleClass("sp-clear-enabled",Wb),wb.toggleClass("sp-buttons-disabled",!T.showButtons),wb.toggleClass("sp-palette-disabled",!T.showPalette),wb.toggleClass("sp-palette-only",T.showPaletteOnly),wb.toggleClass("sp-initial-disabled",!T.showInitial),wb.addClass(T.className).addClass(T.containerClassName),O()}function o(){function a(a){return a.data&&a.data.ignore?(H(b(this).data("color")),K()):(H(b(this).data("color")),K(),N(!0),F()),!1}if(q&&wb.find("*:not(input)").attr("unselectable","on"),l(),Mb&&ub.after(Nb).hide(),Wb||Ib.hide(),U)ub.after(wb).hide();else{var c="parent"===T.appendTo?ub.parent():b(T.appendTo);1!==c.length&&(c=b("body")),c.append(wb)}v(),Ob.bind("click.spectrum touchstart.spectrum",function(a){vb||D(),a.stopPropagation(),b(a.target).is("input")||a.preventDefault()}),(ub.is(":disabled")||T.disabled===!0)&&S(),wb.click(k),Eb.change(C),Eb.bind("paste",function(){setTimeout(C,1)}),Eb.keydown(function(a){13==a.keyCode&&C()}),Hb.text(T.cancelText),Hb.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),F("cancel")}),Ib.attr("title",T.clearText),Ib.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),Vb=!0,K(),U&&N(!0)}),Jb.text(T.chooseText),Jb.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),J()&&(N(!0),F())}),m(Cb,function(a,b,c){kb=a/eb,Vb=!1,c.shiftKey&&(kb=Math.round(10*kb)/10),K()},A,B),m(zb,function(a,b){hb=parseFloat(b/cb),Vb=!1,T.showAlpha||(kb=1),K()},A,B),m(xb,function(a,b,c){if(c.shiftKey){if(!sb){var d=ib*_,e=ab-jb*ab,f=Math.abs(a-d)>Math.abs(b-e);sb=f?"x":"y"}}else sb=null;var g=!sb||"x"===sb,h=!sb||"y"===sb;g&&(ib=parseFloat(a/_)),h&&(jb=parseFloat((ab-b)/ab)),Vb=!1,T.showAlpha||(kb=1),K()},A,B),Qb?(H(Qb),L(),Tb=Sb||tinycolor(Qb).format,w(Qb)):L(),U&&E();var d=q?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Fb.delegate(".sp-thumb-el",d,a),Gb.delegate(".sp-thumb-el:nth-child(1)",d,{ignore:!0},a)}function v(){if(W&&a.localStorage){try{var c=a.localStorage[W].split(",#");c.length>1&&(delete a.localStorage[W],b.each(c,function(a,b){w(b)}))}catch(d){}try{ob=a.localStorage[W].split(";")}catch(d){}}}function w(c){if(V){var d=tinycolor(c).toRgbString();if(!nb[d]&&-1===b.inArray(d,ob))for(ob.push(d);ob.length>pb;)ob.shift();if(W&&a.localStorage)try{a.localStorage[W]=ob.join(";")}catch(e){}}}function x(){var a=[];if(T.showPalette)for(i=0;i<ob.length;i++){var b=tinycolor(ob[i]).toRgbString();nb[b]||a.push(ob[i])}return a.reverse().slice(0,T.maxSelectionSize)}function y(){var a=I(),c=b.map(mb,function(b,c){return d(b,a,"sp-palette-row sp-palette-row-"+c,T.preferredFormat)});v(),ob&&c.push(d(x(),a,"sp-palette-row sp-palette-row-selection",T.preferredFormat)),Fb.html(c.join(""))}function z(){if(T.showInitial){var a=Rb,b=I();Gb.html(d([a,b],b,"sp-palette-row-initial",T.preferredFormat))}}function A(){(0>=ab||0>=_||0>=cb)&&O(),wb.addClass(qb),sb=null,ub.trigger("dragstart.spectrum",[I()])}function B(){wb.removeClass(qb),ub.trigger("dragstop.spectrum",[I()])}function C(){var a=Eb.val();if(null!==a&&""!==a||!Wb){var b=tinycolor(a);b.ok?(H(b),N(!0)):Eb.addClass("sp-validation-error")}else H(null),N(!0)}function D(){$?F():E()}function E(){var c=b.Event("beforeShow.spectrum");return $?void O():(ub.trigger(c,[I()]),void(Y.beforeShow(I())===!1||c.isDefaultPrevented()||(e(),$=!0,b(tb).bind("click.spectrum",F),b(a).bind("resize.spectrum",Z),Nb.addClass("sp-active"),wb.removeClass("sp-hidden"),O(),L(),Rb=I(),z(),Y.show(Rb),ub.trigger("show.spectrum",[Rb]))))}function F(c){if((!c||"click"!=c.type||2!=c.button)&&$&&!U){$=!1,b(tb).unbind("click.spectrum",F),b(a).unbind("resize.spectrum",Z),Nb.removeClass("sp-active"),wb.addClass("sp-hidden");var d=!tinycolor.equals(I(),Rb);d&&(Ub&&"cancel"!==c?N(!0):G()),Y.hide(I()),ub.trigger("hide.spectrum",[I()])}}function G(){H(Rb,!0)}function H(a,b){if(tinycolor.equals(a,I()))return void L();var c,d;!a&&Wb?Vb=!0:(Vb=!1,c=tinycolor(a),d=c.toHsv(),hb=d.h%360/360,ib=d.s,jb=d.v,kb=d.a),L(),c&&c.ok&&!b&&(Tb=Sb||c.format)}function I(a){return a=a||{},Wb&&Vb?null:tinycolor.fromRatio({h:hb,s:ib,v:jb,a:Math.round(100*kb)/100},{format:a.format||Tb})}function J(){return!Eb.hasClass("sp-validation-error")}function K(){L(),Y.move(I()),ub.trigger("move.spectrum",[I()])}function L(){Eb.removeClass("sp-validation-error"),M();var a=tinycolor.fromRatio({h:hb,s:1,v:1});xb.css("background-color",a.toHexString());var b=Tb;1>kb&&(0!==kb||"name"!==b)&&("hex"===b||"hex3"===b||"hex6"===b||"name"===b)&&(b="rgb");var c=I({format:b}),d="";if(Pb.removeClass("sp-clear-display"),Pb.css("background-color","transparent"),!c&&Wb)Pb.addClass("sp-clear-display");else{var e=c.toHexString(),f=c.toRgbString();if(r||1===c.alpha?Pb.css("background-color",f):(Pb.css("background-color","transparent"),Pb.css("filter",c.toFilter())),T.showAlpha){var g=c.toRgb();g.a=0;var h=tinycolor(g).toRgbString(),i="linear-gradient(left, "+h+", "+e+")";q?Bb.css("filter",tinycolor(h).toFilter({gradientType:1},e)):(Bb.css("background","-webkit-"+i),Bb.css("background","-moz-"+i),Bb.css("background","-ms-"+i),Bb.css("background","linear-gradient(to right, "+h+", "+e+")"))}d=c.toString(b)}T.showInput&&Eb.val(d),T.showPalette&&y(),z()}function M(){var a=ib,b=jb;if(Wb&&Vb)Db.hide(),Ab.hide(),yb.hide();else{Db.show(),Ab.show(),yb.show();var c=a*_,d=ab-b*ab;c=Math.max(-bb,Math.min(_-bb,c-bb)),d=Math.max(-bb,Math.min(ab-bb,d-bb)),yb.css({top:d+"px",left:c+"px"});var e=kb*eb;Db.css({left:e-fb/2+"px"});var f=hb*cb;Ab.css({top:f-gb+"px"})}}function N(a){var b=I(),c="",d=!tinycolor.equals(b,Rb);b&&(c=b.toString(Tb),w(b)),Kb&&ub.val(c),Rb=b,a&&d&&(Y.change(b),ub.trigger("change",[b]))}function O(){_=xb.width(),ab=xb.height(),bb=yb.height(),db=zb.width(),cb=zb.height(),gb=Ab.height(),eb=Cb.width(),fb=Db.width(),U||(wb.css("position","absolute"),wb.offset(h(wb,Ob))),M(),T.showPalette&&y(),ub.trigger("reflow.spectrum")}function P(){ub.show(),Ob.unbind("click.spectrum touchstart.spectrum"),wb.remove(),Nb.remove(),p[Yb.id]=null}function Q(a,d){return a===c?b.extend({},T):d===c?T[a]:(T[a]=d,void l())}function R(){vb=!1,ub.attr("disabled",!1),Ob.removeClass("sp-disabled")}function S(){F(),vb=!0,ub.attr("disabled",!0),Ob.addClass("sp-disabled")}var T=f(j,g),U=T.flat,V=T.showSelectionPalette,W=T.localStorageKey,X=T.theme,Y=T.callbacks,Z=n(O,10),$=!1,_=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=1,lb=[],mb=[],nb={},ob=T.selectionPalette.slice(0),pb=T.maxSelectionSize,qb="sp-dragging",rb=T.inputText,sb=null,tb=g.ownerDocument,ub=(tb.body,b(g)),vb=!1,wb=b(u,tb).addClass(X),xb=wb.find(".sp-color"),yb=wb.find(".sp-dragger"),zb=wb.find(".sp-hue"),Ab=wb.find(".sp-slider"),Bb=wb.find(".sp-alpha-inner"),Cb=wb.find(".sp-alpha"),Db=wb.find(".sp-alpha-handle"),Eb=wb.find(".sp-input"),Fb=wb.find(".sp-palette"),Gb=wb.find(".sp-initial"),Hb=wb.find(".sp-cancel"),Ib=wb.find(".sp-clear"),Jb=wb.find(".sp-choose"),Kb=ub.is("input"),Lb=Kb&&s&&"color"===ub.attr("type"),Mb=Kb&&!U,Nb=Mb?b(t).addClass(X).addClass(T.className).addClass(T.replacerClassName):b([]),Ob=Mb?Nb:ub,Pb=Nb.find(".sp-preview-inner"),Qb=T.color||Kb&&ub.val(),Rb=!1,Sb=T.preferredFormat,Tb=Sb,Ub=!T.showButtons||T.clickoutFiresChange,Vb=!Qb,Wb=T.allowEmpty&&!Lb;if(""!==rb){var Xb=b(Ob).find("div.sp-dd");Xb.text(rb)}o();var Yb={show:E,hide:F,toggle:D,reflow:O,option:Q,enable:R,disable:S,set:function(a){H(a),N()},get:I,destroy:P,container:wb};return Yb.id=p.push(Yb)-1,Yb}function h(a,c){var d=0,e=a.outerWidth(),f=a.outerHeight(),g=c.outerHeight(),h=a[0].ownerDocument,i=h.documentElement,j=i.clientWidth+b(h).scrollLeft(),k=i.clientHeight+b(h).scrollTop(),l=c.offset();return l.top+=g,l.left-=Math.min(l.left,l.left+e>j&&j>e?Math.abs(l.left+e-j):0),l.top-=Math.min(l.top,l.top+f>k&&k>f?Math.abs(f+g-d):d),l}function j(){}function k(a){a.stopPropagation()}function l(a,b){var c=Array.prototype.slice,d=c.call(arguments,2);return function(){return a.apply(b,d.concat(c.call(arguments)))}}function m(c,d,e,f){function g(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.returnValue=!1}function h(a){if(l){if(q&&document.documentMode<9&&!a.button)return j();var b=a.originalEvent.touches,e=b?b[0].pageX:a.pageX,f=b?b[0].pageY:a.pageY,h=Math.max(0,Math.min(e-m.left,o)),i=Math.max(0,Math.min(f-m.top,n));p&&g(a),d.apply(c,[h,i,a])}}function i(a){{var d=a.which?3==a.which:2==a.button;a.originalEvent.touches}d||l||e.apply(c,arguments)!==!1&&(l=!0,n=b(c).height(),o=b(c).width(),m=b(c).offset(),b(k).bind(r),b(k.body).addClass("sp-dragging"),p||h(a),g(a))}function j(){l&&(b(k).unbind(r),b(k.body).removeClass("sp-dragging"),f.apply(c,arguments)),l=!1}d=d||function(){},e=e||function(){},f=f||function(){};var k=c.ownerDocument||document,l=!1,m={},n=0,o=0,p="ontouchstart"in a,r={};r.selectstart=g,r.dragstart=g,r["touchmove mousemove"]=h,r["touchend mouseup"]=j,b(c).bind("touchstart mousedown",i)}function n(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,a.apply(e,f)};c&&clearTimeout(d),(c||!d)&&(d=setTimeout(g,b))}}var o={beforeShow:j,move:j,change:j,show:j,hide:j,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!1,showInitial:!1,showPalette:!1,showPaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",clearText:"Clear Color Selection",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,inputText:""},p=[],q=!!/msie/i.exec(a.navigator.userAgent),r=function(){function a(a,b){return!!~(""+a).indexOf(b)}var b=document.createElement("div"),c=b.style;return c.cssText="background-color:rgba(0,0,0,.5)",a(c.backgroundColor,"rgba")||a(c.backgroundColor,"hsla")}(),s=function(){var a=b("<input type='color' value='!' />")[0];return"color"===a.type&&"!"!==a.value}(),t=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),u=function(){var a="";if(q)for(var b=1;6>=b;b++)a+="<div class='sp-"+b+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",a,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),v="spectrum.id";b.fn.spectrum=function(a){if("string"==typeof a){var c=this,d=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=p[b(this).data(v)];if(e){var f=e[a];if(!f)throw new Error("Spectrum: no such method: '"+a+"'");"get"==a?c=e.get():"container"==a?c=e.container:"option"==a?c=e.option.apply(e,d):"destroy"==a?(e.destroy(),b(this).removeData(v)):f.apply(e,d)}}),c}return this.spectrum("destroy").each(function(){var c=b.extend({},a,b(this).data()),d=g(this,c);b(this).data(v,d.id)})},b.fn.spectrum.load=!0,b.fn.spectrum.loadOpts={},b.fn.spectrum.draggable=m,b.fn.spectrum.defaults=o,b.spectrum={},b.spectrum.localization={},b.spectrum.palettes={},b.fn.spectrum.processNativeColorInputs=function(){s||b("input[type=color]").spectrum({preferredFormat:"hex6"})},function(){function b(a,d){if(a=a?a:"",d=d||{},"object"==typeof a&&a.hasOwnProperty("_tc_id"))return a;var f=c(a),h=f.r,k=f.g,n=f.b,o=f.a,p=A(100*o)/100,q=d.format||f.format;return 1>h&&(h=A(h)),1>k&&(k=A(k)),1>n&&(n=A(n)),{ok:f.ok,format:q,_tc_id:y++,alpha:o,getAlpha:function(){return o},setAlpha:function(a){o=l(a),p=A(100*o)/100},toHsv:function(){var a=g(h,k,n);return{h:360*a.h,s:a.s,v:a.v,a:o}},toHsvString:function(){var a=g(h,k,n),b=A(360*a.h),c=A(100*a.s),d=A(100*a.v);return 1==o?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+p+")"},toHsl:function(){var a=e(h,k,n);return{h:360*a.h,s:a.s,l:a.l,a:o}},toHslString:function(){var a=e(h,k,n),b=A(360*a.h),c=A(100*a.s),d=A(100*a.l);return 1==o?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+p+")"},toHex:function(a){return i(h,k,n,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(){return j(h,k,n,o)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:A(h),g:A(k),b:A(n),a:o}},toRgbString:function(){return 1==o?"rgb("+A(h)+", "+A(k)+", "+A(n)+")":"rgba("+A(h)+", "+A(k)+", "+A(n)+", "+p+")"},toPercentageRgb:function(){return{r:A(100*m(h,255))+"%",g:A(100*m(k,255))+"%",b:A(100*m(n,255))+"%",a:o}},toPercentageRgbString:function(){return 1==o?"rgb("+A(100*m(h,255))+"%, "+A(100*m(k,255))+"%, "+A(100*m(n,255))+"%)":"rgba("+A(100*m(h,255))+"%, "+A(100*m(k,255))+"%, "+A(100*m(n,255))+"%, "+p+")"},toName:function(){return 0===o?"transparent":F[i(h,k,n,!0)]||!1},toFilter:function(a){var c="#"+j(h,k,n,o),e=c,f=d&&d.gradientType?"GradientType = 1, ":"";if(a){var g=b(a);e=g.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+f+"startColorstr="+c+",endColorstr="+e+")"},toString:function(a){var b=!!a;a=a||this.format;var c=!1,d=!b&&1>o&&o>0,e=d&&("hex"===a||"hex6"===a||"hex3"===a||"name"===a);return"rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),e?this.toRgbString():c||this.toHexString()}}}function c(a){var b={r:0,g:0,b:0},c=1,e=!1,g=!1;return"string"==typeof a&&(a=v(a)),"object"==typeof a&&(a.hasOwnProperty("r")&&a.hasOwnProperty("g")&&a.hasOwnProperty("b")?(b=d(a.r,a.g,a.b),e=!0,g="%"===String(a.r).substr(-1)?"prgb":"rgb"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("v")?(a.s=s(a.s),a.v=s(a.v),b=h(a.h,a.s,a.v),e=!0,g="hsv"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("l")&&(a.s=s(a.s),a.l=s(a.l),b=f(a.h,a.s,a.l),e=!0,g="hsl"),a.hasOwnProperty("a")&&(c=a.a)),c=l(c),{ok:e,format:a.format||g,r:B(255,C(b.r,0)),g:B(255,C(b.g,0)),b:B(255,C(b.b,0)),a:c}}function d(a,b,c){return{r:255*m(a,255),g:255*m(b,255),b:255*m(c,255)}}function e(a,b,c){a=m(a,255),b=m(b,255),c=m(c,255);var d,e,f=C(a,b,c),g=B(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function f(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+(b-a)*(2/3-c)*6:a}var e,f,g;if(a=m(a,360),b=m(b,100),c=m(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function g(a,b,c){a=m(a,255),b=m(b,255),c=m(c,255);var d,e,f=C(a,b,c),g=B(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function h(a,b,c){a=6*m(a,360),b=m(b,100),c=m(c,100);var d=z.floor(a),e=a-d,f=c*(1-b),g=c*(1-e*b),h=c*(1-(1-e)*b),i=d%6,j=[c,g,f,f,h,c][i],k=[h,c,c,g,f,f][i],l=[f,f,h,c,c,g][i];return{r:255*j,g:255*k,b:255*l}}function i(a,b,c,d){var e=[r(A(a).toString(16)),r(A(b).toString(16)),r(A(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function j(a,b,c,d){var e=[r(t(d)),r(A(a).toString(16)),r(A(b).toString(16)),r(A(c).toString(16))];return e.join("")}function k(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function l(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function m(a,b){p(a)&&(a="100%");var c=q(a);return a=B(b,C(0,parseFloat(a))),c&&(a=parseInt(a*b,10)/100),z.abs(a-b)<1e-6?1:a%b/parseFloat(b)}function n(a){return B(1,C(0,a))}function o(a){return parseInt(a,16)}function p(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function q(a){return"string"==typeof a&&-1!=a.indexOf("%")}function r(a){return 1==a.length?"0"+a:""+a}function s(a){return 1>=a&&(a=100*a+"%"),a}function t(a){return Math.round(255*parseFloat(a)).toString(16)}function u(a){return o(a)/255}function v(a){a=a.replace(w,"").replace(x,"").toLowerCase();var b=!1;if(E[a])a=E[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=G.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=G.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=G.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=G.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=G.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=G.hex8.exec(a))?{a:u(c[1]),r:o(c[2]),g:o(c[3]),b:o(c[4]),format:b?"name":"hex8"}:(c=G.hex6.exec(a))?{r:o(c[1]),g:o(c[2]),b:o(c[3]),format:b?"name":"hex"}:(c=G.hex3.exec(a))?{r:o(c[1]+""+c[1]),g:o(c[2]+""+c[2]),b:o(c[3]+""+c[3]),format:b?"name":"hex"}:!1}var w=/^[\s,#]+/,x=/\s+$/,y=0,z=Math,A=z.round,B=z.min,C=z.max,D=z.random;b.fromRatio=function(a,c){if("object"==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]="a"===e?a[e]:s(a[e]));a=d}return b(a,c)},b.equals=function(a,c){return a&&c?b(a).toRgbString()==b(c).toRgbString():!1},b.random=function(){return b.fromRatio({r:D(),g:D(),b:D()})},b.desaturate=function(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s-=c/100,d.s=n(d.s),b(d)},b.saturate=function(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s+=c/100,d.s=n(d.s),b(d)},b.greyscale=function(a){return b.desaturate(a,100)},b.lighten=function(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l+=c/100,d.l=n(d.l),b(d)},b.darken=function(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l-=c/100,d.l=n(d.l),b(d)},b.complement=function(a){var c=b(a).toHsl();return c.h=(c.h+180)%360,b(c)},b.triad=function(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+120)%360,s:c.s,l:c.l}),b({h:(d+240)%360,s:c.s,l:c.l})]},b.tetrad=function(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+90)%360,s:c.s,l:c.l}),b({h:(d+180)%360,s:c.s,l:c.l}),b({h:(d+270)%360,s:c.s,l:c.l})]},b.splitcomplement=function(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+72)%360,s:c.s,l:c.l}),b({h:(d+216)%360,s:c.s,l:c.l})]},b.analogous=function(a,c,d){c=c||6,d=d||30;var e=b(a).toHsl(),f=360/d,g=[b(a)];for(e.h=(e.h-(f*c>>1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(b(e));return g},b.monochromatic=function(a,c){c=c||6;for(var d=b(a).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(b({h:e,s:f,v:g})),g=(g+i)%1;return h},b.readability=function(a,c){var d=b(a).toRgb(),e=b(c).toRgb(),f=(299*d.r+587*d.g+114*d.b)/1e3,g=(299*e.r+587*e.g+114*e.b)/1e3,h=Math.max(d.r,e.r)-Math.min(d.r,e.r)+Math.max(d.g,e.g)-Math.min(d.g,e.g)+Math.max(d.b,e.b)-Math.min(d.b,e.b);return{brightness:Math.abs(f-g),color:h}},b.readable=function(a,c){var d=b.readability(a,c);return d.brightness>125&&d.color>500},b.mostReadable=function(a,c){for(var d=null,e=0,f=!1,g=0;g<c.length;g++){var h=b.readability(a,c[g]),i=h.brightness>125&&h.color>500,j=3*(h.brightness/125)+h.color/500;(i&&!f||i&&f&&j>e||!i&&!f&&j>e)&&(f=i,e=j,d=b(c[g]))}return d};var E=b.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=b.hexNames=k(E),G=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();a.tinycolor=b}(),b(function(){b.fn.spectrum.load&&b.fn.spectrum.processNativeColorInputs()})}(window,jQuery);

;(function($){

    jQuery('.button-enable').click(function(){
      jQuery(this).addClass('active').parents('td').find('.button-disable').removeClass('active');
      jQuery('#delay').removeClass('no-vis');
    });

    jQuery('.button-disable').click(function(){
      jQuery(this).addClass('active').parents('td').find('.button-enable').removeClass('active');
      jQuery('#delay').addClass('no-vis');
    }); 

    if( jQuery('#disable').attr('checked') ) {
      jQuery('.button-disable').addClass('active');
      jQuery('.button-enable').removeClass('active');
      jQuery('#delay').addClass('no-vis');
    } else {
      jQuery('.button-enable').addClass('active');
      jQuery('#delay').removeClass('no-vis');
    }      

    jQuery('.layout-sel').click(function(){
        if( !jQuery(this).hasClass('active') ){
          jQuery(this).addClass('active').siblings().removeClass('active');
        }
    });

    if( jQuery('#lalt').attr('checked') ) { 
      jQuery(this).parents('.layout-sel').addClass('active').siblings().removeClass('active');
    } else {
      jQuery('#ldf').parents('.layout-sel').addClass('active').siblings().removeClass('active');
    }   

    jQuery('#alpha-delay').css('vertical-align', 'middle');
    jQuery('#alpha-delay').on('change keyup', function(){
        var value = jQuery(this).val();
        jQuery('#delay-val').text(value + ' ms');
    });

  // initialize spectrum
  jQuery('input.color').spectrum({
    showAlpha: true,
    showInitial: true,
    showPalette: true,
    allowEmpty:true,
      showSelectionPalette: true,
      maxPaletteSize: 10,
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
      ]
  });

/*=======================================================
        CUSTOMER MEDIA UPLOADER
========================================================*/    
jQuery(document).ready( function($) {
var customerImage = {
      init: function() {
        jQuery('.cus_image_add').on('click', function (e) { 
          var $el;
          e.preventDefault();
          $el = customerImage.el = jQuery(this).closest('div');
          $el.image = $el.find('.custom_image');
          $el.id = $el.find('.cus_media_id');
          customerImage.frame().open();
        });
 
        jQuery('.cus_image_remove').on('click', function (e) {
          var $el = jQuery(this).closest('div');
          e.preventDefault();
 
          $el.find('.custom_image').attr('src', '').hide();
          $el.find('.cus_media_id').val('');
          $el.find('.cus_image_add, .cus_image_remove').toggle();
        });
      },
 
      // Update the selected image in the media library based on the attachment ID in the field.
      open: function() {
        var selection = this.get('library').get('selection'),
            attachment, selected;
 
        selected = customerImage.el.id.val();
 
        if ( selected && '' !== selected && -1 !== selected && '0' !== selected ) {
            attachment = wp.media.model.Attachment.get( selected );
            attachment.fetch();
        }
 
        selection.reset( attachment ? [ attachment ] : [] );
      },
 
      // Update the control when an image is selected from the media library.
      select: function() {
        var $el = customerImage.el,
            selection = this.get('selection'),
            sizes = selection.first().get('sizes'),
            size;
 
        // Insert the selected attachment id into the target element.
        $el.id.val( selection.first().get( 'id' ) );
 
        // Update the image preview tag.
        if ( sizes ) {
            // The image size to show for the preview.
            size = sizes['small'] || sizes.medium;
        }
 
        size = size || selection.first().toJSON();
        $el.image.attr( 'src', size.url ).show();
        $el.find('.cus_image_add, .cus_image_remove').toggle();
        selection.reset();
      },
 
      // Initialize a new frame or return an existing frame.
      frame: function() {
        if ( this._frame )
          return this._frame;
 
        this._frame = wp.media({
          title: 'Add background Image',
          library: {
              type: 'image'
          },
          button: {
              text: 'Select'
          },
          multiple: false
        });
 
        this._frame.on( 'open', this.open ).state('library').on( 'select', this.select );
        return this._frame;
      }
    };    
    customerImage.init();
});

})(jQuery);