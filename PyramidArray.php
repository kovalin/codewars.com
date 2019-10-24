<?php
/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
*/

function pyramid($n) {
  $out = [];
  if ($n > 0) {
      $u=0;
      do {
         array_push($out, array_fill(0, ++$u, 1));
      } while (--$n > 0);
  }
  return $out;
}
