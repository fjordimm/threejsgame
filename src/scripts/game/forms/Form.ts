
import * as THREE from "three";
import type GameState from "../gameState/GameState";
import { Tran } from "../util/Tran";

export default class Form<TRenderingObject extends THREE.Object3D = THREE.Object3D>
{
    /**
     * The rendering object (THREE.Object3D) used by Three.js.
     */
    public ren: TRenderingObject|null;
    public tran: Tran;

    public constructor(renderObj: TRenderingObject|null)
    {
        this.ren = renderObj;
        this.tran = new Tran();
    }

    public onFrame(gameState: GameState, time: number, deltaTime: number): void
    {
        this.v_onFrame(gameState, time, deltaTime);

        if (this.ren !== null)
        {
            this.ren.position.set(this.tran.pos.x, this.tran.pos.y, this.tran.pos.z);
            this.ren.setRotationFromQuaternion(this.tran.rot);
            this.ren.scale.set(this.tran.scale.x, this.tran.scale.y, this.tran.scale.z);
        }
    }

    protected v_onFrame(gameState: GameState, time: number, deltaTime: number): void
    { }

    static EMPTY: Form = new Form(null);
}
