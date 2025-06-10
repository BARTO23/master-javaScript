let fechaActual = new Date();
console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDate());
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
console.log(fechaActual.getMilliseconds());
console.log(fechaActual.getDay());

console.log(
  `Feca completa: ${fechaActual.getDate()} / ${
    fechaActual.getMonth() + 1
  } / ${fechaActual.getFullYear()}`
);
