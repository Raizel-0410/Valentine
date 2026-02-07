const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const mainGif = document.getElementById("mainGif");

let yesSize = 1;

const convinceTexts = [
  "Sure kana ba jan bossing?",
  "Sure na sure naba? Walang bawian to",
  "Love naman (ToT)",
  "PLEASE PLEASE PLEASE~~~",
  "Sige na huhuhuhu",
  "Look I'm really sad na oh :(((",
  "Click mona and YES mhiee ><",
  "Dimo pag sisisihan to pramis!!!!",
  "Sure naba talaga ikaw mhie???",
  "Papayag nayan~~~~~",
  "GENAAAAAAA (ToT)"
];

// Sad cat meme GIFs 😿
const sadCatGifs = [
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Zm1kY2lxZWk2anp4cDZtZTVyM2k5MWYzNGE0Y21nbHpja2lmMDY0aSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/9uwnYUDw342pq/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWZxOXFrZGpraDI4Y2UxYWxyd3I4NzNuczlkbjVlOWFqYzQwZmwybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxHQfvDzo7VhSRy8M/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bDAyeG8yeGUxcnNpNDZ1YXpoeDZ4NDVzeng0emtnd3Zoa3F1enprMiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/SjUVdtZJD1amvPddOq/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Nzk3ZjQ4NXc1bDAxaTlzems4ZDNlbHUyZWZldTA2dmVuY2t2aGJiZCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/qUIm5wu6LAAog/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OG5qNnpkdDZmMDNtMWVtaDNjdmt0bHEybzZnYnl0MmJmODc0bmd6cyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/Vzkgcis3OCRUSVMleW/giphy.gif"
];

let textIndex = 0;

noBtn.addEventListener("click", () => {
  // Show convincing message
  message.textContent = convinceTexts[textIndex];
  textIndex = (textIndex + 1) % convinceTexts.length;

  // Make YES button bigger
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Change GIF to a random sad cat
  const randomGif = sadCatGifs[Math.floor(Math.random() * sadCatGifs.length)];
  mainGif.src = randomGif;
});

yesBtn.addEventListener("click", () => {
  // Submit hidden Netlify form
 fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": "valentine-yes",
      "response": "She said YES!!! 💖"
    })
  });

  // Show success screen
  document.body.innerHTML = `
    <div style="
      min-height:100svh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      background:linear-gradient(135deg, #ff9a9e, #fad0c4);
      color:white;
      font-family:Segoe UI;
      padding:20px;">
      
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnZvaHVjd2E5bTk5ZzhlcmZ1cjVzeXFxZXB1ampvdjBvaDBsYTBrcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif" 
           alt="Happy Love GIF" 
           style="width:70%; max-width:250px; margin-bottom:20px; border-radius:15px;">

      <h1 style="font-size:2rem; margin-bottom:10px;">YAZZZ!!! 💖</h1>
      <p style="font-size:1.2rem;">Aq na ang pinaka masayang ekalal sa mundo🥰</p>
      <p style="margin-top:8px;">Happy Valentine’s Day, Ai!!! See you on 14 ^^ 💕</p>
      <p style="margin-top:8px;">P.S.(Pa ss po i2 as proof hehehe)</p>
    </div>
  `;
});


