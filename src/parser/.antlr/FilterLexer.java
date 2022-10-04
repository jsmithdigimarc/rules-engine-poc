// Generated from /Users/jsmith/code/rules-engine-poc/src/parser/Filter.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FilterLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WORD=1, AND=2, OR=3, NOT=4, EQ=5, GT=6, GTE=7, LT=8, LTE=9, LIKE=10, PARENTHESIS_OPEN=11, 
		PARENTHESIS_CLOSE=12, COMMA=13, RANGE=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WORD", "WORD_CHAR", "ALLOWED_CHAR", "AND", "OR", "NOT", "EQ", "GT", 
			"GTE", "LT", "LTE", "LIKE", "PARENTHESIS_OPEN", "PARENTHESIS_CLOSE", 
			"COMMA", "RANGE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'&'", "'|'", "'!'", "'='", "'>'", "'>='", "'<'", "'<='", 
			"'~'", "'('", "')'", "','", "'..'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WORD", "AND", "OR", "NOT", "EQ", "GT", "GTE", "LT", "LTE", "LIKE", 
			"PARENTHESIS_OPEN", "PARENTHESIS_CLOSE", "COMMA", "RANGE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public FilterLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Filter.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20Q\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\5"+
		"\2&\n\2\3\2\7\2)\n\2\f\2\16\2,\13\2\3\3\3\3\3\3\5\3\61\n\3\3\4\3\4\3\5"+
		"\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\f"+
		"\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\2\2\22\3\3\5\2\7"+
		"\2\t\4\13\5\r\6\17\7\21\b\23\t\25\n\27\13\31\f\33\r\35\16\37\17!\20\3"+
		"\2\3\13\2##((*+..\60\60>@^^~~\u0080\u0080\2Q\2\3\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\2!\3\2\2\2\3#\3\2\2\2\5\60\3\2\2\2\7\62\3\2\2\2\t\64\3\2\2\2\13\66"+
		"\3\2\2\2\r8\3\2\2\2\17:\3\2\2\2\21<\3\2\2\2\23>\3\2\2\2\25A\3\2\2\2\27"+
		"C\3\2\2\2\31F\3\2\2\2\33H\3\2\2\2\35J\3\2\2\2\37L\3\2\2\2!N\3\2\2\2#*"+
		"\5\5\3\2$&\7\60\2\2%$\3\2\2\2%&\3\2\2\2&\'\3\2\2\2\')\5\5\3\2(%\3\2\2"+
		"\2),\3\2\2\2*(\3\2\2\2*+\3\2\2\2+\4\3\2\2\2,*\3\2\2\2-\61\5\7\4\2./\7"+
		"^\2\2/\61\13\2\2\2\60-\3\2\2\2\60.\3\2\2\2\61\6\3\2\2\2\62\63\n\2\2\2"+
		"\63\b\3\2\2\2\64\65\7(\2\2\65\n\3\2\2\2\66\67\7~\2\2\67\f\3\2\2\289\7"+
		"#\2\29\16\3\2\2\2:;\7?\2\2;\20\3\2\2\2<=\7@\2\2=\22\3\2\2\2>?\7@\2\2?"+
		"@\7?\2\2@\24\3\2\2\2AB\7>\2\2B\26\3\2\2\2CD\7>\2\2DE\7?\2\2E\30\3\2\2"+
		"\2FG\7\u0080\2\2G\32\3\2\2\2HI\7*\2\2I\34\3\2\2\2JK\7+\2\2K\36\3\2\2\2"+
		"LM\7.\2\2M \3\2\2\2NO\7\60\2\2OP\7\60\2\2P\"\3\2\2\2\6\2%*\60\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}