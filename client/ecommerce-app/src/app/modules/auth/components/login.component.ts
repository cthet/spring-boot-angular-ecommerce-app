import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="global-container">
      <h1>Identification</h1>

      <div class="container login-container">
        <div class="row">
          <div class="login-form col-6">

            <h3>Connexion</h3>
            <form [formGroup]="login">

            <div class="col-12">
              <mat-form-field appearance="outline">
                <mat-label>Adresse email</mat-label>
                <input
                  matInput
                  required
                  type="email"
                  email="true"
                  formControlName="email"
                  autocomplete="on"
                />
                <mat-error
                  *ngIf="
                    login.pristine ||
                    (login.dirty && login.value.email.length == 0)
                  "
                  >Ce champ est requis.
                </mat-error>
                <mat-error *ngIf="login.dirty && login.value.email.length > 0"
                  >Renseignez une adresse email valide.
                </mat-error>
              </mat-form-field>
              <span class="error-msg" *ngIf="error != null"
                >Vos identifiants sont incorrects.</span
              >
              </div>

              <div class="col-12">
              <mat-form-field appearance="outline">
                <mat-label>Mot de passe</mat-label>
                <input
                  matInput
                  required
                  type="password"
                  formControlName="password"
                  minlength="8"
                  maxlength="40"
                />
                <mat-error
                  *ngIf="
                    login.pristine ||
                    (login.dirty && login.value.password.length == 0)
                  "
                  >Ce champ est requis.
                </mat-error>
                <mat-error
                  *ngIf="
                    login.dirty &&
                    login.value.password.length > 0  &&
                    login.value.password.length < 8                    
                  "
                  >Renseignez un autre mot de passe de plus de 8 caractères.
                </mat-error>
              </mat-form-field>
              <span class="error-msg" *ngIf="error != null"
                >Vos identifiants sont incorrects.</span
              >
              </div>

              <p class="passwd-link"><a>Mot de passe oublié?</a></p>

              <button class="btn" type="submit" (click)="loginAction.emit()">
                Se connecter
              </button>
            </form>
          </div>
          <div class="goto-signup col-6">
            <h3>Je crée un compte</h3>
            <p class="signup-txt">
              Bénéficier d'offres exclusives.
              <br />
              Gagner du temps pour vos prochaines commandes.
            </p>
            <form>
              <mat-form-field appearance="outline">
                <mat-label>Adresse email</mat-label>
                <input
                  matInput
                  required
                  type="email"
                  email="true"
                  [formControl]="email"
                  autocomplete="on"
                />
                <mat-error
                  *ngIf="
                    email.pristine || (email.touched && email.value.length == 0)
                  "
                  >Ce champ est requis.
                </mat-error>
                <mat-error *ngIf="email.dirty && email.value.length > 0"
                  >Renseignez une adresse email valide.
                </mat-error>
              </mat-form-field>

              <button class="btn" type="submit" (click)="continue.emit()">
                Continuer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() login!: FormGroup;
  @Input() email!: FormControl;
  @Input() error!: string | null;

  @Output() loginAction = new EventEmitter();
  @Output() continue = new EventEmitter();
}
