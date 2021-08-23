import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'comprar', component: ComprarComponent},
  {path: 'compras', component: ComprasComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ProductosComponent,
    ComprarComponent,
    ComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
