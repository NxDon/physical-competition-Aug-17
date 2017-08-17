/*
为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
要求：不要使用for，while循环
*/
function getArrPowered(arr) {
    return arr.concat().map((elem) => Math.pow(elem, 2))
}


//  拓展 getArrPoweredCurring柯里化了getArrPowered，接收一个次方，返回函数可以求数组每个元素的power次方
/*
function getArrPoweredCurrying(power) {
    return (arr) => {
        return arr.concat().map((elem) => Math.pow(elem, power))
    }
}
var p2 = getArrPoweredCurrying(3);
arr = [1,2,3,4];
p2(arr);

 */