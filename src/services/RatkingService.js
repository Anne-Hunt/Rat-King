import { computed } from "vue";
import { AppState } from "../AppState.js";
import { applyStyles } from "@popperjs/core/index.js";


class RatKingService {


    clickRatKing() {
        AppState.RatKing.size += 1 + (Upgrade.jorts.power + manualUpgrade.joke.power)
    }

    automaticRatKing() {
        let ratking = AppState.ratking
        ratking.count += (AppState.upgrades.filter(upgrade => upgrade.type == 'automatic')
}

    addUpgrade() {
        let upgrades = AppState.upgrades
        let ratking = AppState.ratking
        let upgrade = upgrades.filter(upgrade => upgrade.id == upgradeId)

        if (ratking.count >= upgrade.cost) {
            ratking.count -= upgrade.cost
            upgrade.level++
            AppState.power += upgrade.power
            upgrade.cost = upgrade.cost * 2
        }


        applyAutomaticUpgrades() {

        }

        export const ratKingService = new RatKingService()