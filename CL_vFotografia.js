export default class CL_fotografia{

    constructor(){
        this.inCodigo = document.getElementById("fotografiaForm_inCodigo");
        this.inCosto = document.getElementById("fotografiaForm_inCosto");
        this.inTipoFoto = document.getElementById("fotografiaForm_inTipoFoto");
        this.btProcesar = document.getElementById("fotografiaForm_btProcesar");
    }

    get codigo() {return this.inCodigo.value;}
    get costo() {return this.inCosto.value;}
    get tipoFoto() {return this.inTipoFoto.value;}
}