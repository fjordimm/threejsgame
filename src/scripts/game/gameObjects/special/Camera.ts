
import * as THREE from "three";
import GameEntity from "../GameEntity";

export default class Camera extends GameEntity<THREE.PerspectiveCamera>
{
    public constructor()
    {
        super(new THREE.PerspectiveCamera(75, 2, 0.1, 1000));
    }
}
