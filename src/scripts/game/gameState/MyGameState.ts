
import GameEntity from "../gameObjects/GameEntity";
import GameState from "./GameState";

export default class MyGameState extends GameState
{
    public cube: GameEntity = GameEntity.EMPTY;

    public constructor(renderingCanvas: Element)
    {
        super(renderingCanvas);
    }
}
