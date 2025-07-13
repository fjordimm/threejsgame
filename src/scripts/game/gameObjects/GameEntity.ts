
import * as THREE from "three";
import GameObject from "./GameObject";

export default class GameEntity<T extends THREE.Object3D = THREE.Object3D> extends GameObject
{
    /**
     * The rendering object (THREE.Object3D) used by Three.js.
     */
    public ren: T;

    public constructor(renderObj: T)
    {
        super();

        this.ren = renderObj;
    }

    override onNewFrame(time: number, deltaTime: number): void
    { }
}
