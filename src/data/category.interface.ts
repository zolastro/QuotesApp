import {Quote} from './quote.interface';

export interface Category {
  category: string;
  quotes: Quote[];
  icon: string;
}