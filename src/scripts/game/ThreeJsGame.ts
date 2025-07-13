
import * as THREE from "three";
import Game from "./Game";
import type GameState from "./gameState/GameState";

export default class ThreeJsGame extends Game // TODO
{
    private cube: THREE.Mesh;

    public constructor(renderingCanvas: Element|null)
    {
        super(renderingCanvas);

        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0x44aa88 })
        );
    }

    override onStart(gameState: GameState): void
    {
        console.log("hi there");

        gameState.mainRenderingScene.add(this.cube);
        gameState.mainCamera.ren.position.z += 5;
    }

    override onFrame(gameState: GameState, time: number, deltaTime: number): void
    {
        console.log("yikers");

        this.cube.rotation.x = time * 0.001;
        this.cube.rotation.y = time * 0.001;
    }
}
