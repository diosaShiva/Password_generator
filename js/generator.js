let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let special = ['!', '@', '?', '#', '%', '$', '^'];


document.getElementById ("length").oninput = function () {
    //ползунок
    document.getElementById ("password-length").innerHTML = this.value;
};

document.getElementById ('generator').onclick  = generatePath;


function generatePath () {
    let res = [];

    if (document.getElementById ('numbers').checked){
        // чи включені числа
        res = res.concat (numbers);
    }

    if (document.getElementById ('lowercase_letters').checked){
        // чи включені прописні літери
        res = res.concat (lower);
    }

    if (document.getElementById ('uppercase_letters').checked){
        // чи включені заглавні літери
        res = res.concat (upper);
    }

    if (document.getElementById ('special_symbols').checked){
        // чи включені спеціальні символи
        res = res.concat (special);
    }

    res.sort(compareRandom); // перемішую резулютуючий масив
    console.log (res);


    document.getElementById ('out').innerHTML = '';

    for (let k = 0; k <= 6; k++) {
    
        let pass = ''; // майбутній пароль
        let passLength = parseInt(document.getElementById ('length').value); // довжина пароля

        for (let i = 0; i < passLength; i++) {
            // цикл по довжині пароля
            // обираю випадкові значення з масива res
            pass += res[randomInteger(0, res.length - 1)];
        }

        console.log (pass);
        document.getElementById ('out').innerHTML += '<p>' + pass + '</p>';
    }
}

function compareRandom(a, b) {
    return  Math.random() - 0.5;
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}