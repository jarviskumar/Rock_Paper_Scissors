let showSelect = document.getElementById("showSelect")
let result = document.getElementById("result")
let trybtn = document.getElementById("trybtn")
let youCount = 0;
let compCount = 0;
let draw = 0;
// for Rock
function RockFunc(){
  const rockAudio = new Audio("Audio/rock.mp3");
  rockAudio.play()
  loading()
  let computer = Math.floor(Math.random()*3+1);
  if(computer==1){
    computer = "Rock"
  }
  else if (computer==2){
    computer = "Paper"
  }
  else{
    computer = "Scissors"
  }
  setTimeout(()=>{
    showSelect.innerText = `You Choose ${"Rock"} & Computer Choose ${computer}`
  if (computer == "Rock"){
    result.innerText = "Match Draw!";
    draw+=1;
    let drawBox = document.getElementById("draw")
    drawBox.innerText = draw;
  }
  else if (computer == "Paper"){
    result.innerText = "Computer Won"
    compCount+=1;
    let compBox = document.getElementById("comp")
    compBox.innerText = compCount;
  }
  else{
    result.innerText = "You Won"
    youCount+=1;
    let youBox = document.getElementById("you")
    youBox.innerText = youCount;
  }
  
    result.removeAttribute("hidden")
    showSelect.removeAttribute("hidden")
    trybtn.removeAttribute("hidden")
  },1500)
 
}
//for Paper
function PaperFunc(){
  const paperAudio = new Audio("Audio/paper.mp3");
  paperAudio.play()
  loading()
  let computer = Math.floor(Math.random()*3+1);
  if(computer==1){
    computer = "Rock"
  }
  else if (computer==2){
    computer = "Paper"
  }
  else{
    computer = "Scissors"
  }
  
  setTimeout(()=>{
     showSelect.innerText = `You Choose ${"Paper"} & Computer Choose ${computer}`
    
  if (computer == "Paper"){
    result.innerText = "Match Draw!";
    draw+=1;
    let drawBox = document.getElementById("draw")
    drawBox.innerText = draw;
  }
  else if (computer == "Scissors"){
    result.innerText = "Computer Won"
    compCount+=1;
    let compBox = document.getElementById("comp")
    compBox.innerText = compCount;
  }
  else{
    result.innerText = "You Won"
    youCount+=1;
    let youBox = document.getElementById("you")
    youBox.innerText = youCount;
  }
  result.removeAttribute("hidden")
  showSelect.removeAttribute("hidden")
  trybtn.removeAttribute("hidden")
  },1500)
}
//for Scissors
function ScissorsFunc(){
  const scissorAudio = new Audio("Audio/scissors.mp3");
  scissorAudio.play()
  loading()
  let computer = Math.floor(Math.random()*3+1);
  
  if(computer==1){
    computer = "Rock"
  }
  else if (computer==2){
    computer = "Paper"
  }
  else{
    computer = "Scissors"
  }
  
  setTimeout(()=>{
    showSelect.innerText = `You Choose ${"Scissors"} & Computer Choose ${computer}`
     if (computer == "Scissors"){
    result.innerText = "Match Draw!";
    draw+=1;
    let drawBox = document.getElementById("draw")
    drawBox.innerText = draw;
  }
  else if (computer == "Rock"){
    result.innerText = "Computer Won"
    compCount+=1;
    let compBox = document.getElementById("comp")
    compBox.innerText = compCount;
  }
  else{
    result.innerText = "You Won"
    youCount+=1;
    let youBox = document.getElementById("you")
    youBox.innerText = youCount;
  }
  result.removeAttribute("hidden")
  showSelect.removeAttribute("hidden")
  trybtn.removeAttribute("hidden")
  },1500)
 
}

function try_again(){
 result.setAttribute("hidden",true)
  showSelect.setAttribute("hidden",true)
  trybtn.setAttribute("hidden",true) 
  compCount =0;
  let compBox = document.getElementById("comp")
  compBox.innerText = "0";
  youCount = 0;
  let youBox = document.getElementById("you")
  youBox.innerText = "0"
  
  draw  = 0;
  let drawBox = document.getElementById("draw");
  drawBox.innerText = "0";
}

function loading(){
  const loading = document.getElementById("loading");
  loading.removeAttribute("hidden")
  
  result.setAttribute("hidden",true)
  showSelect.setAttribute("hidden",true)
  trybtn.setAttribute("hidden",true) 
  
  setTimeout(()=>{
    loading.setAttribute("hidden",true);
    
  },1500)
}

