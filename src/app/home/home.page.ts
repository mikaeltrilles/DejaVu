import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //* Modules Api HttpClient https://angular.io/guide/http
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchTitle: string = '';

  movieApiUrl = ''; //* Déclaration de la variable pour stocker l'url de l'API en fonction du film sélectionné

  movieData = { //* Déclaration de la variable pour stocker les information du film sélectionné
    title: '',
    description: '',
    imageUrl: '',
    releaseDate: '',
    note: '',
  };
  moviesData = []; //* Déclaration de la variable pour stocker les information du film sélectionné

  

  constructor(
    //* Appel de la classe HttpClient
    public http: HttpClient,
    private toastController: ToastController
  ) {
    //* Appel de la méthode readAPI qui retourne un objet Promise
    this.readAPI('https://api.themoviedb.org/3/search/movie?api_key=ebc7db06132000beb020aa0b0c0fb00e&language=fr-FR&query=avenger%20endgame')
      .subscribe((data) => {
        console.log(data);
        console.log(data['results'][0]['title']);

        this.movieData.title = data['results'][0]['title'];
        this.movieData.description = data['results'][0]['overview'];
        this.movieData.imageUrl = data['results'][0]['poster_path'];
        this.movieData.releaseDate = data['results'][0]['release_date'];
        this.movieData.note = data['results'][0]['vote_average'];

        console.log(data);
        this.moviesData = data['results'];
        console.log(this.moviesData);

      });
  }

  //* Création de la méthode readAPI qui retourne un objet Promise
  readAPI(URL: string) {
    return this.http.get(URL);
  }

  //* Fonction de recherche du film
  searchMovie() {
    this.movieApiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=ebc7db06132000beb020aa0b0c0fb00e&language=fr-FR&query=' + this.searchTitle;
    this.readAPI(this.movieApiUrl)
      .subscribe((data) => {
        // console.log(data);
        // console.log(data['results'][0]['title']);

        this.movieData.title = data['results'][0]['title'];
        this.movieData.description = data['results'][0]['overview'];
        this.movieData.imageUrl = data['results'][0]['poster_path'];
        this.movieData.releaseDate = data['results'][0]['release_date'];
        this.movieData.note = data['results'][0]['vote_average'];
        // console.log(data);
        this.moviesData = data['results'];
        // for (let i = 0; i < this.moviesData.length; i++) {
        //   console.log(this.moviesData[i]['title']);
        //   this.movieData.title = this.moviesData[i]['title'];
        // }
        // console.log(this.moviesData);



      });
  }

  dejavu = [];
  
  async add() {

    if (this.dejavu.indexOf(this.movieData.title) === -1) {
      this.dejavu.push(this.movieData.title);
      const toast = await this.toastController.create({
        message: 'Film ajouté à la liste',
        position:'middle',
        color:'success',
        duration: 2000
      });
      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Film déjà dans la liste',
        position:'middle',
        color:'warning',
        duration: 2000
      });
      toast.present();
    }
    console.log(this.dejavu);
  }
  async remove() {
    const toast = await this.toastController.create({
      message: 'Film supprimé de la liste',
      duration: 2000
    });
    toast.present();
  }
}
