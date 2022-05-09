function sumar(a,b){
    const resultado = parseInt(a) + parseInt(b)
    return resultado   
}
    /*
con esto se comentan varias lineas.
*/

function recolectar_datos()
{
    const dato1 = document.getElementById("inp_d1").value //se usa comillas dobles solo cuando se quiere usar un dato en especifico
    const dato2 = document.getElementById("inp_d2").value

    //invocar a la funcion sumar
    const respuesta = sumar(dato1,dato2)
    document.getElementById("h_resultado").textContent = respuesta
}