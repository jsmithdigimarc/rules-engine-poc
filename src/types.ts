import type { Express } from "express";
import { RulesHandler } from "./handlers/rules-handler";

export type App = {
  router: Express;
  rulesHandler: RulesHandler
};

export type Rule = {
  match: string;
  weight: number;
};
