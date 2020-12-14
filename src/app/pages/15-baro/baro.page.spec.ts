import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaroPage } from './baro.page';

describe('BaroPage', () => {
  let component: BaroPage;
  let fixture: ComponentFixture<BaroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
