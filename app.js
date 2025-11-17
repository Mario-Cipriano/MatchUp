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

// Attiva la sezione partite di default
showSection('matches');
