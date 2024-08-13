import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { CartItemComponent } from '../shared/layout/cart-item/cart-item.component'; // Importar o CartItemComponent
import { HeaderComponent } from '../header/header.component'; // Importar o HeaderComponent se necessário
import { SideBarModalComponent } from '../shared/layout/sidebar-modal/sidebar-modal.component'; // Importar o SidebarModalComponent
import { ProductCardComponent } from '../product-card/product-card.component'; // Importar o ProductCardComponent

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        CartItemComponent, // Declarar o CartItemComponent
        HeaderComponent, // Declarar o HeaderComponent
        SideBarModalComponent, // Declarar o SidebarModalComponent
        ProductCardComponent // Declarar o ProductCardComponent
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
