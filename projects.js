/* =========================================================
   PROJECT DATA

   id          – project.html?id=01
   title       – project name
   subheading  – homepage metadata
   category    – small label on homepage card
   briefType   – Spec Work / Client / AWARD School / etc.
   role        – your role
   year        – project year

   problem     – THE PROBLEM
   insight     – THE INSIGHT
   idea        – THE IDEA

   thumbImage  – homepage thumbnail
   fullImage   – larger project/homepage image if needed

   gallery     – project executions
   src         – image
   label       – OOH / PRINT / SOCIAL / PR / FILM etc.

   description – fallback copy if Problem / Insight / Idea are empty
   ========================================================= */

const projects = [

  {
    id: "01",
    title: "Baggage Claims",
    subheading: "BRANDING / PERTH",

    category: "July Luggage",
    briefType: "Spec Work",
    role: "Creative",
    year: "2026",

    problem: "Airline baggage gets absolutely beaten up behind the scenes, and travellers rarely know what actually happened to it.",

    insight: "When people don’t know what happened to their luggage, they start making up their own theories. Usually ridiculous ones.",

    idea: "Create a social series where July takes real travellers’ baggage theories and puts them to the test on its own suitcases. Each claim gets recreated in a stark white lab, no matter how ridiculous it is.",

    thumbImage: "images/nk_logo.jpg",
    fullImage: "images/nk_card.jpg",

    gallery: [
      {
        src: "images/nk_logo.jpg",
        label: ""
      },
      {
        src: "images/nk_truck.jpg",
        label: ""
      },
      {
        src: "images/nk_cup.jpg",
        label: ""
      },
      {
        src: "images/nk_shirt.jpg",
        label: ""
      }
    ],

    description: ""
  },


  {
    id: "02",
    title: "HIDDEN TREASURE",
    subheading: "PRODUCT / PERTH",

    category: "Product",
    briefType: "Spec Work",
    role: "Designer",
    year: "2025",

    problem: "x",
    insight: "y",
    idea: "z",

    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812680/portfolio_logo_hidden_treasure_vqhurb.svg",

    fullImage: "images/ht_three.jpg",

    gallery: [
      {
        src: "images/ht_box.jpg",
        label: "PACKAGING"
      },
      {
        src: "images/ht_pos.jpg",
        label: "POINT OF SALE"
      },
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812251/ht_anchor_udwzyd.jpg",
        label: "BRANDING"
      },
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812251/ht_lantern_nmjkwo.jpg",
        label: "BRANDING"
      },
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812251/ht_oar_agsxkw.jpg",
        label: "BRANDING"
      }
    ],

    description: "Perth has a strong naval history and long ties with the United States Navy. I believe every product should have a story. This is why I have used naval influence as the foundation for this wine. The design is inspired by U.S. Navy uniforms, topographic maps and traditional navigational instruments. It also draws from 1980s jazz posters, which visually complement the era of the uniforms and help shape the overall aesthetic of the brand."
  },


  {
    id: "03",
    title: "BIGGIE SLICE",
    subheading: "BRAND / PERTH",

    category: "Branding",
    briefType: "Spec Work",
    role: "Designer, Copywriting",
    year: "2026",

    problem: "",
    insight: "",
    idea: "",

    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810964/biggie_slice_logo_r5oe1o.jpg",

    fullImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810964/biggie_slice_logo_r5oe1o.jpg",

    gallery: [
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810994/pizza_box_black_bg_mfg1xs.jpg",
        label: "PACKAGING"
      },
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785811030/menu_in_context_u2bpvt.jpg",
        label: "MENU"
      },
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785811306/napkin_lpggkw.jpg",
        label: "BRANDING"
      },
      {
        src: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785811102/close_upon_the_wall_dfnype.jpg",
        label: "IN-STORE"
      }
    ],

    description: "Perth has pizza, but it doesn’t have a pizza shop that both sells by the slice nor brings the NYC atmosphere. This is where Biggie Slice fills the market gap. I have done a full branding for Biggie Slice as a speculative project."
  },


  {
    id: "04",
    title: "AWARD SCHOOL",
    subheading: "CREATIVE / PERTH",

    category: "Creative",
    briefType: "AWARD School",
    role: "Student",
    year: "2026",

    problem: "",
    insight: "",
    idea: "",

    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785809457/award_school_logo_j3pd4d.jpg",

    fullImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812591/award-group_znuz50.jpg",

    gallery: [
      {
        src: "images/brief_1.jpg",
        label: ""
      },

      {
        src: "images/brief_2.jpg",
        label: "",
        award: {
          type: "best_in_book",
          label: "BEST IN BOOK"
        }
      },

      {
        src: "images/brief_3.jpg",
        label: ""
      },

      {
        src: "images/brief_4.jpg",
        label: ""
      },

      {
        src: "images/brief_5.jpg",
        label: ""
      },

      {
        src: "images/brief_6.jpg",
        label: ""
      },

      {
        src: "images/brief_7.jpg",
        label: ""
      },

      {
        src: "images/brief_8.jpg",
        label: ""
      },

      {
        src: "images/brief_9A.jpg",
        label: "",
        award: {
          type: "second_best_in_book",
          label: "SECOND BEST IN BOOK"
        }
      },

      {
        src: "images/brief_9B.jpg",
        label: "",
        award: {
          type: "second_best_in_book",
          label: "SECOND BEST IN BOOK"
        }
      },

      {
        src: "images/brief_9C.jpg",
        label: "",
        award: {
          type: "second_best_in_book",
          label: "SECOND BEST IN BOOK"
        }
      },

      {
        src: "images/brief_10.jpg",
        label: ""
      },

      {
        src: "images/brief_team.jpg",
        label: ""
      }
    ],

    description: "12 weeks. 10 briefs. Countless ideas killed. AWARD School is Australia’s toughest creative training ground. Mentored by Perth’s top ECDs and agency leaders, I learned to cut through the fluff, sharpen my insights, and come out the other side a significantly stronger creative."
  },


  {
    id: "05",
    title: "LIQUID DEATH",
    subheading: "PRODUCT / PERTH",

    category: "Creative",
    briefType: "Spec Work",
    role: "Creative",
    year: "2024",

    problem: "",
    insight: "",
    idea: "",

    thumbImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785812907/Liquid-Death-Logo_xrecg8.jpg",

    fullImage: "https://res.cloudinary.com/owbjvb3x/image/upload/v1785810596/liquid_death_nyd2qv.jpg",

    gallery: [],

    description: "I have been a fan of Liquid Death’s advertising and collaborations for a long time. So I decided to make my own collaboration between them and Sesame Street. In this project I utilized Google’s Gemini to turn my drawings into 3d models."
  }

];