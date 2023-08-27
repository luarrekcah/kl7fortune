let button = document.getElementById("geradorbotao"),
  output = document.getElementById("entrada"),
  output2 = document.getElementById("turbo"),
  output3 = document.getElementById("validade");
const whatsAppBanner = document.getElementById("whatsapp");
function getRandomNumber(t, e) {
  let n = Math.random() * (e - t + 1) + t;
  return Math.floor(n);
}
function getRandomNumber(t, e) {
  let n = Math.random() * (e - t + 1) + t;
  return Math.floor(n) + "X";
}
function countdown(t) {
  let e = t;
  const n = setInterval(() => {
    (button.innerHTML = "AGUARDE (" + e + "s...)"),
      e--,
      e < 0 &&
        (clearInterval(n),
        (button.disabled = !1),
        (button.innerHTML = "GERAR NOVO SINAL"));
  }, 1e3);
}
function updateTime() {
  return dayjs().add(2, "m").format("HH:mm");
}
button.addEventListener("click", (t) => {
  Swal.fire({
    title: 'Atenção!',
    text: 'O sinal só funcionará na plataforma abaixo \n ↓',
    icon: 'info',
    confirmButtonText: 'Entendi',
    customClass: {
        popup: 'my-popup-class',
        // adicionando a classe personalizada ao popup
        title: 'my-title-class',
        content: 'my-content-class'
    }
});
  t.preventDefault(),
    (button.disabled = !0),
    (output.innerText = getRandomNumber(5, 10)),
    (output2.innerText = getRandomNumber(5, 10)),
    (output3.innerText = updateTime()),
    countdown(60);
});
