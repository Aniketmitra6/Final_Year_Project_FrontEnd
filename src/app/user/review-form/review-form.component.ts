import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from 'src/app/review';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  review:Review=new Review();
  constructor(private service:ReviewService,private route:Router) { }
  
  ngOnInit(): void {
    
  }
  addonRegister()
  {
    console.log(this.review);
    this.savemonthlyplan();
  }
  savemonthlyplan()
  {
    this.service.addReview(this.review).subscribe(data=>
      {
          console.log(data);
          this.goToMonthly();
      })
  }
  goToMonthly()
  {
    this.route.navigate(['/user/review']);
  }


 
}
