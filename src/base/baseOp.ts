import { GameObjects } from "objects";
import { Operation } from "metaClass/operation";
import { SpawningOp } from "./spawningOp";
import { SubOp } from "metaClass/subOp";

export class baseOp extends SubOp {
  private spawningOp: SpawningOp;
  public constructor(parent: Operation, gameObjects: GameObjects) {
    super(parent, gameObjects);
    this.spawningOp = new SpawningOp(this, gameObjects);
  }

  public run() {
    this.spawningOp.run();
  }
}
