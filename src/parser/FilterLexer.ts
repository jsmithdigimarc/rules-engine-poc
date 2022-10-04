// Generated from ./src/parser/Filter.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FilterLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WORD", "WORD_CHAR", "ALLOWED_CHAR", "AND", "OR", "NOT", "EQ", "GT", "GTE", 
		"LT", "LTE", "LIKE", "PARENTHESIS_OPEN", "PARENTHESIS_CLOSE", "COMMA", 
		"RANGE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'&'", "'|'", "'!'", "'='", "'>'", "'>='", "'<'", 
		"'<='", "'~'", "'('", "')'", "','", "'..'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WORD", "AND", "OR", "NOT", "EQ", "GT", "GTE", "LT", "LTE", 
		"LIKE", "PARENTHESIS_OPEN", "PARENTHESIS_CLOSE", "COMMA", "RANGE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FilterLexer._LITERAL_NAMES, FilterLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FilterLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FilterLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Filter.g4"; }

	// @Override
	public get ruleNames(): string[] { return FilterLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FilterLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FilterLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FilterLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10Q\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
		"\x05\x02&\n\x02\x03\x02\x07\x02)\n\x02\f\x02\x0E\x02,\v\x02\x03\x03\x03" +
		"\x03\x03\x03\x05\x031\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12\x03\x02\x03\x05\x02\x02" +
		"\x07\x02\x02\t\x02\x04\v\x02\x05\r\x02\x06\x0F\x02\x07\x11\x02\b\x13\x02" +
		"\t\x15\x02\n\x17\x02\v\x19\x02\f\x1B\x02\r\x1D\x02\x0E\x1F\x02\x0F!\x02" +
		"\x10\x03\x02\x03\v\x02##((*+..00>@^^~~\x80\x80\x02Q\x02\x03\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
		"\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
		"\x02!\x03\x02\x02\x02\x03#\x03\x02\x02\x02\x050\x03\x02\x02\x02\x072\x03" +
		"\x02\x02\x02\t4\x03\x02\x02\x02\v6\x03\x02\x02\x02\r8\x03\x02\x02\x02" +
		"\x0F:\x03\x02\x02\x02\x11<\x03\x02\x02\x02\x13>\x03\x02\x02\x02\x15A\x03" +
		"\x02\x02\x02\x17C\x03\x02\x02\x02\x19F\x03\x02\x02\x02\x1BH\x03\x02\x02" +
		"\x02\x1DJ\x03\x02\x02\x02\x1FL\x03\x02\x02\x02!N\x03\x02\x02\x02#*\x05" +
		"\x05\x03\x02$&\x070\x02\x02%$\x03\x02\x02\x02%&\x03\x02\x02\x02&\'\x03" +
		"\x02\x02\x02\')\x05\x05\x03\x02(%\x03\x02\x02\x02),\x03\x02\x02\x02*(" +
		"\x03\x02\x02\x02*+\x03\x02\x02\x02+\x04\x03\x02\x02\x02,*\x03\x02\x02" +
		"\x02-1\x05\x07\x04\x02./\x07^\x02\x02/1\v\x02\x02\x020-\x03\x02\x02\x02" +
		"0.\x03\x02\x02\x021\x06\x03\x02\x02\x0223\n\x02\x02\x023\b\x03\x02\x02" +
		"\x0245\x07(\x02\x025\n\x03\x02\x02\x0267\x07~\x02\x027\f\x03\x02\x02\x02" +
		"89\x07#\x02\x029\x0E\x03\x02\x02\x02:;\x07?\x02\x02;\x10\x03\x02\x02\x02" +
		"<=\x07@\x02\x02=\x12\x03\x02\x02\x02>?\x07@\x02\x02?@\x07?\x02\x02@\x14" +
		"\x03\x02\x02\x02AB\x07>\x02\x02B\x16\x03\x02\x02\x02CD\x07>\x02\x02DE" +
		"\x07?\x02\x02E\x18\x03\x02\x02\x02FG\x07\x80\x02\x02G\x1A\x03\x02\x02" +
		"\x02HI\x07*\x02\x02I\x1C\x03\x02\x02\x02JK\x07+\x02\x02K\x1E\x03\x02\x02" +
		"\x02LM\x07.\x02\x02M \x03\x02\x02\x02NO\x070\x02\x02OP\x070\x02\x02P\"" +
		"\x03\x02\x02\x02\x06\x02%*0\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FilterLexer.__ATN) {
			FilterLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FilterLexer._serializedATN));
		}

		return FilterLexer.__ATN;
	}

}

