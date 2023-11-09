const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
// const suggestParent = document.querySelector('.suggestions div');
const fruitylist = document.querySelector(".fruityList li");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  return fruit.filter((fruit) =>
    fruit.toLowerCase().includes(str.toLowerCase())
  );
}

function searchHandler(e) {
  if (input.value === "") {
    suggestions.replaceChildren();
  } else {
    let searchRes = search(input.value);
    showSuggestions(searchRes, input.value);
  }
}

function showSuggestions(results, valInput) {
  suggestions.replaceChildren();
  for (let fruit of results) {
    let li = document.createElement("li");
    li.setAttribute("class", "fruityList");
    li.innerHTML = fruit.replace(valInput, `<strong>${valInput}</strong>`);
    suggestions.append(li);
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.replaceChildren();
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
