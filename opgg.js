var API_key="RGAPI-435af037-8a00-4fc7-b748-7f3dd8b436a6";
var player_n ="";
var br1 = "https://br1.api.riotgames.com";

//API da riot games, Ela basicamente mostra a foto de perfil e o nível do jogador que o nick for inserido. Alguns Exemplos para testar a API são: Cj Stroud, aldair playboy, ElderRuisu, Tatucabeludo.
function procurar_jogador(){
    player_n = document.getElementById("player_n").value;
    console.log(player_n);
    data()
}

async function data(){
    var playerUrl = "/lol/summoner/v4/summoners/by-name/"+player_n;
    var playerUrlcompleto = br1 + playerUrl+"?api_key="+API_key;
    console.log(playerUrlcompleto);
    const dataPlayer_1 = await fetch(playerUrlcompleto);
    const dataPlayer_Completo = await dataPlayer_1.json();
    console.log(dataPlayer_Completo);

    var level = dataPlayer_Completo.summonerLevel;
    console.log(level);
    document.getElementById("playerlevel_data").innerHTML = player_n +" é level " + level;

    var idperfil = dataPlayer_Completo.profileIconId;
    var urlperfil = "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/"+ idperfil +".png";
    document.getElementById("summonerprofilepic_picture").src = urlperfil;
}

