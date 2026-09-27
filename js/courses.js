/* ==========================================================================
   Meridian University — Courses Page
   Search · filters · sorting · pagination · course details · enrollment ·
   demo tuition payments.  (Front-end demonstration only.)
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------
     DATA
  ------------------------------------------------------------------ */

  const INSTRUCTORS = {
    james:    { name: 'Dr. James Carter',    role: 'Professor of Computer Science',                dept: 'School of Computing & Engineering', img: 'https://randomuser.me/api/portraits/men/32.jpg',   bio: 'PhD in Computer Science (Carnegie Mellon). Dr. Carter has fifteen years of teaching and research in algorithms and distributed systems, and coached Meridian\u2019s programming team to three regional titles.', courses: 9, students: 3240, rating: 4.9 },
    sofia:    { name: 'Dr. Sofia Ramirez',   role: 'Associate Professor of Software Engineering',  dept: 'School of Computing & Engineering', img: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'PhD in Software Engineering. Dr. Ramirez spent eight years building large-scale web platforms in industry before joining Meridian, where she leads the Full-Stack professional track.', courses: 6, students: 2870, rating: 4.8 },
    daniel:   { name: 'Prof. Daniel Hughes', role: 'Senior Lecturer, School of Business',          dept: 'Meridian Business School',           img: 'https://randomuser.me/api/portraits/men/52.jpg',   bio: 'FCA and Senior Lecturer in Accounting. Prof. Hughes is a chartered accountant with twenty years of audit and advisory practice, known for making the accounting cycle genuinely enjoyable.', courses: 5, students: 1980, rating: 4.7 },
    amara:    { name: 'Dr. Amara Okafor',    role: 'Professor of Marketing',                       dept: 'Meridian Business School',           img: 'https://randomuser.me/api/portraits/women/65.jpg', bio: 'PhD in Marketing Strategy. Dr. Okafor consults for consumer brands across three continents and directs Meridian\u2019s Digital Marketing Institute.', courses: 7, students: 2510, rating: 4.8 },
    elena:    { name: 'Dr. Elena Petrova',   role: 'Professor of Mechatronics',                    dept: 'School of Computing & Engineering', img: 'https://randomuser.me/api/portraits/women/68.jpg', bio: 'PhD in Mechatronics. Dr. Petrova leads the Robotics & Autonomous Systems Laboratory and has directed national research programmes in field robotics.', courses: 4, students: 1120, rating: 4.9 },
    marcus:   { name: 'Prof. Marcus Webb',   role: 'Lecturer, Electrical Engineering',             dept: 'School of Computing & Engineering', img: 'https://randomuser.me/api/portraits/men/36.jpg',   bio: 'MEng, PGCE. Prof. Webb is a circuit design engineer turned educator, with a decade of industry experience in embedded systems and analogue electronics.', courses: 6, students: 1460, rating: 4.6 },
    kim:      { name: 'Dr. Laura Kim',       role: 'Professor of Anatomy',                         dept: 'Faculty of Health Sciences',         img: 'https://randomuser.me/api/portraits/women/12.jpg', bio: 'MD PhD. Dr. Kim is a practising physician and head of anatomy education at Meridian, with over a decade of teaching cadaveric and clinical anatomy.', courses: 5, students: 2140, rating: 4.9 },
    farid:    { name: 'Dr. Hassan Farid',    role: 'Professor of Public Health',                   dept: 'Faculty of Health Sciences',         img: 'https://randomuser.me/api/portraits/men/75.jpg',   bio: 'PhD in Epidemiology. Dr. Farid served in national disease surveillance for twelve years and now leads Meridian\u2019s Global Health research group.', courses: 4, students: 980, rating: 4.7 },
    adams:    { name: 'Prof. Victoria Adams',role: 'Professor of Constitutional Law',              dept: 'Faculty of Law',                     img: 'https://randomuser.me/api/portraits/women/49.jpg', bio: 'LLM, former appellate clerk. Prof. Adams argues before appellate courts in private practice and directs the university\u2019s celebrated moot court programme.', courses: 4, students: 860, rating: 4.8 },
    emily:    { name: 'Prof. Emily Laurent', role: 'Writer-in-Residence',                          dept: 'Faculty of Arts & Humanities',       img: 'https://randomuser.me/api/portraits/women/21.jpg', bio: 'MA, novelist and essayist. Prof. Laurent has published three novels and a collection of essays, and serves as Meridian\u2019s third Writer-in-Residence.', courses: 3, students: 1350, rating: 4.8 },
    isabelle: { name: 'Prof. Isabelle Moreau',role: 'Associate Professor of Visual Design',        dept: 'Faculty of Arts & Humanities',       img: 'https://randomuser.me/api/portraits/women/26.jpg', bio: 'MFA in Visual Communication. Prof. Moreau ran a brand studio in Lyon for ten years before joining Meridian to lead the visual design programme.', courses: 5, students: 1720, rating: 4.7 },
    noah:     { name: 'Dr. Noah Bennett',    role: 'Senior Lecturer in Environmental Science',     dept: 'School of Science & Environment',    img: 'https://randomuser.me/api/portraits/men/60.jpg',   bio: 'PhD in Environmental Science. Dr. Bennett studies watershed ecology and advises regional governments on climate adaptation policy.', courses: 4, students: 1030, rating: 4.8 },
    omar:     { name: 'Dr. Omar Haddad',     role: 'Professor of Cybersecurity',                   dept: 'School of Computing & Engineering', img: 'https://randomuser.me/api/portraits/men/18.jpg',   bio: 'PhD in Information Security, CISSP. Dr. Haddad built enterprise security operations for a national bank before founding Meridian\u2019s cyber range.', courses: 3, students: 1490, rating: 4.9 },
    grace:    { name: 'Prof. Grace Mensah',  role: 'Associate Professor of Management',            dept: 'Meridian Business School',           img: 'https://randomuser.me/api/portraits/women/32.jpg', bio: 'PhD in Organisational Psychology. Prof. Mensah consults on leadership development for public institutions and directs the Emerging Leaders programme.', courses: 5, students: 1610, rating: 4.6 },
  };

  const img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

  const COURSES = [
    {
      id: 'CS-201', title: 'Data Structures & Algorithms', dept: 'Computer Science',
      level: 'Intermediate', mode: 'On-Campus', fee: 1450, duration: '16 weeks', credits: 4,
      schedule: 'Mon, Wed & Fri · 09:00 – 11:00 AM', rating: 4.9, reviews: 312, students: 480,
      status: 'Open', added: '2026-08-12', instructor: 'james', image: img('photo-1515879218367-8466d910aaa4'),
      short: 'Master the core data structures and algorithmic techniques behind efficient, production-quality software.',
      description: [
        'Data Structures & Algorithms is the cornerstone of a strong computer science education. This course takes you from the fundamentals of complexity analysis to advanced algorithmic paradigms, blending rigorous theory with hands-on implementation in weekly lab sessions.',
        'Working in small cohorts with direct faculty supervision, you will implement every structure from scratch, benchmark real workloads, and finish with a portfolio-grade project that demonstrates genuine engineering depth.'
      ],
      objectives: [
        'Analyse the time and space complexity of algorithms using Big-O notation',
        'Design and implement linear and non-linear data structures from first principles',
        'Select appropriate structures and algorithms for realistic engineering problems',
        'Communicate algorithmic trade-offs clearly in code reviews and technical interviews'
      ],
      learn: [
        'Arrays, linked lists, stacks and queues',
        'Hash tables, sets and collision resolution strategies',
        'Binary search trees, heaps and balanced trees',
        'Graph algorithms: BFS, DFS, Dijkstra and A*',
        'Dynamic programming and greedy paradigms',
        'Amortised analysis and benchmarking',
        'Clean, testable implementation practices',
        'A portfolio-grade capstone project'
      ],
      requirements: [
        'Prior programming experience in Java, Python or C++',
        'Secondary-school mathematics (algebra and basic logic)',
        'A laptop with at least 8 GB of RAM',
        '8 – 10 hours of study time per week'
      ],
      modules: ['Foundations & Complexity Analysis', 'Linear Structures: Lists, Stacks & Queues', 'Non-Linear Structures: Trees & Graphs', 'Advanced Paradigms: Dynamic Programming & Greedy']
    },
    {
      id: 'CS-340', title: 'Full-Stack Web Development', dept: 'Computer Science',
      level: 'Advanced', mode: 'Hybrid', fee: 1850, duration: '24 weeks', credits: 5,
      schedule: 'Tue & Thu · 06:00 – 09:00 PM + online labs', rating: 4.8, reviews: 540, students: 720,
      status: 'Filling Fast', added: '2026-08-20', instructor: 'sofia', image: img('photo-1498050108023-c5249f4df085'),
      short: 'Design, build, secure and ship production-grade web applications across the full modern stack.',
      description: [
        'From your first semantic HTML page to a deployed, production-ready application, this flagship programme covers the complete modern web stack. You will work in agile teams through four themed sprints, mirroring the delivery practices of leading software companies.',
        'The hybrid format combines twice-weekly campus studios with self-paced online labs, code reviews and one-to-one mentorship — culminating in a public capstone launch reviewed by industry engineers.'
      ],
      objectives: [
        'Architect responsive, accessible front-end interfaces to professional standards',
        'Design and build RESTful APIs and persistent data layers',
        'Apply authentication, security hardening and testing practices',
        'Deploy and operate applications using modern CI/CD pipelines'
      ],
      learn: [
        'Semantic HTML5, modern CSS3 and responsive layout systems',
        'JavaScript (ES2023+) and TypeScript fundamentals',
        'Component-based UI construction with Bootstrap 5',
        'Node.js, Express and REST API design',
        'Relational databases and SQL data modelling',
        'Authentication, sessions and security essentials',
        'Git workflows, code review and agile teamwork',
        'Cloud deployment and CI/CD pipelines'
      ],
      requirements: [
        'Confident command of at least one programming language',
        'Version control basics (Git)',
        'A laptop capable of running VS Code and Docker',
        '15 – 18 hours of study time per week'
      ],
      modules: ['Modern Front-End Foundations', 'APIs & Back-End Development', 'Databases & Data Modelling', 'Testing, Security & Deployment']
    },
    {
      id: 'CS-315', title: 'Cybersecurity & Network Defense', dept: 'Computer Science',
      level: 'Advanced', mode: 'Online', fee: 1950, duration: '20 weeks', credits: 5,
      schedule: 'Self-paced · live cyber-range labs Sat 10:00 AM', rating: 4.9, reviews: 389, students: 640,
      status: 'Limited Seats', added: '2026-09-05', instructor: 'omar', image: img('photo-1550751827-4bd374c3f58b'),
      short: 'Attack and defend — hands-on security operations in a live-fire cyber range.',
      description: [
        'Defensive security demands offensive understanding. This advanced course takes you deep into cryptography, network attack techniques and secure systems engineering, taught through continuous practical work in the university\u2019s isolated cyber range.',
        'Blue-team and red-team streams run in parallel and meet in a weekly capture-the-flag arena, so you learn both sides of the contest — with logged telemetry, incident reports and a final enterprise defense exercise.'
      ],
      objectives: [
        'Apply cryptographic primitives and protocols correctly',
        'Detect, analyse and respond to network intrusions',
        'Audit and harden applications and infrastructure',
        'Execute structured red-team engagements with ethics and rigour'
      ],
      learn: [
        'Applied cryptography and PKI',
        'TCP/IP attack surface and packet analysis',
        'Firewalls, IDS/IPS and SIEM operations',
        'Web application vulnerabilities (OWASP Top 10)',
        'Malware analysis fundamentals',
        'Digital forensics and incident response',
        'Secure architecture and zero trust',
        'Enterprise defense capstone in the cyber range'
      ],
      requirements: [
        'Networking fundamentals (TCP/IP, DNS, HTTP)',
        'Scripting ability in Python or Bash',
        'A machine able to run virtual machines (16 GB RAM recommended)',
        '12 – 15 hours per week'
      ],
      modules: ['Security Foundations & Cryptography', 'Network Attacks & Defense', 'Web & Application Security', 'Blue/Red Team Capstone in the Cyber Range']
    },
    {
      id: 'BUS-110', title: 'Financial Accounting Principles', dept: 'Business & Management',
      level: 'Beginner', mode: 'On-Campus', fee: 980, duration: '14 weeks', credits: 3,
      schedule: 'Mon & Wed · 10:00 AM – 12:30 PM', rating: 4.7, reviews: 188, students: 350,
      status: 'Open', added: '2026-07-15', instructor: 'daniel', image: img('photo-1554224155-6726b3ff858f'),
      short: 'Build a rock-solid foundation in the language of business — from the accounting cycle to financial statements.',
      description: [
        'Accounting is the language of business. This foundation course guides you through the complete accounting cycle, from analysing transactions and preparing trial balances to producing and interpreting the three core financial statements.',
        'With weekly practice sets drawn from real company filings, you will develop the precision and judgement that employers expect from graduates entering finance, management and entrepreneurship.'
      ],
      objectives: [
        'Record transactions using double-entry principles with accuracy',
        'Prepare adjusting entries and complete the accounting cycle',
        'Construct income statements, balance sheets and cash-flow statements',
        'Interpret key ratios to assess business performance'
      ],
      learn: [
        'The accounting equation and double-entry system',
        'Journals, ledgers and trial balances',
        'Accruals, deferrals and depreciation',
        'Merchandising operations and inventory',
        'Internal controls and ethics',
        'Financial statement analysis and ratios',
        'A complete practice company simulation',
        'Spreadsheet skills for accountants'
      ],
      requirements: [
        'No prior accounting knowledge required',
        'Basic mathematics (percentages and arithmetic)',
        'A simple calculator or spreadsheet software',
        '4 – 6 hours of practice time per week'
      ],
      modules: ['The Accounting Cycle', 'Recording & Adjusting Entries', 'Preparing Financial Statements', 'Analysis & Interpretation of Accounts']
    },
    {
      id: 'BUS-275', title: 'Strategic Digital Marketing', dept: 'Business & Management',
      level: 'Intermediate', mode: 'Online', fee: 1150, duration: '12 weeks', credits: 3,
      schedule: 'Self-paced · live seminar Thu 07:00 PM', rating: 4.8, reviews: 264, students: 610,
      status: 'Starting Soon', added: '2026-09-01', instructor: 'amara', image: img('photo-1460925895917-afdab827c52f'),
      short: 'Plan, launch and optimise integrated digital campaigns that measurably grow brands and revenue.',
      description: [
        'Modern marketing is measurable marketing. This course teaches you to plan full-funnel campaigns across search, social and content channels — and then to read the data and iterate like a growth team.',
        'You will run a live campaign simulation with a fixed budget, competing teams and weekly analytics reviews, finishing with a strategy portfolio you can show employers.'
      ],
      objectives: [
        'Design integrated, full-funnel digital marketing strategies',
        'Apply SEO, SEM and paid-social tactics within a fixed budget',
        'Set up analytics, attribution and conversion tracking',
        'Present campaign performance with clear, data-backed narratives'
      ],
      learn: [
        'Digital strategy and audience research',
        'Search engine optimisation and paid search',
        'Content marketing and editorial planning',
        'Social media and influencer strategy',
        'Email, automation and CRM basics',
        'Analytics, dashboards and A/B testing',
        'Budgeting and campaign ROI modelling',
        'A complete campaign portfolio'
      ],
      requirements: [
        'Basic understanding of business concepts',
        'A personal social media account for practical exercises',
        'Spreadsheet familiarity',
        '5 – 7 hours per week including live seminars'
      ],
      modules: ['The Digital Marketing Landscape', 'Content, SEO & SEM', 'Social, Paid Media & Email Strategy', 'Analytics, CRO & Campaign Capstone']
    },
    {
      id: 'BUS-190', title: 'Organizational Behaviour & Leadership', dept: 'Business & Management',
      level: 'Beginner', mode: 'On-Campus', fee: 890, duration: '12 weeks', credits: 3,
      schedule: 'Thu · 01:00 – 04:00 PM', rating: 4.6, reviews: 143, students: 395,
      status: 'Open', added: '2026-07-30', instructor: 'grace', image: img('photo-1552664730-d307ca884978'),
      short: 'Understand people at work — motivation, teams, power and the practice of leadership.',
      description: [
        'Organisations succeed or fail through people. This course introduces the psychology and sociology of workplaces — how individuals are motivated, how teams form and fracture, and how leadership actually works in practice.',
        'Highly interactive seminars use live simulations, role-plays and 360° feedback so that you don\u2019t just read about leadership — you practise it, reflect on it, and improve.'
      ],
      objectives: [
        'Explain individual behaviour using motivation and personality theory',
        'Diagnose team dynamics and intervene effectively',
        'Compare leadership approaches and their situational fit',
        'Lead a change initiative through a live simulation'
      ],
      learn: [
        'Personality, perception and decision-making',
        'Motivation theory in practice',
        'Team formation, norms and conflict',
        'Power, politics and influence tactics',
        'Leadership styles and situational leadership',
        'Organisational culture and change management',
        'Communication and negotiation skills',
        'A consulting-style capstone with a real brief'
      ],
      requirements: [
        'No prior coursework required',
        'Openness to feedback and self-assessment',
        '4 – 6 hours per week',
        'Willing participation in group simulations'
      ],
      modules: ['Individuals: Personality & Motivation', 'Teams: Dynamics & Communication', 'Leadership Theories in Practice', 'Change Management & Consulting Capstone']
    },
    {
      id: 'ENG-220', title: 'Introduction to Robotics Engineering', dept: 'Engineering',
      level: 'Intermediate', mode: 'On-Campus', fee: 2100, duration: '18 weeks', credits: 5,
      schedule: 'Tue & Thu · 01:00 – 04:00 PM + lab access', rating: 4.9, reviews: 142, students: 210,
      status: 'Limited Seats', added: '2026-06-28', instructor: 'elena', image: img('photo-1485827404703-89b55fcc595e'),
      short: 'Sense, think and act — build autonomous robots from actuators and sensors to full navigation stacks.',
      description: [
        'Robotics sits at the intersection of mechanics, electronics and computation. In this hands-on studio course you will design, build and program autonomous mobile robots, progressing from simple sensor-driven behaviours to full navigation and manipulation tasks.',
        'Teams receive dedicated lab access and a hardware kit for the semester, culminating in a public robotics demonstration and a competition arena finale.'
      ],
      objectives: [
        'Model robot kinematics and dynamics for mobile platforms',
        'Integrate sensors, actuators and embedded controllers',
        'Program autonomous navigation using industry frameworks',
        'Validate and demonstrate robotic systems against specifications'
      ],
      learn: [
        'Robot kinematics, dynamics and control theory',
        'Sensors: LIDAR, IMU, encoders and vision',
        'Embedded programming and real-time control',
        'ROS-based software architecture',
        'SLAM and autonomous navigation',
        'Manipulators and gripper fundamentals',
        'Safety, testing and reliability engineering',
        'A competition-ready team robot'
      ],
      requirements: [
        'Programming experience (Python or C++)',
        'Physics at secondary-school level or above',
        'Basic circuit knowledge',
        'Enthusiasm for hands-on lab work'
      ],
      modules: ['Robot Kinematics & Dynamics', 'Sensors, Actuators & Embedded Control', 'ROS & Autonomous Navigation', 'Robot Vision & Final Build']
    },
    {
      id: 'ENG-150', title: 'Electrical Circuit Analysis', dept: 'Engineering',
      level: 'Beginner', mode: 'On-Campus', fee: 1650, duration: '16 weeks', credits: 4,
      schedule: 'Mon & Fri · 08:00 – 10:30 AM + labs', rating: 4.6, reviews: 98, students: 175,
      status: 'Open', added: '2026-07-08', instructor: 'marcus', image: img('photo-1518770660439-4636190af475'),
      short: 'From Ohm\u2019s law to operational amplifiers — the essential circuit theory every engineer needs.',
      description: [
        'Circuit analysis is the shared foundation of electrical, computer and mechatronics engineering. This course builds your intuition and mathematical toolkit for DC and AC circuits, from basic network theorems to semiconductor devices and op-amp applications.',
        'Every theory block is paired with a laboratory session where you measure, debug and report on real circuits, developing the practical discipline of a working engineer.'
      ],
      objectives: [
        'Apply network theorems to simplify and solve circuits',
        'Analyse steady-state and transient circuit behaviour',
        'Operate laboratory instruments with correct technique',
        'Design and troubleshoot basic amplifier circuits'
      ],
      learn: [
        'Ohm\u2019s law, Kirchhoff\u2019s laws and nodal analysis',
        'Thevenin and Norton equivalent circuits',
        'Capacitors, inductors and first-order transients',
        'AC steady-state analysis with phasors',
        'Diodes, BJTs and MOSFET fundamentals',
        'Operational amplifier circuits',
        'Resonance, filters and power concepts',
        'Formal lab reporting and measurement practice'
      ],
      requirements: [
        'Mathematics at secondary-school level (algebra, trigonometry)',
        'No prior electronics experience required',
        'Scientific calculator',
        '6 – 8 hours per week including labs'
      ],
      modules: ['DC Circuit Fundamentals', 'AC Circuits & Phasors', 'Semiconductors & Op-Amps', 'Signal Analysis & Applications']
    },
    {
      id: 'MED-105', title: 'Human Anatomy & Physiology', dept: 'Health & Medicine',
      level: 'Beginner', mode: 'On-Campus', fee: 1900, duration: '20 weeks', credits: 5,
      schedule: 'Mon – Thu · 09:00 – 11:00 AM + dissection lab', rating: 4.9, reviews: 420, students: 520,
      status: 'Filling Fast', added: '2026-08-05', instructor: 'kim', image: img('photo-1505751172876-fa1923c5c528'),
      short: 'A rigorous, lab-based journey through the structure and function of the human body.',
      description: [
        'This cornerstone course for health-science students provides a systematic, clinically-oriented survey of human anatomy and physiology — from cellular organisation to the integrated function of organ systems.',
        'Lectures are tightly integrated with dissection and model-based laboratories, imaging sessions and clinical case studies, building the vocabulary and understanding that nursing, medicine and allied-health programmes demand.'
      ],
      objectives: [
        'Describe the structural organisation of the human body across all systems',
        'Explain the physiological mechanisms maintaining homeostasis',
        'Interpret basic clinical signs through anatomical knowledge',
        'Demonstrate professional laboratory practice and dissection technique'
      ],
      learn: [
        'Cell and tissue organisation',
        'Skeletal and muscular systems',
        'Cardiovascular and respiratory physiology',
        'Nervous system and special senses',
        'Endocrine regulation and reproduction',
        'Digestive, urinary and immune systems',
        'Clinical correlations and case studies',
        'Cadaveric and imaging-based lab practice'
      ],
      requirements: [
        'Biology at secondary-school level',
        'Strong stomach for laboratory work',
        '6 – 9 hours per week including labs',
        'White lab coat (provided at cost)'
      ],
      modules: ['Cellular & Tissue Organisation', 'Skeletal & Muscular Systems', 'Cardiovascular & Respiratory Systems', 'Nervous, Endocrine & Integrative Systems']
    },
    {
      id: 'MED-320', title: 'Public Health & Epidemiology', dept: 'Health & Medicine',
      level: 'Advanced', mode: 'Online', fee: 1350, duration: '12 weeks', credits: 4,
      schedule: 'Self-paced · live case review Wed 05:00 PM', rating: 4.7, reviews: 176, students: 290,
      status: 'Open', added: '2026-07-22', instructor: 'farid', image: img('photo-1576091160399-112ba8d25d1f'),
      short: 'Study disease at the population scale — epidemiological methods, biostatistics and health policy.',
      description: [
        'Epidemiology asks how disease distributes across populations and why. This advanced online course develops your command of study design, measures of association and biostatistical inference, applied to real outbreak data and published studies.',
        'Weekly live case reviews with faculty and guest epidemiologists connect methods to practice, and the capstone has you lead a full outbreak investigation from case definition to policy recommendation.'
      ],
      objectives: [
        'Design and critically appraise epidemiological studies',
        'Compute and interpret measures of disease frequency and association',
        'Apply biostatistical methods to public health data',
        'Formulate evidence-based public health policy recommendations'
      ],
      learn: [
        'Descriptive and analytic epidemiology',
        'Cohort, case-control and cross-sectional designs',
        'Bias, confounding and effect modification',
        'Biostatistics: inference and regression basics',
        'Screening programmes and evaluation',
        'Outbreak investigation methodology',
        'Health systems and policy analysis',
        'A complete outbreak investigation capstone'
      ],
      requirements: [
        'Prior coursework in health or life sciences',
        'Basic statistics (means, proportions, confidence intervals)',
        '8 – 10 hours per week',
        'Reliable internet for live sessions'
      ],
      modules: ['Foundations of Public Health', 'Epidemiological Methods & Study Design', 'Biostatistics for Health Sciences', 'Outbreak Investigation & Policy Capstone']
    },
    {
      id: 'LAW-210', title: 'Constitutional Law & Civil Rights', dept: 'Law',
      level: 'Intermediate', mode: 'On-Campus', fee: 1720, duration: '16 weeks', credits: 4,
      schedule: 'Wed & Fri · 02:00 – 05:00 PM', rating: 4.8, reviews: 134, students: 160,
      status: 'Limited Seats', added: '2026-06-30', instructor: 'adams', image: img('photo-1589829545856-d10d557cf95f'),
      short: 'Interrogate the constitution — powers, rights and the landmark cases that define them.',
      description: [
        'This course examines the architecture of constitutional government: the separation of powers, federalism, and the protection of civil rights and liberties through judicial review.',
        'Teaching combines Socratic seminars on landmark judgments with a moot court programme in which every student argues a constitutional case before a bench of faculty and practising judges.'
      ],
      objectives: [
        'Analyse constitutional provisions using major theories of interpretation',
        'Trace the development of rights jurisprudence through landmark cases',
        'Construct persuasive written and oral legal arguments',
        'Participate effectively in appellate-style moot court proceedings'
      ],
      learn: [
        'Constitutional interpretation methods',
        'Separation of powers and checks and balances',
        'Federalism and the division of authority',
        'Due process and equal protection',
        'Freedom of expression and association',
        'Landmark rights cases and doctrines',
        'Legal research and citation practice',
        'Full moot court experience'
      ],
      requirements: [
        'Introduction to Legal Studies or equivalent',
        'Strong reading and writing skills',
        '10 – 12 hours per week',
        'Willingness to argue positions in class'
      ],
      modules: ['Constitutional Foundations & Interpretation', 'Separation of Powers & Federalism', 'Rights, Liberties & Equal Protection', 'Landmark Cases & Moot Court']
    },
    {
      id: 'ART-140', title: 'Creative Writing & Literature', dept: 'Arts & Humanities',
      level: 'Beginner', mode: 'Hybrid', fee: 760, duration: '10 weeks', credits: 3,
      schedule: 'Tue · 05:00 – 08:00 PM + online workshops', rating: 4.8, reviews: 221, students: 430,
      status: 'Open', added: '2026-08-25', instructor: 'emily', image: img('photo-1455390582262-044cdead277a'),
      short: 'Find your voice — craft fiction, poetry and creative non-fiction in a supportive workshop.',
      description: [
        'Every writer begins with reading and practice. This course pairs close reading of exemplary fiction, poetry and essays with a rigorous weekly workshop in which your own writing is read, discussed and refined.',
        'The hybrid format combines an evening studio on campus with online peer review, and finishes with a printed class anthology and a public reading night.'
      ],
      objectives: [
        'Apply craft techniques in fiction, poetry and non-fiction',
        'Give and incorporate constructive workshop criticism',
        'Develop a distinctive and authentic written voice',
        'Prepare work for submission and publication'
      ],
      learn: [
        'Voice, style and point of view',
        'Story structure, scene and dialogue',
        'Imagery, metaphor and poetic form',
        'Creative non-fiction and personal essay',
        'Editing and revision practice',
        'Workshop critique etiquette',
        'Publishing routes and submissions',
        'Inclusion in the class anthology'
      ],
      requirements: [
        'No prior creative writing experience needed',
        'Willingness to share work in workshop',
        'A dedicated writing notebook',
        '4 – 6 hours of writing time per week'
      ],
      modules: ['The Writer\u2019s Craft: Voice & Style', 'Fiction: Story, Structure & Scene', 'Poetry & Creative Non-Fiction', 'Workshopping, Editing & Publication']
    },
    {
      id: 'ART-160', title: 'Graphic Design & Visual Communication', dept: 'Arts & Humanities',
      level: 'Beginner', mode: 'Online', fee: 1240, duration: '12 weeks', credits: 3,
      schedule: 'Self-paced · live critique Fri 03:00 PM', rating: 4.7, reviews: 198, students: 470,
      status: 'Open', added: '2026-08-14', instructor: 'isabelle', image: img('photo-1561070791-2526d30994b5'),
      short: 'Think visually — master typography, colour, layout and brand identity as a working designer.',
      description: [
        'Graphic design is problem-solving made visible. This studio-style online course trains your eye and hand through weekly briefs that mirror real client work — logos, posters, packaging and full brand systems.',
        'Every submission receives structured critique in live sessions, and the programme culminates in a polished professional portfolio reviewed by working designers.'
      ],
      objectives: [
        'Apply fundamental design principles with intention',
        'Build brand identity systems from research to delivery',
        'Present and defend design decisions professionally',
        'Assemble a job-ready portfolio of client-style work'
      ],
      learn: [
        'Design principles: hierarchy, contrast, rhythm',
        'Typography and type pairing',
        'Colour theory and palette construction',
        'Layout, grid systems and composition',
        'Logo and brand identity design',
        'Design software workflows',
        'Client briefs and design presentations',
        'A professional portfolio capstone'
      ],
      requirements: [
        'A computer capable of running design software',
        'No drawing ability required — everything is taught',
        '5 – 7 hours per week',
        'Willingness to receive critique'
      ],
      modules: ['Design Principles & Typography', 'Colour, Layout & Composition', 'Brand Identity & Logo Design', 'Digital Portfolio & Client Capstone']
    },
    {
      id: 'SCI-180', title: 'Environmental Science & Sustainability', dept: 'Science & Environment',
      level: 'Beginner', mode: 'Hybrid', fee: 1080, duration: '14 weeks', credits: 4,
      schedule: 'Wed · 03:00 – 05:30 PM + field labs', rating: 4.8, reviews: 156, students: 285,
      status: 'Open', added: '2026-07-18', instructor: 'noah', image: img('photo-1441974231531-c6227db76b6e'),
      short: 'Understand Earth\u2019s systems and the science behind climate, biodiversity and sustainability.',
      description: [
        'From atmospheric circulation to ecosystem dynamics, this course gives you a rigorous, field-based grounding in the science of the environment — and the tools to evaluate sustainability claims with evidence.',
        'Hybrid delivery combines campus seminars, virtual labs and four full-day field trips to rivers, forests and renewable-energy sites, with a capstone sustainability audit of a real organisation.'
      ],
      objectives: [
        'Explain the physical and biological systems regulating Earth',
        'Interpret climate data and model projections critically',
        'Assess biodiversity and ecosystem health in the field',
        'Design and present a sustainability audit with recommendations'
      ],
      learn: [
        'Earth systems: atmosphere, hydrosphere, lithosphere',
        'Climate science and the carbon cycle',
        'Energy systems and renewables',
        'Ecosystems, biodiversity and conservation',
        'Water and soil resources',
        'Environmental policy and economics',
        'Field measurement and sampling methods',
        'A real-world sustainability audit'
      ],
      requirements: [
        'Science at secondary-school level',
        'Comfort with outdoor fieldwork in any weather',
        '6 – 8 hours per week',
        'Personal transportation for two field days (shuttle available)'
      ],
      modules: ['Earth Systems & Cycles', 'Climate Science & Energy', 'Biodiversity & Conservation', 'Sustainable Solutions & Field Capstone']
    },
  ];

  const REVIEW_POOL = [
    { name: 'Sarah Mitchell', img: 'https://randomuser.me/api/portraits/women/24.jpg', rating: 5, date: '2 weeks ago',  text: 'Outstanding course. The lectures were beautifully structured and the weekly labs turned theory into instinct. Easily the best module I have taken at Meridian.' },
    { name: 'Ahmed Raza',     img: 'https://randomuser.me/api/portraits/men/41.jpg',   rating: 5, date: '1 month ago',  text: 'The professor explains difficult concepts with rare clarity and is genuinely invested in students\u2019 progress. Office hours alone are worth the fee.' },
    { name: 'Emma Collins',   img: 'https://randomuser.me/api/portraits/women/33.jpg', rating: 4, date: '3 weeks ago',  text: 'Excellent content and very well organised. The workload is demanding, but the support from faculty and teaching assistants makes it completely manageable.' },
    { name: 'David Park',     img: 'https://randomuser.me/api/portraits/men/68.jpg',   rating: 5, date: '2 months ago', text: 'The final project pushed me further than I expected and became the centrepiece of my portfolio. Highly recommended for serious students.' },
    { name: 'Layla Hassan',   img: 'https://randomuser.me/api/portraits/women/90.jpg', rating: 4, date: '1 month ago',  text: 'Great balance of theory and practice. Questions were answered quickly and the course platform made everything easy to follow.' },
    { name: 'Tom Becker',     img: 'https://randomuser.me/api/portraits/men/85.jpg',   rating: 5, date: '3 weeks ago',  text: 'Up-to-date material, fair assessments and an instructor who clearly loves teaching. I enrolled for one course and ended up taking two more.' },
  ];

  const FEE_RANGES = {
    'all': [0, Infinity],
    '0-999': [0, 999],
    '1000-1499': [1000, 1499],
    '1500-1999': [1500, 1999],
    '2000-999999': [2000, Infinity],
  };

  const MODE_ICON = {
    'Online': 'bi-camera-video-fill',
    'On-Campus': 'bi-building',
    'Hybrid': 'bi-arrow-left-right',
  };

  const LESSON_ICON = {
    video: 'bi-play-btn',
    task: 'bi-pencil-square',
    quiz: 'bi-clipboard-check',
  };

  const PER_PAGE = 6;

  /* ------------------------------------------------------------------
     STATE
  ------------------------------------------------------------------ */
  let filters = { search: '', dept: 'all', level: 'all', mode: 'all', fee: 'all', sort: 'newest', page: 1 };
  let currentCourse = null;
  let enrollTargetId = null;

  let tuition = {
    studentId: 'UNI-2026-0847',
    courseId: 'CS-201',
    paid: 700,
    history: [
      { date: '2026-06-15', ref: 'TRX-88231-MU', method: 'Bank Transfer', amount: 400, status: 'Completed' },
      { date: '2026-08-01', ref: 'TRX-90412-MU', method: 'Bank Transfer', amount: 300, status: 'Completed' },
    ],
  };

  /* ------------------------------------------------------------------
     HELPERS
  ------------------------------------------------------------------ */
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => '$' + Number(n).toLocaleString('en-US');
  const byId = (id) => COURSES.find((c) => c.id === id);
  const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');

  function starsHTML(rating, cls = '') {
    const frac = rating - Math.floor(rating);
    let filled = Math.floor(rating), half = 0;
    if (frac >= 0.75) filled++;
    else if (frac >= 0.25) half = 1;
    const empty = 5 - filled - half;
    let out = `<span class="rating-stars ${cls}" aria-label="${rating} out of 5 stars">`;
    for (let i = 0; i < filled; i++) out += '<i class="bi bi-star-fill"></i>';
    if (half) out += '<i class="bi bi-star-half"></i>';
    for (let i = 0; i < empty; i++) out += '<i class="bi bi-star"></i>';
    return out + '</span>';
  }

  function ratingDist(rating) {
    const p5 = Math.min(90, Math.round(58 + (rating - 4) * 30));
    let rest = 100 - p5;
    const p4 = Math.round(rest * 0.7); rest -= p4;
    const p3 = Math.round(rest * 0.75); rest -= p3;
    const p2 = Math.round(rest * 0.8); rest -= p2;
    return [p5, p4, p3, p2, Math.max(0, rest)];
  }

  function buildCurriculum(course) {
    const mods = course.modules.map((t, i) => ({
      title: `Module ${i + 1}: ${t}`,
      lessons: [
        { t: `Introduction & Key Concepts of ${t}`, d: '2h 30m', type: 'video' },
        { t: `${t} — Core Theory & Worked Examples`, d: '3h 00m', type: 'video' },
        { t: `Practical Lab / Problem Set ${i + 1}`, d: '2h 45m', type: 'task' },
        { t: `Graded Assessment: ${t}`, d: '1h 30m', type: 'quiz' },
      ],
    }));
    mods.push({
      title: 'Final Project',
      lessons: [
        { t: 'Project Briefing, Teams & Requirements', d: '1h 30m', type: 'video' },
        { t: 'Supervised Development Sprints', d: '6h 00m', type: 'task' },
        { t: 'Final Presentation & Viva Voce', d: '2h 00m', type: 'quiz' },
        { t: 'Report Submission & Peer Review', d: '1h 00m', type: 'task' },
      ],
    });
    return mods;
  }

  function reviewsFor(course) {
    const i = COURSES.indexOf(course);
    return [0, 1, 2].map((k) => REVIEW_POOL[(i + k) % REVIEW_POOL.length]);
  }

  function showToast(title, msg, icon = 'bi-check-circle-fill') {
    const toastEl = $('appToast');
    $('appToastTitle').textContent = title;
    $('appToastMsg').textContent = msg;
    $('appToastIcon').className = `bi ${icon} me-2`;
    bootstrap.Toast.getOrCreateInstance(toastEl).show();
  }

  /* ------------------------------------------------------------------
     COURSE LISTING — filter, sort, paginate, render
  ------------------------------------------------------------------ */
  function getFiltered() {
    const list = COURSES.filter((c) => {
      const s = filters.search.trim().toLowerCase();
      if (s) {
        const inst = INSTRUCTORS[c.instructor].name.toLowerCase();
        const hay = `${c.title} ${c.dept} ${c.id} ${inst} ${c.level} ${c.mode} ${c.status}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      if (filters.dept !== 'all' && c.dept !== filters.dept) return false;
      if (filters.level !== 'all' && c.level !== filters.level) return false;
      if (filters.mode !== 'all' && c.mode !== filters.mode) return false;
      const [min, max] = FEE_RANGES[filters.fee];
      if (c.fee < min || c.fee > max) return false;
      return true;
    });

    switch (filters.sort) {
      case 'fee-asc': list.sort((a, b) => a.fee - b.fee); break;
      case 'fee-desc': list.sort((a, b) => b.fee - a.fee); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews); break;
      case 'popular': list.sort((a, b) => b.students - a.students); break;
      default: list.sort((a, b) => new Date(b.added) - new Date(a.added));
    }
    return list;
  }

  function courseCard(c, i) {
    const inst = INSTRUCTORS[c.instructor];
    return `
    <div class="col-12 col-sm-6 col-lg-4" style="--i:${i}">
      <article class="course-card">
        <div class="card-img-wrap">
          <img src="${c.image}" alt="${c.title}" loading="lazy">
          <span class="badge-level">${c.level}</span>
          <span class="badge-status status-${slug(c.status)}">${c.status}</span>
          <span class="fee-tag"><i class="bi bi-cash-stack"></i>${fmt(c.fee)}</span>
          <span class="badge-mode"><i class="bi ${MODE_ICON[c.mode]}"></i>${c.mode}</span>
        </div>
        <div class="card-body">
          <span class="dept-label">${c.dept} · ${c.id}</span>
          <h3 class="course-title font-serif">${c.title}</h3>
          <p class="course-short">${c.short}</p>
          <div class="instructor-row">
            <img src="${inst.img}" alt="${inst.name}">
            <div><strong>${inst.name}</strong><span>Instructor · ${inst.role}</span></div>
          </div>
          <ul class="course-meta">
            <li title="${c.duration}"><i class="bi bi-clock-history"></i>${c.duration}</li>
            <li title="Enrolled students"><i class="bi bi-people"></i>${c.students.toLocaleString()} students</li>
            <li class="full" title="${c.schedule}"><i class="bi bi-calendar3-week"></i>${c.schedule}</li>
            <li class="full">${starsHTML(c.rating)} <b>${c.rating}</b> <span class="reviews-count">(${c.reviews} reviews)</span></li>
          </ul>
        </div>
        <div class="card-footer-btns">
          <button class="btn btn-outline-navy" data-view="${c.id}">
            <i class="bi bi-info-circle me-1"></i>View Details
          </button>
          <button class="btn btn-gold" data-enroll="${c.id}">
            <i class="bi bi-pencil-square me-1"></i>Enroll Now
          </button>
        </div>
      </article>
    </div>`;
  }

  function renderGrid() {
    const list = getFiltered();
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / PER_PAGE));
    if (filters.page > pages) filters.page = pages;
    const start = (filters.page - 1) * PER_PAGE;
    const pageItems = list.slice(start, start + PER_PAGE);

    $('coursesGrid').innerHTML = pageItems.map((c, i) => courseCard(c, i)).join('');
    $('emptyState').classList.toggle('d-none', total > 0);
    $('paginationWrap').classList.toggle('d-none', total <= PER_PAGE);

    $('resultsCount').innerHTML = total === 0
      ? 'No courses match your current filters'
      : `Showing <strong>${pageItems.length}</strong> of <strong>${total}</strong> courses`;

    renderPagination(pages);
  }

  function renderPagination(pages) {
    const ul = $('pagination');
    if (pages <= 1) { ul.innerHTML = ''; return; }
    let html = `<li class="page-item ${filters.page === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" data-page="prev" aria-label="Previous"><i class="bi bi-chevron-left"></i></a></li>`;
    for (let p = 1; p <= pages; p++) {
      html += `<li class="page-item ${p === filters.page ? 'active' : ''}">
        <a class="page-link" href="#" data-page="${p}">${p}</a></li>`;
    }
    html += `<li class="page-item ${filters.page === pages ? 'disabled' : ''}">
      <a class="page-link" href="#" data-page="next" aria-label="Next"><i class="bi bi-chevron-right"></i></a></li>`;
    ul.innerHTML = html;
  }

  /* ------------------------------------------------------------------
     COURSE DETAILS
  ------------------------------------------------------------------ */
  function showDetails(id) {
    const c = byId(id);
    if (!c) return;
    currentCourse = c;
    const inst = INSTRUCTORS[c.instructor];

    $('dBreadcrumbTitle').textContent = c.title;
    $('dTitle').textContent = c.title;
    $('dChips').innerHTML = `
      <span class="chip"><i class="bi bi-star-fill"></i>${c.rating} · ${c.reviews} reviews</span>
      <span class="chip"><i class="bi bi-people-fill"></i>${c.students.toLocaleString()} students</span>
      <span class="chip"><i class="bi bi-bar-chart-steps"></i>${c.level}</span>
      <span class="chip"><i class="bi ${MODE_ICON[c.mode]}"></i>${c.mode}</span>
      <span class="chip"><i class="bi bi-clock-history"></i>${c.duration}</span>`;

    $('dImage').src = c.image;
    $('dImage').alt = c.title;
    $('dBadges').innerHTML = `
      <span class="badge-level">${c.level}</span>
      <span class="badge-status status-${slug(c.status)}">${c.status}</span>
      <span class="fee-tag"><i class="bi bi-cash-stack"></i>${fmt(c.fee)}</span>
      <span class="badge-mode"><i class="bi ${MODE_ICON[c.mode]}"></i>${c.mode}</span>`;

    $('dDept').textContent = `${c.dept} · Course Code ${c.id}`;
    $('dDescription').innerHTML = c.description.map((p) => `<p>${p}</p>`).join('');

    $('dObjectives').innerHTML = c.objectives
      .map((o) => `<li><i class="bi bi-check2-circle"></i><span>${o}</span></li>`).join('');

    $('dLearn').innerHTML = c.learn
      .map((l) => `<div class="learn-item"><i class="bi bi-check2"></i><span>${l}</span></div>`).join('');

    $('dRequirements').innerHTML = c.requirements
      .map((r) => `<li><i class="bi bi-arrow-right-circle"></i><span>${r}</span></li>`).join('');

    renderCurriculum(c);
    renderInstructor(inst);
    renderReviews(c);
    renderRelated(c);

    $('sCode').textContent = c.id;
    $('sDept').textContent = c.dept;
    $('sLevel').textContent = c.level;
    $('sMode').textContent = c.mode;
    $('sDuration').textContent = c.duration;
    $('sSchedule').textContent = c.schedule;
    $('sCredits').textContent = `${c.credits} Credit Hours`;
    $('sStudents').textContent = c.students.toLocaleString();
    $('sRating').innerHTML = `${starsHTML(c.rating)} ${c.rating} (${c.reviews})`;
    $('sFee').textContent = fmt(c.fee);

    $('dEnrollBtn').dataset.enroll = c.id;
    $('dEnrollBtn2').dataset.enroll = c.id;

    $('browseSection').classList.add('d-none');
    $('courseDetailsSection').classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function backToListing() {
    $('courseDetailsSection').classList.add('d-none');
    $('browseSection').classList.remove('d-none');
    requestAnimationFrame(() => {
      $('browseSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function renderCurriculum(c) {
    const mods = buildCurriculum(c);
    $('curriculumAccordion').innerHTML = mods.map((m, i) => `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${i === 0 ? '' : 'collapsed'}" type="button"
                  data-bs-toggle="collapse" data-bs-target="#mod-${slug(c.id)}-${i}"
                  aria-expanded="${i === 0}" aria-controls="mod-${slug(c.id)}-${i}">
            <span class="mod-num">${i < 4 ? '0' + (i + 1) : '<i class="bi bi-trophy-fill"></i>'}</span>
            <span class="mod-title">${m.title}</span>
            <span class="mod-meta">${m.lessons.length} lessons</span>
          </button>
        </h2>
        <div id="mod-${slug(c.id)}-${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}"
             data-bs-parent="#curriculumAccordion">
          <div class="accordion-body">
            ${m.lessons.map((l) => `
              <div class="lesson">
                <span><i class="bi ${LESSON_ICON[l.type]}"></i>${l.t}</span>
                <span class="lesson-dur">${l.d}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`).join('');
  }

  function renderInstructor(inst) {
    $('dInstructor').innerHTML = `
      <div class="card-style instructor-card">
        <div class="d-flex flex-wrap align-items-center gap-4">
          <img class="instructor-avatar" src="${inst.img}" alt="${inst.name}">
          <div>
            <span class="dept-label">${inst.role}</span>
            <h4 class="instructor-name font-serif mb-1">${inst.name}</h4>
            <p class="text-muted mb-2 small">${inst.dept}</p>
            <div>${starsHTML(inst.rating)} <strong>${inst.rating}</strong> <span class="text-muted small">Instructor Rating</span></div>
          </div>
        </div>
        <p class="instructor-bio">${inst.bio}</p>
        <div class="row g-3">
          <div class="col-4"><div class="mini-stat"><span class="v">${inst.courses}</span><span class="l">Courses Taught</span></div></div>
          <div class="col-4"><div class="mini-stat"><span class="v">${inst.students.toLocaleString()}</span><span class="l">Students Mentored</span></div></div>
          <div class="col-4"><div class="mini-stat"><span class="v">${inst.rating}</span><span class="l">Average Rating</span></div></div>
        </div>
      </div>`;
  }

  function renderReviews(c) {
    const dist = ratingDist(c.rating);
    const [p5, p4, p3, p2, p1] = dist;
    const bars = [[5, p5], [4, p4], [3, p3], [2, p2], [1, p1]]
      .map(([star, pct]) => `
        <div class="bar-row">
          <span class="star-lbl">${star} <i class="bi bi-star-fill"></i></span>
          <span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span>
          <span class="bar-pct">${pct}%</span>
        </div>`).join('');

    const items = reviewsFor(c).map((r) => `
      <div class="review-item">
        <div class="d-flex align-items-center gap-3">
          <img src="${r.img}" alt="${r.name}">
          <div class="flex-grow-1">
            <p class="r-name mb-0">${r.name} <span class="r-badge ms-1">Verified Student</span></p>
            <span class="r-date">${r.date}</span>
          </div>
          ${starsHTML(r.rating)}
        </div>
        <p class="r-text">${r.text}</p>
      </div>`).join('');

    $('dReviews').innerHTML = `
      <div class="card-style review-summary">
        <div class="row g-4 align-items-center">
          <div class="col-sm-4 text-center">
            <div class="big-rating font-serif">${c.rating}</div>
            ${starsHTML(c.rating, 'lg')}
            <p class="text-muted small mt-2 mb-0">${c.reviews.toLocaleString()} verified student reviews</p>
          </div>
          <div class="col-sm-8">${bars}</div>
        </div>
      </div>
      ${items}`;
  }

  function renderRelated(c) {
    let rel = COURSES.filter((x) => x.dept === c.dept && x.id !== c.id);
    if (rel.length < 3) {
      rel = rel.concat(
        COURSES.filter((x) => x.dept !== c.dept && x.id !== c.id)
          .sort((a, b) => b.rating - a.rating)
      ).slice(0, 3);
    } else {
      rel = rel.slice(0, 3);
    }

    $('dRelated').innerHTML = rel.map((r) => `
      <div class="col-12 col-md-6 col-lg-4">
        <article class="related-card">
          <div class="related-img"><img src="${r.image}" alt="${r.title}" loading="lazy"></div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <span class="dept-label">${r.dept}</span>
            <h4 class="related-title font-serif">${r.title}</h4>
            <div class="small mb-2">${starsHTML(r.rating)} <b>${r.rating}</b> <span class="text-muted">(${r.reviews} reviews)</span></div>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <span class="fee-small">${fmt(r.fee)}</span>
              <button class="btn btn-sm btn-outline-navy" data-view="${r.id}">View Details</button>
            </div>
          </div>
        </article>
      </div>`).join('');
  }

  /* ------------------------------------------------------------------
     ENROLLMENT
  ------------------------------------------------------------------ */
  function openEnroll(id) {
    const c = byId(id);
    if (!c) return;
    enrollTargetId = id;
    $('enrollCourse').value = `${c.title} (${c.id})`;
    $('enrollCourseFee').innerHTML =
      `<i class="bi bi-cash-stack me-1"></i>Course Fee: ${fmt(c.fee)} · ${c.duration} · ${c.credits} credits`;
    bootstrap.Modal.getOrCreateInstance($('enrollModal')).show();
  }

  function handleEnrollSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = $('enrollForm');
    if (!form.checkValidity()) { form.classList.add('was-validated'); return; }

    const submitBtn = $('enrollSubmit');
    submitBtn.disabled = true;
    $('enrollSpinner').classList.remove('d-none');
    $('enrollSubmitIcon').classList.add('d-none');

    setTimeout(() => {
      $('enrollSpinner').classList.add('d-none');
      $('enrollSubmitIcon').classList.remove('d-none');
      submitBtn.disabled = false;

      const c = byId(enrollTargetId);
      const sid = 'UNI-2026-' + Math.floor(1000 + Math.random() * 9000);

      tuition = { studentId: sid, courseId: c.id, paid: 0, history: [] };
      renderTuition();

      $('enrollSid').textContent = sid;
      $('enrollCourseLabel').textContent = `${c.title} (${c.id})`;
      $('enrollFeeLabel').textContent = fmt(c.fee);

      $('enrollFormWrap').classList.add('d-none');
      $('enrollFooter').classList.add('d-none');
      $('enrollSuccess').classList.remove('d-none');
    }, 900);
  }

  /* ------------------------------------------------------------------
     TUITION & PAYMENTS (demo)
  ------------------------------------------------------------------ */
  function renderTuition() {
    const c = byId(tuition.courseId);
    const fee = c.fee;
    const paid = tuition.paid;
    const remaining = Math.max(0, fee - paid);
    const pct = fee > 0 ? Math.round((paid / fee) * 100) : 0;

    $('tStudentId').textContent = tuition.studentId;
    $('tCourseName').textContent = c.title;
    $('tCourseCode').textContent = c.id;
    $('tFee').textContent = fmt(fee);
    $('tPaid').textContent = fmt(paid);
    $('tRemaining').textContent = fmt(remaining);

    const statusEl = $('tStatus');
    if (paid >= fee && fee > 0) {
      statusEl.textContent = 'Paid in Full';
      statusEl.className = 'pay-status pay-status-paid';
    } else if (paid > 0) {
      statusEl.textContent = 'Partially Paid';
      statusEl.className = 'pay-status pay-status-partial';
    } else {
      statusEl.textContent = 'Unpaid';
      statusEl.className = 'pay-status pay-status-unpaid';
    }

    $('tProgress').style.width = pct + '%';
    $('tProgressLabel').textContent = `${pct}% paid`;
    $('tProgressText').textContent = `${fmt(paid)} of ${fmt(fee)}`;

    const tbody = $('historyTableBody');
    if (tuition.history.length === 0) {
      tbody.innerHTML = `<tr class="empty-row"><td colspan="5">No payments recorded yet — your tuition statement will appear here after your first payment.</td></tr>`;
    } else {
      tbody.innerHTML = tuition.history.map((h) => `
        <tr>
          <td>${h.date}</td>
          <td><code>${h.ref}</code></td>
          <td>${h.method}</td>
          <td class="text-end amount-cell">${fmt(h.amount)}</td>
          <td><span class="pill ${h.status === 'Completed' ? 'pill-success' : 'pill-pending'}">${h.status}</span></td>
        </tr>`).join('');
    }

    $('payStudentId').value = tuition.studentId;
    $('payCourse').value = tuition.courseId;
  }

  function handlePaymentSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = $('paymentForm');
    const amountEl = $('payAmount');
    const course = byId(tuition.courseId);
    const remaining = Math.max(0, course.fee - tuition.paid);

    amountEl.setCustomValidity('');
    const amount = parseFloat(amountEl.value);
    if (!isNaN(amount) && amount > remaining) {
      amountEl.setCustomValidity(`Amount exceeds the remaining balance of ${fmt(remaining)}.`);
      $('amountFeedback').textContent = `Amount exceeds the remaining balance of ${fmt(remaining)}.`;
    } else {
      $('amountFeedback').textContent = 'Enter a valid amount.';
    }

    if (!form.checkValidity()) { form.classList.add('was-validated'); return; }

    const method = $('payMethod').value;
    const ref = $('payRef').value.trim().toUpperCase();
    const date = $('payDate').value;
    const status = method.startsWith('Cash') ? 'Pending Approval' : 'Completed';

    tuition.history.unshift({ date, ref, method, amount, status });
    tuition.paid += amount;
    renderTuition();

    form.classList.remove('was-validated');
    form.reset();
    $('payStudentId').value = tuition.studentId;
    $('payCourse').value = tuition.courseId;
    $('payDate').value = new Date().toISOString().split('T')[0];

    showToast('Payment recorded', `${fmt(amount)} received towards "${course.title}" — reference ${ref}. This is a demonstration only.`);
  }

  /* ------------------------------------------------------------------
     EVENTS
  ------------------------------------------------------------------ */
  function bindEvents() {
    // Card buttons (delegated — works in grid, details and related courses)
    document.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('[data-view]');
      const enrollBtn = e.target.closest('[data-enroll]');
      if (viewBtn) { e.preventDefault(); showDetails(viewBtn.dataset.view); }
      else if (enrollBtn) { e.preventDefault(); openEnroll(enrollBtn.dataset.enroll); }
    });

    // Search (debounced)
    let searchTimer;
    $('searchInput').addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        filters.search = $('searchInput').value;
        filters.page = 1;
        renderGrid();
      }, 220);
    });

    // Filters
    [['deptFilter', 'dept'], ['levelFilter', 'level'], ['modeFilter', 'mode'], ['feeFilter', 'fee']].forEach(([id, key]) => {
      $(id).addEventListener('change', () => {
        filters[key] = $(id).value;
        filters.page = 1;
        renderGrid();
      });
    });

    // Sort
    $('sortFilter').addEventListener('change', () => {
      filters.sort = $('sortFilter').value;
      filters.page = 1;
      renderGrid();
    });

    // Reset
    const resetAll = () => {
      filters = { search: '', dept: 'all', level: 'all', mode: 'all', fee: 'all', sort: 'newest', page: 1 };
      $('searchInput').value = '';
      $('deptFilter').value = 'all';
      $('levelFilter').value = 'all';
      $('modeFilter').value = 'all';
      $('feeFilter').value = 'all';
      $('sortFilter').value = 'newest';
      renderGrid();
    };
    $('resetFilters').addEventListener('click', resetAll);
    $('emptyReset').addEventListener('click', resetAll);

    // Pagination
    $('pagination').addEventListener('click', (e) => {
      const link = e.target.closest('.page-link');
      if (!link) return;
      e.preventDefault();
      const li = link.closest('.page-item');
      if (li.classList.contains('disabled') || li.classList.contains('active')) return;
      const val = link.dataset.page;
      const pages = Math.max(1, Math.ceil(getFiltered().length / PER_PAGE));
      if (val === 'prev') filters.page = Math.max(1, filters.page - 1);
      else if (val === 'next') filters.page = Math.min(pages, filters.page + 1);
      else filters.page = parseInt(val, 10);
      renderGrid();
      $('browseSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Details navigation
    $('backToCourses').addEventListener('click', backToListing);
    $('breadcrumbCoursesLink').addEventListener('click', (e) => { e.preventDefault(); backToListing(); });

    // Enrollment
    $('enrollForm').addEventListener('submit', handleEnrollSubmit);
    $('enrollModal').addEventListener('hidden.bs.modal', () => {
      $('enrollForm').reset();
      $('enrollForm').classList.remove('was-validated');
      $('enrollFormWrap').classList.remove('d-none');
      $('enrollSuccess').classList.add('d-none');
      $('enrollFooter').classList.remove('d-none');
    });
    $('enrollViewTuition').addEventListener('click', () => {
      bootstrap.Modal.getOrCreateInstance($('enrollModal')).hide();
      setTimeout(() => {
        $('tuition').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    });
    $('footerEnrollLink').addEventListener('click', () => {
      const target = currentCourse ? currentCourse.id : COURSES[0].id;
      setTimeout(() => openEnroll(target), 250);
    });

    // Payments
    $('paymentForm').addEventListener('submit', handlePaymentSubmit);
    $('payAmount').addEventListener('input', () => $('payAmount').setCustomValidity(''));
    $('payCourse').addEventListener('change', () => {
      const c = byId($('payCourse').value);
      if (c) { tuition.courseId = c.id; renderTuition(); }
    });

    // Navbar shadow + back-to-top
    const navbar = $('mainNavbar');
    const backToTop = $('backToTop');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 40);
      backToTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Graceful image fallback if remote images are unavailable
    const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%230a1f44'/%3E%3Ctext x='450' y='316' font-family='Georgia,serif' font-size='120' fill='%23d4af37' text-anchor='middle'%3EMU%3C/text%3E%3C/svg%3E";
    document.addEventListener('error', (e) => {
      const t = e.target;
      if (t.tagName === 'IMG' && !t.dataset.fb) { t.dataset.fb = '1'; t.src = FALLBACK_IMG; }
    }, true);
  }

  /* ------------------------------------------------------------------
     INIT
  ------------------------------------------------------------------ */
  function init() {
    // Populate course select in the payment form
    $('payCourse').innerHTML = COURSES
      .map((c) => `<option value="${c.id}">${c.title} (${c.id})</option>`).join('');

    $('payDate').value = new Date().toISOString().split('T')[0];
    bindEvents();
    renderGrid();
    renderTuition();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
