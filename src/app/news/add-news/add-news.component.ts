import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/shared/interfaces/news';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent implements OnInit {
  newsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private newsService: NewsService,
    private toastrService: ToastrService
  ) {
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      summary: ['', Validators.required],
      details: ['', Validators.required],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.newsForm.reset();
  }
  save(ngForm: INews) {
    this.newsService.addNews(ngForm);
    this.toastrService.success('News Added Successfully');
  }
}
