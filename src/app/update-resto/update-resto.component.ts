import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})


export class UpdateRestoComponent {
  restodata: any = {}
  alert=false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private resto: RestoService) { }
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result) => {
      this.restodata = result;
      this.editResto = new FormGroup({
        name: new FormControl(this.restodata.name),
        email: new FormControl(this.restodata.address),
        address: new FormControl(this.restodata.email),
      });
    })
  }
  collection() {
    console.warn("item", this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'], this.editResto.value).subscribe((result)=>{
      console.warn("result",result);
      this.alert=true;
    })
  }
  closeResto():void{
    this.alert=false;
  }
}
