
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import MyGame from "./game/MyGame";

function main()
{
    if (!WebGL.isWebGL2Available())
    {
        const warning = WebGL.getWebGL2ErrorMessage();
        console.log(`WEBGL IS NOT COMPATIBLE!\nError:\n${warning}`);
    }

    let game = new MyGame(
        document.querySelector("#rendering-canvas")
    );

    game.start();
}

main();
