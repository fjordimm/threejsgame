

import * as THREE from "three";
import GameObjectManager from "../gameState/GameObjectManager";
import Camera from "../gameObjects/special/Camera";

export default class GameState
{
    public readonly renderingCanvas: Element;
    public readonly renderer: THREE.WebGLRenderer;
    public readonly mainRenderingScene: THREE.Scene;
    public readonly gameObjectManager: GameObjectManager;
    public readonly mainCamera: Camera;
    public readonly materialMemo: Map<any, any>;
    public readonly geometryMemo: Map<any, any>;
    private _time: number;

    constructor(renderingCanvas: Element)
    {
        this.renderingCanvas = renderingCanvas;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.renderingCanvas, antialias: true });
        this.mainRenderingScene = new THREE.Scene();
        this.gameObjectManager = new GameObjectManager(this.mainRenderingScene);
        this.mainCamera = new Camera();
        this.materialMemo = new Map();
        this.geometryMemo = new Map();
        this._time = 0;
    }

    getTime(): number
    {
        return this._time;
    }
}
