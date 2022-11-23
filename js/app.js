

function validation(){
    let form = document.querySelector('#form')
    let email = document.querySelector('#email').value
    let text = document.querySelector('#text')
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        text.innerHTML = 'Your Email Address in Valid.'
        text.style.color = '#00ff00'
    }else{
        text.innerHTML = 'Please Enter Valid Email Address'
        text.style.color = '#ff0000'
    }
}

let keydawn = document.querySelector('#email')
keydawn.addEventListener('keydown' , 'change' , validation)