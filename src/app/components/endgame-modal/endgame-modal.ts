import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endgame-modal',
  imports: [],
  templateUrl: './endgame-modal.html',
  styleUrl: './endgame-modal.css'
})
export class EndgameModal {
  @Input() score: number = 0;
  @Input() maxRounds: number = 0;
  @Output() restartGame: EventEmitter<void> = new EventEmitter<void>();
  
  onRestartGame(): void {
    this.restartGame.emit();
  }

  resultMessage(): string {
    if (this.score === this.maxRounds) {
      return "AÉÉÉÉÉÉÉÉÉÉÉÉÉÉ";
    } else if (this.score > this.maxRounds * 0.9) {
      return "AÉÉ";
    } else if (this.score > this.maxRounds * 0.5) {
      return "AÉ.";
    } else {
      return "Titi? É você?";
    }
  }
}
