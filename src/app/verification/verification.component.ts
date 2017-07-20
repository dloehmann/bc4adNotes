import {Component, OnInit} from '@angular/core';
import {Verification} from "./verification";
import {RfaService} from "../rfa-service";


@Component({
  selector: 'verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  providers: [RfaService]
})


export class VerificationComponent implements OnInit {

  verifications : Verification[];

  constructor(rfaService:RfaService ) {
    rfaService.getVerifications().then(verifications => this.verifications= verifications)

  }

  ngOnInit() {
  }

}
