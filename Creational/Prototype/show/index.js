const Maze = require('./Maze');
const Wall = require('./Wall');
const Room = require('./Room');
const Door = require('./Door');

const MazePrototypeFactory = require('./MazePrototypeFactory');
const MazeGame = require('./MazeGame');

const prototypeMaze = new Maze();
const prototypeWall = new Wall();
const prototypeRoom = new Room();
const prototypeDoor = new Door();

const factory = new MazePrototypeFactory(prototypeMaze, prototypeWall, prototypeRoom, prototypeDoor);

const game = new MazeGame();
const maze = game.createMaze(factory);

console.log(maze.toString());
