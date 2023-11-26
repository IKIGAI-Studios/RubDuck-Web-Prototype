const formLogin = document.getElementById('formLogin');
const botonLogin = document.getElementById('btnLogin');

const loginName = document.getElementById('loginName');
const loginPass = document.getElementById('loginPass');

const errorLoginName = document.getElementById('errorLoginName');
const errorLoginPass = document.getElementById('errorLoginPass');

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
})


function validarLogin(){

    if(loginName.value == ''){
        loginName.style.borderColor = "red";
        loginName.style.display = "inline";
        errorLoginName.innerHTML = 'Campo requerido';
        return false;
    }   
    else{
        loginName.style.borderColor = '#3B5A9D';
        errorLoginName.style.display = 'none';
     }

    if(loginPass.value == ''){
        loginPass.style.borderColor = "red";
        errorLoginPass.style.display = "inline";
        errorLoginPass.innerHTML = 'Campo requerido';
     return false;
    }
    else{
        loginPass.style.borderColor = '#3B5A9D';
        errorLoginPass.style.display = 'none';
    }

    console.log('todo bien');
    return true;
}

botonLogin.addEventListener('click', function(){
    if(validarLogin()){
        window.location.href='../index.html';
    }
})