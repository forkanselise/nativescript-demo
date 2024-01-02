import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-absolute',
  templateUrl: './absolute.component.html',
  styleUrls: ['./absolute.component.css']
})
export class AbsoluteComponent {

  @Output() input = new EventEmitter<string>();

  challengeDescription: string = '';
  currentChallenges: string[] = [];

  onSetChallenge() {
    // this.currentChallenge = this.challengeDescription
    // console.log(this.currentChallenge)

    // this.input.emit(this.currentChallenge)

    this.currentChallenges.push(this.challengeDescription)

  }

  onItemTap() {

  }

}
