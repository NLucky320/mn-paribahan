/* set innerText on elementId with value */
function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// get inputValue from id
function getInputValueById(elementId) {
  const inputField = document.getElementById(elementId);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// get sum with id
function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setElementValueById(id, sum);
}
