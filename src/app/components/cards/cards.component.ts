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


// <div class="card" style="width: 18rem; ">
// <img src="https://picsum.photos/400/300" class="card-img-top" alt>
// <div class="card-body">
//     <h5 class="card-title">{{project.name}}</h5>
//     <p class="card-text">{{project.description}}</p>
//     <a href="#" class="btn button-gradiente button-gradiente-hover " routerLink="/project/{{project.id}}">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
//             <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
//             <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
//           </svg>
//     </a>
 
// </div>
// </div>