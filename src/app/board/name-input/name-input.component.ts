import { Component, OnInit } from '@angular/core';
import { TalkersService } from '../../core/talkers.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {
  constructor(private talkersService: TalkersService) { }

  ngOnInit(): void {
  }
  
  submitName(username: string){
    this.talkersService.addTalker(username);
  }

}
