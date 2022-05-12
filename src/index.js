import './style.css';
import { getScores, postScores } from './scorecard.js';

document.getElementById('sub-btn').addEventListener('click', (e) => {
  e.preventDefault();
  postScores();
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

document.getElementById('refresh-btn').addEventListener('click', () => window.location.reload());

window.addEventListener('load', () => getScores());
