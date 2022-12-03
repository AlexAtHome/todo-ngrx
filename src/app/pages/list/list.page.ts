import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {
  readonly form = new FormGroup({
    task: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
  })

  todos: string[] = []

  addTask(): void {
    const todo = this.form.get('task')?.value
    if (!todo || this.form.invalid) {
      return
    }

    this.todos.push(todo)
    this.form.reset()
  }
}
