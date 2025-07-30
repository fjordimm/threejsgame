
import * as THREE from "three";
import Camera from "../forms/special/Camera";
import FormManager from "./FormManager";

export default abstract class GameState
{
    public readonly renderingCanvas: Element;
    public readonly renderer: THREE.WebGLRenderer;
    public readonly mainRenderingScene: THREE.Scene;
    public readonly formManager: FormManager;
    public readonly mainCamera: Camera;
    public readonly materialMemo: Map<any, any>;
    public readonly geometryMemo: Map<any, any>;

    public constructor(renderingCanvas: Element)
    {
        this.renderingCanvas = renderingCanvas;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.renderingCanvas, antialias: true });
        this.mainRenderingScene = new THREE.Scene();
        this.formManager = new FormManager(this.mainRenderingScene);
        this.mainCamera = new Camera();
        this.materialMemo = new Map();
        this.geometryMemo = new Map();
    }
}
