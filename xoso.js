function quayso() {
    let nhap = document.getElementById("nhap");
   let g = [];
    for (let i = 0; i < 10; i++) {
        g.push(i);
        return g;
    }
}
function kq() {
    let doan = document.getElementById("doan")
    let result = doan.filter(function(v){
        if(doan=== nhap){
            alert("chuc mung");
        }else
        {
            alert("chuc may man ")
        }
    });
    displaynhap(result);
}
