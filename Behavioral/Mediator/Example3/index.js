const ConcreteMediator = require("./ConcreteMediator");
const ConcreteColleague1 = require("./ConcreteColleague1");
const ConcreteColleague2 = require("./ConcreteColleague2");

const mediator = new ConcreteMediator();
const colleague1 = new ConcreteColleague1(mediator);
const colleague2 = new ConcreteColleague2(mediator);

mediator.SetColleagues(colleague1, colleague2);

colleague1.Send("Are you ready?");
colleague2.Send("Yes, I am ready.");

