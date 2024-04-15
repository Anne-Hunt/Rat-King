<script setup>
import {AppState} from '../AppState.js';
import {ratKingService} from '../services/RatkingService.js'

const RatKing = AppState.RatKing

function clickRatKing(){
    ratKingService.clickRatKing()
}
</script>

<template>
    <section class="row justify-content-center">
        <div class="col-6 text-center text-light">
<i class="rat mdi mdi-rodent shadow" @click="clickRatKing()"></i>
        </div>
    </section>
</template>

<style>

i{
    font-size: 100px;
}

</style>