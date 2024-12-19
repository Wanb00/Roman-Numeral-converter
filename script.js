const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRoman = input => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const output = [];

  ref.forEach(function (arr) {
    while (input >= arr[1]) {
      output.push(arr[0]);
      input -= arr[1];
    }
  });
  return output.join('');
}

const validCheck = (str, int) => {
  let errorText = '';

  if (!str || str.match(/[e.]/g)) {
    errorText = 'Please enter a valid number';
  } else if (int < 1) {
    errorText = 'Please enter a number greater than or equal to 1';
  } else if (int > 3999) {
    errorText = 'Please enter a number less than or equal to 3999';
  } else {
    return true;
  }
  result.innerText = errorText;
  result.classList.add('alert');
  return false;
};

const clearResult = () => {
  result.innerText = '';
  result.classList.remove("alert");
};

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUI();
});

convertBtn.addEventListener('click', () => {
  updateUI();
});

const updateUI = () => {
  const strToNum = document.getElementById("number").value;
  const int = parseInt(strToNum, 10);
  result.classList.remove("hidden");

  clearResult();

  if (validCheck(strToNum, int)) {
    result.innerText = convertToRoman(int);
  }
};
