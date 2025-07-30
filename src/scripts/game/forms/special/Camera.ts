
import * as THREE from "three";
import Form from "../Form";

export default class Camera extends Form<THREE.PerspectiveCamera>
{
    public constructor()
    {
        super(new THREE.PerspectiveCamera(75, 2, 0.1, 1000));
    }
}
