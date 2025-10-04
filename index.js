
// api url 
const API_URL = "aeada9174a1f47da9c6124228250410";
function getData() {
    let data = fetch(`http://api.weatherapi.com/v1/current.json?key=${API_URL}&q=Surat&aqi=yes`)
        .then(res => res.json())
        .then(async data1 => {
            // console.log(data1)
        })
    // console.log(data);
}
getData();

function getCountryData() {
    let search = document.getElementById("search");
    let cityData = document.getElementById("cityData");
    let str = "";

    cityData.innerHTML = `<tr>
        <th>City</th>
        <th>Tz_id</th>
        <th>Local_time</th>
        <th>Humidity</th>
        <th>Temp_c</th>
        <th>Temp_f</th>
        <th>Wind_direction</th>
        <th>Icon</th>
    </tr>`;

    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_URL}&q=${search.value}&aqi=yes`)
        .then(res => {
            if (!res.ok) {
                throw new Error("City not found");
            }
            return res.json()
        })
        .then(data1 => {
            str += `<tr>
                <td>${data1.location.name}</td>
                <td>${data1.location.tz_id}</td>
                <td>${data1.location.localtime}</td>
                <td>${data1.current.humidity}</td>
                <td>${data1.current.temp_c}</td>
                <td>${data1.current.temp_f}</td>
                <td>${data1.current.wind_dir}</td>
                <td><img src="https:${data1.current.condition.icon}" alt="icon"> ${data1.current.condition.text}</td>
            </tr>`;
            cityData.innerHTML += str;
        })
        .catch(err => alert("❌ Invalid city name! Please try again."));

    search.value = "";
}









