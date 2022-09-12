import { ArmyOp } from "ArmyOp";
import { Operation } from "metaClass/Operation";

export default class MainOp extends Operation {
  private armyOp: ArmyOp;
  public constructor() {
    super();
    this.armyOp = new ArmyOp();
  }
  public run(): void {
    this.armyOp.run();
  }
}
