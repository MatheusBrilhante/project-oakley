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

// Obtenha o header
// criando uma variavel e adicionando que podemos alterar diversas formas no scroll como "animacoes"etc..

let prevscroll = window.pageYOffset;

window.addEventListener("scroll", function(){
    let crscrollpos = window.pageYOffset;
    
    if(prevscroll > crscrollpos){
         // Rola para cima: mostra o header
        document.getElementById("myheader").style.top = "10px";
        document.getElementById("car1").style.top = "10px";
    } else{
         // Rola para baixo: esconde o header
        document.getElementById("myheader").style.top ="-80px";
        document.getElementById("car1").style.top = "-50px";
    }

    prevscroll = crscrollpos;

});
//<!-- Adicione um identificador à imagem para referência em JavaScript -->
  //<img id="myImage" src="small-image.jpg" alt="Imagem Pequena" onmouseover="changeImage()" onmouseout="resetImage()"></img>

// ! 1 Oculos //

// Função chamada quando o mouse passa sobre a imagem
function changeImage1(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    
    document.getElementById("myImage").style.marginTop = '25px'

 //ADICIONANDO UMA POSICAO FIXA NA TELA    

}

// Função chamada quando o mouse sai da imagem
function resetImage1(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";

    document.getElementById("myImage").style.marginTop = '-10px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '18px'

}

// ! 2 Oculos //
function changeImage2(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";

    document.getElementById("myImage").style.marginTop = '3px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '57px'

}

// Função chamada quando o mouse sai da imagem
function resetImage2(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";

    document.getElementById("myImage").style.marginTop = '-10px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '18px'
}

// ! 3 Oculos //
function changeImage3(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";

    document.getElementById("myImage").style.marginTop = '17px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '45px'

}

// Função chamada quando o mouse sai da imagem
function resetImage3(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";

    document.getElementById("myImage").style.marginTop = '-10px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '18px'
}

function changeImage4(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc10t.png";
    
    document.getElementById("myImage5").style.marginTop = '-20px'
    
    document.getElementById("myImage5").style.marginLeft = '20px' 
 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-13px' 
}

// Função chamada quando o mouse sai da imagem
function resetImage4(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5").src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '10px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '11px' 
    
    document.getElementById("bt2").style.zIndex = '5' 

}

// ! 5 Oculos

function changeImage5(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc15t.png";

    document.getElementById("myImage5").style.marginTop = '29px'

    document.getElementById("bt2").style.marginTop = '30px' 
  
}

// Função chamada quando o mouse sai da imagem
function resetImage5(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";

    document.getElementById("myImage5").style.marginTop = '29px'
    document.getElementById("bt2").style.zIndex = '5' 

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-8px' 

}

// ! 6 Oculos

function changeImage6(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
  
    document.getElementById("myImage5").style.marginTop = '29px'

 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '16px' 

}

// Função chamada quando o mouse sai da imagem
function resetImage6(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";

    document.getElementById("myImage5").style.marginTop = '29px'

    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-8px'  

}

function ajustarPosicao(){
    var larguraTela = window.innerWidth;
    
    var elemento0 = window.document.getElementById("myImage");
    var elemento1 = window.document.getElementById("bt1");

    var elemento2 = window.document.getElementById("myImage5");
    var elemento3 = window.document.getElementById("bt2");
 
    if(larguraTela < 867){
        elemento0.style.marginTop = '-10px';
        elemento1.style.marginTop = '18px';
        elemento2.style.marginTop = '17px';
        elemento3.style.marginTop = '4px';
    }else if(larguraTela < 1366){
        changeImage1();
        document.getElementById("bt1").style.marginTop = '80px'
    
        elemento0.style.marginTop = '-10px';
        elemento1.style.marginTop = '18px';
        elemento2.style.marginTop = '17px';
        elemento3.style.marginTop = '4px';
    }else if(larguraTela < 1511){
        elemento0.style.marginTop = '10px';
        elemento1.style.marginTop = '-5px';
        elemento2.style.marginTop = '35px';
        elemento3.style.marginTop = '25px';
    };
}

ajustarPosicao();
window.addEventListener('resize' , ajustarPosicao);

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

