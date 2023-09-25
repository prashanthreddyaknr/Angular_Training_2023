import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  handleLogin(username: string, password: string) {
  let user = {
      "id": 1,
      "userName": username,
      "password": password
  }
  return this.http.post(`http://localhost:8080/authenticate`, user).pipe(res => res)
  }
}
