/**
 * Merge the different topic types
 *
 * hasIMTR: If topic has an imtr-file. If `false` it's olo/olo-redirect flow
 * intro: The name of the component that has all texts on the Intro page
 * name: The name of the checker/topic
 * redirectToOlo: If this flow should redirect the user to OLO
 * slug: The part of our app URL that identifies which permit-checker to load (`dakraam-plaatsen` will be `https://vergunningcheck.amsterdam.nl/dakraam-plaatsen`)
 * text: This is part that holds specific texts for each permit-checker
 */

import { Topic } from "../types";

type OloUrlProps = {
  houseNumber: number;
  houseNumberFull: string;
  postalCode: string;
};

const oloHome: string = "https://www.omgevingsloket.nl/";

export const isProduction: boolean =
  "vergunningcheck.amsterdam.nl" === window.location.hostname;

export const urls = {
  DEMOLITION_PERMIT_PAGE:
    "https://www.amsterdam.nl/veelgevraagd/?caseid=%7BAEA35C69-4DAD-483E-8AA1-C068D88B792C%7D",
  FIRESAFETY_PAGE:
    "https://www.amsterdam.nl/veelgevraagd/?productid=%7B1DA41981-4A37-457D-A57C-0E202F43C60B%7D",
  GENERAL_PERMIT_PAGE:
    "https://www.amsterdam.nl/veelgevraagd/?productid=%7B215DE049-EFA3-492D-A4B1-EDFF40E0BC51%7D",
  OLO_HOME: oloHome,
  OLO_INTRO: `${oloHome}Particulier/particulier/home?init=true`,
  OLO_LOCATION: `${oloHome}Particulier/particulier/home/checken/LocatieWerkzaamheden`,
  VIEW_ZONING_PLAN:
    "https://www.amsterdam.nl/veelgevraagd/?productid=%7bC25A69DB-3548-4E12-97BB-DB71318EDFB2%7d",
};

export const generateOloUrl = ({
  houseNumber,
  houseNumberFull,
  postalCode,
}: OloUrlProps) => {
  // Get correct suffix
  const suffix = houseNumberFull.replace(houseNumber.toString(), "").trim();
  // Redirect user to OLO with all parameters
  return `${urls.OLO_LOCATION}?param=postcodecheck&facet_locatie_postcode=${postalCode}&facet_locatie_huisnummer=${houseNumber}&facet_locatie_huisnummertoevoeging=${suffix}`;
};

export const topics: Topic[] = [
  {
    hasIMTR: true,
    intro: "DakkapelIntro",
    name: "Dakkapel plaatsen",
    slug: "dakkapel-plaatsen",
    text: {
      heading: "Vergunningcheck dakkapel plaatsen",
      locationIntro: "Voer het adres in waar u de dakkapel wilt gaan plaatsen",
    },
  },
  {
    hasIMTR: true,
    intro: "DakraamIntro",
    name: "Dakraam plaatsen",
    slug: "dakraam-plaatsen",
    text: {
      heading: "Vergunningcheck dakraam plaatsen",
      locationIntro: "Voer het adres in waar u het dakraam wilt gaan plaatsen",
    },
  },
  {
    hasIMTR: false,
    name: "Aanbouw of uitbouw maken",
    slug: "aanbouw-of-uitbouw-maken",
    text: {
      heading: "Vergunningcheck aanbouw of uitbouw maken",
      locationIntro:
        "Voer het adres in waar u de aanbouw of uitbouw wilt gaan maken",
    },
  },
  {
    hasIMTR: true,
    intro: "KozijnenIntro",
    name: "Kozijnen plaatsen",
    slug: "kozijnen-plaatsen",
    text: {
      heading: "Vergunningcheck kozijnen plaatsen",
      locationIntro: "Voer het adres in waar u de kozijnen wilt gaan plaatsen",
    },
  },
  {
    hasIMTR: true,
    intro: "ZonnepanelenIntro",
    name: "Zonnepanelen of zonneboiler plaatsen",
    slug: "zonnepanelen-of-zonneboiler-plaatsen",
    text: {
      heading: "Vergunningcheck zonnepanelen of zonneboiler plaatsen",
      locationIntro:
        "Voer het adres in waar u de zonnepanelen of zonneboiler wilt gaan plaatsen",
    },
  },
  {
    hasIMTR: true,
    intro: "SlopenIntro",
    name: "Bouwwerk slopen",
    slug: "bouwwerk-slopen",
    text: {
      heading: "Vergunningcheck bouwwerk slopen",
      locationIntro: "Voer het adres in waar u het bouwwerk wilt gaan slopen",
    },
  },
  {
    hasIMTR: false,
    name: "Intern verbouwen",
    slug: "intern-verbouwen",
    text: {
      heading: "Vergunningcheck intern verbouwen",
      locationIntro: "Voer het adres in waar u intern wilt gaan verbouwen",
    },
  },
  {
    hasIMTR: true,
    intro: "ZonweringRolluikIntro",
    name: "Zonwering of rolluik plaatsen",
    slug: "zonwering-of-rolluik-plaatsen",
    text: {
      heading: "Vergunningcheck zonwering, rolhek, rolluik of luik plaatsen",
      locationIntro:
        "Voer het adres in waar u de zonwering, het rolhek, rolluik of luik wilt gaan plaatsen",
    },
  },
  {
    hasIMTR: false,
    name: "Kappen of snoeien",
    redirectToOlo: true,
    slug: "kappen-of-snoeien",
    text: {
      heading: "Vergunningcheck kappen of snoeien",
    },
  },
  {
    hasIMTR: true,
    intro: "BrandveiligGebruikIntro",
    name: "Brandveilig gebruik",
    redirectToOlo: false,
    slug: "brandveilig-gebruik",
    text: {
      heading: "Vergunningcheck brandveilig gebruik",
    },
  },
];
