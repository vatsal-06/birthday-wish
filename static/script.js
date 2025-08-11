function submitPassword() {
    let pwd = document.getElementById("password").value;
    fetch("/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "password=" + encodeURIComponent(pwd)
    })
    .then(res => res.text())
    .then(res => {
        document.getElementById("confetti").innerHTML = "";
        document.getElementById("crying").innerHTML = "";
        document.getElementById("pdf").style.display = "none";
        if (res === "correct") {
            showConfetti();
            document.getElementById("message").innerText = "You cracked it!";
            document.getElementById("pdf").src = "birthday.pdf";
            document.getElementById("pdf").style.display = "block";
        } else {
            showCrying();
            document.getElementById("message").innerText = "Try Again!";
        }
    });
}

function showConfetti() {
    let confetti = "";
    for (let i = 0; i < 40; i++) {
        confetti += `<span style="
            position: absolute;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            width: ${Math.random() * 10 + 8}px;
            height: ${Math.random() * 10 + 8}px;
            background-color: hsl(${Math.random() * 360}, 85%, 65%);
            border-radius: 50%;
            animation: fall 2s linear infinite;
            display: inline-block;
            "></span>`;
    }
    document.getElementById("confetti").innerHTML = confetti;
}


function showCrying() {
    let crying = "";
    for (let i = 0; i < 40; i++) {
        crying += `<span style="
          position: absolute;
          top: ${Math.random()*100}vh;
          left: ${Math.random()*100}vw;
          font-size: ${Math.random() * 24 + 16}px;
          animation: fall 2s linear infinite;
          ">&#128557;</span>`; // 😭
    }
    document.getElementById("crying").innerHTML = crying;
}
