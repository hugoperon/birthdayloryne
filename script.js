let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let messageText = document.getElementById('messageText');

btn1.addEventListener('click', () => {
    messageText.className = 'love-message';
    messageText.innerHTML = `
        <div class="header">Joyeux 20 ans ma Loryne ❤️</div>
        <div class="hearts">✨ 💖 ✨</div>
        <div class="content">
            Ma chérie, aujourd'hui est un jour spécial, tout comme toi tu es spéciale à mes yeux.
            <br><br>
            20 ans... C'est l'âge de tous les possibles, l'âge où la vie nous ouvre ses plus belles portes.
            Et je suis tellement heureux de pouvoir célébrer ce moment important avec toi.
            <br><br>
            Depuis que tu es entrée dans ma vie, chaque jour est plus lumineux, plus beau, plus rempli d'amour.
            Tu es cette personne extraordinaire qui fait battre mon cœur, qui me fait sourire même dans les moments difficiles.
            Ton rire est ma mélodie préférée, ton sourire illumine mes journées.
            <br><br>
            À 20 ans, tu es non seulement magnifique à l'extérieur, mais tu possèdes aussi une âme si pure et un cœur en or.
            J'aime ta façon de rire, ta gentillesse, ton intelligence, et tous ces petits détails qui font que tu es unique.
            J'aime la façon dont tes yeux brillent quand tu es heureuse, la façon dont tu te blottis contre moi,
            et même la façon dont tu fais la moue quand quelque chose ne va pas.
            <br><br>
            Tu sais, parfois je me surprends à te regarder quand tu ne t'en rends pas compte,
            et je me dis que j'ai une chance incroyable de partager ma vie avec quelqu'un d'aussi extraordinaire que toi.
            Tu es ma meilleure amie, ma confidente, mon amour, mon tout.
            <br><br>
            Chaque moment passé avec toi est précieux, et je chéris chacun de nos souvenirs ensemble.
            Nos fous rires, nos longues conversations, nos moments de complicité, nos petites aventures...
            Chaque instant à tes côtés est un cadeau dont je mesure la valeur.
            <br><br>
            J'aime la façon dont nous grandissons ensemble, dont nous nous soutenons mutuellement,
            dont nous construisons petit à petit notre histoire. Tu me rends meilleur chaque jour,
            et j'espère t'apporter autant de bonheur que tu m'en donnes.
            <br><br>
            En ce jour si spécial, je veux que tu saches à quel point tu comptes pour moi,
            à quel point tu me rends heureux, et à quel point je suis reconnaissant de t'avoir dans ma vie.
            Tu es mon présent le plus précieux et mon futur le plus radieux.
            <br><br>
            Ces 20 ans marquent le début d'un nouveau chapitre de ta vie,
            et je suis tellement fier et heureux de pouvoir l'écrire à tes côtés.
            Tu es exceptionnelle, Loryne, et tu mérites tout le bonheur du monde.
            <br><br>
            Puisse cette journée être aussi merveilleuse que toi,
            remplie d'amour, de joie et de moments inoubliables.
            Je ferai tout pour rendre ce jour, et tous les autres, spéciaux pour toi.
        </div>
        <div class="hearts">🌟 💝 🌟</div>
        <div class="signature">Je t'aime infiniment et pour toujours,<br>Hugo</div>
    `;
    messageText.classList.add('visible');
    btn2.disabled = false;
    btn1.disabled = true;
});

btn2.addEventListener('click', () => {
    // Remplacez l'URL par celle de votre vidéo YouTube
    window.open('https://www.youtube.com/watch?v=VOTRE_ID_VIDEO', '_blank');
    btn3.disabled = false;
    btn2.disabled = true;
});

btn3.addEventListener('click', () => {
    messageText.innerHTML = "Regarde Hugo dans les yeux maintenant, il a quelque chose à te donner ❤️";
    messageText.classList.add('visible');
    btn3.disabled = true;
}); 