import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
 
export class AppComponent {
  Menu:any[] = [
    {titulo : "Inicio", icon:'home', url:'/menup'},
    {titulo : "Caixa", icon:'cash', url:'/caixa' },
    {titulo : "Vendas", icon:'analytics', url:'/vd' },
    {titulo : "Relatório", icon:'cash', url:'/report'},
    {titulo : "Configurações", icon:'build', url:'/config' },
    {titulo : "Sair", icon:'exit', url:'/home' }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
