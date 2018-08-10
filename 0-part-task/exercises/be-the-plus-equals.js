// experimental conditions
//     str += num 
//     num += str 
//     num += num
//     str += str

// pass all tests without using "+=" in your blocks

{ // str_1 += "1";
    let str_1 = "1";
    let str_str;
    { 

    };
    let actual = "1";
    actual += "1";
    console.assert(str_str === actual, "fail: str_str");
};

{ // str_1 += 1;
    str_1 = "1";
    let str_num;
    {

    };
    actual = "1";
    actual += 1;
    console.assert(str_num === actual, "fail: str_num");
};

{ // str_1 += "1";
    let num_1 = 1;
    let num_str;
    {

    };
    actual = 1;
    actual += "1;"
    console.assert(num_str === actual, "fail: num_str");
};

{ // str_1 += 1;
    num_1 = 1;
    let num_num;
    {

    };
    actual = 1;
    actual += 1;
    console.assert(num_num === actual, "fail: num_num");
};