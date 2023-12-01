import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
@Input() name: string | undefined;
@Input() description: string | undefined;
@Input() img: string | undefined;
@Input() id: string | undefined;


}

