(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "OtakuTheBot";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
            command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Bacon!!!");
                }
              }
            };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "basicBot",
      language: "english",
      chatLink: "https://rawgit.com/bscBot/source/master/lang/en.json",
      scriptLink: "https://rawgit.com/bscBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk:   15,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 5,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 8,
      autodisable: true,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "Esta canção não se encaixa no tema do quarto. "],
      ["op"Muito,op (n sei o que dizer sobre isso) ". "],
      ["history", "Essa musica esta no historico. "],
      ["mix", "Você jogou uma musica, que é contra as regras. "],
      ["sound", "A canção que você jogou teve má qualidade do som ou nenhum som. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "A canção que você jogou não estava disponível para alguns usuários. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Mensagem temporária do Dia",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: true,
      themeLink: true,
      fbLink: true,
      youtubeLink: true,
      website:true,
      intervalMessages: [],
      messageInterval: 10,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/bscBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/bscBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/bscBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/bscBot/source/master/basicBot.js", extend);

}).call(this);
