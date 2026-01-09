const times = ["13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","20:00","20:30""21:00","21:30",];

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
function doGet() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  etch("DEINE_WEBAPP_URL", {
  method: "POST",
  body: JSON.stringify({
    time: selectedTime,
    name: userName,
    email: userEmail
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.text())
.then(res => console.log("Buchung gesendet:", res))
.catch(err => console.error(err));

}

