<?

// --------------------------------
// -- Double Quoted Strings
// --------------------------------

// Gneeral use
$sampleString = "A penny saved is a penny earned.\n";
echo $sampleString;

$currency = 'penny';
echo "A $currency saved is a $currency earned.\n"; #variable value will be printed out.

$var = 2;

echo "$varnd place\n"; #won't work

echo "{$var}nd place\n"; #will work

echo $var."nd place\n"; #will work using concat

// The backslash
$misc = "St. Patrick\"s Day";
$misc = "C:\Temp";
$misc = "\n";

echo $misc;