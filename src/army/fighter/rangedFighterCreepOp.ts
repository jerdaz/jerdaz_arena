import { constants, prototypes } from "game";
import { FighterCreepOp } from "./fighterCreepOp";
import { OwnedStructure } from "game/prototypes";

export class RangedFighterCreepOp extends FighterCreepOp {
  public run() {
    const enemies = this.gameObjects.enemyCreeps;
    const enemyStructures = this.gameObjects.enemyStructures;
    let enemy: prototypes.Creep | OwnedStructure | null;
    enemy = this.creep.findClosestByPath(enemies);
    if (!enemy) enemy = this.creep.findClosestByPath(enemyStructures);
    if (enemy) {
      if (this.creep.rangedAttack(enemy) === constants.ERR_NOT_IN_RANGE) this.creep.moveTo(enemy);
    }
  }
}
