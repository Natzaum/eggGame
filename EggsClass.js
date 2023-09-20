let coins = 0;

function contar() {
    coins++;
    updateCoinsDisplay();

    if (coins >= 100) {
        coins += 1;
    }
    if (coins >= 200) {
        coins += 1;
    }
    if (coins >= 300) {
        coins += 1;
    }
}

function updateCoinsDisplay() {
    const coinsDisplay = document.getElementById("coins");
    coinsDisplay.textContent = coins;

    if (coins < 0) {
        const coinsDisplay = document.getElementById("coins");
        coinsDisplay.textContent = coins >= 0 ? coins : 0;
    }
}

function basicEgg() {
    const indoAli = 60;
    const indoAliEmo = 25;
    const voltandoAli = 10;
    const babyIndoAli = 5;

    const rand = Math.random() * 100;

    let urlImage = "";

    if (rand < indoAli) {
        urlImage =
            "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/oEyE4hDzQUmBMXhftjkRBAAJEg9w9fI7uM3TsJ~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1695110400&x-signature=G2qM%2BcJ%2F9jA9pwn4Rlc6t8uRF94%3D";
    } else if (rand < indoAli + indoAliEmo) {
        urlImage = "https://pbs.twimg.com/media/F489aCwXwAIfGi3.jpg";
    } else if (rand < indoAli + indoAliEmo + voltandoAli) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWnETua7qSCw3D3LuB9CcKYD0t7xxTIvlSA&usqp=CAU";
    } else if (rand < indoAli + indoAliEmo + voltandoAli + babyIndoAli) {
        urlImage =
            "https://pbs.twimg.com/media/F32-VdQWMAAFAw5?format=jpg&name=small";
    } else {
    }

    if (coins >= 2) {
        coins -= 2;
        const novaJanela = window.open(urlImage, "Imagem", "width=400,height=400");
        updateCoinsDisplay();
    } else {
        alert("Você não tem moedas suficientes para comprar este ovo");
    }
}

function uncommonEgg() {
    const indoAliMine = 65;
    const indoAliPiece = 20;
    const indoAliBolsonaro = 10;
    const indoAliLula = 5;

    const rand = Math.random() * 100;

    let urlImage = "";

    if (rand < indoAliMine) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUphrhPVoxGJWiFUlaHjuKCRCtpFZmmVNIg&usqp=CAU";
    } else if (rand < indoAliMine + indoAliPiece) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTUVGEIIUi4ZgSkfIiYCAS1KXW261LCiPOHjBN0A1d4JAVzpfqia26LKY7ol8BuWDZ6Q&usqp=CAU";
    } else if (rand < indoAliMine + indoAliPiece + indoAliBolsonaro) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRgkfaXCqbLg7qUZnWAdK5dKea5uV3htaAg&usqp=CAU";
    } else if (
        rand <
        indoAliMine + indoAliPiece + indoAliBolsonaro + indoAliLula
    ) {
        urlImage =
            "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/owwhOp4cExECk2gAQDEzNgCILOAfBFdoE4iyIY~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1695200400&x-signature=19BoKzdgSDNU2SgmhHqZz08h8sI%3D";
    }

    if (coins >= 5) {
        coins -= 5;
        const novaJanela = window.open(urlImage, "Imagem", "width=400,height=400");
        updateCoinsDisplay();
    } else {
        alert("Você não tem moedas suficientes para comprar este ovo");
    }
}

