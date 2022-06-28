import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/review';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviewdetails: Review[] = [];
  reviewsupdate:any={
    review_id:"",
    name:"",
    feedback:"",
    rating:""

   }
  constructor(private reviewservice:ReviewService) { }

  public getReview():void{
    this.reviewservice.getReview().subscribe(
      (response: Review[]) => {
       this.reviewdetails=response;
      }
    );
  }

  displayStyle="none";
  openPopup(Addon:any) {
    this.displayStyle = "block";
    this.reviewsupdate=Addon;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.reviewservice.updateReview(this.reviewsupdate).subscribe(data=>
      {
        console.log(data);
      })
  }

  delete(pl:any)
  {
    this.reviewservice.deleteByid(pl.review_id).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.getReview();
      })
  }

  ngOnInit(): void {
    this.getReview();
  }

}
