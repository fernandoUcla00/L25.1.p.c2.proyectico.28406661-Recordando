import CL_fotografia from "./CL_fotografia.js";
export default class CL_tienda {
    constructor() {
       acVendido = 0;
       acVentasDigitales = 0;
       contVentasDigitales = 0;

    }
    procesarPromocion(promocion) {   

        if (promocion instanceof CL_fotografia) {
            acVendido += promocion.precio();
            if (promocion.tipoFoto === "D") {
                acVentasDigitales += promocion.precio();
                contVentasDigitales++;
            }
        }
    
}
totalVendido() {
    return acVendido;
}
promedioVentasDigitales() {
    return acVentasDigitales / contVentasDigitales;
}

}