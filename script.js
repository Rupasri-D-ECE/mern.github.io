const container=document.querySelector('.container');
const loginLink=document.querySelector('.signup-link');
const registerLink=document.querySelector('.login-link');
const registerButton=document.querySelector('.register-button');
const preferenceButton=document.querySelector('.preference-button');

loginLink.addEventListener("click", ( )=>{
    container.classList.add("active");
});
registerLink.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

