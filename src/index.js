

let arrIcons = [
'./iconosSlider/bootstrap.png',
'./iconosSlider/css-3.png',
'./iconosSlider/git.png', 
'./iconosSlider/github.png',
'./iconosSlider/html5.png',
'./iconosSlider/icons8-nodejs-480.png',
'./iconosSlider/js.png',
'./iconosSlider/react.png',
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
                
                }if(i>5){
                    document.slider6.src = arr[7];
                    
                    }
    if(i< arrIcons.length-2){
        i++;
    }else{
        i = 0;
    }
    
}

setInterval(()=>{
    cambiarImagenes(arrIcons)
    
    
}, 1000)


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
 
 let str = ` "Soy un apasionado de la informática, en busca de nuevas experiencias, desafíos que me ayuden a obtener conocimientos y practicas para ir incorporando día a día en mi vida"; `;
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
           
        }
        else{
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
//cambiar idioma
const idioma = document.getElementById('idioma');
idioma.addEventListener('click', ()=>{
    console.log('click')
})

//que se muestre el apartado mobile
const menuHeader = document.getElementById('toggleOpen');
const list =  document.getElementById('navegationMobile')

menuHeader.addEventListener('click',(e)=>{
    
    if(!list.classList.contains("navegationMobile1")){
        list.classList.add("navegationMobile1")
        list.classList.remove("menuMobile")
     }else{
         list.classList.add("menuMobile")
         list.classList.remove("navegationMobile1")
     }
})

//scrolleo a las diferentes secciones
const sections = document.querySelectorAll("section[Id]");

function scroll(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50;
        console.log(sectionHeight, sectionTop)
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector(".navegation ul a [href*=" + sectionsId + "]").classList.add("active-link")
        }else{
            document.querySelector(".navegation ul a [href*=" + sectionsId + "]").classList.remove("active-link")

        }
    })
}

//readMore description definimos evento
const spanDescription =  document.getElementById('readMoreSpan'),
      readMoreD = document.getElementById('readMoreD'),
      readMoreMasD = document.getElementById('readMenosD')
readMore.addEventListener('click',()=>{
    leerMas(spanDescription,readMoreD, readMoreMasD)

})
//tecnologias description definimos evento
const spanDescriptionT =  document.getElementById('readMoreSpanT'),
      readMoreTM = document.getElementById('readMenosT'),
      readMoreMasT = document.getElementById('readMoreMasT')
readMoreT.addEventListener('click',()=>{
    leerMas(spanDescriptionT,readMoreMasT,readMoreTM )

})

//leer mas menos cursos
const div =  document.getElementById('masOmenosCursos'),
      leerMasMenosCursosD =  document.getElementById('leerMasCursosDiv'),
      readMoreC = document.getElementById('leerMasCursos'),
      readMenosC = document.getElementById('leerMenosCursos')
div.addEventListener('click',()=>{
    leerMas(leerMasMenosCursosD,readMoreC,readMenosC)

})
//funcion para desplegar leer mas y leer menos
const leerMas = (span2, leerMas, leerMenos)=>{
    if(!span2.classList.contains("leerMasDescription1")){
        //cambio de clases en vistas
        span2.classList.add("leerMasDescription1")
        span2.classList.remove("leerMasDescription")
        //cambio de clases en boton
        leerMenos.classList.remove("leerMenos")
        leerMas.classList.add("leerMenos")
     }else{
         //cambio de clases en vistas
         span2.classList.remove("leerMasDescription1")
         span2.classList.add("leerMasDescription")
         //cambio de clases en boton
         leerMas.classList.remove("leerMenos")
         leerMenos.classList.add("leerMenos")
     }
}
