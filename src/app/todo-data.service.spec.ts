/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';
import { FormsModule } from '@angular/forms';


describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      providers: [TodoDataService]

    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});

describe('#getAllTodos()', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should return and empty array by default', inject([TodoDataService], (service: TodoDataService) => {
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {

    let todo1 = new Todo({task: 'Hello 1', status: false});
    let todo2 = new Todo({task: 'Hello 2', status: true});

    service.addTodo(todo1);
    service.addTodo(todo2);

    expect(service.getAllTodos()).toEqual([todo1,todo2]);
  }));
})

describe('#AddTodo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should add todo data by increasing ID', inject([TodoDataService], (service: TodoDataService) => {
    var todo1 = new Todo({task: 'Hello', status: false});
    var todo2 = new Todo({task: 'Hello2', status: false});

    service.addTodo(todo1);
    service.addTodo(todo2);

    expect(service.getTooById(1)).toEqual(todo1);
    expect(service.getTooById(2)).toEqual(todo2);

  }));
})

describe('#DeleteTodoById', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
    let todo1 = new Todo({task: 'hello 1', status: false});
    let todo2 = new Todo({task: 'hello 2', status: true});

    service.addTodo(todo1);
    service.addTodo(todo2);

    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodoById(1);
    expect(service.getAllTodos()).toEqual([todo2]);
    service.deleteTodoById(2);
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should not delete anything if corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
    let todo1 = new Todo({ task: ' Hello 1' , status: false});
    let todo2 = new Todo ({task: ' Hello 2', status: true});

    service.addTodo(todo1);
    service.addTodo(todo2);

    service.deleteTodoById(3);

    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  }));

});


describe('#UpdateTodoById', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });

    it('should return todo with corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({ task:'Before Update', status: false});
      service.addTodo(todo);

      service.updateTodoById(1, { task: 'This is an updated Task' });
      expect(updatedTodo.title).toEqual('This is an updated Task');
  }));

    it('should return null if corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({task: 'hello task', status: false});

      service.addTodo(todo);
      service.updateTodoById(2, {task: 'I am here'});

      expect(updatedTodo).toEqual(null);
  }));
})

  describe('ToggleTodoStatus', () => {
    beforeEach( () => {
      TestBed.configureTestingModule({
        providers: [TodoDataService]
      });

      it('should return the updated todo with changed status', inject([TodoDataService],(service:TodoDataService)=>{
        let todo = new Todo({task: 'Task 1', status: false});

        service.addTodo(todo);

        let updatedTodo = service.ToggleTodoStatus(todo);

        expect(updatedTodo.status).toEqual(true);

        service.ToggleTodoStatus(todo);
        expect(updatedTodo.status).toEqual(false);
    }));

})




