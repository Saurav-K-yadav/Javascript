console.log('Regular Expressions and Related functions');
// let reg = /is/g;   //g means global  flag is optional
let reg = /IS/i;     //i means case insensitive
//Above is a regular expression literal
//g flag is list all match and will be displayed according to number of times exec is runned 
console.log(reg);
console.log(reg.source);
//Displays value in regular expression literal

//functions to match expresssions:
let s = "This is a js tutorial and this is supposed to be a fun";

//1.exec()-> returns array for match and null for no match
let result = reg.exec(s);
console.log(result);
//index starts from 0 and first match index is displayed
result = reg.exec(s);
console.log(result);
//displays next occurance in case of g flag

//2.test() --> returns true in match else false
let match = /a/g;
let out = match.test(s);
console.log(out);

//3.match() --> It will return array of results or null
let result2 = s.match(match);//its syntax is opposite of others
//lists all occurance at once in g flag
console.log(result2);

//4.search() -->returns index of first match else -1
let result3 = s.search(match);
console.log(result3);

//5.replace() -->replaces returns new replaced string with all the replacements
let result5=s.replace(match,"are");
// g flag replaces all
console.log(result5);
