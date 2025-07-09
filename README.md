# 🚇 SmartSync - Metro Card Status Checker

A simple and interactive web-based metro card checker built with HTML, CSS, and JavaScript. It simulates card validation, balance display, and recharge status with a visually appealing metro-themed interface.

## 🎯 Features

- ✅ **Check Metro Card Status** by entering a 9-digit card number
- 🔐 **Smart logic** to determine:
  - Successful Recharge
  - Recharge Pending
  - Low Balance
  - Invalid Card Numbers (based on digit repetition)
- 💡 **Real-time Validation** based on card number rules
- 🎨 **Metro-themed background** for a realistic look

---

## 🧠 Card Status Logic

Based on the **last digit** of the card number:

| Last Digit    | Status                  | Balance     | Message                         |

| 0, 2, 4, 6, 8 | ✅ Recharge Successful | ₹100–₹200   | Good to go!                      |
| 1, 3, 5       | ⏳ Recharge Pending    | ₹0          | Please recharge.                 |
| 7, 9          | ⚠️ Low Balance         | ₹10–₹30     | Recharge soon to continue trips. |

> **❗ Invalid Card Rule**: If **any digit appears more than twice**, the card is considered **invalid**.


## 🖥️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

---
