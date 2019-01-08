import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SharedHomeModule {}
