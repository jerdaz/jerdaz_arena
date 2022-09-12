import { GameObjects } from "objects";
import { Operation } from "./operation";

export class SubOp extends Operation {
  private parent: Operation;
  protected gameObjects: GameObjects;

  public constructor(parent: Operation, gameObjects: GameObjects) {
    super();
    this.parent = parent;
    this.gameObjects = gameObjects;
  }
}
