function allLongestStrings(inputArray) {
    let longest_string = [];
    let highest_value = 0;
    for(let i=0;i<inputArray.length;i++){
        if(inputArray[i].length>=highest_value){
            highest_value=inputArray[i].length;
        }
    }
    for(let i=0;i<inputArray.length;i++){
        if(inputArray[i].length==highest_value){
            longest_string.push(inputArray[i]);
        }
    }
    console.log(longest_string);
}

allLongestStrings(["binh","hung","phuoc","cao","khanh"]);