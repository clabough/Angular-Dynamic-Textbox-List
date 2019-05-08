import { Component, Input, Output, SimpleChanges, EventEmitter, OnInit, OnChanges, ChangeDetectionStrategy } from "@angular/core";

@Component({
	selector: "textbox-list",
  styles: ['input.text-item:not(:focus) + .show-on-focus {display: none;} .show-on-focus {margin-left: 3px; color: silver;}'],
	templateUrl: "./textbox-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextboxListComponent implements OnInit, OnChanges {
	@Input() listStyle: string = "ol";
  @Input() name: string = new Date().getTime().toString();
	@Input() readOnly: boolean;
	@Input() items: string[];
	@Output() itemsChange = new EventEmitter();

	rowItems: string[];

	ngOnInit() {
		if (!this.rowItems) this.rowItems = [""];
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.rowItems = this.items;
		if (!this.rowItems) this.rowItems = [""];
	}

	addItem(event, i) {
    if (!this.rowItems[i]) return;
		this.rowItems.push("");
		this.itemsChange.emit(this.rowItems);

		setTimeout(() => {
			const element = document.getElementById(this.name + (this.rowItems.length - 1));
			if (element) element.focus();
		}, 0);
	}

	blurred(index: number) {
		if (this.rowItems.length > 1) {
			if (!this.rowItems[index]) this.rowItems.splice(index, 1);
		}
		this.itemsChange.emit(this.rowItems);
	}

	trackByFn(index: number) {
		return index;
	}
}
