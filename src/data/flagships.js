const base = '/showcase/';
export const flagships = [
  {
    id: 10, slug: 'nexa', title: 'Nexa Color Match', label: 'AI + COMPUTER VISION', type: 'AI Application',
    description: 'Personalized interior wall-color exploration, connecting a Flutter experience with Spring Boot APIs and Python image analysis.',
    technologies: ['Flutter', 'Java', 'Spring Boot', 'Python', 'OpenCV', 'MySQL', 'AWS S3'],
    features: ['Interior image capture and polygon-based object marking', 'Customer preference collection and color-palette exploration', 'Area, entropy and visual-clutter analysis combined with fuzzy logic', 'Mobile interface, REST APIs and image-storage integration'],
    contribution: 'Academic team contributor to the interior color-matching application. The implementation combines mobile, backend and image-analysis components; individual algorithm ownership is not claimed.',
    manualDescription: 'Interior color selection needs to account for the room as well as personal preferences. This university team project connects a Flutter application, a Java Spring Boot API and Python image-processing components. The room-complexity implementation measures object area, entropy and visual clutter, then combines those signals through fuzzy logic. The repository also contains image capture, object marking, preference collection and color visualization. Engineering work spans image payloads, API integration and persistence across the application layers.',
    credits: 'Rajarata University of Sri Lanka. Academic team: Thilina Premachandra, Asini Warnasooriya, Charitha Adikari, Isuru Pradeep and Manuwendra Vikum. Research co-author: Dr. K. A. S. H. Kulathilake.',
    publication: { title: 'An AI-Driven Approach for User-Personalized Interior Color Matching Using Room Complexity and Visual Context', url: 'https://doi.org/10.1109/SCSE70081.2026.11499927', venue: 'IEEE SCSE 2026' },
    sourceNote: 'Visual evidence: frame from the existing project demonstration. Team research; no sole-authorship claim.'
  },
  {
    id: 101, slug: 'distribution', title: 'Distribution Management System', label: 'BUSINESS SYSTEMS', type: 'Full Stack',
    description: 'Role-based sales operations connecting product catalogues, order approvals, payment records and outstanding-balance reporting.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'Entity Framework Core', 'PostgreSQL'],
    features: ['Administrator, sales representative, coordinator and customer workflows', 'Order creation, approval and status tracking', 'Product and catalogue management', 'Payment verification, customer balances and outstanding reports'],
    contribution: 'Developed React and .NET distribution workflows for orders, payments and reporting, as documented in my freelance experience.',
    manualDescription: 'A distribution business needs a consistent view of orders and money owed across different user roles. The React frontend communicates with ASP.NET Core APIs whose controllers enforce role-based access. Application services and Entity Framework Core support the backend data layer. Verified flows include order approvals, product catalogue operations, payment recording and verification, customer balances and outstanding-report handling. This presentation shares architecture and permitted capabilities without redistributing client source or production data.',
    sourceNote: 'Public case study. The visual is an architecture illustration, not a production dashboard. Client source and data remain private.'
  },
  {
    id: 102, slug: 'sewzio', title: 'Sewzio', label: 'TAILORING + MOBILE', type: 'Mobile App',
    description: 'A Sinhala and English tailoring workspace for customer measurements, garment orders and rental management.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'sqflite'],
    features: ['Custom measurement fields and reusable garment templates', 'Order stages from acceptance through delivery', 'Order payments and outstanding amounts', 'Rental inventory and booking workflows', 'Sinhala and English interface'],
    contribution: 'Developed the Flutter tailoring application and its measurement, order and rental workflows.',
    manualDescription: 'Sewzio brings customer measurements and day-to-day tailoring work into a mobile interface. Reusable garment templates define measurement fields while orders preserve their own measurement snapshots. The order service validates measurements and stores related changes transactionally in SQLite. Workflow stages cover cutting, stitching, quality checks and delivery. Rental entities and services support garments that are hired rather than made to order. The interface includes Sinhala and English presentation.',
    sourceNote: 'Visual evidence: existing device capture of the Flutter application. No customer records are shown.'
  },
  {
    id: 103, slug: 'meetmind', title: 'MeetMind AI', label: 'SPEECH + DEVICE SYNC', type: 'AI Application',
    description: 'A Chrome extension and Flutter Android companion for Sinhala and English captions, transcript workspaces and AI questions.',
    technologies: ['JavaScript', 'Chrome Extensions', 'Web Speech API', 'Flutter', 'Supabase', 'Gemini'],
    features: ['Sinhala and English speech-recognition modes', 'Live and finalized transcript presentation', 'Ask MeetMind AI question-answering interface', 'Authenticated transcript and question synchronization', 'Chrome side panel and Android companion'],
    contribution: 'Developed the extension and companion application, integrating speech recognition, transcript handling and cross-device interaction.',
    manualDescription: 'MeetMind AI connects browser audio and speech-recognition workflows with a compact transcript workspace. The extension uses Chrome side-panel and offscreen components, with Web Speech recognition for Sinhala and English. An authenticated Supabase synchronization layer shares transcript text and questions with the Flutter companion. The engineering focus is on handling interim and final recognition results, maintaining workspace boundaries and connecting browser and mobile interfaces. Recognition quality depends on the selected engine, language and audio conditions; no latency or accuracy benchmark is claimed.',
    sourceNote: 'Visual evidence: saved extension UI preview in its idle state. It is not evidence of a live transcription benchmark.'
  },
  {
    id: 104, slug: 'lumaedge', title: 'LumaEdge', label: 'NATIVE ANDROID', type: 'Mobile App',
    description: 'A native Android utility that places adjustable light around the screen edge with floating controls.',
    technologies: ['Java', 'Android SDK', 'WindowManager', 'Foreground Service'],
    features: ['Screen-edge overlay with rounded corners', 'Adjustable light tone, width, transparency and brightness', 'Floating controls for adjustment outside the main screen', 'Brightness restoration when the light is switched off'],
    contribution: 'Developed the native Android interface, overlay service and floating light controls.',
    manualDescription: 'LumaEdge uses Android overlay windows to create a configurable border of light around the display. Its native Java implementation separates the main settings activity, overlay service and floating controls. Users can adjust light appearance and brightness while supported overlay behavior keeps the controls accessible outside the main activity. The app requests the relevant overlay and system-brightness permissions. Compatibility depends on Android and device restrictions; universal video-call compatibility is not claimed.',
    sourceNote: 'Visual evidence: current Android application captured on a connected device. No call recording or personal data is shown.'
  },
  {
    id: 105, slug: 'minipos', title: 'Flutter Mini POS', label: 'MOBILE COMMERCE', type: 'Full Stack',
    description: 'Mobile billing and sales workflows backed by ASP.NET Core, with local persistence and explicit synchronization boundaries.',
    technologies: ['Flutter', 'Dart', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Drift / SQLite'],
    features: ['Product, billing and sales-history workflows', 'Payment handling and receipt snapshots', 'Local cache and queued offline-sale synchronization', 'Server-side role and tenant boundaries'],
    contribution: 'Developed Flutter mobile POS and .NET workflows for products, billing, payments and sales history, as documented in my freelance experience.',
    manualDescription: 'This mobile commerce project is separate from my academic React and Spring Boot POS. The Flutter client integrates with an ASP.NET Core modular backend and PostgreSQL. SQLite supports local persistence and queued synchronization while the server remains authoritative for authorization and financial records. The implementation includes billing services, sale-receipt snapshots, receipt previews and offline-sale handling. This case study presents permitted implementation concepts without publishing organization-owned source or customer information.',
    sourceNote: 'Public case study. Visual evidence: sanitized device QA capture of the synchronization screen. Organization-owned source remains private.'
  }
].map(p => ({ ...p, featured: true, image: `${base}${p.slug}-cover.webp`, galleryImages: [`${base}${p.slug}-features.webp`, `${base}${p.slug}-architecture.webp`] }));
export default flagships;
