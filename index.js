const Discord = require('discord.js')
const config = require("./node.js")
const bot = new Discord.Client();
bot.commands = new Discord.Collection()
const connection = require('discord.js')
const ytdl = require('ytdl-core');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)


const prefix = "!"

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") 
        message.reply("**Les messages privé ne sont pas accepter !** \n __Pour quelconque interaction__ : ||https://discord.gg/APBsB4X8xH || \n \`Bot crée par Ledidorihno#3994\` ");


    // Avatar + tg,ntm,fdp + membres + nom du serveur + propriétaire du serveur + ping
     
    if (message.content == prefix + "avatar")
    { message.channel.send('**Tenez** \n\n' + message.author.displayAvatarURL())  }

    if (message.content.toLowerCase().includes('tg') || message.content.toLowerCase().includes('ntm') || message.content.toLowerCase().includes('fdp'))
        message.reply("**Attention au vocabulaire !**  \n __Un <@&817139303443464212> peut décider de vous banir !__") + message.react("⚠️") + message.react("<a:omg:827604084605321267> ")

    if (message.content == prefix + 'membres')
        message.channel.send(` Vous êtes actuellement ${message.guild.memberCount} membres `)

    if (message.content == prefix + 'nom du serveur')
        message.channel.send(` Le nom du serveur est  **${message.guild.name}**`)

    if (message.content == prefix + ('propriétaire du serveur'))
        message.channel.send(` Le propriétaire du serveur est ${message.guild.owner}`)

    if (message.content == prefix + ('emoji'))
        message.channel.send('<a:7552_Pepe_NitroBoost:827614332808462346>,<a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>,<:1200pxRTL_logo:827662169846972457>,<a:dfsdfsfsdfdsf:827657362461949982>, <a:8809_nitro:827614290268782623>,<:logonrj:827661439069061120>,<:015:827658956411371550>,<:funnnnnraddddiiiooo:827660914713952278>,<:skrcock:827660543699320853>,<:mouuuuv:827660037769920522>, ')

    
    if (message.content == prefix + ('ping'))
        message.channel.send(` Latence : ${Math.sqrt(((new Date() - message.createdTimestamp) / (5 * 2)) ** 2)} ms`)

    
    if (message.content.toLowerCase().includes('nitro') || message.content.toLowerCase().includes('boost'))
         message.react("<a:8809_nitro:827614290268782623>") + message.react ("<a:7552_Pepe_NitroBoost:827614332808462346>")

    if (message.content.toLowerCase().includes('salut') || (message.content.toLowerCase().includes('cc') || (message.content.toLowerCase().includes('bonjour'))))
        message.react("👋") 


// embed aide

        var embed = new Discord.MessageEmbed()

        .setTitle('Commandes général de Lhorino ')
        .setDescription('\` Mon prefix est \" ! \" \` ')
        .setColor('#C6D8C5')
        .addField('**  Les radios**', '\` !radios \`' , true)
        .addField('**  Modération **', ' \` Bientôt disponible\` ')
        .addField('**  Fun **', '\` !Fun \`')
        .setFooter("Ledidorihno#3994")
        .setTimestamp()

    if (message.content === prefix + "aide") {
        message.reply(embed)
    }

// embed radio
   
    var embed = new Discord.MessageEmbed()

        .setTitle('Commandes radios de Lhorino ')
        .setDescription('__Nous possédons 6 radios différentes __ ')
        .setColor('#64FF33')
        .addField('**  Radio NRJ**', '\` !Nrj \`  <:logonrj:827661439069061120>', true)
        .addField('**  Radio Funradio**', '\` !Funradio \`  <:funnnnnraddddiiiooo:827660914713952278>')
        .addField('**  Radio Skyrock **', '\` !Skyrock  \`   <:skrcock:827660543699320853>')
        .addField('**  Radio Mouv **', '\` !Mouv  \`  <:mouuuuv:827660037769920522>')
        .addField('**  Radio Franceinfo **', '\` !Franceinfo \`  <:015:827658956411371550> ')
        .addField('**  Radio RTL **', '\` !RTL \`  <:1200pxRTL_logo:827662169846972457>')
        .setFooter("Ledidorihno#3994")
        .setTimestamp()

    if (message.content === prefix + "radios") {
        message.reply(embed)
    }
// EMBED FUN 

    var embed = new Discord.MessageEmbed()

        .setTitle('Commandes général de Lhorino ')
        .setDescription('__Nous possédons x commandes Fun __ ')
        .setColor('#3374FF')
        .addField('**   Savoir le nombre de membres ? **', '\` !membres \`', true)
        .addField('**   Savoir le nom du propriétaire du serveur ? **', '\` !propriétaire du serveur \` ')
        .addField('**   Savoir le nom du serveur  **', '\` !nom du serveur \` ')
        .addField('**   Savoir son ping   **', '\` !ping \` ')
        .addField('**   Savoir tout les emojis présent sur le serveur **', '\` !emoji \`')
        .addField('**   Avoir sa avatar   **', '\` !avatar \` ')
        .addField('**   Une blague**', '\` !blague \`')
        .setFooter("Ledidorihno#3994")
        .setTimestamp()


        if (message.content === prefix + "Fun") {
        message.reply(embed)
    }


});


