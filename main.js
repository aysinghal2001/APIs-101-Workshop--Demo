fetch('https://conferenceapi.azurewebsites.net/speakers')
  .then(data => data.json())
  .then(xyz => {
    const speakername = xyz.collection.items[0].data[0].value;
    const speakerbio = xyz.collection.items[0].href;
    const cardName = document.getElementById('heading');
    const cardText = document.getElementById('body-text');
    cardName.innerHTML = speakername;
    fetch(speakerbio)
      .then(data => data.text())
      .then(bio => {
        cardText.innerHTML = bio;
      });


    for (let i = 0; i < xyz.collection.items.length; i++) {
      const card = document.createElement('div');
      card.className = 'card px-3 py-5 mx-5 my-5';
      const cardName = document.createElement('h2');
      const cardText = document.createElement('p');
      const speakername = xyz.collection.items[i].data[0].value;
      const speakerbio = xyz.collection.items[i].href;
      cardName.innerHTML = speakername;
      fetch(speakerbio)
        .then(data => data.text())
        .then(bio => {
          cardText.innerHTML = bio;
        });
      document.getElementById('card-container').appendChild(card);
      card.appendChild(cardName);
      card.appendChild(cardText);
    }
  });
