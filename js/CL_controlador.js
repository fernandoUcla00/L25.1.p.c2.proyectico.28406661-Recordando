export default class CL_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
      }

      procesarVideo(){ 
        this.modelo.procesarVideo(this.vista.procesarVideo());
        this.vista.reportarVideo(
         this.modelo.totalVendido(),
         this.modelo.promedioVentasDigitales()
        );
      }

      procesarFotografia(){ 
        this.modelo.procesarFotografia(this.vista.procesarFotografia());
        this.vista.reportarFotografia(
        );
      }

      
}