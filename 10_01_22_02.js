x = Number(prompt("Nhập 1 số nguyên dương bạn muốn tính giai thừa"));
let z = 1;
let n;

if (x<0){
    alert("Đây không phải số nguyên dương");
}else {
    for (n=1;n<=x;n++){
        z = z*n;
    }alert(z);
}