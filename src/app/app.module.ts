import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from '@ngx-markdown/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarkdownExampleComponent } from './app.markdown-example.component';

const routes: Routes = [
  { path: 'ngx-markdown', component: MarkdownExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MarkdownExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

    /** */
    MarkdownModule.forRoot({
      options: {
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: false,
        smartLists: true,
        smartypants: false
      },
      loadingTemplate: `<div> Loading ... </div>`
    }),
    // MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
