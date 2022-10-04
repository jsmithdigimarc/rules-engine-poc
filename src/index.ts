import { CommonTokenStream, ANTLRInputStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { FilterLexer } from "./parser/FilterLexer";
import {
  AndExprContext,
  FieldContext,
  FieldExprContext,
  FieldMultiEqExprContext,
  FieldMultiLikeExprContext,
  FieldRangeEqExprContext,
  FieldSimpleEqExprContext,
  FieldSimpleGteExprContext,
  FieldSimpleGtExprContext,
  FieldSimpleLikeExprContext,
  FieldSimpleLteExprContext,
  FieldSimpleLtExprContext,
  FilterParser,
  MultiValueContext,
  NotExprContext,
  OrExprContext,
  ParensExprContext,
  ParseContext,
  RangeValueContext,
  ValueContext,
} from "./parser/FilterParser";
import { FilterListener } from "./parser/FilterListener";
import * as rules from "./data/rules.json";
import { EngineOptions, Engine, RuleProperties } from "json-rules-engine";

class Listener implements FilterListener {
  rules: RuleProperties[] = [];

  enterParse(ctx: ParseContext) {
    console.log("enterParse");
  }
  exitParse(ctx: ParseContext) {
    // console.log("exitParse");
    console.log("rules", this.rules);
  }
  enterOrExpr(ctx: OrExprContext) {
    console.log("enterOrExpr");
  }
  exitOrExpr(ctx: OrExprContext) {
    // console.log("exitOrExpr");
  }
  enterAndExpr(ctx: AndExprContext) {
    console.log("enterAndExpr");
    this.rules.push({ conditions });
  }
  exitAndExpr(ctx: AndExprContext) {
    // console.log("exitAndExpr");
  }
  enterNotExpr(ctx: NotExprContext) {
    console.log("enterNotExpr");
  }
  exitNotExpr(ctx: NotExprContext) {
    // console.log("exitNotExpr");
  }
  enterFieldExpr(ctx: FieldExprContext) {
    console.log("enterFieldExpr");
  }
  exitFieldExpr(ctx: FieldExprContext) {
    // console.log("exitFieldExpr");
  }
  enterParensExpr(ctx: ParensExprContext) {
    console.log("enterParensExpr");
  }
  exitParensExpr(ctx: ParensExprContext) {
    // console.log("exitParensExpr");
  }
  enterFieldSimpleEqExpr(ctx: FieldSimpleEqExprContext) {
    console.log("enterFieldSimpleEqExpr");
  }
  exitFieldSimpleEqExpr(ctx: FieldSimpleEqExprContext) {
    // console.log("exitFieldSimpleEqExpr");
  }
  enterFieldSimpleLikeExpr(ctx: FieldSimpleLikeExprContext) {
    console.log("enterFieldSimpleLikeExpr");
  }
  exitFieldSimpleLikeExpr(ctx: FieldSimpleLikeExprContext) {
    // console.log("exitFieldSimpleLikeExpr");
  }
  enterFieldSimpleGtExpr(ctx: FieldSimpleGtExprContext) {
    console.log("enterFieldSimpleGtExpr");
  }
  exitFieldSimpleGtExpr(ctx: FieldSimpleGtExprContext) {
    // console.log("exitFieldSimpleGtExpr");
  }
  enterFieldSimpleGteExpr(ctx: FieldSimpleGteExprContext) {
    console.log("enterFieldSimpleGteExpr");
  }
  exitFieldSimpleGteExpr(ctx: FieldSimpleGteExprContext) {
    // console.log("exitFieldSimpleGteExpr");
  }
  enterFieldSimpleLtExpr(ctx: FieldSimpleLtExprContext) {
    console.log("enterFieldSimpleLtExpr");
  }
  exitFieldSimpleLtExpr(ctx: FieldSimpleLtExprContext) {
    // console.log("exitFieldSimpleLtExpr");
  }
  enterFieldSimpleLteExpr(ctx: FieldSimpleLteExprContext) {
    console.log("enterFieldSimpleLteExpr");
  }
  exitFieldSimpleLteExpr(ctx: FieldSimpleLteExprContext) {
    // console.log("exitFieldSimpleLteExpr");
  }
  enterFieldMultiEqExpr(ctx: FieldMultiEqExprContext) {
    console.log("enterFieldMultiEqExpr");
  }
  exitFieldMultiEqExpr(ctx: FieldMultiEqExprContext) {
    // console.log("exitFieldMultiEqExpr");
  }
  enterFieldMultiLikeExpr(ctx: FieldMultiLikeExprContext) {
    console.log("enterFieldMultiLikeExpr");
  }
  exitFieldMultiLikeExpr(ctx: FieldMultiLikeExprContext) {
    // console.log("exitFieldMultiLikeExpr");
  }
  enterFieldRangeEqExpr(ctx: FieldRangeEqExprContext) {
    console.log("enterFieldRangeEqExpr");
  }
  exitFieldRangeEqExpr(ctx: FieldRangeEqExprContext) {
    // console.log("exitFieldRangeEqExpr");
  }
  enterField(ctx: FieldContext) {
    console.log("enterField: ", ctx.text);
  }
  exitField(ctx: FieldContext) {
    // console.log("exitField");
  }
  enterValue(ctx: ValueContext) {
    console.log("enterValue");
  }
  exitValue(ctx: ValueContext) {
    // console.log("exitValue: ");
  }
  enterMultiValue(ctx: MultiValueContext) {
    console.log("enterMultiValue");
  }
  exitMultiValue(ctx: MultiValueContext) {
    // console.log("exitMultiValue");
  }
  enterRangeValue(ctx: RangeValueContext) {
    console.log("enterRangeValue");
  }
  exitRangeValue(ctx: RangeValueContext) {
    // console.log("exitRangeValue");
  }
}

const match = "product.brand=Dove&product.tags~multicountry";

const inputStream = new ANTLRInputStream(match);
const lexer = new FilterLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new FilterParser(tokenStream);
const listener = new Listener();

const tree = parser.parse();

// @ts-ignore
ParseTreeWalker.DEFAULT.walk(listener, tree);
