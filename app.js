import GameCanvas from "./panel/game-canvas.js"
import StoryCanvas from "./panel/story-canvas.js";

window.addEventListener("load",function(){
       const gameCanvas = new GameCanvas();
       gameCanvas.onnextGame=()=>{
              gameCanvas.dom.classList.add("d-none");
              storyCanvas.dom.classList.remove("d-none");
              
              gameCanvas.pause=true;
       }
       
       
       
       const storyCanvas = new StoryCanvas();
       gameCanvas.run();
       storyCanvas.run();
})