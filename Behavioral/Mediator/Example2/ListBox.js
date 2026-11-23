const Widget = require("./Widget");

class ListBox extends Widget {
    constructor(director, fonts) {
        super(director);
        this._fonts = fonts;
        this._selection = "";
    }

    Select(font) {
        if (!this._fonts.includes(font)) {
            throw new Error(`Font is unavailable: ${font}`);
        }

        this._selection = font;
        this.Changed();
    }

    GetSelection() {
        return this._selection;
    }
}

module.exports = ListBox;