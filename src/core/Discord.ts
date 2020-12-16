import { 
  ArgsOf,
  Client,
  CommandMessage,
  CommandNotFound,
  Discord,
  On
} from "@typeit/discord";
import { app } from '@/config';

@Discord("*", {
  import: app.import
})
export class DeninhoBOT {
  @CommandNotFound()
  async notFound(cmd: CommandMessage) {
    cmd.reply(`command: ${cmd.commandName} not found!`);
  }
}