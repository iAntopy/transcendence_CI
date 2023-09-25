import * as test_funcs from "./string_output_funcs" 

interface Answers {
    asw_test1: String;
    asw_test2: String;
}
let expected_answers: Answers = {
    asw_test1: 'Hello World',
    asw_test2: 'Goodbye World'
};

function test_correct_output1()
{
    let str: String = test_funcs.output_string1();

    if (str !== expected_answers.asw_test1) {
        console.log("wata mess");
        throw new TypeError("Test 1 ERROR :: output should have been \"" + expected_answers.asw_test1 + "\" but instead is \"" + str + "\".");
    }
}

function test_correct_output2()
{
    let str: String = test_funcs.output_string2();

    if (str !== expected_answers.asw_test2) {
        throw new TypeError("Test 2 ERROR :: output should have been \"" + expected_answers.asw_test2 + "\" but instead is \"" + str + "\".");
    }
}

function unittest_output_strings()
{
    test_correct_output1();
    test_correct_output2();
    console.log("All tests passed SUCCESSFULLY !");
}

unittest_output_strings();