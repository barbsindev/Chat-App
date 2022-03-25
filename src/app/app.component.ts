import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './_services/service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @Input()
  index: number | undefined;
  title: string = 'chat-app';

  messages: [{ data: { message: string[]; personNumber: number[] } }] | any[] =
    [];
  subscription: Subscription;
  persons: string[] = [];

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.onMessage().subscribe((message) => {
      if (message) {
        this.messages.push(message);
      } else {
        this.messages = [];
      }
    });
  }

  addPersonComponent() {
    this.persons.push('');
  }

  clearMessages() {
    this.messageService.clearMessages();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
