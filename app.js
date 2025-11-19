// Replace with your Firebase config
document.getElementById("preview-teams").innerHTML = `
<div class='team'><h4>Team A</h4>${teams.A.map(p=>p.name).join("<br>")}</div>
<div class='team'><h4>Team B</h4>${teams.B.map(p=>p.name).join("<br>")}</div>`;
}


// --- Matches ---
document.getElementById("btn-create-match").onclick = async () => {
const title = document.getElementById("match-title").value;
const selected = [...document.querySelectorAll("#pick-players input:checked")]
.map(i => i.dataset.id);


const docs = await Promise.all(selected.map(id => db.collection("players").doc(id).get()));
const players = docs.map(d => ({ id: d.id, ...d.data() }));
const teams = balanceTeams(players);


await db.collection("matches").add({
title,
owner: auth.currentUser.uid,
teams,
status: "open",
createdAt: Date.now()
});


loadMatches();
};


async function loadMatches() {
const u = auth.currentUser;
const snap = await db.collection("matches")
.where("owner", "==", u.uid)
.orderBy("createdAt", "desc")
.get();


const box = document.getElementById("matches-list");
box.innerHTML = "";


snap.forEach(doc => {
const m = doc.data();
box.innerHTML += `<div class='card'>
<h4>${m.title}</h4>
<b>A:</b><br>${m.teams.A.map(p=>p.name).join('<br>')}<br><br>
<b>B:</b><br>${m.teams.B.map(p=>p.name).join('<br>')}
</div>`;
});
}

