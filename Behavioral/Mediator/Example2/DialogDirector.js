class DialogDirector {
    ShowDialog() {
        this.CreateWidgets();
    }

    CreateWidgets() {
        throw new Error("A dialog director must implement CreateWidgets().");
    }

    WidgetChanged(theChangedWidget) {
        throw new Error("A dialog director must implement WidgetChanged().");
    }
}

module.exports = DialogDirector;