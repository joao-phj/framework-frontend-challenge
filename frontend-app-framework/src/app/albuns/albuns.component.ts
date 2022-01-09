import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../fetcher.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css'],
  providers:  [ FetcherService ]
})
export class AlbunsComponent implements OnInit {

  albuns: Album[];

  constructor(private fetcherService: FetcherService) { }

  ngOnInit() {
    this.getAlbuns();
  }

  getAlbuns() {
    this.fetcherService.getAlbuns()
      .subscribe(
        (data: Album[]) => this.albuns = data,
        error => this.albuns = error
      );
  }
}
