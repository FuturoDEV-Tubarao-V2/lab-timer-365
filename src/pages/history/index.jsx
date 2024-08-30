import { Status } from '../../components/status'
import { useCycle } from '../../contexts/cycle'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './history.module.css'

export function HistoryPage() {
    const { cycles } = useCycle()

    return (
        <div className={styles.container}>
            <h1>Meu histórico</h1>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cycles.map(cycle => (
                            <tr key={cycle.id}>
                                <td>{cycle.task}</td>
                                <td>{`${cycle.minutesAmount} ${cycle.minutesAmount > 1 ? 'minutos': 'minuto'}`}</td>
                                <td>{formatDistanceToNow(new Date(cycle.startDate), {
                                    addSuffix: true,
                                    locale: ptBR
                                })}</td>
                                <td>

                                    {
                                        cycle.finishedDate && <Status color="green">Concluido</Status>
                                    }
                                    
                                    {
                                        cycle.interruptedDate && <Status color="pink">Interrompido</Status>
                                    }

                                    {
                                        !cycle.finishedDate && !cycle.interruptedDate && <Status color="orange">Em andamento</Status>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}