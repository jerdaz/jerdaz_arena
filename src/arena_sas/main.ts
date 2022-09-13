import MainOp from "mainOp";

const mainOp = new MainOp();

export function loop(): void {
  const runtime = { arena: "sas" };
  mainOp.run(runtime);
}
