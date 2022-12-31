// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log('***** Cart Functions *****');

let basket = [];

function addItem (item) {
    if(arguments.length == 1) {
        if(typeof(item) == "string") {
        basket.push(item);
        return true;
        } //end check if input is string
        else {
        console.log('Input Error, Expects String');
        return false;
        }
    }
    else {
    console.log('Input Error, Expects 1 Argument');
    return false;
    }
}
    

//add Item Test Cases.
 //Functionality Tests
console.log('test addItem(shirt) - should return true', addItem('shirt'), '\n' +'array contains "', basket); 
console.log('test addItem(\'100\') - should return true', addItem('100'), '\n' +'array contains "', basket); 

//Error Handling Tests
console.log('test addItem(30) - should return error', addItem(30), '\n' +'array contains "', basket); 
console.log('test addItem() - should return error', addItem(), '\n' +'array contains "', basket);   
console.log('test addItem(shirt) - should return error', addItem('boots', 'milk'), '\n' +'array contains "', basket);

