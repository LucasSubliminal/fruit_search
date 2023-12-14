console.log('its working');
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  str = str.toLowerCase(); 

  let results = fruit.filter(fruit => {
    return fruit.toLowerCase().includes(str);
  });

  return results;
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';
  if (inputVal.value.trim/*Trim basically cuts out whitespace from both the beginning and end of a string*/() === '') {
	suggestions.style.display = 'none';
	return;
 } else{
	suggestions.style.display = 'block';
	}
  for (const result of results) {
    const li = document.createElement('li');
    li.innerText = result;
    li.addEventListener('click', function () {
      inputVal.value = result;
      suggestions.innerHTML = '';
    });
    suggestions.appendChild(li);
  }
}


input.addEventListener('input', function () {
  const inputValue = input.value;
  const results = search(inputValue);
  showSuggestions(results, input);
});

