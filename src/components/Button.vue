<template>
    <b-button class="calc-button" @click="clickEvent">{{ value }}</b-button>
</template>
<script>
import { mapState } from 'vuex';
import store from '../store/index'
import * as types from '../store/types'
import httpClient from '../http/client'

export default {
    props: ['value', 'type'],
    computed: {
        ...mapState({
            formula: state => state.formula
        })
    },
    methods: {
        clickEvent() {
            let operation = null;
            switch (this.type) {
                case "add":
                    operation = types.ADD
                    break;
                case "delete":
                    operation = types.DELETE
                    break;
                case "ce":
                case "c":
                    operation = types.CLEAR
                    break;
                case "enter":
                    operation = types.ENTER
                    break;
            }
            if (operation !== types.ENTER) {
                store.dispatch({
                    type: operation,
                    value: this.value
                })
                return;
            }

            httpClient.post('/calculate', {
                formula: this.formula
            }).then(response => {
                store.dispatch({
                    type: operation,
                    result: response.data.result,
                    history: Object.values(response.data.history)
                })
            });
        }
    }
}
</script>
<style scoped>
.calc-button {
    height: 70px;
    border-radius: 0;
    border: 1px solid white;
    box-sizing: border-box;
}
</style>