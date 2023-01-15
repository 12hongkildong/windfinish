import globalbtn from "../../../globalbtn.js";

export default class ConfirmDlg{
    constructor(){
        this.x=500;
        this.y=200;
        this.sw=400;
        this.sh=200

        this.isVisible=false; // 게이지 0 되면 창 뜨게
        this.disWarning=false; // 게이지 30%되면 창 꺼지게

        this.onclick=null; // 창 전환용
    }

    show(){     // 알림 보이게
        this.isVisible=true;
    }
    blind(){    // 알림 꺼지게
        this.disWarning=true;
    }
    reblind(){  // 알림 다시 시작될 수 있게
        this.isVisible=false;
        this.disWarning=false;
    }

    notifyClick(x,y){
        if((this.x < x && x < this.x+this.sw)&&(this.y<y && y < this.y+this.sh)&&globalbtn.clear)
            if(this.onclick!=null){
                console.log("클릭")
                this.onclick(3);

            }
    }


    update(){



    }

    draw(ctx){
    
        if(this.isVisible && !this.disWarning){
            
            
            ctx.fillStyle='#fff7';
            ctx.fillRect(this.x,this.y,this.sw,this.sh)
            ctx.fillStyle='black';
            ctx.font="bold 35px serif";
            ctx.fillText("스페이스바를 누르세요",   this.sw+120, this.sh+110)
        }

        if(globalbtn.clear){
            ctx.fillStyle='#0003';
            ctx.fillRect(0,0,1400,700)
            ctx.fillStyle='#fff9';
            ctx.fillRect(this.x,this.y,this.sw,this.sh)
            ctx.fillStyle='black';
            ctx.font="bold 35px serif";
            ctx.fillText(`이야기를 계속 보려면`,   this.sw+120, this.sh+80)
            ctx.fillText(`이 칸을 눌러주세요.`,   this.sw+120, this.sh+140)
        }


    }

}