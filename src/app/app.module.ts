// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routes
import { routing } from './app-routing.module';

// Layout and components
import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

// Dynamic components
import { AlertComponent } from './ui/alert/alert.component';
import { LoaderComponent } from './ui/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostFormComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AlertComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
