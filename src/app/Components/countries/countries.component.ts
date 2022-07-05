// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/internal/Observable';
// import { CountryActions } from 'src/app/Store/Actions/Country.actions';
// import { of } from 'rxjs';
// import { Country } from 'src/app/Modules/country/country.model';

// @Component({
//   selector: 'countries',
//   templateUrl: './countries.component.html',
//   styleUrls: ['./countries.component.css']
// })
// export class CountriesComponent implements OnInit {
//   countries$?: Observable<Country[]>;
//   error$?: Observable<any>;
//   isLoading$?: Observable<boolean> ;
 
//   constructor(
//       private store$: Store<CountryState>,
//       private router: Router) 
//   {
//   }

//   ngOnInit() {
//       this.store$.dispatch(CountryActions.loadRequestAction());

//       this.store$.select(getCountries).subscribe(res => 
//           {
//                //this .countries$ =res as Observable<Country[]>;
//               this.countries$=of(res)    }
//       );
//      // this.isLoading$ = this.store$.select(getCountryIsLoading) as unknownas;
//   }

//   onRefresh()
//   {
//       this.store$.dispatch(CountryActions.loadRequestAction());
//   }

//   selectById(id:number) {
//       this.router.navigate(['country', id]);     
//   }

//   eventNewRecord(event:any)
//   {
//       this.router.navigate(['create']);     
//   }
// }

// function getCountries(getCountries: any) {
//     throw new Error('Function not implemented.');
// }
