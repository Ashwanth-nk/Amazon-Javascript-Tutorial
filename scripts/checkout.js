import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

/*
//Async Await
async function loadPage(){

  try {
    throw 'error';
    //Code that could result in error
  } catch (error) {
    //Code to deal if error is catched
  }

  console.log('load page');
  await anotherFunc();
  return value;
}
loadPage().then(() =>{
  console.log('next step')
})
*/

/*
//shouldComplete function runs first and after it completely finished others are executed
new Promise((resolve) => {
  console.log('firstStep')
  shouldComplete(() => {
    console.log('secondStep')
    resolve();
  });
}).then(() => {
  console.log('thirdStep');
});

function shouldComplete(callback){
  console.log('completed')
  callback();
}

console.log('step')

*/

renderOrderSummary();
renderPaymentSummary();