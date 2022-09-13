import { ArmyOp } from "./armyOp";
import { Flag } from "arena";
import { GameObjects } from "objects";
import { SubOp } from "metaClass/subOp";
import { utils } from "game";

console.log("test");

export class ArmyCommandOp extends SubOp {
  private armyOp;
  public constructor(parent: ArmyOp, gameObjects: GameObjects) {
    super(parent, gameObjects);
    this.armyOp = parent;
    const enemyFlag = utils.getObjectsByPrototype(Flag).filter(flag => !flag.my)[0];
    console.log(enemyFlag);
    console.log("creating squad");
    this.armyOp.newSquad(enemyFlag);
  }
}
