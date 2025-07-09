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
🔮 Future Enhancements
As a passionate developer and metro technology enthusiast, I aim to evolve this project beyond simulation and bring it closer to real-world applications:

🚇 Real-Time Data Integration
Connect with official metro APIs or backend services to fetch live card balance and transaction history for genuine functionality.

📲 Mobile-Friendly PWA
Convert the system into a Progressive Web App (PWA) so commuters can easily check card status on the go—offline and online.

🧠 Smart Analytics Dashboard
Implement an admin dashboard to monitor card usage, recharge patterns, and gate entry anomalies for better metro insights.
