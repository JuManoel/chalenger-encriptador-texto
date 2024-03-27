function encriptar(cadena){
    if(validad(cadena)){
        let encriptada="";
        let lower="";
        for (let i = 0; i < cadena.length; i++) {
            lower=cadena[i].toLowerCase();
            if(isVocal(lower)){
                switch(lower){
                    case "a":
                        encriptada+="ai";
                        break;
                    case "e":
                        encriptada+="enter";
                        break;
                    case "i":
                        encriptada+="imes";
                        break;
                    case "o":
                        encriptada+="ober";
                        break;
                    case "u":
                        encriptada+="ufat";
                        break;
                }
            }else{
                encriptada+=lower;
            }
            
        }
        return encriptada;
    }
    
    
}

function desencriptar(cadena){
    if(validad(cadena)){
        let desencriptada="";
        let lower="";
        for (let i = 0; i < cadena.length; i++) {
            lower=cadena[i].toLowerCase();
            if(isVocal(lower)){
                switch(lower){
                    case "a":
                        if((i+1)<cadena.length){
                            let test=cadena[i]+cadena[i+1]
                            if(test=="ai"){
                                desencriptada+="a";
                                i++;
                            }else{
                                desencriptada+=cadena[i];
                            }
                        }else{
                            desencriptada+=cadena[i];
                        }
                        break;
                    case "e":
                        if((i+4)<cadena.length){
                            let test=cadena[i]+cadena[i+1]+cadena[i+2]+cadena[i+3]+cadena[i+4]
                            if(test=="enter"){
                                desencriptada+="e";
                                i+=4;
                            }else{
                                desencriptada+=cadena[i];
                            }
                        }else{
                            desencriptada+=cadena[i];
                        }
                        break;
                    case "i":
                        if((i+3)<cadena.length){
                            let test=cadena[i]+cadena[i+1]+cadena[i+2]+cadena[i+3]
                            if(test=="imes"){
                                desencriptada+="i";
                                i+=3;
                            }else{
                                desencriptada+=cadena[i];
                            }
                        }else{
                            desencriptada+=cadena[i];
                        }
                        break;
                    case "o":
                        if((i+3)<cadena.length){
                            let test=cadena[i]+cadena[i+1]+cadena[i+2]+cadena[i+3]
                            if(test=="ober"){
                                desencriptada+="o";
                                i+=3;
                            }else{
                                desencriptada+=cadena[i];
                            }
                        }else{
                            desencriptada+=cadena[i];
                        }
                        break;
                    case "u":
                        if((i+3)<cadena.length){
                            let test=cadena[i]+cadena[i+1]+cadena[i+2]+cadena[i+3]
                            if(test=="ufat"){
                                desencriptada+="u";
                                i+=3;
                            }else{
                                desencriptada+=cadena[i];
                            }
                        }else{
                            desencriptada+=cadena[i];
                        }
                        break;
                }
            }else{
                desencriptada+=lower;
            }
            
        }
        return desencriptada;
    }
}


function isVocal(letra){
    let lower = letra.toLowerCase();
    return (lower=="a" || lower=="e" ||lower=="i" ||lower=="o" ||lower=="u");
}

function validad(cadena){
    let isLetra=true;
    let letras=" qwertyuiopasdfghjklçzxcvbnm";
    for (let i = 0; i < cadena.length; i++) {
        isLetra=false;
        for (let j = 0; j < letras.length; j++) {
            if(letras[j]==cadena[i].toLowerCase()){
                isLetra=true
                break;
            }
        }
        if(!isLetra){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Proibido caracteres Especiales (numeros, !@#$, saltos de linea ...)",
              });
            return false;
        }
        if(cadena[i]==cadena[i].toUpperCase() && cadena[i]!=" "){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Solo minusculas",
              });
            return false;
        }
        
    }
    return true;
}

function getElementEnc(){
    let text=encriptar(document.getElementById("textEncriptar").value);
    document.getElementById("textoDesCrip").innerHTML =text;
}

function getElementDesEnc(){
    let text=desencriptar(document.getElementById("textEncriptar").value);
    document.getElementById("textoDesCrip").innerHTML=text;
}


function copiarTexto() {
    const textoACopiar = textoDesCrip.innerHTML;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            alert("Texto copiado al portapapeles")
            
        })
        .catch((error) => {
            alert('Fallo al copiar el texto al portapapeles:', error);
        })
}