import cron from "node-cron";

// #Referencia - https://www.youtube.com/watch?v=4qZd5nhajmg

// export const notificarPagamento = () => {

//     // Notifica todo dia as 07h da manhã
//     cron.schedule('0 7 * * *', () => {

//         console.log('Verificar pagamentos Pendentes')
//     })
// }

// Para teste a cada 5 segundos irá rodar
export const notificarPagamento = () => {

    
    cron.schedule('*/5 * * * * *', () => {

        console.log('Verificar pagamentos Pendentes')
    })
}