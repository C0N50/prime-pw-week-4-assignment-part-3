// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log('***** Cart Functions *****');

let basket = [];
const maxItems = 5;

function isFull() {
    if (basket.length < maxItems) {
        return false;  //returns false because array has less than maxItems
    }
    else { 
        return true; //returns true  
    }
} //end isFull


function addItem (item) {
    if(arguments.length == 1) {
        if(typeof(item) == "string") {
          if(isFull()) {
            return false;
          } 
          else {
            basket.push(item);
            return true;
          } 
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
} //end addItem
   

function listItems() {
    if (basket.length > 0) {
        for (let item of basket) {
            console.log(item, '\n');
        }
    }
    else {
        return 0;
    }
} //end listItems


function empty() {
    while (basket.length > 0 && basket !== undefined) {
        basket.pop();
    }
} //end empty


function removeItem(item) {
    if(arguments.length == 1) {
        if(typeof(item) == "string") {
            if(basket.indexOf(item) >= 0) {
                let index = basket.indexOf(item);
                let outputArray = basket.splice(index, 1);
                if (outputArray.length > 0) {
                    return outputArray[0];
                }
                else {
                    return null;
                }
             }
             else {
                return null;
            }
        }
        else {
            console.log('Input Error, Expects String');
            return false;
        }
    }
    else {
        console.log('Input Error, Expects 1 Argument');
        return false;
        }
} //end removeItem


//add Item Test Cases.
 //Functionality Tests
console.log('***** addItem Functionality Tests *****');
console.log('test addItem(\'shirt\') - should return true', addItem('T-shirt'), '\n' +'array contains "', basket); 
console.log('test addItem(\'5 Guys Gift Card\') - should return true', addItem('5 Guys Gift Card'), '\n' +'array contains "', basket);
console.log('test addItem(\'AA Batteries\') - should return true', addItem('AA Batteries'), '\n' +'array contains "', basket);
console.log('test addItem(\'Roomba\') - should return true', addItem('Roomba'), '\n' +'array contains "', basket);
console.log('test addItem(\'Rush Hour 2\') - should return true', addItem('Rush Hour 2'), '\n' +'array contains "', basket);
console.log('test addItem(\'Shoelaces\') cart is full - should return false ', addItem('Shoelaces'), '\n' +'array contains "', basket);
console.log('\n'+'\n');

//Error Handling Tests
console.log('***** addItem Error Handling Tests *****');
console.log('test addItem(30) - should return error & false', addItem(30), '\n' +'array contains "', basket); 
console.log('test addItem() - should return error & false', addItem(), '\n' +'array contains "', basket);   
console.log('test addItem(shirt) - should return error & false', addItem('boots', 'milk'), '\n' +'array contains "', basket);
console.log('\n'+'\n');

//listItems Test Cases
console.log('***** listItems Functionality Test *****');
console.log('test listItems', listItems());
console.log('\n'+'\n');


//isFull Test Cases
console.log('***** isFulll Functionality Test Full Basket *****');
console.log('isFull should return true', isFull());
console.log('\n'+'\n');


//removeItem functionality tests
console.log('***** removeItem Functionality Test *****');
console.log('test removeItem - should return \'T-shirt\'', removeItem('T-shirt'));
console.log('Basket is,', basket);
console.log('test removeItem - should return \'Rush Hour 2\'', removeItem('Rush Hour 2'));
console.log('Basket is,', basket);
console.log('test removeItem - should return null', removeItem('Pokemon Yellow'));
console.log('Basket is,', basket);
console.log('\n'+'\n');


//remove Item error handling tests
console.log('***** removeItem error handling Tests *****');
console.log('test removeItem(30) - should return error & false', removeItem(30));
console.log('test removeItem() - should return error & false', removeItem());
console.log('test removeItem(shirt) - should return error & false', removeItem('boots', 'milk'));
console.log('Basket is,', basket);
console.log('\n'+'\n');


//isFull Test Cases
console.log('***** isFulll Functionality Test Partially Full Basket *****');
console.log('isFull should return false', isFull());
console.log('\n'+'\n');


//empty Test Cases
console.log('***** empty Functionality Test *****');
console.log('Basket is,', basket);
console.log('test empty on full array', empty());
console.log('Basket is,', basket);
console.log('test empty on empty array', empty());
console.log('Basket is,', basket);
console.log('\n'+'\n');


//isFull Test Cases
console.log('***** isFulll Functionality Test Empty Basket *****');
console.log('isFull should return false', isFull());

//listItems Test Cases
console.log('***** listItems Empty basket Test *****');
console.log('test listItems should return 0', listItems());
console.log('\n'+'\n');
