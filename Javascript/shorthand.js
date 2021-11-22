console.log("This is tute 49");

//character classes


let regex = /\wrav/; //word character 
regex = /\w+rav/;
//the '+' after the word character means that we
//  can have any number of unmatched words before matched words except space
regex = /\WKumar/;    //non word character i.e space and signs
regex = /\W+Y/;
regex = /\d000/;//match a digit
regex = /\D0/;//Match a non digit
regex = /\s+Y/;//match  a space
regex = /\S+rav/;//NON white space character
regex=/mar\b/;//Word bboundary i.e the word ends


//Assertions
regex=/a(?=r)/;//r should come after a
regex=/a(?!r)/;//r should not come after a
str = "saurav /*-1000K0umar   Yadav";
let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} foes not match the expression ${regex.source}`);
}
