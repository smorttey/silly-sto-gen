var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}
randomize.addEventListener('click', result);

function result() {
	var newStory = storyText;
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

	newStory = newStory.replace(":insertx:", xItem);
	newStory = newStory.replace(":inserty:", yItem);
	newStory = newStory.replace(":insertz:", zItem);
	newStory = newStory.replace(":insertx:", xItem);
	// :insertx: is twice because it appears in the string twice

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
    // Check inside of newStory and replace it with name which is set to customName.value

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(pouToSto(300))+" stone";
    var temperature =  Math.round(fahToCenti(94))+" centrigade";
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
function fahToCenti(temperature){
	return ((temperature-32)*(5/9));
}
function pouToSto(weight){
	return (weight*0.071428571428571);
}