


let arrIcons = [
'/iconosSlider/bootstrap.png',
'/iconosSlider/css-3.png',
'/iconosSlider/git.png', 
'/iconosSlider/github.png',
'/iconosSlider/html5.png',
'/iconosSlider/icons8-nodejs-480.png',
'/iconosSlider/js.png',
'/iconosSlider/react.png',
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
    
    
}, 1000)

 


