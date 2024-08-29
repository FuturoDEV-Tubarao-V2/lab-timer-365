import { Status } from '../../components/status'

import styles from './history.module.css'

export function HistoryPage() {

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
                    <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status color="green">Concluido</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status color="orange">Em andamento</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status color="pink">Interrompido</Status>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}