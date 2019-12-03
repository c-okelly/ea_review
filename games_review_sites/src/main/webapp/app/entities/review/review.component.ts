import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IReview } from 'app/shared/model/review.model';
import { ReviewService } from './review.service';
import { ReviewDeleteDialogComponent } from './review-delete-dialog.component';

@Component({
  selector: 'jhi-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit, OnDestroy {
  reviews: IReview[];
  eventSubscriber: Subscription;

  constructor(
    protected reviewService: ReviewService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.reviewService.query().subscribe((res: HttpResponse<IReview[]>) => {
      this.reviews = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInReviews();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IReview) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInReviews() {
    this.eventSubscriber = this.eventManager.subscribe('reviewListModification', () => this.loadAll());
  }

  delete(review: IReview) {
    const modalRef = this.modalService.open(ReviewDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.review = review;
  }
}
