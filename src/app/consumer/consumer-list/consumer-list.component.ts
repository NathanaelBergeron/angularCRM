import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsumerService } from './../consumer.service';
import { Component, OnInit } from '@angular/core';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

  search?: string;
  consumers?: Observable<Consumer[]>;

  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit(): void {
    this.consumers= this.consumerService.getList();
  }

  doSearch(): void {
    this.consumers = this.consumerService.getFilteredList(this.search!);
  }

}
