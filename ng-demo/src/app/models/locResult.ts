export class Entry {
    name: string;
    value: string;

    constructor(_n: string, _v: string) {
        this.name = _n;
        this.value = _v;
    }
}

export class LocResult {
    entries: Entry[];
    filteredCount: number;
    filtered: Entry[];

    constructor (arr: object, _key: string[]) {
        let _name: string[];
        let _value: string[];

        _name = Object.keys(arr);
        // _value = Object.values(arr);     // Doesn't work for IE
        _value = Object.keys(arr).map(itm => arr[itm]);
        this.entries = [];
        this.filtered = [];

        // Creates actual data set as recived from datasource
        for (let i = 0; i < _name.length; i++) {
            this.entries.push(new Entry(_name[i], _value[i]));
        }

        // If Key exists, create custom data set from received datasource
        if (_key !== undefined && _key !== null && _key.length > 0 ) {
            for (let i = 0; i < _key.length; i++) {
                for (let j = 0; j < _name.length; j++) {
                    if (_key[i] === _name[j]) {
                        this.filtered.push(new Entry(_name[j], _value[j]));
                        continue;
                    }
                }
                console.log('Specified key - ', _key[i], ' - not find in datasource');
            }
        } else {
            // If Key doesn't exist, copy received data set as filtered dataset
            this.filtered = this.entries;
        }
    }
}
