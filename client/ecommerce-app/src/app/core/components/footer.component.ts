import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
  <div class="footer-container">
    
    <div class="brand-footer">
      <span class="brand-name-title">Shop</span>
      <p class="footer-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <div class="customer-service-footer">
      <span class="customer-service-title">Service Client</span>
      <ul>
        <li><a href="#">Livraison et retour</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contactez-nous</a></li>
        <li><a href="#">La carte du magasin</a></li>
        <li><a href="#">Conditions Générales de Vente</a></li>
      </ul>
    </div>

    <div class="payment-methods">
      <span class="payment-methods-title">Moyens de paiement</span>
      <ul>
        <img
          src="../../../assets/ressources/Mastercard-logo.svg"
          alt="mastercard-icon"
        />
        <img
          src="../../../assets/ressources/Visa_Inc.-Logo.svg"
          alt="visa-icon"
        />
      </ul>
    </div>

    <div class="about-footer">
      <span class="brand-name">Notre boutique</span>
      <ul>
        <li><a href="#">Qui sommes-nous ?</a></li>
        <li><a href="#">Carrières</a></li>
        <li><a href="#">Relations Presse et Partenariat</a></li>
      </ul>
    </div>

    <div class="medias-footer">
      <span class="medias-title">Suivez-nous</span>
      <ul>
        <a href="#"
          ><img
            src="../../../assets/ressources/facebook.svg"
            alt="facebook-icon"
        /></a>
        <a href="#">
          <img src="../../../assets/ressources/twitter.svg" alt="twitter-icon"
        /></a>
      </ul>
    </div>
    <div class="copyright">ShopApp © 2022</div>
    </div>


</footer>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
}
