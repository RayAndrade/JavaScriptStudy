class MazePrototypeFactory {
    constructor(maze, wall, room, door) {
        this._prototypeMaze = maze;
        this._prototypeWall = wall;
        this._prototypeRoom = room;
        this._prototypeDoor = door;
    }
    makeMaze() {
        return this._prototypeMaze.clone();
    }
    makeWall() {
        return this._prototypeWall.clone();
    }
    makeRoom(number) {
        const room = this._prototypeRoom.clone();
        room.setNumber(number);
        return room;
    }
    makeDoor(r1, r2) {
        const door = this._prototypeDoor.clone();
        door.initialize(r1, r2);
        return door;
    }
}
module.exports = MazePrototypeFactory;
