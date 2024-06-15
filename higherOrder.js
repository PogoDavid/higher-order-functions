const myFilterFunction = (arr) => (myFilter) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (myFilter(arr[i]) == true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const wordsArray = ["apples", "banana", "orange", "strawberry", "grape", "kiwi", "watermelon", "pineapple", "blueberry", "peach"];
const outputArray = myFilterFunction(wordsArray)((value) => value.length === 6);
console.log(outputArray)