var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Cargar datos del JSON externo
fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(punto => {
            let popupContent = `
            <img src="${punto.imagen}" alt="Imagen"   width="50"> <br>
                <b> ${punto.nombre}</b>
              <li>${punto.moneda}</li>  
               <li>${punto.idioma}</li> 
                <li>${punto.aduana_importante}</li>
                <a href="${punto.url}" target="_blank">Ver más información</a>
            `;
            L.marker(punto.coords)
                .addTo(map)
                .bindPopup(popupContent);
        });
    })
    .catch(error => console.error('Error al cargar datos:', error));
