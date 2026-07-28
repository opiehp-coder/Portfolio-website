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
     gallery    – additional images shown in the detail page breakdown
     description– longer case-study copy for the detail page

   Swap image paths / URLs and copy with real assets and content.
   ========================================================= */
const projects = [
  {
    id: "01",
    title: "SILENT FREQUENCY STUDIO",
    subheading: "MONOCHROME DRIFT / R. VASSER",
    category: "Editorial Fashion",
    role: "Art Direction, Styling",
    year: "2025",
    thumbImage: "https://picsum.photos/seed/editorial-01/200/260",
    fullImage: "https://picsum.photos/seed/editorial-01/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-01-a/700/900",
      "https://picsum.photos/seed/editorial-01-b/700/900",
      "https://picsum.photos/seed/editorial-01-c/700/900"
    ],
    description: "A study in restraint — stripped-back sets, hard directional light, and a single monochrome palette carried across every frame. The brief called for tension between stillness and motion, resolved through long exposures and minimal set dressing."
  },
  {
    id: "02",
    title: "PORCELAIN NORTH ISSUE",
    subheading: "COLD LIGHT SERIES / J. HALVARD",
    category: "Magazine Feature",
    role: "Photography, Creative Direction",
    year: "2025",
    thumbImage: "https://picsum.photos/seed/editorial-02/200/260",
    fullImage: "https://picsum.photos/seed/editorial-02/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-02-a/700/900",
      "https://picsum.photos/seed/editorial-02-b/700/900",
      "https://picsum.photos/seed/editorial-02-c/700/900"
    ],
    description: "Shot on location across three winter mornings, this series leans into pale, diffused daylight and muted textiles. The result is a quiet, almost architectural approach to portraiture."
  },
  {
    id: "03",
    title: "GLASSWING ATELIER",
    subheading: "WINTER RECKONING / M. OSEI",
    category: "Brand Campaign",
    role: "Concept, Styling",
    year: "2024",
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
    title: "L'OFFICIELE FASHION MAGAZINE",
    subheading: "FUTURE OVERTURE / AN YU",
    category: "Magazine Cover Story",
    role: "Photography, Art Direction",
    year: "2025",
    thumbImage: "https://picsum.photos/seed/editorial-04/200/260",
    fullImage: "https://picsum.photos/seed/editorial-04/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-04-a/700/900",
      "https://picsum.photos/seed/editorial-04-b/700/900",
      "https://picsum.photos/seed/editorial-04-c/700/900"
    ],
    description: "The cover story explores a near-future wardrobe through a restrained, almost clinical lens — sculptural silhouettes photographed against stark, oversized sets to emphasize scale and form."
  },
  {
    id: "05",
    title: "MERIDIAN HOUSE PRESS",
    subheading: "PALE HORIZON / T. LINDQVIST",
    category: "Editorial Fashion",
    role: "Photography",
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
  {
    id: "06",
    title: "OBSIDIAN QUARTERLY",
    subheading: "NOCTURNE STUDY / K. ABARA",
    category: "Editorial Fashion",
    role: "Art Direction, Lighting Design",
    year: "2024",
    thumbImage: "https://picsum.photos/seed/editorial-06/200/260",
    fullImage: "https://picsum.photos/seed/editorial-06/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-06-a/700/900",
      "https://picsum.photos/seed/editorial-06-b/700/900",
      "https://picsum.photos/seed/editorial-06-c/700/900"
    ],
    description: "A low-key lighting study built almost entirely from practicals and hard shadow, referencing film noir staging to give a fashion story a more cinematic, narrative feel."
  },
  {
    id: "07",
    title: "SABLE & STONE JOURNAL",
    subheading: "ASH GARDEN / D. FONTAINE",
    category: "Brand Campaign",
    role: "Styling, Set Design",
    year: "2023",
    thumbImage: "https://picsum.photos/seed/editorial-07/200/260",
    fullImage: "https://picsum.photos/seed/editorial-07/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-07-a/700/900",
      "https://picsum.photos/seed/editorial-07-b/700/900",
      "https://picsum.photos/seed/editorial-07-c/700/900"
    ],
    description: "Built around a custom greenhouse set dressed with dried botanicals, this campaign contrasts organic texture with sharply tailored pieces."
  },
  {
    id: "08",
    title: "PERIPHERY MAGAZINE",
    subheading: "QUIET STATIC / R. NAKAMURA",
    category: "Magazine Feature",
    role: "Photography, Creative Direction",
    year: "2023",
    thumbImage: "https://picsum.photos/seed/editorial-08/200/260",
    fullImage: "https://picsum.photos/seed/editorial-08/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-08-a/700/900",
      "https://picsum.photos/seed/editorial-08-b/700/900",
      "https://picsum.photos/seed/editorial-08-c/700/900"
    ],
    description: "A quieter, more intimate feature shot on a closed set with a minimal crew — the goal was to strip away polish and let unguarded moments carry the story."
  },
  {
    id: "09",
    title: "VERTIGO EDITORIAL",
    subheading: "SLOW ORBIT / S. WELLES",
    category: "Editorial Fashion",
    role: "Photography, Styling",
    year: "2023",
    thumbImage: "https://picsum.photos/seed/editorial-09/200/260",
    fullImage: "https://picsum.photos/seed/editorial-09/1400/900",
    gallery: [
      "https://picsum.photos/seed/editorial-09-a/700/900",
      "https://picsum.photos/seed/editorial-09-b/700/900",
      "https://picsum.photos/seed/editorial-09-c/700/900"
    ],
    description: "A slow-moving, circular set build let the camera track a single continuous path around the subject, translated here into a still sequence with a strong sense of rotation."
  }
];
