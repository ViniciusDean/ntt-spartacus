import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActiveCartService } from "@spartacus/core";
import { MiniCartComponent, ICON_TYPE } from "@spartacus/storefront";
import { Observable } from "rxjs";
import { filter, map, startWith } from 'rxjs/operators';


@Component({
  selector: 'viniciusMINICART',
  templateUrl: './custom-mini-cart.component.html',
  styleUrls: ['./custom-mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMiniCartComponent extends MiniCartComponent{
  iconTypes = ICON_TYPE;

  quantity$: Observable<number> = this.activeCartService.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string> = this.activeCartService.getActive().pipe(
    filter((cart) => !!cart.totalPrice),
    map((cart) => cart.totalPrice!.formattedValue || "") 
  );

  constructor( activeCartService: ActiveCartService) {
    super(activeCartService)
  }
}
