import {render, changeScreen} from "./util";
import gameTemplate from "./game";

const formTemplate = render(`
  <h1 class="formH">Укажи свое имя</h1>
<div id="wrapper">
	<form id="signin" method="#" action="#">
		<input type="text" id="user" name="user" placeholder="us" />
		<button type="submit" class="btn-form" disabled >B</button>		
	</form>
</div>
`);

const inputForm = formTemplate.querySelector(`form > input`);
const btnForm = formTemplate.querySelector(`.btn-form`);
const userGameName = gameTemplate.querySelector(`.score-board-badge-user`);

inputForm.addEventListener(`input`, () => {
  if (inputForm.value.length > 3) {
    btnForm.removeAttribute(`disabled`);
    btnForm.setAttribute(`id`, `color`);
    btnForm.style.backgroundColor = `red`;
    userGameName.innerHTML = inputForm.value;
  }
});

btnForm.addEventListener(`click`, () => {
  changeScreen(gameTemplate);
});

export default formTemplate;
