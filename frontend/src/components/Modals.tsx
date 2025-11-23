import styles from "../styles/Modal.module.scss";

interface ModalProps {

  estaAberto: boolean;
  fechar: () => void;
  titulo: string;
  mensagem: string;
  tipo?: 'sucesso' | 'erro' | 'informacao';
}

export default function Modal({ estaAberto, fechar, titulo, mensagem, tipo = 'sucesso' }: ModalProps) {

  if (!estaAberto) return null;

  const classeTipo =
    tipo === 'sucesso' ? 'sucesso' :
      tipo === 'erro' ? 'erro' :
        'informacao';

  return (
    
    <div className={styles.containerModalOverlay} onClick={fechar}>
      <div className={styles.containerModalConteudo} onClick={(e) => e.stopPropagation()}>

         <div className={`${styles.containerModalIcon} ${classeTipo}`}>
          {tipo === 'sucesso' ? 'Sucesso' : tipo === 'erro' ? 'Erro' : 'Info'}
        </div>

        <h2>{titulo}</h2>
        <p>{mensagem}</p>
        <button className={styles.containerModalBotao} onClick={fechar}>
          OK
        </button>

      </div>
    </div>
  );
}
