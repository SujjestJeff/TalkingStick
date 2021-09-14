import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalkersService {
  public talkers$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor() { }
  
  public addTalker(talkerName: string): void {
    const currentTalkers = this.talkers$.getValue();
    if (currentTalkers !== null){
      this.talkers$.next([...currentTalkers, talkerName]);
    }else{
      this.talkers$.next([talkerName]);
    }
    console.log('added talker:', talkerName);
  }
  

}
