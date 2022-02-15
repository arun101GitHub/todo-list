import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit(): void {
  }
  removeItem(): void {
    this.remove.emit(this.item);
  }

}
