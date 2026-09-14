document.getElementById('buscado').addEventListener('input', (e) => {
  const busca = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(busca) ? 'block' : 'none';
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

document.getElementById('btn-tema').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('Service Worker Registrado!'))
    .catch((err) => console.error('Erro no Service Worker:', err));
}


const btnGps = document.getElementById('btn-gps');
const geoInfo = document.getElementById('geo-info');

btnGps.addEventListener('click', () => {
  if (!navigator.geolocation) {
    geoInfo.innerText = "Geolocalização não é suportada neste dispositivo.";
    return;
  }

  geoInfo.innerText = "Obtendo dados do GPS...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
      geoInfo.innerText = `Sua posição atual: Lat ${lat}, Lon ${lon}`;
    },
    (error) => {
      geoInfo.innerText = `Erro ao acessar GPS: ${error.message}`;
    }
  );
});