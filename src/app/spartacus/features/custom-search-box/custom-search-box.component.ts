
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CmsSearchBoxComponent, WindowRef, RoutingService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { SearchBoxComponent } from '@spartacus/storefront';


@Component({
  selector: 'cx-searchbox',
  templateUrl: './custom-search-box.component.html',
  styleUrls: ['./styles.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchBoxComponent extends SearchBoxComponent {
  constructor(
     searchBoxComponentService: SearchBoxComponentService,
     componentData: CmsComponentData<CmsSearchBoxComponent>,
     winRef: WindowRef,
     routingService: RoutingService

  ) {super(searchBoxComponentService, componentData, winRef, routingService)}

}
