// Se crea un modelo para los ingredientes porque serán utilizados muchas veces

export class Ingredient {
    // TypeScript permite declarar propiedades en los argumentos del constructor
    constructor(public name: string, public amount: number) {

    }
}