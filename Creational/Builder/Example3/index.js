const FamilyVacationBuilder = require('./FamilyVacationBuilder');
const VacationDirector = require('./VacationDirector');

const builder = new FamilyVacationBuilder();
const director = new VacationDirector();

director.construct(builder);

const vacation = builder.getVacationPackage();     // Retrieve finished product
vacation.showDetails();
