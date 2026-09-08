/**
 * ------------------------------------------------------------------
 * IMAGE CONFIGURATION
 * ------------------------------------------------------------------
 * Every image used across the website is declared here in one place.
 * They currently point to licensed stock photography (Unsplash) that
 * matches the company's real industry (scrap metal / industrial).
 *
 * TO REPLACE WITH THE COMPANY'S OWN PHOTOS:
 *   1. Drop your image files into  src/assets/images/
 *   2. Import them at the top of this file, e.g.
 *        import heroYard from "./images/hero-yard.jpg";
 *   3. Swap the matching value below from the URL string to the
 *      imported variable, e.g.  hero: heroYard
 *
 * No other file needs to change — every page imports images from here.
 * ------------------------------------------------------------------
 */

const images = {
  // Hero / top-level
  hero: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1600&q=80",
  heroWorker: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",

  // About page
  aboutIntro: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80",
  aboutTeam: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  aboutYard: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",

  // Group of companies
  groupDecor: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  groupTransport: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80",

  // Services
  serviceTrading: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  serviceSourcing: "https://images.unsplash.com/photo-1553413077-190783d0c990?auto=format&fit=crop&w=900&q=80",
  serviceLogistics: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  serviceWaste: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=900&q=80",
  serviceBulk: "https://images.unsplash.com/photo-1553413077-190783d0c990?auto=format&fit=crop&w=900&q=80",

  // Industries
  industryConstruction: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
  industryManufacturing: "https://images.unsplash.com/photo-1565087389376-6f97cebf2ed3?auto=format&fit=crop&w=800&q=80",
  industryOilGas: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
  industryFacility: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  industryRecycling: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80",

  // Strengths
  strengthHeritage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  strengthExpertise: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  strengthNetwork: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  strengthEfficiency: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  strengthSustainability: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
  strengthClient: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80",

  // Sustainability / CTA
  sustainability: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1400&q=80",
  ctaBanner: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=80",

  // Contact
  contactYard: "https://images.unsplash.com/photo-1518131678677-a2e0fd3d4f0e?auto=format&fit=crop&w=1200&q=80",
};

export default images;
