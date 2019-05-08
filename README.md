
# Angular-Dynamic-Textbox-List
Angular dynamic list of ordered or unordered textboxes

Demo: https://stackblitz.com/edit/angular-jtohae

- Creates a dynamic list of ordered or unordered textboxes
- Pressing enter in any textbox creates a new item at the end of the list
- Empty textboxes are removed from the list upon blur

Parameters:

	[listStyle] : "ul" or "ol" (default "ol")
	[name] : element name (default is new Date().getTime().toString())
	[readOnly] : true = display text for each item; false = use textbox for each item
	[(items)] : string array of list items
	(itemsChange) : string array of list items

Usage:

    <textbox-list name="ordered" [(items)]="items1" [readOnly]="false"></textbox-list>
    <textbox-list name="unordered" [(items)]="items2" [readOnly]="false" listStyle="ul"></textbox-list>
