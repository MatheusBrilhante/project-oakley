let cart = [];
let key = 0;
let modalQt = 0; 
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modelsJson.slice(15,24).forEach((item ,index) =>{
    let modelsItem3 = document.querySelector('.models .models-item').cloneNode(true);
    modelsItem3.setAttribute('data-key',index);
    modelsItem3.querySelector('.models-item img').src = item.img;
    modelsItem3.querySelector('.models-item--name').innerHTML = item.name;
    modelsItem3.querySelector('.models-item--desc').innerHTML = item.description;
    modelsItem3.querySelector('.models-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;

    modelsItem3.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault();
        c('.modelsWindowArea').style.opacity = 0;
        c('.modelsWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.modelsWindowArea').style.opacity = 1;
        },200);
        key = parseInt(e.target.closest('.models-item').getAttribute('data-key'));
        document.querySelector('.modelsBig img').src = modelsJson[15 + parseInt(key)].img;
        document.querySelector('.modelsInfo h1').innerHTML = modelsJson[15 + parseInt(key)].name;
        document.querySelector('.modelsInfo--desc').innerHTML = modelsJson[15 + parseInt(key)].description;
        document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[15 + parseInt(key)].price[0].toFixed(2)}`;
        c('.modelsInfo--qt').innerHTML = modalQt;
        modalQt = 0;
        c('.modelsInfo--size.selected').classList.remove('selected');
        cs('.modelsInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 0){
                size.classList.add('selected');
                document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`;
            }
            size.querySelector('span').innerHTML = modelsJson[15 + parseInt(key)].sizes[sizeIndex];
        });
    });
    document.querySelector('.models-area2').append(modelsItem3);
});

modelsJson.slice(10,15).forEach((item, index) => {
    let modelsItem2 = document.querySelector('.models .models-item').cloneNode(true);
    modelsItem2.setAttribute('data-key',index);
    modelsItem2.querySelector('.models-item--img img').src = item.img;
    modelsItem2.querySelector('.models-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    modelsItem2.querySelector('.models-item--name').innerHTML = item.name;
    modelsItem2.querySelector('.models-item--desc').innerHTML = item.description;

    modelsItem2.querySelector('a').addEventListener('click',(e) =>{
        e.preventDefault();
        c('.modelsWindowArea').style.opacity = 0;
        c('.modelsWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.modelsWindowArea').style.opacity = 1;
        },200);
        c('.modelsInfo--qt').innerHTML = modalQt;
        key = parseInt(e.target.closest('.models-item').getAttribute('data-key'));
        modalQt = 0;
        document.querySelector('.modelsBig img').src = modelsJson[10 + parseInt(key)].img;
        document.querySelector('.modelsInfo h1').innerHTML = modelsJson[10 + parseInt(key)].name;
        document.querySelector('.modelsInfo--desc').innerHTML = modelsJson[10 + parseInt(key)].description;
        document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[10 + parseInt(key)].price[0].toFixed(2)}`;
        c('.modelsInfo--size.selected').classList.remove('selected');
        cs('.modelsInfo--size').forEach((size,sizeIndex) =>{
            if(sizeIndex == 0){
                size.classList.add('selected');
                document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`;
            }
            size.querySelector('span').innerHTML = modelsJson[10 + parseInt(key)].sizes[sizeIndex];
        });
    });
    document.querySelector('.models-area1-5').append(modelsItem2);
});

modelsJson.slice(5,10).forEach((item, index) => {
    let modelsItem1 = document.querySelector('.models .models-item').cloneNode(true);
    modelsItem1.setAttribute('data-key',index);
    modelsItem1.querySelector('.models-item--img img').src = item.img;
    modelsItem1.querySelector('.models-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    modelsItem1.querySelector('.models-item--name').innerHTML = item.name;
    modelsItem1.querySelector('.models-item--desc').innerHTML = item.description;
    
    modelsItem1.querySelector('a').addEventListener('click',(e) =>{
        e.preventDefault();
        c('.modelsWindowArea').style.opacity = 0;
        c('.modelsWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.modelsWindowArea').style.opacity = 1;
        },200);
        c('.modelsInfo--qt').innerHTML = modalQt;
        key = parseInt(e.target.closest('.models-item').getAttribute('data-key'));
        modalQt = 0;
        document.querySelector('.modelsBig img').src = modelsJson[5 + parseInt(key)].img;
        document.querySelector('.modelsInfo h1').innerHTML = modelsJson[5 + parseInt(key)].name;
        document.querySelector('.modelsInfo--desc').innerHTML = modelsJson[5 + parseInt(key)].description;
        document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[5 + parseInt(key)].price[0].toFixed(2)}`;
        c('.modelsInfo--size.selected').classList.remove('selected');
        cs('.modelsInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 1){
                size.classList.add('selected');
                document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`;
            }
            size.querySelector('span').innerHTML = modelsJson[5 + parseInt(key)].sizes[sizeIndex];
        });
    });
    
    document.querySelector('.models-area1').append(modelsItem1);
});

