#Problem Domain
Given "broken code" meant to replace all dots with dashes, fix the code so that it works for all dashes.

#URL
https://www.codewars.com/kata/fixme-replace-all-dots/javascript

#Description on Code Wars
"The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null."

##Sources
I used MDN to learn that JS reads .s as an arbitrary character, thus I needed to escape it. I also learned here that added a ag after the slashes makes it work for all instances.
