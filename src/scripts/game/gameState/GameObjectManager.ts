
import * as THREE from "three";
import type GameObject from "../gameObjects/GameObject";
import GameEntity from "../gameObjects/GameEntity";

export default class GameObjectManager
{
    private readonly renderingScene: THREE.Scene;
    private readonly objs: Set<GameObject>;

    public constructor(renderingScene: THREE.Scene)
    {
        this.renderingScene = renderingScene;
        this.objs = new Set<GameObject>();
    }

    public add(obj: GameObject): void
    {
        this.objs.add(obj);

        if (obj instanceof GameEntity)
        { this.renderingScene.add(obj.ren); }
    }

    public delete(obj: GameObject): void
    {
        this.objs.delete(obj);

        if (obj instanceof GameEntity)
        { this.renderingScene.remove(obj.ren); }
    }

    public has(obj: GameObject): boolean
    {
        return this.objs.has(obj);
    }

    public values(): SetIterator<GameObject>
    {
        return this.objs.values();
    }
}
