# 📘 Vectors in 2D and 3D: Definition, Addition, Scalar Multiplication & Dot Product

---

## 🔹 1. What is a Vector? 🧭

A **vector** is a **quantity that has both magnitude (length) and direction**.

- Unlike a scalar (e.g., speed, mass, temperature) which has only magnitude, a vector also tells **which way it points**.
- Vectors are often represented as **arrows**: the **length** of the arrow represents the **magnitude**, and the **arrowhead** shows the **direction**.

**Notation:**

- Bold letters: **v**
- Arrow notation: $\vec{v}$

**Examples in real life:**

1. **Displacement**: Moving 5 m north → magnitude = 5, direction = north
2. **Velocity**: 60 km/h east → magnitude = 60, direction = east
3. **Force**: Push of 10 N upward → magnitude = 10, direction = upward

**Component Form:**

- **2D vector:** $\vec{v} = (v_x, v_y)$  
  Example: $\vec{v} = (3,4)$ → moves 3 units along x-axis, 4 units along y-axis
- **3D vector:** $\vec{v} = (v_x, v_y, v_z)$  
  Example: $\vec{v} = (1,2,3)$ → moves 1 unit along x, 2 along y, 3 along z

**Magnitude of a vector:**

- **2D:** $|\vec{v}| = \sqrt{v_x^2 + v_y^2}$
- **3D:** $|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$

**Example:**  
$\vec{v} = (3,4)$ → $|\vec{v}| = \sqrt{3^2 + 4^2} = 5$

---

## 🔷 2. Vector Addition in 2D and 3D ➕

### ✅ Definition

Vector addition is the process of **combining two or more vectors to get a single resultant vector** that represents their total effect.

- In **2D**, vectors have **x and y components**.
- In **3D**, vectors have **x, y, and z components**.

If two vectors $\vec{A}$ and $\vec{B}$ are added, the resultant vector is:

$\vec{R} = \vec{A} + \vec{B}$

**Component-wise addition:**

- **2D:** $\vec{A} = (a_1, a_2), \vec{B} = (b_1, b_2)$  
  $\vec{A} + \vec{B} = (a_1 + b_1, a_2 + b_2)$

- **3D:** $\vec{A} = (a_1, a_2, a_3), \vec{B} = (b_1, b_2, b_3)$  
  $\vec{A} + \vec{B} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)$

**Geometric meaning:** Place the **tail of $\vec{B}$ at the head of $\vec{A}$**; the vector from the **tail of $\vec{A}$** to the **head of $\vec{B}$** is the resultant.

**Properties:** Commutative ($\vec{A} + \vec{B} = \vec{B} + \vec{A}$) and associative.

---

### 🟢 Solved Examples

**Example 1 (2D)**  
$\vec{A}=(2,3), \vec{B}=(4,1)$
$\vec{A} + \vec{B} = (2+4, 3+1) = (6,4)$

**Example 2 (3D)**  
$\vec{A}=(1,2,3), \vec{B}=(4,0,-1)$
$\vec{A} + \vec{B} = (1+4, 2+0, 3+(-1)) = (5,2,2)$

**Example 3 (Physics Application – 2D)**  
$\vec{A}=(5,0), \vec{B}=(0,4)$
$\vec{R} = (5+0, 0+4) = (5,4)$

- Represents **diagonal displacement**.

---

## 🔷 3. Scalar Multiplication of Vectors ✖️

### ✅ Definition

Scalar multiplication is **multiplying a vector by a real number (scalar)**.

$k \cdot \vec{A} = k \vec{A}$

- Only **magnitude** changes.
- If $k > 1$ → vector gets longer.
- If $0 < k < 1$ → vector gets shorter.
- If $k < 0$ → vector **reverses direction**.

**Uses:** Scaling forces, velocities, acceleration in physics, and computer graphics.

---

### ✅ Component Form

- **2D:** $k(a_1, a_2) = (k a_1, k a_2)$
- **3D:** $k(a_1, a_2, a_3) = (k a_1, k a_2, k a_3)$

---

### 🟢 Examples

**Example 1 (2D)**  
$\vec{A} = (3,4), k=2$
$2\vec{A} = (6,8)$

**Example 2 (3D, Negative Scalar)**  
$\vec{A} = (1,-2,3), k=-3$
$-3\vec{A} = (-3,6,-9)$

- Direction reversed.

**Example 3 (Fractional Scalar)**  
$\vec{A} = (8,4), k=1/2$
$(1/2) \vec{A} = (4,2)$

- Vector length reduced by half.

---

## 🔷 4. Dot Product of Vectors ⦿

### ✅ Definition

The **dot product** of two vectors results in a **scalar**, defined as:

$\vec{A} \cdot \vec{B} = |\vec{A}| \cdot |\vec{B}| \cdot \cos(\theta)$

- $|\vec{A}|$ = magnitude of $\vec{A}$
- $|\vec{B}|$ = magnitude of $\vec{B}$
- $\theta$ = angle between vectors

**Geometric meaning:** Measures **how much one vector acts in the direction of another**.

- $\vec{A} \cdot \vec{B} = 0$ → vectors are **perpendicular**
- Positive → $\theta < 90^\circ$
- Negative → $\theta > 90^\circ$

---

### ✅ Component Form

- **2D:** $\vec{A} \cdot \vec{B} = a_1 b_1 + a_2 b_2$
- **3D:** $\vec{A} \cdot \vec{B} = a_1 b_1 + a_2 b_2 + a_3 b_3$

---

### 🟢 Examples

**Example 1 (2D)**  
$\vec{A}=(2,3), \vec{B}=(4,1)$
$\vec{A} \cdot \vec{B} = 2(4) + 3(1) = 11$

**Example 2 (3D, Perpendicular Vectors)**  
$\vec{A}=(1,2,3), \vec{B}=(3,0,-1)$
$\vec{A} \cdot \vec{B} = 1(3) + 2(0) + 3(-1) = 0$

- Vectors are **perpendicular**.

**Example 3 (Using Magnitude & Angle)**  
$|\vec{A}|=5, |\vec{B}|=4, \theta=60^\circ$
$\vec{A} \cdot \vec{B} = 5(4)\cos(60^\circ) = 10$

---

## ✅ Summary Table

| Operation             | 2D Formula               | 3D Formula                          | Geometric Meaning                        |
| --------------------- | ------------------------ | ----------------------------------- | ---------------------------------------- |
| Vector Addition       | $(a_1+b_1, a_2+b_2)$           | $(a_1+b_1, a_2+b_2, a_3+b_3)$               | Tail-to-head method, resultant vector    |
| Scalar Multiplication | $k(a_1, a_2) = (k a_1, k a_2)$ | $k(a_1, a_2, a_3) = (k a_1, k a_2, k a_3)$ | Stretch/shrink; negative flips direction |
| Dot Product           | $a_1 b_1 + a_2 b_2$            | $a_1 b_1 + a_2 b_2 + a_3 b_3$              | Measures projection; perpendicular if 0  |

---

### 💡 Tips for Students

1. Draw vectors for **better geometric understanding**.
2. Check **perpendicularity** using the dot product.
3. Use scalar multiplication to **scale physical quantities**.
4. Always write vectors in **component form**.