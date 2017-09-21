import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{
  quote: Quote;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.quote = this.navParams.get('quote');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
