import yaml from 'js-yaml';
import fs from 'fs';

export interface ParsedSchema {
    types: Map<string, Map<string, ParsedField>>;
}

interface RawSchema {
    types: RawTypes
}

interface RawTypes {
    [key: string]: ParsedField
}

export interface ParsedField {
    type: string;
}

export function parseSchema(schemaPath: string): ParsedSchema {
    const rawDoc = yaml.safeLoad(fs.readFileSync(schemaPath, "utf8"))
    const doc = rawDoc as RawSchema;

    const types = new Map<string, Map<string, ParsedField>>()

    Object.entries(doc.types).forEach(([typeName, typeDef]) => {
        const fieldsMap = new Map<string, ParsedField>()
        Object.entries(typeDef).forEach(([fieldName, fieldDef]) => {
            fieldsMap.set(fieldName, fieldDef as ParsedField)
        })

        types.set(typeName, fieldsMap)
    })

    return {
        types: types
    }
}