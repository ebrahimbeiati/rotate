const myTags = [
  "Min New York",
  "Olaplex",
  "ex nihilo",
  "Melvita",
  "LOCCITANE EN PROVENCE",
  "L'Oréal",
  "zadig&voltaire",
  "trussardi",
  "CRABTREE und EVELYN",
  "REE",
  "BRONNLEY ENGLAND",
  "NASOMATTO",
  "escentric molecules",
  "Thierry Mugler",
  "Cacharel",
  "Byredo",
  "Ermenegildo Zegna",
  "Carolina Herrera",
  "Bond NYC No 9",
  "Bobbi Brown",
  "Moschino",
  "villoresi",
  "CARITA PARIS",
  "DECLEOR PARIS",
  "matiere premiere",
  "Laura Biagiotti",
  "Dsquared2",
  "Van Cleef Arpels",
  "clive christian",
  "Hermes",
  "LA BRUKET",
  "Zenology",
  "Prudenee PARIS",
  "ACCA KAPPA",
  "guerlain",
  "Kilian",
];

var tagCloud = TagCloud(".content", myTags, {
  radius: 400,
  maxSpeed: "fast",
  initSpeed: "fast",
  direction: 135,
  keep: true,
});

var colors = [
  "#34A853",
  "#FBBC05",
  "#EA4335",
  "#4DB6AC",
  "#7FBC00",
  "#DB4437",
  "#F4B400",
  "#4285F4",
];

function changeColor() {
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector(".content").style.color = random_color;
}

changeColor();

setInterval(changeColor, 1000);



