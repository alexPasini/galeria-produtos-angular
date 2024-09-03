import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { CartItemComponent } from '../shared/layout/cart-item/cart-item.component';
import { HeaderComponent } from '../header/header.component';
import { SideBarModalComponent } from '../shared/layout/sidebar-modal/sidebar-modal.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ButtonModule,
        MainPageComponent,
        CartItemComponent,
        HeaderComponent,
        SideBarModalComponent,
        ProductCardComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
