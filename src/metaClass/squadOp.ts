import { CreepOp } from "metaClass/creepOp";
import { Operation } from "metaClass/operation";

export class SquadOp extends Operation {
  private creepOps: CreepOp[] = [];

  public addCreepOp(creepOp: CreepOp) {
    this.creepOps.push(creepOp);
  }

  public run() {
    this.creepOps.forEach(creepOp => creepOp.run());
  }
}
