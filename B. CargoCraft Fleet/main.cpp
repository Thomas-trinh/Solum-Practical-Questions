#include <iostream>
#include "CargoCraftFleet.h"

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        cargocraft::i64 n;
        cin >> n;

        const auto result = cargocraft::computeFleetRange(n);
        if (!result.isValid()) {
            cout << -1 << '\n';
        } else {
            cout << result.minCrafts << ' ' << result.maxCrafts << '\n';
        }
    }

    return 0;
}
