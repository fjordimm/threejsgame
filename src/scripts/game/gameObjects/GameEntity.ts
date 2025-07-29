
import * as THREE from "three";
import GameObject from "./GameObject";
import type GameState from "../gameState/GameState";

export default class GameEntity<TRenderingObject extends THREE.Object3D = THREE.Object3D> extends GameObject
{
    /**
     * The rendering object (THREE.Object3D) used by Three.js.
     */
    public ren: TRenderingObject;

    public constructor(renderObj: TRenderingObject)
    {
        super();

        this.ren = renderObj;
    }

    override onFrame(gameState: GameState, time: number, deltaTime: number): void
    { }

    static EMPTY: GameEntity = new GameEntity(new THREE.Mesh());
}
