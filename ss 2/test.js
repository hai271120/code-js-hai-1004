let n = Number(prompt('Nhập giá trị n thỏa mãn 4<=n<=20 và n chẵn:'));
let k = Number(prompt('Nhập giá trị i thỏa mãn 0<= k <=(n-1):'));
function findOppositeNumber(n,i) {
    if ( n%2==0 & k>n & n>=4 & n<=20 ) {
        return k-n/2;
    }
    else if ( n%2==0 & k<=n & n>=4 & n<=20 ) {
        return k+n/2;
    }
    else {
        alert('Nhập lại giá trị thỏa mãn điều kiện đề bài.');
    }
}
alert(findOppositeNumber(n,k));