const text = 'n電話：030-1234-5678\n電話：07-1235-5678\n電話：03(1234)5678\n電話：0795(12)3456'

const str1 = new RegExp(/\d\d-\d\d\d\d-\d\d\d\d/,'g')
console.log(text.match(str1));

const str2 = new RegExp(/\d{2,5}-\d{1,4}-\d{4}/,'g')
console.log(text.match(str2));

const str3 = new RegExp(/\d{2,5}[-(]\d{1,4}[-)]\d{4}/,'g')
console.log(text.match(str3));


const text2 = 'ああ、いい、うう、え、おお、ア'

const str4 = new RegExp(/、/,'g') //、まで全て置き換え
console.log(text2.replace(str4,''));

const str5 = new RegExp(/(.)\1/,'g') // 同じ文字が2つ並んでるところだけ置き換え
console.log(text2.replace(str5,''));