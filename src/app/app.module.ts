import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/pages/login/login.component';
import { HomepageComponent } from './comps/pages/homepage/homepage.component';
import { AlbumComponent } from './comps/pages/album/album.component';
import { PostsComponent } from './comps/pages/posts/posts.component';
import { UserComponent } from './comps/pages/user/user.component';
import { CommentComponent } from './comps/pages/comment/comment.component';
import { TodoComponent } from './comps/pages/todo/todo.component';
import { HederComponent } from './general/heder/heder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AlbumComponent,
    PostsComponent,
    UserComponent,
    CommentComponent,
    TodoComponent,
    HederComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
