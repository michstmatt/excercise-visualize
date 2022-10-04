import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, throwError, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Set } from './set';

@Injectable({
  providedIn: 'root'
})
export class BlobingestorService {

  private url: string = "https://exercisevisualize.blob.core.windows.net/strong-data/strong.csv?sp=r&st=2022-10-02T21:30:53Z&se=2023-10-03T05:30:53Z&spr=https&sv=2021-06-08&sr=c&sig=vqNS0z5lOasJFQiUiZWzIfEaZGkzR5kWYqK4CVRBMQw%3D";

  constructor(private http: HttpClient) { }

  public getData(): Observable<Set[]> {
    return this.http.get(this.url, {responseType: 'text'} )
      .pipe(
        map((data) => {
            const lines = data.split("\n");
            return lines.slice(1, lines.length).map<Set>((line: string) => new Set(line));
        })
      );
  }
}
