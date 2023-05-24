import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLazyLoaderService } from '../component-lazy-loader.service';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  private componentLazyLoader = inject(ComponentLazyLoaderService);

ngOnInit(): void {
  this.componentLazyLoader.load().then((m) => {
    console.log('ComponentAComponent loaded');
  });
}

}
