const showpass = document.getElementById('showPassword');
const input = document.getElementById('password');
showpass.addEventListener('click', ()=>{
    if(input.type==="password"){
        input.type="text";
    }else{
        input.type="password";
    }
});

const showpass2 = document.getElementById('NshowPassword');
const input2 = document.getElementById('Npassword');
showpass2.addEventListener('click', ()=>{
    if(input2.type==="password"){
        input2.type="text";
    }else{
        input2.type="password";
    }
});

if(showpass2.checked){
    if(input2.type==="password"){
        input2.type="text";
    }
}
if(showpass.checked){
    if(input.type==="password"){
        input.type="text";
    }
}
const create = document.getElementById('create');
const loginContainer = document.getElementById("loginContainer");
const signUpContainer = document.getElementById('signUpContainer');
const login = document.getElementById("login")
create.addEventListener('click', ()=>{
    if(signUpContainer.classList.contains("hide")){
        signUpContainer.classList.remove("hide");
        loginContainer.classList.add("hide");
    }
})
login.addEventListener('click', ()=>{
    if(loginContainer.classList.contains("hide")){
        loginContainer.classList.remove("hide");
        signUpContainer.classList.add("hide");
    }
})