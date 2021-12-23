

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
const darkmode= document.getElementById('theme-button'),
      descripDark = document.getElementById('containerAbout'),
      educationDark = document.getElementById('education'),
      coursesDark = document.getElementById('darkCourses'),
      tecnologies = document.getElementById('tecnoDark'),
      contactme = document.getElementById('formSubmit'),

      body = document.getElementById('body')

darkmode.addEventListener('click',(e)=>{
 
    if(body.classList.contains("boody")){
        body.classList.add('bodyDark');
        body.classList.remove('boody');
        darkmode.classList.remove('uil-moon')
        darkmode.classList.add('uil-sun')
        descripDark.classList.add('backgroundDarkItems')
        educationDark.classList.add('backgroundDarkItems')
        coursesDark.classList.add('backgroundDarkItems')
        tecnologies.classList.add('backgroundDarkItems')
        contactme.classList.add('backgroundDarkItems')
        

    }else{
        body.classList.add('boody');
        body.classList.remove('bodyDark');
        darkmode.classList.remove('uil-sun')
        darkmode.classList.add('uil-moon')
        descripDark.classList.remove('backgroundDarkItems')
        educationDark.classList.remove('backgroundDarkItems')
        coursesDark.classList.remove('backgroundDarkItems')
        tecnologies.classList.remove('backgroundDarkItems')
        contactme.classList.remove('backgroundDarkItems')
    }
    
    
    
})
//cursor Description
let str = `"Soy un apasionado de la informática, en busca de nuevas experiencias, desafíos que me ayuden a obtener conocimientos y practicas para ir incorporando día a día en mi vida";`;
let str2 = `"I am passionate about computing, looking for new experiences, challenges and practices that help me gain knowledge to incorporate day by day into my life";`;
const cursor = document.getElementById('description')
let array = str.split('')
let array2 = str2.split('')
let inicio = cursor.innerHTML;
let conta = 0;
const escribir = (arr)=>{
    setTimeout(()=>{
        cursor.innerHTML += arr[conta];
        conta++;    
        if(conta < arr.length){
           
         escribir(arr)
            
        }
        else{
            conta = 0;
        }
        
    },50)
}

//evento de escroll para descripcion
setTimeout(()=>{escribir(array)},2000)

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


