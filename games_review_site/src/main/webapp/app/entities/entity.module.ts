import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'review',
        loadChildren: () => import('./review/review.module').then(m => m.GamesReviewSitesReviewModule)
      },
      {
        path: 'comment',
        loadChildren: () => import('./comment/comment.module').then(m => m.GamesReviewSitesCommentModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class GamesReviewSitesEntityModule {}
