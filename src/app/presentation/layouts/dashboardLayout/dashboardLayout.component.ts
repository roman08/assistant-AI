import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarMenuitemComponent } from '../../components/sidebarMenuitem/sidebarMenuitem.component';
import { routes } from 'app/app.routes';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarMenuitemComponent],
  templateUrl: './dashboardLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  public rutas = routes[0].children?.filter((route) => route.data);
  constructor(){
    console.log(this.rutas);

  }
  
}
