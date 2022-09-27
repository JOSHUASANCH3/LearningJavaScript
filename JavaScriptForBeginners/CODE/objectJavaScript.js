/*
Objects in JavaScript
*/
const book = {
    title: "1984", 
    autor: "Gorge Orwell", 
    isAviable:flase, 
    chechIn:function(){
        this.isAviable=true;
    },
    chechOut function(){
        this.isAviable=false;
    }
};
console.log(typeof book);