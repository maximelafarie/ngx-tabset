import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {TabsetComponent} from '../components/tab-set';
import {TabHeadingDirective} from '../components/tab-heading';
import {TabComponent} from '../components/tab';
import {TabTranscludeDirective} from '../components/tab-transclude';

@NgModule({
    declarations: [
        TabComponent,
        TabHeadingDirective,
        TabsetComponent,
        TabTranscludeDirective
    ],
    exports: [
        TabComponent,
        TabHeadingDirective,
        TabsetComponent,
    ],
    imports: [CommonModule, BrowserModule]
})
export class TabsModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: TabsModule,
            providers: []
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: TabsModule,
            providers: []
        };
    }

}
