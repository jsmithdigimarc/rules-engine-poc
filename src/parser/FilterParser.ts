// Generated from ./src/parser/Filter.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FilterListener } from "./FilterListener";
import { FilterVisitor } from "./FilterVisitor";


export class FilterParser extends Parser {
	public static readonly WORD = 1;
	public static readonly AND = 2;
	public static readonly OR = 3;
	public static readonly NOT = 4;
	public static readonly EQ = 5;
	public static readonly GT = 6;
	public static readonly GTE = 7;
	public static readonly LT = 8;
	public static readonly LTE = 9;
	public static readonly LIKE = 10;
	public static readonly PARENTHESIS_OPEN = 11;
	public static readonly PARENTHESIS_CLOSE = 12;
	public static readonly COMMA = 13;
	public static readonly RANGE = 14;
	public static readonly RULE_parse = 0;
	public static readonly RULE_orExpr = 1;
	public static readonly RULE_andExpr = 2;
	public static readonly RULE_notExpr = 3;
	public static readonly RULE_fieldExpr = 4;
	public static readonly RULE_parensExpr = 5;
	public static readonly RULE_fieldSimpleEqExpr = 6;
	public static readonly RULE_fieldSimpleLikeExpr = 7;
	public static readonly RULE_fieldSimpleGtExpr = 8;
	public static readonly RULE_fieldSimpleGteExpr = 9;
	public static readonly RULE_fieldSimpleLtExpr = 10;
	public static readonly RULE_fieldSimpleLteExpr = 11;
	public static readonly RULE_fieldMultiEqExpr = 12;
	public static readonly RULE_fieldMultiLikeExpr = 13;
	public static readonly RULE_fieldRangeEqExpr = 14;
	public static readonly RULE_field = 15;
	public static readonly RULE_value = 16;
	public static readonly RULE_multiValue = 17;
	public static readonly RULE_rangeValue = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "orExpr", "andExpr", "notExpr", "fieldExpr", "parensExpr", "fieldSimpleEqExpr", 
		"fieldSimpleLikeExpr", "fieldSimpleGtExpr", "fieldSimpleGteExpr", "fieldSimpleLtExpr", 
		"fieldSimpleLteExpr", "fieldMultiEqExpr", "fieldMultiLikeExpr", "fieldRangeEqExpr", 
		"field", "value", "multiValue", "rangeValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'&'", "'|'", "'!'", "'='", "'>'", "'>='", "'<'", 
		"'<='", "'~'", "'('", "')'", "','", "'..'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WORD", "AND", "OR", "NOT", "EQ", "GT", "GTE", "LT", "LTE", 
		"LIKE", "PARENTHESIS_OPEN", "PARENTHESIS_CLOSE", "COMMA", "RANGE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FilterParser._LITERAL_NAMES, FilterParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FilterParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Filter.g4"; }

	// @Override
	public get ruleNames(): string[] { return FilterParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FilterParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FilterParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FilterParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.orExpr();
			this.state = 39;
			this.match(FilterParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orExpr(): OrExprContext {
		let _localctx: OrExprContext = new OrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FilterParser.RULE_orExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.andExpr();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FilterParser.OR) {
				{
				{
				this.state = 42;
				this.match(FilterParser.OR);
				this.state = 43;
				this.andExpr();
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpr(): AndExprContext {
		let _localctx: AndExprContext = new AndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FilterParser.RULE_andExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.notExpr();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FilterParser.AND) {
				{
				{
				this.state = 50;
				this.match(FilterParser.AND);
				this.state = 51;
				this.notExpr();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notExpr(): NotExprContext {
		let _localctx: NotExprContext = new NotExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FilterParser.RULE_notExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FilterParser.NOT) {
				{
				{
				this.state = 57;
				this.match(FilterParser.NOT);
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.fieldExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldExpr(): FieldExprContext {
		let _localctx: FieldExprContext = new FieldExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FilterParser.RULE_fieldExpr);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.parensExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.fieldSimpleEqExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 67;
				this.fieldSimpleLikeExpr();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 68;
				this.fieldSimpleGtExpr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 69;
				this.fieldSimpleGteExpr();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 70;
				this.fieldSimpleLtExpr();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 71;
				this.fieldSimpleLteExpr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 72;
				this.fieldMultiEqExpr();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 73;
				this.fieldMultiLikeExpr();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 74;
				this.fieldRangeEqExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parensExpr(): ParensExprContext {
		let _localctx: ParensExprContext = new ParensExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FilterParser.RULE_parensExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(FilterParser.PARENTHESIS_OPEN);
			this.state = 78;
			this.orExpr();
			this.state = 79;
			this.match(FilterParser.PARENTHESIS_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSimpleEqExpr(): FieldSimpleEqExprContext {
		let _localctx: FieldSimpleEqExprContext = new FieldSimpleEqExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FilterParser.RULE_fieldSimpleEqExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.field();
			this.state = 82;
			this.match(FilterParser.EQ);
			this.state = 83;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSimpleLikeExpr(): FieldSimpleLikeExprContext {
		let _localctx: FieldSimpleLikeExprContext = new FieldSimpleLikeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FilterParser.RULE_fieldSimpleLikeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.field();
			this.state = 86;
			this.match(FilterParser.LIKE);
			this.state = 87;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSimpleGtExpr(): FieldSimpleGtExprContext {
		let _localctx: FieldSimpleGtExprContext = new FieldSimpleGtExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FilterParser.RULE_fieldSimpleGtExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.field();
			this.state = 90;
			this.match(FilterParser.GT);
			this.state = 91;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSimpleGteExpr(): FieldSimpleGteExprContext {
		let _localctx: FieldSimpleGteExprContext = new FieldSimpleGteExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FilterParser.RULE_fieldSimpleGteExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.field();
			this.state = 94;
			this.match(FilterParser.GTE);
			this.state = 95;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSimpleLtExpr(): FieldSimpleLtExprContext {
		let _localctx: FieldSimpleLtExprContext = new FieldSimpleLtExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FilterParser.RULE_fieldSimpleLtExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.field();
			this.state = 98;
			this.match(FilterParser.LT);
			this.state = 99;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSimpleLteExpr(): FieldSimpleLteExprContext {
		let _localctx: FieldSimpleLteExprContext = new FieldSimpleLteExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FilterParser.RULE_fieldSimpleLteExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.field();
			this.state = 102;
			this.match(FilterParser.LTE);
			this.state = 103;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldMultiEqExpr(): FieldMultiEqExprContext {
		let _localctx: FieldMultiEqExprContext = new FieldMultiEqExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FilterParser.RULE_fieldMultiEqExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.field();
			this.state = 106;
			this.match(FilterParser.EQ);
			this.state = 107;
			this.multiValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldMultiLikeExpr(): FieldMultiLikeExprContext {
		let _localctx: FieldMultiLikeExprContext = new FieldMultiLikeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FilterParser.RULE_fieldMultiLikeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.field();
			this.state = 110;
			this.match(FilterParser.LIKE);
			this.state = 111;
			this.multiValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldRangeEqExpr(): FieldRangeEqExprContext {
		let _localctx: FieldRangeEqExprContext = new FieldRangeEqExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FilterParser.RULE_fieldRangeEqExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.field();
			this.state = 114;
			this.match(FilterParser.EQ);
			this.state = 115;
			this.rangeValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FilterParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(FilterParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FilterParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FilterParser.WORD) {
				{
				this.state = 119;
				this.match(FilterParser.WORD);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiValue(): MultiValueContext {
		let _localctx: MultiValueContext = new MultiValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FilterParser.RULE_multiValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.value();
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FilterParser.COMMA) {
				{
				{
				this.state = 123;
				this.match(FilterParser.COMMA);
				this.state = 124;
				this.value();
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeValue(): RangeValueContext {
		let _localctx: RangeValueContext = new RangeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FilterParser.RULE_rangeValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.value();
			this.state = 131;
			this.match(FilterParser.RANGE);
			this.state = 132;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10\x89\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x07\x03/\n\x03\f\x03\x0E\x032\v\x03\x03\x04\x03\x04\x03\x04\x07\x047" +
		"\n\x04\f\x04\x0E\x04:\v\x04\x03\x05\x07\x05=\n\x05\f\x05\x0E\x05@\v\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06N\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x05\x12{\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\x80\n\x13\f\x13\x0E\x13\x83\v\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x02\x02\x83\x02(\x03\x02" +
		"\x02\x02\x04+\x03\x02\x02\x02\x063\x03\x02\x02\x02\b>\x03\x02\x02\x02" +
		"\nM\x03\x02\x02\x02\fO\x03\x02\x02\x02\x0ES\x03\x02\x02\x02\x10W\x03\x02" +
		"\x02\x02\x12[\x03\x02\x02\x02\x14_\x03\x02\x02\x02\x16c\x03\x02\x02\x02" +
		"\x18g\x03\x02\x02\x02\x1Ak\x03\x02\x02\x02\x1Co\x03\x02\x02\x02\x1Es\x03" +
		"\x02\x02\x02 w\x03\x02\x02\x02\"z\x03\x02\x02\x02$|\x03\x02\x02\x02&\x84" +
		"\x03\x02\x02\x02()\x05\x04\x03\x02)*\x07\x02\x02\x03*\x03\x03\x02\x02" +
		"\x02+0\x05\x06\x04\x02,-\x07\x05\x02\x02-/\x05\x06\x04\x02.,\x03\x02\x02" +
		"\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x021\x05\x03\x02" +
		"\x02\x0220\x03\x02\x02\x0238\x05\b\x05\x0245\x07\x04\x02\x0257\x05\b\x05" +
		"\x0264\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02" +
		"\x029\x07\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x07\x06\x02\x02<;\x03\x02" +
		"\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02" +
		"\x02\x02@>\x03\x02\x02\x02AB\x05\n\x06\x02B\t\x03\x02\x02\x02CN\x05\f" +
		"\x07\x02DN\x05\x0E\b\x02EN\x05\x10\t\x02FN\x05\x12\n\x02GN\x05\x14\v\x02" +
		"HN\x05\x16\f\x02IN\x05\x18\r\x02JN\x05\x1A\x0E\x02KN\x05\x1C\x0F\x02L" +
		"N\x05\x1E\x10\x02MC\x03\x02\x02\x02MD\x03\x02\x02\x02ME\x03\x02\x02\x02" +
		"MF\x03\x02\x02\x02MG\x03\x02\x02\x02MH\x03\x02\x02\x02MI\x03\x02\x02\x02" +
		"MJ\x03\x02\x02\x02MK\x03\x02\x02\x02ML\x03\x02\x02\x02N\v\x03\x02\x02" +
		"\x02OP\x07\r\x02\x02PQ\x05\x04\x03\x02QR\x07\x0E\x02\x02R\r\x03\x02\x02" +
		"\x02ST\x05 \x11\x02TU\x07\x07\x02\x02UV\x05\"\x12\x02V\x0F\x03\x02\x02" +
		"\x02WX\x05 \x11\x02XY\x07\f\x02\x02YZ\x05\"\x12\x02Z\x11\x03\x02\x02\x02" +
		"[\\\x05 \x11\x02\\]\x07\b\x02\x02]^\x05\"\x12\x02^\x13\x03\x02\x02\x02" +
		"_`\x05 \x11\x02`a\x07\t\x02\x02ab\x05\"\x12\x02b\x15\x03\x02\x02\x02c" +
		"d\x05 \x11\x02de\x07\n\x02\x02ef\x05\"\x12\x02f\x17\x03\x02\x02\x02gh" +
		"\x05 \x11\x02hi\x07\v\x02\x02ij\x05\"\x12\x02j\x19\x03\x02\x02\x02kl\x05" +
		" \x11\x02lm\x07\x07\x02\x02mn\x05$\x13\x02n\x1B\x03\x02\x02\x02op\x05" +
		" \x11\x02pq\x07\f\x02\x02qr\x05$\x13\x02r\x1D\x03\x02\x02\x02st\x05 \x11" +
		"\x02tu\x07\x07\x02\x02uv\x05&\x14\x02v\x1F\x03\x02\x02\x02wx\x07\x03\x02" +
		"\x02x!\x03\x02\x02\x02y{\x07\x03\x02\x02zy\x03\x02\x02\x02z{\x03\x02\x02" +
		"\x02{#\x03\x02\x02\x02|\x81\x05\"\x12\x02}~\x07\x0F\x02\x02~\x80\x05\"" +
		"\x12\x02\x7F}\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02" +
		"\x02\x02\x81\x82\x03\x02\x02\x02\x82%\x03\x02\x02\x02\x83\x81\x03\x02" +
		"\x02\x02\x84\x85\x05\"\x12\x02\x85\x86\x07\x10\x02\x02\x86\x87\x05\"\x12" +
		"\x02\x87\'\x03\x02\x02\x02\b08>Mz\x81";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FilterParser.__ATN) {
			FilterParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FilterParser._serializedATN));
		}

		return FilterParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public orExpr(): OrExprContext {
		return this.getRuleContext(0, OrExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(FilterParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_parse; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExprContext extends ParserRuleContext {
	public andExpr(): AndExprContext[];
	public andExpr(i: number): AndExprContext;
	public andExpr(i?: number): AndExprContext | AndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExprContext);
		} else {
			return this.getRuleContext(i, AndExprContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FilterParser.OR);
		} else {
			return this.getToken(FilterParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_orExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExprContext extends ParserRuleContext {
	public notExpr(): NotExprContext[];
	public notExpr(i: number): NotExprContext;
	public notExpr(i?: number): NotExprContext | NotExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NotExprContext);
		} else {
			return this.getRuleContext(i, NotExprContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FilterParser.AND);
		} else {
			return this.getToken(FilterParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_andExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotExprContext extends ParserRuleContext {
	public fieldExpr(): FieldExprContext {
		return this.getRuleContext(0, FieldExprContext);
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FilterParser.NOT);
		} else {
			return this.getToken(FilterParser.NOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_notExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldExprContext extends ParserRuleContext {
	public parensExpr(): ParensExprContext | undefined {
		return this.tryGetRuleContext(0, ParensExprContext);
	}
	public fieldSimpleEqExpr(): FieldSimpleEqExprContext | undefined {
		return this.tryGetRuleContext(0, FieldSimpleEqExprContext);
	}
	public fieldSimpleLikeExpr(): FieldSimpleLikeExprContext | undefined {
		return this.tryGetRuleContext(0, FieldSimpleLikeExprContext);
	}
	public fieldSimpleGtExpr(): FieldSimpleGtExprContext | undefined {
		return this.tryGetRuleContext(0, FieldSimpleGtExprContext);
	}
	public fieldSimpleGteExpr(): FieldSimpleGteExprContext | undefined {
		return this.tryGetRuleContext(0, FieldSimpleGteExprContext);
	}
	public fieldSimpleLtExpr(): FieldSimpleLtExprContext | undefined {
		return this.tryGetRuleContext(0, FieldSimpleLtExprContext);
	}
	public fieldSimpleLteExpr(): FieldSimpleLteExprContext | undefined {
		return this.tryGetRuleContext(0, FieldSimpleLteExprContext);
	}
	public fieldMultiEqExpr(): FieldMultiEqExprContext | undefined {
		return this.tryGetRuleContext(0, FieldMultiEqExprContext);
	}
	public fieldMultiLikeExpr(): FieldMultiLikeExprContext | undefined {
		return this.tryGetRuleContext(0, FieldMultiLikeExprContext);
	}
	public fieldRangeEqExpr(): FieldRangeEqExprContext | undefined {
		return this.tryGetRuleContext(0, FieldRangeEqExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldExpr) {
			listener.enterFieldExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldExpr) {
			listener.exitFieldExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldExpr) {
			return visitor.visitFieldExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParensExprContext extends ParserRuleContext {
	public PARENTHESIS_OPEN(): TerminalNode { return this.getToken(FilterParser.PARENTHESIS_OPEN, 0); }
	public orExpr(): OrExprContext {
		return this.getRuleContext(0, OrExprContext);
	}
	public PARENTHESIS_CLOSE(): TerminalNode { return this.getToken(FilterParser.PARENTHESIS_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_parensExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterParensExpr) {
			listener.enterParensExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitParensExpr) {
			listener.exitParensExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitParensExpr) {
			return visitor.visitParensExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSimpleEqExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public EQ(): TerminalNode { return this.getToken(FilterParser.EQ, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldSimpleEqExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldSimpleEqExpr) {
			listener.enterFieldSimpleEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldSimpleEqExpr) {
			listener.exitFieldSimpleEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldSimpleEqExpr) {
			return visitor.visitFieldSimpleEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSimpleLikeExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public LIKE(): TerminalNode { return this.getToken(FilterParser.LIKE, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldSimpleLikeExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldSimpleLikeExpr) {
			listener.enterFieldSimpleLikeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldSimpleLikeExpr) {
			listener.exitFieldSimpleLikeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldSimpleLikeExpr) {
			return visitor.visitFieldSimpleLikeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSimpleGtExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public GT(): TerminalNode { return this.getToken(FilterParser.GT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldSimpleGtExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldSimpleGtExpr) {
			listener.enterFieldSimpleGtExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldSimpleGtExpr) {
			listener.exitFieldSimpleGtExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldSimpleGtExpr) {
			return visitor.visitFieldSimpleGtExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSimpleGteExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public GTE(): TerminalNode { return this.getToken(FilterParser.GTE, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldSimpleGteExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldSimpleGteExpr) {
			listener.enterFieldSimpleGteExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldSimpleGteExpr) {
			listener.exitFieldSimpleGteExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldSimpleGteExpr) {
			return visitor.visitFieldSimpleGteExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSimpleLtExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public LT(): TerminalNode { return this.getToken(FilterParser.LT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldSimpleLtExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldSimpleLtExpr) {
			listener.enterFieldSimpleLtExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldSimpleLtExpr) {
			listener.exitFieldSimpleLtExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldSimpleLtExpr) {
			return visitor.visitFieldSimpleLtExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSimpleLteExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public LTE(): TerminalNode { return this.getToken(FilterParser.LTE, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldSimpleLteExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldSimpleLteExpr) {
			listener.enterFieldSimpleLteExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldSimpleLteExpr) {
			listener.exitFieldSimpleLteExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldSimpleLteExpr) {
			return visitor.visitFieldSimpleLteExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldMultiEqExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public EQ(): TerminalNode { return this.getToken(FilterParser.EQ, 0); }
	public multiValue(): MultiValueContext {
		return this.getRuleContext(0, MultiValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldMultiEqExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldMultiEqExpr) {
			listener.enterFieldMultiEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldMultiEqExpr) {
			listener.exitFieldMultiEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldMultiEqExpr) {
			return visitor.visitFieldMultiEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldMultiLikeExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public LIKE(): TerminalNode { return this.getToken(FilterParser.LIKE, 0); }
	public multiValue(): MultiValueContext {
		return this.getRuleContext(0, MultiValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldMultiLikeExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldMultiLikeExpr) {
			listener.enterFieldMultiLikeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldMultiLikeExpr) {
			listener.exitFieldMultiLikeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldMultiLikeExpr) {
			return visitor.visitFieldMultiLikeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldRangeEqExprContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public EQ(): TerminalNode { return this.getToken(FilterParser.EQ, 0); }
	public rangeValue(): RangeValueContext {
		return this.getRuleContext(0, RangeValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_fieldRangeEqExpr; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterFieldRangeEqExpr) {
			listener.enterFieldRangeEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitFieldRangeEqExpr) {
			listener.exitFieldRangeEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitFieldRangeEqExpr) {
			return visitor.visitFieldRangeEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public WORD(): TerminalNode { return this.getToken(FilterParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_field; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public WORD(): TerminalNode | undefined { return this.tryGetToken(FilterParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_value; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiValueContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FilterParser.COMMA);
		} else {
			return this.getToken(FilterParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_multiValue; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterMultiValue) {
			listener.enterMultiValue(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitMultiValue) {
			listener.exitMultiValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitMultiValue) {
			return visitor.visitMultiValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeValueContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public RANGE(): TerminalNode { return this.getToken(FilterParser.RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FilterParser.RULE_rangeValue; }
	// @Override
	public enterRule(listener: FilterListener): void {
		if (listener.enterRangeValue) {
			listener.enterRangeValue(this);
		}
	}
	// @Override
	public exitRule(listener: FilterListener): void {
		if (listener.exitRangeValue) {
			listener.exitRangeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterVisitor<Result>): Result {
		if (visitor.visitRangeValue) {
			return visitor.visitRangeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


