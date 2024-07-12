import { Brand } from "src/brands/interfaces/brand.interface";
import { v4 as uuid } from "uuid";

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: "toyota",
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "honda",
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "ford",
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "fiat",
        createdAt: new Date().getTime()
    }
]
    
