function dividir(a,b){
    const resultado  = parseFloat (a) / parseFloat (b)
    return resultado
}

function recolectar_datos(){
    const nro1 = document.getElementById("inp_n1").value
    const nro2 = document.getElementById("inp_n2").value

    const respuesta = dividir(nro1,nro2)
    document.getElementById("h_resultado").innerHTML = "La resistencia es de: " + respuesta
}
