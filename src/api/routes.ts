import { App } from "../types";
import { evaluateRules } from "./handlers/rules";

export function routes(app: App) {
  app.router.post("/", evaluateRules());
}
