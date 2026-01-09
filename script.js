const times = [
  "13:00","13:30","14:00","14:30","15:00","15:30",
  "16:00","16:30","17:00","17:30","18:00","18:30",
  "20:00","20:30","21:00","21:30"
];

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

  fetch("https://script.google.com/macros/s/AKfycbwo8K7NIZHlsIbT87kESY1ztuZCe0qVxZ6QsCdd5YPApQnn6_nJ6ng3LC3vynLqshot_Q/exec", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    console.log("Server:", msg);
    document.getElementById("msg").innerText = "Booked!";
  })
  .catch(err => {
    console.error(err);
    document.getElementById("msg").innerText = "Error!";
  });
}
