//declaro funcion asincrónica (con async y después await)
async function consumir_datos(){
    //realizo solicitud http a la página para traer la información (método GET)
   const datos = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   // guardo solo datos json, nada de cabeceras ni otros aditivos
   const datos_definitivos = await datos.json()
    let filas = []
   datos_definitivos.forEach( (element,index) => {
        let fila = `
            <tr>
                <td><img src="${element.image}"  class="img-fluid" ></td>
                <td>${element.name}</td>
                <td>${element.symbol}</td>
                <td>${element.current_price}</td>
                <td>${element.price_change_percentage_24h}</td>
                <td>${element.total_volume}</td>
            </tr>
        `
        filas.push(fila)
        
    });
    document.getElementById("tbody").innerHTML = filas.join('')
}
//invoco a la función
consumir_datos()