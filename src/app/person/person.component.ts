import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../_services/service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input()
  index: number | undefined;

  ngOnInit(): void {}

  textarea = '';

  constructor(private messageService: MessageService) {}

  sendMessage(): void {
    this.messageService.sendMessage({
      personNumber: [this.index === 0 ? 1 : this.index && this.index + 1],
      message: [this.textarea],
    });
    this.textarea = '';
  }
}
