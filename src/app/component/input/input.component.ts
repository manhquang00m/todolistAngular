import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() input: any;
  @Output() sendInput: EventEmitter<any> = new EventEmitter();
  @Output() updateInput: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {}

  onAdd() {
    this.sendInput.emit(this.input);
  }
  onUpdate() {
    this.updateInput.emit(this.input);
  }
}
