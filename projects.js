/* =========================================================
   PROJECT DATA — single source of truth
   Shared by index.html (gallery) and project.html (detail page).

   Fields:
     id         – used in the URL as project.html?id=01
     title      – project title
     subheading – short metadata line shown under the hero image on the gallery
     category   – shown on the detail page metadata row
     role       – shown on the detail page metadata row
     year       – shown on the detail page metadata row
     thumbImage – small thumbnail (gallery bottom strip)
     fullImage  – large hero image (gallery + detail page header)
     gallery    – additional images shown in the detail page breakdown.
                  Each entry can be EITHER a plain string URL,
                    "images/brief_1.jpg"
                  OR an object if that specific image won an award:
                    { src: "images/brief_1.jpg", award: { ... } }
                  (see `award` below for the shape)
     description– longer case-study copy for the detail page
     award      – OPTIONAL. Set this to give a project (or a single
                  gallery image) an always-visible pill badge. Shape:
                    award: {
                      type: "best_in_brief" | "best_in_book" | "second_best_in_book",
                      label: "BEST IN BOOK"   // the exact text shown on the pill
                    }
                  `label` is optional too — leave it out and it falls back
                  to a default based on `type` (e.g. "best_in_book" →
                  "BEST IN BOOK"). Set `label` when you want custom text.
                  Badge is always visible on the thumbnail — no hover needed.
                  Leave `award` out entirely to show no badge.
                  This can go on a PROJECT (shows on its thumbnail +
                  hero image) and/or on individual `gallery` entries
                  (shows on that one tile) — mix and match freely.

   Swap image paths / URLs and copy with real assets and content.
   ========================================================= */
const projects = [
  {
    id: "01",
    title: "NONNA'S KITCHEN",
    subheading: "BRANDING / PERTH",
    category: "Spec Work",
    role: "Designer",
    year: "2023",
    thumbImage: "images/nk_card.jpg",
    fullImage: "images/nk_card.jpg",
    gallery: [
      "images/nk_logo.jpg",
      "images/nk_truck.jpg",
      "images/nk_cup.jpg",
      "images/nk_shirt.jpg"
      
    ],
    description: "A popular lunch item in Perth is a Conti Roll. This long crusty roll is filled with Italian deli meats, pickled vegetables and sliced cheese. The issue for Curtin University students is that there are none sold on campus. This is why I have created the Nonna’s Kitchen food truck to feed these students."
  },
  {
    id: "02",
    title: "HIDDEN TREASURE",
    subheading: "PRODUCT / PERTH",
    category: "Spec Work",
    role: "Designer",
    year: "2025",
    thumbImage: "images/ht_three.jpg",
    fullImage: "images/ht_three.jpg",
    gallery: [
      "images/ht_box.jpg",
      "images/ht_pos.jpg",
      "images/ht_anchor.jpg",
      "images/ht_lantern.jpg",
      "images/ht_oar.jpg"
    ],
    description: "Perth has a strong naval history and long ties with the United States Navy. I believe every product should have a story. This is why I have used naval influence as the foundation for this wine. The design is inspired by U.S. Navy uniforms, topographic maps and traditional navigational instruments. It also draws from 1980s jazz posters, which visually complement the era of the uniforms and help shape the overall aesthetic of the brand."
  },
  {
    id: "03",
    title: "LOAF 2 LARGER",
    subheading: "PRODUCT / PERTH",
    category: "Spec Work",
    role: "Designer, Copywriting",
    year: "2026",
    thumbImage: "https://picsum.photos/seed/editorial-03/200/260",
    fullImage: "https://picsum.photos/seed/editorial-03/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-03-a/700/900",
      "https://picsum.photos/seed/editorial-03-b/700/900",
      "https://picsum.photos/seed/editorial-03-c/700/900"
    ],  
    description: "A seasonal campaign built around structured silhouettes and heavier fabrics. Set design leaned on cold-toned interiors to let the garments carry the color story."
  },
  {
    id: "04",
    title: "AWARD SCHOOL",
    subheading: "CREATIVE / PERTH",
    category: "Education",
    role: "Student",
    year: "2026",
    thumbImage: "images/award-group.jpg",
    fullImage: "images/award-group.jpg",
    gallery: [
      "images/brief_1.jpg",
       { src: "images/brief_2.jpg", award: { type: "best_in_book", label: "BEST IN BOOK" } },
      "images/brief_3.jpg",
      "images/brief_4.jpg",
      "images/brief_5.jpg",
      "images/brief_6.jpg",
      "images/brief_7.jpg",
      "images/brief_8.jpg",
      { src: "images/brief_9A.jpg", award: { type: "second_best_in_book", label: "SECOND BEST IN BOOK" } },
      { src: "images/brief_9B.jpg", award: { type: "second_best_in_book", label: "SECOND BEST IN BOOK" } },
      { src: "images/brief_9C.jpg", award: { type: "second_best_in_book", label: "SECOND BEST IN BOOK" } },
      "images/brief_10.jpg",
      "images/brief_team.jpg",
    ],
    description: "12 weeks. 10 briefs. Countless ideas killed. AWARD School is Australia’s toughest creative training ground. Mentored by Perth’s top ECDs and agency leaders, I learned to cut through the fluff, sharpen my insights, and come out the other side a significantly stronger creative."
  },
  {
    id: "05",
    title: "LIQUID DEATH",
    subheading: "CREATIVE / PERTH",
    category: "Spec Work",
    role: "Creative",
    year: "2024",
    thumbImage: "https://picsum.photos/seed/editorial-05/200/260",
    fullImage: "https://picsum.photos/seed/editorial-05/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-05-a/700/900",
      "https://picsum.photos/seed/editorial-05-b/700/900",
      "https://picsum.photos/seed/editorial-05-c/700/900"
    ],
    description: "Shot at dawn along an open coastline, this series plays with negative space and a near-empty horizon line to isolate the subject and the garments completely."
  },

];
