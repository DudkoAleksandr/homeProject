const btn = document.querySelector('.click')

btn.addEventListener('click', async() => {
    const link = `https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json`;

    const response = await fetch(link)
    console.log(response)
    const coords = await response.json()
    console.log(coords.results[0]);
})