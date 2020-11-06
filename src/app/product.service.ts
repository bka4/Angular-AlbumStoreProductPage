import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import rxjs/add/operator/map;

@Injectable()
export class ProductService {
  albumInfo;

  constructor(private _http: Http) { }
  private _albumUrl = "../assets/album.json";

  method getAlbum(id:number) {
    return this._http.get(_albumUrl);
  }

}
