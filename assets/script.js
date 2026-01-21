// Active nav link by current file name
(function(){
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a=>{
    if(a.getAttribute("href").toLowerCase() === file) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();

function toast(msg){
  const el = document.getElementById("toast");
  if(!el) return;
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(()=> el.style.display="none", 2600);
}

// Demo signup handler (Drop / Newsletter)
function handleSignup(e){
  e.preventDefault();
  const email = e.target.querySelector("input[type='email']")?.value?.trim();
  if(!email) return false;

  console.log("SIGNUP:", email);
  toast("✅ Du bist auf der Reserve List.");
  e.target.reset();
  return false;
}

// Contact form demo
function handleContact(e){
  e.preventDefault();
  toast("📩 Nachricht gesendet.");
  e.target.reset();
  return false;
}
