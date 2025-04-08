import Cl_vVideo from "./CL_vVideo.js";
import Cl_Video from "./Cl_Video.js";
import Cl_fotografia from "./CL_fotografia.js";
import CL_vFotografia from "./CL_vFotografia.js";
export default class CL_vTienda {
  constructor() {
    this.controlador = null;
    this.tablaVideo=document.getElementById("mainForm_tablaVideo");
    this.tablaFotografia=document.getElementById("mainForm_tablaFotografia");
    this.salida= document.getElementById("salida");

    this.vVideo = new Cl_vVideo();
    this.vVideo.btProcesarVideo.onclick = () =>this.controlador.procesarVideo();
    this.vVideo.btProcesarVideo.hidden=true;

    this.vFotografia = new CL_vFotografia();
    this.vFotografia.btProcesarFoto.onclick = () =>this.controlador.procesarFotografia();
    this.vFotografia.btProcesarFoto.hidden=true;

    }

    procesarFotografia() {
      this.Fotografia = new Cl_fotografia({
        codigo: this.vFotografia.codigo,
        costo: this.vFotografia.costo,
        tipo: this.vFotografia.tipo

      });
      return this.Fotografia;
    }
    reportarFotografia(){
      this.tablaVideo.innerHTML+=`
          <tr>
            <th>${this.Fotografia.codigo}</th>
            <th>${this.Fotografia.costo}</th>
            <th>${this.Fotografia.tipo}</th>
            <th>${this.Fotografia.descuento()}</th>
            <th>${this.Fotografia.incrementoVideo}</th>
            <th>${this.Fotografia.precioFinal}</th>
          </tr>
          `;
    }
  
  procesarVideo() {
    this.Video = new Cl_Video({
      codigo: this.vVideo.codigo,
      costo: this.vVideo.costo,
      hd: this.vVideo.hd
    });
    return this.Video;
  }
  reportarVideo(
    totalVendido,
    promedioVentasDigitales


  ) {
    this.tablaVideo.innerHTML+=`
        <tr>
          <th>${this.Video.codigo}</th>
          <th>${this.Video.costo}</th>
          <th>${this.Video.hd}</th>
          <th>${this.Video.incrementoVideo}</th>
          <th>${this.Video.precioFinal}</th>
        </tr>
        `;

    this.salida.innerHTML = `
    <br>Total vendido: ${totalVendido}
    <br>Promedio de ventas digitales: ${promedioVentasDigitales},
     `; 
  }

} 