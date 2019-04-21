import {Elements} from './element';
import {game} from "./game";

const init = () => {
  Elements.rockDiv.addEventListener(`click`, () => game(`r`));
  Elements.paperDiv.addEventListener(`click`, () => game(`p`));
  Elements.sissorsDiv.addEventListener(`click`, () => game(`s`));
};

init();
