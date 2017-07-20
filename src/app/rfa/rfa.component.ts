import {Component, OnInit, Input} from '@angular/core';
import {Rfa} from "../domain/rfa";
import {RFAs} from "../mocks/mocks";
import {RfaService} from "../rfa-service";

@Component({
  selector: 'rfa',
  templateUrl: './rfa.component.html',
  styleUrls: ['./rfa.component.css'],
  providers: [RfaService]
})



export class RfaComponent implements OnInit {

  rfas = RFAs;
  @Input() selectedRfa;
  @Input() displayedRfa;

  showRfa(rfa: Rfa) {
    this.selectedRfa = rfa;
    this.displayedRfa = this.selectedRfa;
  }

  selectRfa(rfa: Rfa) {
    this.selectedRfa = rfa;
    this.displayedRfa = undefined;
  }


  constructor(rfaService:RfaService ) {
    rfaService.getRfas().then(rfas => this.rfas= rfas)

  }

  ngOnInit() {
  }





}
