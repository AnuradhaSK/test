import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NwalgoComponent} from './nwalgo.component';
import {Component} from '@angular/core';
import {SharingService} from '../../services/sharing.service';


@Component({selector: 'app-nw-form', template: ''})
class NwFormStubComponent {
}

@Component({selector: 'app-nw-grid', template: ''})
class NwGridStubComponent {
}


describe('NwalgoComponent', () => {
  let component: NwalgoComponent;
  let fixture: ComponentFixture<NwalgoComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [NwalgoComponent,
        NwFormStubComponent,
        NwGridStubComponent
      ],
      providers: [ SharingService
      ]
    });
    fixture = TestBed.createComponent(NwalgoComponent);
    component = fixture.componentInstance;
    // UserService from the root injector
    const sharingService = TestBed.get(SharingService);
    fixture.detectChanges();
  }));


  it('should create nwalgo component', () => {
    expect(component).toBeTruthy();
  });

  it('should render algo name in h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('NEEDLEMAN-WUNSCH');
  });
});
