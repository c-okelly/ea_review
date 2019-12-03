import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GamesReviewSitesSharedModule } from 'app/shared/shared.module';
import { GamesReviewSitesCoreModule } from 'app/core/core.module';
import { GamesReviewSitesAppRoutingModule } from './app-routing.module';
import { GamesReviewSitesHomeModule } from './home/home.module';
import { GamesReviewSitesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GamesReviewSitesSharedModule,
    GamesReviewSitesCoreModule,
    GamesReviewSitesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GamesReviewSitesEntityModule,
    GamesReviewSitesAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GamesReviewSitesAppModule {}
