import { Engine } from "json-rules-engine";
import type { Rule } from "./types";
import { jsonRulesEngineConditionFromRule } from "./parser";

export const FACT_NAME = "input";
const EVENT_TYPE_MATCH = "match";

export async function evaluate(
  rules: Rule[],
  payload: Object
): Promise<Rule[]> {
  const engine = new Engine();

  for (let rule of rules) {
    const condition = jsonRulesEngineConditionFromRule(rule);
    console.log("rule ", rule);
    console.log("condition ", condition);
    engine.addRule({
      conditions: condition,
      event: {
        type: EVENT_TYPE_MATCH,
        params: {
          rule,
        },
      },
    });
  }

  const { events, failureEvents } = await engine.run({
    [FACT_NAME]: payload,
  });

  if (events.length > 0) {
    return events
      .filter((e) => e.type === EVENT_TYPE_MATCH)
      .map((e) => e.params?.rule);
  }

  return [];
}
