import CL_promocion from "./CL_promocion.js";

export default class CL_fotografia extends CL_promocion {
    constructor(codigo,costoBase,tipoFoto) {
        super(codigo,costoBase);
        this.tipoFoto = tipoFoto;
    }

    descuento() {
        if (this.tipoFoto === "D") {
            return this.costoBase * 0.18;
        } 
         else {
            return 0;
        }
    }
    incremento() {
        if (this.tipoFoto == "I") {
            return this.costoBase * 0.13;
        } 
         else {
            return 0;
        }
    }

    precio(){
        return this.costoBase - this.descuento() + this.incremento();
    }
}