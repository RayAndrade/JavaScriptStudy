class Widget {
    constructor(director) {
        this._director = director;
    }

    Changed() {
        this._director.WidgetChanged(this);
    }
}

module.exports = Widget;