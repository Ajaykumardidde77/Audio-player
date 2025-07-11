
let prevButton=document.getElementById("prev");
let VDown=document.getElementById("VDown");
let restart=document.getElementById("restart");
let play=document.getElementById("play");
let pause=document.getElementById("pause");
let VUp=document.getElementById("VUp");
let nextButton=document.getElementById("next");
let img=document.getElementById("img");

let AudioPlayer=new Audio("/Audios/Ak1.mp3");
console.log(AudioPlayer.paused);
let images=["ajay","kusuma","mahesh","moni","tejesh"]
let Audios=["Ak1","AK2","AK3","AK4","AK5"]

let i=0;
AudioPlayer.volume=0.1;

restart.addEventListener('click',()=>{
    AudioPlayer.currentTime=0;
    AudioPlayer.play(); 
  

});


VUp.addEventListener('click',()=>{

    if(AudioPlayer.volume<=1){
    AudioPlayer.volume=AudioPlayer.volume+0.1;
    }
});

VDown.addEventListener('click',()=>{

    if(AudioPlayer.volume>0.1){
    AudioPlayer.volume=AudioPlayer.volume-0.1;
    }
});


nextButton.addEventListener('click',()=>{

    if (i<Audios.length-1){
        i++;
        console.log("from next if "+i)
    }else{
        i=0;
         console.log("from next else "+i)
    }


    img.src="/image/"+images[i]+".jpeg";
    AudioPlayer.src="/Audios/"+Audios[i]+".mp3";
    AudioPlayer.play();


});


prevButton.addEventListener('click',()=>{
    if(i<=0){
       
        i=images.length-1;
        console.log("from if "+i)

    }else{

       i--;
        console.log("from prev else "+i)
    }

    img.src="/image/"+images[i]+".jpeg";
    AudioPlayer.src="/Audios/"+Audios[i]+".mp3";
    AudioPlayer.play();
});

play.addEventListener('click',()=>{

   
      console.log(AudioPlayer.paused)
      if(AudioPlayer.paused){
        AudioPlayer.play();
    }else{
        AudioPlayer.pause()
    }

});

pause.addEventListener('click',()=>{
    console.log(AudioPlayer.paused)

    if(AudioPlayer.paused!=true){
        AudioPlayer.pause();
    }else{
        AudioPlayer.play()
    }
        
});