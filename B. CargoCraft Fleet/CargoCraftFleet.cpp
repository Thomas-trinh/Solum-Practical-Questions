#include "CargoCraftFleet.h"

namespace cargocraft {

namespace {
    constexpr i64 TYPE_A_UNITS = 4;
    constexpr i64 TYPE_B_UNITS = 6;
}

FleetRange computeFleetRange(i64 n) {
    if (n < TYPE_A_UNITS || (n & 1)) {
        return {-1, -1};
    }

    const i64 minCrafts = (n + TYPE_B_UNITS - 1) / TYPE_B_UNITS;
    const i64 maxCrafts = n / TYPE_A_UNITS;

    if (minCrafts > maxCrafts) {
        return {-1, -1};
    }

    return {minCrafts, maxCrafts};
}

}
