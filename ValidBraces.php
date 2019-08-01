<?php

/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function work($arr) {
  $start = count($arr);
  $pattern = ['{' => '}', '(' => ')', '[' => ']'];
  $nex_step=0;
  $new_arr = [];
  foreach($arr as $key=>$a) {
    if ($nex_step == 1) {
      $nex_step = 0;
      continue;
    }
    if (count($arr)>$key+1 && $pattern[$a] == $arr[$key+1]) {
      $nex_step = 1;
    } else {
      $new_arr[] = $a;
    }
  }

  if (empty($new_arr)) {
    return true;
  } else if ($start > count($new_arr)) {
    return work($new_arr);
  }
  
  return false;
}

function validBraces($braces){
  $braces_a = str_split($braces);
  return work($braces_a);
}