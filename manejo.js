const   miTitulo    = document.querySelector ("#sel-leg");
const   miSelector  = document.querySelector ("#sel-opc");
const   miFldset    = document.querySelector ("#mi-fldset")

const   miImgA      = document.querySelector ("#mi-imgA");
const   miVideoB    = document.querySelector ("#mi-videoB") ;

const   IMG_A       = "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/diablo/diablo-header.jpg";
const   LINK_A      = "https://www.lamborghini.com/es-en/historia/diablo";

const   LTE         = "LTE: Long Term Evolution"
const   VIDEO_B     = "Long_term_evolution_goes_live.mp4";

/**
 * Musestra los Datos ingresados en el Opción "C"
 */
function muestraDatos() {
    const   inpNombC    = document.querySelector ("#lbl-nombC");
    const   inpNumC     = document.querySelector ("#lbl-numC");
    const   miTextoC    = document.querySelector ("#mi-textoC");
    miTextoC.textContent = "Nombre: "+inpNombC.value+" - Número de Socio: "+inpNumC.value;
}
/**
 * Elige Opción "A", "B" ó "C" 
 */
function eligeOpcion() {
    opcionEleg = miSelector.value;
    miFldset.innerHTML = "";
    switch (opcionEleg) {
            case "A":
                miTitulo.textContent = "Opción < A >";
                miFldset.innerHTML = `
                <img id="mi-imgA" src=${IMG_A} alt="">
                <br>
                <a id="mi-linkA" href=${LINK_A}>Sigue el Link</a>
                `;
            break;
            case "B":
                miTitulo.textContent =  "Opción < B >";
                miFldset.innerHTML = `
                <p id="mi-textoB">${LTE}</p>
                <video id="mi-videoB" src= ${VIDEO_B} autoplay></video>
                `;
            break;
            case "C":
                miTitulo.textContent = "Opción < C >";
                miFldset.innerHTML = `
                <label for="lbl-nombC">Ingrese su Nombre.................</label>
                <input id="lbl-nombC" type="text" name="Nombre" style= "width:140px; margin-left:1px;">
                <br><br>
                <label for="lbl-numC">Ingrese su Número de socio...</label>
                <input id="lbl-numC" type="number" name="Numero" style= width:140px; margin-left:10px;">
                <br><br>
                <button onclick="muestraDatos()">Registrar datos</button>
                <br>
                <p id="mi-textoC"></p>
                `;
                break;
            default:
                miTitulo.textContent = "Elija una Opción...";
    } /* fin del Switch*/
} /* fin de la función eligeOpcion()*/
/* Coloco al final para que registre la función Elige Opción */
let opcionEleg  = "";
miFldset.innerHTML = "";

/* Fin del Código */

