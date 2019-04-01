import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  login:FormGroup;
  constructor( public nav:NavController, public fb:FormBuilder){
    this.login = this.fb.group({
      usuario:['',Validators.required],
      senha:['',Validators.required]
    });
  }
msg:string;
entrar(){
  console.log(this.login.value)
  if(this.login.get("usuario").value == "teo" && this.login.get("senha").value == "123"){
  this.nav.navigateRoot(['/menup'])
  }else{
    this.msg = "Usuario ou senha estão incorretas";
  }
  }

}
