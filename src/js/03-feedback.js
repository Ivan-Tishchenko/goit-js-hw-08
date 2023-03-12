import throttle from "lodash.throttle"; 

const form = document.querySelector('form');
const formValue = {};
form.addEventListener("input", throttle((e) => {
    formValue[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formValue));
}, 500))
form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.currentTarget.reset()
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.clear()
    formValue.email = "";
    formValue.message = "";
})

document.addEventListener("DOMContentLoaded", () => {
    const email = document.querySelector("input");
    const message = document.querySelector("textarea");
    const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (!formData) {
        return;
    }

    formValue.email = formData.email;
    email.value = formData.email;
        
    if (formData.message) {
        formValue.message = formData.message;
        message.value = formData.message;
    }
            
})
