export class Schema {
    types: SchemaType[];

    constructor() {
        this.types = [];
    }

    addType(t: SchemaType) {
        const existingTypes = this.types.filter(ty => {
            return ty.name == t.name
        })

        if (existingTypes.length > 0) {
            throw new Error("type already exists: " + t.name)
        }

        this.types.push(t)
    }

    getType(name: string): SchemaType {
        const gotTypes = this.types.filter(ty => {
            return ty.name == name
        })

        if (gotTypes.length === 0) {
            throw new Error("no such type: " + name)
        } else if (gotTypes.length > 1) {
            throw new Error("more than one type with name: " + name)
        }

        return gotTypes[0]
    }
}

export class SchemaType {
    name: string;
    fields: TypeField[];

    constructor(name: string) {
        this.name = name;
        this.fields = [];
    }

    addField(f: TypeField) {
        const existingFields = this.fields.filter(field => {
            return field.name === f.name
        })

        if (existingFields.length !== 0) {
            throw new Error("field already exists: " + f.name)
        }

        this.fields.push(f)
    }

    getField(name: string): TypeField {
        const gotFields = this.fields.filter(f => {
            return f.name === name
        })

        if (gotFields.length === 0) {
            throw new Error("no such field: " + name)
        } else if (gotFields.length > 1) {
            throw new Error("more than one field with name: " + name)
        }

        return gotFields[0]
    }
}

export class TypeField {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
