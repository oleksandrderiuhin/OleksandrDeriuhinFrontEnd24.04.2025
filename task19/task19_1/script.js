const apiKey = "3bb87e89fc1863555c6b201a76af663b";
const city = "Kyiv";

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`
        );

        //if (!response.ok) throw new Error("Помилка завантаження даних");

        const data = await response.json();

       // console.log(data);

        document.getElementById("temperature").textContent = `Температура: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Опис: ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById("temperature").textContent = "Помилка завантаження погоди";
        document.getElementById("description").textContent = "";
        console.error(error);
    }
}


getWeather();