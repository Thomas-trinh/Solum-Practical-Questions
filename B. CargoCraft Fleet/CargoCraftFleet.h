#pragma once

#include <cstdint>

namespace cargocraft {

using i64 = std::int64_t;

struct FleetRange {
    i64 minCrafts;
    i64 maxCrafts;

    bool isValid() const noexcept {
        return minCrafts != -1 && maxCrafts != -1;
    }
};

FleetRange computeFleetRange(i64 n);

} // namespace cargocraft
