import CL_promocion from "./CL_promocion.js";

export default class CL_video extends CL_promocion {
    constructor(codigo,costoBase,hd) {
        super(codigo,costoBase);
        this.hd = hd;
    }
     
    incrementoVideo() {
        if (this.hd === "SI") {
            return this.costoBase * 0.2;
        } 
         else if (this.hd === "NO") {
            return 0;
        }
    }
        
    precioFinal() {
        return this.costoBase + this.incrementoVideo() ;
    }
}