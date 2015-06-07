basicBot-customization
======================

A not so basic bot for plug.dj 

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Yemasthui/basicBot?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![facebook group](http://i.benzi.io/97dW.svg)](https://facebook.com/groups/basicBot) [![twitter](http://i.benzi.io/4KEn.svg)](https://twitter.com/bscBt)

Stay updated on **basicBot**'s development by following the project on Twitter [@bscBt](http://twitter.com/bscBt)

Created by [Yemasthui](https://github.com/Yemasthui) but now maintained by [Benzi](https://github.com/Benzi).

(You can email me via hi@benzi.io or send me a message on [Gitter](https://gitter.im/Benzi) if you have any queries about the bot)

---

Click [here](https://github.com/Yemasthui/basicBot) for basicBot's main repository.

Using custom room settings or adding functionality is done by loading your own script loading and modifying the bot.
This repository's purpose is to facilitate this. You can fork the repository and customise [the example script](https://github.com/Yemasthui/basicBot-customization/blob/master/extension.js). 
When you have forked the repo, bookmark the following script, __but change _Yemasthui_ to your own github handle__. 

`javascript:(function(){$.getScript('https://rawgit.com/Yemasthui/basicBot-customization/master/extension.js');})();`

If you are using your own hosting service for your script, swap the link with your own.

A detailed overview of the possible settings can be found [here](https://github.com/Yemasthui/basicBot-customization/blob/master/settingsOverview.md).

(A custom .json file can still be used for custom file settings, but is discouraged as the method provided here allows for more customization.)

###Blacklists###

Blacklists can be added in the settings through either links to raw json files with the same format as those in the examples provided (forking and using [rawgit's development link](https://rawgit.com/) is a great way to do this),
or replacing the link with a custom function that loads your lists into the bot (this option requires extensive knowledge of javascript and a good understanding of the bot's inner workings).

To update your lists manually, you can use the details specified in chat messages after a song is blacklisted, or use either of these in the console periodically:
```javascript
bot.getNewBlacklistedSongs(); //get a javascript object
bot.logNewBlacklistedSongs(); //get a list
```


Copyright
---------
Copyright &copy; 2014 Yemasthui
