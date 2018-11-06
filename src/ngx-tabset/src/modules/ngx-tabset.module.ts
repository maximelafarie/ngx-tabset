import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TabsetComponent } from '../components/tab-set';
import { TabComponent } from '../components/tab';

@NgModule({
  declarations: [
    TabComponent,
    TabsetComponent,
  ],
  exports: [
    TabComponent,
    TabsetComponent,
  ],
  imports: [CommonModule]
})
export class TabsModule {

  /**
   * Use in AppModule: new instance of NgxTabset.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TabsModule
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of NgxTabset.
   */
  public static forChild(): ModuleWithProviders {
    return {
      ngModule: TabsModule
    };
  }

}
