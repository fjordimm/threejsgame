
import * as THREE from "three";
import Game from "./Game";
import type GameState from "./gameState/GameState";
import MyGameState from "./gameState/MyGameState";

export default class MyGame extends Game<MyGameState>
{
    private cube: THREE.Mesh;

    public constructor(renderingCanvas: Element|null)
    {
        super(renderingCanvas);

        this.cube = new THREE.Mesh();
    }

    protected override constructGameState(renderingCanvas: Element): MyGameState
    {
        return new MyGameState(renderingCanvas);
    }

    override onStart(gameState: GameState): void
    {
        gameState.mainCamera.ren.position.set(0, 0, 15);

        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ color: 0xFF0000, roughness: 0.5, metalness: 0 })
        );
        gameState.mainRenderingScene.add(this.cube);

        const sun = new THREE.DirectionalLight(0xFFFFFF, 1);
        sun.position.set(3, 10, -3);
        gameState.mainRenderingScene.add(sun);

        const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.05);
        gameState.mainRenderingScene.add(ambLight);
    }

    override onFrame(gameState: GameState, time: number, deltaTime: number): void
    {
        this.cube.rotation.x = time * 0.001;
        this.cube.rotation.y = time * 0.001;
    }
}
