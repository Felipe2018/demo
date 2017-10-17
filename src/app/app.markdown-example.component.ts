import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-example',
  templateUrl: './app.markdown-example.component.html'
})
export class MarkdownExampleComponent implements OnInit {

  string = `
  **my bold**
  [link](http://example.com)
  title: {{title}}
  {{table}}
  `;

  title = 'This is my title';

  table = `
  | Name | Job | Description |
  |------|------|-------------|
  | Adrian |  Director    | He is the most powerful person.  |
  | Adrian |  Director    | He is the most powerful person.  |
  `;

  options = {
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };

  clbk(err, result) {
    console.log(`callback`, err, result);
  }

  constructor() { }

  ngOnInit() { }

  update($event) {
    this.string = $event.srcElement.value;
  }

  getResult(event) {
    console.log(`test,`, event);
  }
}
