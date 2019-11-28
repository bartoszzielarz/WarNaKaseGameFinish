let Karty = [{
        img: "img/Czarne2.png"
    },
    {
        img: "img/Krzyz2.png"
    },
    {
        img: "img/Poduszki2.png"
    },
    {
        img: "img/Serce2.png"
    },
    {
        img: "img/Czarne3.png"
    },
    {
        img: "img/Krzyz3.png"
    },
    {
        img: "img/Poduszki3.png"
    },
    {
        img: "img/Serce3.png"
    },
    {
        img: "img/Czarne4.png"
    },
    {
        img: "img/Krzyz4.png"
    },
    {
        img: "img/Poduszki4.png"
    },
    {
        img: "img/Serce4.png"
    },
    {
        img: "img/Czarne5.png"
    },
    {
        img: "img/Krzyz5.png"
    },
    {
        img: "img/Poduszki5.png"
    },
    {
        img: "img/Serce5.png"
    },
    {
        img: "img/Czarne6.png"
    },
    {
        img: "img/Krzyz6.png"
    },
    {
        img: "img/Poduszki6.png"
    },
    {
        img: "img/Serce6.png"
    },
    {
        img: "img/Czarne7.png"
    },
    {
        img: "img/Krzyz7.png"
    },
    {
        img: "img/Poduszki7.png"
    },
    {
        img: "img/Serce7.png"
    },
    {
        img: "img/Czarne8.png"
    },
    {
        img: "img/Krzyz8.png"
    },
    {
        img: "img/Poduszki8.png"
    },
    {
        img: "img/Serce8.png"
    },
    {
        img: "img/Czarne9.png"
    },
    {
        img: "img/Krzyz9.png"
    },
    {
        img: "img/Poduszki9.png"
    },
    {
        img: "img/Serce9.png"
    },
    {
        img: "img/Czarne10.png"
    },
    {
        img: "img/Krzyz10.png"
    },
    {
        img: "img/Poduszki10.png"
    },
    {
        img: "img/Serce10.png"
    },
    {
        img: "img/CzarneJ.png"
    },
    {
        img: "img/KrzyzJ.png"
    },
    {
        img: "img/PoduszkiJ.png"
    },
    {
        img: "img/SerceJ.png"
    },
    {
        img: "img/CzarneD.png"
    },
    {
        img: "img/KrzyzD.png"
    },
    {
        img: "img/PoduszkiD.png"
    },
    {
        img: "img/SerceD.png"
    },
    {
        img: "img/CzarneK.png"
    },
    {
        img: "img/KrzyzK.png"
    },
    {
        img: "img/PoduszkiK.png"
    },
    {
        img: "img/SerceK.png"
    },
    {
        img: "img/CzarneA.png"
    },
    {
        img: "img/KrzyzA.png"
    },
    {
        img: "img/PoduszkiA.png"
    },
    {
        img: "img/SerceA.png"
    },
];
window.onload = function () {
    this.alert("Witamy w naszej grze w karty z opcją obstawiania stawki!Aby rozpocząć grę kliknij przycisk z prawej strony Rozdaj. Następnie kliknij poniżej jedną ze stawek celem obstawienia danej rundy. Celem rzucenia karty na stół kliknij przycisk kartę 1-5.");
};
let runda = 0;
let KartyGracza = [];
let KartyIP = [];
let btnRozdaj = document.querySelector('button.Rozdaj');
btnRozdaj.addEventListener('click', RozdajemyKarty);
let wyswietlenieKarty = document.querySelector('kartyGracza');

let imgGracza1 = document.querySelector('img.taliaGracza1');
let imgGracza2 = document.querySelector('img.taliaGracza2');
let imgGracza3 = document.querySelector('img.taliaGracza3');
let imgGracza4 = document.querySelector('img.taliaGracza4');
let imgGracza5 = document.querySelector('img.taliaGracza5');
let imgGraczaAll = [...document.querySelectorAll('div.player img')];
let staweczka = document.querySelector('#staweczka');

let index = 0;
let i = 0;
let j = 0;

function RozdajemyKarty() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    for (i = 0; i < 10; i++) {
        KartyGracza.push([10])
        for (j = 0; j < 5; j++) {
            var end = 1;
            while (end != 0) {
                var numb = getRandomInt(0, 52);
                if (!KartyGracza.includes(numb)) {
                    KartyGracza[i][j] = numb;
                    end = 0;
                }
            }
        }
    }
    //console.dir(KartyGracza);
    for (i = 0; i < 10; i++) {
        KartyIP.push([10])
        for (j = 0; j < 5; j++) {
            var end = 1;
            while (end != 0) {
                var numb = getRandomInt(0, 52);
                if (!KartyIP.includes(numb)) {
                    KartyIP[i][j] = numb;
                    end = 0;
                }
            }
        }
    }
    //Console.dir(KartyIP);
    PrzypisujemyImgGracza(runda);
}

