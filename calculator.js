let lifeExpectancy = 100; //100 years
let r = 0.06 //annual rate of return, assume 6%
let n = 12; //# of payment periods per year (12 months)
function calMonthSave (annualIncome, currentAge, expectedRetireAge) {
  let A = 0;//total retirement saving balance 
  let T = expectedRetireAge - currentAge; 
  let P = 0; //monthly payment they need to save

	//Pre-retirement annual income =  Current income (1+ 0.03)^T 
  let preRetireIncome = annualIncome * Math.pow(1+0.03, T);

  //A = Total balance needed for retirement  =
  // .85(Pre-retirement income) * (100 - Retirement Age) 
  A = 0.85 * preRetireIncome * (lifeExpectancy - expectedRetireAge); 

  let diviend = A*(r/n);
  let divider = Math.pow((1+r/n), n*T) - 1;

  P = diviend/divider;

  return P.toFixed(2);
}

function numGreaterThanZero (input) {
  if(!isNaN(input)) {
    if(input > 0) {
      return true;
    }
  }
  return false;
}

function isNum (input) {
  if(!isNaN(input)) {
    return true;
  }
  return false;
}

function inputValidation (currentAge, retireAge, annualIncome) {
  if (numGreaterThanZero(currentAge) && numGreaterThanZero(retireAge)
    && isNum(annualIncome)) {
      return true;
    }
    return false;
}

$(() => {
  console.log('load')
  $('#submit').on('click', () => {
    $('#report').text('');
    const currentAge = $('#currentAge').val();
    const retireAge = $('#retireAge').val();
    const annualIncome = $('#annualIncome').val();
    //input validation first
    if(inputValidation(currentAge, retireAge, annualIncome)) {
      let monthAmt = calMonthSave(annualIncome, currentAge, retireAge);
      $('#report').text('You need to save $' + monthAmt + ' a month.');
    }
    else {
      $('#report').text('Invalid input.');
    }
  });
});
