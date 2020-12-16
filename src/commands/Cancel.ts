import { Command, CommandMessage } from "@typeit/discord";
import { CommandEnum, generateIndex } from "@/common";

export class Cancel {
  @Command(CommandEnum.CANCEL)
  async cancel(cmd: CommandMessage) {
    cmd.reply("Cancel!")
  }
}