import { initGame } from "./Data/data.js";
import { initGameRender } from "./Render/main.js";
import { gloablEvent } from "./Events/global.js";

//will be useful til game ends
const globalState = initGame();
initGameRender(globalState);
gloablEvent();

export { globalState };
