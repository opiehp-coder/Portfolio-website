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
    thumbImage: "images/nk_logo.jpg",
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
    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812680/portfolio_logo_hidden_treasure_vqhurb.svg",
    fullImage: "images/ht_three.jpg",
    gallery: [
      "images/ht_box.jpg",
      "images/ht_pos.jpg",
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812251/ht_anchor_udwzyd.jpg",
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812251/ht_lantern_nmjkwo.jpg",
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812251/ht_oar_agsxkw.jpg"
    ],
    description: "Perth has a strong naval history and long ties with the United States Navy. I believe every product should have a story. This is why I have used naval influence as the foundation for this wine. The design is inspired by U.S. Navy uniforms, topographic maps and traditional navigational instruments. It also draws from 1980s jazz posters, which visually complement the era of the uniforms and help shape the overall aesthetic of the brand."
  },
  {
    id: "03",
    title: "Biggie Slice",
    subheading: "BRAND / PERTH",
    category: "Spec Work",
    role: "Designer, Copywriting",
    year: "2026",
    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810964/biggie_slice_logo_r5oe1o.jpg",
    fullImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810964/biggie_slice_logo_r5oe1o.jpg",
    gallery: [
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810994/pizza_box_black_bg_mfg1xs.jpg",
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785811030/menu_in_context_u2bpvt.jpg",
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785811306/napkin_lpggkw.jpg",
      "https://res.cloudinary.com/owbjvb3x/image/upload/v1785811102/close_upon_the_wall_dfnype.jpg"
    ],  
    description: "Perth has pizza, but it doesn’t have a pizza shop that both sells by the slice nor brings the NYC atmosphere. This is where Biggie Slice fills the market gap. I have done a full branding for Biggie Slice as a speculative project."
  },
  {
    id: "04",
    title: "AWARD SCHOOL",
    subheading: "CREATIVE / PERTH",
    category: "Education",
    role: "Student",
    year: "2026",
    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785809457/award_school_logo_j3pd4d.jpg",
    fullImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812591/award-group_znuz50.jpg",
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
    subheading: "PRODUCT / PERTH",
    category: "Spec Work",
    role: "Creative",
    year: "2024",
    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812907/Liquid-Death-Logo_xrecg8.jpg",
    fullImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810596/liquid_death_nyd2qv.jpg",
    gallery: [
    ],
    description: "I have been a fan of Liquid Death’s advertising and collaborations for a long time. So I decided to make my own collaboration between them and Sesame Street. In this project I utilized Google’s Gemini to turn my drawings into 3d models."
  },

];
