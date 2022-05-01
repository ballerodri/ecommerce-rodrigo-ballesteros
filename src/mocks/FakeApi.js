const stockApi = [
    { id: '1', nombre: 'TOP LEXY', desc: '15% de descuento pagando con Efectivo/Transferencia', precio: 820, img: 'https://i.ibb.co/W5WjtTq/TOP-LEXY.jpg', stock: 50, category: 'tops'},
    { id: '2', nombre: 'TOP CASSIE', desc: '15% de descuento pagando con Efectivo/Transferencia', precio: 1240, img: 'https://i.ibb.co/dPjFCr1/TOP-CASSIE.jpg', stock: 50, category: 'tops'}
 ]

export const getProducts = new Promise((resolve, reject) => {

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(stockApi)
        }, 3000)
    } else {
        reject('fail')
    }
})