import { ArmyCommandOp } from "./armyCommandOp";
import { ArmyResourceOp } from "./armyResourceOp";
import { FighterSquadOp } from "./fighterSquadOp";
import { SubOp } from "metaClass/subOp";
import { prototypes } from "game";

export class ArmyOp extends SubOp {
  private squads: FighterSquadOp[] = [];
  private resourceOp = new ArmyResourceOp(this, this.gameObjects);
  private command = new ArmyCommandOp(this, this.gameObjects);

  public getSquads() {
    return [...this.squads];
  }

  public newSquad(objective: prototypes.GameObject) {
    this.squads.push(new FighterSquadOp(objective));
  }

  public run() {
    this.resourceOp.run();
    this.squads.forEach(squad => squad.run());
  }
}
