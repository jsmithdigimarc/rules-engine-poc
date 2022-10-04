// Generated from ./src/parser/Filter.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FilterParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FilterVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FilterParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.orExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.andExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.notExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldExpr?: (ctx: FieldExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.parensExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensExpr?: (ctx: ParensExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldSimpleEqExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSimpleEqExpr?: (ctx: FieldSimpleEqExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldSimpleLikeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSimpleLikeExpr?: (ctx: FieldSimpleLikeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldSimpleGtExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSimpleGtExpr?: (ctx: FieldSimpleGtExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldSimpleGteExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSimpleGteExpr?: (ctx: FieldSimpleGteExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldSimpleLtExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSimpleLtExpr?: (ctx: FieldSimpleLtExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldSimpleLteExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSimpleLteExpr?: (ctx: FieldSimpleLteExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldMultiEqExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldMultiEqExpr?: (ctx: FieldMultiEqExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldMultiLikeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldMultiLikeExpr?: (ctx: FieldMultiLikeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.fieldRangeEqExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldRangeEqExpr?: (ctx: FieldRangeEqExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.multiValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiValue?: (ctx: MultiValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FilterParser.rangeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeValue?: (ctx: RangeValueContext) => Result;
}

