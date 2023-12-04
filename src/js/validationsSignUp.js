const formSignUp = document.getElementById('formSignUp');
const botonSignUp = document.getElementById('btnSignUp');

const signUpName = document.getElementById('signUpName');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPass = document.getElementById('signUpPass');

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPass = document.getElementById('errorPass');


formSignUp.addEventListener('submit', (e)=>{
    e.preventDefault();
})

function validarSignUp(){

    if(signUpName.value == ''){
        signUpName.style.borderColor = "red";
        errorName.style.display = "inline";
        errorName.innerHTML = 'Campo requerido';
        return false;
    }   
    else{
        signUpName.style.borderColor = '#3B5A9D';
        errorName.style.display = 'none';
     }

    if(signUpEmail.value == ''){
        signUpEmail.style.borderColor = "red";
        errorEmail.style.display = "inline";
        errorEmail.innerHTML = 'Campo requerido';
        return false;
    }   
    else{
        signUpEmail.style.borderColor = '#3B5A9D';
        errorEmail.style.display = 'none';
        }

    if(signUpPass.value == ''){
        signUpPass.style.borderColor = "red";
        errorPass.style.display = "inline";
        errorPass.innerHTML = 'Campo requerido';
     return false;
    }
    else{
        signUpPass.style.borderColor = '#3B5A9D';
        errorPass.style.display = 'none';
    }

    console.log('todo bien');
    return true;
}

botonSignUp.addEventListener('click', function(){
    if(validarSignUp()){
        window.location.href='./index.html';
    }
})
