const testObj = {
    a:-11,
    b:24,
    c:0,

    maxOfTwo:  function (p1,p2){
        if(p2 > p1){
            return(p2)
        } else {
            return(p1);
            }
    },

    maxOfThree:  function (p1,p2,p3){
        return(this.maxOfTwo((this.maxOfTwo(p1,p2)),p3))
    }
}

console.log(testObj.maxOfThree(testObj.a,testObj.b,testObj.c));



