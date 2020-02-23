// 1............100
// in ra các số chia hết cho 2
// in ra các số chia hết cho 3
// in ra các số chia hết cho 5 dư 1
// in ra các số chính phương -> x => Math.sprt(x)%1


function chiaHetCho2(){
    for(let i=1;i<=100;i++){
        const result = (i%2 === 0);
        if(result)
            console.log(i);
    }
}

function chiaHetCh3(){
    for(let i=1;i<=100;i++){
        const result = (i%3 === 0);
        if(result)
            console.log(i);
    }
}
function chiaHetCho5Du1(){
    for(let i=1;i<=100;i++){
        const result = (i%5 === 1);
        if(result)
            console.log(i);
    }
}
function isSoChinhPhuong(){
    for(let i=1;i<=100;i++){
        const result = (Math.sqrt(i)%1 === 0);
        if(result)
            console.log(i);
    }
}
function inSo(checkNumber){
    for(let i = 1;i<=100;i++){
        const dieukien = checkNumber(i);
        if(dieukien) console.log(i);
    }
}
function checkChiaHetCho2(i){
    return i%2===0;
}
function checkChiaHetCho3(i){
    return i%3===0;
}
function checkChia5Du1(i){
    return i%5===1;
}
function checkSoChinhPhuong(i){
    return Math.sqrt(i)%1===0;
}
inSo(checkChiaHetCho2);

inSo(i=> Math.sqrt(i)%1===0);