<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { ratKingService } from '../services/RatkingService.js';


const RatKing = computed(()=>AppState.RatKing)
const Automatic = computed(()=>AppState.Automatic)
const Manual = computed(()=>AppState.Manual)

function buyManualUpgrade(upgradeName){
    ratKingService.buyManualUpgrade(upgradeName)
}

function buyAutomaticUpgrade(upgradeName){
    ratKingService.buyAutomaticUpgrade(upgradeName)
}

function applyAutomaticUpgrades(){
    ratKingService.applyAutomaticUpgrades()
}

onMounted(()=>setInterval(applyAutomaticUpgrades, 3000))

</script>

<template>
    <section class="container-fluid sticky-bottom">
    <section class="row justify-content-center">
        <div class="col-3 bg-warning rounded-top-start">
            <p :id="totalClick"></p>
        </div>
        <div class="col-3 bg-warning rounded-top">
            <h3 :id="totalRats"></h3>
        </div>
        <div class="col-3 bg-warning rounded-top-end">
            <p :id="totalAuto"></p>
        </div>
    </section>
    <section class="row bg-warning">
        <div class="col-6">
            <div class="row">
                <div :id="jorts" class="col-6">
                    <button class="btn btn-primary" @click="buyManualUpgrade('jorts')">Jorts</button>
                </div>
                <div :id="secret" class="col-6">
                    <button class="btn btn-primary" @click="buyAutomaticUpgrade('secret')">Secrets</button>
                </div>
            </div>
            <div class="row">
                <div :id="codSandwich" class="col-6">
                    <button class="btn btn-success" @click="buyAutomaticUpgrade('Cod Sandwich')">Cod Sandwich</button>
                </div>
                <div :id="jokes" class="col-6">
                    <button class="btn btn-success"  @click="buyAutomaticUpgrade('jokes')">Joke</button>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row">
                <div :id="jortsStats" class="col-6"></div>
                <div :id="secretStats" class="col-6"></div>
            </div>
            <div class="row">
                <div :id="codSandwichStats" class="col-6"></div>
                <div :id="jokesStats" class="col-6"></div>
            </div>
        </div>
    </section>
</section>
</template>

<style>
</style>