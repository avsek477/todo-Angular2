export class Todo {
  id: number;
  task: string='';
  status: boolean = false;

  constructor(values: Object= {}){
    Object.assign(this,values);
  }
}

let todo = new Todo({
  task: 'Some Task',
  status: false
});
