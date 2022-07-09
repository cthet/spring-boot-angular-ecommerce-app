import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input()
  message!: string;
  @Input()
  danger!: boolean;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
