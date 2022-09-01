const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "./data.json");

const updateContacts = async (newData) => {
  const string = JSON.stringify(newData);

  await fs.writeFile(contactsPath, string);

  console.log("все гуд");
};

const brand = ["ASUS", "Acer", "LG", "HP", "MSI", "Apple", "DELL"];
const diagonal = ["16", "17", "23", "24", "27", "32"];
const refresh_rate = ["60", "100", "120", "144"];
const screen_extension = [
  "1920x1080",
  "1920x1200",
  "2560x1080",
  "2560x1440",
  "3840x2160",
];
const matrix_type = ["IPS", "VA", "TN", "TFT"];
const relation_parties = ["16:10", "16:9", "21:9", "24:10"];
const built_speaker = [true, false];
const coating = ["Глянець", "Матове"];
const photo = [
  "https://content1.rozetka.com.ua/goods/images/big/109737372.jpg",
  "https://content1.rozetka.com.ua/goods/images/big/272567547.jpg",
  "https://content.rozetka.com.ua/goods/images/big/106655616.jpg",
  "https://content1.rozetka.com.ua/goods/images/big/246665704.jpg",
  "https://content.rozetka.com.ua/goods/images/big/13988642.jpg",
  "https://content.rozetka.com.ua/goods/images/big/247114416.jpg",
  "https://content1.rozetka.com.ua/goods/images/big/179644651.jpg",
  "https://content1.rozetka.com.ua/goods/images/big/163288063.jpg",
  "https://content2.rozetka.com.ua/goods/images/big/281679857.png",
  "https://content2.rozetka.com.ua/goods/images/big/273424763.jpg",
];

const random = (max) => Math.round(Math.random() * (max - 1) + 1) - 1;
const prise = () => Math.round(Math.random() * (20000 - 1) + 6000) - 1;

const data = [];

for (let i = 0; i < 100; i++) {
  const product = {
    id: uuidv4(),
    brand: brand[random(brand.length)],
    photo: photo[random(photo.length)],
    prise: prise(),
    diagonal: diagonal[random(diagonal.length)],
    refresh_rate: refresh_rate[random(refresh_rate.length)],
    screen_extension: screen_extension[random(brand.length)],
    matrix_type: matrix_type[random(matrix_type.length)],
    relation_parties: relation_parties[random(relation_parties.length)],
    built_speaker: built_speaker[random(built_speaker.length)],
    coating: coating[random(brand.length)],
  };

  data.push(product);
}

updateContacts(data);
