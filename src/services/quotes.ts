import {Quote} from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addToFavorites(quote: Quote){
    this.favoriteQuotes.push(quote);
  }

  removeFromFavorites(quote: Quote) {
    const index = this.favoriteQuotes.findIndex(
      (element: Quote) => {
      return element.id == quote.id;
    });
    this.favoriteQuotes.splice(index, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isFavorite(quote: Quote) {
    return this.favoriteQuotes.indexOf(quote) > -1;
  }
}