import { ArmyOp } from "army/armyOp";
import { GameObjects } from "objects";
import { Operation } from "metaClass/operation";

export default class MainOp extends Operation {
  private gameObjects = new GameObjects();
  private armyOp = new ArmyOp(this, this.gameObjects);

  public run(): void {
    this.gameObjects.update();
    this.armyOp.run();
  }
}
