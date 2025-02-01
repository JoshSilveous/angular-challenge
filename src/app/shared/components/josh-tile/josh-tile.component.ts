import { CommonModule } from '@angular/common'
import { Component, HostBinding, Input } from '@angular/core'

@Component({
	selector: 'josh-tile',
	imports: [CommonModule],
	templateUrl: './josh-tile.component.html',
	styleUrl: './josh-tile.component.scss',
})
export class JoshTileComponent {
	@Input() selected: boolean = false
}
