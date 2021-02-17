"use strict";

const select = document.querySelector(".comuni");
const wrapper = document.querySelector(".wrapper");

const img = document.querySelector(".weather_icon");
const text = document.querySelector(".text");

const temp = document.querySelector(".temp");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const tempF = document.querySelector(".tempF");
const minF = document.querySelector(".minF");
const maxF = document.querySelector(".maxF");

const pressureInfo = document.querySelector(".pressure");
const windInfo = document.querySelector(".wind");
const humidityInfo = document.querySelector(".humidity");

let state = {
  config: {
    api_key: "9ba7a3bdf9fee25bbfb09c870337694c",
    base_url: "https://api.openweathermap.org/data/2.5/weather?q=",
    base_img: "http://openweathermap.org/img/wn/",
    lang: null,
  },
  selectOptions: [
    {
      name: "Palermo",
      value: "palermo",
    },
    {
      name: "Bagheria",
      value: "bagheria",
    },
    {
      name: "Monreale",
      value: "monreale",
    },
    {
      name: "Carini",
      value: "carini",
    },
    {
      name: "Partinico",
      value: "partinico",
    },
    {
      name: "Misilmeri",
      value: "misilmeri",
    },
    {
      name: "Termini Imerese",
      value: "termini+imerese",
    },
    {
      name: "Villabate",
      value: "villabate",
    },
    {
      name: "Cefalù",
      value: "cefalù",
    },
    {
      name: "Ficarazzi",
      value: "ficarazzi",
    },
    {
      name: "Cinisi",
      value: "cinisi",
    },
    {
      name: "Terrasini",
      value: "terrasini",
    },
    {
      name: "Casteldaccia",
      value: "casteldaccia",
    },
    {
      name: "Capaci",
      value: "capaci",
    },
    {
      name: "Belmonte Mezzagno",
      value: "belmonte+mezzagno",
    },
    {
      name: "Santa Flavia",
      value: "santa+flavia",
    },
    {
      name: "Corleone",
      value: "corleone",
    },
    {
      name: "Trabia",
      value: "trabia",
    },
    {
      name: "Altofonte",
      value: "altofonte",
    },
    {
      name: "Castelbuono",
      value: "castelbuono",
    },
    {
      name: "San Giuseppe Jato",
      value: "san+giuseppe+jato",
    },
    {
      name: "Altavilla Milicia",
      value: "altavilla+milicia",
    },
    {
      name: "Caccamo",
      value: "caccamo",
    },
    {
      name: "Campofelice di Roccella",
      value: "campofelice+di+roccella",
    },
    {
      name: "Borgetto",
      value: "borgetto",
    },
    {
      name: "Isola delle Femmine",
      value: "isola+delle+femmine",
    },
    {
      name: "Lercara Friddi",
      value: "lercara+friddi",
    },
    {
      name: "Gangi",
      value: "gangi",
    },
    {
      name: "Marineo",
      value: "marineo",
    },
    {
      name: "Balestrate",
      value: "balestrate",
    },
    {
      name: "Piana degli Albanesi",
      value: "piana+degli+albanesi",
    },
    {
      name: "Montelepre",
      value: "montelepre",
    },
    {
      name: "San Cipirello",
      value: "san+cipirello",
    },
    {
      name: "Cerda",
      value: "cerda",
    },
    {
      name: "Prizzi",
      value: "prizzi",
    },
    {
      name: "Bisacquino",
      value: "bisacquino",
    },
    {
      name: "Torretta",
      value: "torretta",
    },
    {
      name: "Bolognetta",
      value: "bolognetta",
    },
    {
      name: "Collesano",
      value: "collesano",
    },
    {
      name: "Caltavuturo",
      value: "caltavuturo",
    },
    {
      name: "Ciminna",
      value: "ciminna",
    },
    {
      name: "Lascari",
      value: "lascari",
    },
    {
      name: "Alia",
      value: "alia",
    },
    {
      name: "Valledolmo",
      value: "valledolmo",
    },
    {
      name: "Villafrati",
      value: "villafrati",
    },
    {
      name: "Castellana Sicula",
      value: "castellana+sicula",
    },
    {
      name: "Polizzi Generosa",
      value: "polizzi+generosa",
    },
    {
      name: "Montemaggiore Belsito",
      value: "montemaggiore+belsito",
    },
    {
      name: "Petralia Soprana",
      value: "petralia+soprana",
    },
    {
      name: "Camporeale",
      value: "camporeale",
    },
    {
      name: "Trappeto",
      value: "trappeto",
    },
    {
      name: "Castronovo di Sicilia",
      value: "castronovo+di+sicilia",
    },
    {
      name: "Pollina",
      value: "pollina",
    },
    {
      name: "Mezzojuso",
      value: "mezzojuso",
    },
    {
      name: "Sciara",
      value: "sciara",
    },
    {
      name: "Petralia Sottana",
      value: "petralia+sottana",
    },
    {
      name: "Chiusa Sclafani",
      value: "chiusa+sclafani",
    },
    {
      name: "Vicari",
      value: "vicari",
    },
    {
      name: "Roccapalumba",
      value: "roccapalumba",
    },
    {
      name: "Giardinello",
      value: "giardinello",
    },
    {
      name: "Palazzo Adriano",
      value: "palazzo+adriano",
    },
    {
      name: "Alimena",
      value: "alimena",
    },
    {
      name: "baucina",
      value: "baucina",
    },
    {
      name: "Ventimiglia di Sicilia",
      value: "ventimiglia+di+sicilia",
    },
    {
      name: "Giuliana",
      value: "giuliana",
    },
    {
      name: "Geraci Siculo",
      value: "geraci+siculo",
    },
    {
      name: "Contessa Entellina",
      value: "contessa+entellina",
    },
    {
      name: "San Mauro Castelverde",
      value: "san+mauro+castelverde",
    },
    {
      name: "Isnello",
      value: "isnello",
    },
    {
      name: "Roccamena",
      value: "roccamena",
    },
    {
      name: "Bompietro",
      value: "bompietro",
    },
    {
      name: "Ustica",
      value: "ustica",
    },
    {
      name: "Campofiorito",
      value: "campofiorito",
    },
    {
      name: "Aliminusa",
      value: "aliminusa",
    },
    {
      name: "Godrano",
      value: "godrano",
    },
    {
      name: "Cefalà Diana",
      value: "cefalà+diana",
    },
    {
      name: "Blufi",
      value: "blufi",
    },
    {
      name: "Santa Cristina Gela",
      value: "santa+cristina+gela",
    },
    {
      name: "Gratteri",
      value: "gratteri",
    },
    {
      name: "Scillato",
      value: "scillato",
    },
    {
      name: "Campofelice di Fitalia",
      value: "campofelice+di+fitalia",
    },
    {
      name: "Sclafani Bagni",
      value: "sclafani+bagni",
    },
  ],
};

