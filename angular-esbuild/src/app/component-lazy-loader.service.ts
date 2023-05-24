import { Injectable } from '@angular/core';
import { type ComponentAComponent } from './component-a/component-a.component';

@Injectable({
  providedIn: 'root',
})
export class ComponentLazyLoaderService {
  constructor() {}

  load(): Promise<ComponentAComponent> {
    return import('./component-a/component-a.component').then(
      (m) => m.ComponentAComponent
    );
  }
}
