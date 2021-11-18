import { stock } from "../Data/stock"

export const confLibrosDisp = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(stock)
        }, 1500)
    })
}