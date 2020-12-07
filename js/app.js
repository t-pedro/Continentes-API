const banderas = document.getElementById('banderas');

document.addEventListener('DOMContentLoaded', function (event) {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtrarDatos(data)
    } catch (error) {
        console.log('Error')
    }
}

//Ciclo forEach

// const banderillas = data => {
//     let elementos = '';
//     //data.foreach( item => {
//     data.some( (item, index) => { //Se utiliza Some porque forEach no se puede cortar el ciclo
//         elementos += `
//         <article class="card">
// 			<img src="${item.flag}" alt="" class="img-fluid">
// 			<div class="card-content">
// 				<h3>${item.name}</h3>
// 				<p>
// 					<b>Population:</b> 
// 					${item.population}
// 				</p>	
// 				<p>
// 					<b>Capital:</b>
// 					${item.capital}
// 				</p>	
// 				<p>
// 					<b>Región:</b> 
// 					${item.region}
//                 </p>
//                 <p>
//                 <a class="btn-info" href="pais.html?name=${item.name}">Mas info</a>
//                 </p>		
// 			</div>
// 		</article>
//         `
//         //return index === 15;
//     });

//     banderas.innerHTML = elementos;
// }

//Con ciclo For

const banderillas = data => {
    let elementos = '';

    for (let i = 0; i <= 50; i++) {
        elementos += `
        <article class="card">
			<img src="${data[i].flag}" alt="" class="img-fluid">
			<div class="card-content">
				<h3>${data[i].name}</h3>
				<p>
					<b>Population:</b> 
					${data[i].population}
				</p>	
				<p>
					<b>Capital:</b>
					${data[i].capital}
				</p>	
				<p>
					<b>Región:</b> 
					${data[i].region}
                </p>
                <p>
                <a class="btn-info" href="pais.html?name=${data[i].name}">Mas info</a>
                </p>		
			</div>
		</article>
        `
    }

    banderas.innerHTML = elementos;
}