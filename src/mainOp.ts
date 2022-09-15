import { ArmyOp } from "army/armyOp";
import { Flag } from "arena";
import { GameObjects } from "objects";
import { Operation } from "metaClass/operation";
import { baseOp } from "base/baseOp";

interface RuntimeInfo {
  arena: string;
  flags?: Flag[];
}

export default class MainOp extends Operation {
  private gameObjects = new GameObjects();
  private armyOp = new ArmyOp(this, this.gameObjects);
  private baseOp = new baseOp(this, this.gameObjects);

  public run(runtime?: RuntimeInfo): void {
    if (!runtime) throw Error();
    this.gameObjects.update(runtime.flags);
    this.armyOp.run();
    this.baseOp.run();
  }
}
