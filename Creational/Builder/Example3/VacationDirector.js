class VacationDirector {
    construct(builder) {
        builder.setHotel();
        builder.addTickets();
        builder.addMeals();
        builder.addActivities();
    }
}
module.exports = VacationDirector;