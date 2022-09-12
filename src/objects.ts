import { prototypes, utils } from "game";

export class GameObjects {
  public allCreeps: prototypes.Creep[] = [];
  public myCreeps: prototypes.Creep[] = [];
  public enemyCreeps: prototypes.Creep[] = [];
  public allOwnedStructures: prototypes.OwnedStructure[] = [];
  public enemyStructures: prototypes.OwnedStructure[] = [];

  public constructor() {
    this.update();
  }

  public update() {
    this.allCreeps = utils.getObjectsByPrototype(prototypes.Creep);
    this.myCreeps = this.allCreeps.filter(creep => creep.my);
    this.enemyCreeps = this.allCreeps.filter(creep => !creep.my);
    this.allOwnedStructures = utils.getObjectsByPrototype(prototypes.OwnedStructure);
    this.enemyStructures = this.allOwnedStructures.filter(structure => !structure.my);
  }
}
