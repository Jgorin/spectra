
/**
 * Track class.
 * @class
 * @classdesc Track class represents a track in the project.
 * @export
 * @param {string} name - The name of the track.
 * @param {number} id - The id of the track.
 */
export default class Track {
    public name: string;
    public id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
