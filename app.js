const Discord = require('discord.js');
const Express = require('express');

const app = Express();
app.use(Express.json())
const port = 3000;


require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

app.listen(port, () => {
  console.log(`AdventureLink is up and running on http://localhost:${port}`)
})

client.on('ready', () => {
  console.log('AdventureLink Bot is online');
  channel = client.channels.cache.get(`822920758833184870`);
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('AdventureLink - Bot')
    .setAuthor('Skymoon - Emile G', 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/119213102_1267102786975602_4015969378577106496_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0vzwlrWjZ1QAX98Rns6&_nc_ht=scontent-cdg2-1.xx&oh=0021f02650dc3cf3fe1ff35f2229bdfb&oe=607E7413', 'https://egardent.fr/')
    .setThumbnail('https://cdn.discordapp.com/app-icons/822936720550395956/0b5a7386f35b704a94e022bc1676d0f6.png')
    .addFields(
      { name: '\u200B', value: '\u200B' },
      { name: 'AdventureLink Status', value: 'AdventureLink is up and running' },
      { name: '\u200B', value: '\u200B' },
    )
    .setTimestamp()
    .setFooter('AdventureLink - Status report', 'https://cdn.discordapp.com/app-icons/822936720550395956/0b5a7386f35b704a94e022bc1676d0f6.png');
  channel.send(embed);
});

app.post('/LevelUp', (req, res) => {
  channel = client.channels.cache.get(`822920758833184870`);
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('AdventureLink - Bot')
    .setDescription('Level up')
    .addFields(
      { name: 'Level up of :', value: req.body.name + " level up to " + req.body.currentLevel  , inline:true},
      { name: '\u200B', value: '\u200B', inline:true}
    )
    .setTimestamp()
    .setFooter('AdventureLink - Level up report', 'https://cdn.discordapp.com/app-icons/822936720550395956/0b5a7386f35b704a94e022bc1676d0f6.png');
  channel.send(embed);
  res.sendStatus(200);
});
app.post('/Death', (req, res) => {
  channel = client.channels.cache.get(`822920758833184870`);
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('AdventureLink - Bot')
    .setDescription('Death report')
    .addFields(
      { name: 'Death of :', value: req.body.name, inline:true},
      { name: '\u200B', value: '\u200B', inline:true}
    )
    .setTimestamp()
    .setFooter('AdventureLink - Death report', 'https://cdn.discordapp.com/app-icons/822936720550395956/0b5a7386f35b704a94e022bc1676d0f6.png');
  channel.send(embed);
  res.sendStatus(200);
});
app.post('/GoldData', (req, res) => {
  channel = client.channels.cache.get(`822920758833184870`);
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('AdventureLink - Bot')
    .setDescription('Gold report - ' + req.body.name)
    .addFields(
      { name: 'Gold obtained :', value: req.body.gold, inline:true},
      { name: 'Gold per minute :', value: req.body.goldPerMinute, inline:true}
    )
    .setTimestamp()
    .setFooter('AdventureLink - Gold report', 'https://cdn.discordapp.com/app-icons/822936720550395956/0b5a7386f35b704a94e022bc1676d0f6.png');
  channel.send(embed);
  res.sendStatus(200);
});
app.post('/HourlyReport', (req, res) => {
  channel = client.channels.cache.get(`822920758833184870`);
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('AdventureLink - Bot')
    .setDescription('Hourly report - ' + req.body.name)
    .addFields(
      { name: 'Gold obtained :', value: req.body.gold, inline:true},
      { name: 'Gold per minute :', value: req.body.goldPerMinute, inline:true},
    )
    .addFields(
      { name: '\u200B', value: '\u200B'}
    )
    .addFields(
      { name: 'XP obtained :', value: req.body.xp, inline:true},
      { name: 'XP per minute :', value: req.body.xpPerMinute, inline:true}
    )
    .setTimestamp()
    .setFooter('AdventureLink - Hourly report', 'https://cdn.discordapp.com/app-icons/822936720550395956/0b5a7386f35b704a94e022bc1676d0f6.png');
  channel.send(embed);
  res.sendStatus(200);
});

client.on('message', (msg) => {
  if (msg.content === 'Hello') {
    msg.reply('Fuck you');
  }
});