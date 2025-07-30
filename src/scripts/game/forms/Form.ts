
import * as THREE from "three";
import type GameState from "../gameState/GameState";

export default class Form<TRenderingObject extends THREE.Object3D = THREE.Object3D>
{
    /**
     * The rendering object (THREE.Object3D) used by Three.js.
     */
    public ren: TRenderingObject|null;

    public constructor(renderObj: TRenderingObject|null)
    {
        this.ren = renderObj;
    }

    public onFrame(gameState: GameState, time: number, deltaTime: number): void
    { }

    static EMPTY: Form = new Form(null);
}
