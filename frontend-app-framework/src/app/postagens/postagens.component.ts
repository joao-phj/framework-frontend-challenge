import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../fetcher.service';
import { Postagem } from '../models/postagem';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css'],
  providers:  [ FetcherService ]
})
export class PostagensComponent implements OnInit {
  postagens: Postagem[];
  loadError: Error;

  constructor(private fetcherService: FetcherService) { }

  ngOnInit() {
    this.getPostagens();
  }

  getPostagens() {
    this.fetcherService.getPosts()
      .subscribe(
        (data: Postagem[]) => this.postagens = data,
        error => this.loadError = error
      );
  }
  
}
