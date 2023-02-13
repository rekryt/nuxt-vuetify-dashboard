<template>
    <material-card class="v-card--material-chart" v-bind="$attrs">
        <template #header>
            <component :is="component" :data="data" :options="options" style="max-height: 150px" />
        </template>

        <slot />
        <template #actions>
            <slot name="actions" />
        </template>
    </material-card>
</template>

<script>
import { Bar, Pie, Line, Chart, Bubble, Radar, Doughnut, Scatter, PolarArea } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, PointElement, LineElement, CategoryScale, LinearScale);

export default {
    name: 'MaterialChartCard',
    // eslint-disable-next-line vue/no-unused-components,vue/no-reserved-component-names
    components: { Bar, Pie, Line, Chart, Bubble, Radar, Doughnut, Scatter, PolarArea },
    inheritAttrs: false,

    props: {
        data: {
            type: Object,
            default: () => ({
                labels: [],
                datasets: [],
            }),
        },
        options: {
            type: Object,
            default: () => ({
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                /*
                title: {
                    display: true,
                    text: 'Google analytics data',
                    fontSize: 24,
                    fontColor: '#6b7280',
                },
                tooltips: {
                    backgroundColor: '#17BF62',
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                max: 7,
                                min: 0,
                                stepSize: 1,
                            },
                            gridLines: {
                                display: true,
                            },
                        },
                    ],
                },
                */
            }),
        },
        type: {
            type: String,
            required: true,
            validator: (v) =>
                ['Bar', 'Pie', 'Line', 'Chart', 'Bubble', 'Radar', 'Doughnut', 'Scatter', 'PolarArea'].includes(v),
        },
    },

    computed: {
        component() {
            return Object.entries({ Bar, Pie, Line, Chart, Bubble, Radar, Doughnut, Scatter, PolarArea }).find(
                ([key]) => key === this.type
            )[1];
        },
    },
};
</script>

<style lang="scss">
.v-card--material-chart {
    overflow: visible;
    .v-card--material__header {
        .ct-label {
            color: inherit;
            opacity: 0.7;
            font-size: 0.975rem;
            font-weight: 100;
        }

        .ct-grid {
            stroke: rgba(255, 255, 255, 0.2);
        }
        .ct-series-a .ct-point,
        .ct-series-a .ct-line,
        .ct-series-a .ct-bar,
        .ct-series-a .ct-slice-donut {
            stroke: rgba(255, 255, 255, 0.8);
        }
        .ct-series-a .ct-slice-pie,
        .ct-series-a .ct-area {
            fill: rgba(255, 255, 255, 0.4);
        }
    }
}
</style>
