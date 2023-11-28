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
// criando uma variavel e adicionando que podemos alterar diversas formas no scroll como "animacoes"etc..

let prevscroll = window.pageYOffset;

window.addEventListener("scroll", function(){
    let crscrollpos = window.pageYOffset;
    
    if(prevscroll > crscrollpos){
         // Rola para cima: mostra o header
        document.getElementById("myheader").style.top = "10px";
    } else{
         // Rola para baixo: esconde o header
        document.getElementById("myheader").style.top ="-80px";
    }

    prevscroll = crscrollpos;

});
//<!-- Adicione um identificador à imagem para referência em JavaScript -->
  //<img id="myImage" src="small-image.jpg" alt="Imagem Pequena" onmouseover="changeImage()" onmouseout="resetImage()"></img>


// ! 1 Oculos //


// Função chamada quando o mouse passa sobre a imagem
function changeImage1(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc5 - Copia.png";
    
 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '50px' 

}
// Função chamada quando o mouse sai da imagem
function resetImage1(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '-5px' 

}


// ! 2 Oculos //
function changeImage2(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc6.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '50px'

}
// Função chamada quando o mouse sai da imagem
function resetImage2(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '-5px'
}


// ! 3 Oculos //
function changeImage3(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc16t.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '50px'

}
// Função chamada quando o mouse sai da imagem
function resetImage3(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '-5px'
}


// 2 PARTE POS-LAN2 

// ! 4 Oculos

function changeImage4(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc10t.png";
    
 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '50px' 

}
// Função chamada quando o mouse sai da imagem
function resetImage4(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5").src="img.oc/oc7.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '' 

}

// ! 5 Oculos

function changeImage5(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc15t.png";
    
 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '50px' 

}
// Função chamada quando o mouse sai da imagem
function resetImage5(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-5px' 

}

// ! 6 Oculos

function changeImage6(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc9t.png";
    
 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '50px' 

}
// Função chamada quando o mouse sai da imagem
function resetImage6(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-5px' 

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
