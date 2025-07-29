import type GameState from "../gameState/GameState";

export default class GameObject
{
    public constructor()
    { }

    public onFrame(gameState: GameState, time: number, deltaTime: number): void
    { }

    static EMPTY: GameObject = new GameObject();
}
