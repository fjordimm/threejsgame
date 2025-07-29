
import * as THREE from "three";
import Game from "./Game";
import MyGameState from "./gameState/MyGameState";
import GameEntity from "./gameObjects/GameEntity";

export default class MyGame extends Game<MyGameState>
{
    public thingy: GameEntity = GameEntity.EMPTY;

    public constructor(renderingCanvas: Element|null)
    {
        super(renderingCanvas);
    }

    protected override constructGameState(renderingCanvas: Element): MyGameState
    {
        return new MyGameState(renderingCanvas);
    }

    override onStart(gameState: MyGameState): void
    {
        gameState.mainCamera.ren.position.set(0, 0, 5);

        this.thingy = new GameEntity(
            new THREE.Mesh(
                new THREE.TorusKnotGeometry(1, 0.5, 100, 30, 2, 3),
                new THREE.MeshStandardMaterial({ color: 0x00FF00, roughness: 0.5, metalness: 0 })
            )
        );
        gameState.gameObjectManager.add(this.thingy);

        const sun = new THREE.DirectionalLight(0xFFFFFF, 1);
        sun.position.set(3, 10, -3);
        gameState.mainRenderingScene.add(sun);

        const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.05);
        gameState.mainRenderingScene.add(ambLight);
    }

    override onFrame(gameState: MyGameState, time: number, deltaTime: number): void
    {
        this.thingy.ren.rotation.x = time * 0.001;
        this.thingy.ren.rotation.y = time * 0.001;
    }
}
