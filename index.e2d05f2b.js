!function(){var e=document.getElementById("openOrderModal"),n=document.getElementById("closeOrderModal"),t=document.getElementById("modalConnection"),r=document.getElementById("openOrderFromHero"),d=document.getElementById("orderForm");e.addEventListener("click",(function(){return s(t)})),n.addEventListener("click",(function(){return s(t)})),r.addEventListener("click",(function(){return s(t)}));var o=document.getElementById("modalThanks"),l=document.getElementById("closeThanksModal"),i=document.getElementById("continueThanksModal");l.addEventListener("click",(function(){return s(o)})),i.addEventListener("click",(function(){return s(o)}));var c=document.getElementById("blogModal"),u=document.getElementById("subscribe"),a=document.getElementById("confirmSubscribe"),m=document.getElementById("closeSubscribe");function s(e){e.classList.toggle("is-hidden")}a.addEventListener("click",(function(){return s(c)})),m.addEventListener("click",(function(){return s(c)})),u.addEventListener("click",(function(){return s(c)})),d.addEventListener("submit",(function(e){e.preventDefault(),function(e){var n=!0,t=!1,r=void 0;try{for(var d,o=e[Symbol.iterator]();!(n=(d=o.next()).done);n=!0){if(!d.value.validity.valid)return!1}}catch(e){t=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(t)throw r}}return!0}(d.getElementsByTagName("input"))&&(s(o),s(t),function(e){var n=!0,t=!1,r=void 0;try{for(var d,o=e[Symbol.iterator]();!(n=(d=o.next()).done);n=!0){d.value.value=null}}catch(e){t=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(t)throw r}}}(d.getElementsByTagName("input")))}))}();
//# sourceMappingURL=index.e2d05f2b.js.map