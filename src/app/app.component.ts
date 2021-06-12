import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './reducers';
import { StoreService } from './services/Store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  count$: Observable<number>;

  public todoList: string[] = [];

  constructor(private storeService: StoreService, private store: Store<{ count: number }> ) {
    this.count$ = store.select('count');


    this.storeService.getTodo().subscribe((data) => {
      console.log('TODO LIST', data)
      this.todoList = data;
    });

  }

  addItem() {
    this.storeService.addTodo(`Item ${Math.random()}`)
  }


  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }


}
