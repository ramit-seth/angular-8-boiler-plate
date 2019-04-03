import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, TooltipModule } from 'ngx-bootstrap';
import { DefaultModalComponent } from './components/default-modal/default-modal.component';
import { BootstrapInputModule } from './modules/ng-bootstrap-input/ng-bootstrap-input';

@NgModule({
  declarations: [DefaultModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapInputModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapInputModule,
    AlertModule,
    TooltipModule,
    DefaultModalComponent
  ]
})
export class SharedModule {}
