import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log("Hello!")
    // this.getOnePokemon();
    // this.getOtherPokemon();
  }
  abilities = [];
  check

  getOnePokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {return(data)})
    bulbasaur.subscribe(data => {console.log("Got pokemon", data)
      for(var a of data['abilities']){
        this.abilities.push(a['ability'])
      }
      console.log('abilties: ', this.abilities)
      return data;
    })
  }
  // getOtherPokemon() {
  //   for (var i = 1; i < 25; i++) {
  //     console.log("Hello?")
  //     const pokemon = this._http.get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${i}`);
  //     pokemon.subscribe(data => {
        
  //       for(var a of data['abilities']) {
  //         console.log("Other hello")
  //         if(this.abilities.indexOf(a['ability']) >= 0){
  //           console.log("made it!")
  //           console.log("same", data)
  //           console.log("Hello again!")
  //           break;
  //         }
  //       }
  //     })
  //   }
  // }
  // Was unalbe to get this portion of the assignment to work. 
}
