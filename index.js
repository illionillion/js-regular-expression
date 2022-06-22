
const text = '名前：伊藤淳一\n電話：030-1234-5678\n住所：兵庫県西脇市板波町1-2-3\n電話：07-1235-5678\n電話：03(1234)5678\n電話：0795(12)3456'

console.log(text.match(/\d\d-\d\d\d\d-\d\d\d\d/g)); // gあり：全パターン

// console.log(text.match(/\d\d-\d\d\d\d-\d\d\d\d/)); // gなし：1つだけ

console.log(text.match(/\d{2,5}-\d{1,4}-\d{4}/g)); // \d{2,5} 2から5桁

console.log(text.match(/\d{2,5}[-(]\d{1,4}[-)]\d{4}/g)); // [-(] -、もしくわ(