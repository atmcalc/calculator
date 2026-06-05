// ============================================
// КОНФІГУРАЦІЙНИЙ ФАЙЛ КАЛЬКУЛЯТОРА СЕС
// ============================================

const CONFIG = {
  // Ціни на обладнання (грн)
  prices: {
    // Вартість 1 кВп для різних типів СЕС
    systemTypes: {
      onGridRoof: 55000,      // On-grid з обмеженням (дах)
      onGridGround: 50000,    // On-grid (наземна)
      onGridFeedIn: 58000,    // On-grid з продажем у мережу
      hybrid: 70000           // Гібридна (готовність до батарей)
    },
    
    // Інші ціни
    BESS_per_kWh: 35000,      // Батарея (грн за кВт·год)
    DG_adapter: 15000,        // Адаптер для дизель-генератора
    cable_per_m: 300          // Кабельна траса (грн за метр)
  },
  
  // Фінансові коефіцієнти
  finance: {
    discountRate: 0.10,       // Ставка дисконтування (10%)
    opex_pct: 0.013,          // Операційні витрати (1.3% від CAPEX)
    design_pct: 0.04,         // Проєктування та ТУ (4%)
    contingency_pct: 0.10     // Резерв непередбачених (10%)
  },
  
  // Сонячні коефіцієнти
  solar: {
    seasonality: [0.45,0.58,0.82,1.05,1.20,1.28,1.25,1.18,0.98,0.70,0.48,0.38],
    degradation: 0.005        // Деградація панелей (0.5% на рік)
  },
  
  // Коефіцієнти для різних типів розміщення
  placement: {
    flatRoof:   { uf: 0.60, spm: 7.0,  genK: 1.0,  name_uk: 'Плоский дах',    name_en: 'Flat roof',     defaultTilt: 15 },
    slopedRoof: { uf: 0.87, spm: 6.5,  genK: 1.0,  name_uk: 'Похилий дах',   name_en: 'Sloped roof',   defaultTilt: 30 },
    ground:     { uf: 0.45, spm: 12.0, genK: 1.0,  name_uk: 'Наземна',       name_en: 'Ground mount',  defaultTilt: 30 },
    facade:     { uf: 0.80, spm: 8.0,  genK: 0.65, name_uk: 'Фасад',         name_en: 'Facade',        defaultTilt: 90 },
    carport:    { uf: 0.90, spm: 7.0,  genK: 1.0,  name_uk: 'Навіс',         name_en: 'Carport',       defaultTilt: 10 }
  }
};
