let currentDate = document.querySelector(`.sad`);

export let timeLocal = () => {
  let timeD = new Date();
  currentDate.innerHTML = `Часы : ${timeD.getHours()}  Мин : ${timeD.getMinutes()} Сек : ${timeD.getSeconds()}`;
};


