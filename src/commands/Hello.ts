import { Command, CommandMessage } from "@typeit/discord";
import { CommandEnum } from "@/common";

export class Hello {
  @Command(CommandEnum.HELLO)
  async hello(cmd: CommandMessage) {
    cmd.reply("Hello!")
  }
}