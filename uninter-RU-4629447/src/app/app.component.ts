import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/design-system/header/header.component';
import { FooterComponent } from './components/design-system/footer/footer.component';
import { ApisService } from './components/core/services/api/apis.service';
import { ChatBotComponent } from './components/pages/chat-bot/chat-bot.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatBotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApisService],
})
export class AppComponent {
  title = 'uninter-RU-4629447';
}
