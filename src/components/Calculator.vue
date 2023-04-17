<template>
    <b-container>
        <b-card class="text-center">
            <b-row>
                <b-col sm="9">
                    <Formula />
                    <div>
                        <b-button-group class="calc-row">
                            <Button :value="'%'" :type="'add'" />
                            <Button :value="'CE'" :type="'ce'" />
                            <Button :value="'C'" :type="'c'" />
                            <Button :value="'Delete'" :type="'delete'" />
                        </b-button-group>
                        <b-button-group class="calc-row">
                            <Button disabled />
                            <Button disabled />
                            <Button :value="'('" :type="'add'" />
                            <Button :value="')'" :type="'add'" />
                        </b-button-group>
                        <b-button-group class="calc-row">
                            <Button :value="7" :type="'add'" />
                            <Button :value="8" :type="'add'" />
                            <Button :value="9" :type="'add'" />
                            <Button :value="'*'" :type="'add'" />
                        </b-button-group>
                        <b-button-group class="calc-row">
                            <Button :value="4" :type="'add'" />
                            <Button :value="5" :type="'add'" />
                            <Button :value="6" :type="'add'" />
                            <Button :value="'-'" :type="'add'" />
                        </b-button-group>
                        <b-button-group class="calc-row">
                            <Button :value="1" :type="'add'" />
                            <Button :value="2" :type="'add'" />
                            <Button :value="3" :type="'add'" />
                            <Button :value="'+'" :type="'add'" />
                        </b-button-group>
                        <b-button-group class="calc-row">
                            <Button disabled />
                            <Button :value="0" :type="'add'" />
                            <Button :value="'.'" :type="'add'" />
                            <Button :value="'Enter'" :type="'enter'" />
                        </b-button-group>
                    </div>
                </b-col>
                <b-col sm="3">
                    <History />
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>
<script>
import Button from './Button.vue'
import Formula from './Formula.vue'
import History from './History.vue'

export default {
    components: {
        Button,
        Formula,
        History
    }
}
</script>
<style scoped>
.calc-row:first-child {
    margin-top: 15px;
}

.calc-row {
    margin-top: -1px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>