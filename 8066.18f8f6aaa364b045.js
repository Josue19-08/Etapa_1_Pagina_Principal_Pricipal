"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8066],{8066:(C,f,c)=>{c.r(f),c.d(f,{ion_radio:()=>b,ion_radio_group:()=>u});var h=c(467),r=c(8393),m=c(4920),k=c(5572),g=c(333),x=c(4921);const b=class{constructor(e){(0,r.r)(this,e),this.ionFocus=(0,r.d)(this,"ionFocus",7),this.ionBlur=(0,r.d)(this,"ionBlur",7),this.inputId="ion-rb-"+w++,this.radioGroup=null,this.updateState=()=>{if(this.radioGroup){const{compareWith:t,value:i}=this.radioGroup;this.checked=(0,k.i)(i,this.value,t)}},this.onClick=()=>{const{radioGroup:t,checked:i,disabled:a}=this;a||(this.checked=!i||null==t||!t.allowEmptySelection)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.checked=!1,this.buttonTabindex=-1,this.color=void 0,this.name=this.inputId,this.disabled=!1,this.value=void 0,this.labelPlacement="start",this.justify="space-between",this.alignment="center"}valueChanged(){this.updateState()}componentDidLoad(){this.updateState()}setFocus(e){var t=this;return(0,h.A)(function*(){e.stopPropagation(),e.preventDefault(),t.el.focus()})()}setButtonTabindex(e){var t=this;return(0,h.A)(function*(){t.buttonTabindex=e})()}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const e=this.radioGroup=this.el.closest("ion-radio-group");e&&(this.updateState(),(0,m.a)(e,"ionValueChange",this.updateState))}disconnectedCallback(){const e=this.radioGroup;e&&((0,m.b)(e,"ionValueChange",this.updateState),this.radioGroup=null)}get hasLabel(){return""!==this.el.textContent}renderRadioControl(){return(0,r.h)("div",{class:"radio-icon",part:"container"},(0,r.h)("div",{class:"radio-inner",part:"mark"}),(0,r.h)("div",{class:"radio-ripple"}))}render(){const{checked:e,disabled:t,color:i,el:a,justify:p,labelPlacement:d,hasLabel:s,buttonTabindex:y,alignment:j}=this,I=(0,x.b)(this),v=(0,g.h)("ion-item",a);return(0,r.h)(r.f,{key:"43c95effb6acb119733270e8a5e02fe18b47ee4b",onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,g.c)(i,{[I]:!0,"in-item":v,"radio-checked":e,"radio-disabled":t,[`radio-justify-${p}`]:!0,[`radio-alignment-${j}`]:!0,[`radio-label-placement-${d}`]:!0,"ion-activatable":!v,"ion-focusable":!v}),role:"radio","aria-checked":e?"true":"false","aria-disabled":t?"true":null,tabindex:y},(0,r.h)("label",{key:"168ea77c08fde9832077d617662b93dc9986b544",class:"radio-wrapper"},(0,r.h)("div",{key:"ce1e6eee63fbab1e5a66b18f767f4eecc2a227f1",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!s},part:"label"},(0,r.h)("slot",{key:"7d849e43d4356b5c3978c2bba9a6fba5d21ca69d"})),(0,r.h)("div",{key:"e741f7822364958b050a232bdfccdc413095c244",class:"native-wrapper"},this.renderRadioControl())))}get el(){return(0,r.i)(this)}static get watchers(){return{value:["valueChanged"]}}};let w=0;b.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #0054e9)}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}'};const u=class{constructor(e){(0,r.r)(this,e),this.ionChange=(0,r.d)(this,"ionChange",7),this.ionValueChange=(0,r.d)(this,"ionValueChange",7),this.inputId="ion-rg-"+E++,this.labelId=`${this.inputId}-lbl`,this.setRadioTabindex=t=>{const i=this.getRadios(),a=i.find(s=>!s.disabled),p=i.find(s=>s.value===t&&!s.disabled);if(!a&&!p)return;const d=p||a;for(const s of i)s.setButtonTabindex(s===d?0:-1)},this.onClick=t=>{t.preventDefault();const i=t.target&&t.target.closest("ion-radio");if(i&&!i.disabled){const p=i.value;p!==this.value?(this.value=p,this.emitValueChange(t)):this.allowEmptySelection&&(this.value=void 0,this.emitValueChange(t))}},this.allowEmptySelection=!1,this.compareWith=void 0,this.name=this.inputId,this.value=void 0}valueChanged(e){this.setRadioTabindex(e),this.ionValueChange.emit({value:e})}componentDidLoad(){this.valueChanged(this.value)}connectedCallback(){var e=this;return(0,h.A)(function*(){const t=e.el.querySelector("ion-list-header")||e.el.querySelector("ion-item-divider");if(t){const i=e.label=t.querySelector("ion-label");i&&(e.labelId=i.id=e.name+"-lbl")}})()}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}emitValueChange(e){const{value:t}=this;this.ionChange.emit({value:t,event:e})}onKeydown(e){const t=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target))return;const i=this.getRadios().filter(a=>!a.disabled);if(e.target&&i.includes(e.target)){const a=i.findIndex(s=>s===e.target),p=i[a];let d;if(["ArrowDown","ArrowRight"].includes(e.key)&&(d=a===i.length-1?i[0]:i[a+1]),["ArrowUp","ArrowLeft"].includes(e.key)&&(d=0===a?i[i.length-1]:i[a-1]),d&&i.includes(d)&&(d.setFocus(e),t||(this.value=d.value,this.emitValueChange(e))),[" "].includes(e.key)){const s=this.value;this.value=this.allowEmptySelection&&void 0!==this.value?void 0:p.value,(s!==this.value||this.allowEmptySelection)&&this.emitValueChange(e),e.preventDefault()}}}render(){const{label:e,labelId:t,el:i,name:a,value:p}=this,d=(0,x.b)(this);return(0,m.d)(!0,i,a,p,!1),(0,r.h)(r.f,{key:"7a8ad7eb6a05c6f96a348dcf30fd0c610a95688c",role:"radiogroup","aria-labelledby":e?t:null,onClick:this.onClick,class:d})}get el(){return(0,r.i)(this)}static get watchers(){return{value:["valueChanged"]}}};let E=0},333:(C,f,c)=>{c.d(f,{c:()=>m,g:()=>g,h:()=>r,o:()=>_});var h=c(467);const r=(o,n)=>null!==n.closest(o),m=(o,n)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},n):n,g=o=>{const n={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(o).forEach(l=>n[l]=!0),n},x=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,h.A)(function*(n,l,b,w){if(null!=n&&"#"!==n[0]&&!x.test(n)){const u=document.querySelector("ion-router");if(u)return null!=l&&l.preventDefault(),u.push(n,b,w)}return!1});return function(l,b,w,u){return o.apply(this,arguments)}}()}}]);