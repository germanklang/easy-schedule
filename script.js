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

  fetch("https://script.google.com/macros/s/AKfycbz9AoMsaK5gY8nNnMBsUggqUQHQ8p35XOzYEAYw3BLedJnsDKqh5rTm5njxEsiIG5OC/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById("msg").innerText = "Booked!";
  });
}
