(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),o=n.n(a),r=n(13),c=n.n(r),s=(n(19),n(10)),u=n(2),l=n(3),d=n(5),p=n(6),b=n(11),m=n(9),j=n.p+"static/media/logo.ff5e7d02.svg",f=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(i.jsx)("header",{className:"header page__section page__section_indent-size_s",children:Object(i.jsx)("img",{src:j,className:"header__logo",alt:"logo"})})}}]),n}(o.a.Component),v=o.a.memo(f),_=o.a.createContext();var h=function(e){var t=o.a.useContext(_),n=t.avatar,a=t.name,r=t.about,c=e.onAddPlacePopupOpen,s=e.onEditAvatarPopupOpen,u=e.onEditProfilePopupOpen;return Object(i.jsxs)("section",{className:"profile page__section page__section_indent-size_m",children:[Object(i.jsxs)("div",{className:"profile__avatar",children:[Object(i.jsx)("button",{className:"button profile__button profile__button_type_edit-image",type:"button",onClick:s}),Object(i.jsx)("img",{className:"profile__image",src:n,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})]}),Object(i.jsxs)("div",{className:"profile__info",children:[Object(i.jsx)("h1",{className:"profile__title text-ellipsis",children:a}),Object(i.jsx)("p",{className:"profile__subtitle text-ellipsis",children:r}),Object(i.jsx)("button",{className:"button profile__button profile__button_type_edit",type:"button",onClick:u})]}),Object(i.jsx)("button",{className:"button profile__button profile__button_type_add",type:"button",onClick:c})]})};var O=function(e){var t=e.name,n=e.avatar;console.debug("render like");var a=o.a.useRef(),r=o.a.useState(!1),c=Object(u.a)(r,2),s=c[0],l=c[1];return o.a.useEffect((function(){a.current.getBoundingClientRect().right>window.outerWidth?l(!0):l(!1)}),[a]),Object(i.jsxs)("article",{className:"like",children:[Object(i.jsx)("img",{className:"like__photo",src:n,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(i.jsx)("span",{ref:a,className:"like__name-tooltip",style:s?{left:"50%",right:"-50%"}:{},children:t})]})};var g=function(e){var t=e.card;console.debug("render like popup");var n=o.a.useRef(),a=o.a.useState(!1),r=Object(u.a)(a,2),c=r[0],s=r[1];return o.a.useEffect((function(){n.current.getBoundingClientRect().bottom>window.innerHeight?s(!0):s(!1)}),[n]),Object(i.jsxs)("div",{className:"likes-view popup_active".concat(c?" likes-view_pos_top":""),ref:n,children:[Object(i.jsx)("h2",{className:"likes-view__title",children:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c:"}),Object(i.jsx)("ul",{className:"list likes-view__items",children:t.likes.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(O,{name:e.name,avatar:e.avatar})},e._id)}))})]})};var x=function(e){var t=e.item,n=e.onRemoveButtonClick,a=e.onCardClick,r=e.onCardLike,c=o.a.useContext(_),s=t.owner._id===c._id;t.isUserLiked=t.likes.some((function(e){return e._id===c._id}));var l=o.a.useState(!1),d=Object(u.a)(l,2),p=d[0],b=d[1];return Object(i.jsxs)("article",{className:"card",children:[s&&Object(i.jsx)("button",{className:"button card__remove-button",type:"button",onClick:n.bind(void 0,t)}),Object(i.jsx)("img",{className:"card__image",src:t.link,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 ".concat(t.name),onClick:a.bind(void 0,t)}),Object(i.jsx)("h2",{className:"card__caption text-ellipsis",children:t.name}),Object(i.jsxs)("div",{className:"card__like",onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},children:[Object(i.jsx)("button",{className:"button scaling card__like-button".concat(t.isUserLiked?" card__like-button_checked":""),type:"button",onClick:r.bind(void 0,t),onAnimationEnd:function(e){return e.target.classList.remove("scaling")}}),Object(i.jsx)("span",{className:"card__like-count",children:t.likes.length}),p&&t.likes.length>0&&Object(i.jsx)(g,{card:t})]})]})};var C=function(e){var t=e.items,n=e.onRemoveCardPopupOpen,a=e.onImagePopupOpen,o=e.onCardLike;return Object(i.jsx)("section",{className:"cards-grid page__section page__section_indent-size_m",children:Object(i.jsx)("ul",{className:"list cards-grid__items",children:t.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(x,{item:e,onRemoveButtonClick:n,onCardClick:a,onCardLike:o})},e._id)}))})})};var k=function(e){var t=e.onAddPlacePopupOpen,n=e.onEditAvatarPopupOpen,a=e.onEditProfilePopupOpen,o=e.onRemoveCardPopupOpen,r=e.onImagePopupOpen,c=e.onCardLike,s=e.cards;return Object(i.jsxs)("main",{className:"content",children:[Object(i.jsx)(h,{onAddPlacePopupOpen:t,onEditAvatarPopupOpen:n,onEditProfilePopupOpen:a}),Object(i.jsx)(C,{items:s,onRemoveCardPopupOpen:o,onImagePopupOpen:r,onCardLike:c})]})},y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return console.debug("rendering footer"),Object(i.jsx)("footer",{className:"footer page__section page__section_indent-size_s",children:Object(i.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})}}]),n}(o.a.Component),P=o.a.memo(y);var N=function(e){return Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)(v,{}),Object(i.jsx)(k,Object(l.a)({},e)),Object(i.jsx)(P,{})]})};var A=function(e){var t=e.id,n=e.children,a=e.isActive,o=e.viewClass,r=e.onClose;return console.debug("render popup"),Object(i.jsx)("section",{className:"popup".concat(a?" popup_active":""),id:t,onMouseDown:function(e){e.target===e.currentTarget&&r()},children:Object(i.jsx)("div",{className:"".concat(o," popup__view"),children:n})})},S=".form-view__form",w="error",E="form-view__submit_disabled",L="form-view__input_type_error";document.querySelector(".profile__button.profile__button_type_edit-image"),document.querySelector(".profile__button.profile__button_type_edit"),document.querySelector(".profile__button.profile__button_type_add"),document.querySelector("#card-template"),document.querySelector(".cards-grid__items");function T(e){var t=e.id,n=e.name,a=e.type,o=e.error,r=e.minLength,c=e.maxLength,s=e.placeholder,u=e.value,l=e.isInvalid,d=e.required,p=e.onChange;return console.debug("render input"),Object(i.jsxs)("label",{className:"form-view__field",htmlFor:t,children:[Object(i.jsx)("input",{className:"".concat("form-view__input"," ").concat(l?" ".concat(L):""),id:t,name:n,type:a,minLength:r,maxLength:c,placeholder:s,onChange:p,value:u,required:d}),l&&Object(i.jsx)("span",{className:"".concat(w).concat(l?" ".concat("error_visible"):""),id:"".concat(t,"-error"),children:o})]})}T.defaultProps={type:"text",value:"",error:"",required:!0,autoComplete:"off"};var R=T,q=n(4);function J(e){return o.a.useMemo((function(){var t={};return Object.assign.apply(Object,[t].concat(Object(s.a)(e.filter((function(e){return e.value})).map((function(e){return Object(q.a)({},e.name,e.value)}))))),t}),[e])}var F=function(e){var t=e.name,n=e.isActive,a=e.inputs,r=e.submitTitle,c=e.onSubmit,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=o.a.useState({}),i=Object(u.a)(n,2),a=i[0],r=i[1],c=o.a.useState({}),s=Object(u.a)(c,2),d=s[0],p=s[1],b=o.a.useState(!1),m=Object(u.a)(b,2),j=m[0],f=m[1],v=J(e),_=function(e){var t=e.target.name,n=e.target.value;r(Object(l.a)(Object(l.a)({},a),{},Object(q.a)({},t,n))),p(Object(l.a)(Object(l.a)({},d),{},Object(q.a)({},t,e.target.validationMessage))),f(e.target.closest(S).checkValidity())},h=o.a.useCallback((function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),p(e),f(t)}),[r,p,f]);return o.a.useEffect((function(){console.debug("Reset validation");var t=Object.keys(v).length>0||0===e.length;h(v,{},t,e)}),[v,e,h,t]),{defaults:v,values:a,errors:d,isValid:j,handleChange:_,handeResetValidation:h}}(a,n),d=s.values,p=s.errors,b=s.isValid,m=s.handleChange;return console.debug("rendering form"),console.debug(r),Object(i.jsxs)("form",{name:t,className:"form-view__form",onSubmit:function(e){e.preventDefault(e),c(d)},noValidate:!0,children:[a.map((function(e){return Object(i.jsx)(R,{id:e.id,name:e.name,type:e.type,placeholder:e.placeholder,minLength:e.minLength,maxLength:e.maxLength,value:d[e.name]||"",error:p[e.name],isInvalid:void 0!==p[e.name]&&""!==p[e.name],onChange:m,required:!0},e.id)})),Object(i.jsx)("button",{type:"submit",className:"button ".concat("form-view__submit").concat(b?"":" ".concat(E)),disabled:!b,children:r})]})};function I(e){var t=e.id,n=e.name,a=e.title,o=e.isActive,r=e.isProcessing,c=e.submitTitle,s=e.processingTitle,u=e.onSubmit,l=e.onClose,d=e.inputs;return console.debug("Rendering Form Popup"),Object(i.jsxs)(A,{id:t,isActive:o,onClose:l,viewClass:"form-view",children:[Object(i.jsx)("button",{className:"button popup__close-button",type:"button",onClick:l}),Object(i.jsx)("h2",{className:"form-view__title",children:a}),Object(i.jsx)(F,{name:n,isActive:o,submitTitle:r?s:c,inputs:d,onSubmit:u})]})}function U(e,t){return e.isActive===t.isActive&&e.isProcessing===t.isProcessing}I.defaultProps={submitTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",processingTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",inputs:[]};var M=o.a.memo(I,U);var B=function(e){var t=e.isActive,n=e.isProcessing,a=e.onAddPlace,r=e.onClose,c=o.a.useMemo((function(){return[{id:"card-name",name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:2,maxLength:30,required:!0},{id:"card-link",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}]}),[]);return console.debug("render add card popup"),Object(i.jsx)(M,{id:"add-card",name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isActive:t,isProcessing:n,inputs:c,onSubmit:a,onClose:r})};var D=function(e){var t=e.isActive,n=e.isProcessing,a=e.onEditAvatar,o=e.onClose;return console.debug("render add card popup"),Object(i.jsx)(M,{id:"edit-avatar",name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isProcessing:n,isActive:t,inputs:[{id:"avatar-link",name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}],onSubmit:a,onClose:o})};var z=function(e){var t=e.isActive,n=e.isProcessing,a=e.onEditProfile,r=e.onClose,c=o.a.useContext(_),s=c.name,u=c.about,l=o.a.useMemo((function(){return[{id:"name",name:"name",type:"text",placeholder:"\u0418\u043c\u044f",minLength:2,maxLength:40,value:s,required:!0},{id:"about",name:"about",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:2,maxLength:200,value:u,required:!0}]}),[u,s]);return console.debug("render edit profile popup"),Object(i.jsx)(M,{id:"edit-profile",name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isProcessing:n,isActive:t,inputs:l,onSubmit:a,onClose:r})};var V=function(e){var t=e.isActive,n=e.isProcessing,a=e.onCardRemove,o=e.onClose;return console.debug("render remove card popup"),Object(i.jsx)(M,{id:"remove-card",name:"removeCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitTitle:"\u0414\u0430",processingTitle:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",isProcessing:n,isActive:t,onSubmit:a,onClose:o})};var H=function(e){var t=e.isActive,n=e.selectedCard,a=e.onClose;return console.debug("render remove card popup"),Object(i.jsxs)(A,{id:"card-preview",isActive:t,onClose:a,viewClass:"picture-view",children:[Object(i.jsxs)("div",{className:"picture-view__container",children:[Object(i.jsx)("button",{className:"button popup__close-button",type:"button",onClick:a}),Object(i.jsx)("img",{className:"picture-view__image",src:n.link,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"})]}),Object(i.jsx)("h2",{className:"picture-view__caption text-ellipsis",children:n.name})]})},G="/cards/",W="/users/me/",K="/cards/likes/",Q=new(function(){function e(t){var n=t.baseUri,i=t.headers;Object(d.a)(this,e),this._baseUri=n,this._headers=i}return Object(p.a)(e,[{key:"addCard",value:function(e){var t=Object(l.a)(Object(l.a)({},this._headers),{},{"Content-Type":"application/json"});return this._sendJson(G,"POST",t,JSON.stringify(e))}},{key:"deleteCard",value:function(e){return this._sendJson(G+e,"DELETE",this._headers)}},{key:"getCards",value:function(){return this._sendJson(G,"GET",this._headers)}},{key:"getUserInfo",value:function(){return this._sendJson(W,"GET",this._headers)}},{key:"setAvatar",value:function(e){var t=Object(l.a)(Object(l.a)({},this._headers),{},{"Content-Type":"application/json"});return this._sendJson("/users/me/avatar/","PATCH",t,JSON.stringify(e))}},{key:"setUserInfo",value:function(e){var t=Object(l.a)(Object(l.a)({},this._headers),{},{"Content-Type":"application/json"});return this._sendJson(W,"PATCH",t,JSON.stringify(e))}},{key:"like",value:function(e){return this._sendJson(K+e,"PUT",this._headers)}},{key:"unlike",value:function(e){return this._sendJson(K+e,"DELETE",this._headers)}},{key:"_sendJson",value:function(e,t,n,i){var a=this._baseUri+e;return fetch(a,{method:t,headers:n,body:i}).then((function(e){return console.debug("".concat(t," ").concat(a," status: ").concat(e.status)),e.ok?e.json():Promise.reject()}))}}]),e}())({baseUri:"https://mesto.nomoreparties.co/v1/cohort-18",headers:{authorization:"e1917e0b-6d7d-4255-81d0-fb0ca13ea044"}});var X=function(){var e=o.a.useState({}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=o.a.useState([]),c=Object(u.a)(r,2),l=c[0],d=c[1],p=o.a.useState({}),b=Object(u.a)(p,2),m=b[0],j=b[1],f=o.a.useState({}),v=Object(u.a)(f,2),h=v[0],O=v[1],g=o.a.useState(!1),x=Object(u.a)(g,2),C=x[0],k=x[1],y=o.a.useState(!1),P=Object(u.a)(y,2),A=P[0],S=P[1],w=o.a.useState(!1),E=Object(u.a)(w,2),L=E[0],T=E[1],R=o.a.useState(!1),q=Object(u.a)(R,2),J=q[0],F=q[1],I=o.a.useState(!1),U=Object(u.a)(I,2),M=U[0],G=U[1],W=o.a.useState(!1),K=Object(u.a)(W,2),X=K[0],Y=K[1],Z=o.a.useState(!1),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=o.a.useState(!1),ie=Object(u.a)(ne,2),ae=ie[0],oe=ie[1],re=o.a.useState(!1),ce=Object(u.a)(re,2),se=ce[0],ue=ce[1];o.a.useEffect((function(){var e=function(e){e.preventDefault(),"Escape"===e.key&&pe()};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),o.a.useEffect((function(){console.debug("load initial data"),Promise.all([de(),le()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],i=t[1];a(n),d(i)})).catch((function(e){return console.error(e)}))}),[]);var le=function(){return Q.getCards().then((function(e){return Promise.resolve(e)})).catch((function(){return Promise.reject("Failed to fetch cards.")}))},de=function(){return Q.getUserInfo().then((function(e){return Promise.resolve(e)})).catch((function(){return Promise.reject("Failed to set user info.")}))},pe=function(){k(!1),S(!1),T(!1),F(!1),G(!1),j({}),O({})};return console.debug("rendering app"),Object(i.jsxs)(_.Provider,{value:n,children:[Object(i.jsx)(N,{onAddPlacePopupOpen:function(){k(!0)},onEditAvatarPopupOpen:function(){S(!0)},onEditProfilePopupOpen:function(){T(!0)},onRemoveCardPopupOpen:function(e){F(!0),j(e)},onImagePopupOpen:function(e){G(!0),O(e)},onCardLike:function(e){(e.isUserLiked?Q.unlike.bind(Q):Q.like.bind(Q))(e._id).then((function(t){d((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.error(e)}))},cards:l}),Object(i.jsx)(B,{isActive:C,isProcessing:X,onClose:pe,onAddPlace:function(e){Y(!0),Q.addCard(e).then((function(e){d((function(t){return[e].concat(Object(s.a)(t))})),pe()})).catch((function(){return console.error("Failed to add card.")})).finally((function(){return Y(!1)}))}}),Object(i.jsx)(D,{isActive:A,isProcessing:ee,onClose:pe,onEditAvatar:function(e){te(!0),Q.setAvatar(e).then((function(e){a(e),pe()})).catch((function(){return console.error("Failed to edit avatar.")})).finally((function(){return te(!1)}))}}),Object(i.jsx)(z,{isActive:L,isProcessing:ae,onClose:pe,onEditProfile:function(e){oe(!0),Q.setUserInfo(e).then((function(e){a(e),pe()})).catch((function(){return console.error("Failed to edit profile.")})).finally((function(){return oe(!1)}))}}),Object(i.jsx)(V,{isActive:J,isProcessing:se,onClose:pe,onCardRemove:function(){m&&(ue(!0),Q.deleteCard(m._id).then((function(){d((function(e){return e.filter((function(e){return e._id!==m._id}))})),pe()})).catch((function(){return console.error("Failed to remove card.")})).finally((function(){return ue(!1)})))}}),Object(i.jsx)(H,{isActive:M,selectedCard:h,onClose:pe})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root")),Y()}},[[20,1,2]]]);
//# sourceMappingURL=main.82bba403.chunk.js.map