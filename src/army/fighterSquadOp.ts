import { SquadOp } from "metaClass/squadOp";
import { prototypes } from "game";

export class FighterSquadOp extends SquadOp {
  public objective: prototypes.GameObject | null = null;
}
