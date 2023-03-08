import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
//import { UiSwitchModule } from 'ngx-toggle-switch';
import {MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatGridListModule,
        MatIconModule,
        MatTabsModule,
        MatSnackBarModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatExpansionModule,
       // MatNativeDateModule,
        MatFormFieldModule,
        MatListModule,
        MatSliderModule,
        MatStepperModule,
        MatSelectModule,
        MatInputModule,
       // MatOptionModule,
        MatCardModule,
        MatDatepickerModule,
        MatDividerModule,
        MatTableModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatBadgeModule,
        MatButtonToggleModule,
        MatChipsModule,
      //  MAT_LABEL_GLOBAL_OPTIONS,
        MatSortModule,
        MatPaginatorModule,
        MatSlideToggleModule
        
        
        
       } from '@angular/material';
const materialModules = [ MatToolbarModule,
                          MatButtonModule,
                          MatSidenavModule,
                          MatGridListModule,
                          MatIconModule,
                          MatTabsModule,
                          MatSnackBarModule,
                          MatRadioModule,
                          MatAutocompleteModule,
                          MatCheckboxModule,
                          MatExpansionModule,
                        //  MatNativeDateModule,
                          MatFormFieldModule,
                          MatListModule,
                          MatSliderModule,
                          MatStepperModule,
                          MatSelectModule,
                          MatInputModule,
                         // MatOptionModule,
                          MatCardModule,
                          MatDatepickerModule,
                          MatDividerModule,
                          DragDropModule,
                          MatTableModule,
                          MatMenuModule,
                          MatIconModule,
                          MatProgressSpinnerModule,
                          MatBadgeModule,
                          MatButtonToggleModule,
                        //  UiSwitchModule,
                          MatChipsModule,
                          MatSortModule,
                          MatPaginatorModule,
                          MatSlideToggleModule
                          
                         ];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules]
})
export class AngularMaterialModule { }
