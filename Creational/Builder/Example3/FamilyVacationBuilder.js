const VacationBuilder = require('./VacationBuilder');
const VacationPackage = require('./VacationPackage');
class FamilyVacationBuilder extends VacationBuilder {
    constructor() {
        super();
        this.package = new VacationPackage(); }
    setHotel() {
        this.package.setHotel("ObjectVille Family Resort");  }
    addTickets() {
        this.package.addTicket("Theme Park Family Pass");
        this.package.addTicket("Water Park Entry"); }
    addMeals() {
        this.package.addMeal("Buffet Breakfast");
        this.package.addMeal("Pizza Lunch");   }
    addActivities() {
        this.package.addActivity("Mini Golf");
        this.package.addActivity("Evening Parade");  }

    getVacationPackage() {
        return this.package; // Return the complete result
    }
}
module.exports = FamilyVacationBuilder;