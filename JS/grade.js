function getAvg(kor, eng, math){
    return Number((kor + eng + math) / 3.0);
}

var getGrade = function(avg){

    if(avg >= 90){
    return "수";
} else if(avg >= 80){
    return "우";
}else if(avg >= 70){
    return "미";
}else if(avg >= 60){
    return "양";
}else {
    return "가";
}
}