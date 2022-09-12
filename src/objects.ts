import { prototypes, utils } from "game";

export class GameObjects {
  public allCreeps = utils.getObjectsByPrototype(prototypes.Creep);
  public myCreeps = this.allCreeps.filter(creep => creep.my);
  public enemyCreeps = this.allCreeps.filter(creep => !creep.my);
  public allOwnedStructures = utils.getObjectsByPrototype(prototypes.OwnedStructure);
  public enemyStructures = this.allOwnedStructures.filter(structure => !structure.my);

  public update() {
    this.constructor();
  }
}
