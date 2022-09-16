import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector:'app-star',
    templateUrl: './star.component.html'
    
})
export class StarComponent implements OnChanges {


    @Input()   // informando ao angular que o atributo esta elegivel para receber alguma informação; no final vira um atributo de uma tag no componente
    rating: number =0;

    starWidth: number;

    ngOnChanges(): void {
    this.starWidth = this.rating * 94 / 5;
        
    }

}