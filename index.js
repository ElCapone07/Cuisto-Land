const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("&");
var randnum = 0;

bot.on("ready", () => {
    
        bot.user.setPresence({game: {name: `Cuisiner des petits plats 🍰 !`}})

            console.log(bot.users.size,'membres', bot.guilds.size,'serveurs');
            
});

bot.login(process.env.TOKEN)
bot.on('message', message => {

        if (message.content === prefix + "menus"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menus_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__Menus de {~Cuisto~Land~} !__ ",":fork_and_knife:  `&menu1` \n - C'est le menu Burger !")
                .addField(":fork_and_knife:  `&menu2` ","- Cest le menu P'tit Dej !")
                .addField(":fork_and_knife:  `&menu3` ","- C'est le menu Enfants !")
                .addField(":fork_and_knife:  `&menu4` ","- C'est le menu Ski !")
                .addField(":fork_and_knife:  `&menu5` ","- C'est le menu Pizza !")
                .addField(":fork_and_knife:  `&menu6` ","- C'est le menu Patates !")
                .addField(":fork_and_knife:  `&menu7` ","- C'est le menu Barbeuc !")
                .addField(":fork_and_knife:  `&menu8` ","- C'est le menu Bacon !")
                .addField(":fork_and_knife:  `&menu9` ","- C'est le menu Végétarien !")
                .addField(":fork_and_knife:  `&menu10` ","- C'est le menu Express !")
                .addField(":fork_and_knife:  `&menu11` ","- C'est le menu P'tit Gourmand !")
                .addField(":fork_and_knife:  `&menu12` ","- C'est le menu Couscous !")
                .addField(":fork_and_knife:  `&menu13` ","- C'est le menu P'tit Golden !")
                .addField(":fork_and_knife:  `&menu14` ","- C'est le menu VIP !")
                .addField(":fork_and_knife:  `&menu15` ","- C'est le menu Bretagne !")
                .addField(":fork_and_knife:  `&menu16` ","- C'est le menu Tacos !")
                .addField(":fork_and_knife:  `&menu17` ","- C'est le menu Harry Potter !")
                .addField(":fork_and_knife:  `&menu18` ","- C'est le menu Pâtes !")
                .addField(":fork_and_knife:  `&menu19` ","- C'est le menu Fruits De Mer !")
                .addField(":fork_and_knife:  `&menu20` ","- C'est le menu Geek !")
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
             message.channel.sendEmbed(menus_embed)
        }

        if (message.content === prefix + 'help'){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var helpMP_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__Commandes de {~Cuisto~Land~} !__","- `&bienvenue` : Vous souhaite la bienvenue sur le restaurant !\n- `&menus` : Donne la liste des menus disponibles !\n- `&menumystere` : Vous propose un menu !\n- `&oui` : Confirme votre menu et vous le donne !\n- `&non` : Annule votre menu ! \n- `&caisses` : Vous fait passer aux caisses !\n- `&bye` : Vous dis à bientôt sur le restaurant !\n- `&recettes` : Donne la liste des recettes disponibles !\n- `&description` : Donne la description du bot !\n- `&bot` : Donne les informations du bot !\n- `&blabla [message]` : Fait parler le bot pour vous !\n- `&help` : Affiche la liste des commandes du bot en MP !\n- `&hhelp` : Affiche la liste des commandes du bot dans le salon !")
                .setThumbnail('https://cdn.discordapp.com/attachments/337752882168332288/396350266904936448/FINI_1.jpg')
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.author.sendMessage(helpMP_embed)
                message.channel.sendMessage("Help envoyé en message privé ! :ok_hand:")
        }

        if (message.content === prefix + 'hhelp'){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var helpS_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__Commandes de {~Cuisto~Land~} !__","- `&bienvenue` : Vous souhaite la bienvenue sur le restaurant !\n- `&menus` : Donne la liste des menus disponibles !\n- `&menumystere` : Vous propose un menu !\n- `&oui` : Confirme votre menu et vous le donne !\n- `&non` : Annule votre menu !\n- `&caisses` : Vous fait passer aux caisses !\n- `&bye` : Vous dis à bientôt sur le restaurant !\n- `&recettes` : Donne la liste des recettes disponibles !\n- `&description` : Donne la description du bot !\n- `&bot` : Donne les informations du bot !\n- `&blabla [message]` : Fait parler le bot pour vous !\n- `&help` : Affiche la liste des commandes du bot en MP !\n- `&hhelp` : Affiche la liste des commandes du bot dans le salon !")
                .setThumbnail('https://cdn.discordapp.com/attachments/337752882168332288/396350266904936448/FINI_1.jpg')
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.send(helpS_embed)
        }       
                
        if (message.content === prefix + "bot"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var bot_Embed = new Discord.RichEmbed()
                .setColor('#'+ (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField(":flag_fr: __Nom du Bot :__","{~Cuisto~Land~}#1988 ", true)
                .addField(":robot: __Version du Bot :__","1.1.1")
                .addField(":family: __Créateurs :__","Jojojordyland et L'équipe Food :cake: ")
                .addField(":date: __Date de creation :__","Dimanche 11 Decembre 2017")
                .addField(":books: __Library :__","Discord.js")
                .addField(`:ping_pong: __Ping :__`,` ${Date.now() - message.createdTimestamp} ms`, true)
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
            message.channel.send(bot_Embed)
        }

         if (message.content === prefix + "menu1"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu1_embed = new Discord.RichEmbed()
                 .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                 .addField("__C'est le menu Burger !__","Dans ce menu il y a : \n Un Burger \n Une Grande Frite \n Une Boisson au Choix ! \n **Ce Menu coûte 6,70€ !**")
                 .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                 .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
             message.channel.send(menu1_embed)
        }   

        if (message.content === prefix + "menu2"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu2_embed = new Discord.RichEmbed()
                  .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                  .addField("__C'est le menu P'tit dej !__","Dans ce menu il y a : \n Des Viennoiseries \n Un café ou un jus !\n **Ce menu coûte 5,35€ !**")
                  .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                  .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
            message.channel.sendEmbed(menu2_embed)
        }

        if (message.content === prefix + "menu3"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
              var menu3_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__C'est le menu Enfants !__","Dans ce menu il y a : \n Des lasagnes \n Une boisson au choix \n Une glace ou un yaourt !\n **Ce menu coûte 4,22€ !**")
                .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
            message.channel.sendEmbed(menu3_embed)
        }
            
        if (message.content === prefix + "menu4"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
              var menu4_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__C'est le menu Ski !__","Dans ce menu il y a : \n Un plateau de charcuterie \n Une fondue ou gratin \n Une boisson au choix !\n **Ce menu coûte 6,15€ !**")
                .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.sendEmbed(menu4_embed)
        }
        
        if (message.content === prefix + "menu5"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
              var menu5_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__C'est le menu Pizza !__","Dans ce menu il y a : \n Une pizza au choix \n Une boisson au choix \n Macarons aux choix !\n **Ce menu coûte 9,45€ !**")
                .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")  
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.sendEmbed(menu5_embed)
        }

        if (message.content === prefix + "menu6"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu6_embed = new Discord.RichEmbed()
              .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
              .addField("__C'est le menu Patates !__","Dans ce menu il y a : \n Un gratin \n Une boisson au choix \n Des frites ou des potatoes !\n **Ce menu coûte 7,65€ !**")
              .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
              .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
              message.channel.sendEmbed(menu6_embed)
        } 
    
        if (message.content === prefix + "menu7"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu7_embed = new Discord.RichEmbed()
              .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
              .addField("__C'est le menu Barbeuc !__","Dans ce menu il y a :  \n Des brochettes \n Des merguez ou un steak haché \n Une boisson au choix !\n **Ce menu coûte 8,50€ !**")
              .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
              .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
              message.channel.sendEmbed(menu7_embed)
        }
    
        if (message.content === prefix + "menu8"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu8_embed = new Discord.RichEmbed()
              .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
              .addField("__C'est le menu Bacon !__","Dans ce menu il y a : \n Un burger au bacon \n Des frites \n Une boisson au choix \n Un gateau au chocolat !\n **Ce menu coûte 9,50€ !**")
              .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
              .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
            message.channel.sendEmbed(menu8_embed)
        }
      
       if (message.content === prefix + "menu9"){
        if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var menu9_embed = new Discord.RichEmbed()
             .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
             .addField("__C'est le menu Végétarien !__","Dans ce menu il y a : \n Un hamburger Végan\n Une boisson au choix \n Une salade de fruits !\n **Ce menu coûte 3,50€ !**")
             .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
             .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
             message.channel.sendEmbed(menu9_embed)
        }
    
       if (message.content === prefix + "menu10"){
        if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var menu10_embed = new Discord.RichEmbed()
             .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
             .addField("__C'est le menu Express !__","Dans ce menu il y a : \n Un Samdwich au choix ou salade \n Des chips ou dessert \n Une boisson au choix !\n **Ce menu coûte 6,40€ !**")
             .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
             .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
             message.channel.sendEmbed(menu10_embed)
        }
    
        if (message.content === prefix + "menu11"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var menu11_embed = new Discord.RichEmbed()
              .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
              .addField("__C'est le menu P'tit Gourmand !__","Dans ce menu il y a : \n De la viande \n De la sauce aux bleu ou poivre ou Salade César \n Ou Pizza \n Une boisson au choix \n Trois desserts au choix !\n **Ce menu coûte 7,85€ !**")
              .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
              .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL); 
              message.channel.sendEmbed(menu11_embed)
        }
    
        if (message.content === prefix + "menu12"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var menu12_embed = new Discord.RichEmbed()
              .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
              .addField("__C'est le menu Couscous !__","Dans ce menu il y a : \n Du couscous \n Une boisson au choix \n Un sablé breton !\n **Ce menu coûte 4,75€ !**")
              .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
              .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
              message.channel.sendEmbed(menu12_embed)
        }
        
        if (message.content === prefix + "menu13"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu13_embed = new Discord.RichEmbed()
            .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
            .addField("__C'est le menu P'tit Golden !__","Dans ce menu il y a : \n Une salade fraiche  \n Un burger \n Des frites salées \n Un fondant au chocolat !\n **Ce menu coûte 5,60€ !**")
            .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
            .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
           message.channel.sendEmbed(menu13_embed)
        }

        if (message.content === prefix + "menu14"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var menu14_embed = new Discord.RichEmbed()
           .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
           .addField("__C'est le menu VIP !__","Dans ce menu il y a : \n Du caviar \n Une boisson au choix \n Un saint-honoré !\n **Ce menu coûte 15€ !**")
           .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
           .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
         message.channel.sendEmbed(menu14_embed)
        }

        if (message.content === prefix + "menu15"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu15_embed = new Discord.RichEmbed()
            .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
            .addField("__C'est le menu Bretagne !__","Dans ce menu il y a : \n Un Kig Ha Farz \n Une boissons aux choix \n Une galette bretonne !\n **Ce menu coûte 5,75€ !**")
            .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
            .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
         message.channel.sendEmbed(menu15_embed)
        }

        if (message.content === prefix + "menu16"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
             var menu16_embed = new Discord.RichEmbed()
           .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
           .addField("__C'est le menu Tacos !__","Dans ce menu il y a : \n Un Tacos \n Une boisson au choix \n Un  Tacos sucré ! \n **Ce menu coûte 5,75€ !**")
           .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
           .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
         message.channel.sendEmbed(menu16_embed)
        }

        if (message.content === prefix + "menu17"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu17_embed = new Discord.RichEmbed()
           .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
           .addField("__C'est le menu Harry Potter !__","Dans ce menu il y a : \n Une tarte à la mélasse \n Une bière au beurre \n Un dragées surprise de Bertie Crochue \n Ou Chocogrenouille !\n  **Ce menu coûte 5,28€ !**")
           .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
           .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
        message.channel.sendEmbed(menu17_embed)
        }

        if (message.content === prefix + "menu18"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var menu18_embed = new Discord.RichEmbed()
          .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
          .addField("__C'est le menu  Pâtes !__","Dans ce menu il y a : \n Des pâtes a la carbonara \n Ou des pâtes bolognaise \n Une boissons au choix \n Des pancakes !\n **Ce menu coûte 7,20€ !**")
          .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
          .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
        message.channel.sendEmbed(menu18_embed)
        } 

        if (message.content === prefix +"menu19"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu19_embed = new Discord.RichEmbed()
               .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
               .addField("__C'est le menu Fruits De Mer !__","Dans ce menu il y a : \n Des crevettes \n Des huîtres ou des moules \n Une boisson au choix !\n **Ce menu coûte 7€ !**")
               .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
               .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
            message.channel.sendEmbed(menu19_embed)
        }

        if (message.content === prefix +"menu20"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var menu20_embed = new Discord.RichEmbed()
               .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
               .addField("__C'est le menu Geek !__","Dans ce menu il y a : \n Un Burger \n Des frites avec mayonnaise et ketchup \n 1L5 de coca \n Ou une boisson au choix !\n **Ce menu coûte 8,78€ !**")
               .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
               .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
            message.channel.sendEmbed(menu20_embed)
        }

        if (message.content === prefix +"bienvenue"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var bienvenue_embed = new Discord.RichEmbed()
               .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
               .addField("__ Bienvenue sur le restaurant du serveur __","Vous désirez quelle menu ? ")
               .addField("Faites `&menus` pour voir tout les menus !"," `&help` envoi les commandes du bot en message privé !")
               .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
        message.channel.sendEmbed(bienvenue_embed)
        }

        if (message.content.startsWith(prefix + "blabla")) {
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            if (message.channel.type === 'dm') return;
          if (!message.author.id === "277543510079438848") {
                return message.channel.send(" Je ne peux pas afficher ton message.").catch(console.error)
                .then(m => m.delete(5000)
                  )
              };
              message.delete();
                message.channel.send(message.content.split(' ').slice(1).join(' '))
        }

        if (message.content === prefix +"oui"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var oui_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("Excellent choix je vous prépare ça !","__:fork_and_knife: Voici votre menu ! :fork_and_knife:__\n Faites `&caisses` après svp")
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
        message.channel.sendEmbed(oui_embed)
        } 

        if (message.content === prefix +"non"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var non_embed = new Discord.RichEmbed()
                .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                .addField("__D'accord nous vous conseillons de choisir un autre menu !__"," Faites `&menus` pour choisir un nouveau menu !")
                .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.sendEmbed(non_embed)
        }

        if  (message.content === prefix +"caisses"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var caisses_embed = new Discord.RichEmbed()
                 .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                 .addField("__Mettez le prix du menu dans #caisses__","Puis mettez `&bye` !")
                 .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
        message.channel.sendEmbed(caisses_embed)
        }

        if (message.content === prefix +"bye"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
            var bye_embed = new Discord.RichEmbed()
            .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))  
            .addField("__A bientôt dans le restaurant :wave:__","Nous espérons que vous avez passer un bon moment et que vous avez bien manger dans notre restaurant :spaghetti: !")
            .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
        message.channel.sendEmbed(bye_embed)
        }

        if (message.content === prefix +"description"){
            if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
           var description_embed = new Discord.RichEmbed()
               .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
               .addField("**Vous avez un petit creux ?**","Venez déguster un bon Hamburger ou partager une fondue !")
               .addField("**Pas le temps ?**","Des menus express existent !")
               .addField("**Vous y trouverez forcément votre bonheur !**","Pas besoin d'un membre du staff pour vous apporter votre repas,{~Cuisto~Land~} est là pour vous servir !")
               .addField("*Un bot des plus réalistes créé par Jojojordyland et L'équipe Food :cake: , qui va satisfaire tous les gourmands et les gourmandes !**","Bon app tout le monde :pizza: !")
               .setFooter("Description Réalisée par 🔪La Psychopathe🔪")
           message.channel.sendEmbed(description_embed)
        }
 
             if (message.content === prefix + "menumystere"){
            random();

            if (randnum == 1 ){
                message.content === prefix + "menu1"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu1_embed = new Discord.RichEmbed()
                         .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                         .addField("__C'est le menu Burger !__","Dans ce menu il y a : \n Un Burger \n Une Grande Frite \n Une Boisson au Choix !\n **Ce Menu coute 6,70€ !**")
                         .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                         .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(menu1_embed)
                }

            if (randnum == 2 ){
                message.content === prefix + "menu2"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu2_embed = new Discord.RichEmbed()
                          .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                          .addField("__C'est le menu P'tit dej !__","Dans ce menu il y a : \n Des Viennoiseries \n Un café ou un jus !\n **Ce menu coute 5,35€ !**")
                          .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                          .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(menu2_embed)
                }
                      
            if (randnum == 3){
                message.content === prefix + "menu3"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu3_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Enfants !__","Dans ce menu il y a : \n Des lasagnes \n Une boisson au choix \n Une glace ou un yaourt !\n **Ce menu coute 4,22€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                  message.channel.sendEmbed(menu3_embed)
            }
            
            if (randnum == 4 ){
                message.content === prefix + "menu4"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu4_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Ski !__","Dans ce menu il y a : \n Un plateau de charcuterie \n Une fondue ou gratin \n Une boisson au choix !\n **Ce menu coute 6,15€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                      message.channel.sendEmbed(menu4_embed)
            }

            if (randnum == 5){
                message.content === prefix + "menu5"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu5_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Pizza !__","Dans ce menu il y a : \n Une pizza au choix \n Une boisson au choix \n Macarons aux choix !**Ce menu coute 9,45€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                      message.channel.sendEmbed(menu5_embed)
              }

            if (randnum == 6){
                message.content === prefix + "menu6"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu6_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Patates !__","Dans ce menu il y a : \n Un gratin \n Une boisson au choix \n Des frites ou des potatoes !\n **Ce menu coute 7,65€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                      message.channel.sendEmbed(menu6_embed)
                } 

            if (randnum == 7){
                message.content === prefix + "menu7"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu7_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Barbeuc !__","Dans ce menu il y a :  \n Des brochettes \n Des merguez ou un steak haché \n Une boisson au choix !\n **Ce menu coute 8,50€ !**") 
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                      message.channel.sendEmbed(menu7_embed)
                }

            if (randnum == 8){
                message.content === prefix + "menu8"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu8_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Bacon !__","Dans ce menu il y a : \n Un burger au bacon \n Des frites \n Une boisson au choix \n Un gateau au chocolat !\n **Ce menu coute 9,50€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(menu8_embed)
                }

            if (randnum == 9){
                message.content === prefix + "menu9"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu9_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Végétarien !__","Dans ce menu il y a : \n Un hamburger Végan \n Une boisson au choix \n Une salade de fruits !\n **Ce menu coute 3,50€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                      message.channel.sendEmbed(menu9_embed)
                 }

            if (randnum == 10){
                message.content === prefix + "menu10"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu10_embed = new Discord.RichEmbed()
                      .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                      .addField("__C'est le menu Express !__","Dans ce menu il y a : \n Un Samdwich au choix ou salade \n Des chips ou dessert \n Une boisson au choix !\n **Ce menu coute 6,40€ !**")
                      .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                      .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                      message.channel.sendEmbed(menu10_embed)
                 }

            if (randnum == 11){
                message.content === prefix + "menu11"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu11_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__C'est le menu P'tit Gourmand !__","Dans ce menu il y a : \n De la viande \n De la sauce aux bleu ou poivre ou Salade César \n Ou Pizza \n Une boisson au choix \n Trois desserts au choix !\n **Ce menu coute 7,85€ !**")
                       .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                       message.channel.sendEmbed(menu11_embed)
                 }

            if (randnum == 12){
                message.content === prefix + "menu12"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu12_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__C'est le menu Couscous !__","Dans ce menu il y a : \n Du couscous \n Une boisson au choix \n Un sablé breton !\n **Ce menu coute 4,75€ !**")
                       .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                       message.channel.sendEmbed(menu12_embed)
                 }

            if (randnum == 13){
                message.content === prefix + "menu13"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu13_embed = new Discord.RichEmbed()
                    .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                    .addField("__C'est le menu P'tit Golden !__","Dans ce menu il y a : \n Une salade fraiche  \n Un burger \n Des frites salées \n Un fondant au chocolat !\n **Ce menu coute 5,60€ !**")
                    .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                    .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                   message.channel.sendEmbed(menu13_embed)
                }

            if (randnum == 14){
                message.content === prefix + "menu14"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu14_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__C'est le menu VIP !__","Dans ce menu il y a : \n Du caviar \n Une boisson au choix \n Un saint-honoré !\n **Ce menu coute 15€ !**")
                       .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !") 
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.sendEmbed(menu14_embed)
                }

            if (randnum == 15){
                message.content === prefix + "menu15"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu15_embed = new Discord.RichEmbed()
                    .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                    .addField("__C'est le menu Bretagne !__","Dans ce menu il y a : \n Un Kig Ha Farz \n Une boissons aux choix \n Une galette bretonne !\n **Ce menu coute 5,75€ !**")
                    .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                    .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(menu15_embed)
                }

            if (randnum == 16){
                message.content === prefix + "menu16"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu16_embed = new Discord.RichEmbed()
                  .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                  .addField("__C'est le menu Tacos !__","Dans ce menu il y a : \n Un Tacos \n Une boisson au choix \n Un  Tacos sucré !\n**Ce menu coute 5,75€ !**")
                  .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                  .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.sendEmbed(menu16_embed)
               }

            if (randnum == 17){
                message.content === prefix + "menu17"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu17_embed = new Discord.RichEmbed()
                   .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                   .addField("__C'est le menu Harry Potter !__","Dans ce menu il y a : \n Une tarte à la mélasse \n Une bièraubeurre \n Un dragées surprise de Bertie Crochue \n Ou Chocogrenouille !\n **Ce menu coute 5,28€ !**")
                   .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                   .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                message.channel.sendEmbed(menu17_embed)
                }

            if (randnum == 18){
                message.content === prefix + "menu18"
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu18_embed = new Discord.RichEmbed()
                   .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                   .addField("__C'est le menu  Pâtes !__","Dans ce menu il y a : \n Des pâtes a la carbonara \n Ou des pâtes bolognaise \n Une boissons au choix \n Des pancakes !\n **Ce menu coute 7,20€ !**")
                   .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                   .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                 message.channel.sendEmbed(menu18_embed)
                }

                if (randnum == 19){
                   message.content === prefix +"menu19"
                   if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu19_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__C'est le menu Fruits De Mer !__","Dans ce menu il y a : \n Des crvettes \n Des huitres ou des moules \n Une boissons au choix !\n  **Ce menu coute 7€!**")
                       .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(menu19_embed)
                }

                if (randnum == 20){
                    message.content === prefix +"menu20"
                    if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var menu20_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__C'est le menu Geek !__","Dans ce menu il y a : \n Un Burger \n Des frites avec mayonnaise et ketchup \n 1L5 de coca \n Ou une boisson au choix !\n **Ce menu coûte 8,78€ !**")
                       .addField("Vous avez sélectionner ce menu ?","Faites `&oui` pour confirmer ou faites `&non` pour annuler ce menu !")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(menu20_embed)
                }
        }  
function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(15);
    randnum = Math.floor(Math.random()* (max - min+1) + min );
                } 
            
            if (message.content === prefix + "recettes"){
                if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                var recettes_embed = new Discord.RichEmbed()
                    .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                    .addField("__Recettes de {~Cuisto~Land~} !__ ","\n :fork_and_knife: `&recette1`\n - Vous donne une recette de Crêpes !")
                    .addField(":fork_and_knife: `&recette2` "," - Vous donne une recette de Gâteau au chocolat !")
                    .addField(":fork_and_knife: `&recette3` "," - Vous donne une recette de Brownies !")
                    .addField(":fork_and_knife: `&recette4` "," - Vous donne une recette de Cookie Donuts !")
                    .addField(":fork_and_knife: `&recette5` "," - Vous donne une recette de Fraisier !")
                    .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                    message.channel.sendEmbed(recettes_embed)
                }

                 if (message.content === prefix +"recette1"){
                    if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var recette1_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__Voici une recette de Crêpes !__ (Recettte by Marmiton)","__Temps :__ 30 min , __Crêpes :__ 15 ~")
                       .addField("__Ingrédients :__","300 g de farine , 3 oeufs entiers , 3 cuillères à soupe de sucre , 2 cuillères à soupe d' huile , 50 g de beurre fondu , 60 cl de lait.")
                       .addField("__Ustensiles :__","1 louche , 1 fouet , 1 cuillère en bois , 1 poêle.")
                       .addField("__Etape 1 :__","Mettre la farine dans une terrine et former un puits.")
                       .addField("__Etape 2 :__","Y déposer les oeufs entiers, le sucre, l'huile et le beurre.")
                       .addField("__Etape 3 :__","Mélanger délicatement avec un fouet en ajoutant au fur et à mesure le lait. La pâte ainsi obtenue doit avoir une consistance d'un liquide légèrement épais.")
                       .addField("__Etape 4 :__","Faire chauffer une poêle antiadhésive et la huiler très légèrement. Y verser une louche de pâte, la répartir dans la poêle puis attendre qu'elle soit cuite d'un côté avant de la retourner. Cuire ainsi toutes les crêpes à feu doux.")
                       .setThumbnail("https://cdn.discordapp.com/attachments/337752882168332288/397088453851873280/ori-crepe-nature-lineadiet-80.jpg")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                  message.channel.sendEmbed(recette1_embed)
                }

                if (message.content === prefix +"recette2"){
                    if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var recette2_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__Voici une recette de Gâteau au chocolat !__ (Recettte by Marmiton)","__Préparation :__ 10 min , __Cuisson :__ 30 min , __Personnes :__ 6")
                       .addField("__Ingrédients :__","200 g de chocolat noir , 100 g de beurre + une noix pour le moule , 3 oeufs , 50 g de farine , 100 g de sucre en poudre.")
                       .addField("__Ustensiles :__"," 1 grille à gâteaux , 1 moule à manquer , 1 four , 1 casserole , 1 saladier.")
                       .addField("__Etape 1 :__","Préchauffez votre four à 180°C (thermostat 6).")
                       .addField("__Etape 2 :__","Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux à feu très doux.")
                       .addField("__Etape 3 :__","Dans un saladier, ajoutez le sucre, les oeufs, la farine. Mélangez.")
                       .addField("__Etape 4 :__","Ajoutez le mélange chocolat/beurre. Mélangez bien.")
                       .addField("__Etape 5 :__","Beurrez et farinez votre moule puis y versez la pâte à gâteau.")
                       .addField("__Etape 6 :__","Faites cuire au four environ 20 minutes.")
                       .addField("__Etape 7 :__","A la sortie du four le gâteau ne paraît pas assez cuit. C'est normal, laissez-le refroidir puis démoulez- le.")
                       .setThumbnail("https://cdn.discordapp.com/attachments/337752882168332288/397054087998210048/i91729-gateau-simple-au-chocolat.jpg")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                       message.channel.sendEmbed(recette2_embed)
                }
                
                if (message.content === prefix +"recette3"){
                    if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                    var recette3_embed = new Discord.RichEmbed()
                       .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                       .addField("__Voici une recette de Brownies !__ (Recettte by Marmiton)","__Préparation :__ 10 min , __Cuisson :__ 15 min, __Personnes :__ 6")
                       .addField("__Ingrédients :__","250 g de chocolat pâtissier , 1 sachet de sucre vanillé , 150 g de beurre , 3 oeufs ,150 g de sucre , 60 g de farine , Sel.")
                       .addField("__Ustensiles :__"," 1 saladier , 	1 four.")
                       .addField("__Etape 1 :__","Faites fondre le chocolat cassé en morceaux avec le beurre.")
                       .addField("__Etape 2 :__","Pendant ce temps, battez les oeufs avec le sucre jusqu'à ce que le mélange blanchisse.")
                       .addField("__Etape 3 :__","Ajoutez la farine, le sucre vanillé, et ajoutez le chocolat.")
                       .addField("__Etape 4 :__","Versez le tout dans un moule, et enfournez à 180°C (thermostat 6)pendant 15 min...")
                       .setThumbnail("https://cdn.discordapp.com/attachments/337752882168332288/397060005926273025/26634_w420h344c1cx2736cy1824.jpg")
                       .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                       message.channel.sendEmbed(recette3_embed)
                }
                    
                if (message.content === prefix +"recette4"){
                    if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                        var recette4_embed = new Discord.RichEmbed()
                           .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                           .addField("__Voici une recette de Cookie Donuts !__ (Recettte by Marmiton)","__Préparation :__ 15 min , __Cuisson :__ 10 min, __Personnes :__ 2")
                           .addField("__Ingrédients :__","**Pour la pâte à cookie :** 75 g de beurre mou , 1 oeuf , 85 g de sucre , 1 sachet de sucre vanillé , 150 g de farine , 100 g de chocolat noir , 1 cuillère à café de Sel , 1 cuillère à café de levure chimique.**Pour le glaçage :** Chocolat , Crème liquide.")
                           .addField("__Ustensiles :__"," 1 four , 1 couteau , 1 saladier , 1 cuillère en bois , 1 casserole.")
                           .addField("__Etape 1 :__","Préparation de la pâte à cookie.")
                           .addField("__Etape 2 :__","Préchauffer le four à 180°C (thermostat 6).")
                           .addField("__Etape 3 :__","Détailler le chocolat en pépites.")
                           .addField("__Etape 4 :__","Dans un saladier, mettre 75 g de beurre, le sucre, l'oeuf entier, la vanille et mélanger le tout.")
                           .addField("__Etape 5 :__","Ajouter petit à petit la farine mélangée à la levure, le sel et le chocolat.")
                           .addField("__Etape 6 :__","Enrouler la pâte à cookie sur les moules à donuts / bagels.")
                           .addField("__Etape 7 :__","Enfourner 10 minutes.")
                           .addField("__Etape 8 :__","Préparation du glaçage.")
                           .addField("__Etape 9 :__","Faire fondre le chocolat dans une casserole avec la crème liquide.")
                           .addField("__Etape 10 :__","Démouler les cookies et tremper une des 2 faces dans le chocolat.")
                           .addField("__Etape 11 :__","Laisser figer avant de servir.")
                           .setThumbnail("https://cdn.discordapp.com/attachments/337752882168332288/401700621268287498/69337_w420h344c1cx2000cy3000.jpg")
                           .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                           message.channel.sendEmbed(recette4_embed)
                }

                if (message.content === prefix +"recette5"){
                    if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
                         var recette5_embed = new Discord.RichEmbed()
                             .setColor('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
                            .addField("__Voici une recette de Fraisier !__ (Recettte by Marmiton)","__Préparation :__ 45 min  , __Cuisson :__ 25 min, __Personnes :__ 6")
                            .addField("__Ingrédients :__","**Pour la génoise :** 5 oeufs , 130 g de sucre , 30 g de farine , 70 g de maïzena , 1/2 sachet de levure , 1 pincée de Sel.**Pour la garniture :** 35 cl de lait , 4 jaunes d'oeuf , 27 g de maïzena , 50 g de sucre , 150 g de beurre , 500 g de fraises , 12 fraises des bois (pour la décoration) , Framboise (pour la décoration) , 200 g de pâtes d'amande rose , feuille de pâte d'amande verte , 10 cl de sirops de sucre de canne , 4 cuillères à soupe de kirsch , Sucre glace.")
                            .addField("__Ustensiles :__","	1 four , 1 fouet , 1 saladier , 1 casserole , 1 robot , 1 couteau.")
                            .addField("__Etape 1 :__","Prévoir 6 h de réfrigération.")
                            .addField("__Etape 2 :__","Préchauffez le four à thermostat 6 (180°C).")
                            .addField("__Etape 3 :__","Battez les oeufs entiers avec le sucre dans un saladier. Placez le saladier dans un bain-marie modéré et continuez de fouetter le mélange jusqu'à ce qu'il triple de volume. Retirez du feu et continuez de battre jusqu'à refroidissement.")
                            .addField("__Etape 4 :__","Incorporez la farine et le beurre fondu. Versez dans un moule carré, beurré et fariné. Enfournez et laissez cuire 25 à 30mn.")
                            .addField("__Etape 5 :__","Démoulez la génoise tiède sur une grill.")
                            .addField("__Etape 6 :__","Portez le lait à ébullition. Battez les jaunes d'oeufs et le sucre jusqu'à blanchiment du mélange, puis incorporez la maïzena. Délayez avec le lait, transvasez la crème dans une casserole à fond épais.")
                            .addField("__Etape 7 :__","Portez à ébullition et remuez 1mn.")
                            .addField("__Etape 8 :__","Hors du feu, incorporez le tiers du beurre coupé en morceaux avec la moitié du kirsch. Saupoudrez de sucre glace et laissez refroidir cette crème pâtissière.")
                            .addField("__Etape 9 :__","Battez au robot le reste du beurre en pommade, puis ajoutez peu à peu la crème pâtissière froide.")
                            .addField("__Etape 10 :__","Battez jusqu'à ce que le mélange soit lisse et homogène, puis faites-le raffermir 15 mn au frais.")
                            .addField("__Etape 11 :__","Lavez, séchez et équeutez les fraises. Réservez 5 cuillères à soupe de crème pour la finition.")
                            .addField("__Etape 12 :__","Découpez la génoise en deux dans le sens de l'épaisseur. Imbibez-la de sirop mélangé à 2 cuillères à soupe d'eau et au reste de kirsch.")
                            .addField("__Etape 13 :__","Posez un des carrés sur un plat, masquez-le de crème et posez les plus grosses fraises sur le bord, la pointe vers le haut.")
                            .addField("__Etape 14 :__","Continuez à garnir l'intérieur de fraises et couvrez-les de crème.")
                            .addField("__Etape 15 :__","Posez le deuxième carré de biscuit et tartinez le dessus avec le reste de crème.")
                            .addField("__Etape 16 :__","Placez le gâteau au frais, au moins 6 heures.")
                            .addField("__Etape 17 :__","Avec un couteau tranchant, coupez le tour du fraisier à la verticale, à 1cm de bord.")
                            .addField("__Etape 18 :__","Abaissez la pâte d'amande rose sue 2mm et recouvrez-en le dessus du fraisier.")
                            .addField("__Etape 19 :__","Décorez de fraises des bois, de framboises et de feuilles en pâte d'amande verte et rose.")
                            .addField("__Etape 20 :__","Servez le fraisier entier ou en parts.")
                            .setThumbnail("https://cdn.discordapp.com/attachments/398094272827752459/403289570034057228/fraisier-la-recette-pas-a-pas--md-453391p702420.jpg")
                            .setFooter("© L'équipe Food 🍰",  bot.user.displayAvatarURL);
                            message.channel.sendEmbed(recette5_embed)

}})