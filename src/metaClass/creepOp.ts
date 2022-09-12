import { GameObjects } from "objects";
import { SquadOp } from "./squadOp";
import { SubOp } from "./subOp";
import { prototypes } from "game";

export class CreepOp extends SubOp {
  protected creep: prototypes.Creep;
  public constructor(parent: SquadOp, gameObjects: GameObjects, creep: prototypes.Creep) {
    super(parent, gameObjects);
    this.creep = creep;
  }
}
