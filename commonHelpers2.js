import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const a="feedback-form-state",r=localStorage.getItem(a);r&&(e=JSON.parse(r),document.querySelector(".feedback-form input[type='email']").value=e.email,document.querySelector(".feedback-form textarea").value=e.message);const l=document.querySelector(".feedback-form");l.addEventListener("input",m);function m(t){t.target.tagName==="INPUT"?e.email=t.target.value.trim():t.target.tagName==="TEXTAREA"&&(e.message=t.target.value.trim()),localStorage.setItem(a,JSON.stringify(e))}l.addEventListener("submit",o);function o(t){t.preventDefault(),!e.email.trim()||!e.message.trim()?alert("Fill please all fields"):(console.log(e),localStorage.removeItem(a),e={email:"",message:""},l.reset())}
//# sourceMappingURL=commonHelpers2.js.map
