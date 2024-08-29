import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { HistoryPage } from '../pages/history'
import { Template } from '../templates'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/historico',
                element: <HistoryPage />
            }
        ]
    },
])