function getUrl(select) {
  const { api_key, base_url } = state.config;
  return `${base_url}${select}&units=metric&appid=${api_key}`;
}

function WeatherBase(
  weather,
  icon,
  maintemp,
  mintemp,
  maxtemp,
  pressure,
  wind,
  humidity
) {
  text.textContent = weather;
  img.src = `${state.config.base_img}${icon}@4x.png`;
  temp.textContent = `${Math.round(maintemp)}°`;
  min.innerHTML = `<span>Min</span> ${Math.round(mintemp)}°`;
  max.innerHTML = `<span>Max</span> ${Math.round(maxtemp)}°`;
  pressureInfo.textContent = pressure;
  windInfo.textContent = `${wind} km/h`;
  humidityInfo.textContent = `${humidity}%`;

  tempF.textContent = `${Math.round(maintemp * 1.8 + 32)}°`;
  minF.innerHTML = `<span>Min</span> ${Math.round(mintemp * 1.8 + 32)}°`;
  maxF.innerHTML = `<span>Max</span> ${Math.round(maxtemp * 1.8 + 32)}°`;
}

function getData() {
  const url = getUrl(select.value);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const windCalc = (data.wind.speed * 3.6).toFixed(2);
      WeatherBase(
        data.weather[0].description,
        data.weather[0].icon,
        data.main.temp,
        data.main.temp_min,
        data.main.temp_max,
        data.main.pressure,
        windCalc,
        data.main.humidity
      );
    });
}

function getTemp() {
  if (state.click === 0) {
    temp.textContent = `${Math.round(state.temp * 1.8 + 32)}°`;
    min.innerHTML = `<span>Min</span> ${Math.round(state.tempMin * 1.8 + 32)}°`;
    max.innerHTML = `<span>Max</span> ${Math.round(state.tempMax * 1.8 + 32)}°`;
  }
}

state.selectOptions.forEach((e) => {
  const option = document.createElement("option");
  option.textContent = e.name;
  option.value = e.value;
  select.appendChild(option);

  if (option.value === "palermo") {
    option.selected = true;
    getData();
  }
});

wrapper.addEventListener("click", () => {
  document.querySelector(".temperaturesC").classList.toggle("hidden");
  document.querySelector(".temperaturesF").classList.toggle("hidden");
  document.querySelector(".unitC").classList.toggle("hidden");
  document.querySelector(".unitF").classList.toggle("hidden");
});
