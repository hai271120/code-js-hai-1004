
// bai 1:
//  let n = prompt("nhap vao n");
// if(n>=4 && n <=20){
//     console.log(n);
// }else
// {
//     console.log("nhap lai n");
// }
// let k = prompt("nhap vao k ");

// function timson(){
//         kiemtran();
//         console.log(kiemtran());
//     let g=[];
//     for (let j = 0; j < n-1; j++) {
//         g.push(j);
        
//     }
//     console.log(g);
    
// }
// function findOppositeNumber() {
//     let vitridoi= Number;
//    timson(n);
//    console.log(timson);
//     for (let i = 0; i < g[i].length; i++) {
//         if(k === g[i]){
//             return i;
//             vitridoi = i + ((n-1)/2);
//             console.log(vitridoi);
//         }
        
//     }
// }
// bai 2:
function merge2String(a,b)
{
    c = String(a);
    d = String(b);
    e = [];
    if (c.length > a.length)
        for (let i = 0; i < a.length; i++) {
            if (i<b.length)
            e = e + a[i] + b[i];
            else e = e + b[i]
    }
    if (c.length <= b.length)
        for (let i = 0; i < b.length; i++) {
            if (i<a.length)
            e = e + a[i] + b[i];
            else e = e + b[i]
    }
    return e
}

console.log(merge2String('abc','0123'))