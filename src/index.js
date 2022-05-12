import './style.css';
import addScoresToList from './scoresadd.js';
import scores from './scorecard.js';

scores.forEach((score) => addScoresToList(score));