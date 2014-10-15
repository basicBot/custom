(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'te deu um tabaco bem massa',
                    'deu-lhe um biscoito podre e sujo. Era o último do pacote. Que nojo!',
                    'deu-lhe um biscoito da sorte,que tem escrito: "Tem um oco no seu cú!',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas. Eca!',
                    'deu-lhe um biscoito enorme...hummm',
                    'deu-lhe um biscoito que tem escrito: "Nas favelas da sua bunda meu pau entra armado"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
                    'Te deu uma conta premium no redtube seu punheteiro!',
                    'deu-lhe um biscoito da sorte, tem escrito: "Saia desse computador!"',
                    'Quer te fuder até o talo!',
                    'quer saber o que levas neste caixão',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu pra você um Oreo e um copo de leite.',
                    'promete te dar arroz, feijão e pica',
                    'deu-lhe um biscoito que ficou esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem deliciosos!',                
                    'te deu um ban eterno de 30 dias',
        
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
                }];

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
