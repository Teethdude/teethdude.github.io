//MUSIC PLAYER
//THE LEGEND OF ZELDA THEME NES
function openFormMusicZelda() {
  document.getElementById("MusicZelda").style.display = "block";
 
}

function closeFormMusicZelda() {
  document.getElementById("MusicZelda").style.display = "none";
  zelda.pause();
  zelda.currentTime = 0;
}

var zelda = document.getElementById("zeldaTheme"); 

function playZelda() { 
  zelda.play(); 
} 

function pauseZelda() { 
  zelda.pause(); 
} 
function stopZelda() { 
  zelda.pause(); 
  zelda.currentTime = 0;
} 
//END OF THE LEGEND OF ZELDA THEME NES

//NEON LIGHTS
function openFormMusicNLights() {
  document.getElementById("MusicNLights").style.display = "block";
 
}

function closeFormMusicNLights() {
  document.getElementById("MusicNLights").style.display = "none";
  NLights.pause();
  NLights.currentTime = 0;
}

var NLights = document.getElementById("NLights"); 

function playNLights() { 
  NLights.play(); 
} 

function pauseNLights() { 
  NLights.pause(); 
} 
function stopNLights() { 
  NLights.pause(); 
  NLights.currentTime = 0;
} 
//END OF NEON LIGHTS