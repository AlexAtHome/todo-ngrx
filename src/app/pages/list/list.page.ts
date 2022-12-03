import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ITodo } from 'src/app/model/todo.model';
import { IAppState } from 'src/app/state/app.state';
import { ADD_TASK, REMOVE_TASK } from 'src/app/state/todo/todo.actions';
import { selectAllTodos } from 'src/app/state/todo/todo.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {
  readonly form = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  readonly todos$ = this.store.select(selectAllTodos)

  constructor(private readonly store: Store<IAppState>) { }

  addTask(): void {
    const content = this.form.get('task')?.value
    if (!content || this.form.invalid) {
      return
    }

    this.store.dispatch(ADD_TASK({ content }))
    this.form.reset()
  }

  remove(id: ITodo['id']) {
    this.store.dispatch(REMOVE_TASK({ id }))
  }
}
