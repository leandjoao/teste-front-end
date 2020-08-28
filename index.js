import "./style.css";

let app = null;
let list = null;
let dropdown = null;

window.addEventListener("ready", () => {
  app = document.querySelector("#app");
  list = app.querySelector(".list");
});

const fetchList = async () => {
  let response = await fetch('https://swapi.dev/api/people/');
  if (response.ok) {
    let json = await response.json();
    console.log(json.results);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

fetchList();
