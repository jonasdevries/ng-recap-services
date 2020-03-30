import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
  // providers: [CounterService]
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
