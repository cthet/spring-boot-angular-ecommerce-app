import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface gender{
  gender: string;
}

@Component({
  selector: 'app-homegender',
  templateUrl: './homegender.component.html',
  styleUrls: ['./homegender.component.css'],
})
export class HomegenderComponent implements OnInit {
  gender!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getGender();
  }

  getGender() {
    this.activatedRoute.params.subscribe(item => this.gender = item['gender']);
  }
}
