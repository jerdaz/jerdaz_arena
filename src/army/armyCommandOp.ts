import { ArmyOp } from "./armyOp";
import { Flag } from "arena";
import { GameObjects } from "objects";
import { SubOp } from "metaClass/subOp";
import { utils } from "game";

export class ArmyCommandOp extends SubOp {
  private armyOp;
  public constructor(parent: ArmyOp, gameObjects: GameObjects) {
    super(parent, gameObjects);
    this.armyOp = parent;
    const enemyFlag = utils.getObjectsByPrototype(Flag).filter(flag => !flag.my)[0];
    this.armyOp.newSquad(enemyFlag);
  }
}
