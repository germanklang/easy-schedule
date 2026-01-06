const times = ["10:00","11:00","14:00","15:00"];

const dateSel = document.getElementById("date");
const timeSel = document.getElementById("time");

for (let i = 0; i < 14; i++) {
  const d = new Date();
  d.setDate(d.getDate() + i);
  dateSel.innerHTML += `<option>${d.toISOString().slice(0,10)}</option>`;
}

times.forEach(t => {
  timeSel.innerHTML += `<option>${t}</option>`;
});

function book() {
  const data = {
    date: dateSel.value,
    time: timeSel.value,
    name: document.getElementById("name").value
  };

  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById("msg").innerText = "Booked!";
  });
}
