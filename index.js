let son =  +prompt(" Son kiriting")
for (let i = 1; i <son; i++) {
    console.log(i);
    if (i<=1) {
        console.log("Qo'y");
     }   
     else {
        console.log("Qo'ylar");
     }
}
let num = 8
let box = ""
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (i % 1 == 2 && j % 1 == 2 || i % 2==1 && j % 2==1) {
            box = box + "[%]"
        } else {
            box = box + "   [%]"
        }
    }   
    console.log(box); 
    box = ""
}