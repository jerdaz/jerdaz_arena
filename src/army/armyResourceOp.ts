import { constants, prototypes, utils } from "game";
import { ArmyOp } from "./armyOp";
import { CreepOp } from "metaClass/creepOp";
import { GameObjects } from "objects";
import { RangedFighterCreepOp } from "./fighter/rangedFighterCreepOp";
import { SubOp } from "metaClass/subOp";

declare interface CreepEx extends prototypes.Creep {
  assigned?: boolean;
}

export class ArmyResourceOp extends SubOp {
  private armyOp: ArmyOp;

  public constructor(parent: ArmyOp, gameObjects: GameObjects) {
    super(parent, gameObjects);
    this.armyOp = parent;
  }

  public run() {
    const newCreeps = (utils.getObjectsByPrototype(prototypes.Creep) as CreepEx[]).filter(
      creep => creep.my && !creep.assigned
    );
    for (const creep of newCreeps) {
      let creepOp: CreepOp | undefined;
      const squad = this.armyOp.getSquads()[0];
      if (creep.body.some(bodyPart => bodyPart.type === constants.RANGED_ATTACK))
        creepOp = new RangedFighterCreepOp(squad, this.gameObjects, creep);
      if (creepOp) this.armyOp.getSquads()[0].addCreepOp(creepOp);
    }
  }
}
