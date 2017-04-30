import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
  
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];
    
    constructor(private postsService: PostsService){
        console.log('constructor ran');
        this.name = 'Sean'; 
        this.email = 'sean@gmail.com';
        this.address = {
            street: '1201 Yeah St',
            city: 'Oklahoma City',
            state: 'OK'
        }
        this.hobbies = ['Music', 'Amanda', 'Karaoke']
        this.showHobbies = false;
        
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    
    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }
    
    addHobby(hobby:string){
        this.hobbies.push(hobby);
    }
    
    deleteHobby(i:number){
        this.hobbies.splice(i, 1);
    }
}
interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}