/*
Kata url: https://www.codewars.com/kata/tv-remote-shift-and-space/javascript

Task: How many button presses on my remote are required to type the given words?

Notes
The cursor always starts on the letter a (top left)

The alpha characters are initially lowercase (as shown above)

Remember to also press OK to "accept" each letter

Take a direct route from one letter to the next

The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)

Although the blank keys have no function, you may navigate through them if you want to

Spaces may occur anywhere in the words string.

Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)

Example
words = Code Wars

C => a-f-k-p-u-aA-OK-U-P-K-F-A-B-C-OK = 14
o => C-H-M-R-W-V-U-aA-OK-SP-v-q-l-m-n-o-OK = 16
d => o-j-e-d-OK = 4
e => d-e-OK = 2
space => e-d-c-b-g-l-q-v-SP-OK = 9
W => SP-aA-OK-SP-V-W-OK = 6
a => W-V-U-aA-OK-u-p-k-f-a-OK = 10
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 14 + 16 + 4 + 2 + 9 + 6 + 10 + 6 + 2 = 69
*/

function isUpperCase( char ) {
    return char !== char.toLowerCase();
}

function tvRemote(words) {
  var s = words.split('');
  var arr = new Array();
  arr['a'] = ['1', '1'];
  arr['b'] = ['1', '2'];
  arr['c'] = ['1', '3'];
  arr['d'] = ['1', '4'];
  arr['e'] = ['1', '5'];
  arr['1'] = ['1', '6'];
  arr['2'] = ['1', '7'];
  arr['3'] = ['1', '8'];
  
  
  arr['f'] = ['2', '1'];
  arr['g'] = ['2', '2'];
  arr['h'] = ['2', '3'];
  arr['i'] = ['2', '4'];
  arr['j'] = ['2', '5'];
  arr['4'] = ['2', '6'];
  arr['5'] = ['2', '7'];
  arr['6'] = ['2', '8'];
  
  
  arr['k'] = ['3', '1'];
  arr['l'] = ['3', '2'];
  arr['m'] = ['3', '3'];
  arr['n'] = ['3', '4'];
  arr['o'] = ['3', '5'];
  arr['7'] = ['3', '6'];
  arr['8'] = ['3', '7'];
  arr['9'] = ['3', '8'];
  
  
  arr['p'] = ['4', '1'];
  arr['q'] = ['4', '2'];
  arr['r'] = ['4', '3'];
  arr['s'] = ['4', '4'];
  arr['t'] = ['4', '5'];
  arr['.'] = ['4', '6'];
  arr['@'] = ['4', '7'];
  arr['0'] = ['4', '8'];
  
  
  arr['u'] = ['5', '1'];
  arr['v'] = ['5', '2'];
  arr['w'] = ['5', '3'];
  arr['x'] = ['5', '4'];
  arr['y'] = ['5', '5'];
  arr['z'] = ['5', '6'];
  arr['_'] = ['5', '7'];
  arr['/'] = ['5', '8'];
  
  arr['Up'] = ['6', '1'];
  arr['sp'] = ['6', '2'];

  var spec = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '@','_', '/', 'sp'];

  var index;
  var cursor = 'a';
  var isUp = false;
  var sum = 0;
  for (index = 0; index < s.length; ++index) {
      if (s[index] == ' ') {
        s[index] = 'sp';
      }

      if (!spec.includes(s[index])) {
        if (isUpperCase(s[index])) {
          if (isUp == false) {
            sum += Math.abs(Math.abs(arr['Up'][0]) - Math.abs(arr[cursor][0])) + Math.abs(Math.abs(arr['Up'][1]) - Math.abs(arr[cursor][1])) + 1;
            cursor = 'Up';
            console.log(cursor+'-'+sum+'('+isUp+')');
            isUp = true;
          }
        } else {
          if (isUp == true) {
            sum += Math.abs(Math.abs(arr['Up'][0]) - Math.abs(arr[cursor][0])) + Math.abs(Math.abs(arr['Up'][1]) - Math.abs(arr[cursor][1])) + 1;
            cursor = 'Up';
            console.log(cursor+'-'+sum+'('+isUp+')');
            isUp = false;
          }
        }
      }
      
      var char = s[index];
      char = char.toLowerCase();
      sum += Math.abs(Math.abs(arr[cursor][0]) - Math.abs(arr[char][0])) + Math.abs(Math.abs(arr[cursor][1]) - Math.abs(arr[char][1])) + 1;
      cursor = char; 
  }
  return sum;
}