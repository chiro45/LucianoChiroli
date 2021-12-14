

let arrIcons = [
'../iconosSlider/bootstrap.png',
'../iconosSlider/css-3.png',
'../iconosSlider/git.png', 
'../iconosSlider/github.png',
'../iconosSlider/html5.png',
'../iconosSlider/icons8-nodejs-480.png',
'../iconosSlider/js.png',
'../iconosSlider/react.png',
]
let i = 0

function cambiarImagenes(arr){
    document.slider.src = arr[i];
    if(i>0){
    document.slider2.src = arr[i-1];
    
    }if(i>1){
    document.slider3.src = arr[i-2];
    
    }if(i>2){
        document.slider4.src = arr[i-3];
        
        }if(i>3){
            document.slider5.src = arr[i-4];
            
            }if(i>4){
                document.slider6.src = arr[i-5];
                
                }if(i>3){
                    document.slider6.src = arr[i];
                    
                    }
    if(i< arrIcons.length-2){
        i++;
    }else{
        i = 0;
    }
    
}

setInterval(()=>{
    cambiarImagenes(arrIcons)
    
    
}, 500)


//darck mode
const darkmode= document.getElementById('theme-button') ;

const body = document.getElementById('body');

darkmode.addEventListener('click',(e)=>{
 
    if(body.classList.contains("boody")){
        body.classList.add('bodyDark');
        body.classList.remove('boody');
        darkmode.classList.remove('uil-moon')
        darkmode.classList.add('uil-sun')
    }else{
        body.classList.add('boody');
        body.classList.remove('bodyDark');
        darkmode.classList.remove('uil-sun')
        darkmode.classList.add('uil-moon')
    }
    
    
    
})
//cursor Description
const cursor = document.getElementById('description')

let str = ` "Soy un apasionado de la informática, en busca de nuevas experiencias, desafíos que me ayuden a obtener conocimientos y practicas para ir incorporando día a día en mi vida";`;
let array = str.split('')
let cont = 0;
let inicio = cursor.innerHTML;
let conta = 0;
const escribir = ()=>{
    setTimeout(()=>{
        cursor.innerHTML += array[conta];
        conta++;    
        if(conta != array.length){
            escribir()
            
        }else{
            conta = 0;
        }
       
    },50)
}

//evento de escroll para descripcion
window.addEventListener('scroll',(e)=>{
    let position = window.scrollY;
    if(position>0 && position < 300){
        if(cont < 1){ 
           escribir();
            cont++ 
        }  
    }
    if(position > 1000){
        cursor.innerHTML = inicio;
        cont =0
    }
    
})