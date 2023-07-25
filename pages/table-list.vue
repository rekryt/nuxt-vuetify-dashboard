<template>
    <v-container fill-height fluid grid-list-xl>
        <v-row justify="center">
            <v-col cols="12">
                <material-card color="green" title="Simple Table" text="Here is a subtitle for this table">
                    <client-only>
                        <v-data-table :headers="headers" :items="items" hide-default-footer />
                    </client-only>
                </material-card>
            </v-col>

            <v-col cols="12">
                <material-card
                    color="green"
                    flat
                    full-width
                    title="Table on Plain Background"
                    text="Here is a subtitle for this table"
                >
                    <client-only>
                        <v-data-table :headers="headers" :items="items.slice(0, 7)" hide-default-footer />
                    </client-only>
                </material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        headers: [
            {
                sortable: false,
                text: 'Name',
                key: 'name',
            },
            {
                sortable: false,
                text: 'Country',
                key: 'country',
            },
            {
                sortable: false,
                text: 'City',
                key: 'city',
            },
            {
                sortable: false,
                text: 'Salary',
                key: 'salary',
                align: 'right',
            },
        ],
        items: [
            {
                name: 'Dakota Rice',
                country: 'Niger',
                city: 'Oud-Tunrhout',
                salary: '$35,738',
            },
            {
                name: 'Minerva Hooper',
                country: 'Curaçao',
                city: 'Sinaai-Waas',
                salary: '$23,738',
            },
            {
                name: 'Sage Rodriguez',
                country: 'Netherlands',
                city: 'Overland Park',
                salary: '$56,142',
            },
            {
                name: 'Philip Chanley',
                country: 'Korea, South',
                city: 'Gloucester',
                salary: '$38,735',
            },
            {
                name: 'Doris Greene',
                country: 'Malawi',
                city: 'Feldkirchen in Kārnten',
                salary: '$63,542',
            },
            {
                name: 'Mason Porter',
                country: 'Chile',
                city: 'Gloucester',
                salary: '$78,615',
            },
        ],
    }),
};
</script>
