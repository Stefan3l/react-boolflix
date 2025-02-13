import { createContext, useContext, useState } from "react";

// Creo contesto
const PromoContext = createContext();

// Creo il componente

function PromoProvider({ children, message = "" }) {
  const [promoData, setPromoData] = useState({
    message: `Non perdere la magia del cinema! 🎬

Scopri migliaia di film e serie disponibili SOLO su BoolFlix. Abbonati ora per godere di:

✔️ Accesso illimitato ai film e serie più popolari
✔️ Consigli personalizzati pensati per te
✔️ Streaming in qualità HD e Ultra HD, senza interruzioni pubblicitarie

👉 Provalo GRATIS per i primi 7 giorni! 🎥
Non lasciare che il divertimento aspetti. BoolFlix è il tuo mondo di film, a portata di clic.`,
  });

  return (
    <PromoContext.Provider value={{ promoData, setPromoData }}>
      {children}
    </PromoContext.Provider>
  );
}

// Definisco un hook custom per facilitare il consumo

function usePromoContext() {
  const context = useContext(PromoContext);
  return context;
}

export { PromoProvider, usePromoContext };
