import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export default function GraficoBarra(){
    const opcoes = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Medidas de temperatura por mês'
            }
        },
    }

    const labels = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembri'];  
    const dados = {
        labels,
        satasetes: [
            {
                label: 'chuva (mm)',
                data: labels.map(() => faker.number.int((min: 0, max:500))),
                backgroundColor: '#d89ce1'
            }
        ]
    }
return (
    <bar options={opcoes} data={dados}/>

)
}