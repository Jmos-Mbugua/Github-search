import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersProfileService {

  // Create properties which will help in fetching data from github
  private username: string;

  private clientid = 'Iv1.2cbf53b3a85dc0ca';   //Use this clientId and secret to prevent restrictions on the number of profiles to get from the api 
  private clientsecret = '4ee8aeb38655a333b690d69edd7cad3dcb9b4c6d';



  constructor(private p_http: HttpClient) { 
    // console.log("Your service is now ready")

    // define the username we want to use
    this.username = 'Jmos-Mbugua'
  }

  getProfileDetails(){
    return this.p_http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid
    + "&client_secret" + this.clientsecret).map(response => response)
  }
  searchByUsername(name: string){
    const promise = new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/search/users?q=${name}&per_page=1000`;
      this.p_http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {          
          resolve(res);
        })
        .catch(error => reject(error));
    });
    return promise;
  }
  getUserRepos() {
    return this.p_http.get<any>("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientid
    + "&client_secret" + this.clientsecret).map(response => response)
  }

  updateProfile(username: string){
    this.username = username
  }
}
