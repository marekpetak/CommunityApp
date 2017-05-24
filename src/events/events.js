import { DataCache} from 'dataCache';
import { inject } from 'aurelia-framework';

@inject(DataCache)
export class Events {
    constructor(dataCache) {
        this.events = [
            { id: 1, title: "Aurelia Fundamentals" },
            { id: 2, title: "Data-Centric SPAs with BreezeJS" }
        ];
        this.cache = dataCache;
        this.cache.data.push('a');

    }
}