function PrzypisujemyImgGracza(i) {
    if (runda < 10) {
        imgGracza1.src = Karty[KartyGracza[i][0]].img;
        imgGracza2.src = Karty[KartyGracza[i][1]].img;
        imgGracza3.src = Karty[KartyGracza[i][2]].img;
        imgGracza4.src = Karty[KartyGracza[i][3]].img;
        imgGracza5.src = Karty[KartyGracza[i][4]].img;
    } else {
        alert("Przegrałeś");
    }
}

let imgGraczaNaStole = document.querySelector('img.kartyNaStoleGracza');
let imgIPNaStole = document.querySelector('img.kartyNaStoleIP');

function PrzypisujemyIMGDoStolu(wartosc1Gracza) {
    imgGraczaNaStole.src = Karty[wartosc1Gracza].img;
    imgIPNaStole.src = Karty[BestCardIP()].img;
}

function BestCardIP() {

    var maxValuePerRound = 0;
    for (i = runda; i < runda + 1; i++) {
        for (j = 0; j < 5; j++) {
            if (maxValuePerRound < KartyIP[i][j]) {
                maxValuePerRound = KartyIP[i][j];
            }
        }
    }
    return maxValuePerRound;
}


//ponizej wyjsciowa wartosc kasy trza dodac obsługe stawki
let userscore = 1000;
let IPscore = 1000
let scoreIP = document.querySelector('#scoreIP');
let scorePlayer = document.querySelector('#scorePlayer');
let stawka = 0;

function stawka20() {
    stawka = 20;
    staweczka.innerHTML = 'Stawka :' + stawka;
    return stawka;
}

function stawka50() {
    stawka = 50;
    staweczka.innerHTML = 'Stawka :' + stawka;
    return stawka;
}

function stawka100() {
    stawka = 100;
    staweczka.innerHTML = 'Stawka :' + stawka;
    return stawka;
}
//przechwycenie scoreIP i scorePlayer
function CheckWinner(wartosc1Gracza) {

    if (BestCardIP() === wartosc1Gracza) {
        alert("remis");

    } else if (BestCardIP() > wartosc1Gracza) {

        IPscore += stawka;
        userscore -= stawka;
        scoreIP.innerHTML = 'Kasa :' + IPscore;
        scorePlayer.innerHTML = 'Kasa :' + userscore;
        alert("Przegrałeś to rozdanie");
    } else {
        userscore += stawka;
        IPscore -= stawka;
        scoreIP.innerHTML = 'Kasa :' + IPscore;
        scorePlayer.innerHTML = 'Kasa :' + userscore;
        alert("Wygrałes to rozdanie");
    }
}

function Click1() {
    if (userscore > 20) {
        wartosc1Gracza = KartyGracza[runda][0];
        PrzypisujemyIMGDoStolu(wartosc1Gracza);
        CheckWinner(wartosc1Gracza);
        runda++
        PrzypisujemyImgGracza(runda);
    } else {
        alert("Nie masz już kasy! Przegrałeś");
    }
}

function Click2() {
    if (userscore > 20) {
        wartosc1Gracza = KartyGracza[runda][1];
        PrzypisujemyIMGDoStolu(wartosc1Gracza);
        CheckWinner(wartosc1Gracza);
        runda++
        PrzypisujemyImgGracza(runda);
    } else {
        alert("Nie masz już kasy! Przegrałeś");
    }
}

function Click3() {
    if (userscore > 20) {
        wartosc1Gracza = KartyGracza[runda][2];
        PrzypisujemyIMGDoStolu(wartosc1Gracza);
        CheckWinner(wartosc1Gracza);
        runda++
        PrzypisujemyImgGracza(runda);
    } else {
        alert("Nie masz już kasy! Przegrałeś");
    }
}

function Click4() {
    if (userscore > 20) {
        wartosc1Gracza = KartyGracza[runda][3];
        PrzypisujemyIMGDoStolu(wartosc1Gracza);
        CheckWinner(wartosc1Gracza);
        runda++
        PrzypisujemyImgGracza(runda);
    } else {
        alert("Nie masz już kasy! Przegrałeś");
    }

}

function Click5() {
    if (userscore > 20) {
        wartosc1Gracza = KartyGracza[runda][4];
        PrzypisujemyIMGDoStolu(wartosc1Gracza);
        CheckWinner(wartosc1Gracza);
        runda++
        PrzypisujemyImgGracza(runda);
    } else {
        alert("Nie masz już kasy! Przegrałeś");
    }
}