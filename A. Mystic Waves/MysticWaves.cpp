#include "MysticWaves.h"

namespace elaria {

int computeTotalEnergy(int x, int n) noexcept {
    return (n % 2 == 0) ? 0 : x;
}

} // namespace elaria

