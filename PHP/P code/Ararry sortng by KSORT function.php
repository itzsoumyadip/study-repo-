<?

$authorAssociative =array (

"poetic"=> "Willam",
"brillint"=>"Jane",
"query"=> "Charles"
);

ksort($authorAssociative);

print_r($authorAssociative);//Array ( [brillint] => Jane [poetic] => Willam [query] => Charles )


?>