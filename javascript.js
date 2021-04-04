// Create a class here
// =====================================
class Episode {
    constructor(title, duration, hasBeenWatched){
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched= hasBeenWatched;
    }
}

let firstEpisode = new Episode("Le debut de la fin",45,true);
let secondEpisode = new Episode("Le debut de du début",45,true);
let thirdEpisode = new Episode("la fin de la fin",45,true);


let episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
episodes.pop();
// ====================================

let numberOfEpisodes = episodes.length;

const body = document.querySelector('body');

document.querySelector('#episodes').innerText = numberOfEpisodes;

for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}


// let episode = {
// title: "GameOfTrones",
// duration: 45,
// hasBeenWatched: true
// };


// let episodeTitle = episode.title;
// let episodeDuration = episode.duration;
// let episodehasBeenWatched = episode.hasBeenWatched;


// document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
// Duration: ${episodeDuration} min
// ${episodehasBeenWatched ? 'Already watched' : 'Not yet watched'}`

// let numberOfSeasons = 6;
// let numberOfEpisodes = 12;

// let episodeTime = 45;
// let commercialTime = 5;
// let totalShowTime = episodeTime + commercialTime;

// let paragraph = document.querySelector('#info');
// paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season
// Total viewing time: ${totalShowTime} minutes`


// const hoursPerDay = 24;
// const minutesPerHour = 60;
// const secondsPerMinute = 60;


// const dayInput = document.querySelector('#day-input');
// const calculateButton = document.querySelector('#calculate-button');
// const hours = document.querySelector('#hours');
// const minutes = document.querySelector('#minutes');
// const seconds = document.querySelector('#seconds');

// calculateButton.addEventListener('click', () => {
//   let days = dayInput.value;
//   let calcHours = days * hoursPerDay;
//   let calcMinutes = calcHours * minutesPerHour;
//   let calcSeconds = calcMinutes * secondsPerMinute;
  
//   hours.innerText = `${calcHours} hours`;
//   minutes.innerText = `${calcMinutes} minutes`;
//   seconds.innerText = `${calcSeconds} seconds`;
// });