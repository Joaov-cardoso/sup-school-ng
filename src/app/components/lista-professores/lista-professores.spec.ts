import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfessores } from './lista-professores';

describe('ListaProfessores', () => {
  let component: ListaProfessores;
  let fixture: ComponentFixture<ListaProfessores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProfessores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProfessores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
