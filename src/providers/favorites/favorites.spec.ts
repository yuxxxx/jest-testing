import { FavoritesProvider } from './history';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule } from 'ionic-angular/umd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from '../../app/app.component';

describe('FavoritesProvider', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [FavoritesProvider],
      imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        IonicStorageModule.forRoot()
      ]
    }).compileComponents());

  describe('Injection', () => {
    let favorites: FavoritesProvider;
    beforeEach(() => favorites = TestBed.get(FavoritesProvider));

    it('items can seved', () => {
      return favorites.storage.get('items').then(result => expect(result).toEqual('saved!'));
    });
  });
});
