import {AbstractControl, ValidationErrors} from '@angular/forms';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';

export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
    } // bunu key value olarak dönüyoruz ve değerini true dönüp ngIF içerisinde kullanırsak;
      // hatayı ekrana basıyoruz.
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({shouldBeUnique: true});
        }else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
