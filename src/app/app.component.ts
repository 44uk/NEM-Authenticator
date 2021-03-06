/*
 * MIT License
 *
 * Copyright (c) 2017 Aleix Morgadas <aleixmorgadas@openmailbox.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import {Component, ViewChild} from "@angular/core";
import {AlertController, LoadingController, ModalController, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {SetupPage} from "../pages/setup/setup";
import {Storage} from "@ionic/storage";
import {TranslateService} from '@ngx-translate/core';
import {HomePage} from "../pages/home/home";
import {Account, Address, NEMLibrary} from "nem-library";
import {LoginModal} from "../components/login-modal/login.modal";
import {AccountService} from "../services/account.service";
import {SimpleWallet} from "nem-library/dist/src/models/wallet/SimpleWallet";
import {AccountPage} from "../pages/account/account.page";
import {Globalization} from "@ionic-native/globalization";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private modalCtrl: ModalController,
              private accountService: AccountService,
              private storage: Storage,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private translateService: TranslateService,
              private globalization: Globalization) {

    let loader = loadingCtrl.create({
      content: "Please wait..."
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      let availableLanguages = ['en'];


      //i18n configuration
      this.translateService.setDefaultLang('en');
      if (platform.is('cordova')) {
        this.globalization.getPreferredLanguage()
          .then(language => {
            //if the file is available
            if (language.value in availableLanguages) {
              this.translateService.use(language.value);
            }
            //else, try with the first substring
            else{
              for (var lang of availableLanguages){
                if(language.value.split("-")[0] == lang){
                  this.translateService.use(lang);
                  break;
                }
              }
            }
          })
          .catch(e => console.log(e));
      }
      else{
        this.translateService.use('en');
      }

      statusBar.styleDefault();
      splashScreen.hide();

      loader.present();
      this.storage.get('WALLET').then(walletFile => {
        loader.dismiss();
        if (walletFile !== null) {
          let wallet = SimpleWallet.readFromWLT(walletFile);
          this.storage.get('MULTISIG_ADDRESS').then(multisig => {
            NEMLibrary.bootstrap(wallet.network);
            let modal = this.modalCtrl.create(LoginModal, {
              wallet: wallet,
              multisig: new Address(multisig)
            });
            modal.onDidDismiss((account: Account) => {
              this.accountService.setAccount(account);
              this.accountService.setMultisig(new Address(multisig));
              this.rootPage = HomePage;
            });
            modal.present();
          });
        } else {
          this.rootPage = SetupPage;
        }
      });
    });
  }

  viewTransactions() {
    this.navCtrl.setRoot(HomePage);
  }

  viewAccountDetails() {
    this.navCtrl.setRoot(AccountPage);
  }

  async removeAccount() {
    this.alertCtrl.create({
      title: await this.translateService.get('REMOVE_ACCOUNT_TITLE').toPromise(),
      message: await this.translateService.get('REMOVE_ACCOUNT_MESSAGE').toPromise(),
      buttons: [
        {
          text: await this.translateService.get('REMOVE_ACCOUNT_DISMISS').toPromise(),
          handler: () => {
            console.log('Dismiss clicked');
          }
        },
        {
          text: await this.translateService.get('REMOVE_ACCOUNT_AGREE').toPromise(),
          handler: () => {
            this.storage.clear().then(_ => {
              this.navCtrl.setRoot(SetupPage);
            })
          }
        }
      ]
    }).present();
  }
}

