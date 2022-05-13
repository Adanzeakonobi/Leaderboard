import addScoresToList from './scoresadd.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rOkCCFyBAGoY4dj1LB3S/scores/';

const sendScores = async () => {
  const newScore = {
    user: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };

  (await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newScore),
  })).json();
};

const displaySores = (scores) => {
  scores.forEach((score) => addScoresToList(score));
};

const getScores = async () => {
  const request = await fetch(baseUrl);
  const scores = await request.json();
  const scoreList = scores.result;
  displaySores(scoreList);
};

export { getScores, sendScores };
