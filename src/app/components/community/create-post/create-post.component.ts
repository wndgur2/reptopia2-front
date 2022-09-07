import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css', '../community.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(public postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }
  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    this.router.navigate(['/community']);
  }
}
