import { Moment } from 'moment';

export interface IReview {
  id?: number;
  name?: string;
  content?: any;
  data?: Moment;
}

export class Review implements IReview {
  constructor(public id?: number, public name?: string, public content?: any, public data?: Moment) {}
}
