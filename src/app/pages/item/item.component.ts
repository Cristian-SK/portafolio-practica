import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDes} from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDes | undefined;
  id: string | undefined;

  constructor( private route:ActivatedRoute,
                public productoService: ProductosService) { }

  ngOnInit() {
 
    this.route.params
    .subscribe(parametros => {
        this.productoService.getProducto(parametros['id'])
        .subscribe( (prodcuto: any) => {
          
          this.id = parametros['id'];
          this.producto = prodcuto;
          
        });

    });

  }
}