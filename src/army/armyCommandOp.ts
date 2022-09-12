import { ArmyOp } from "./armyOp";
import { GameObjects } from "objects";
import { SubOp } from "metaClass/subOp";

export class ArmyCommandOp extends SubOp {
  private armyOp;
  public constructor(parent: ArmyOp, gameObjects: GameObjects) {
    super(parent, gameObjects);
    this.armyOp = parent;
    this.armyOp.newSquad();
  }
}
