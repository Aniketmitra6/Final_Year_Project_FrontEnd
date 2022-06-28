import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  Url="http://localhost:8083";
  constructor(private http:HttpClient) { }

  public addReview(data:Review): Observable<Review> {
    return this.http.post<Review>("http://localhost:8083/addReview",data);
  }

  public getReview(): Observable<Review[]> {
    return this.http.get<Review[]>("http://localhost:8083/getReview");
  }

  updateReview(data:Review)
  {
    return this.http.put("http://localhost:8083/updateReview",data);
  }
  deleteByid(review_id:number)
  {
      return this.http.delete(`${this.Url}/deleteReview/${review_id}`);
  }
 
}

