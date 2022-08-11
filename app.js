const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "yellow",
  "green",
  "#c7bf67",
  "#7b55cf",
  "#de4747",
  "#2963ab",
];

button.addEventListener("click", changeBackground);
let sira = 0;

function changeBackground() {
  //rastgele bir renk
  //   const rastgeleSayi = Math.floor(Math.random() * colors.length); //colors.lenght sayısınca random seçer

  //   const secilenRenk = colors[rastgeleSayi];
  //   console.log(rastgeleSayi, secilenRenk);
  //   body.style.background = secilenRenk;

  //sırayla arkaplan rengi seç

  if (sira == 7) sira = 0;
  const secilenRenk = colors[sira];
  sira++;
  body.style.backgroundColor = secilenRenk;
}
