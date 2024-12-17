import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTxgum9T77sXUew3jqFNGgYgTxlPe_cs2CXPXr_SpvF2UvttuZ_-P-t4QLUQRxtl6WA4&usqp=CAU";
  contentTitle: string = "";
  contentDescription: string = "";

  private id: string | null = "0";

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter(article => article.id.toString() === id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
