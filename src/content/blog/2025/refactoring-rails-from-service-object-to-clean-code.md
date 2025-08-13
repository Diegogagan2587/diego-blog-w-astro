---
title: '🧠 Refactoring Rails: From Service Objects to Clean Maintainalbe Code'
description: 'Personal Notes extracted from ChatGPT about service objects. might require further revision'
pubDate: 'Jul 1 2025'
heroImage: '/images/bash-debug.jpg'
---

When building real-world Rails apps, it’s common to hit the limits of traditional **service objects**. Here’s a practical breakdown of what you need to know — and what to do instead — based on our recent conversation.

---

### ❓ Should I use `.new` or `.for` for services?

**Use `.for(config)`** when your service needs to **select a subclass** (e.g., inbound vs. outbound logic).

#### ✅ Why `.for` is better here:

* It acts as a **factory**, returning the correct subclass.
* Avoids messy branching in controllers or the initializer.
* Keeps your API consistent (`.fetch_and_persist_calls` stays the same).
* Used in Rails itself (`ActiveStorage::Service.for`) and by trusted teams (like Thoughtbot).

> **Example:**
> `Nlpearl::ApiService.for(config)` → returns `InboundService` or `OutboundService` based on direction.

---

### ❓ What does “Instance Methods and Associations” mean?

Instead of putting logic in a service object, you can:

* Add **instance methods** directly to your model
* Use **ActiveRecord associations** to access related data
* Encapsulate logic where it belongs (next to the data)

> ✅ Benefit:
> Calling `order.checkout` is more natural than `CheckoutService.new(order).call`.

---

### ❓ What if my model becomes too fat?

According to [this article](https://intersect.whitefusion.io/the-art-of-code/why-service-objects-are-an-anti-pattern), when a model gets too bloated:

#### 👇 Do this instead of writing service objects:

* ✅ Extract behavior into **Concerns**
* ✅ Use **POROs** (Plain Old Ruby Objects)
* ✅ Add meaningful **instance methods**
* ✅ Rely on **ActiveRecord associations** to reduce logic complexity
* 🚫 Avoid cramming everything into `.call` service objects unless absolutely needed

---

### ❓ Aren’t POROs and service objects the same?

**No — but they overlap.**

* **PORO** = Any plain Ruby class (e.g., `Money`, `Coordinate`, `MessageParser`)
* **Service object** = A PORO **used for a specific process** (e.g., `CreateBooking`, `SyncTickets`)
* Not all POROs are service objects, but all service objects are POROs.

> ✅ Tip: Don’t overuse `.call`. Break logic into small POROs or model methods where possible.

---

### ✅ Summary

| Situation                          | Best Practice                                    |
| ---------------------------------- | ------------------------------------------------ |
| Selecting between inbound/outbound | Use `.for(config)` factory method                |
| Adding call logic                  | Use `model_instance.checkout` instead of service |
| Fat models                         | Extract to Concerns or POROs                     |
| Business process                   | Small, focused service object (only if needed)   |
| General reusable logic             | Use POROs (not necessarily service objects)      |

