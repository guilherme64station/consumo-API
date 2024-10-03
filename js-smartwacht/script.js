// substitua pela sua chave da API do openweathermap
const apiKey = '5eae006262b01649fcd06673287d674e';
const city = 'são paulo'; 

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Atualiza os elementos na tela
        document.getElementById('city').innerText = 
data.name
;
        document.getElementById('temp').innerText = `${Math.round(data.main.temp)}ºC`;

    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        document.getElementById('city').innerText = 'Erro';
        document.getElementById('temp').innerText = '--ºC';
    }
}

// Chama a função quando a página é carregada
window.onload = getWeather; 