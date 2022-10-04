// Generated from /Users/jsmith/code/rules-engine-poc/src/parser/Filter.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FilterParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WORD=1, AND=2, OR=3, NOT=4, EQ=5, GT=6, GTE=7, LT=8, LTE=9, LIKE=10, PARENTHESIS_OPEN=11, 
		PARENTHESIS_CLOSE=12, COMMA=13, RANGE=14;
	public static final int
		RULE_parse = 0, RULE_orExpr = 1, RULE_andExpr = 2, RULE_notExpr = 3, RULE_fieldExpr = 4, 
		RULE_parensExpr = 5, RULE_fieldSimpleEqExpr = 6, RULE_fieldSimpleLikeExpr = 7, 
		RULE_fieldSimpleGtExpr = 8, RULE_fieldSimpleGteExpr = 9, RULE_fieldSimpleLtExpr = 10, 
		RULE_fieldSimpleLteExpr = 11, RULE_fieldMultiEqExpr = 12, RULE_fieldMultiLikeExpr = 13, 
		RULE_fieldRangeEqExpr = 14, RULE_field = 15, RULE_value = 16, RULE_multiValue = 17, 
		RULE_rangeValue = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"parse", "orExpr", "andExpr", "notExpr", "fieldExpr", "parensExpr", "fieldSimpleEqExpr", 
			"fieldSimpleLikeExpr", "fieldSimpleGtExpr", "fieldSimpleGteExpr", "fieldSimpleLtExpr", 
			"fieldSimpleLteExpr", "fieldMultiEqExpr", "fieldMultiLikeExpr", "fieldRangeEqExpr", 
			"field", "value", "multiValue", "rangeValue"
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

	@Override
	public String getGrammarFileName() { return "Filter.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FilterParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ParseContext extends ParserRuleContext {
		public OrExprContext orExpr() {
			return getRuleContext(OrExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FilterParser.EOF, 0); }
		public ParseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parse; }
	}

	public final ParseContext parse() throws RecognitionException {
		ParseContext _localctx = new ParseContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_parse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			orExpr();
			setState(39);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrExprContext extends ParserRuleContext {
		public List<AndExprContext> andExpr() {
			return getRuleContexts(AndExprContext.class);
		}
		public AndExprContext andExpr(int i) {
			return getRuleContext(AndExprContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(FilterParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(FilterParser.OR, i);
		}
		public OrExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orExpr; }
	}

	public final OrExprContext orExpr() throws RecognitionException {
		OrExprContext _localctx = new OrExprContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_orExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			andExpr();
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(42);
				match(OR);
				setState(43);
				andExpr();
				}
				}
				setState(48);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AndExprContext extends ParserRuleContext {
		public List<NotExprContext> notExpr() {
			return getRuleContexts(NotExprContext.class);
		}
		public NotExprContext notExpr(int i) {
			return getRuleContext(NotExprContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(FilterParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(FilterParser.AND, i);
		}
		public AndExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_andExpr; }
	}

	public final AndExprContext andExpr() throws RecognitionException {
		AndExprContext _localctx = new AndExprContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_andExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			notExpr();
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(50);
				match(AND);
				setState(51);
				notExpr();
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NotExprContext extends ParserRuleContext {
		public FieldExprContext fieldExpr() {
			return getRuleContext(FieldExprContext.class,0);
		}
		public List<TerminalNode> NOT() { return getTokens(FilterParser.NOT); }
		public TerminalNode NOT(int i) {
			return getToken(FilterParser.NOT, i);
		}
		public NotExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notExpr; }
	}

	public final NotExprContext notExpr() throws RecognitionException {
		NotExprContext _localctx = new NotExprContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_notExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NOT) {
				{
				{
				setState(57);
				match(NOT);
				}
				}
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(63);
			fieldExpr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldExprContext extends ParserRuleContext {
		public ParensExprContext parensExpr() {
			return getRuleContext(ParensExprContext.class,0);
		}
		public FieldSimpleEqExprContext fieldSimpleEqExpr() {
			return getRuleContext(FieldSimpleEqExprContext.class,0);
		}
		public FieldSimpleLikeExprContext fieldSimpleLikeExpr() {
			return getRuleContext(FieldSimpleLikeExprContext.class,0);
		}
		public FieldSimpleGtExprContext fieldSimpleGtExpr() {
			return getRuleContext(FieldSimpleGtExprContext.class,0);
		}
		public FieldSimpleGteExprContext fieldSimpleGteExpr() {
			return getRuleContext(FieldSimpleGteExprContext.class,0);
		}
		public FieldSimpleLtExprContext fieldSimpleLtExpr() {
			return getRuleContext(FieldSimpleLtExprContext.class,0);
		}
		public FieldSimpleLteExprContext fieldSimpleLteExpr() {
			return getRuleContext(FieldSimpleLteExprContext.class,0);
		}
		public FieldMultiEqExprContext fieldMultiEqExpr() {
			return getRuleContext(FieldMultiEqExprContext.class,0);
		}
		public FieldMultiLikeExprContext fieldMultiLikeExpr() {
			return getRuleContext(FieldMultiLikeExprContext.class,0);
		}
		public FieldRangeEqExprContext fieldRangeEqExpr() {
			return getRuleContext(FieldRangeEqExprContext.class,0);
		}
		public FieldExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldExpr; }
	}

	public final FieldExprContext fieldExpr() throws RecognitionException {
		FieldExprContext _localctx = new FieldExprContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_fieldExpr);
		try {
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				parensExpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				fieldSimpleEqExpr();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(67);
				fieldSimpleLikeExpr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(68);
				fieldSimpleGtExpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(69);
				fieldSimpleGteExpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(70);
				fieldSimpleLtExpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(71);
				fieldSimpleLteExpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(72);
				fieldMultiEqExpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(73);
				fieldMultiLikeExpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(74);
				fieldRangeEqExpr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParensExprContext extends ParserRuleContext {
		public TerminalNode PARENTHESIS_OPEN() { return getToken(FilterParser.PARENTHESIS_OPEN, 0); }
		public OrExprContext orExpr() {
			return getRuleContext(OrExprContext.class,0);
		}
		public TerminalNode PARENTHESIS_CLOSE() { return getToken(FilterParser.PARENTHESIS_CLOSE, 0); }
		public ParensExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parensExpr; }
	}

	public final ParensExprContext parensExpr() throws RecognitionException {
		ParensExprContext _localctx = new ParensExprContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_parensExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(PARENTHESIS_OPEN);
			setState(78);
			orExpr();
			setState(79);
			match(PARENTHESIS_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSimpleEqExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode EQ() { return getToken(FilterParser.EQ, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FieldSimpleEqExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSimpleEqExpr; }
	}

	public final FieldSimpleEqExprContext fieldSimpleEqExpr() throws RecognitionException {
		FieldSimpleEqExprContext _localctx = new FieldSimpleEqExprContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fieldSimpleEqExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			field();
			setState(82);
			match(EQ);
			setState(83);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSimpleLikeExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode LIKE() { return getToken(FilterParser.LIKE, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FieldSimpleLikeExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSimpleLikeExpr; }
	}

	public final FieldSimpleLikeExprContext fieldSimpleLikeExpr() throws RecognitionException {
		FieldSimpleLikeExprContext _localctx = new FieldSimpleLikeExprContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fieldSimpleLikeExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			field();
			setState(86);
			match(LIKE);
			setState(87);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSimpleGtExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode GT() { return getToken(FilterParser.GT, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FieldSimpleGtExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSimpleGtExpr; }
	}

	public final FieldSimpleGtExprContext fieldSimpleGtExpr() throws RecognitionException {
		FieldSimpleGtExprContext _localctx = new FieldSimpleGtExprContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_fieldSimpleGtExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			field();
			setState(90);
			match(GT);
			setState(91);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSimpleGteExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode GTE() { return getToken(FilterParser.GTE, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FieldSimpleGteExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSimpleGteExpr; }
	}

	public final FieldSimpleGteExprContext fieldSimpleGteExpr() throws RecognitionException {
		FieldSimpleGteExprContext _localctx = new FieldSimpleGteExprContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_fieldSimpleGteExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			field();
			setState(94);
			match(GTE);
			setState(95);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSimpleLtExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode LT() { return getToken(FilterParser.LT, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FieldSimpleLtExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSimpleLtExpr; }
	}

	public final FieldSimpleLtExprContext fieldSimpleLtExpr() throws RecognitionException {
		FieldSimpleLtExprContext _localctx = new FieldSimpleLtExprContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_fieldSimpleLtExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			field();
			setState(98);
			match(LT);
			setState(99);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSimpleLteExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode LTE() { return getToken(FilterParser.LTE, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FieldSimpleLteExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSimpleLteExpr; }
	}

	public final FieldSimpleLteExprContext fieldSimpleLteExpr() throws RecognitionException {
		FieldSimpleLteExprContext _localctx = new FieldSimpleLteExprContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_fieldSimpleLteExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			field();
			setState(102);
			match(LTE);
			setState(103);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldMultiEqExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode EQ() { return getToken(FilterParser.EQ, 0); }
		public MultiValueContext multiValue() {
			return getRuleContext(MultiValueContext.class,0);
		}
		public FieldMultiEqExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldMultiEqExpr; }
	}

	public final FieldMultiEqExprContext fieldMultiEqExpr() throws RecognitionException {
		FieldMultiEqExprContext _localctx = new FieldMultiEqExprContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_fieldMultiEqExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			field();
			setState(106);
			match(EQ);
			setState(107);
			multiValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldMultiLikeExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode LIKE() { return getToken(FilterParser.LIKE, 0); }
		public MultiValueContext multiValue() {
			return getRuleContext(MultiValueContext.class,0);
		}
		public FieldMultiLikeExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldMultiLikeExpr; }
	}

	public final FieldMultiLikeExprContext fieldMultiLikeExpr() throws RecognitionException {
		FieldMultiLikeExprContext _localctx = new FieldMultiLikeExprContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_fieldMultiLikeExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			field();
			setState(110);
			match(LIKE);
			setState(111);
			multiValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldRangeEqExprContext extends ParserRuleContext {
		public FieldContext field() {
			return getRuleContext(FieldContext.class,0);
		}
		public TerminalNode EQ() { return getToken(FilterParser.EQ, 0); }
		public RangeValueContext rangeValue() {
			return getRuleContext(RangeValueContext.class,0);
		}
		public FieldRangeEqExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldRangeEqExpr; }
	}

	public final FieldRangeEqExprContext fieldRangeEqExpr() throws RecognitionException {
		FieldRangeEqExprContext _localctx = new FieldRangeEqExprContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_fieldRangeEqExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			field();
			setState(114);
			match(EQ);
			setState(115);
			rangeValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(FilterParser.WORD, 0); }
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(WORD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(FilterParser.WORD, 0); }
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WORD) {
				{
				setState(119);
				match(WORD);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultiValueContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FilterParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FilterParser.COMMA, i);
		}
		public MultiValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiValue; }
	}

	public final MultiValueContext multiValue() throws RecognitionException {
		MultiValueContext _localctx = new MultiValueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_multiValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			value();
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(123);
				match(COMMA);
				setState(124);
				value();
				}
				}
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RangeValueContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TerminalNode RANGE() { return getToken(FilterParser.RANGE, 0); }
		public RangeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rangeValue; }
	}

	public final RangeValueContext rangeValue() throws RecognitionException {
		RangeValueContext _localctx = new RangeValueContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_rangeValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			value();
			setState(131);
			match(RANGE);
			setState(132);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\20\u0089\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\3\2\3\3\3\3\3\3\7\3/\n\3\f\3\16\3\62\13\3"+
		"\3\4\3\4\3\4\7\4\67\n\4\f\4\16\4:\13\4\3\5\7\5=\n\5\f\5\16\5@\13\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6N\n\6\3\7\3\7\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3"+
		"\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\3\20\3\21\3\21\3\22\5\22{\n\22\3\23\3\23\3\23\7\23\u0080"+
		"\n\23\f\23\16\23\u0083\13\23\3\24\3\24\3\24\3\24\3\24\2\2\25\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36 \"$&\2\2\2\u0083\2(\3\2\2\2\4+\3\2\2\2\6"+
		"\63\3\2\2\2\b>\3\2\2\2\nM\3\2\2\2\fO\3\2\2\2\16S\3\2\2\2\20W\3\2\2\2\22"+
		"[\3\2\2\2\24_\3\2\2\2\26c\3\2\2\2\30g\3\2\2\2\32k\3\2\2\2\34o\3\2\2\2"+
		"\36s\3\2\2\2 w\3\2\2\2\"z\3\2\2\2$|\3\2\2\2&\u0084\3\2\2\2()\5\4\3\2)"+
		"*\7\2\2\3*\3\3\2\2\2+\60\5\6\4\2,-\7\5\2\2-/\5\6\4\2.,\3\2\2\2/\62\3\2"+
		"\2\2\60.\3\2\2\2\60\61\3\2\2\2\61\5\3\2\2\2\62\60\3\2\2\2\638\5\b\5\2"+
		"\64\65\7\4\2\2\65\67\5\b\5\2\66\64\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3"+
		"\2\2\29\7\3\2\2\2:8\3\2\2\2;=\7\6\2\2<;\3\2\2\2=@\3\2\2\2><\3\2\2\2>?"+
		"\3\2\2\2?A\3\2\2\2@>\3\2\2\2AB\5\n\6\2B\t\3\2\2\2CN\5\f\7\2DN\5\16\b\2"+
		"EN\5\20\t\2FN\5\22\n\2GN\5\24\13\2HN\5\26\f\2IN\5\30\r\2JN\5\32\16\2K"+
		"N\5\34\17\2LN\5\36\20\2MC\3\2\2\2MD\3\2\2\2ME\3\2\2\2MF\3\2\2\2MG\3\2"+
		"\2\2MH\3\2\2\2MI\3\2\2\2MJ\3\2\2\2MK\3\2\2\2ML\3\2\2\2N\13\3\2\2\2OP\7"+
		"\r\2\2PQ\5\4\3\2QR\7\16\2\2R\r\3\2\2\2ST\5 \21\2TU\7\7\2\2UV\5\"\22\2"+
		"V\17\3\2\2\2WX\5 \21\2XY\7\f\2\2YZ\5\"\22\2Z\21\3\2\2\2[\\\5 \21\2\\]"+
		"\7\b\2\2]^\5\"\22\2^\23\3\2\2\2_`\5 \21\2`a\7\t\2\2ab\5\"\22\2b\25\3\2"+
		"\2\2cd\5 \21\2de\7\n\2\2ef\5\"\22\2f\27\3\2\2\2gh\5 \21\2hi\7\13\2\2i"+
		"j\5\"\22\2j\31\3\2\2\2kl\5 \21\2lm\7\7\2\2mn\5$\23\2n\33\3\2\2\2op\5 "+
		"\21\2pq\7\f\2\2qr\5$\23\2r\35\3\2\2\2st\5 \21\2tu\7\7\2\2uv\5&\24\2v\37"+
		"\3\2\2\2wx\7\3\2\2x!\3\2\2\2y{\7\3\2\2zy\3\2\2\2z{\3\2\2\2{#\3\2\2\2|"+
		"\u0081\5\"\22\2}~\7\17\2\2~\u0080\5\"\22\2\177}\3\2\2\2\u0080\u0083\3"+
		"\2\2\2\u0081\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082%\3\2\2\2\u0083\u0081"+
		"\3\2\2\2\u0084\u0085\5\"\22\2\u0085\u0086\7\20\2\2\u0086\u0087\5\"\22"+
		"\2\u0087\'\3\2\2\2\b\608>Mz\u0081";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}