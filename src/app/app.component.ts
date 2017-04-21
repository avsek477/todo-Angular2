
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {

  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoStatus (todo) {
    this.todoDataService.ToggleTodoStatus(todo)
  }

  removeTodo (todo) {
    this.todoDataService.deleteTodoById(todo.id);

  }

  get todos (){
    console.log(this.todoDataService.getAllTodos())
    return this.todoDataService.getAllTodos();
  }
}
