const addScoresToList = (score) => {
  const list = document.querySelector('.score-details');

  const listItem = document.createElement('li');

  listItem.innerHTML = `
          <div class="leadermain list-item">
          <p>${score.user}:</p>
          <p>${score.score}</p>
          </div>
          `;

  list.appendChild(listItem);
};

export default addScoresToList;