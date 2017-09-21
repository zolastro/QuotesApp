import {Component, OnInit} from '@angular/core';
import quotes from '../../data/quotes';
import {QuotesPage} from '../quotes/quotes';
import {Category} from '../../data/category.interface';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: Category [];
  quotesPage = QuotesPage;

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
