function basicEgg() {

    const indoAli = 60;
    const indoAliEmo = 25;
    const voltandoAli = 10;
    const babyIndoAli = 5;

    const rand = Math.random() * 100;

    let urlImagem = "";

    if (rand < indoAli) {
        urlImagem = "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/oEyE4hDzQUmBMXhftjkRBAAJEg9w9fI7uM3TsJ~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1695110400&x-signature=G2qM%2BcJ%2F9jA9pwn4Rlc6t8uRF94%3D";
    } 
    
    else if (rand < indoAli + indoAliEmo) {
        urlImagem = "https://pbs.twimg.com/media/F489aCwXwAIfGi3.jpg";
    }

    else if(rand < indoAli + indoAliEmo + voltandoAli){
        urlImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWnETua7qSCw3D3LuB9CcKYD0t7xxTIvlSA&usqp=CAU"
    }

    else if(rand < indoAli + indoAliEmo + voltandoAli + babyIndoAli){
        urlImagem = "https://pbs.twimg.com/media/F32-VdQWMAAFAw5?format=jpg&name=small"
    }
    else {

    }

    if (urlImagem !== "") {
        const novaJanela = window.open(urlImagem, "Imagem", "width=400,height=400");
    }
}

function uncommonEgg(){
    const indoAliMine = 65;
    const indoAliPiece = 20;
    const indoAliBolsonaro = 10;
    const indoAliLula = 5;

    const rand = Math.random() * 100

    let urlImage = ""

    if(rand < indoAliMine){
        urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUphrhPVoxGJWiFUlaHjuKCRCtpFZmmVNIg&usqp=CAU"
    }

    else if(rand < indoAliMine + indoAliPiece){
        urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTUVGEIIUi4ZgSkfIiYCAS1KXW261LCiPOHjBN0A1d4JAVzpfqia26LKY7ol8BuWDZ6Q&usqp=CAU"
    }

    else if(rand < indoAliMine + indoAliPiece + indoAliBolsonaro){
        urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRgkfaXCqbLg7qUZnWAdK5dKea5uV3htaAg&usqp=CAU"
    }

    else if(rand < indoAliMine + indoAliPiece + indoAliBolsonaro + indoAliLula){
        urlImage = "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/owwhOp4cExECk2gAQDEzNgCILOAfBFdoE4iyIY~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1695200400&x-signature=19BoKzdgSDNU2SgmhHqZz08h8sI%3D"
    }
    if(urlImage !== ""){
        const novaJanela = window.open(urlImage, "Imagem", "width=400,height=400");
    }
}