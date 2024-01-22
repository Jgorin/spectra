import Track from "./track";

export default class Project {
    public name: string;
    public tracks: Track[];

    constructor(name: string, tracks: Track[]=[] as Track[]) {
        this.name = name;
        this.tracks = tracks;
    }
}
