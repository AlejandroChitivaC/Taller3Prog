let formulario = document.getElementById('send-form');

const url = "https://db-alejandro.herokuapp.com/obrasarte/";

formulario.addEventListener('click' , async (nombre) => {
    //nombre.preventDefault();
    console.log("Sending form");

    let name = document.getElementById("form-name").value;
    console.log(name);
})

formulario.addEventListener('click' , async (username) => {
    //nombre.preventDefault();
    console.log("Sending form");

    let username = document.getElementById("form-username").value;
    console.log(username);
})

formulario.addEventListener('click' , async (email) =>{

    console.log("Sending form");
    let email = document.getElementById("form-email").value;
    console.log(email);
})

formulario.addEventListener('click' , async (file) =>{

    console.log("Sending form");
    let file = document.getElementById("form-file").value;
    console.log(file);
})

formulario.addEventListener('click' , async (password) =>{

    console.log("Sending form");
    let password = document.getElementById("form-password").value;
    console.log(password);
})

formulario.addEventListener('click' , async (conpassword) =>{

    console.log("Sending form");
    let conpassword = document.getElementById("form-conpasword").value;
    console.log(conpassword);
})

