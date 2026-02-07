const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// NO button moves away when you hover
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button click: pop kiss emoji
yesBtn.addEventListener("click", (e) => {
  createKiss(e.pageX, e.pageY);
  alert("💋 MWAAH! You chose me 💖");
});

function createKiss(x, y) {
  const kiss = document.createElement("div");
  kiss.classList.add("kiss");
  kiss.style.left = x + "px";
  kiss.style.top = y + "px";
  kiss.textContent = "💋";
  document.body.appendChild(kiss);

  setTimeout(() => kiss.remove(), 1500);
}
