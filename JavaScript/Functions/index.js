function findSmallest(arr){
    var smallest = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
return smallest;
}
//////////////////////////////
function AlphabeticalOrder(str){
    return str.split('').sort().join('');
}
//////////////////////////////
function factorial (n){
    var result = 1;
    for(var i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));
//////////////////////////////
function oddOrEven(n){
    if(n % 2 == 0){
        return 'Even';
    }
    return 'Odd';
}
console.log(oddOrEven(5));
//////////////////////////////

function evenNum(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0){
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(evenNum([1, 2, 3, 4, 5, 6,7,8,9]));
//////////////////////////////
function removeString(arr){
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "string"){
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(removeString([1, 'a', 2, 'b', 3, 'c']));
//////////////////////////////
function addUp(n){
    var result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(addUp(5));
//////////////////////////////

function minMaxLengthAverage(array){
    var newArray = [];
    var min = array[0];
    var max = array[0];
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
        sum += array[i];
    }
    newArray.push(min);
    newArray.push(max);
    newArray.push(array.length);
    newArray.push(sum / array.length);
    return newArray;
}
//////////////////////////////
function romanNumbers(num){
    var roman = '';
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9 , 5, 4, 1];
    const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX' , 'V', 'IV', 'I'];
    for (let i = 0; i < romanValues.length; i++) {
        while(num >= romanValues[i]){
            roman += romanSymbols[i];
            num -= romanValues[i];
        }
    }

    
    return roman;
}
console.log(romanNumbers(1989));
//////////////////////////////
function countWords(str){
    
    return (str.split(" ").length);
}

console.log(countWords("hello from CodingAcademy!"));

//////////////////////////////
function MultiplyByLength(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr.length;
    }
    return arr
}
console.log(MultiplyByLength([4,2,5]));
//////////////////////////////

function checkEnding(str1, str2){
    if (str2[0] == str1[str1.length-2] && str2[1] == str1[str1.length-1])
        return true;
    return false
}

console.log(checkEnding("CodingSchool", "Ac"));
//////////////////////////////////////
function doubleChar(str){
    splitStr = str.split("");
    newStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        newStr += splitStr[i] + splitStr[i];
    }
    return newStr;
}

console.log(doubleChar('Coding'));
/////////////////////////////////////
function findIndex(arr,elm){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elm)
            return i;
    }
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));
/////////////////////////////////////
function getAbsSum(arr){
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    return sum;
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));