modelsJson.slice(0, 5).forEach((item, index) => {
    // Criar uma cópia independente do modelo
    let modelsItem = document.querySelector('.models .models-item').cloneNode(true);
    //IRA ATRIBUIR A CADA IMAGEM DE 0,5 UM DATA KEY PRA NA HORA EVENTO CLICK ELE SELECIONAR 
    modelsItem.setAttribute('data-key',index);
    // Atualizar os elementos dentro da cópia com base nos dados do item
    modelsItem.querySelector('.models-item--img img').src = item.img;
    modelsItem.querySelector('.models-item--price').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    modelsItem.querySelector('.models-item--name').innerHTML = item.name;
    modelsItem.querySelector('.models-item--desc').innerHTML = item.description;

    modelsItem.querySelector('a').addEventListener('click',(e) =>{
        //Nao ira permitir que a pagina atualize
        e.preventDefault();
        // key ira adiciona Paramentro evento no mais proximo em models.item,
        //e ira adicionar o data key
        c('.modelsInfo--qt').innerHTML = modalQt;
        key = parseInt(e.target.closest('.models-item').getAttribute('data-key'));
        modalQt = 0;
        //IRA PUXAR A IMAGEM QUE FOI CLICADA PELO MODELSJSON DE 0 A 5 COM VARIAVEL KEY
        document.querySelector('.modelsBig img').src = modelsJson[key].img;
        document.querySelector('.modelsInfo H1').innerHTML = modelsJson[key].name;
        document.querySelector('.modelsInfo--desc').innerHTML = modelsJson[key].description;
        document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[0].toFixed(2)}`
        c('.modelsInfo--size.selected').classList.remove('selected');
        cs('.modelsInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 0){
                size.classList.add('selected');
                document.querySelector('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`
            }
            size.querySelector('span').innerHTML = modelsJson[key].sizes[sizeIndex];
        });
        c('.modelsWindowArea').style.opacity = 0;
        c('.modelsWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.modelsWindowArea').style.opacity = 1;
        },200);
    });
    // Adicionar a cópia à área de modelos
    document.querySelector('.models-area').append(modelsItem);

});
//ACOES DA JANELA (FECHAR /ABRIR);
function closeModal(){
    c('.modelsWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.modelsWindowArea').style.display = 'none';
    },500);

}

//PARA FECHAR A PAGINA QUANDO CLICA EM CANCELAR COMPRA
cs('.modelsInfo--cancelButton, .modelsInfo--cancelMobileButton').forEach((item1)=>{
    item1.addEventListener('click', closeModal);
});
//PARA DIMINUIR NA HORA DA COMPRA

c('.models-Info--qtmenos').addEventListener('click',()=>{
    if(modalQt > 1){
        modalQt--;
        c('.modelsInfo--qt').innerHTML = modalQt;
    }
});

//PARA ADICIONAR MAIS DE UM NA HORA DA COMPRA
c('.models-Info--qtmais').addEventListener('click',()=>{
    modalQt++;
    c('.modelsInfo--qt').innerHTML = modalQt;
});

cs('.modelsInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', () => {
        c('.modelsInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
        c('.modelsInfo--actualPrice').innerHTML = `R$ ${modelsJson[key].price[sizeIndex].toFixed(2)}`;
    });
});

//EVENTO QUE IRA ARMAZENAR OS DADOS QUANDO CLICAR EM ADICIONAR 
//MODELO / TAMANHO/ QUANTIDADE

c('.modelsInfo--addButton').addEventListener('click',(e)=>{ 
    let size = parseInt(c('.modelsInfo--size.selected').getAttribute('data-key'));
    //IRA IDENTIFICA QUAIS DENTRO DO SELECIONADO SAO IGUAIS E JUNTA ELES
    //NO CONSOLE PARA NAO DUPLICA E SIM SOMA EM UM ID APENAS
    let identifier = modelsJson[key].id+'@'+size;
    let localId = cart.findIndex((item)=> item.identifier == identifier);
    if(localId > - 1){
        cart[localId].qt += modalQt;
    } else{
        cart.push({
            identifier,
            id:modelsJson[key].id,
            size,
            qt:modalQt
        });
    }
    closeModal();
    updateCart();
});

