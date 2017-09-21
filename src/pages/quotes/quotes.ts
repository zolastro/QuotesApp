import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Category} from '../../data/category.interface';
import {Quote} from '../../data/quote.interface';
import {QuotesService} from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  category: Category;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {
  }

  ngOnInit() {
    this.category = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote to favorites?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          this.quotesService.addToFavorites(selectedQuote);
        }
      },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isFavorite(quote);
  }
}
