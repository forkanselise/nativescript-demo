import { Component } from '@angular/core'

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent {
  challengeDescription: string = '';
  currentChallenges: string[] = [];

  onSetChallenge() {
    // this.currentChallenge = this.challengeDescription
    console.log(this.challengeDescription)

    // this.input.emit(this.currentChallenge)

    this.currentChallenges.push(this.challengeDescription)

  }

  onItemTap() {

  }

}