//CASO DENTRO DO CARRINHO TENHA ALGUM ITEM SERA ACIONADO O ASIDE
//E A CLASSLIST SHOW 
function updateCart() {
    console.log('Update Cart Function Called');
    console.log('Cart Length:', cart.length);

    if (cart.length > 0) {
        console.log('Adding Show Class');
        c('aside').style.display = 'flex';
        c('aside').classList.add('show');
    } else {
        console.log('Removing Show Class');
        c('aside').classList.remove('show');
    }
}

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra , i) =>{
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 45 * i)
    });
};

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
        
    }
    
    prevscroll = crscrollpos;

});
//<!-- Adicione um identificador à imagem para referência em JavaScript -->
  //<img id="myImage" src="small-image.jpg" alt="Imagem Pequena" onmouseover="changeImage()" onmouseout="resetImage()"></img>

// ! 1 Oculos //

// Função chamada quando o mouse passa sobre a imagem

function changeImage001(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '75px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '38px'
    
}

// Função chamada quando o mouse sai da imagem
function resetImage001(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '37px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '3px'
    
}

function changeImage01(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '60px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '52px'
    
}

// Função chamada quando o mouse sai da imagem
function resetImage01(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '40px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '-1px'
    
}

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
    document.getElementById("bt1").style.marginTop = '85px'
    
}

function resetImage12(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '43px'
   
}
//974 A 1110
function changeImage13(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '25px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '68.1px'
    
}

function resetImage13(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '17px'
   
}
//1110 A 1366 
function changeImage14(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '25px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '78px'
    
}

function resetImage14(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '27px'
   
}
//1366 A 1970 
function changeImage15(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage").src="img.oc/oc16t.png";
    document.getElementById("myImage").style.marginTop = '25px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '68px'
    
}

function resetImage15(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '17px'
   
}

// ! 2 Oculos //

function changeImage002(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '55px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '34px'
}

function resetImage002(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '40px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '0px'
 }

function changeImage02(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '55px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '33px'
}
function resetImage02(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '40px'
     
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '-1px'
 }
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
    document.getElementById("bt1").style.marginTop = '83px'
}

function resetImage22(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '-10px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '44px'
}
//974 A 1110

function changeImage23(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '3px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '62px'
}

function resetImage23(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '-10px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '17px'
}
//1110 A 1366 
function changeImage24(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '3px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '72px'
}

function resetImage24(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '-10px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '27px'
}
//1366 A 1520
function changeImage25(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc14t.png";
    document.getElementById("myImage").style.marginTop = '3px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '62px'
}

function resetImage25(){
    // Restaure o atributo src para a imagem original
     document.getElementById("myImage") .src="img.oc/oc12t.png";
     document.getElementById("myImage").style.marginTop = '-10px'
     //ADICIONANDO UMA POSICAO FIXA NA TELA    
     document.getElementById("bt1").style.marginTop = '17px'
}

// ! 3 Oculos //
function changeImage003(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '65px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '26px'
}
// Função chamada quando o mouse sai da imagem
function resetImage003(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage") .src="img.oc/oc12t.png";
   document.getElementById("myImage").style.marginTop = '40px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt1").style.marginTop = '0px'
}

function changeImage03(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '60px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '30px'
}
// Função chamada quando o mouse sai da imagem
function resetImage03(){
   // Restaure o atributo src para a imagem original
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '40px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '-1px'
}

//755 A 867
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
//867 A 974
function changeImage31(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '17px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '70px'

}
// Função chamada quando o mouse sai da imagem
function resetImage31(){
   // Restaure o atributo src para a imagem original
   
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '43px'
}
//974 A 1110
function changeImage32(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '17px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '50px'

}
// Função chamada quando o mouse sai da imagem
function resetImage32(){
   // Restaure o atributo src para a imagem original
   
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '17px'
}
// 1110 A 1366
function changeImage33(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '17px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '62px'

}
// Função chamada quando o mouse sai da imagem
function resetImage33(){
   // Restaure o atributo src para a imagem original
   
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '29px'
}
// 1366 a 1520

function changeImage34(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage") .src="img.oc/oc9t.png";
    document.getElementById("myImage").style.marginTop = '17px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '50px'

}
// Função chamada quando o mouse sai da imagem
function resetImage34(){
   // Restaure o atributo src para a imagem original
   
    document.getElementById("myImage") .src="img.oc/oc12t.png";
    document.getElementById("myImage").style.marginTop = '-10px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt1").style.marginTop = '17px'
}
 
