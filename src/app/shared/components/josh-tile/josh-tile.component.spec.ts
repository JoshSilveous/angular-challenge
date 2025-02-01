import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoshTileComponent } from './josh-tile.component';

describe('JoshTileComponent', () => {
  let component: JoshTileComponent;
  let fixture: ComponentFixture<JoshTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoshTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoshTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
