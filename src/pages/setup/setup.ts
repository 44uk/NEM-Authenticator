import {Component, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Slides, ToastController} from "ionic-angular";
import {Account} from "nem-library";

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
  form: FormGroup;
  @ViewChild(Slides) slides: Slides;
  account: Account;

  constructor(private formBuilder: FormBuilder,
              public toastCtrl: ToastController) {
    this.form = formBuilder.group({
      privateKey: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(64),
          Validators.maxLength(66)])],
      myAccount: [false, Validators.requiredTrue]
    });
  }

  confirm() {

  }

  verifyAccount() {
    let privateKey: string = this.form.get('privateKey').value;
    if ((privateKey.length !== <number>64) && (privateKey.length !== <number>66)) {
      this.toastCtrl.create({
        message: "Check your private key",
        duration: 1000
      }).present();
    } else {
      this.account = Account.generateWithPrivateKey(privateKey);
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext(500);
    }
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex == 2 && this.account === undefined) {
      this.slides.lockSwipeToNext(true);
    } else {
      this.slides.lockSwipeToNext(false);
    }
  }
}