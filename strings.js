//strings
const gameName = new String('hiteshhc');
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstr=gameName.substring(0,4);
console.log(newstr);

const anostr=gameName.slice(-8,4);
console.log(anostr);

const nenn="  sayan   ";
console.log(nenn.trim());

const url="sauan das";
url.replace(url.replace('u','y'));
console.log(url);