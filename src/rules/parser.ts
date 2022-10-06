import type { TopLevelCondition } from "json-rules-engine";
import { Rule, Operator } from "./types";
import { FACT_NAME } from "./evaluator";

const EXPR_REG = /(&)(?<!\\&)|(\|)(?<!\\\|)/g;
const OP_REG = /(=|~|>|>=|<|<=|\.\.)/g;

const OP_MAP: { [key: string]: Operator } = {
  "=": Operator.Equal,
  ">": Operator.LessThan,
  ">=": Operator.LessThanInclusive,
  "<": Operator.GreaterThan,
  "<=": Operator.GreaterThanInclusive,
  "~": Operator.Like,
};

export function jsonRulesEngineConditionFromRule(
  rule: Rule
): TopLevelCondition {
  let topLevelOperator = "&";
  const { match } = rule;
  const exprSplit = match.split(EXPR_REG).filter((x) => !!x);

  if (exprSplit.length > 1) {
    // if we start with an & or | remove it
    if (exprSplit[0] === "&" || exprSplit[0] === "|") {
      exprSplit.shift();
    }

    // if we finish with an & or | remove it
    if (
      exprSplit[exprSplit.length - 1] === "&" ||
      exprSplit[exprSplit.length - 1] === "|"
    ) {
      exprSplit.pop();
    }

    if (exprSplit.length % 2 === 0) {
      throw new Error(
        `invalid expression, attempting to use AND or OR operator without righthand value: ${match}`
      );
    }

    // quick and dirty check that we are only supporting all ands or all or's
    if (exprSplit.length > 1) {
      const topLevelOperators = exprSplit.filter((_, i) => i % 2 === 1);
      const allMatch = topLevelOperators.every((v, i, arr) => v === arr[0]);
      if (!allMatch) {
        throw new Error(
          `invalid expression, attempting to combine operators AND and OR: ${match}`
        );
      }
      topLevelOperator = topLevelOperators[0];
    }
  }

  const expressions = exprSplit
    .filter((_, i) => i % 2 === 0)
    .map((ex) => ex.split(OP_REG))
    .map((ex) => {
      return {
        fact: FACT_NAME,
        path: `$.${ex[0]}`,
        operator: OP_MAP[ex[1]],
        value: ex[2],
      };
    });

  switch (topLevelOperator) {
    case "&":
      return {
        all: expressions,
      };
    case "|":
      return { any: expressions };
    default:
      return { all: expressions };
  }
}
