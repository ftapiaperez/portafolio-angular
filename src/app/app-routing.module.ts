import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemsComponent } from './pages/items/items.component';
import { SearchComponent } from './pages/search/search.component';


const appRoutes: Routes = [
{ path: 'home', component: PortafolioComponent},
{ path: 'about', component: AboutComponent},
{ path: 'items/:id', component: ItemsComponent},
{ path: 'search/:termino', component: SearchComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}
