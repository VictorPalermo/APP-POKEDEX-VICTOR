let texts = [
    "Olá!ﾠPrazerﾠemﾠconhecê-lo!",
    "Bem-vindoﾠaoﾠmundoﾠPokémon!",
    "MeuﾠnomeﾠéﾠCarvalho,ﾠmasﾠtodoﾠmundoﾠmeﾠchamaﾠdeﾠProfessorﾠPokémon.",
    "EsteﾠmundoﾠéﾠhabitadoﾠporﾠcriaturasﾠchamadasﾠPokémon!",
    "Paraﾠalgumasﾠpessoas,ﾠosﾠPokémonﾠsãoﾠanimaisﾠdeﾠestimação.",
    "Outrosﾠosﾠusamﾠparaﾠbatalhas.ﾠQuantoﾠaﾠmim...",
    "EuﾠestudoﾠosﾠPokémon!",
    "Masﾠprimeiroﾠfala-meﾠsobreﾠvocê.",
    "Agoraﾠdiga-me.ﾠVocêﾠéﾠumﾠGaroto?ﾠOuﾠGarota?",
];

let currentIndex = 0;

function nextText() {
    if (currentIndex < texts.length) {
        typeText(texts[currentIndex]); 
        currentIndex++;
    }

    if (currentIndex === texts.length) {
        document.getElementById("genero").style.display = 'block';
    }
}

function typeText(message, callback) {
    const gameText = document.getElementById("game-text");
    gameText.innerText = '';
    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            gameText.innerText += message.charAt(index); 
            index++;
            setTimeout(typeLetter, 50); 
        } else if (callback) {
            callback(); 
        }
    }

    typeLetter(); 
}


function chooseCharacter(gender) {
    let genderText = (gender === 'garoto') ? "EntãoﾠvocêﾠéﾠumﾠGaroto!" : "EntãoﾠvocêﾠéﾠumaﾠGarota!";
    typeText(genderText, () => {
        setTimeout(() => {
            window.location.href = `/nome?gender=${gender}`; 
        }, 2000);
    });
}

function createNameInput() {
    document.getElementById("genero").style.display = 'none'; 
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "player-name";
    nameInput.placeholder = "Digite seu nome aqui";
    nameInput.style.padding = "10px"; 
    nameInput.style.marginTop = "10px"; 
    nameInput.style.fontSize = "16px";
    nameInput.style.border = "2px solid #000"; 
    nameInput.style.borderRadius = "5px";
    nameInput.style.display = "block"; 
    nameInput.style.width = "80%";

    let textBox = document.getElementById("text-box");
    textBox.appendChild(nameInput);

    let submitButton = document.createElement("button");
    submitButton.innerText = "Enviar";
    submitButton.onclick = submitName;
    submitButton.style.marginTop = "10px"; 
    textBox.appendChild(submitButton);
}

function submitName() {
    const playerName = document.getElementById("player-name").value;
    if (playerName) {
        const message = `Um mundo de sonhos e aventuras lhe aguarda, ${playerName}, Vamos lá!`;
        typeText(message, () => {
            setTimeout(() => {
                window.location.href = '/pokemon'; 
            }, 9000000); 
        });
    } else {
        alert("Por favor, digite um nome!"); 
    }
}

window.onload = nextText;
