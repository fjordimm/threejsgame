
import * as THREE from "three";
import Game from "./Game";
import MyGameState from "./gameState/MyGameState";
import Form from "./forms/Form";

export default class MyGame extends Game<MyGameState>
{
    public thingy: Form = Form.EMPTY;

    public constructor(renderingCanvas: Element|null)
    {
        super(renderingCanvas);
    }

    protected override constructGameState(renderingCanvas: Element): MyGameState
    {
        return new MyGameState(renderingCanvas);
    }

    override v_onStart(gameState: MyGameState): void
    {
        gameState.mainCamera.tran.pos.set(0, 0, 5);

        this.thingy = new Form(
            new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({ color: 0x00FF00, roughness: 0.5, metalness: 0 })
            )
        );
        gameState.formManager.add(this.thingy);

        const sun = new THREE.DirectionalLight(0xFFFFFF, 1);
        sun.position.set(3, 10, -3);
        gameState.mainRenderingScene.add(sun);

        const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.05);
        gameState.mainRenderingScene.add(ambLight);
    }

    override v_onFrame(gameState: MyGameState, time: number, deltaTime: number): void
    {
        this.thingy.tran.rot.setFromEuler(new THREE.Euler(time * 0.001, time * 0.001, 0));
    }
}
