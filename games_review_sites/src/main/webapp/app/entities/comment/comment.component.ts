import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IComment } from 'app/shared/model/comment.model';
import { CommentService } from './comment.service';
import { CommentDeleteDialogComponent } from './comment-delete-dialog.component';

@Component({
  selector: 'jhi-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit, OnDestroy {
  comments: IComment[];
  eventSubscriber: Subscription;

  constructor(
    protected commentService: CommentService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll() {
    this.commentService.query().subscribe((res: HttpResponse<IComment[]>) => {
      this.comments = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInComments();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IComment) {
    return item.id;
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  registerChangeInComments() {
    this.eventSubscriber = this.eventManager.subscribe('commentListModification', () => this.loadAll());
  }

  delete(comment: IComment) {
    const modalRef = this.modalService.open(CommentDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.comment = comment;
  }
}
