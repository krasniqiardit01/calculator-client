<template>
    <div>
        <b-form-input :value="formula" class="text-end" disabled></b-form-input>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            formula: state => state.formula
        })
    }
}
</script>
<style scoped></style>