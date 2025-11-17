// app.js

function showSection(sectionId) {
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  document.querySelectorAll('nav ul li').forEach(li => li.classList.remove('active'));
  document.querySelector(`#menu li[onclick*='${sectionId}']`).classList.add('active');
}

function joinMatch(matchName) {
  alert(`Ti sei unito a ${matchName}! 🎉`);
}

function createMatch() {
  const name = document.getElementById('newMatchName').value;
  const time = document.getElementById('newMatchTime').value;
  const field = document.getElementById('newMatchField').value;
  if(name && time && field) {
    const container = document.getElementById('matchesContainer');
    const div = document.createElement('div');
    div.classList.add('match');
    div.textContent = `⚽ ${name} - Ore ${time} - ${field}`;
    div.onclick = () => joinMatch(name);
    container.appendChild(div);
    alert(`Partita ${name} creata con successo! 🎉`);

    // Pulisci i campi
    document.getElementById('newMatchName').value = '';
    document.getElementById('newMatchTime').value = '';
    document.getElementById('newMatchField').value = '';
  } else {
    alert('Compila tutti i campi!');
  }
}

function changeTheme(theme) {
  switch(theme) {
    case 'blue':
      document.body.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
      break;
    case 'purple':
      document.body.style.background = 'linear-gradient(135deg, #8e44ad, #9b59b6)';
      break;
    case 'green':
      document.body.style.background = 'linear-gradient(135deg, #1abc9c, #16a085)';
      break;
  }
}

function saveSettings() {
  const theme = document.getElementById('themeSelect').value;
  changeTheme(theme);
  alert('Impostazioni salvate!');
}

// Sezione predefinita
showSection('matches');
;

