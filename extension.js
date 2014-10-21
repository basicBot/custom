(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.commands.friendCommand = {
        command: 'friend',
        rank: 'user',
        type: 'exact',
        functionality: function (chat, cmd) {
             if (this.type === 'exact' && chat.message.lenght !== cmd.lenght) return void (0);
             if (!bot.commands.executable(this.rank, chat)) return void (0);
             else {
                 API.sendchat("Novo Sistema De Amigos http://blog.plug.dj/2014/10/friends-feature/?utm_content=buffercf974&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer");
                 
                }
            }
        };
        
        bot.commands.twitchCommand = {
        command: 'twitch',
        rank: 'user',
        type: 'exact',
        functionality: function (chat, cmd) {
             if (this.type === 'exact' && chat.message.lenght !== cmd.lenght) return void (0);
             if (!bot.commands.executable(this.rank, chat)) return void (0);
             else {
                 API.sendchat("Possível integração Twitch com Plug.Dj http://support.plug.dj/hc/communities/public/questions/200905295-Twitch-integration");
                 
             }
        }
    };
    
        bot.commands.techCommand = {
        command: 'tech',  
        rank: 'user', 
        type: 'exact', 
        functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
                API.sendChat("Tech Blog com mais regularidade para informá-lo em quais erros os desenvolvedores estão trabalhando. http://tech.plug.dj/ ");
                }
            }
             
        
                };

        bot.loadChat();
    }

    
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "StratBot",
        language: "portuguese",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/pt.json",
        maximumAfk: 60,
        afkRemoval: null,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: true,
        commandCooldown: 3,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
                ["tema", "A música não se encaixa nos padrões da sala. "],
                ["op", "Essa música está na lista OP. "],
                ["historico", "A música ainda está no histórico. "],
                ["mix", "Você tocou um mix (muito longo) - não permitido. "],
                ["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
                ["nsfw", "A música que você tocou é NSFW (impróprio). "],
                ["indisponivel", "A música que você tocou está indisponível. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: null,
        motdInterval: 8,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: true,
        welcome: false,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/skrillex1000gr4u",
        youtubeLink: null,
        website: "https://www.facebook.com/skrillex1000gr4u",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!"
    }));

    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
