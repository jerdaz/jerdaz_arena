import { ArmyCommandOp } from "./armyCommandOp";
import { ArmyResourceOp } from "./armyResourceOp";
import { FighterSquadOp } from "./fighterSquadOp";
import { SubOp } from "metaClass/subOp";

export class ArmyOp extends SubOp {
  private squads: FighterSquadOp[] = [];
  private resourceOp = new ArmyResourceOp(this, this.gameObjects);
  private command = new ArmyCommandOp(this, this.gameObjects);

  public getSquads() {
    return [...this.squads];
  }

  private newSquad() {
    this.squads.push(new FighterSquadOp());
  }

  public run() {
    while (this.squads.length <= 3) this.newSquad();
    this.resourceOp.run();
    this.command.run();
    this.squads.forEach(squad => squad.run());
  }
}
