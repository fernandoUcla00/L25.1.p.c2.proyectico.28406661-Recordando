import Cl_vVideo from "./CL_vVideo.js";
import Cl_Video from "./Cl_Video.js";
import Cl_vVideo from "./CL_vFotografia.js";
import Cl_Video from "./Cl_Fotografia.js";
export default class Cl_vTienda {
  constructor() {
    this.controlador = null;
    this. tabla=document.getElementById("mainForm_tabla")
    this.salida= document.getElementById("salida");

    this.vVideo = new Cl_vVideo();
    this.vVideo.btProcesar.onclick = () =>this.controlador.procesarVideo();
    this.vVideo.btProcesar.hidden=true;

    }
  }
  procesarVideo() {
    this.Video = new Cl_Video({
      
    });
    return this.mVideo;
  }
  reportarVideo(
    Porcentaje,
    porcentajeChicas,
    VideomejorNota


  ) {
    this.tabla.innerHTML+=`
        <tr>
          <th>${this.mVideo.nombre}</th>
          <th>${this.mVideo.cedula}</th>
          <th>${this.mVideo.sexo}</th>
          <th>${this.mVideo.nota}</th>
        </tr>
        `;

    this.salida.innerHTML = `
    <br>Porcentajes de aprobados: ${Porcentaje}%
    <br>El Video con la mejor nota es ${VideomejorNota},
    <br>Porcentaje de chicas aprobadas: ${porcentajeChicas}%
     `; 
  }

} 