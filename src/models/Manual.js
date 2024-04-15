import { generateId } from "../utils/GenerateId.js";

export class Manual {
    constructor(data) {
        this.name = data.name;
        this.power = data.power;
        this.cumulativePower = data.power * data.level;
        this.id = generateId();
        this.cost = data.cost * data.level;
        this.level = data.level;
        this.imgUrl = data.imgUrl
    }
}