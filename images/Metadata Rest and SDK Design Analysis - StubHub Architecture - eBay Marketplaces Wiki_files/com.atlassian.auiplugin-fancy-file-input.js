;try {
/* module-key = 'com.atlassian.auiplugin:fancy-file-input', location = 'fancy-file-input/dist/fancy-file-input.js' */
/* jQuery Fancy File Input plugin - v1.0.0 - 2014-10-22
* http://seancurtis.com/experiments/fancy-file-input/
* Copyright (c) 2014 Sean Curtis <scurtis@atlassian.com>; Licensed http://www.apache.org/licenses/LICENSE-2.0 */
(function(A,B){A.FancyFileInput=B(jQuery);if(typeof define==="function"){define("aui/internal/fancy-file-input",[],function(){return A.FancyFileInput})}}(this,function(D){var F=/^.*[\\\/]/;var B=/\{0\}/gi;var E=(function(){var G=3;var I=document.createElement("div");var H=I.getElementsByTagName("i");do{I.innerHTML="<!--[if gt IE "+(++G)+"]><i></i><![endif]-->"}while(H[0]);return G>4?G:document.documentMode}());D.fn.fancyFileInput=function(G){return this.each(function(){var H=new A(this,G);D(this).data("FancyFileInput",H)})};function A(I,H){var G=D(I).data("FancyFileInput");if(G){return G}H=D.extend({},A.defaults,H);this.el=I;this.$el=D(I);this.$label=this.createLabel(H.buttonText);this._addLabelText();this.$clearButton=D("<button>",{text:(this.$label.attr("data-ffi-clearButtonText")||H.clearButtonText),"class":"ffi-clear",type:"button",tabindex:"-1"});this.multipleFileTextPattern=this.$label.attr("data-ffi-multipleFileTextPattern")||H.multipleFileTextPattern;this._eventNamespace=".ffi";this.CLASSES={disabled:"is-disabled",focused:"is-focused",active:"is-active",valid:"is-valid",invalid:"is-invalid"};this[this.isDisabled()?"disable":"enable"]();this.isFocused=false}A.defaults={buttonText:"Browse\u2026",clearButtonText:"Clear",multipleFileTextPattern:"{0} files"};A.prototype._addLabelText=function C(){var G=D('label[for="'+this.el.id+'"]');if(G.length){this.$el.attr("aria-label",G.text())}};A.prototype.createLabel=function(H){var G=this.$el.parent(".ffi[data-ffi-button-text]");if(!G.length){G=this.$el.wrap(D("<label>",{"class":"ffi","data-ffi-button-text":H})).parent()}return G};A.prototype.isDisabled=function(){return this.$el.is(":disabled")};A.prototype.formatMultipleFileText=function(G){return this.multipleFileTextPattern.replace(B,G)};A.prototype.bindEvents=function(){this.$el.on("invalid"+this._eventNamespace,D.proxy(this.checkValidity,this)).on("change"+this._eventNamespace,D.proxy(this.change,this)).on("keydown"+this._eventNamespace,D.proxy(this.keydown,this)).on("mousedown"+this._eventNamespace,D.proxy(this.mousedown,this)).on("mouseup"+this._eventNamespace,D.proxy(this.mouseup,this)).on("focus"+this._eventNamespace,D.proxy(this.focus,this)).on("blur"+this._eventNamespace,D.proxy(this.blur,this));this.$clearButton.on("click"+this._eventNamespace,D.proxy(this.clear,this))};A.prototype.unbindEvents=function(){this.$el.off(this._eventNamespace);this.$clearButton.off(this._eventNamespace)};A.prototype.fireEvent=function(G){this.$el.trigger(G+this._eventNamespace)};A.prototype.enable=function(){this.bindEvents();this.$el.prop("disabled",false);this.$label.removeClass(this.CLASSES.disabled)};A.prototype.disable=function(){this.unbindEvents();this.$el.prop("disabled",true);this.$label.addClass(this.CLASSES.disabled)};A.prototype.clear=function(){this.$el.wrap("<form>").closest("form").get(0).reset();this.$el.unwrap();this.el.value="";this.change();return false};A.prototype.focus=function(){var G=this;this.$label.addClass(this.CLASSES.focused);if(E&&!this.isFocused){this.isFocused=true;setTimeout(function(){G.$el.blur();G.$el.focus()},0)}};A.prototype.blur=function(){if(!E||!this.isFocused){this.$label.removeClass(this.CLASSES.focused);this.isFocused=false}};A.prototype.mousedown=function(){this.$label.addClass(this.CLASSES.active)};A.prototype.mouseup=function(){this.$label.removeClass(this.CLASSES.active)};A.prototype.keydown=function(L){var K=L.which;var J=8;var H=9;var I=46;if(K===J||K===I){this.clear();L.preventDefault()}if(E&&K===H){var G=this;this.isFocused=false;this.$el.prop("disabled",true);setTimeout(function(){G.$el.prop("disabled",false).blur()},0)}};A.prototype.checkValidity=function(){if(!this.el.required){return }var G=this.$el.is(":invalid");this.$label.toggleClass(this.CLASSES.invalid,G).toggleClass(this.CLASSES.valid,!G)};A.prototype.change=function(){var G;var H="";this.checkValidity();if(this.el.multiple&&this.el.files.length>1){G=this.formatMultipleFileText(this.el.files.length)}else{G=this.el.value}if(G.length){H=G.replace(F,"");this.$clearButton.appendTo(this.$label)}else{this.$clearButton.detach()}this.$el.focus();this.setFieldText(H);this.fireEvent("value-changed")};A.prototype.setFieldText=function(H){var G="data-ffi-value";if(H.length){this.$label.attr(G,H);this.fireEvent("value-added")}else{this.$label.removeAttr(G);this.fireEvent("value-cleared")}};return A}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
