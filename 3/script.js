const btn = document.querySelector(".click");
const city = document.querySelector(".cityinput");
const divResult = document.querySelector(".result");

btn.addEventListener("click", async () => {
  const link = `https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=10&language=en&format=json`;

  const response = await fetch(link);
  // console.log(response)
  const coords = await response.json();
  const latitude = coords.results[0].latitude;
  const longitude = coords.results[0].longitude;
  console.log(coords.results[0].name);
  console.log(latitude, longitude);
  const linkWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m`;

  const weather = await fetch(linkWeather);
  const weatherResult = await weather.json();
  const nameCity = document.createElement('p')
  nameCity.innerHTML = `Город: ${coords.results[0].name}`
  const cityWether = document.createElement('p')
  cityWether.innerHTML = `Температура : ${weatherResult.current.temperature_2m}°C`;
  divResult.append(nameCity)
  divResult.append(cityWether)
});

