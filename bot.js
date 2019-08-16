const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!p"


client.on("message", msg =>{
  var prefix = '!p'
if(!msg.guild.member(msg.author).hasPermissions('ADMINISTRATOR')) return msg.reply('❌ **يجب ان تكون لديك صلاحيات كافية**');
if(!msg.guild.member(client.user).hasPermissions(['ADMINISTRATOR'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
var args = msg.content.split(" ").slice(1).join(" ")
if(!args) return;
if(msg.content.startsWith(prefix + "seticon")) {
msg.guild.setIcon(args)
.then(msg.reply("**تم تغيير صورة السيرفر ✅ **"))
.catch(msg.reply("**رابط الصورة غير صحيح**"));
}else if(msg.content.startsWith(prefix + "setname")) {
 msg.guild.setName(args)
.then(g => msg.reply(`**تم تغيير الاسم الى   ${g} :white_check_mark:**`))
.catch(console.error);
}
});



client.login(token);