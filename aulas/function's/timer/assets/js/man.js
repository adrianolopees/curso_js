function relogio() {
  function getTimeFromSecond(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSecond(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      relogio.classList.remove("zerar");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.add("zerar");
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
}
relogio()