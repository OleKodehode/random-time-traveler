/* 

random time traveler card:

image from a selection of +20
random date of birth. Between 2100 and 3100 year.
Where they are currently - Past or Future. 1000 BC  / 2090 AD 
or at least ~70 years in the future from their date of birth until 5000 AD.
Known for (could be profession). +50 things? 
Short time travel quote? +20 quotes? 

No presistency - New selection on every refresh
*/

// Import the quotes from the other file
import { pastQuotes, futureQuotes } from "./quotes.js";
// need FS and path for getting the images from assets

const portraits = ["./assets/face1.jpg", "./assets/face2.jpg"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const names = [
  "Kaelin",
  "Aria",
  "Juno",
  "Tarek",
  "Lyra",
  "Zane",
  "Nova",
  "Orin",
  "Selene",
  "Dax",
  "Mira",
  "Kairo",
  "Elara",
  "Riven",
  "Sora",
  "Niko",
  "Thalia",
  "Jarek",
  "Isolde",
  "Bryn",
  "Cassian",
  "Vera",
  "Lucan",
  "Nyra",
  "Elias",
  "Zira",
  "Malik",
  "Astrid",
  "Ronan",
  "Liora",
  "Talon",
  "Freya",
  "Silas",
  "Nia",
  "Ezren",
  "Kira",
  "Jalen",
  "Seren",
  "Axel",
  "Tess",
];

let cards = 0;
const cardLimit = 2;

window.addEventListener("load", () => {
  while (cards < cardLimit) {
    const year = Math.floor(Math.random() * (3100 - 2100 + 1)) + 2100;
    const month = Math.floor(Math.random() * months.length);
    const randomImgIndex = Math.floor(Math.random * portraits.length);
    const chosenImg = portraits.splice(randomImgIndex, 1);
    const future = Math.random() > 0.5;
    const currentYear = future
      ? Math.floor(Math.random() * (5000 - (year + 70) + (year + 70)))
      : Math.floor(Math.random() * (2090 + 1000 + 1) - 1000);
    const quoteIndex = future
      ? Math.floor(Math.random() * futureQuotes.length)
      : Math.floor(Math.random() * pastQuotes.length);
    const chosenQuote = future
      ? futureQuotes.splice(quoteIndex, 1)
      : pastQuotes.splice(quoteIndex, 1);
    const nameIndex = Math.floor(Math.random() * names.length);
    const name = names[nameIndex];

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("time-traveler-card");

    const imgElement = document.createElement("img");
    imgElement.classList.add("card-img");
    imgElement.src = chosenImg;
    imgElement.setAttribute("width", "200px");
    imgElement.style.borderRadius = "50%";

    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = name;

    const dobElement = document.createElement("p");
    dobElement.classList.add("dob");
    dobElement.textContent = `${months[month]} - ${year}`;

    const staticQuoteText = document.createElement("p");
    staticQuoteText.classList.add("quote-title");
    staticQuoteText.textContent = `What does ${name} have to say about the ${
      future ? "Future?" : "Past?"
    }`;

    const quoteElement = document.createElement("p");
    quoteElement.classList.add("quote");
    quoteElement.textContent = `"${chosenQuote}"`;

    const currentYearElement = document.createElement("p");
    currentYearElement.classList.add("current-year");
    currentYearElement.textContent = `${name} is currently in the ${
      future ? "future" : "past"
    } - In the year ${
      currentYear < 0 ? Math.abs(currentYear) + " BC" : currentYear + " AD"
    }`;

    cardContainer.append(
      imgElement,
      nameElement,
      dobElement,
      currentYearElement,
      staticQuoteText,
      quoteElement
    );

    document.body.append(cardContainer);
    cards++;
  }
});
