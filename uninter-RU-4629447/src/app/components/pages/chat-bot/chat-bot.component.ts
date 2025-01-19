import { Component } from '@angular/core';
import { ChatbotService } from '../../core/services/bot/chatbot.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  imports: [FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  messages: { user: string; bot: string }[] = [];
  userMessage = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      const message = this.userMessage;
      this.messages.push({ user: message, bot: '' });
      this.userMessage = '';

      this.chatbotService.sendMessage(message).subscribe((response: any) => {
        const botReply = response[0]?.text || 'Desculpe, não consegui responder.';
        this.messages[this.messages.length - 1].bot = botReply;
      });
    }
  }
}
