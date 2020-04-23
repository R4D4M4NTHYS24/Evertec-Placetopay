
/*let character = {};//almacena el objeto del personaje en el DOM
let postElements;//variable que contiene la posicion en el DOM de los cards de los personajes
let characterPosition;//Almacena el numero aleatorio para la peticion random que se hace en el index a la API
let characterPosition2;//Almacena el numero aleatorio para la peticion random que se hace en el index a la API
let characterPosition3;//Almacena el numero aleatorio para la peticion random que se hace en el index a la API

function userInfo() {
    characterPosition = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition2 = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition3 = Math.floor(Math.random() * 493 + 1) - 1;
    
    //la escritura ${} se usa para conectar cadenas de texto con variables
    fetch(`https://rickandmortyapi.com/api/character/[${characterPosition},${characterPosition2},${characterPosition3}]`).then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        
            
        postElements = document.getElementsByClassName('post');
        for (let index = 0; index < postElements.length; index++) {          
            let postImage = postElements[index].querySelector('.image');            
            character = respuesta[index];
            postImage.src = character.image;
            
            postElements[index].addEventListener('click', function(){
               
                localStorage.setItem('character', JSON.stringify(respuesta[index]));
            });
            
            

            
            
            
        }
        
        
       
        

        

        



    })
    
}

userInfo();

*/


var btnMenu = document.getElementById('btn-menu');//Variable que me almacena el id de btnMenu que esta dentro del span del html
var nav = document.getElementById('nav');//Variable que me almacena el id de nav del html
//El icono de menu pasa a ser variable y puede controlarse con javascript
btnMenu.addEventListener('click', function(){//Al hacer click en el icono del menu al nav se le va a agregar la clase mostrar
	nav.classList.toggle('mostrar');
})


	