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

sr.reveal('.container1', { duration: 1500 });
sr.reveal('.container2', { duration: 1500 });
sr.reveal('.ban-pro', { duration: 1500 });
sr.reveal('.container3', { duration: 1500 });
sr.reveal('.container3-5', { duration: 1500 });
sr.reveal('.container4', { duration: 1500 });
sr.reveal('.container5', { duration: 1500 });
sr.reveal('.container6', { duration: 1500 });

//onst imgs = document.getElementById('sec2-1');
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

