
import * as THREE from "three";
import type { Quat } from "./Quat";
import type { Vec3 } from "./Vec3";

export class Tran
{
    public pos: Vec3;
    public rot: Quat;
    public scale: Vec3;

    public constructor()
    {
        this.pos = new THREE.Vector3();
        this.rot = new THREE.Quaternion();
        this.scale = new THREE.Vector3(1, 1, 1);
    }
}
