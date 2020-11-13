localStorage.setItem('wef',0);
let g = Number(localStorage.getItem('wef'));
function enterlogin(e,t) {
    if(e.key==="Enter") kq();
}
console.log(g);
function tu() {
    return Math.round(Math.random()*(10-1)+1);
}
function kq() {
    let kq = document.getElementById('doan')
    k = Number(kq.value);
    if(k >10 || k< 0)alert('mời nhập lại');
    console.log(k);
    console.log(tu())
    if (k === tu()) alert('Chúc Mừng bạn đã đoán đúng');
    if (k !== tu()) {
        g = g + 1;
        if (3 - g > 0) {
            alert(`Bạn còn ${3 - g} lượt (số đúng là${tu()})`)
            localStorage.setItem('wef', Number(g));
        }
        if (3 - g === 0) {
            g = 0;
            localStorage.setItem('wef', Number(g))
            alert(`chúc bạn may mắn lần sau (số đúng là ${tu()}) `);
    
        }
    }
    console.log(g);
}