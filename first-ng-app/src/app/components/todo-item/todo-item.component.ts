import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodosDirective } from '../../directives/highlight-completed-todos.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodosDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo=input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo())
  }
}
