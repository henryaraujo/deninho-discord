import { join, resolve } from "path";

export const app = {
  classes: [
    join(__dirname, "../core", "*.ts")
  ],
  import: [
    join(__dirname, "../commands", "*.ts")
  ]
}