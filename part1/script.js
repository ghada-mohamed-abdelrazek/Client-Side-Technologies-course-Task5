// 1- Define an array of numbers as numbers=[3,1,2,4,3,5,1];
        var numbers = [3,1,2,4,3,5,1];
        console.log( "Array: ", numbers)
        // Write a JavaScript code to remove duplicate items from an array.
        var uniqueNum = numbers.filter(function (item1 ,item2){
            return numbers.indexOf(item1) == item2;
        })
                console.log( "Array without duplicate: ", uniqueNum)
        // Sort them ascending
        var sortedNum = uniqueNum.sort(function(item1 ,item2){
            return item1 - item2 ;
        });
                console.log( "Sorted Array: ", sortedNum)
        //Filter numbers larger than 50
        //a- User defined function
        var filterNum1 = [];
        uniqueNum.forEach(function(item){
            if (item > 40) {
                filterNum1.push(item);
            }
        })
                console.log( "Array filter1: ", filterNum1)
        //b- Array built in filter function
        var filterNum2 = uniqueNum.filter(function(item){
            return item > 50;
        })
        console.log( "Array filter2: ", filterNum2)

        // Display Max and Min Numbers
        // a- User defined function 3 diff ways
        // 1- from sorted array
        console.log("min value:" , sortedNum[0])
        console.log("max value:" , sortedNum[4])
        // 2- for loop
        function getMax2(arr) {
            var max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) max = arr[i];
            }
            return max 
        }
        console.log("max value",getMax2(uniqueNum))

        function getMin2(arr) {
            var min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) min = arr[i];
            }
            return min 
        }
        console.log("min value",getMin2(uniqueNum))
        //3- reduce
        var max = uniqueNum.reduce(function(acc, curr){
            return curr > acc ? curr : acc;
        })
        console.log("max value: ",max)
        var min =uniqueNum.reduce(function(acc,curr){
            return curr < acc ? curr : acc;
        })
        console.log("min value: ",min)

        // b- Math functions using es6 feature (BONUS)
        // function getmax(array){
        //     return Math.max(...array)
        // } 
        // console.log("max value:" , getmax(uniqueNum))
        // function getmax(array){
        //     return Math.mix(...array)
        // } 
        // console.log("mix value:" , getmax(uniqueNum))
// Write a JavaScript function to Compute the sum and product of an array of 
// integers (Use eval) 
// a- Function header as  function sumAll(numbersArray)
// Note: using eval , function input is an array and function call will be as 
// follow sumAll([3,1,4,5,2]);
function sumAll(){
    return eval([3,1,4,5,2].join("+"));
}
console.log(sumAll())
function productAll(){
    return eval([3,1,4,5,2].join("*"))
}
console.log(productAll())
// b- Function header as  function sumAll()
// Note: using eval and arguments array-like object
        function sumAll1() {
            var nums = Array.from(arguments)
            return eval(nums.join("+"))
        }
        console.log(sumAll1(1,2,3,4,5))

        function productAll1() {
            var nums = Array.from(arguments)
            return eval(nums.join("*"))
        }
        console.log(productAll1(1,2,3,4,5))

    // Write JavaScript function that returns random array of numbers between 1:10  Array length is 8 and no repeated random data appears on array
        function getRandomUniqueArray() {
        var numbers = Array.from({length:10}, function(_,i){return i+1});
        for (var i = numbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        return numbers.slice(0, 8);
        }

        console.log(getRandomUniqueArray());