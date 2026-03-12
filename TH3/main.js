let score=7.5;
if(score>=8){
    console.log("Giỏi");
} else if(score>=6.5){
    console.log("Khá.");
}else if(score>=5){
    console.log("Trung bình.");
}else{ console.log("Yếu.");
}
function diemtbinh(m1,m2,m3){
    let dtb=(m1+m2+m3)/3;
    return dtb;
}