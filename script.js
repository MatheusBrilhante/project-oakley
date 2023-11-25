function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra , i) =>{
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 45 * i)
    });
}

const titulo = document.getElementById('fun1')
const titulo1 = document.getElementById('fun2')
const titulo2 = document.getElementById('fun3')

typeWriter(titulo,);
typeWriter(titulo1,);
typeWriter(titulo2,);

window.sr = ScrollReveal({ reset: true });

sr.reveal('.container1', { duration: 1000 });
sr.reveal('.container2', { duration: 1000 });
sr.reveal('.container3', { duration: 1000 });
sr.reveal('.container4', { duration: 1000 });
sr.reveal('.container5', { duration: 1000 });
sr.reveal('.container6', { duration: 1000 });
// Obtenha o header
let header = document.getElementById("myheader");
// Obtenha a posição inicial do header
let ini = header.offsetTop;
 // Adicione um listener de rolagem à janela
window.onscroll = function(){
    // Verifique se a posição da rolagem é maior que a posição inicial do header
    if(window.pageYOffset > ini){
        // Se sim, adicione a classe fixed ao header
        header.classList.add("fixed");
    } else{
        // Se não, remova a classe fixed do header
        header.classList.remove("fixed")
    }
}


//<!-- Adicione um identificador à imagem para referência em JavaScript -->
  //<img id="myImage" src="small-image.jpg" alt="Imagem Pequena" onmouseover="changeImage()" onmouseout="resetImage()"></img>


// Função chamada quando o mouse passa sobre a imagem
function changeImage(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc5 - Copia";
    document.getElementById("myImage2") .src="img.oc/oc6.png";
    document.getElementById("myImage3") .src="img.oc/oc14t.png";
}
// Função chamada quando o mouse sai da imagem
function resetImage(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
}



//const imgs = document.getElementById('sec2-1');
//const img = document.querySelectorAll('#img img');

//let idx = 0;

//function carrossel(){
 //   idx++;
 //   if(idx > img.length - 1){
//        idx = 0;
 //   }

//   imgs.style.transform = `translatex(${-idx * 400}px)`;
//}

//setInterval(carrossel,1800);//
//let n1 = 1
//let n2 = '1'
//let n3 = (n1 == n2)
//console.log(n3)
