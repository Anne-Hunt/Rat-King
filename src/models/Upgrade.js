import { generateId } from "../utils/GenerateId.js";

export class Upgrade {
    constructor(data) {
        this.name = data.name;
        this.power = data.power;
        this.cumulativePower = data.power * data.level;
        this.id = generateId();
        this.cost = data.cost * data.level;
        this.level = data.level;
        this.maxLevel = data.level * 3
        this.timeAllowed = data.level * 20000
        this.imgUrl = data.imgUrl
        this.type = data.type
    }
}