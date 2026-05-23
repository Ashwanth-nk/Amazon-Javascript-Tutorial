import {formatCurrency} from '../scripts/utils/money.js';


console.log('Test Suite : formatCurrency')
if (formatCurrency(2095) === '20.95'){
  console.log('Passed');
} else {
  console.log('Failed');
}

if (formatCurrency(0) === '20.95'){
  console.log('Passed');
} else {
  console.log('Failed');
}

if (formatCurrency(2000.4) === '20.95'){
  console.log('Passed');
} else {
  console.log('Failed');
}