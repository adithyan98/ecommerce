import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId:any
  productDetails:any

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private productService:ProductService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:any)=>{
      this.productId = data['id']
    })

    this.productService.viewProduct(this.productId).subscribe((item:any)=>{
      this.productDetails = item
    })
  }
  updateProduct(form:any){
    let updateProduct = {
      id:form.value.id,
      productName:form.value.productName,
      categoryId:form.value.categoryId, 
      description: form.value.description ,
      price: form.value.price,
      is_available:form.value.is_available, 
      productImg: form.value.productImg, 
      rating: form.value.rating, 
      review: form.value.review,
      vendor_name:form.value.vendor_name, 
      warrenty: form.value.warrenty
    }
    this.productService.updateProduct(this.productId,updateProduct).subscribe((data:any)=>{
      alert("Updated Product Successfully")
      this.router.navigateByUrl('product')
    })
  }
}
