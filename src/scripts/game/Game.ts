
import GameState from "./gameState/GameState";

export default abstract class Game<TGameState extends GameState>
{
    public readonly gameState: TGameState;
    private oldTime: number;

    public constructor(renderingCanvas: Element|null)
    {
        if (renderingCanvas === null)
        {
            throw new Error("Argument `renderingCanvas` cannot be null.");
        }
        else
        {
            this.gameState = this.constructGameState(renderingCanvas);
            this.oldTime = 0;
        }
    }

    /**
     * For the child class to implement. It should just return a `new T(...)`.
     */
    protected abstract constructGameState(renderingCanvas: Element): TGameState;

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

                gameState.mainCamera.ren!.aspect = gameState.renderer.domElement.clientWidth / gameState.renderer.domElement.clientHeight;
                gameState.mainCamera.ren!.updateProjectionMatrix();
            }

            thiz.onFrame(gameState, time, time - thiz.oldTime);
            thiz.oldTime = time;

            gameState.renderer.render(gameState.mainRenderingScene, gameState.mainCamera.ren!)
            requestAnimationFrame(onAnimationFrame);
        }

        requestAnimationFrame(onAnimationFrame);
    }

    public abstract onStart(gameState: TGameState): void;

    public abstract onFrame(gameState: TGameState, time: number, deltaTime: number): void;
}
