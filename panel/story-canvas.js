export default class StoryCanvas{
    constructor(){
        this.dom=document.querySelector(".story-canvas");
        this.dom.focus();

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
    }

    run(){
        this.draw();
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(100,100,20,0,Math.PI*2);
        this.ctx.stroke()
    }

}