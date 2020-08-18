import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharityService {
  apiKey: string;

  constructor(private httpClient: HttpClient) {
    this.apiKey = environment.globalGivingApiKey;
  }

  getAllOrganizations(): Observable<any> {
    return this.httpClient.get(`${environment.globalGivingApiUrl}/orgservice/all/organizations/active`,
    {params: {
      api_key: this.apiKey}
    });
  }
}
