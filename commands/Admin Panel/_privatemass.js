/*CMD
  command: /privatemass
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🆔* Send I'd Of User:*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("6307156448")
if ((user.telegramid = 6307156448)) {
  if (message) {
    var id = message
    User.setProperty("reply?id", id, "string")
    Bot.runCommand("/reply2")
    return
  } else {
    Bot.sendMessage("*♨️ User ID Not Found to Reply!*")
    return
  }
}else{
Bot.sendMessage("You aren't an Admin!")
}
return
