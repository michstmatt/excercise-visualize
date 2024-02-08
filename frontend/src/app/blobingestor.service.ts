import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, throwError, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Set } from './set';

@Injectable({
  providedIn: 'root'
})
export class BlobingestorService {

  private url: string = "https://exercisevisualize.blob.core.windows.net/strong-data/strong.csv?sp=r&st=2024-02-06T00:48:30Z&se=2026-02-06T08:48:30Z&sv=2022-11-02&sr=b&sig=XXkJrlWt7kQqf6O6GBdKJDFK%2BtIWH7N9HvJRg0oQ5OI%3D";

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
