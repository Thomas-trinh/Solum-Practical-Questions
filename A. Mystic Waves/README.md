# 🌊 Mystic Waves

## 📘 Overview

Mystic Waves calculates the **total magical energy** after `n` alternating waves of energy that start with `x`.
The sequence alternates between `x` and `−x`:

```
x, −x, x, −x, ...
```

If `n` is **even**, the waves cancel each other → total = 0.
If `n` is **odd**, one extra positive wave remains → total = x.

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

**Input**

```
4
1 4
2 5
3 6
4 7
```

**Output**

```
0
2
0
4
```

---

## 🧰 Notes

* `ios::sync_with_stdio(false);` and `cin.tie(nullptr);` are enabled for fast I/O.
* The logic is defined inside the `elaria` namespace for clean separation and scalability.
* Simply edit any of the `.cpp` files and re-run `make run` — it will automatically rebuild.
