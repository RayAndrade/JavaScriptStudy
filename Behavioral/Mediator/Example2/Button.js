const Widget = require("./Widget");

class Button extends Widget {
    HandleMouse() {
        this.Changed();
    }
}

module.exports = Button;