let str = 'abcdefedcba';
let str2 = 'abcdeffedcba';
let str3 = 'abcdefFedcba';


function isMirrorString(str) {
    if (!str) return;

    for (let i = 0; i < str.length/2; ++i){
        if (str[i] !== str[str.length - i - 1]){
            return false;
        }
    }

    return true;
}

console.log(isMirrorString(str));
console.log(isMirrorString(str2));
console.log(isMirrorString(str3));

