
// #Lib: crontab.guru
// #Referencia - https://www.youtube.com/watch?v=4qZd5nhajmg

import { notificarPagamento } from "../cronjobs/notifyPayment"

// Todo dia as 07h da manhã ou a cada 5 Segundos para teste
export const iniciarPagamentos = () => {

    notificarPagamento()
    console.log('Pagamentos Iniciados')
}
