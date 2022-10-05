import type { Handler } from "express";
import type { Rule } from "../../rules";
import { evaluate } from "../../rules";

export function evaluateRules(): Handler {
  return function handler(req, res) {
    const { rules, payload }: { rules: Rule[]; payload: Object } = req.body;

    evaluate(rules, payload)
      .then((matches) => {
        res.status(200).json(matches);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("internal server error");
      });
  };
}
