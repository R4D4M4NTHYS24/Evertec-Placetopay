/*************************************************Codigo del Menu**********************************************/

var btnMenu = document.getElementById('btn-menu');//Variable que me almacena el id de btnMenu que esta dentro del span del html
var nav = document.getElementById('nav');//Variable que me almacena el id de nav del html
//El icono de menu pasa a ser variable y puede controlarse con javascript
btnMenu.addEventListener('click', function(){//Al hacer click en el icono del menu al nav se le va a agregar la clase mostrar
	nav.classList.toggle('mostrar');
})

/*************************************************Formulario de contacto**********************************************/

var email = document.getElementById("email");
var form = document.getElementById("form");

let name;
let message;
let userObject = {};
let mobile;
let factory;
let acept;

name = document.getElementById("name");
message = document.getElementById("message");
mobile = document.getElementById("mobile");
factory = document.getElementById("factory");
acept = document.getElementById("acept");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    userObject.name = name.value;
    userObject.email = email.value;
    userObject.mobile = mobile.value;
    userObject.factory = factory.value;
    userObject.acept = acept.value;         
    userObject.message = message.value;
    
    console.log("envie");
    localStorage.setItem('submit', JSON.stringify(userObject));
    console.log(userObject);
  });

	