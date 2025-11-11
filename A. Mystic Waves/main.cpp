#include <iostream>
#include "MysticWaves.h"

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        int x, n;
        cin >> x >> n;
        cout << elaria::computeTotalEnergy(x, n) << '\n';
    }

    return 0;
}
