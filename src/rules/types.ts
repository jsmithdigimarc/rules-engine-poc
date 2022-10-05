export type Rule = {
  match: string;
  weight: number;
};

export type Expression =
  | {
      path: string;
      operator: Operator;
      value: string;
    }
  | {
      all: Expression[];
    }
  | {
      any: Expression[];
    };

export enum Operator {
  Equal = "equal",
  Like = "like",
  NotEqual = "notEqual",
  LessThan = "lessThan",
  LessThanInclusive = "lessThanInclusive",
  GreaterThan = "greaterThan",
  GreaterThanInclusive = "greaterThanInclusive",
  In = "in",
  NotIn = "notIn",
  Contains = "contains",
  DoesNotContain = "doesNotContain",
}
