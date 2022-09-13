import { ArmyOp } from "army/armyOp";
import { Flag } from "arena";
import { GameObjects } from "objects";
import { Operation } from "metaClass/operation";

interface RuntimeInfo {
  arena: string;
  flags?: Flag[];
}

export default class MainOp extends Operation {
  private gameObjects = new GameObjects();
  private armyOp = new ArmyOp(this, this.gameObjects);

  public run(runtime?: RuntimeInfo): void {
    if (!runtime) throw Error();
    this.gameObjects.update(runtime.flags);
    this.armyOp.run();
  }
}
