const Widget = require("./Widget");

class EntryField extends Widget {
    constructor(director) {
        super(director);
        this._text = "";
    }

    SetText(text) {
        this._text = text;
    }

    GetText() {
        return this._text;
    }
}

module.exports = EntryField;