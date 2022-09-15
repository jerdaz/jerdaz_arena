import { prototypes, utils } from "game";
import { Flag } from "arena";

export class GameObjects {
  public allCreeps: prototypes.Creep[] = [];
  public myCreeps: prototypes.Creep[] = [];
  public enemyCreeps: prototypes.Creep[] = [];
  public allOwnedStructures: prototypes.OwnedStructure[] = [];
  public enemyStructures: prototypes.OwnedStructure[] = [];
  public myStructures: prototypes.OwnedStructure[] = [];
  public mySpawns: prototypes.StructureSpawn[] = [];
  public enemySpawns: prototypes.StructureSpawn[] = [];
  public allFlags: Flag[] = [];
  public enemyFlags: Flag[] = [];

  public constructor() {
    this.update();
  }

  public update(flags?: Flag[]) {
    this.allCreeps = utils.getObjectsByPrototype(prototypes.Creep);
    this.myCreeps = this.allCreeps.filter(creep => creep.my);
    this.enemyCreeps = this.allCreeps.filter(creep => !creep.my);
    this.allOwnedStructures = utils.getObjectsByPrototype(prototypes.OwnedStructure);
    this.enemyStructures = this.allOwnedStructures.filter(structure => !structure.my);
    this.myStructures = this.allOwnedStructures.filter(structure => structure.my);
    this.mySpawns = utils.getObjectsByPrototype(prototypes.StructureSpawn).filter(structure => structure.my);
    this.enemySpawns = utils.getObjectsByPrototype(prototypes.StructureSpawn).filter(structure => !structure.my);

    if (flags) {
      this.allFlags = flags;
      this.enemyFlags = flags.filter(flag => !flag.my);
    }
  }
}