// OCULOS 4
function changeImage004(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc10t.png";
   document.getElementById("myImage5").style.marginTop = '10px'
   document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '-6px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage004(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '44px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '10px'
   document.getElementById("bt2").style.zIndex = '5' 
}

function changeImage04(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc10t.png";
    document.getElementById("myImage5").style.marginTop = '15px'
    document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '-16px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage04(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '38px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '12px'
   document.getElementById("bt2").style.zIndex = '5' 
}
//755 A 867
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
//867 A 974
function changeImage41(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc10t.png";
   document.getElementById("myImage5").style.marginTop = '-20px'
   document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '60px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage41(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '10px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '84px'
}
//974 A 1110
function changeImage42(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc10t.png";
   document.getElementById("myImage5").style.marginTop = '-15px'
   document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '30px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage42(){
   // Restaure o atributo src para a imagem original
   
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '18px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '57px'
   document.getElementById("bt2").style.zIndex = '5' 
}
//1110 A 1366 
function changeImage43(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc10t.png";
   document.getElementById("myImage5").style.marginTop = '-15px'
   document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '11px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage43(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '18px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '38px'
   document.getElementById("bt2").style.zIndex = '5' 
}
// 1366 a 1520
function changeImage44(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc10t.png";
   document.getElementById("myImage5").style.marginTop = '-15px'
   document.getElementById("myImage5").style.marginLeft = '25px'
 
//ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '26px'
   
}
// Função chamada quando o mouse sai da imagem
function resetImage44(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5").src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '18px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '53px'

}

// ! 5 Oculos
function changeImage005(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '50px'
   document.getElementById("bt2").style.marginTop = '40px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage005(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '43px'
   document.getElementById("bt2").style.zIndex = '5' 
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '11px' 
}

function changeImage05(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '50px'
   document.getElementById("bt2").style.marginTop = '35px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage05(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '40px'
   document.getElementById("bt2").style.zIndex = '5' 
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '9px' 
}
//755 A 867
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
//867 A 974
function changeImage51(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '27px'
   document.getElementById("bt2").style.marginTop = '105px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage51(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '13px'

   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '81px' 
}
//974 A 1110
function changeImage52(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '37px'
   document.getElementById("bt2").style.marginTop = '80px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage52(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '22px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '53px' 
}
// 1110 A 1366 
function changeImage53(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '37px'
   document.getElementById("bt2").style.marginTop = '60px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage53(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '22px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '33px' 
}
//1366 A 1520   
function changeImage54(){
    // Altere o atributo src para a imagem maior
   document.getElementById("myImage5").src="img.oc/oc15t.png";
   document.getElementById("myImage5").style.marginTop = '37px'
   document.getElementById("bt2").style.marginTop = '76px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage54(){
   // Restaure o atributo src para a imagem original
   document.getElementById("myImage5") .src="img.oc/oc7.png";
   document.getElementById("myImage5").style.marginTop = '22px'
   //ADICIONANDO UMA POSICAO FIXA NA TELA    
   document.getElementById("bt2").style.marginTop = '49px' 
}

// ! 6 Oculos
function changeImage006(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '40px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '37px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage006(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '44px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '11px'
}

function changeImage06(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '32px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '40px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage06(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '41px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '8px'
}

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
    document.getElementById("bt2").style.marginTop = '100px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage61(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '14px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '80px'
}
function changeImage62(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '18px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '83px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage62(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '14px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '60px'
}
function changeImage63(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '18px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '63px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage63(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '14px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '40px'
}
function changeImage64(){
    // Altere o atributo src para a imagem maior
    document.getElementById("myImage5").src="img.oc/oc4.png";
    document.getElementById("myImage5").style.marginTop = '18px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '79px' 
}
// Função chamada quando o mouse sai da imagem
function resetImage64(){
    // Restaure o atributo src para a imagem original
    document.getElementById("myImage5") .src="img.oc/oc7.png";
    document.getElementById("myImage5").style.marginTop = '14px'
    //ADICIONANDO UMA POSICAO FIXA NA TELA    
    document.getElementById("bt2").style.marginTop = '57px'
}

// IMAGEM 1
function resetImages() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        resetImage001();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        resetImage01();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        resetImage1();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage12();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage13();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        resetImage14();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        resetImage15();
    }
    else{
        console.log('123')
    }
}
function changeImages() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        changeImage001(); 
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        changeImage01(); 
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        changeImage1(); 
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage12();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage13();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        changeImage14();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        changeImage15();
    }else{
    console.log('123')
    }
}

