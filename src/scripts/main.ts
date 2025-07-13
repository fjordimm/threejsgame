
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import ThreeJsGame from "./game/ThreeJsGame";

function main()
{
    if (!WebGL.isWebGL2Available())
    {
        const warning = WebGL.getWebGL2ErrorMessage();
        console.log(`WEBGL IS NOT COMPATIBLE!\nError:\n${warning}`);
    }

    let game = new ThreeJsGame(
        document.querySelector("#rendering-canvas")
    );

    game.start();
}

main();
