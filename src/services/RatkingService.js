import { AppState } from "../AppState.js";


class RatKingService {

    clickRatKing() {
        AppState.RatKing.size += 1 + (AppState.manual.jorts.power + AppState.manual.joke.power)
    }

    automaticRatKing() {
        AppState.RatKing.size += (AppState.automatic.codSandwich.cumulativePower + AppState.automatic.secrets.cumulativePower)
    }

    addManualUpgrade(upgradeName) {
        let upgrade = AppState.manual.find(manual => manual.name == upgradeName)
        if (AppState.RatKing.count >= upgrade.cost) {
            AppState.RatKing.count -= upgrade.cost
            upgrade.level++
            AppState.power += upgrade.power
            upgrade.cost = upgrade.cost * 2
        }

    }
    addAutomaticUpgrade(upgradeName) {
        let upgrade = AppState.automatic.find(automatic => automatic.name == upgradeName)
        if (AppState.RatKing.count >= upgrade.cost) {
            AppState.RatKing.count -= upgrade.cost
            upgrade.level++
            AppState.power += upgrade.power
            upgrade.cost = upgrade.cost * 2
        }
    }
}
export const ratKingService = new RatKingService()