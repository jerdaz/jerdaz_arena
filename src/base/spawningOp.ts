import { arenaInfo, constants } from "game";
import { BodyPartConstant } from "game/constants";
import { SubOp } from "metaClass/subOp";

const spawnList: { [key: string]: { role: string; body: BodyPartConstant[] } } = {
  "Spawn and Swamp": { role: "rangedfighter", body: [constants.MOVE, constants.RANGED_ATTACK] },
  "Collect and Control": { role: "transporter", body: [constants.MOVE, constants.CARRY] }
};

export class SpawningOp extends SubOp {
  public run() {
    const spawn = this.gameObjects.mySpawns[0];

    const body = spawnList[arenaInfo.name].body;

    spawn.spawnCreep(body);
  }
}
