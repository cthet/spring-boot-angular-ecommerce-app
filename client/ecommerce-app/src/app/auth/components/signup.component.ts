import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  template: `
    <div class="global-container">
      <h1>Je crée un compte</h1>

      <div class="container signup-container">
        <div *ngIf="error != ''" class="msg-error">{{ error }}</div>

        <div class="row">
          <div class="signup-form">
            <form [formGroup]="signup">
              <div class="signup-form-civility col-xs-12">
                <label>Civilité *</label>
                <div>
                  <mat-radio-group formControlName="civility" required>
                    <mat-radio-button value="Madame" [checked]="true"
                      >Mme</mat-radio-button
                    >
                    <mat-radio-button value="Monsieur">M.</mat-radio-button>
                  </mat-radio-group>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <mat-form-field appearance="outline">
                    <mat-label>Prénom</mat-label>
                    <input
                      matInput
                      required
                      type="text"
                      formControlName="firstName"
                     
                    />
                    <mat-error
                      *ngIf="
                        signup.pristine ||
                        (signup.dirty &&
                          signup.value.firstName.length == 0)
                      "
                      >Ce champ est requis.
                    </mat-error>
                    <mat-error
                      *ngIf="
                        signup.dirty &&
                        signup.value.firstName.length > 0
                      "
                      >Ce champ ne peut contenir de caractères spéciaux.
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="outline">
                    <mat-label>Nom</mat-label>
                    <input
                      matInput
                      required
                      type="text"
                      formControlName="lastName"                      
                    />
                    <mat-error
                      *ngIf="
                        signup.pristine ||
                        (signup.dirty &&
                          signup.value.lastName.length == 0)
                      "
                      >Ce champ est requis.
                    </mat-error>
                    <mat-error
                      *ngIf="
                        signup.dirty &&
                        signup.value.lastName.invalid
                      "
                      >Ce champ ne peut contenir de caractères spéciaux.
                    </mat-error>
                  </mat-form-field>
                </div>

                <div class="col-xs-12 col-md-6">
                  <mat-form-field appearance="outline">
                    <mat-label>Email</mat-label>
                    <input
                      matInput
                      required
                      type="email"
                      email="true"
                      formControlName="email"
                      placeholder="{{ email }}"
                      
                    />
                    <mat-error
                      *ngIf="
                        signup.pristine ||
                        (signup.dirty &&
                          signup.value.email.length == 0)
                      "
                      >Ce champ est requis.
                    </mat-error>
                    <mat-error
                      *ngIf="
                        signup.dirty &&
                        signup.value.email.length > 0
                      "
                      >Renseignez une adresse email valide.
                    </mat-error>
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Mot de passe</mat-label>
                    <input
                      matInput
                      required
                      minlength="8"
                      maxlength="40"
                      type="password"
                      formControlName="password"                      
                    />
                    <mat-error
                      *ngIf="
                        signup.pristine ||
                        (signup.dirty &&
                          signup.value.password.length == 0)
                      "
                      >Ce champ est requis.
                    </mat-error>
                    <mat-error
                      *ngIf="
                        signup.dirty &&
                        signup.value.password.length > 0 &&
                        signup.value.password.length < 8
                      "
                      >Renseignez un autre mot de passe de plus de 8 caractères.
                    </mat-error>
                  </mat-form-field>
                  <button class="btn" (click)="signupAction.emit()">
                    Créer un compte
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @Input() signup!: FormGroup;
  @Input() email!: string | null;
  @Input() error!: string | null;

  @Output() signupAction = new EventEmitter();
}
