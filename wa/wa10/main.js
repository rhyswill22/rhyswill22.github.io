// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

// const storyText = "It was 94 fahrenheit outside, so :insertx: went swimming. When they got to :inserty:, they entered the nearest body of water, then :insertz:. Bob saw this event and laughed incredibly loud, as — :insertx: weighs 300 pounds."
const storyText = "One day, :insertx: was walking down the street, minding their own business. They had big plans to become the president of :inserty:. Suddenly, Bob appeared and started eating :insertx:. Why was Bob doing this? I have no idea. Since it was 94 fahrenheit and :insertx: is made of snow, and a snowman, he :insertz:. I guess :insertx: will never become the president of :insertY:. Thanks a lot, Bob."

const insertX = ["Willy the Goblin", 
"Big Daddy",
"Father Christmas"]

const insertY = ["the soup kitchen",
"Disneyland",
"the White House"]

const insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(':insertx:', xItem);
newStory = newStory.replaceAll(':inserty:', yItem);
newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';



}