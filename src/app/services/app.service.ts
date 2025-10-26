import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {

  readonly #serverUrl: string = 'https://swapi.dev/api';

  constructor(private _httpClient: HttpClient) {
  }

  getDataByURL(url: string) {
    return this._httpClient.get(url);
  }

  getDataArray(dataType: string, page: number) {
    return this._httpClient.get(`${this.#serverUrl}/${dataType}/?page=${page}`);
  }

  getObjectById(objType: string, objId: number) {
    return this._httpClient.get(`${this.#serverUrl}/${objType}/${objId}`);
  }
}
