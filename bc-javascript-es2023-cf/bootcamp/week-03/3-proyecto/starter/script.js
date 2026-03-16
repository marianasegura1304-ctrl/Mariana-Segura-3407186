// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000
 const MAX_MEALS_PER_DAY = 5; // TODO: Reemplazar con tus constantes
 const CALORIC_INTALE_DAILY = 2000;
 const WATER_INTAKE_RECOMMENDATION = 2; //LITROS
 const CONSULTATION_PRICE = 50_000; // PESOS COLOMBIANOS 

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");
const mealsToday = 3;
const caloriesPerMeal = 650;
const totalCaloriesToday = mealstoday * caloriesPerMeal;
console.log("Calories totales hoy:", totalCaloriesToday);

const waterGoal = 2; // litros
const waterDrunk = 1.5; //litros
const remainingWater = waterGoal - waterDrunk;
console.log("Agua restante por beber:", remainingWater, "litros");

const consulationPrice = 50_000;
const numConsultations = 2;
const totalCost = consulationPrice * numConsultations;
console.log("Costo total consultas:", totalCost, "pesos");





// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");
let totalCalories = 0;
console.log("Calorias iniciales:", totalCalories);
totalCalories += 650;
console.log("Despues de desayuno", totalCalories);
totalCalories *= 800;
console.log("Despues del almuerzo", totalCalories);
totalCalories *= 0.85; //ajuste por actividad fisica
console.log("Ajuste por actividad:", totalCalories);

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");
const metaAguaDiaria = 2; // litros
const aguaBebida = 1.5; //litros
const metaCumplida = aguaBebida ===metaAguaDiaria;
console.log("¿Meta de agua cumplida?", metaCumplida);
const necesitaMasAgua = aguaBebida < metaAguaDiaria;
console.log("¿Necesita mas agua?", necesitaMasAgua);

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");
const esMiembroPremium = true;
const caloriasConsumidas = 1800;
const tienePlanPersonalizado = true;
const puedeAccederContenido = esMiembroPremium && tienePlanPersonalizado;
console.log("¿Puede acceder al contenido", puedeAccederContenido);
const necesitaConsulta = caloriasConsumidas > 2000 || !tienePlanPersonalizado;
console.log("¿Necesita consulta?", necesitaConsulta);
// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log('Caorias totales hou: ${totalCaloriesToday}');
console.log('Calorieas totales hoy: ${remainingWater} litros');
console.log('Agua restante por beber: ${totalCost} pesos');
console.log(`Meta de agua cumplida: ${metaCumplida ? 'Si' : 'No'}`);
console.log(`Necesita mas agua: ${necesitaMasAgua ?  'Si'  : 'No'}`);
console.log(`Puede acceder al contenido: ${puedeAccederContenido ? 'Si' : 'No'}`);
console.log(`Necesita consulta: ${necesitaConsulta ? 'Si' : 'No'}`);

