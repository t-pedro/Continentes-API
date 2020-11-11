const banderas = document.getElementById('banderas');

document.addEventListener('DOMContentLoaded', function(event){
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await  fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtrarDatos(data)
    } catch (error) {
        console.log('Error')
    }
}

const banderillas = data => {
    let elementos = '';

    data.forEach(item => {
        elementos += `
        <article class="card">
			<img src="${item.flag}" alt="" class="img-fluid">
			<div class="card-content">
				<h3>${item.name}</h3>
				<p>
					<b>Population:</b> 
					${item.population}
				</p>	
				<p>
					<b>Capital:</b>
					${item.capital}
				</p>	
				<p>
					<b>Región:</b> 
					${item.region}
                </p>
                <p>
                <a class="btn-info" href="pais.html?name=${item.name}">Mas info</a>
                </p>		
			</div>
		</article>
        `
    });
    
    banderas.innerHTML = elementos;
}