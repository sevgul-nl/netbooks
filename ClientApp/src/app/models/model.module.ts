import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Repository } from './repository';
@NgModule({
  providers: [Repository],
  imports: [HttpClientModule],
})
export class ModelModule {}
