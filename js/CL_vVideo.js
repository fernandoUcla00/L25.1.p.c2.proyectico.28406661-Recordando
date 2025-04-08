export default class CL_vVideo{
    constructor(){
        this.inCodigo = document.getElementById("videoForm_inCodigo");
        this.inCosto = document.getElementById("videoForm_inCosto");
        this.inHD = document.getElementById("videoForm_inHD");
        this.btProcesarVideo = document.getElementById("videoForm_btProcesar");
    }

    get codigo() {return this.inCodigo.value;}
    get costo() {return this.inCosto.value;}
    get hd() {return this.inHD.value;}
}