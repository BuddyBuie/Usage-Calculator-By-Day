var input = document.getElementById("inp1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    pressed()
  }
});

var input = document.getElementById("inp2");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    pressed()
  }
});

function pressed() { 
  const text = parseInt(document.getElementById("inp1").value);
  const text2 = parseInt(document.getElementById("inp2").value);
  
    const fifteen = (Math.round(text * 15) / text2).toFixed(0);
  
    const thirty = (Math.round(text * 30) / text2).toFixed(0);
  
    output.innerHTML = "MSPV 15 DAY = " + fifteen + "| OM 30 DAY = " + thirty;
  
}