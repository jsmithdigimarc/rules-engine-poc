grammar Filter;

parse: orExpr EOF;
orExpr: andExpr (OR andExpr)*;
andExpr: notExpr (AND notExpr)*;
notExpr: (NOT)* fieldExpr;
fieldExpr:
	parensExpr
	| fieldSimpleEqExpr
	| fieldSimpleLikeExpr
	| fieldSimpleGtExpr
	| fieldSimpleGteExpr
	| fieldSimpleLtExpr
	| fieldSimpleLteExpr
	| fieldMultiEqExpr
	| fieldMultiLikeExpr
	| fieldRangeEqExpr;
parensExpr: PARENTHESIS_OPEN orExpr PARENTHESIS_CLOSE;
fieldSimpleEqExpr: field EQ value;
fieldSimpleLikeExpr: field LIKE value;
fieldSimpleGtExpr: field GT value;
fieldSimpleGteExpr: field GTE value;
fieldSimpleLtExpr: field LT value;
fieldSimpleLteExpr: field LTE value;
fieldMultiEqExpr: field EQ multiValue;
fieldMultiLikeExpr: field LIKE multiValue;
fieldRangeEqExpr: field EQ rangeValue;
field: WORD;
value: WORD?;
multiValue: value (COMMA value)*;
rangeValue: value RANGE value;

WORD: WORD_CHAR ('.'? WORD_CHAR)*;
fragment WORD_CHAR: ALLOWED_CHAR | ('\\' .);
fragment ALLOWED_CHAR:
	~(
		'&'
		| '|'
		| '!'
		| '>'
		| '<'
		| '='
		| '~'
		| '('
		| ')'
		| '.'
		| ','
		| '\\'
	);

AND: '&';
OR: '|';
NOT: '!';
EQ: '=';
GT: '>';
GTE: '>=';
LT: '<';
LTE: '<=';
LIKE: '~';
PARENTHESIS_OPEN: '(';
PARENTHESIS_CLOSE: ')';
COMMA: ',';
RANGE: '..';