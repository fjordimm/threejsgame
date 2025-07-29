
import * as THREE from "three";
import Game from "./Game";
import MyGameState from "./gameState/MyGameState";
import GameEntity from "./gameObjects/GameEntity";

export default class MyGame extends Game<MyGameState>
{
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
        gameState.mainCamera.ren.position.set(0, 0, 15);

        gameState.cube = new GameEntity(
            new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({ color: 0x00FF00, roughness: 0.5, metalness: 0 })
            )
        );
        gameState.gameObjectManager.add(gameState.cube);

        const sun = new THREE.DirectionalLight(0xFFFFFF, 1);
        sun.position.set(3, 10, -3);
        gameState.mainRenderingScene.add(sun);

        const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.05);
        gameState.mainRenderingScene.add(ambLight);
    }

    override onFrame(gameState: MyGameState, time: number, deltaTime: number): void
    {
        gameState.cube.ren.rotation.x = time * 0.001;
        gameState.cube.ren.rotation.y = time * 0.001;
    }
}
