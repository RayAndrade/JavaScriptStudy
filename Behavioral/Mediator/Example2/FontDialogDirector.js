const DialogDirector = require("./DialogDirector");
const ListBox = require("./ListBox");
const EntryField = require("./EntryField");
const Button = require("./Button");

class FontDialogDirector extends DialogDirector {
    CreateWidgets() {
        this._ok = new Button(this);
        this._cancel = new Button(this);
        this._fontList = new ListBox(this, ["Arial", "Georgia", "Courier New"]);
        this._fontName = new EntryField(this);
    }

    WidgetChanged(theChangedWidget) {
        if (theChangedWidget === this._fontList) {
            const selection = this._fontList.GetSelection();
            this._fontName.SetText(selection);
            console.log(`Font name field: ${this._fontName.GetText()}`);
        } else if (theChangedWidget === this._ok) {
            console.log(`Applied font: ${this._fontName.GetText()}`);
            console.log("Dialog closed.");
        } else if (theChangedWidget === this._cancel) {
            console.log("Dialog canceled. No font applied.");
        }
    }
}

module.exports = FontDialogDirector;