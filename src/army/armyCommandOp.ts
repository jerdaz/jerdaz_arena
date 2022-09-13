import { ArmyOp } from "./armyOp";
import { GameObjects } from "objects";
import { SubOp } from "metaClass/subOp";
import { arenaInfo } from "game";

export class ArmyCommandOp extends SubOp {
  private armyOp;
  public constructor(parent: ArmyOp, gameObjects: GameObjects) {
    super(parent, gameObjects);
    this.armyOp = parent;
  }

  public run() {
    if (arenaInfo.name === "Capture the Flag") this.runCTF();
  }

  private runCTF() {
    const enemyFlags = this.gameObjects.enemyFlags;
    if (enemyFlags.length < 1) throw Error();
    const enemyFlag = enemyFlags[0];
    this.armyOp.getSquads()[0].objective = enemyFlag;
  }
}
