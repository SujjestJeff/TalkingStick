import { Component, OnInit } from '@angular/core';
import { TalkersService } from '../../core/talkers.service'

@Component({
  selector: 'app-talkers',
  templateUrl: './talkers.component.html',
  styleUrls: ['./talkers.component.css']
})
export class TalkersComponent implements OnInit {

  constructor(public talkersService: TalkersService) { }

  ngOnInit(): void {
  }

}
