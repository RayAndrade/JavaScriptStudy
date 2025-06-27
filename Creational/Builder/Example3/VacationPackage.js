class VacationPackage {
    constructor() {
        this.hotel = null;
        this.tickets = [];
        this.meals = [];
        this.activities = [];
    }
    setHotel(hotel) {
        this.hotel = hotel;
    }
    addTicket(ticket) {
        this.tickets.push(ticket);
    }
    addMeal(meal) {
        this.meals.push(meal);
    }
    addActivity(activity) {
        this.activities.push(activity);
    }
    showDetails() {
        console.log("Vacation Package Details:");
        console.log("Hotel:", this.hotel);
        console.log("Tickets:", this.tickets.join(", "));
        console.log("Meals:", this.meals.join(", "));
        console.log("Activities:", this.activities.join(", "));
    }
}
module.exports = VacationPackage;