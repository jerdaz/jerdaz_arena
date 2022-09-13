import { Flag } from "arena";
import MainOp from "mainOp";
import { utils } from "game";

const mainOp = new MainOp();

export function loop(): void {
  const runtime = { arena: "ctf", flags: utils.getObjectsByPrototype(Flag) };
  mainOp.run(runtime);
}
