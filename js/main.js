import {changeScreen} from "./util";
import introTemplate from "./intro";
import {timeLocal} from "./currentTime";

setInterval(timeLocal, 1000);

changeScreen(introTemplate);
