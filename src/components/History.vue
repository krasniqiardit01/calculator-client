<template>
    <b-row>
        <b-col sm="12">History</b-col>
        <b-col sm="12" v-for="record in history" :key="record.id">
            <span @click="setFormula(record)" class="record">{{ record.formula }}</span>
        </b-col>
    </b-row>
</template>
<script>
import { mapState } from 'vuex';
import httpClient from '../http/client'
import store from '../store/index'
import * as types from '../store/types'

export default {
    created() {
        httpClient.get('/history')
            .then(response => {
                store.dispatch({
                    type: types.SET_HISTORY,
                    history: Object.values(response.data.history)
                })
            })
    },
    methods: {
        setFormula(formula) {
            store.dispatch({
                type: types.SET_FORMULA,
                formula: formula.formula
            });
        }
    },
    computed: {
        ...mapState({
            history: state => state.history
        })
    }
}
</script>
<style scoped>
.record {
    cursor: pointer;
}
</style>