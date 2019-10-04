import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PluginPage } from './plugin.page';

import {BotaoComponent} from '../botao/botao.component';

const routes: Routes = [
  {
    path: '',
    component: PluginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PluginPage,BotaoComponent]
})
export class PluginPageModule {}
