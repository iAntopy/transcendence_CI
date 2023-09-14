import * as test_funcs from "./string_output_funcs" 

interface Answers {
    asw_test1: String;
    asw_test2: String;
}
let answers: Answers = {
    asw_test1: 'Hello World',
    asw_test2: 'Goodbye World'
};

function test_correct_output1()
{
    let str: String = test_funcs.output_string1();

    if (str !== answers.asw_test1) {
        console.log("wata mess");
        throw new TypeError("Test 1 ERROR :: output should have been \"" + answers.asw_test1 + "\" but instead is \"" + str + "\".");
    }
}

function test_correct_output2()
{
    let str: String = test_funcs.output_string2();

    if (str !== answers.asw_test2) {
        throw new TypeError("Test 2 ERROR :: output should have been \"" + answers.asw_test2 + "\" but instead is \"" + str + "\".");
    }
}

function unittest_output_strings()
{
    let error: Boolean = false;

    try {test_correct_output1();}
    catch (e) {console.log("Test 1 FAIL : " + e); error = true;}

    try {test_correct_output2();}
    catch (e) {console.log("Test 2 FAIL : ", e); error = true;}

    if (!error) {
        console.log("All tests passed SUCCESSFULLY !");}
}

unittest_output_strings();