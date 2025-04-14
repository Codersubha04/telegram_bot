require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual bot token
const token = process.env.BOT_API; // yahan apna BotFather se milaya token daalein

const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;

  bot.sendMessage(chatId, `Hi ${firstName}!\n📚 Please select a course category to see pricing:`, {
    reply_markup: {
      keyboard: [
        ['💻 Web Development', '📱 App Development'],
        ['🧠 AI & ML', '📊 Data Science'],
        ['🎯 Combo Courses', '📞 Contact Support']
      ],
      resize_keyboard: true
    }
  });
});

// Handle button messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '💻 Web Development') {
    bot.sendMessage(chatId, "💻 Web Development Course\nPrice: ₹999\nDuration: 4 weeks\nLink: example.com/web");
  } else if (text === '📱 App Development') {
    bot.sendMessage(chatId, "📱 App Dev Course\nPrice: ₹899\nDuration: 5 weeks\nLink: example.com/app");
  } else if (text === '📞 Contact Support') {
    bot.sendMessage(chatId, "📞 Contact us on Telegram: @yourusername");
  }
});
