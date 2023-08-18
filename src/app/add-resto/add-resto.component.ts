import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit { // Correct interface name to OnInit

  constructor(private resto: RestoService) { }

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  alert=false;
  ngOnInit(): void {
    // Initialization or setup code if needed
  }
  collectResto() {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      console.warn(result);
      this.alert=true;
    })
    this.addResto.reset({});
  }
  closeResto():void{
    this.alert=false;
  }
}
