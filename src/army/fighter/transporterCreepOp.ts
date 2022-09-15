import { FighterCreepOp } from "./fighterCreepOp";
import { FighterSquadOp } from "army/fighterSquadOp";
import { GameObjects } from "objects";
import { OwnedStructure } from "game/prototypes";
import { prototypes } from "game";

export class TransporterCreepOp extends FighterCreepOp {
  protected squad: FighterSquadOp;
  public constructor(parent: FighterSquadOp, gameObjects: GameObjects, creep: prototypes.Creep) {
    super(parent, gameObjects, creep);
    this.squad = parent;
  }

  public run() {
    const enemies = this.gameObjects.enemyCreeps;
    const enemyStructures = this.gameObjects.enemyStructures;
    let enemy: prototypes.Creep | OwnedStructure | null;
    enemy = this.creep.findClosestByRange(enemies);
    if (!enemy) enemy = this.creep.findClosestByRange(enemyStructures);
    if (enemy) {
      this.creep.rangedAttack(enemy);
    }
    if (this.squad.objective) {
      this.creep.moveTo(this.squad.objective);
    }
  }
}
