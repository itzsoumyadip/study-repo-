<?

// --------------------------------
// -- Single Quoted Strings
// --------------------------------

// Gneeral use
$sampleString = 'A penny saved is a penny earned.';
echo $sampleString;

// Variable is not interpolated. Meaning it won't be executed/evaluated inside the single quoted string
$currency = 'penny';
echo 'A $currency saved is a $currency earned.'; #variable name will be printed out, just like regular text

// The backslash
$misc = 'St. Patrick\'s Day';
$misc = '\n';

echo $misc;