//translate to english
const englishToggle = document.getElementById('idioma')
englishToggle.addEventListener('click', (e)=>{
        if(!englishToggle.classList.contains("active")){
          englishToggle.classList.add("active");
            setTimeout(()=>{escribir(array2)},2000)
            //nav
            cambiaIdioma('nav-inicio','<b><</b>Home<b>></b>') 
            cambiaIdioma('nav-sobremi','<b><</b>About Me<b>></b>') 
            cambiaIdioma('nav-tecnologias','<b><</b>Tecnologies<b>></b>') 
            cambiaIdioma('nav-contacto','<b><</b>Contact<b>></b>') 
            //inicio
            cambiaIdioma("title_descript","<b class='b3'><</b>Hi,I'm Luciano Chiroli<b class='b3'>/></b>")
            cambiaIdioma("contactame","Contact Me <b class='b5'><i class='uil uil-message button__icon'></i></b>")
            cambiaIdioma("sTitle",`<b class='b1'>class =</b> "Frontend Developer";`);
            cambiaIdioma("description","<b class='b3'>let</b> <b class='b2'>description</b> = ")
            cambiaIdioma("sobreMiTitle",`<b class="b2"><</b>About Me<b class="b2">/></b>`)
            //description
            cambiaIdioma("aboutDescription",`I am from Mendoza, Argentina. I am currently 20 years old and I am doing a university degree in programming,`)
            cambiaIdioma("readMoreSpan",`at the UTN(Universidad Tecnologica Nacional) Regional College Mendoza. I am a self-taught person, 
            persevering and looking for projects that help me grow professionally<b class="b4">"</b>`)
            cambiaIdioma("readMoreD",`Read More <i class="uil uil-arrow-down"></i>` )
            cambiaIdioma("readMenosD",`Read Less <i class="uil uil-arrow-up"></i>` )
            //downloadCv
            cambiaIdioma("downloadCv",`Download CV <b class="b5"><i class="uil uil-download-alt button__icon"></i></b></a>`)
            //educations
            cambiaIdioma("titleEducation",` <b class="b2"><</b>Education<b class="b2">/></b>`)
            cambiaIdioma("soporteTec","Technical Support, Jr. Achivement 2021/2021")
            cambiaIdioma("titleCursos",`<b class="b2"><</b>Web courses<b class="b2">/>`)
            cambiaIdioma("secundario", `Secondary School, Gral Jose De San Martin, N°9-001/2018`)
            //cursos web
            cambiaIdioma("leerMasCursos",`Read More <i class="uil uil-arrow-down"></i>` )
            cambiaIdioma("leerMenosCursos",`Read Less <i class="uil uil-arrow-up"></i>` )
            cambiaIdioma("tecnoTitle",`<b class="b2"><</b>Tecnologies<b class="b2">/></b>` )
            cambiaIdioma("descriptTec",`I have knowledge in web layout, user interface development, in current technologies for a frontend developer, such as HTML5, CSS, Bootstrap,`)
            cambiaIdioma("readMoreSpanT",`JavaScript Vanilla y ReactJs. <br>I also have knowledge of the backend side with node.js and express, in addition to having knowledge of relational databases such as SQL and non-relational databases such as Mongo DB<b class="b4">"</b>`)
            cambiaIdioma("readMoreMasT",`Read More <i class="uil uil-arrow-down"></i>`)
            cambiaIdioma("readMenosT",`Read Less <i class="uil uil-arrow-up"></i>`)
            //contactme
            cambiaIdioma("contactMe",`<b class="b2"> <</b> Contact Me<b class="b2">/></b>`)
            cambiaIdioma("labNombre",`Name:`)
            cambiaIdioma("labAsunto",`Reason:`)
            cambiaIdioma("labMensaje",`Message:`)
            cambiaIdioma("buttonSubmit",`Submit<b class="b5"> <i class="uil uil-message button__icon">`)
            

        }else{
            englishToggle.classList.remove("active");
            setTimeout(()=>{escribir(array)},2000)
        //nav
        cambiaIdioma('nav-inicio','<b><</b>Inicio<b>></b>')
        cambiaIdioma('nav-sobremi','<b><</b>Sobre Mi<b>></b>') 
        cambiaIdioma('nav-tecnologias','<b><</b>Tecnologias<b>></b>') 
        cambiaIdioma('nav-contacto','<b><</b>Contacto<b>></b>') 
        //inicio
        cambiaIdioma("title_descript","<b class='b3'><</b>Hola, soy Luciano Chiroli<b class='b3'>/></b>")
        cambiaIdioma("contactame","Contáctame <b class='b5'><i class='uil uil-message button__icon'></i></b>")
        cambiaIdioma("sTitle",`<b class='b1'>class =</b> "Desarrollador Front End";`);
        //description
        cambiaIdioma("description","<b class='b3'>let</b> <b class='b2'>descripción</b> = ")
        cambiaIdioma("sobreMiTitle",`<b class="b2"><</b>Sobre Mi<b class="b2">/></b>`)
        cambiaIdioma("aboutDescription",`soy de Mendoza,Argentina. Actualmente tengo 20 años y estoy realizando la Tecnicatura universitaria en programación,`)
        cambiaIdioma("readMoreSpan",`en la UTN Facultad Regional Mendoza. Soy una persona autodidacta, 
        perseverante y en busca de proyectos que me ayuden a crecer profesionalmente<b class="b4">"</b>`)
        cambiaIdioma("readMoreD",`Leer Más <i class="uil uil-arrow-down"></i>` )
        cambiaIdioma("readMenosD",`Leer Menos <i class="uil uil-arrow-up"></i>` )
        //downloadCv
        cambiaIdioma("downloadCv",`Descargar CV <b class="b5"><i class="uil uil-download-alt button__icon"></i></b></a>`)
        //education
        cambiaIdioma("titleEducation",` <b class="b2"><</b>Educación<b class="b2">/></b>`)
        cambiaIdioma("soporteTec","Soporte Tecnico, Jr. Achivement 2021/2021")
        cambiaIdioma("titleCursos",`<b class="b2"><</b>Cursos Web<b class="b2">/>`)
        cambiaIdioma("secundario", `Colegio Secundario, Gral Jose De San MartinN°9-001/2018<`)
        cambiaIdioma("leerMasCursos",`Leer Más <i class="uil uil-arrow-down"></i>` )
        cambiaIdioma("leerMenosCursos",`Leer Menos <i class="uil uil-arrow-up"></i>` )
        //tecnologias
        cambiaIdioma("tecnoTitle",`<b class="b2"><</b>Tecnologies<b class="b2">/></b>` )
        cambiaIdioma("descriptTec",`Poseo conocimientos en maquetado web,desarrollo de interfaces de usuario, 
        en las tecnologías actuales para un desarrollador frontend, tales como HTML5, CSS, Bootstrap,`)
        cambiaIdioma("readMoreSpanT",`JavaScript Vanilla y ReactJs. <br>
        También poseo conocimientos en el lado del backend con node.js y express, ademas de contar con conocimientos en bases de datos relacionales como SQL y no relacionales como Mongo DB<b class="b4">"</b>`)
        cambiaIdioma("readMoreMasT",`Leer Mas <i class="uil uil-arrow-down"></i>`)
        cambiaIdioma("readMenosT",`Leer Menos <i class="uil uil-arrow-down"></i>`)
        //contactme
        cambiaIdioma("contactMe",`<b class="b2"> <</b> Contáctame<b class="b2">/></b>`)
        cambiaIdioma("labNombre",`Nombre:`)
        cambiaIdioma("labAsunto",`Asunto:`)
        cambiaIdioma("labMensaje",`Mensaje:`)
        cambiaIdioma("buttonSubmit",`Enviar <b class="b5"> <i class="uil uil-message button__icon">`)
        
    }
})
const label = document.getElementById('labNombre');
console.log(label.innerHTML)

function cambiaIdioma (id, cadena = ""){
    let nombre = document.getElementById(id);
    if(cadena.length > 2) return nombre.innerHTML = cadena;
    
}
