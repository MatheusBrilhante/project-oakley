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
//755 A 867
function changeImage1(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '25px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '57px'
    
}

// Função chamada quando o mouse sai da imagem
function resetImage1(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '15px'
    
}
//867 A 974
function changeImage12(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '25px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '50px'
    
}

function resetImage12(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '9px'
   
}
//974 A 1110
function changeImage13(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '25px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '69px'
    
}

function resetImage13(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '19px'
   
}

// ! 2 Oculos //
//755 A 867
function changeImage2(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '3px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '54px'
}

function resetImage2(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '-10px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '15px'
 }
//867 A 974
function changeImage22(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '3px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '47px'
}

function resetImage22(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '-10px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '9px'
}
//974 A 1110

// ! 3 Oculos //
function changeImage3(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '17px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '42px'

}
// Função chamada quando o mouse sai da imagem
function resetImage3(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '15px'
}
function changeImage31(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '17px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '36px'

}
// Função chamada quando o mouse sai da imagem
function resetImage31(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '9px'
}

// OCULOS 4

function changeImage4(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc10t.png";
    document.getElementById("myImage5").style.marginTop = '-20px'
    document.getElementById("myImage5").style.marginLeft = '25px'
  
 //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-16px'
    
}
// Função chamada quando o mouse sai da imagem
function resetImage4(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5").src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '8px'
    document.getElementById("bt2").style.zIndex = '5' 
}

function changeImage41(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc10t.png";
   document.getElementById("myImage5").style.marginTop = '-20px'
   document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '-5px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage41(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '10px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '19px'
   document.getElementById("bt2").style.zIndex = '5' 
}

// ! 5 Oculos
function changeImage5(){
     // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc15t.png";
    document.getElementById("myImage5").style.marginTop = '27px'
    document.getElementById("bt2").style.marginTop = '29px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage5(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '13px'
    document.getElementById("bt2").style.zIndex = '5' 
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '5px' 
}

function changeImage51(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '27px'
   document.getElementById("bt2").style.marginTop = '40px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage51(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '13px'
   document.getElementById("bt2").style.zIndex = '5' 
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '16px' 
}

// ! 6 Oculos
function changeImage6(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '18px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '24px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage6(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '14px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '4px'
}

function changeImage61(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '18px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '35px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage61(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '14px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '15px'
}


// IMAGEM 1
function resetImages() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        resetImage1();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage12();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage13();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function changeImages() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        changeImage1();
        
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage12();
    
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage13();
    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
    console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }else{
    console.log('123')
    }
}

//IMAGEM 2
function resetImagesTWO() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        resetImage2();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage22();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando5')
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function changeImagesTWO() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        changeImage2();
        
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage22();
    
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando')
    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

//IMAGEM 3

function resetImagesTRHEE() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        resetImage3();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage31();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando5')
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function changeImagesTRHEE() {
   if(window.innerWidth >= 755 && window.innerWidth <= 866){
        changeImage3();
        
   }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage31();
    
   }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando')
    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

//IMAGEM 4 
function resetImagesFOR() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        resetImage4();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage41();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando5')
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function changeImagesFOR() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        changeImage4();     
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage41();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando')
    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

//IMAGEM 5

function resetImagesFIVE() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        resetImage5();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage51();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando5')
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function changeImagesFIVE() {
   if(window.innerWidth >= 755 && window.innerWidth <= 866){
        changeImage5();
   }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage51();
   }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando')
    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

//IMAGEM 6

function resetImagesSIX() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        resetImage6();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage61();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando5')
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function changeImagesSIX() {
    if(window.innerWidth >= 755 && window.innerWidth <= 866){
        changeImage6(); 
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage61();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        console.log('testando')
    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        console.log('testando4')
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1520){

    }
    else{
        console.log('123')
    }
}

function ajustarPosicao() {
    var larguraTela = window.innerWidth;
    var elemento0 = window.document.getElementById("myImage");
    var elemento1 = window.document.getElementById("bt1");
    var elemento2 = window.document.getElementById("myImage5");
    var elemento3 = window.document.getElementById("bt2");

    if(larguraTela >= 755 && larguraTela <= 866) {
        console.log('TESTE 1')
        changeImages();
        resetImages();
        changeImagesTWO();
        resetImagesTWO();
        changeImagesTRHEE();
        resetImagesTRHEE();
        changeImagesFOR();
        resetImagesFOR();
        changeImagesFIVE();
        resetImagesFIVE();
        changeImagesSIX();
        resetImagesSIX();
        elemento0.style.marginTop = '-10px';
        elemento1.style.marginTop = '15px';
        elemento2.style.marginTop = '17px';
        elemento3.style.marginTop = '1px';
    }else if (larguraTela >= 867 && larguraTela <= 974) {
        // Alteração para changeImage4 quando a largura é menor que 974
        console.log('Teste 2');
        elemento0.style.marginTop = '-10px';
        elemento1.style.marginTop = '15px';
        elemento2.style.marginTop = '17px';
        elemento3.style.marginTop = '1px';
        changeImages();
        resetImages();
        changeImagesTWO();
        resetImagesTWO();
        changeImagesTRHEE();
        resetImagesTRHEE();
        changeImagesFOR();
        resetImagesFOR();
        changeImagesFIVE();
        resetImagesFIVE();
        changeImagesSIX();
        resetImagesSIX();
    }else if (larguraTela >= 975 && larguraTela <= 1110) {
        // Alteração para changeImage7 quando a largura está entre 975 e 1110
        console.log('Teste 3');
        changeImages();
        resetImages();
        changeImagesTWO();
        resetImagesTWO();
        changeImagesTRHEE();
        resetImagesTRHEE();
        changeImagesFOR();
        resetImagesFOR();
        changeImagesFIVE();
        resetImagesFIVE();
        changeImagesSIX();
        resetImagesSIX();
        elemento0.style.marginTop = '-10px';
        elemento1.style.marginTop = '17px';
        elemento2.style.marginTop = '17px';
        elemento3.style.marginTop = '8px';
    }
    else if (larguraTela >= 1111 && larguraTela <= 1366){

    }
    else if (larguraTela >= 1367 && larguraTela <= 1920) {
        changeImages();
        resetImages();
        changeImagesTWO();
        resetImagesTWO();
        changeImagesTRHEE();
        resetImagesTRHEE();
        changeImagesFOR();
        resetImagesFOR();
        changeImagesFIVE();
        resetImagesFIVE();
        changeImagesSIX();
        resetImagesSIX();
        elemento0.style.marginTop = '-10px';
        elemento1.style.marginTop = '18px';
        elemento2.style.marginTop = '17px';
    }else {
       console.log('123')
        // Se nenhuma condição for atendida, adicione o código apropriado aqui
    }
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