bot.on('message', async message => {
    if (message.author.bot) return;


// blagues
    if (message.content == prefix + ('blague')) {

        var blague = [
            "`Si une voiture circule à 40 km/h et prend un virage à 60 degrés à droite, quelle est la roue qui tourne le moins vite ?` \n\ **C'est la roue de secours.**",
            "`Que plante un agriculteur en hiver ?` \n\ **Un champ d'ail.**",
            "`Que font les vaches quand elles ferment les yeux ? \n\ **Du lait concentré !**",
            "`Quel oiseau est attiré par l'odeur du miel ? C'est l'autruche.` \n\ **Parce qu'à côté d'une ruche, il y a souvent une aut' ruche.**",
            "`Deux poules discutent et l'une dit à l'autre : 'Comment vas-tu ma cocotte ?'` \n\ **'Pas très bien, je crois que je couve quelque chose !'**", // 5
            "`Quelle mamie fait peur aux voleurs ?` \n\ **Mamie Traillette.** ",
            "`Pourquoi est-ce c'est difficile de conduire dans le Nord ?` \n\ **Parce que les voitures arrêtent PAS DE CALER.** ",
            "`Comment est-ce que la chouette sait que son mari fait la gueule ?` \n\ **Parce qu’HIBOUDE**",
            "`Pourquoi est-ce qu'on met tous les crocos en prison ?` \n\ **Parce que les crocos dealent.**",
            "`Pourquoi dit-on que les poissons travaillent illégalement ?` \n\ **Parce qu’ils n’ont pas de FISH de paie.** ", // 10
            "`Quel est le jambon que tout le monde déteste ?` \n\ **Le sale ami**",
            "`Que dit une imprimante dans l'eau ?` \n\ **J’ai papier**",
            "` Pourquoi est-ce que les moutons aiment le chewing-gum?` \n\ **Parce que c’est bon pour la laine** ",

        ]
        var reponse = blague[Math.floor(Math.random() * blague.length)];
        message.channel.send(reponse).then().catch(console.error);
    }


    // RADIO //
    if (message.channel == 817057592404082719 )
    {
    if (message.content == prefix + ('Funradio'))
        if (message.member.voice.channel) {
            message.channel.send('<a:dfsdfsfsdfdsf:827657362461949982>** Funradio a bien été lancer**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("https://funados.ice.infomaniak.ch/funados.mp3")
        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }
        

    if (message.content == prefix + ('Nrj'))
        if (message.member.voice.channel) {
            message.channel.send('<a:dfsdfsfsdfdsf:827657362461949982>**  NRJ a bien été lancer**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("http://streamingp.shoutcast.com/NRJ")
        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }


    if (message.content == prefix + ('RTL'))
        if (message.member.voice.channel) {
            message.channel.send('<a:dfsdfsfsdfdsf:827657362461949982>** RTL a bien été lancer**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("http://icecast.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg")
        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }



    if (message.content == prefix + ('Skyrock'))
        if (message.member.voice.channel) {
            message.channel.send('<a:dfsdfsfsdfdsf:827657362461949982>** Skyrock a bien été lancer**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("http://icecast.skyrock.net/s/natio_mp3_128k")
        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }

    if (message.content == prefix + ('Mouv'))
        if (message.member.voice.channel) {
            message.channel.send('<a:dfsdfsfsdfdsf:827657362461949982>** Mouv a bien été lancer**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("http://icecast.radiofrance.fr/mouv-midfi.mp3")
        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }

    if (message.content == prefix + ('franceinfo'))
        if (message.member.voice.channel) {
            message.channel.send('<a:dfsdfsfsdfdsf:827657362461949982>**Franceinfo a bien été lancer**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("http://icecast.radiofrance.fr/franceinfo-hifi.aac")
        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }

    

    if (message.content == prefix + ('sonnerie'))
        if (message.member.voice.channel) {
            message.channel.send('🕭 **La Sonnerie arrive ..**  <a:ea849e64a6764025962c2dc16d20d07c:827656365186744330>');
            const connection = await message.member.voice.channel.join();
            connection.play(ytdl('https://www.youtube.com/watch?v=36ZAHmC4Bbc&ab_channel=MarieLol', { filter: 'audioonly' }));


        } else {
            message.reply('Vous devez d\'abord rejoindre un canal vocal !');
        }
    }

});








bot.login('ODI0MzY1NTU0NDQ4OTkwMjUw.YFuUQA.EidXYNPoGmI794A46aEdQckjfhI');
console.log('|------> Demarré 👌')