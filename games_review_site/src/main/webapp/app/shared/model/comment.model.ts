import { Moment } from 'moment';
import { IReview } from 'app/shared/model/review.model';

export interface IComment {
  id?: number;
  userName?: string;
  content?: any;
  date?: Moment;
  review?: IReview;
}

export class Comment implements IComment {
  constructor(public id?: number, public userName?: string, public content?: any, public date?: Moment, public review?: IReview) {}
}
