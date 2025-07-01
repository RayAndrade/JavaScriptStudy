const SubsystemA = require('./SubsystemA');
const SubsystemB = require('./SubsystemB');
const SubsystemC = require('./SubsystemC');

class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }
    simpleOperation() {
        const resultA = this.subsystemA.operationA();
        const resultB = this.subsystemB.operationB();
        const resultC = this.subsystemC.operationC();

        return `Facade combines: [ ${resultA} | ${resultB} | ${resultC} ]`;
    }
}
module.exports = Facade;