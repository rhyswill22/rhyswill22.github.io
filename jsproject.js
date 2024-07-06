
 
// functions after the content is loaded

  document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const phoneNumberInput = document.getElementById('phoneNumber');
    let currentPN = '';

    const phoneNumberFormat = (value) => {
        let formattedValue = '';
        if (formattedValue.length > 3)
          {
            formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3)}`;
          }

          if (formattedValue.length > 6) 
          {
            formattedValue = `${formattedValue.slice(0, 9)}-${formattedValue.slice(9)}`;
          }

        return formattedValue;

        };
    // add each number to the phone number input bar
    numbers.forEach(number => {
      number.addEventListener('click', () => {
        const selectedNumber = number.getAttribute('data-number');
        if (currentPN.length < 10)
        {
        currentPN += selectedNumber;
        phoneNumberInput.value += phoneNumberFormat(currentPN);
        }

        if(phoneNumberInput.value.length === 10)
        {
        const submitPhoneNumber = confirm(`Is this your phone number: ${phoneNumberInput.value}?`);
        
        if(submitPhoneNumber){
            alert(`Submitted phone number: ${phoneNumberInput.value}`);
            phoneNumberInput.value = '';
            currentPN = '';
        }
        else{
            phoneNumberInput.value = '';
            currentPN = '';
            }
        }
      });
    });
  });
  