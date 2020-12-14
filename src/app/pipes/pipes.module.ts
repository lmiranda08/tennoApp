import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { ImgPipe } from './img.pipe';
import { SpacesPipe } from './spaces.pipe';


@NgModule({
  declarations: [
    FiltroPipe,
    ImgPipe,
    SpacesPipe
  ],
  exports: [
    FiltroPipe,
    ImgPipe,
    SpacesPipe
  ]
})
export class PipesModule { }
