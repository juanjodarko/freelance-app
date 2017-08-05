import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Documents Dashboard"
  documents: Document[] = [
    {
      title: "My first doc",
      description: "hjrehfuirehfiurheuifhrueif",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com",
    },
     {
      title: "My second doc",
      description: "hjrehfuirehfiurheuifhrueif",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com",
    },
     {
      title: "My third doc",
      description: "hjrehfuirehfiurheuifhrueif",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com",
    }
  ]
}