import { constants, prototypes } from "game";
import { FighterCreepOp } from "./fighterCreepOp";
import { FighterSquadOp } from "army/fighterSquadOp";
import { GameObjects } from "objects";
import { OwnedStructure } from "game/prototypes";

export class RangedFighterCreepOp extends FighterCreepOp {
  protected squad: FighterSquadOp;
  public constructor(parent: FighterSquadOp, gameObjects: GameObjects, creep: prototypes.Creep) {
    super(parent, gameObjects, creep);
    this.squad = parent;
  }

  public run() {
    const enemies = this.gameObjects.enemyCreeps;
    const enemyStructures = this.gameObjects.enemyStructures;
    let enemy: prototypes.Creep | OwnedStructure | null;
    enemy = this.creep.findClosestByPath(enemies);
    if (!enemy) enemy = this.creep.findClosestByPath(enemyStructures);
    if (enemy) {
      if (this.creep.rangedAttack(enemy) === constants.ERR_NOT_IN_RANGE) this.creep.moveTo(enemy);
    } else {
      this.creep.moveTo(this.squad.objective);
    }
    console.log(this.squad.objective);
  }
}
