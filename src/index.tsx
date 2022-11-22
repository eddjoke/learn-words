import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// grupuoti daiktavardžius/veiksmažodžius/būdvardžius
const words = {
  Require: "Reikalauti",
  Communicate: "Bendrauti",
  Solve: "Išspręsti",
  Improve: "Patobulinti",
  Fluently: "Laisvai",
  "Find out": "Sužinoti",
  Refuse: "Atsisakyti",
  Advise: "Patarti",
  Offer: "Pasiūlyti",
  Suggest: "Pasiūlyti",
  Propose: "Pasiūlyti",
  Agreement: "Susitarimas",
  Possibility: "Galimybė",
  Opportunity: "Galimybė",
  Remind: "Priminti",
  Take: "Paimti",
  Listen: "Klausyti",
  Disturb: "Trukdyti",
  Stay: "Pasilikti",
  Remotely: "Per nuotolį",
  Coperate: "Bendradarbiauti",
  Foreign: "Užsienio",
  Deals: "Reikalai",
  Lessons: "Pamokos",
  Expect: "Tikėti",
  Cost: "Kaina",
  Often: "Dažnai",
  Boil: "Virti",
  Spend: "Praleisti",
  Participate: "Dalyvauti",
  Abroad: "Užsienis",
  Earn: "Užsidirbti",
  Depends: "Priklauso",
  Depend: "Priklausyti",
  Use: "Naudoti",
  For: "Už",
  Enough: "Pakankamai",
  Mean: "Reikšti",
  Do: "Daryti",
  Broken: "Sugedęs",
};

root.render(
  <React.StrictMode>
    <App words={words} />
  </React.StrictMode>
);
