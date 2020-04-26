import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
    imports: [
        MatButtonModule,
        MatChipsModule,
    ],
    
    exports: [
        MatButtonModule, 
        MatChipsModule,
    ],
})
export class MaterialModule { }