function rareEgg() {
    const printIndoAli = 50;
    const indoAliBizarro = 40;
    const indoAliRealista = 9;
    const indoAliRealistaShiny = 1;

    const rand = Math.random() * 100;

    let urlImage = "";

    if (rand < printIndoAli) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGoARe4C81C24E10C_Ol0RvmIydjEZEOqLA&usqp=CAU";
    } else if (rand < printIndoAli + indoAliBizarro) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CIqYEO8vNvRKIZ4GBkANRul2Wrwi5MoEfvblmWLd7b8XJXAOFmW79n96rZ5WvsTcAXk&usqp=CAU";
    } else if (rand < printIndoAli + indoAliBizarro + indoAliRealista) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfA7ELjBulcHrkQCqqAwM_mozuPS2fPnpPQ&usqp=CAU";
    } else if (
        rand <
        printIndoAli + indoAliBizarro + indoAliRealista + indoAliRealistaShiny
    ) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9agPcibfP87h0eLlNFbbFy6J9GKUWNIFPw&usqp=CAU";
    }

    if (coins >= 8) {
        coins -= 8;
        const novaJanela = window.open(urlImage, "Imagem", "width=400,height=400");
        updateCoinsDisplay();
    } else {
        alert("Você não tem moedas suficientes para comprar este ovo");
    }
}

function epicEgg() {
    const indoAliVascaino = 80;
    const indoAliGremista = 15;
    const indoAliShiny = 2.5;
    const indoAliWhatsapp = 2.5;

    const rand = Math.random() * 100;

    let urlImage = "";

    if (rand < indoAliVascaino) {
        urlImage =
            "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/owIEC8lnjBefBcniQbuCPJAQDkNxwAPuwsXARn~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1695200400&x-signature=ZR32xa6274kEc3872MaC2fj4uD0%3D";
    } else if (rand < indoAliVascaino + indoAliGremista) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzinADQfxpYT_Zs9JC8i69q82MnZkmKRdfA6sgmyEr_DOzErAYvn2KQcoVF3fdeFuPOY&usqp=CAU";
    } else if (rand < indoAliVascaino + indoAliGremista + indoAliShiny) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpas4pmm9xuVLrvog7ryhtHW2nWSoneSzceg&usqp=CAU";
    } else if (
        rand <
        indoAliVascaino + indoAliGremista + indoAliShiny + indoAliWhatsapp
    ) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlmdBpTRxwZvyNbJUKLJg8fKFpd3dwWt1XjouKLkJvebVQOgHkckCP5koW_fHxnH4lpI&usqp=CAU ";
    }

    if (coins >= 10) {
        coins -= 10;
        const novaJanela = window.open(urlImage, "Imagem", "width=400,height=400");
        updateCoinsDisplay();
    } else {
        alert("Você não tem moedas suficientes para comprar este ovo");
    }
}

function legendaryEgg() {
    const callingIndoAli = 88;
    const indoAliPaiaço = 5;
    const indoAliDrogado = 2.5;
    const naoConsigoIrAli = 0.5;

    const rand = Math.random() * 100;

    let urlImage = "";

    if (rand < callingIndoAli) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmxAgVgP3ajATd1oatTuocjzzB11M9Oc4vY3CA4wwiLGpqu27XbYptzwV6Y8ZmoYf9D8&usqp=CAU";
    } else if (rand < callingIndoAli + indoAliPaiaço) {
        urlImage =
            "https://img.ifunny.co/images/c50a90deb074d28e242013aa0cae3253a1c5038172ebd5ad8fc626a4dcda5cc3_1.jpg";
    } else if (rand < callingIndoAli + indoAliPaiaço + indoAliDrogado) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvfdxn_afcC0JKlaf0LuRqhrHmdp6u-PdVQ&usqp=CAU";
    } else if (
        rand <
        callingIndoAli + indoAliPaiaço + indoAliDrogado + naoConsigoIrAli
    ) {
        urlImage =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCIqFVGicFCiT8myMvMl_ldgunQS2-0Oua2LzNsGexlXvQVj890XiasDmIEquHFZ2TqI&usqp=CAU";
    }

    if (coins >= 15) {
        coins -= 15;
        const novaJanela = window.open(urlImage, "Imagem", "width=400,height=400");
        updateCoinsDisplay();
    } else {
        alert("Você não tem moedas suficientes para comprar este ovo");
    }
}
