import { Services } from "../components/Services";
import { WhatWeOffer } from "../components/WhatWeOffer";
import { Stats } from "../components/Stats";

export function ServicesPage() {
  return (
    <>
      <div className="pt-24">
        <WhatWeOffer />
        <Stats />
        <Services />
      </div>
    </>
  );
}
