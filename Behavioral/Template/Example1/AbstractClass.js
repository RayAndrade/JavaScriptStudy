
class AbstractClass {
    templateMethod() {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.requiredOperation2();
   }
    baseOperation1() {
        console.log("AbstractClass: performing baseOperation1 (common)");
    }
    baseOperation2() {
        console.log("AbstractClass: performing baseOperation2 (common)");
    }
    requiredOperation1() {
        throw new Error("requiredOperation1() must be implemented by subclass");
    }
    requiredOperation2() {
        throw new Error("requiredOperation2() must be implemented by subclass");
    }
}
