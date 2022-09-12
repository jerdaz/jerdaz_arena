import { constants, prototypes, utils } from "game";
import { FighterCreepOp } from "./fighterCreepOp";
import { Flag } from "arena";
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
    } else {
      const flags = utils.getObjectsByPrototype(Flag);
      this.creep.moveTo(flags.filter(flag => !flag.my)[0]);
    }
  }
}
