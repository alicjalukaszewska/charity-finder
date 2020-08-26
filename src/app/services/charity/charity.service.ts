import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharityService {
  private apiKey: string;
  result$ = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    this.apiKey = environment.globalGivingApiKey;
  }

  public requestResult(): Observable<any> {
    return this.getAllOrganizations().pipe(
        map(res => res.organizations)
    )
  }

  private getAllOrganizations(): Observable<any> {
    return this.httpClient.get(`${environment.globalGivingApiUrl}/orgservice/all/organizations/active`,
    {params: {
      api_key: this.apiKey}
    });
  }
}
