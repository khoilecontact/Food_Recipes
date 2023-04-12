export class Cuisine {
    id: string;
    name: string;
    imageUrl: string;
    time: number

    constructor(
        id: string,
        name: string,
        imageUrl: string,
        time: number) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
        this.time = time
    }
}