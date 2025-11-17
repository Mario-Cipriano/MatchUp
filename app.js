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

    document.getElementById('newMatchName').value = '';
    document.getElementById('newMatchTime').value = '';
    document.getElementById('newMatchField').value = '';
  } else {
    alert('Compila tutti i campi!');
  }
}

function changeTheme(theme) {
  // Reset styles
  document.body.style.transition = 'background 0.5s, color 0.5s';
  switch(theme) {
    case 'white':
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#121212';
      break;
    case 'gray':
      document.body.style.backgroundColor = '#7f8c8d';
      document.body.style.color = '#fff';
      break;
    case 'black':
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#fff';
      break;
    case 'purple':
      document.body.style.backgroundColor = '#8e44ad';
      document.body.style.color = '#fff';
      break;
    default:
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#fff';
      break;
  }
}

function saveSettings() {
  const theme = document.getElementById('themeSelect').value;
  changeTheme(theme);
  alert('Impostazioni salvate!');
}

// Imposta sezione predefinita e tema iniziale
showSection('matches');
changeTheme('black');

