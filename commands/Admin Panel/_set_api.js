/*CMD
  command: /set_api
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
Send Api Key 🗝️

➡️ 
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ad = Bot.getProperty("6307156448");
if (user.telegramid == 6307156448) {
  Bot.setProperty("apiurl", message, "string");
  Bot.sendMessage("API URL has been updated.");
} else {
  Bot.sendMessage("You are not authorized to perform this action.");
}
