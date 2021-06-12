import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";



@Injectable()
export class StoreService  {

    private defaultList: string[] = [];

    private todo: BehaviorSubject<string[]> = new BehaviorSubject(this.defaultList);


    public getTodo() {
        return this.todo.asObservable();
    }


    public addTodo(item: string) {
        const todos =  this.todo.getValue();
        this.todo.next([...todos, item])
    }


    count$: Observable<number>;
 
    constructor(private store: Store<{ count: number }>) {
      this.count$ = store.select('count');
    }
   
  

}