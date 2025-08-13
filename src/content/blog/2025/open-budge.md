---
title: Open Budget App
description: Open budget is a project I'm developing for better planning of my finances
pubDate: 2025-05-04 15:54
heroImage: /blog-placeholder-1.jpg
---

## 🏗️ Arquitectura del Proyecto: "Open Budget App"

### 🔧 Stack

- **Backend**: Ruby on Rails (API or Full MVC)
- **Base de datos**: PostgreSQL
- **Frontend**: (opcional) Hotwire (Turbo/Stimulus).
- **Autenticación**: Devise o Sorcery
- **Control de versiones**: Git + GitHub
- **Hosting**: Coolify + Hostinguer.
---

## 📦 Modelos Principales y Relaciones

```plaintext
User
 └── has_many :budgets
 └── has_many :categories
 └── has_many :incomes

Budget
 └── belongs_to :user
 └── has_many :budget_items
 └── has_many :expenses
 └── has_many :incomes

BudgetItem (categoría planificada)
 └── belongs_to :budget
 └── belongs_to :category
 └── estimated_amount:decimal
 

Categories (Expenses clasification)
 └── belongs_to :user
 └── has_many :expenses
 └── has_many :budget_items
 └── t.string :name
 └── t.string :color (optional for UI tags)

Expense (gasto real)
 └── belongs_to :budget, optional: true
 └── belongs_to :category, optional: true
 └── belongs_to :user, optional: true
 └── description:string
 └── amount:decimal
 └── spent_on:date

Income
 └── belongs_to :user, optional: true
 └── belongs_to :budget, optional: true
 └── source:string
 └── amount:decimal
 └── received_on:date
```

---

## 🗂️ Estructura de Base de Datos (schema.rb simplificado)

```ruby
create_table "users" do |t|
  t.string "email", null: false
  t.string "encrypted_password"
  t.timestamps
end

create_table "budgets" do |t|
  t.references "user", foreign_key: true
  t.string "name"
  t.date "start_date"
  t.date "end_date"
  t.timestamps
end

create_table "categories" do |t|
  t.references :user, foreign_key: true
  t.string "name"
  t.string "color"
  t.timestamps
end

create_table "budget_items" do |t|
  t.references :budget, foreign_key: true
  t.references :category, foreign_key: true
  t.decimal "estimated_amount", precision: 10, scale: 2
  t.timestamps
end

create_table "expenses" do |t|
  t.references :user, foreign_key: true
  t.references :budget, foreign_key: true, null: true
  t.references :category, foreign_key: true, null: true
  t.string "description"
  t.decimal "amount", precision: 10, scale: 2
  t.date "spent_on"
  t.timestamps
end
```

---

## 🧠 Funcionalidades Clave (MVP)

### Autenticación

- Registro e inicio de sesión de usuarios (Devise)
### Presupuestos

- Crear presupuesto mensual (con fecha inicio y fin)
- Añadir categorías planificadas (budget_items)
- Registrar gastos diarios (expenses)
- Comparar estimado vs real (gráfica o tabla)
- Calcular diferencias por categoría

### Visualización
- Dashboard con resumen mensual (ingresos, gastos, ahorro)
- Gráfica de pastel: % por categoría
- Historial de presupuestos pasados

### Extra (para después del MVP)

- Recordatorios por email para registrar gastos
- Reglas automáticas (clasificar gastos por descripción)
- Exportar a Excel o PDF

---

## 🧪 Pruebas y Mantenimiento

- Tests con RSpec + FactoryBotgas 
- Linter (RuboCop)
- Deploy automático con GitHub Actions    

---

¿Te gustaría que te prepare el código base inicial (`rails new`) ya con los modelos y controladores básicos generados, o prefieres que primero diseñemos las vistas o API endpoints?

## FAQs
- What happens if we remove a budget and only expenses remain?
	- We decouple expenses from budgets, so if a budget is removed, then we still keep expenses, wich are usefull for expenses tracking purposes.
- Shall we suport categories?
		- Yes, we should do.


## References
1.