// Generated from ./src/parser/Filter.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./FilterParser";
import { OrExprContext } from "./FilterParser";
import { AndExprContext } from "./FilterParser";
import { NotExprContext } from "./FilterParser";
import { FieldExprContext } from "./FilterParser";
import { ParensExprContext } from "./FilterParser";
import { FieldSimpleEqExprContext } from "./FilterParser";
import { FieldSimpleLikeExprContext } from "./FilterParser";
import { FieldSimpleGtExprContext } from "./FilterParser";
import { FieldSimpleGteExprContext } from "./FilterParser";
import { FieldSimpleLtExprContext } from "./FilterParser";
import { FieldSimpleLteExprContext } from "./FilterParser";
import { FieldMultiEqExprContext } from "./FilterParser";
import { FieldMultiLikeExprContext } from "./FilterParser";
import { FieldRangeEqExprContext } from "./FilterParser";
import { FieldContext } from "./FilterParser";
import { ValueContext } from "./FilterParser";
import { MultiValueContext } from "./FilterParser";
import { RangeValueContext } from "./FilterParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FilterParser`.
 */
export interface FilterListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FilterParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.orExpr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.orExpr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.andExpr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.andExpr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.notExpr`.
	 * @param ctx the parse tree
	 */
	enterNotExpr?: (ctx: NotExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.notExpr`.
	 * @param ctx the parse tree
	 */
	exitNotExpr?: (ctx: NotExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldExpr?: (ctx: FieldExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldExpr?: (ctx: FieldExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.parensExpr`.
	 * @param ctx the parse tree
	 */
	enterParensExpr?: (ctx: ParensExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.parensExpr`.
	 * @param ctx the parse tree
	 */
	exitParensExpr?: (ctx: ParensExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldSimpleEqExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldSimpleEqExpr?: (ctx: FieldSimpleEqExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldSimpleEqExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldSimpleEqExpr?: (ctx: FieldSimpleEqExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldSimpleLikeExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldSimpleLikeExpr?: (ctx: FieldSimpleLikeExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldSimpleLikeExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldSimpleLikeExpr?: (ctx: FieldSimpleLikeExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldSimpleGtExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldSimpleGtExpr?: (ctx: FieldSimpleGtExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldSimpleGtExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldSimpleGtExpr?: (ctx: FieldSimpleGtExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldSimpleGteExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldSimpleGteExpr?: (ctx: FieldSimpleGteExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldSimpleGteExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldSimpleGteExpr?: (ctx: FieldSimpleGteExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldSimpleLtExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldSimpleLtExpr?: (ctx: FieldSimpleLtExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldSimpleLtExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldSimpleLtExpr?: (ctx: FieldSimpleLtExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldSimpleLteExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldSimpleLteExpr?: (ctx: FieldSimpleLteExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldSimpleLteExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldSimpleLteExpr?: (ctx: FieldSimpleLteExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldMultiEqExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldMultiEqExpr?: (ctx: FieldMultiEqExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldMultiEqExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldMultiEqExpr?: (ctx: FieldMultiEqExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldMultiLikeExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldMultiLikeExpr?: (ctx: FieldMultiLikeExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldMultiLikeExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldMultiLikeExpr?: (ctx: FieldMultiLikeExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.fieldRangeEqExpr`.
	 * @param ctx the parse tree
	 */
	enterFieldRangeEqExpr?: (ctx: FieldRangeEqExprContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.fieldRangeEqExpr`.
	 * @param ctx the parse tree
	 */
	exitFieldRangeEqExpr?: (ctx: FieldRangeEqExprContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.multiValue`.
	 * @param ctx the parse tree
	 */
	enterMultiValue?: (ctx: MultiValueContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.multiValue`.
	 * @param ctx the parse tree
	 */
	exitMultiValue?: (ctx: MultiValueContext) => void;

	/**
	 * Enter a parse tree produced by `FilterParser.rangeValue`.
	 * @param ctx the parse tree
	 */
	enterRangeValue?: (ctx: RangeValueContext) => void;
	/**
	 * Exit a parse tree produced by `FilterParser.rangeValue`.
	 * @param ctx the parse tree
	 */
	exitRangeValue?: (ctx: RangeValueContext) => void;
}

