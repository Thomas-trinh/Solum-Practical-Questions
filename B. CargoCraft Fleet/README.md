# 🚀 CargoCraft Fleet

## 📘 Overview

A simple program that calculates the **minimum and maximum number of crafts** that can be formed from a given number of propulsion units.  
Each craft can be of **two types**:
- Type A → 4 propulsion units
- Type B → 6 propulsion units

If the total number of propulsion units `n` cannot be exactly represented as a combination of 4 and 6, the program outputs `-1`.

Given `n`, find:

- **Minimum crafts:** using as many 6-unit crafts as possible  
- **Maximum crafts:** using as many 4-unit crafts as possible  

Formula:  
```

4a + 6b = n,  where a, b ≥ 0

```

If `n` is odd or less than 4 → output `-1`.

Example:
| Input | Output | Explanation |
|-------|---------|-------------|
| 4 | `1 1` | 1 Type A craft (4×1 = 4) |
| 7 | `-1` | impossible (odd total) |
| 24 | `4 6` | can form between 4 and 6 crafts |
| 9982443539998244352 | `166374058999707392 249561088499561088` | handles 64-bit integers safely |


---

## ⚙️ Requirements

* C++ 17 or newer
* g++ compiler

Check your compiler:

```bash
g++ --version
```

---

## 🚀 How to Run

### 1️⃣ Build the project

```bash
make
```

### 2️⃣ Run the program

```bash
make run
```

### 3️⃣ Clean Program

```bash
make clean
```
---

## 💻 Example

**Input:**

```
4
4
7
24
9982443539998244352
```

**Output:**

```
1 1
-1
4 6
166374058999707392 249561088499561088
```

---

## 🧰 Notes

* All arithmetic uses **64-bit integers** (`int64_t`) to support large values.
* The code follows clean modular structure:

  * Pure function logic in `CargoCraftFleet.cpp`
  * Reusable API defined in `CargoCraftFleet.h`
  * Lightweight `main.cpp` for input/output only.

---