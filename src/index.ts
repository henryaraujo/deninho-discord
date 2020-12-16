import 'dotenv/config';
import { Client } from "@typeit/discord";
import { app } from "@/config"

(async() => {
  const client = new Client({
    classes: app.classes,
    silent: false,
    variablesChar: ":"
  });

  await client.login(<string>process.env.TOKEN)
})()