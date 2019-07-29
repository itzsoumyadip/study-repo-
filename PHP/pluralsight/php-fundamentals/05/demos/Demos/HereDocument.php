<?php

// --------------------------------
// -- Here Document, HereDoc
// --------------------------------

/*
HereDoc is a section of a source code file that is treated as if it were a separate file. 

It starts with 
1. three less-than characters <<<
2. followed by an Identifyer, then a new line.
3. The string then follows (content you want to put there)
4. Then on a new line the identifyer again to close the quotation 
   (nothing but the Identifyer and the closing semi colon can be on that line)

*/

$famousQuote = <<<EOT
    Be not afraid of greatness;  
    some are born great,  
    some achieve greatness, 
    and others have greatness thrust upon them.

                          - William Shakespeare
EOT;

print <<<QUOTE
    Electric communication will never be a substitute for the face of someone     
    who with their soul encourages another person to be brave and true.
            - Charles Dickens

$famousQuote
QUOTE;

// ^ must be the only thing on the line.
