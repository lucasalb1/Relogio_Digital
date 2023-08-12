
const hora = document.querySelector('#horas')
const minuto = document.querySelector('#minutos')
const segundo = document.querySelector('#segundos')

const relogio = setInterval(function time(){ 
    let dateToday = new Date();
    let hor = dateToday.getHours();
    let minut = dateToday.getMinutes();
    let segund = dateToday.getSeconds();

    if (hor < 10) hor = '0' + hor;
    if (minut < 10) minut = '0' + minut;
    if (segund < 10) segund = '0' + segund;

    hora.textContent = hor;
    minuto.textContent = minut;
    segundo.textContent = segund;
})
