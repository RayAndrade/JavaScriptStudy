/* at the top 1 */
function Subject() {
    this.observers = [];
}
/* 2 */


// Test code
/*
const subject = new Subject();

const observerA = new Observer("Observer A");
const observerB = new Observer("Observer B");
const observerC = new Observer("Observer C");

subject.subscribe(observerA);
subject.subscribe(observerB);
subject.subscribe(observerC);

subject.notify("First message");

subject.unsubscribe(observerB);

subject.notify("Second message");
*/