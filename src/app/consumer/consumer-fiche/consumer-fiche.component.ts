import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Consumer } from './../model/consumer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsumerService } from './../consumer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'crm-consumer-fiche',
  templateUrl: './consumer-fiche.component.html',
  styleUrls: ['./consumer-fiche.component.scss']
})
export class ConsumerFicheComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  consumerForm: FormGroup;

  constructor(private ConsumerService: ConsumerService, private router: Router) {
    this.consumerForm = new FormGroup({
      civility: new FormControl(''),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
  }

  save(): void {
    this.subs.push(
      this.ConsumerService.createConsumer(this.consumerForm.value).subscribe({
        next:(data: Consumer) => {},
        error: (error: Error) => console.error(error),
        complete: () => this.router.navigateByUrl('/consumers')
      })
    );
  }


}
