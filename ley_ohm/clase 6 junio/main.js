//declaro funcion asincrónica (con async y después await)
async function consumir_datos(){
    //realizo solicitud http a la página para traer la información (método GET)
   const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
   // guardo solo datos json, nada de cabeceras ni otros aditivos
   const datos_definitivos = await datos.json()
    let filas = []
   datos_definitivos.forEach( (element,index) => {
        let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.casa.nombre}</td>
                <td>$${element.casa.compra}</td>
                <td>$${element.casa.venta}</td>
            </tr>
        `
        filas.push(fila)
        
    });
    document.getElementById("tbody").innerHTML = filas.join('')
}

//invoco a la función
consumir_datos()