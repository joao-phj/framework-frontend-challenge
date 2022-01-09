import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../fetcher.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:  [ FetcherService ]
})
export class TodosComponent implements OnInit {
  toDos: Todo[];
  loadError: Error;

  constructor(private fetcherService: FetcherService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.fetcherService.getToDos()
      .subscribe(
        (data: Todo[]) => this.toDos = data,
        error => this.loadError = error
      );
  }
}
