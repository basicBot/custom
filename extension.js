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
                    'deu-lhe um bolinho de açúcar... O quê? Sem estrelinhas e povilho? Eu não tocaria.',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas. Eca!',
                    'deu-lhe um enorme biscoito...hummm',
                    'deu-lhe um biscoite que tem escrito: "Nas favelas da sua bunda meu pau entra armado" ',
                    'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
                    'Te deu uma conta premium no redtube seu punheteiro!"',
                    'Te deu um biscoito da sorte,que tem escrito: "Saia desse computador!"',
                    'Deu pra você um biscoito que tem escrito: vai estender a roupa ou sua mãe vai te matar!',
                    'Quer te fuder até o talo!',
                    'te deu um biscoito da sorte, tem escrito: "Eu te amo"',
                    'te deu um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu pra você um Nikito e um copo de leite.',
                    'te deu um pote de whey pra ficar MONSTRÃO!',
                    'deu-lhe um biscoito que ficou esquecido na chuva...eca,eu não comeria.',
                    'deu-lhe um biscoito da sorte,que tem escrito: "Tem um oco no seu cú!"
                    'te trouxe biscoitos fresquinhos... parecem deliciosos!'
                    'promete te dar arroz, feijão e pica'
                    'quer saber o que levas nesse caixão'
                    'deu-lhe um biscoito que tem escrito: "eu prefiro morrer do que perder a vida"'
                ];
                
                
                

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
        maximumSongLength: 10,
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
        fbLink: "https://www.facebook.com/pages/Strat-Cast/266705590181894?ref=hl",
        youtubeLink: null,
        website: "https://www.facebook.com/pages/Strat-Cast/266705590181894?ref=hl",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!"
    }));

    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
