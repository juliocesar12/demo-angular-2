export interface Person{
    id: number;
    name: string;
    weight: number;
    height: number;
    // este campo es opcional, no existe en la API
    profession?: string;
}
