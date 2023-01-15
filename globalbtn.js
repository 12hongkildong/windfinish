class Btn{
    #btn;
    constructor(){
        this.#btn = null;

    }
        set btn(value){
            this.#btn=value;
        }
    
        get btn(){
            return this.#btn;
        }

        get clear(){
            return this.#btn.clear;
        }
}


export default new Btn()