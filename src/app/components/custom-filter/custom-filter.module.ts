import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CustomTextFilterComponent } from './custom-text-filter/custom-text-filter.component';
import { CustomDateComponent } from './custom-date/custom-date.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        Ng2SmartTableModule,
        // ModalModule.forRoot(),
        CurrencyMaskModule,
    ],
    declarations: [
        CustomTextFilterComponent,
        CustomDateComponent

    ],
    exports: [
        CustomTextFilterComponent,
        CustomDateComponent
    ],
    providers: [
    ],
    entryComponents: [
        CustomTextFilterComponent,
        CustomDateComponent
    ]
})

export class CustomFilterModule { }
