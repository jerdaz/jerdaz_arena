import { SquadOp } from "metaClass/squadOp";
import { prototypes } from "game";

export class FighterSquadOp extends SquadOp {
  public objective: prototypes.GameObject;
  public constructor(objective: prototypes.GameObject) {
    super();
    this.objective = objective;
  }
}
