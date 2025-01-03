import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game-api-front-end';

  private apiUrl = "http://127.0.0.1:3000/games/";

  http = inject(HttpClient);

  gameData: any = null;

  getGame(game: string = 'soccer') {
    return this.http.get<any>(this.apiUrl + '/' + game);
  }

  ngOnInit() {
    this.fetchGame();
  }

  fetchGame() {
    this.getGame().subscribe({
      next: (data) => this.gameData = data,
      error: (err) => console.error('Error fetching game data: ', err)
    });
  }
}
