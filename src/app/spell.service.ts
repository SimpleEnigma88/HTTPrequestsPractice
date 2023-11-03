import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private apiUrl = 'https://www.dnd5eapi.co/api';

  constructor(private http: HttpClient) { }

  getSpellsBySchool(schoolName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/spells`, {
      params: {
        school: schoolName
      }
    }).pipe(
      map((data: any) => data.results)
    );
  }

}
