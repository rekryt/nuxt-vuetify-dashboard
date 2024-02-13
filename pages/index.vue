<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" lg="4">
                <material-chart-card
                    color="info"
                    type="Line"
                    :data="dailySalesChart.data"
                    :options="dailySalesChart.options"
                >
                    <h4 class="title font-weight-light">Daily Sales</h4>
                    <p class="category d-inline-flex font-weight-light">
                        <v-icon color="green" small>mdi-arrow-up</v-icon>
                        <span class="green--text">55%</span>
                        &nbsp; increase in today's sales
                    </p>

                    <template #actions>
                        <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
                        <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
                    </template>
                </material-chart-card>
            </v-col>
            <v-col cols="12" lg="4">
                <material-chart-card
                    :data="emailsSubscriptionChart.data"
                    :options="emailsSubscriptionChart.options"
                    color="red"
                    type="Bar"
                >
                    <h4 class="title font-weight-light">Email Subscription</h4>
                    <p class="category d-inline-flex font-weight-light">Last Campaign Performance</p>

                    <template #actions>
                        <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
                        <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
                    </template>
                </material-chart-card>
            </v-col>
            <v-col cols="12" lg="4">
                <material-chart-card
                    :data="dataCompletedTasksChart.data"
                    :options="dataCompletedTasksChart.options"
                    color="green"
                    type="Line"
                >
                    <h3 class="title font-weight-light">Completed Tasks</h3>
                    <p class="category d-inline-flex font-weight-light">Last Last Campaign Performance</p>

                    <template #actions>
                        <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
                        <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
                    </template>
                </material-chart-card>
            </v-col>

            <v-col cols="12" lg="3">
                <material-stats-card
                    color="green"
                    icon="mdi-store"
                    title="Revenue"
                    value="$34,245"
                    sub-icon="mdi-calendar"
                    sub-text="Last 24 Hours"
                />
            </v-col>
            <v-col cols="12" lg="3">
                <material-stats-card
                    color="orange"
                    icon="mdi-content-copy"
                    title="Used Space"
                    value="49/50"
                    small-value="GB"
                    sub-icon="mdi-alert"
                    sub-icon-color="error"
                    sub-text="Get More Space..."
                    sub-text-color="text-primary"
                />
            </v-col>
            <v-col cols="12" lg="3">
                <material-stats-card
                    color="red"
                    icon="mdi-information-outline"
                    title="Fixed Issues"
                    value="75"
                    sub-icon="mdi-tag"
                    sub-text="Tracked from Github"
                />
            </v-col>
            <v-col cols="12" lg="3">
                <material-stats-card
                    color="info"
                    icon="mdi-twitter"
                    title="Followers"
                    value="+245"
                    sub-icon="mdi-update"
                    sub-text="Just Updated"
                />
            </v-col>
            <v-col cols="12" lg="6">
                <material-card color="orange" title="Employee Stats" text="New employees on 15th Feb, 2023">
                    <client-only>
                        <v-data-table :headers="headers" :items="items" hide-default-footer />
                    </client-only>
                </material-card>
            </v-col>
            <v-col cols="12" lg="6">
                <material-card class="card-tabs" color="green">
                    <template #header>
                        <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
                            <span class="subheading font-weight-light mx-3" style="align-self: center">Tasks:</span>
                            <v-tab class="mr-3" :value="0">
                                <v-icon class="mr-2">mdi-bug</v-icon>
                                Bugs
                            </v-tab>
                            <v-tab class="mr-3" :value="1">
                                <v-icon class="mr-2">mdi-code-tags</v-icon>
                                Website
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2" :value="2">mdi-cloud</v-icon>
                                Server
                            </v-tab>
                        </v-tabs>
                    </template>
                    <v-window v-model="tabs">
                        <v-window-item v-for="n in [0, 1, 2]" :key="n" :value="n">
                            <v-list class="py-0" density="compact">
                                <v-list-item @click="complete(0)">
                                    <template #prepend>
                                        <v-checkbox :model-value="list[0]" color="green" hide-details />
                                    </template>
                                    <template #title>
                                        Sign contract for "What are conference organized afraid of?"
                                    </template>
                                    <template #append>
                                        <client-only>
                                            <div class="d-flex">
                                                <v-tooltip top content-class="top">
                                                    <template #activator="{ props }">
                                                        <v-btn class="v-btn--simple" icon v-bind="props">
                                                            <v-icon color="primary">mdi-pencil</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Edit</span>
                                                </v-tooltip>

                                                <v-tooltip top content-class="top">
                                                    <template #activator="{ props }">
                                                        <v-btn class="v-btn--simple" color="danger" icon v-bind="props">
                                                            <v-icon color="error">mdi-close</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Close</span>
                                                </v-tooltip>
                                            </div>
                                        </client-only>
                                    </template>
                                </v-list-item>

                                <v-divider />

                                <v-list-item @click="complete(1)">
                                    <template #prepend>
                                        <v-checkbox :model-value="list[1]" color="green" hide-details />
                                    </template>
                                    <template #title>
                                        Lines From Great Russian Literature? Or E-mails From My Boss?
                                    </template>
                                    <template #append>
                                        <client-only>
                                            <div class="d-flex">
                                                <v-tooltip top content-class="top">
                                                    <template #activator="{ props }">
                                                        <v-btn class="v-btn--simple" icon v-bind="props">
                                                            <v-icon color="primary">mdi-pencil</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Edit</span>
                                                </v-tooltip>

                                                <v-tooltip top content-class="top">
                                                    <template #activator="{ props }">
                                                        <v-btn class="v-btn--simple" color="danger" icon v-bind="props">
                                                            <v-icon color="error">mdi-close</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Close</span>
                                                </v-tooltip>
                                            </div>
                                        </client-only>
                                    </template>
                                </v-list-item>

                                <v-divider />

                                <v-list-item @click="complete(2)">
                                    <template #prepend>
                                        <v-checkbox :model-value="list[2]" color="green" hide-details />
                                    </template>
                                    <template #title>
                                        Flooded: One year later, assessing what was lost and what was found when a
                                        ravaging rain swept through metro Detroit
                                    </template>
                                    <template #append>
                                        <client-only>
                                            <div class="d-flex">
                                                <v-tooltip top content-class="top">
                                                    <template #activator="{ props }">
                                                        <v-btn class="v-btn--simple" icon v-bind="props">
                                                            <v-icon color="primary">mdi-pencil</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Edit</span>
                                                </v-tooltip>

                                                <v-tooltip top content-class="top">
                                                    <template #activator="{ props }">
                                                        <v-btn class="v-btn--simple" color="danger" icon v-bind="props">
                                                            <v-icon color="error">mdi-close</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Close</span>
                                                </v-tooltip>
                                            </div>
                                        </client-only>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </v-window-item>
                    </v-window>
                </material-card>
            </v-col>
            <v-col cols="12" class="editor">
                <div class="editor-label">CKEditor</div>
                <helper-editor v-model="editorText"></helper-editor>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            editorText:
                '<h2>Material Dashboard</h2><blockquote><p>made by Rekryt (vk.com/krupkin.sergey)<br>feb 2024</p></blockquote><p>&nbsp;</p><p>Special thanks to:<br>https://nuxt.com<br>https://vuetifyjs.com<br>https://www.creative-tim.com</p>',
            dailySalesChart: {
                data: {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    datasets: [{ label: 'dailySales', data: [12, 17, 7, 17, 23, 18, 38] }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                },
            },
            dataCompletedTasksChart: {
                data: {
                    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
                    datasets: [{ label: 'dataCompletedTasks', data: [230, 750, 450, 300, 280, 240, 200, 190] }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                },
            },
            emailsSubscriptionChart: {
                data: {
                    labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
                    datasets: [
                        {
                            label: 'emailsSubscription',
                            data: [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                },
            },
            headers: [
                {
                    sortable: false,
                    title: 'ID',
                    key: 'id',
                },
                {
                    sortable: false,
                    title: 'Name',
                    key: 'name',
                },
                {
                    sortable: false,
                    title: 'Salary',
                    key: 'salary',
                    align: 'right',
                },
                {
                    sortable: false,
                    title: 'Country',
                    key: 'country',
                    align: 'right',
                },
                {
                    sortable: false,
                    title: 'City',
                    key: 'city',
                    align: 'right',
                },
            ],
            items: [
                {
                    id: 1,
                    name: 'Dakota Rice',
                    country: 'Niger',
                    city: 'Oud-Tunrhout',
                    salary: '$35,738',
                },
                {
                    id: 2,
                    name: 'Minerva Hooper',
                    country: 'Curaçao',
                    city: 'Sinaai-Waas',
                    salary: '$23,738',
                },
                {
                    id: 3,
                    name: 'Sage Rodriguez',
                    country: 'Netherlands',
                    city: 'Overland Park',
                    salary: '$56,142',
                },
                {
                    id: 4,
                    name: 'Philip Chanley',
                    country: 'Korea, South',
                    city: 'Gloucester',
                    salary: '$38,735',
                },
                {
                    id: 5,
                    name: 'Doris Greene',
                    country: 'Malawi',
                    city: 'Feldkirchen in Kārnten',
                    salary: '$63,542',
                },
            ],
            tabs: 'one',
            list: [false, false, false],
        };
    },
    methods: {
        complete(index) {
            this.list[index] = !this.list[index];
        },
    },
};
</script>
