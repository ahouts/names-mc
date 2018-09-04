function insertName(name) {
  const list = document.getElementById("name-list");
  const newItem = document.createElement("li");
  newItem.innerText = name;
  list.appendChild(newItem);
}

function clearNames() {
    const list = document.getElementById("name-list");
    Array.prototype.slice.call(list.children).forEach(function (child) {
      list.removeChild(child);
    });
}

const ADJ_LIST = [
    "Skinny",
    "Fat",
    "Uncouth",
    "Hypersensitive",
    "Tender",
    "Bionic",
    "Cowardly",
    "Decapitated",
    "Amputated",
    "Slender",
    "Obese",
    "Secondary",
    "Lame",
    "Independent",
    "Horrific",
    "Crappy",
    "Derpy",
    "Sappy",
    "1337",
    "Sociable",
    "Sociopathic",
    "Ionized",
    "Ionic",
    "Iconic",
    "Psychedelic",
    "Therapeutic",
    "Frozen",
    "Stupid",
    "Generous",
    "Baked",
    "Tentative",
    "Muscular",
    "Electric",
    "Electronic",
    "Diabetic",
    "Patriotic",
    "Senile",
    "Sonic",
    "Malleable",
    "Massachusetts",
    "Isometric",
    "Bloody",
    "Cute",
    "Cryptic",
    "Mysterious",
    "Egotistical",
    "Terrific",
    "Unwise",
    "Spanish",
    "Unfortunate",
    "Zesty",
    "Forgettable",
    "Stupendous",
    "Magical",
    "Buxom",
    "Plagiarised",
    "Troublesome"
];

const NOUN_LIST = [
    "Palpitations",
    "Panther",
    "Raccoon",
    "Bitcoin",
    "iPhone 3GS",
    "Lion",
    "Birkenstock",
    "Tiger",
    "AC Unit",
    "Lamp",
    "Screwdriver",
    "Tesla",
    "Fire Alarm",
    "Mustache",
    "Lemming",
    "N00B",
    "Pizza",
    "Zit",
    "Zipper",
    "Power Ranger",
    "Tablespoon",
    "Chicken",
    "Pig",
    "Bunsen Burner",
    "Cow",
    "Massachusetts",
    "Soviet Union",
    "Caper",
    "Iguana",
    "Salmonella",
    "Cucumber",
    "Artery",
    "Rubik's Cube",
    "Sweatshirt",
    "Temptations",
    "Backpack",
    "Insomniac",
    "Exercise",
    "Wanker",
    "Barnacle",
    "Boy",
    "Girl",
    "Man",
    "Woman",
    "Dude",
    "Dudette",
    "Mushroom",
    "Duolingo",
    "Captain"
];

function generateName() {
  return `${ADJ_LIST[Math.floor(Math.random() * ADJ_LIST.length)]} ${NOUN_LIST[Math.floor(Math.random() * NOUN_LIST.length)]}`
}

function addName() {
    insertName(generateName());
}
