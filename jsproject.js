
 
// functions after the content is loaded

  document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const phoneNumberInput = document.getElementById('phoneNumber');
  
    // add each number to the phone number input bar
    numbers.forEach(number => {
      number.addEventListener('click', () => {
        const selectedNumber = number.getAttribute('data-number');
        phoneNumberInput.value += selectedNumber;


        if(phoneNumberInput.value.length === 10)
        {
        const submitPhoneNumber = confirm(`Is this your phone number: ${phoneNumberInput.value}?`);

        if(submitPhoneNumber)
        {
            alert(`Submitted phone number: ${phoneNumberInput.value}`);
            phoneNumberInput.value = '';
        }
        else{
            phoneNumberInput.value = '';
            }
        }
      });
    });
  });
  