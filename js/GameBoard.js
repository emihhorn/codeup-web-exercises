import {GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST} from "./konami";

class GameBoard {
    constructor(DOMGrid) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid;
    }
}