let intervalo = false;
let tiempo = 0;

const actualizarCronometro = () => {
  tiempo++;
  const horas = Math.floor(tiempo / 3600);
  const minutos = Math.floor((tiempo % 3600) / 60);
  const segundos = tiempo % 60;

  const tiempoFormateado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
  document.getElementById('cronometro').textContent = tiempoFormateado;
};

const iniciarCronometro = () => {
  if (!intervalo) {
    intervalo = setInterval(actualizarCronometro, 1000);
  }
};

const pausarCronometro = () => {
  clearInterval(intervalo);
  intervalo = false;
};

const reiniciarCronometro = () => {
  clearInterval(intervalo);
  intervalo = false;
  tiempo = 0;
    iniciarCronometro();
};
