 //bai 2:
 function merge2string(arr1,arr2) {
  let result =[];
    for (let i = 0; i < arr1.length; i++) {
         result.push(arr1[i])
     }
     for (let i = 0; i < arr2.length; i++) {
         result.push(arr2[i])
     }
     for(let i= result.length-1;i>=0;i--){
        let value = result[i];
         if(result.indexOf(value)!=i){
             result.sort();
         }
     }
     return result;
 }
 console.log(merge2string("abc","123"));
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