//IMAGEM 2
function resetImagesTWO() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        resetImage002();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        resetImage02();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        resetImage2();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage22();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage23();    
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        resetImage24();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        resetImage25();
    }
    else{
        console.log('123')
    }
}

function changeImagesTWO() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        changeImage002();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        changeImage02();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        changeImage2();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage22();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage23();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        changeImage24();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        changeImage25();
    }
    else{
        console.log('123')
    }
}

//IMAGEM 3

function resetImagesTRHEE() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        resetImage003();
        console.log('teste1')
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        resetImage03();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        resetImage3();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage31();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage32();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        resetImage33();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        resetImage34();
    }
    else{
        console.log('123')
    }
}

function changeImagesTRHEE() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        changeImage003();
        console.log('teste1')
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        changeImage03();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        changeImage3();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage31();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage32();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        changeImage33();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        changeImage34();
    }
    else{
        console.log('123')
    }
}

//IMAGEM 4 
function resetImagesFOR() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        resetImage004();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        resetImage04();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        resetImage4();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage41();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage42();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        resetImage43();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        resetImage44();
    }
    else{
        console.log('123')
    }
}

function changeImagesFOR() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        changeImage004();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        changeImage04();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        changeImage4();     
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage41();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage42();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        changeImage43();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        changeImage44();
    }
    else{
        console.log('123')
    }
}

//IMAGEM 5

function resetImagesFIVE() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        resetImage005();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        resetImage05();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        resetImage5();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage51();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage52();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        resetImage53();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        resetImage54();
    }
    else{
        console.log('123')
    }
}

function changeImagesFIVE() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        changeImage005();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        changeImage05();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        changeImage5();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage51();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage52();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        changeImage53();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        changeImage54();
    }
    else{
        console.log('123')
    }
}

//IMAGEM 6

function resetImagesSIX() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        resetImage006();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        resetImage06();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        resetImage6();
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        resetImage61();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        resetImage62();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        resetImage63();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        resetImage64();
    }
    else{
        console.log('123')
    }
}

function changeImagesSIX() {
    if(window.innerWidth >= 360 && window.innerWidth <= 585){
        changeImage006();
    }else if(window.innerWidth >= 586 && window.innerWidth <= 750){
        changeImage06();
    }else if(window.innerWidth >= 751 && window.innerWidth <= 866){
        changeImage6(); 
    }else if (window.innerWidth >= 867 && window.innerWidth <= 974){
        changeImage61();
    }else if (window.innerWidth >= 975 && window.innerWidth <= 1110){
        changeImage62();
    }else if (window.innerWidth >= 1111 && window.innerWidth <= 1366){
        changeImage63();
    }else if (window.innerWidth >= 1367 && window.innerWidth <= 1920){
        changeImage64();
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

    if(larguraTela >= 360 && larguraTela <= 585){
        console.log('TESTE 0.1')
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
        elemento0.style.marginTop = '35px';
        elemento1.style.marginTop = '5px';
        elemento2.style.marginTop = '40px';
        elemento3.style.marginTop = '14px';
    }else if(larguraTela >= 586 && larguraTela <= 750){
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
        elemento0.style.marginTop = '40px';
        elemento1.style.marginTop = '-1px';
        elemento2.style.marginTop = '40px';
        elemento3.style.marginTop = '10px';
    }else if(larguraTela >= 751 && larguraTela <= 867){
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
    }else if(larguraTela >= 867 && larguraTela <= 974) {
        // Alteração para changeImage4 quando a largura é menor que 974
        console.log('teste3');
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
        elemento1.style.marginTop = '43px';
        elemento2.style.marginTop = '17px';
        elemento3.style.marginTop = '77px';
    }else if(larguraTela >= 975 && larguraTela <= 1110){
        // Alteração para changeImage7 quando a largura está entre 975 e 1110
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
        elemento2.style.marginTop = '22px';
        elemento3.style.marginTop = '53px';
    }
    else if(larguraTela >= 1111 && larguraTela <= 1366){
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
        elemento1.style.marginTop = '27px';
        elemento2.style.marginTop = '22px';
        elemento3.style.marginTop = '34px';
    }
    else if(larguraTela >= 1367 && larguraTela <= 1920) {
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
        elemento3.style.marginTop = '54px';
    }else {
       console.log('123')
        // Se nenhuma condição for atendida, adicione o código apropriado aqui
    }
}
ajustarPosicao();
window.addEventListener('resize' , ajustarPosicao);


