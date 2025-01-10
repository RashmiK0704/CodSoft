// Function to append value to the display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to delete the last character
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // Function to calculate the result
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
      display.value = 'Error';
    }
  }