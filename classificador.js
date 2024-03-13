let nome = "Dougge";
let xp = 3500;
let resultado = "";

if (xp < 1000) {
    resultado = "Ferro";
} else if (xp <= 2000) {
    resultado = "Bronze";
} else if (xp <= 5000) {
    resultado = "Prata";
} else if (xp <= 7000) {
    resultado = "Ouro";
} else if (xp <= 8000) {
    resultado = "Platina";
} else if (xp <= 9000) {
    resultado = "Ascendente";
} else if (xp <= 10000) {
    resultado = "Imortal";
} else {
    resultado = "Radiante";
}

console.log("O Herói " + nome + " possui: " + xp + " XP.\n Ele está no nível: " + resultado);