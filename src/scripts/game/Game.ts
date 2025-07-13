
import GameState from "./gameState/GameState";

export default abstract class Game
{
    public readonly gameState: GameState;

    constructor(renderingCanvas: Element|null)
    {
        if (renderingCanvas === null)
        {
            throw new Error("Argument `renderingCanvas` cannot be null.");
        }
        else
        {
            this.gameState = new GameState(renderingCanvas);
        }
    }

    public start(): void
    {
        const gameState = this.gameState; // for closures
        const thiz = this;                // for closures

        thiz.onStart(gameState);

        function onAnimationFrame(time: number): void
        {
            /* Update the aspect ratio so it's not squished/streched. */
            if (gameState.renderer.domElement.width !== gameState.renderer.domElement.clientWidth ||
                gameState.renderer.domElement.height !== gameState.renderer.domElement.clientHeight)
            {
                gameState.renderer.setSize(gameState.renderer.domElement.clientWidth, gameState.renderer.domElement.clientHeight, false);

                gameState.mainCamera.ren.aspect = gameState.renderer.domElement.clientWidth / gameState.renderer.domElement.clientHeight;
                gameState.mainCamera.ren.updateProjectionMatrix();
            }

            thiz.onFrame(gameState, time, -1);

            gameState.renderer.render(gameState.mainRenderingScene, gameState.mainCamera.ren)
            requestAnimationFrame(onAnimationFrame);
        }

        requestAnimationFrame(onAnimationFrame);
    }

    public abstract onStart(gameState: GameState): void;

    public abstract onFrame(gameState: GameState, time: number, deltaTime: number): void;
}
