// SASI's Test Arena - UPSC Questions Database
// Holds Curated Base Bank (120 Qs), PYQ Bank (20 Qs), and Generative Concept Ontology (60 Nodes)

// Curated Base Bank (includes Polity, Economy, Geography, Environment, History, and Science & Tech)
const UPSC_QUESTION_BANK = [
  // ==================== POLITY (20 Questions - From previous implementation) ====================
  {
    id: "POL_001",
    subject: "Polity",
    topic: "Fundamental Rights",
    subtopic: "Right to Equality",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Right to Equality as guaranteed under the Constitution of India:",
    statements: [
      "The concept of 'Equality before Law' is of British origin and represents a negative concept, whereas 'Equal Protection of Laws' is of American origin and is a positive concept.",
      "Article 15 prohibits discrimination against any citizen on grounds of religion, race, caste, sex, place of birth, or descent.",
      "The Supreme Court of India held that the right to reservation is a fundamental right under Article 16 of the Constitution."
    ],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is correct: Equality before Law (Article 14) is a negative concept borrowed from the British Constitution, while Equal Protection of Laws is positive, borrowed from the US Constitution. Statement 2 is incorrect: Article 15 prohibits discrimination on grounds ONLY of religion, race, caste, sex, place of birth. The word 'descent' is included in Article 16, not Article 15. Statement 3 is incorrect: Reservation is an enabling provision, not a fundamental right itself."
  },
  {
    id: "POL_002",
    subject: "Polity",
    topic: "Federalism",
    subtopic: "State Boundaries Reorganisation",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the federal structure in India, consider the following statements:",
    statements: [
      "The term 'Federation' is nowhere mentioned in the Constitution of India.",
      "Indian federalism is based on the 'Canadian model' rather than the 'American model' of federalism.",
      "The Parliament of India has the power to alter the boundaries of any State without the consent of the legislature of that State."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "Statement 1 is correct: Article 1 states India is a 'Union of States'. The word 'Federation' is never used. Statement 2 is correct: Indian federalism features a strong center (Canadian model). Statement 3 is correct: Article 3 allows Parliament to reorganize states. Parliament is not bound by state views."
  },
  {
    id: "POL_003",
    subject: "Polity",
    topic: "Directive Principles",
    subtopic: "FR and DPSP Conflict",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Under the Constitution of India, in which of the following areas do the Directive Principles of State Policy (DPSP) differ fundamentally from Fundamental Rights?",
    statements: [
      "Fundamental Rights act as limitations on state action, whereas DPSPs act as positive instructions to the state.",
      "Fundamental Rights are justiciable in a court of law, whereas DPSPs are non-justiciable.",
      "In case of any conflict between Fundamental Rights and DPSPs, the Directive Principles always prevail as they represent the collective good."
    ],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct: FRs are negative obligations on the state, while DPSPs are positive directives. Statement 2 is correct: Article 37 declares DPSPs non-justiciable. Statement 3 is incorrect: Generally, FRs enjoy supremacy, with the exception of Articles 39(b) and 39(c) under Article 31C."
  },
  {
    id: "POL_004",
    subject: "Polity",
    topic: "Parliament",
    subtopic: "Joint Sitting of Parliament",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding the legislative procedure in the Parliament of India, consider the following statements:",
    statements: [
      "A Joint Sitting of both Houses under Article 108 can be convened for Ordinary Bills, Financial Bills, and Constitutional Amendment Bills.",
      "The Lok Sabha Speaker presides over a joint sitting, and in their absence, the Chairman of the Rajya Sabha presides.",
      "A Money Bill can only be introduced in the Lok Sabha on the recommendation of the President."
    ],
    options: [
      { id: "A", text: "3 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is incorrect: Joint sittings cannot be summoned for Constitutional Amendment Bills or Money Bills. Statement 2 is incorrect: The Chairman of Rajya Sabha (Vice President) never presides over a joint sitting as they are not a member of either House. Statement 3 is correct: Money Bills require the President's recommendation and originate only in the Lok Sabha."
  },
  {
    id: "POL_005",
    subject: "Polity",
    topic: "Judiciary",
    subtopic: "Original Jurisdiction",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the Supreme Court of India, which of the following is/are correct regarding its 'Original Jurisdiction'?",
    statements: [
      "Any dispute between the Government of India and one or more States.",
      "Disputes arising out of any pre-Constitution treaty, agreement, or covenant.",
      "Inter-state water disputes under Article 262."
    ],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is correct: Exclusive original jurisdiction under Article 131. Statement 2 is incorrect: Excluded by Article 131. Statement 3 is incorrect: Article 262 excludes SC jurisdiction from inter-state water disputes."
  },
  {
    id: "POL_006",
    subject: "Polity",
    topic: "Constitutional Bodies",
    subtopic: "Election Commission",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Election Commission of India (ECI):",
    statements: [
      "The Constitution has prescribed the qualifications of the members of the Election Commission.",
      "The Chief Election Commissioner (CEC) and other Election Commissioners enjoy equal powers and receive equal salaries.",
      "The CEC can be removed from office in the same manner and on the same grounds as a Judge of the Supreme Court."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: The Constitution has not prescribed qualifications. Statement 2 is correct: CEC and other ECs enjoy equal decision status. Statement 3 is correct: CEC has Supreme Court Judge level tenure protection."
  },
  {
    id: "POL_007",
    subject: "Polity",
    topic: "Local Government",
    subtopic: "73rd Amendment Provisions",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding the 73rd Constitutional Amendment Act, 1992, which of the following are compulsory provisions?",
    statements: [
      "Organization of Gram Sabha in a village or group of villages.",
      "Providing reservation for backward classes (OBCs) in Panchayats.",
      "Constitution of a State Finance Commission every five years to review the financial position of Panchayats."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "C",
    explanation: "Statement 1 and 3 are compulsory. Statement 2 is a voluntary provision left to the discretion of the State Legislatures."
  },
  {
    id: "POL_008",
    subject: "Polity",
    topic: "Emergency Provisions",
    subtopic: "Article 352 Enforcement",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding a proclamation of National Emergency under Article 352 of the Indian Constitution:",
    statements: [
      "A proclamation of emergency must be approved by both Houses of Parliament within one month from the date of its issue by a special majority.",
      "While a proclamation of National Emergency is in operation, the President can suspend the right to move any court for the enforcement of all Fundamental Rights.",
      "The proclamation can be revoked by the President at any time, and it does not require parliamentary approval."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct: Parliament must approve in 1 month by special majority. Statement 2 is incorrect: Articles 20 and 21 can never be suspended under Article 359. Statement 3 is correct: Revocation is done by President and doesn't need Parliament."
  },
  {
    id: "POL_009",
    subject: "Polity",
    topic: "Preamble",
    subtopic: "Preamble Status",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the Preamble of the Constitution of India, which of the following statements is/are correct?",
    statements: [
      "The Preamble is a source of power to the legislature and acts as a prohibition upon its powers.",
      "It was amended only once by the 42nd Constitutional Amendment Act, 1976, which added the words Socialist, Secular, and Integrity.",
      "The Preamble is non-justiciable and its provisions are not enforceable in courts of law."
    ],
    options: [
      { id: "A", text: "2 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "C",
    explanation: "Statement 1 is incorrect: Preamble is neither a source of power nor limitation. Statement 2 is correct: Amended once in 1976. Statement 3 is correct: It is non-justiciable."
  },
  {
    id: "POL_010",
    subject: "Polity",
    topic: "Amendment of Constitution",
    subtopic: "Article 368 Procedure",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding the amendment procedure of the Constitution of India under Article 368, consider the following statements:",
    statements: [
      "An amendment bill can be introduced by a Minister or a Private Member and does not require prior permission of the President.",
      "In case of a disagreement between the two Houses on an amendment bill, a joint sitting is mandatory to resolve the deadlock.",
      "Amendments affecting the federal character of the Constitution require ratification by the legislatures of all States in India."
    ],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is correct: No presidential assent needed before introduction. Statement 2 is incorrect: Joint sittings do not apply to amendment bills. Statement 3 is incorrect: Federal amendments require ratification by half (50%) of the states, not all."
  },
  {
    id: "POL_011",
    subject: "Polity",
    topic: "Fundamental Rights",
    subtopic: "Citizens Exclusive Rights",
    type: "Elimination-Based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following Fundamental Rights in the Indian Constitution are available ONLY to Indian citizens?",
    statements: [
      "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth (Article 15).",
      "Protection of language, script and culture of minorities (Article 29).",
      "Protection of life and personal liberty (Article 21).",
      "Equality of opportunity in matters of public employment (Article 16)."
    ],
    options: [
      { id: "A", text: "Only one of the above" },
      { id: "B", text: "Only two of the above" },
      { id: "C", text: "Only three of the above" },
      { id: "D", text: "All four of the above" }
    ],
    correctAnswer: "C",
    explanation: "Articles 15, 16, 19, 29, and 30 are available only to citizens. Article 21 is available to all. Thus, exactly three of the listed rights are exclusive to citizens."
  },
  {
    id: "POL_012",
    subject: "Polity",
    topic: "Parliament",
    subtopic: "Lok Sabha Speaker",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the office of the Speaker of Lok Sabha:",
    statements: [
      "The Speaker vacates their office immediately when the Lok Sabha is dissolved.",
      "The Speaker decides whether a bill is a Money Bill, and their decision cannot be questioned in any court of law.",
      "The Speaker does not vote in the first instance, but exercises a casting vote in the case of an equality of votes."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: Speaker continues until right before the first meeting of the new Lok Sabha. Statements 2 and 3 are correct."
  },
  {
    id: "POL_013",
    subject: "Polity",
    topic: "Judiciary",
    subtopic: "Judicial Review",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "What does the term 'Judicial Review' in India imply?",
    statements: [],
    options: [
      { id: "A", text: "The power of the Judiciary to pronounce upon the constitutionality of laws and executive orders." },
      { id: "B", text: "The power of the Judiciary to question the wisdom of the laws enacted by the Legislatures." },
      { id: "C", text: "The power of the Judiciary to review all administrative decisions before they are implemented." },
      { id: "D", text: "The power of the Judiciary to review its own judgments in the light of new facts." }
    ],
    correctAnswer: "A",
    explanation: "Judicial Review is the power of the judiciary to examine the constitutionality of legislative acts and executive orders and declare them null if they violate the constitution."
  },
  {
    id: "POL_014",
    subject: "Polity",
    topic: "Constitutional Bodies",
    subtopic: "Finance Commission",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the Finance Commission of India, consider the following statements:",
    statements: [
      "It is a quasi-judicial body constituted by the President of India under Article 280.",
      "Its recommendations are binding on the Central Government.",
      "The members of the Commission are eligible for reappointment."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct: Constituted under Article 280. Statement 2 is incorrect: Recommendations are advisory only. Statement 3 is correct: Members are eligible for reappointment."
  },
  {
    id: "POL_015",
    subject: "Polity",
    topic: "Emergency Provisions",
    subtopic: "President's Rule",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding 'President's Rule' (State Emergency) under Article 356, which of the following statements is/are correct?",
    statements: [
      "A proclamation of President's Rule can be issued if a State fails to comply with directions given by the Union under Article 365.",
      "The proclamation must be approved by Parliament within two months by a special majority.",
      "The maximum period for which President's Rule can be extended is three years, subject to specific conditions after one year."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct: Failure to comply is a ground under Article 365. Statement 2 is incorrect: Approved by simple majority (not special). Statement 3 is correct: Max 3 years extension limit."
  },
  {
    id: "POL_016",
    subject: "Polity",
    topic: "Fundamental Rights",
    subtopic: "Writs Jurisdiction",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following writs can be issued by the Supreme Court against private individuals as well as public authorities?",
    statements: [
      "Habeas Corpus",
      "Mandamus",
      "Quo-Warranto"
    ],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Habeas Corpus can be issued against both public and private entities. Mandamus and Quo-Warranto apply only to public offices."
  },
  {
    id: "POL_017",
    subject: "Polity",
    topic: "Federalism",
    subtopic: "Governor Immunities",
    type: "Assertion-Reason",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Given below are two statements, one labeled as Assertion (A) and the other as Reason (R):\n\nAssertion (A): The Governor of a state cannot be prosecuted in any civil or criminal court during their term of office.\nReason (R): The Governor represents the executive power of the state, and actions taken in their official capacity enjoy absolute immunity.",
    statements: [],
    options: [
      { id: "A", text: "Both A and R are true and R is the correct explanation of A." },
      { id: "B", text: "Both A and R are true but R is NOT the correct explanation of A." },
      { id: "C", text: "A is true but R is false." },
      { id: "D", text: "A is false but R is true." }
    ],
    correctAnswer: "D",
    explanation: "Assertion (A) is false: Under Article 361, a Governor is immune from criminal proceedings but civil proceedings can be instituted after 2 months' notice. Reason (R) is true: official actions enjoy absolute immunity."
  },
  {
    id: "POL_018",
    subject: "Polity",
    topic: "Preamble",
    subtopic: "Preamble Purpose",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "The mind of the makers of the Constitution of India is reflected in which of the following?",
    statements: [],
    options: [
      { id: "A", text: "The Preamble" },
      { id: "B", text: "The Fundamental Rights" },
      { id: "C", text: "The Directive Principles of State Policy" },
      { id: "D", text: "The Fundamental Duties" }
    ],
    correctAnswer: "A",
    explanation: "As held in the Berubari Union case (1960), the Preamble reflects the minds of the makers of the Constitution."
  },
  {
    id: "POL_019",
    subject: "Polity",
    topic: "Local Government",
    subtopic: "74th Amendment Provisions",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding the 74th Constitutional Amendment Act, 1992, which of the following statements is/are correct?",
    statements: [
      "It added Part IX-A to the Constitution and the Twelfth Schedule containing 18 functional items.",
      "It makes the constitution of a District Planning Committee mandatory for every state at the district level.",
      "The state government can dissolve a municipality at its discretion, but elections must be held within six months of dissolution."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Part IX-A, 12th Schedule (18 items). District Planning Committees are mandatory under Article 243ZD. Dissolution requires elections within 6 months."
  },
  {
    id: "POL_020",
    subject: "Polity",
    topic: "Constitutional Bodies",
    subtopic: "CAG Duties",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Comptroller and Auditor General of India (CAG):",
    statements: [
      "The CAG compiles and maintains the accounts of both the Central Government and the State Governments.",
      "The CAG submits three audit reports to the President, who causes them to be laid before both Houses of Parliament.",
      "The administrative expenses of the office of CAG are charged upon the Consolidated Fund of India."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: Since 1976, CAG is relieved of compiling accounts of the Central Government. Statements 2 and 3 are correct."
  },

  // ==================== ECONOMY (20 Questions - From previous implementation) ====================
  {
    id: "ECO_001",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Monetary Instruments",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "If the Reserve Bank of India (RBI) decides to adopt an expansionary monetary policy, which of the following actions would it NOT take?",
    statements: [
      "Reduce the Marginal Standing Facility (MSF) Rate.",
      "Increase the Cash Reserve Ratio (CRR).",
      "Purchase government securities under Open Market Operations (OMO)."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "2 and 3 only" }
    ],
    correctAnswer: "B",
    explanation: "Increasing CRR drains liquidity from banks, representing a contractionary policy. MSF reduction and OMO purchases are expansionary. Thus it would not take action 2."
  },
  {
    id: "ECO_002",
    subject: "Economy",
    topic: "Inflation",
    subtopic: "CPI vs WPI",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to inflation in India, consider the following statements:",
    statements: [
      "The Wholesale Price Index (WPI) captures inflation in services, whereas the Consumer Price Index (CPI) does not.",
      "In India, WPI is released by the Ministry of Statistics and Programme Implementation (MoSPI).",
      "The RBI uses CPI (Combined) as the key metric to measure inflation for monetary policy decisions."
    ],
    options: [
      { id: "A", text: "3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is incorrect: WPI does not cover services. Statement 2 is incorrect: WPI is published by Ministry of Commerce & Industry. Statement 3 is correct."
  },
  {
    id: "ECO_003",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Sterilization Operations",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following describes the 'Sterilization' activity of the Reserve Bank of India?",
    statements: [],
    options: [
      { id: "A", text: "Conducting open market operations to neutralize the impact of foreign capital inflows." },
      { id: "B", text: "Withdrawing soiled and damaged currency notes from circulation." },
      { id: "C", text: "Providing short-term loans to commercial banks under liquidity adjustment facility." },
      { id: "D", text: "Imposing penalties on banks violating capital adequacy norms." }
    ],
    correctAnswer: "A",
    explanation: "Sterilization refers to OMO sales/purchases by the central bank to offset liquidity impacts of foreign exchange inflows/outflows."
  },
  {
    id: "ECO_004",
    subject: "Economy",
    topic: "Fiscal Policy",
    subtopic: "Tax-to-GDP Ratio",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "A decrease in the tax-to-GDP ratio of a country indicates which of the following?",
    statements: [
      "Slowing economic growth rate.",
      "Less equitable distribution of national income.",
      "Reduced capacity of the government to finance developmental activities."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "C",
    explanation: "Tax-to-GDP decline suggests slowdowns (Statement 1) and limits fiscal capacity for development programs (Statement 3)."
  },
  {
    id: "ECO_005",
    subject: "Economy",
    topic: "Balance of Payments",
    subtopic: "Capital Account Balance",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following items:\n1. Remittances from abroad\n2. External Commercial Borrowings (ECBs)\n3. Foreign Direct Investment (FDI)\n4. Foreign Portfolio Investment (FPI)\n\nWhich of the above are part of the 'Capital Account' of India's Balance of Payments?",
    statements: [],
    options: [
      { id: "A", text: "2, 3 and 4 only" },
      { id: "B", text: "1, 2 and 3 only" },
      { id: "C", text: "1 and 4 only" },
      { id: "D", text: "1, 2, 3 and 4" }
    ],
    correctAnswer: "A",
    explanation: "Remittances are transfer payments logged in the Current Account. ECBs, FDI, and FPI belong to the Capital Account."
  },
  {
    id: "ECO_006",
    subject: "Economy",
    topic: "Banking System",
    subtopic: "Capital Adequacy Ratio",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to the Capital Adequacy Ratio (CAR), consider the following statements:",
    statements: [
      "CAR is the amount that banks have to maintain in the form of gold and government securities with the central bank.",
      "A higher CAR ensures a bank has a larger safety cushion to absorb losses before becoming insolvent.",
      "CAR is determined by each individual commercial bank based on its own risk assessment."
    ],
    options: [
      { id: "A", text: "2 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is incorrect: SLR represents gold/G-Secs, CAR is capital-to-risk assets. Statement 2 is correct. Statement 3 is incorrect: Mandated by RBI."
  },
  {
    id: "ECO_007",
    subject: "Economy",
    topic: "Inflation",
    subtopic: "Demand-Pull Inflation",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following measures is/are likely to reduce 'Demand-Pull' inflation in an economy?",
    statements: [
      "Increase in personal income tax rates.",
      "Reduction in government capital expenditure.",
      "Decrease in the bank interest rates."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Higher taxes (1) and lower spending (2) cool down demand. Lower interest rates (3) expand credit and fuel inflation."
  },
  {
    id: "ECO_008",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Open Market Operations",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the Indian economy, what does the term 'Open Market Operations' refer to?",
    statements: [],
    options: [
      { id: "A", text: "Borrowing by commercial banks from the RBI." },
      { id: "B", text: "Lending by commercial banks to industry and agriculture." },
      { id: "C", text: "Purchase and sale of government securities by the RBI." },
      { id: "D", text: "Sale of shares in public sector undertakings to the private sector." }
    ],
    correctAnswer: "C",
    explanation: "OMO is the purchase/sale of government securities by the RBI to regulate banking liquidity."
  },
  {
    id: "ECO_009",
    subject: "Economy",
    topic: "National Income",
    subtopic: "Real vs Nominal GDP",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding 'Gross Domestic Product (GDP) at Market Prices' and 'Gross National Product (GNP) at Market Prices':",
    statements: [
      "GNP is obtained by adding Net Factor Income from Abroad (NFIA) to GDP.",
      "If a country has a trade deficit and high external debt service payments, its GNP is likely to be lower than its GDP.",
      "Real GDP is calculated using base-year prices, whereas Nominal GDP is calculated using current-year prices."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 2 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. GNP = GDP + NFIA. Outflows of debt and imports make NFIA negative, driving GNP lower than GDP."
  },
  {
    id: "ECO_010",
    subject: "Economy",
    topic: "Financial Markets",
    subtopic: "Participatory Notes",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding 'Participatory Notes' (P-Notes) used in Indian financial markets, consider the following statements:",
    statements: [
      "They are issued by registered Foreign Portfolio Investors (FPIs) to overseas investors who wish to invest in Indian stock markets without registering directly with SEBI.",
      "The issuers of P-Notes are not required to report the identity of the ultimate beneficiaries to SEBI.",
      "P-Notes can be issued against both equity shares and debt instruments."
    ],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct. Statement 2 is incorrect: issuers must report ultimate beneficiaries to SEBI. Statement 3 is correct."
  },
  {
    id: "ECO_011",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Quantitative Credit Control",
    type: "Elimination-Based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following are considered 'Quantitative' credit control measures of the Reserve Bank of India?",
    statements: [
      "Bank Rate Policy",
      "Cash Reserve Ratio (CRR)",
      "Marginal Standing Facility (MSF)",
      "Moral Suasion"
    ],
    options: [
      { id: "A", text: "Only one of the above" },
      { id: "B", text: "Only two of the above" },
      { id: "C", text: "Only three of the above" },
      { id: "D", text: "All four of the above" }
    ],
    correctAnswer: "C",
    explanation: "Bank Rate, CRR, and MSF are Quantitative metrics. Moral Suasion is qualitative. Thus, exactly three are quantitative."
  },
  {
    id: "ECO_012",
    subject: "Economy",
    topic: "Inflation",
    subtopic: "Core Inflation",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the Indian economy, which of the following is the most likely consequence of high 'Core Inflation'?",
    statements: [],
    options: [
      { id: "A", text: "A drop in fuel and food prices." },
      { id: "B", text: "An increase in the headline inflation which is likely to be persistent." },
      { id: "C", text: "An immediate expansion of credit by commercial banks." },
      { id: "D", text: "A strengthening of the rupee against the US dollar." }
    ],
    correctAnswer: "B",
    explanation: "Core inflation removes volatile food and energy. High core inflation means price increases are structural, causing headline inflation to persist."
  },
  {
    id: "ECO_013",
    subject: "Economy",
    topic: "Fiscal Policy",
    subtopic: "FRBM Deficits targets",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the 'Revenue Deficit' of a government:",
    statements: [
      "It represents the excess of revenue expenditure over revenue receipts.",
      "A high revenue deficit implies that the government is borrowing to finance asset creation.",
      "The FRBM Act, 2003, mandates the complete elimination of the revenue deficit."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "1 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is correct. Statement 2 is incorrect: revenue deficit means borrowing is used for administrative consumption, not asset creation. Statement 3 is correct."
  },
  {
    id: "ECO_014",
    subject: "Economy",
    topic: "Balance of Payments",
    subtopic: "Rupee Depreciation effects",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following is/are likely to occur when the Indian Rupee undergoes rapid depreciation?",
    statements: [
      "Indian exports become more competitive in the international market.",
      "The cost of servicing external commercial debt increases for Indian corporate borrowers.",
      "The domestic price of imported crude oil increases, leading to imported inflation."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Weak rupee boosts exports, increases dollar debt payment burden in rupees, and inflates raw import prices."
  },
  {
    id: "ECO_015",
    subject: "Economy",
    topic: "Banking System",
    subtopic: "IBC 2016 Process",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Insolvency and Bankruptcy Code (IBC), 2016', consider the following statements:",
    statements: [
      "It provides a time-bound process for resolving insolvency of corporate debtors.",
      "The National Company Law Tribunal (NCLT) is the adjudicating authority for corporate insolvencies.",
      "Individual insolvencies are adjudicated by the Debt Recovery Tribunals (DRT)."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. IBC enforces limits, NCLT adjudicates corporates, and DRT handles individuals/partnerships."
  },
  {
    id: "ECO_016",
    subject: "Economy",
    topic: "Sectors of Economy",
    subtopic: "GVA contributions",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the Indian economy, which of the following is the largest component of India's Gross Value Added (GVA)?",
    statements: [],
    options: [
      { id: "A", text: "Agriculture, Forestry, and Fishing" },
      { id: "B", text: "Industry and Manufacturing" },
      { id: "C", text: "Services Sector" },
      { id: "D", text: "Mining and Quarrying" }
    ],
    correctAnswer: "C",
    explanation: "Services sector dominates India's GVA, contributing over 53%."
  },
  {
    id: "ECO_017",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Repo Rate adjustments",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "When the RBI lowers the Repo Rate, what is the most direct expected impact on commercial banks?",
    statements: [],
    options: [
      { id: "A", text: "Their cost of borrowing short-term funds from the RBI decreases." },
      { id: "B", text: "Their statutory reserve requirements are automatically reduced." },
      { id: "C", text: "They are forced to increase their lending rates immediately." },
      { id: "D", text: "They can no longer buy government securities." }
    ],
    correctAnswer: "A",
    explanation: "Lower repo rate makes it cheaper for banks to borrow short-term liquidity from RBI."
  },
  {
    id: "ECO_018",
    subject: "Economy",
    topic: "International Organizations",
    subtopic: "IMF Reports",
    type: "Matching Type",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following reports and their publishing organizations:\n1. Global Financial Stability Report : International Monetary Fund (IMF)\n2. World Economic Outlook : World Bank\n3. Global Economic Prospects : World Economic Forum (WEF)\n\nWhich of the pairs given above is/are correctly matched?",
    statements: [],
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Pair 1 is correct. Pair 2 is incorrect (IMF publishes World Economic Outlook). Pair 3 is incorrect (World Bank publishes Global Economic Prospects)."
  },
  {
    id: "ECO_019",
    subject: "Economy",
    topic: "Financial Markets",
    subtopic: "Treasury Bills",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding 'Treasury Bills' (T-Bills) in India, consider the following statements:",
    statements: [
      "They are short-term debt instruments issued by both the Central Government and the State Governments.",
      "They are issued at a discount and redeemed at par.",
      "T-Bills are currently issued in three tenors: 91 days, 182 days, and 364 days."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: State Governments cannot issue T-Bills, only Centre issues them. Statements 2 and 3 are correct."
  },
  {
    id: "ECO_020",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Liquidity Trap",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following describes 'liquidity trap' in an economy?",
    statements: [],
    options: [
      { id: "A", text: "A situation where nominal interest rates are near zero and monetary policy fails to stimulate demand." },
      { id: "B", text: "A rapid increase in bad loans (NPA) leading to commercial bank runs." },
      { id: "C", text: "A condition where RBI blocks bank withdrawals to prevent capital flight." },
      { id: "D", text: "High fiscal deficit crowding out private investment." }
    ],
    correctAnswer: "A",
    explanation: "A liquidity trap is when low interest rates fail to stimulate borrowing because consumers prefer holding cash."
  },

  // ==================== GEOGRAPHY (20 Questions - From previous implementation) ====================
  {
    id: "GEO_001",
    subject: "Geography",
    topic: "Ocean Currents",
    subtopic: "Cold Ocean Currents",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following ocean currents:\n1. Kuroshio Current\n2. Benguela Current\n3. Labrador Current\n4. Falkland Current\n\nWhich of the above are 'Cold Currents'?",
    statements: [],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "2, 3 and 4 only" },
      { id: "C", text: "1, 2 and 4 only" },
      { id: "D", text: "1, 2, 3 and 4" }
    ],
    correctAnswer: "B",
    explanation: "Kuroshio is a warm current. Benguela, Labrador, and Falkland are cold currents."
  },
  {
    id: "GEO_002",
    subject: "Geography",
    topic: "Indian River Systems",
    subtopic: "River Tributaries",
    type: "Matching Type",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following pairs of rivers and their tributaries:\n1. Krishna River : Bhima and Tungabhadra\n2. Godavari River : Indravati and Pranhita\n3. Kaveri River : Kabini and Hemavati\n\nWhich of the pairs given above is/are correctly matched?",
    statements: [],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All pairs are correctly matched: Bhima/Tungabhadra (Krishna), Indravati/Pranhita (Godavari), and Kabini/Hemavati (Kaveri)."
  },
  {
    id: "GEO_003",
    subject: "Geography",
    topic: "Climatology",
    subtopic: "Temperature Inversion",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to the temperature inversion, which of the following statements is/are correct?",
    statements: [
      "Temperature inversion refers to a situation where temperature increases with increasing altitude.",
      "Clear winter skies and calm air are ideal conditions for temperature inversion to occur.",
      "It is a permanent phenomenon observed throughout the year at the equator."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: it is transient and common in high-latitude/mountain valleys, not at the equator."
  },
  {
    id: "GEO_004",
    subject: "Geography",
    topic: "Geomorphology",
    subtopic: "Plate Boundaries",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding Plate Tectonics theory, consider the following statements:",
    statements: [
      "Mid-oceanic ridges represent convergent plate boundaries where crust is destroyed.",
      "The San Andreas Fault is a classic example of a transform plate boundary.",
      "The Himalayan mountain range was formed by oceanic-continental convergence."
    ],
    options: [
      { id: "A", text: "2 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is incorrect (Mid-oceanic ridges are divergent). Statement 2 is correct (San Andreas is transform). Statement 3 is incorrect (Himalayas are continental-continental convergence)."
  },
  {
    id: "GEO_005",
    subject: "Geography",
    topic: "Vegetation & Soils",
    subtopic: "Black Soil Regur",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding 'Black Soils' of India:",
    statements: [
      "They are rich in nitrogen, phosphorus, and organic matter.",
      "They exhibit self-ploughing characteristics due to high clay content.",
      "They are derived from the weathering of basaltic lava rocks."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: deficient in nitrogen/phosphorus. Statement 2 (self-ploughing) and Statement 3 (basaltic origin) are correct."
  },
  {
    id: "GEO_006",
    subject: "Geography",
    topic: "Climatology",
    subtopic: "Cyclone Formation conditions",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following conditions are favorable for the formation and intensification of tropical cyclones?",
    statements: [
      "Large sea surface with temperature higher than 27°C.",
      "Presence of the Coriolis force.",
      "Small variations in the vertical wind speed.",
      "A pre-existing weak low-pressure area."
    ],
    options: [
      { id: "A", text: "1, 2 and 4 only" },
      { id: "B", text: "2, 3 and 4 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2, 3 and 4" }
    ],
    correctAnswer: "D",
    explanation: "All four conditions are necessary for tropical cyclone formation."
  },
  {
    id: "GEO_007",
    subject: "Geography",
    topic: "Ocean Currents",
    subtopic: "Coral Reef barriers",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "What is the primary reason behind the lack of coral reef development along the western coasts of South America and Africa?",
    statements: [],
    options: [
      { id: "A", text: "Presence of cold ocean currents and upwelling of cold water." },
      { id: "B", text: "High sediment discharge from rivers." },
      { id: "C", text: "Frequent volcanic eruptions along the coast." },
      { id: "D", text: "Extremely high salinity levels." }
    ],
    correctAnswer: "A",
    explanation: "Upwelling and cold currents along western coasts lower water temperatures below the required threshold for coral growth."
  },
  {
    id: "GEO_008",
    subject: "Geography",
    topic: "Indian River Systems",
    subtopic: "Northeast Rivers",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following rivers:\n1. Barak\n2. Lohit\n3. Subansiri\n\nWhich of the above flow through Arunachal Pradesh?",
    statements: [],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Lohit and Subansiri flow through Arunachal. The Barak flows through Manipur/Assam/Mizoram."
  },
  {
    id: "GEO_009",
    subject: "Geography",
    topic: "Solar System & Earth",
    subtopic: "Seasons Tilt",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Variations in the length of daytime and nighttime from season to season are due to which of the following?",
    statements: [],
    options: [
      { id: "A", text: "The rotation of the Earth on its axis." },
      { id: "B", text: "The revolution of the Earth around the Sun in an elliptical orbit." },
      { id: "C", text: "Latitudinal position of the place." },
      { id: "D", text: "Revolution of the Earth on a tilted axis." }
    ],
    correctAnswer: "D",
    explanation: "The axial tilt (23.5 degrees) combined with revolution causes seasons and day length variations."
  },
  {
    id: "GEO_010",
    subject: "Geography",
    topic: "Map-based locations",
    subtopic: "Equator Countries",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Through which of the following countries does the Equator (0° latitude) pass?",
    statements: [
      "Ecuador",
      "Democratic Republic of the Congo",
      "Indonesia",
      "Venezuela"
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "1, 2 and 3 only" },
      { id: "C", text: "2, 3 and 4 only" },
      { id: "D", text: "1, 2, 3 and 4" }
    ],
    correctAnswer: "B",
    explanation: "Equator passes through Ecuador, DRC, and Indonesia. It does not pass through Venezuela."
  },
  {
    id: "GEO_011",
    subject: "Geography",
    topic: "Ocean Currents",
    subtopic: "Pacific Currents",
    type: "Elimination-Based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following ocean currents belong to the Pacific Ocean?",
    statements: [
      "Kuroshio Current",
      "California Current",
      "Oyashio Current",
      "Canary Current"
    ],
    options: [
      { id: "A", text: "Only one of the above" },
      { id: "B", text: "Only two of the above" },
      { id: "C", text: "Only three of the above" },
      { id: "D", text: "All four of the above" }
    ],
    correctAnswer: "C",
    explanation: "Kuroshio, California, and Oyashio belong to the Pacific. Canary is in the Atlantic. Exactly three are Pacific."
  },
  {
    id: "GEO_012",
    subject: "Geography",
    topic: "Climatology",
    subtopic: "Mediterranean Climate",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to the Mediterranean type of climate, consider the following statements:",
    statements: [
      "It is characterized by dry summers and wet winters.",
      "It is under the influence of westerly winds during winter and trade winds during summer.",
      "It is majorly developed along the western margins of continents in the latitudes 30° and 45° North and South."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct: dry summers/wet winters, trades/westerlies shifts, western margins."
  },
  {
    id: "GEO_013",
    subject: "Geography",
    topic: "Geomorphology",
    subtopic: "Karst Landforms",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Karst Landforms', which of the following erosional features are formed by groundwater activity?",
    statements: [
      "Sinkholes",
      "Stalactites",
      "Uvalas",
      "Lapis"
    ],
    options: [
      { id: "A", text: "1, 2 and 3 only" },
      { id: "B", text: "1, 3 and 4 only" },
      { id: "C", text: "2 and 4 only" },
      { id: "D", text: "1, 2, 3 and 4" }
    ],
    correctAnswer: "B",
    explanation: "Sinkholes, Uvalas, and Lapies (Lapis) are erosional. Stalactites are depositional features."
  },
  {
    id: "GEO_014",
    subject: "Geography",
    topic: "Indian River Systems",
    subtopic: "Estuaries West Flowing",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Why do the rivers of Peninsular India not form large deltas like the Ganga-Brahmaputra system, instead forming estuaries in some cases?",
    statements: [],
    options: [
      { id: "A", text: "They flow through hard, rocky terrain and carry very little sediment load." },
      { id: "B", text: "They are seasonal and dry up completely in winter." },
      { id: "C", text: "The western coast of India is an emerging coast, which does not allow delta formation." },
      { id: "D", text: "They have a very long path which slows their velocity before reaching the sea." }
    ],
    correctAnswer: "A",
    explanation: "Peninsular rivers flow over hard rocks, carrying little silt, and run short courses discharging directly without delta sedimentation."
  },
  {
    id: "GEO_015",
    subject: "Geography",
    topic: "Vegetation & Soils",
    subtopic: "Arid Soils Rajasthan",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the soil profile in dry areas of India (like western Rajasthan):",
    statements: [
      "The soil has high calcium content, leading to the formation of kankar layers in the subsoil.",
      "The soil is rich in organic matter and nitrogen due to dry deciduous vegetation.",
      "Evaporation exceeds precipitation, leaving salts accumulated on the surface."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is correct (calcium kankar). Statement 2 is incorrect (deficient in organic matter/nitrogen). Statement 3 is correct (evaporation salinization)."
  },
  {
    id: "GEO_016",
    subject: "Geography",
    topic: "Solar System & Earth",
    subtopic: "Earth Core liquid",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following layers of the Earth's interior is in a liquid state?",
    statements: [],
    options: [
      { id: "A", text: "Crust" },
      { id: "B", text: "Asthenosphere" },
      { id: "C", text: "Outer Core" },
      { id: "D", text: "Inner Core" }
    ],
    correctAnswer: "C",
    explanation: "The outer core is liquid (proven by S-wave shadows), while the inner core is solid due to extreme pressure."
  },
  {
    id: "GEO_017",
    subject: "Geography",
    topic: "Climatology",
    subtopic: "West Coast Deserts",
    type: "Assertion-Reason",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Given below are two statements, one labeled as Assertion (A) and the other as Reason (R):\n\nAssertion (A): Deserts in mid-latitudes are generally located on the western sides of continents.\nReason (R): The western margins are washed by cold ocean currents, and the wind blowing over them is dry.",
    statements: [],
    options: [
      { id: "A", text: "Both A and R are true and R is the correct explanation of A." },
      { id: "B", text: "Both A and R are true but R is NOT the correct explanation of A." },
      { id: "C", text: "A is true but R is false." },
      { id: "D", text: "A is false but R is true." }
    ],
    correctAnswer: "A",
    explanation: "Both are true. Cold currents dry up the air and offshore winds prevent rainfall, creating coastal deserts."
  },
  {
    id: "GEO_018",
    subject: "Geography",
    topic: "Map-based locations",
    subtopic: "Suez Canal Link",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following water bodies are connected by the Suez Canal?",
    statements: [],
    options: [
      { id: "A", text: "Mediterranean Sea and Red Sea" },
      { id: "B", text: "Mediterranean Sea and Black Sea" },
      { id: "C", text: "Red Sea and Arabian Sea" },
      { id: "D", text: "Black Sea and Caspian Sea" }
    ],
    correctAnswer: "A",
    explanation: "Suez Canal links the Mediterranean Sea directly with the Red Sea."
  },
  {
    id: "GEO_019",
    subject: "Geography",
    topic: "Minerals & Industries",
    subtopic: "Iron Ore deposits",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Iron Ore' distribution in India, consider the following statements:",
    statements: [
      "Hematite and Magnetite are the two main types of iron ore found in India.",
      "The major iron ore deposits in India are associated with the Dharwar rock system.",
      "India is completely self-sufficient and does not export iron ore."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: India is a key exporter of iron ore fines to China."
  },
  {
    id: "GEO_020",
    subject: "Geography",
    topic: "Geomorphology",
    subtopic: "Weathering Chemistry",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding mechanical and chemical weathering:",
    statements: [
      "Mechanical weathering dominates in hot and humid tropical climates.",
      "Chemical weathering changes the mineral composition of the rocks.",
      "Frost wedging is a type of chemical weathering common in high altitudes."
    ],
    options: [
      { id: "A", text: "2 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 is incorrect: chemical weathering dominates in wet tropics. Statement 2 is correct. Statement 3 is incorrect: frost wedging is a physical mechanism."
  },

  // ==================== ENVIRONMENT & ECOLOGY (20 Questions - From previous implementation) ====================
  {
    id: "ENV_001",
    subject: "Environment",
    topic: "Biodiversity",
    subtopic: "Hotspot Criteria",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to 'Biodiversity Hotspots', consider the following statements:",
    statements: [
      "To qualify as a hotspot, a region must support at least 1,500 species of endemic vascular plants.",
      "It must have lost at least 70% of its original primary vegetation.",
      "India has four biodiversity hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Defined by Conservation International (1500 endemics, 70% habitat loss). India shares 4 hotspots."
  },
  {
    id: "ENV_002",
    subject: "Environment",
    topic: "Climate Change",
    subtopic: "Ocean Acidification mechanism",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding 'Ocean Acidification', which of the following statements is/are correct?",
    statements: [
      "It is caused by the uptake of anthropogenic carbon dioxide (CO2) from the atmosphere.",
      "Acidification increases the concentration of carbonate ions (CO3 2-), helping calcifying organisms build shells.",
      "It results in a decrease in the pH of ocean waters, making them more acidic."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 3 are correct. Statement 2 is incorrect: Acidification decreases carbonate ions, making shell construction harder."
  },
  {
    id: "ENV_003",
    subject: "Environment",
    topic: "Ecology",
    subtopic: "Bioaccumulation",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following processes leads to the bioaccumulation of toxins in an ecosystem?",
    statements: [],
    options: [
      { id: "A", text: "The excretion of toxic metals by higher trophic levels." },
      { id: "B", text: "The increase in concentration of a chemical in an organism's body over time compared to the chemical's concentration in the environment." },
      { id: "C", text: "The breakdown of toxic chemicals by decomposers like bacteria." },
      { id: "D", text: "The transfer of energy from producers to primary consumers." }
    ],
    correctAnswer: "B",
    explanation: "Bioaccumulation is the buildup of substances inside an organism over time because intake exceeds elimination rates."
  },
  {
    id: "ENV_004",
    subject: "Environment",
    topic: "Environmental Acts",
    subtopic: "Wildlife Act 1972",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Wildlife Protection Act, 1972:",
    statements: [
      "It provides for the declaration of National Parks and Wildlife Sanctuaries by both Central and State Governments.",
      "Animals listed under Schedule I and Part II of Schedule II enjoy absolute protection, and offenses against them attract the highest penalties.",
      "Vermins are animals that can be hunted freely, and they are listed in Schedule I."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: vermin were in Schedule V, never in Schedule I."
  },
  {
    id: "ENV_005",
    subject: "Environment",
    topic: "International Conventions",
    subtopic: "Chemical Conventions",
    type: "Matching Type",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following international agreements and their primary subjects:\n1. Basel Convention : Transboundary movements of hazardous wastes\n2. Rotterdam Convention : Prior Informed Consent procedure for certain hazardous chemicals\n3. Stockholm Convention : Persistent Organic Pollutants (POPs)\n\nWhich of the pairs given above is/are correctly matched?",
    statements: [],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All pairs are correctly matched: Basel (waste), Rotterdam (consent), Stockholm (POPs)."
  },
  {
    id: "ENV_006",
    subject: "Environment",
    topic: "Ecology",
    subtopic: "Ecotones & Edge Effect",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Ecotone', which of the following statements is/are correct?",
    statements: [
      "It is a zone of junction or transition area between two or more diverse ecosystems.",
      "It is always narrower than the adjoining ecosystems.",
      "The 'Edge Effect' refers to the occurrence of greater species diversity and density in an ecotone."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct. Statement 2 is incorrect (can be very wide). Statement 3 is correct (edge effect causes higher diversity)."
  },
  {
    id: "ENV_007",
    subject: "Environment",
    topic: "National Parks & Sanctuaries",
    subtopic: "Nokrek Biosphere",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following National Parks in India:\n1. Keibul Lamjao National Park\n2. Namdapha National Park\n3. Nokrek National Park\n\nWhich of the above is/are Biosphere Reserves as well?",
    statements: [],
    options: [
      { id: "A", text: "3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Only Nokrek is a Biosphere Reserve. Keibul Lamjao is a national park (floating), Namdapha is a tiger reserve."
  },
  {
    id: "ENV_008",
    subject: "Environment",
    topic: "Ecology",
    subtopic: "Ecological Succession",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "In the context of ecological succession, what is a 'Climax Community'?",
    statements: [],
    options: [
      { id: "A", text: "The first community of organisms that colonizes a barren area." },
      { id: "B", text: "A stable, mature community that has reached equilibrium with the regional climate." },
      { id: "C", text: "The intermediate stage of succession characterized by rapid species replacement." },
      { id: "D", text: "A community that has been degraded due to anthropogenic forest fires." }
    ],
    correctAnswer: "B",
    explanation: "Climax community represents the final, stable stage of succession in balance with local climate."
  },
  {
    id: "ENV_009",
    subject: "Environment",
    topic: "Pollution & Waste",
    subtopic: "Acid Rain pollutants",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to 'Acid Rain', which of the following compounds are primary contributors to its formation?",
    statements: [
      "Carbon dioxide",
      "Sulfur dioxide",
      "Nitrogen oxides"
    ],
    options: [
      { id: "A", text: "2 and 3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "SO2 and NOx react with cloud vapor to form strong sulfuric and nitric acids. CO2 forms very weak carbonic acid."
  },
  {
    id: "ENV_010",
    subject: "Environment",
    topic: "Climate Change",
    subtopic: "Global Warming Potential",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding the 'Greenhouse Effect', which of the following represents the correct order of greenhouse gases based on their Global Warming Potential (GWP) over a 100-year timescale (from highest to lowest)?",
    statements: [],
    options: [
      { id: "A", text: "Sulfur hexafluoride (SF6) > Nitrous oxide (N2O) > Methane (CH4) > Carbon dioxide (CO2)" },
      { id: "B", text: "Carbon dioxide (CO2) > Methane (CH4) > Nitrous oxide (N2O) > Sulfur hexafluoride (SF6)" },
      { id: "C", text: "Sulfur hexafluoride (SF6) > Methane (CH4) > Nitrous oxide (N2O) > Carbon dioxide (CO2)" },
      { id: "D", text: "Nitrous oxide (N2O) > Sulfur hexafluoride (SF6) > Methane (CH4) > Carbon dioxide (CO2)" }
    ],
    correctAnswer: "A",
    explanation: "SF6 has GWP ~23500, N2O GWP ~265, CH4 GWP ~28, CO2 GWP = 1."
  },
  {
    id: "ENV_011",
    subject: "Environment",
    topic: "Biodiversity",
    subtopic: "In-situ Conservation",
    type: "Elimination-Based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following are examples of 'In-situ' conservation methods?",
    statements: [
      "National Parks",
      "Biosphere Reserves",
      "Botanical Gardens",
      "Wildlife Sanctuaries"
    ],
    options: [
      { id: "A", text: "Only one of the above" },
      { id: "B", text: "Only two of the above" },
      { id: "C", text: "Only three of the above" },
      { id: "D", text: "All four of the above" }
    ],
    correctAnswer: "C",
    explanation: "National Parks, Biosphere Reserves, and Sanctuaries are in-situ. Botanical Gardens are ex-situ. Exactly three."
  },
  {
    id: "ENV_012",
    subject: "Environment",
    topic: "International Conventions",
    subtopic: "Ramsar Wetlands",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Ramsar Convention on Wetlands:",
    statements: [
      "It is an intergovernmental treaty that provides the framework for national action and international cooperation for the conservation of wetlands.",
      "The 'Montreux Record' is maintained as a part of the Ramsar List for wetlands facing immediate ecological threats.",
      "Chilika Lake in Odisha was the first Indian wetland to be placed under the Montreux Record and has since been removed."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Chilika was added in 1993 and removed in 2002 after successful ecological restoration."
  },
  {
    id: "ENV_013",
    subject: "Environment",
    topic: "Ecology",
    subtopic: "Energy transfer 10% law",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "What happens to the available energy in an ecosystem as it moves from lower to higher trophic levels in a food chain?",
    statements: [],
    options: [
      { id: "A", text: "It increases exponentially due to bio-concentration." },
      { id: "B", text: "It remains constant due to the law of conservation of energy." },
      { id: "C", text: "It decreases by approximately 90% at each successive level." },
      { id: "D", text: "It fluctuates randomly depending on predator-prey ratios." }
    ],
    correctAnswer: "C",
    explanation: "According to Lindeman's 10% law, 90% of energy is lost as metabolic heat/respiration at each transfer step."
  },
  {
    id: "ENV_014",
    subject: "Environment",
    topic: "National Parks & Sanctuaries",
    subtopic: "Keibul Floating Park",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following National Parks is uniquely known for its floating vegetation called 'Phumdis'?",
    statements: [],
    options: [
      { id: "A", text: "Keibul Lamjao National Park" },
      { id: "B", text: "Sultanpur National Park" },
      { id: "C", text: "Guindy National Park" },
      { id: "D", text: "Silent Valley National Park" }
    ],
    correctAnswer: "A",
    explanation: "Keibul Lamjao (Manipur, Loktak Lake) is the only floating park, characterized by Phumdis vegetation."
  },
  {
    id: "ENV_015",
    subject: "Environment",
    topic: "Climate Change",
    subtopic: "Carbon credits Kyoto",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Carbon Credits', which of the following statements is/are correct?",
    statements: [
      "One carbon credit is equivalent to the reduction of one metric ton of carbon dioxide (CO2) or its equivalent.",
      "The system of carbon credits was introduced under the Kyoto Protocol.",
      "Carbon credits can be traded in international markets."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. 1 credit = 1 ton CO2. Introduced by Kyoto Clean Development Mechanism."
  },
  {
    id: "ENV_016",
    subject: "Environment",
    topic: "Ecology",
    subtopic: "Primary Producers",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Which of the following is/are primary producers in an aquatic ecosystem?",
    statements: [],
    options: [
      { id: "A", text: "Zooplankton" },
      { id: "B", text: "Phytoplankton" },
      { id: "C", text: "Benthos" },
      { id: "D", text: "Fungi" }
    ],
    correctAnswer: "B",
    explanation: "Phytoplanktons perform photosynthesis and act as primary energy producers in ocean food webs."
  },
  {
    id: "ENV_017",
    subject: "Environment",
    topic: "Biodiversity",
    subtopic: "Invasive Species impact",
    type: "Assertion-Reason",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Given below are two statements, one labeled as Assertion (A) and the other as Reason (R):\n\nAssertion (A): Exotic species introductions often lead to a decline in native species diversity.\nReason (R): Invasive exotic species may lack natural predators in the new environment, allowing them to outcompete native species for resources.",
    statements: [],
    options: [
      { id: "A", text: "Both A and R are true and R is the correct explanation of A." },
      { id: "B", text: "Both A and R are true but R is NOT the correct explanation of A." },
      { id: "C", text: "A is true but R is false." },
      { id: "D", text: "A is false but R is true." }
    ],
    correctAnswer: "A",
    explanation: "Both are true. Exotic invasives lack natural check bounds, growing rapidly and outcompeting native flora/fauna."
  },
  {
    id: "ENV_018",
    subject: "Environment",
    topic: "Climate Change",
    subtopic: "Blue Carbon sinks",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding 'Blue Carbon', which of the following statements is/are correct?",
    statements: [
      "It refers to the carbon captured and stored by the world's ocean and coastal ecosystems.",
      "Mangroves, salt marshes, and seagrass meadows store carbon at much higher rates per unit area than terrestrial forests.",
      "When these coastal ecosystems are degraded, they release stored carbon back into the atmosphere as greenhouse gases."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Blue carbon represents marine sinks. Coastal systems hold carbon up to 10x denser than forests."
  },
  {
    id: "ENV_019",
    subject: "Environment",
    topic: "Pollution & Waste",
    subtopic: "Eutrophication process",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to 'Eutrophication' of a water body, consider the following statements:",
    statements: [
      "It is primarily caused by run-off containing nitrates and phosphates from agricultural fields.",
      "It results in an increase in the Dissolved Oxygen (DO) levels of the water body.",
      "It causes dense growth of algae, leading to algal blooms that block sunlight."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "1 and 2 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 3 are correct. Statement 2 is incorrect: bacterial decay of algal blooms severely depletes oxygen."
  },
  {
    id: "ENV_020",
    subject: "Environment",
    topic: "International Conventions",
    subtopic: "Biodiversity Protocols",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the 'Cartagena Protocol' and 'Nagoya Protocol':",
    statements: [
      "Both protocols are supplementary agreements to the Convention on Biological Diversity (CBD).",
      "The Cartagena Protocol deals with biosafety regulations regarding Living Modified Organisms (LMOs).",
      "The Nagoya Protocol deals with Access to Genetic Resources and the Fair and Equitable Sharing of Benefits Arising from their Utilization (ABS)."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Both Cartagena (Biosafety) and Nagoya (ABS) stem from the parent CBD."
  },

  // ==================== HISTORY & CULTURE (20 Questions - From previous implementation) ====================
  {
    id: "HIS_001",
    subject: "History",
    topic: "Indus Valley Civilization",
    subtopic: "Harappan Metallurgy",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Indus Valley Civilization (IVC):",
    statements: [
      "Iron was widely used by the Harappans to manufacture agricultural tools.",
      "Harappan seals were mostly made of steatite and often carried animal motifs alongside pictographic script.",
      "Lothal was a major dockyard city located on the banks of the Bhogava River in Gujarat."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: Harappans belonged to the Bronze Age and did not know iron. Statement 2 and 3 are correct."
  },
  {
    id: "HIS_002",
    subject: "History",
    topic: "Buddhism & Jainism",
    subtopic: "Vedas rejection",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to the religious history of ancient India, which of the following is/are common to both Buddhism and Jainism?",
    statements: [
      "Avoidance of extremities of penance and enjoyment.",
      "Indifference to the authority of the Vedas.",
      "Denial of the efficacy of rituals."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: Buddhism advocates the Middle Path, whereas Jainism believes in extreme penance/Sallekhana. Statement 2 and 3 are correct."
  },
  {
    id: "HIS_003",
    subject: "History",
    topic: "Maurya & Gupta Empires",
    subtopic: "Megasthenes Indica",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding the administration under the Mauryan Empire, consider the following statements:",
    statements: [
      "Megasthenes, in his book 'Indica', mentions that Mauryan society was divided into seven classes.",
      "Kautilya's 'Arthashastra' permits the employment of spies (Gudhapurushas) but strictly forbids the use of female spies.",
      "Ashokan inscriptions are written in Brahmi, Kharosthi, Aramaic, and Greek scripts."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "2 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct (Indica's 7 classes). Statement 2 is incorrect: Kautilya explicitly describes using female spies. Statement 3 is correct."
  },
  {
    id: "HIS_004",
    subject: "History",
    topic: "Medieval Delhi Sultanate & Mughals",
    subtopic: "Sultanate Departments",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following administrative reforms introduced by Delhi Sultanate rulers:\n1. Introduction of 'Dagh' (branding of horses) and 'Chehra' (descriptive roll of soldiers) by Alauddin Khalji.\n2. Creation of a separate department for agriculture called 'Diwan-i-Kohi' by Muhammad bin Tughlaq.\n3. Establishment of a department of charity called 'Diwan-i-Khairat' by Firoz Shah Tughlaq.\n\nWhich of the above are correctly matched?",
    statements: [],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All matches are correct: Dagh/Chehra (Khalji), Diwan-i-Kohi (Muhammad Tughlaq), and Diwan-i-Khairat (Firoz Tughlaq)."
  },
  {
    id: "HIS_005",
    subject: "History",
    topic: "Bhakti & Sufi Movements",
    subtopic: "Sufi Silsilahs",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to Sufism in Indian history, which of the following practices were common among Sufi saints?",
    statements: [
      "Singing of devotional songs called Qawwali to induce ecstasy.",
      "Adoption of yogic breathing exercises (Pranayama).",
      "Strict avoidance of state patronage and royal association by all Sufi orders (Silsilahs)."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: Suhrawardy orders accepted state posts and gifts, unlike Chishtis."
  },
  {
    id: "HIS_006",
    subject: "History",
    topic: "Modern Indian National Movement",
    subtopic: "Bengal Partition Swadeshi",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding the Partition of Bengal (1905), which of the following statements is/are correct?",
    statements: [
      "It was implemented by Lord Curzon on the pretext of administrative convenience.",
      "The Swadeshi Movement was formally launched at the Town Hall of Calcutta in protest against this partition.",
      "Bengal was reunified in 1911 by Lord Hardinge to appease the nationalists, coinciding with the shift of the capital from Calcutta to Delhi."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Curzon split Bengal in 1905. Reunified at 1911 Delhi Durbar, shifting capital to Delhi."
  },
  {
    id: "HIS_007",
    subject: "History",
    topic: "Governor-Generals & Acts",
    subtopic: "Regulating Act 1773",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the Regulating Act of 1773:",
    statements: [
      "It was the first step towards centralization of administration in British India, making the Governors of Bombay and Madras subordinate to the Governor-General of Bengal.",
      "It provided for the establishment of a Supreme Court at Calcutta.",
      "It prohibited the servants of the East India Company from engaging in any private trade."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. First centralizing step (1), set up Supreme Court (2), banned private trade/bribes (3)."
  },
  {
    id: "HIS_008",
    subject: "History",
    topic: "Art & Architecture",
    subtopic: "Gandhara School Art",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding the Gandhara School of Art, which of the following statements is/are correct?",
    statements: [
      "It developed under the patronage of Kushana rulers, particularly Kanishka.",
      "It is also known as the Graeco-Buddhist school as it combined Greek style with Buddhist themes.",
      "Buddha was depicted in this school using blue schist and grey sandstone."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Patrons: Kushanas. Blended Greek carvings with Buddha images, using schist and sandstone."
  },
  {
    id: "HIS_009",
    subject: "History",
    topic: "Modern Indian National Movement",
    subtopic: "Simon Commission boycott",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "What was the main reason for the boycott of the Simon Commission in 1928 by the Indian National Congress and other political groups?",
    statements: [],
    options: [
      { id: "A", text: "It did not recommend the immediate grant of Dominion Status." },
      { id: "B", text: "It was an all-white commission with no Indian representation." },
      { id: "C", text: "It suggested the partition of Punjab and Bengal." },
      { id: "D", text: "It sought to ban the Indian National Congress." }
    ],
    correctAnswer: "B",
    explanation: "Simon Commission had 7 British MPs and 0 Indians, which was rejected by all domestic political fronts."
  },
  {
    id: "HIS_010",
    subject: "History",
    topic: "Vedic Period",
    subtopic: "Rigvedic Society",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "With reference to Rigvedic society, consider the following statements:",
    statements: [
      "The society was matriarchal, and daughters inherited property.",
      "There was no child marriage, and window remarriage was permitted.",
      "Soma was a drink consumed during sacrifices, while Sura was an intoxicating drink disapproved by priests."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: society was patrilineal and patriarchal. Statement 2 and 3 are correct."
  },
  {
    id: "HIS_011",
    subject: "History",
    topic: "Modern Indian National Movement",
    subtopic: "Gandhi Books",
    type: "Elimination-Based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following books/journals were written by Mahatma Gandhi?",
    statements: [
      "Hind Swaraj",
      "Harijan",
      "Young India",
      "Gitanjali"
    ],
    options: [
      { id: "A", text: "Only one of the above" },
      { id: "B", text: "Only two of the above" },
      { id: "C", text: "Only three of the above" },
      { id: "D", text: "All four of the above" }
    ],
    correctAnswer: "C",
    explanation: "Hind Swaraj, Harijan, and Young India were written/edited by Gandhi. Gitanjali was by Rabindranath Tagore. Exactly three."
  },
  {
    id: "HIS_012",
    subject: "History",
    topic: "Indus Valley Civilization",
    subtopic: "Harappan Town planning",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding Harappan town planning:",
    statements: [
      "Towns were laid out on a grid system with streets cutting at right angles.",
      "Burnt bricks were widely used for construction in both Harappa and Mohenjo-daro.",
      "Every house had its own courtyard, kitchen, and bathroom with drains connected to street sewers."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct: grids, fired clay bricks, and advanced household drainage connections."
  },
  {
    id: "HIS_013",
    subject: "History",
    topic: "Buddhism & Jainism",
    subtopic: "Buddhist Councils",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding the Buddhist Councils, which of the following matches is/are correct?\n1. First Council : Rajgriha (Patron: Ajatashatru)\n2. Second Council : Vaishali (Patron: Kalasoka)\n3. Third Council : Pataliputra (Patron: Ashoka)\n4. Fourth Council : Kashmir (Patron: Kanishka)",
    statements: [],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "2, 3 and 4 only" },
      { id: "C", text: "1, 2 and 4 only" },
      { id: "D", text: "1, 2, 3 and 4" }
    ],
    correctAnswer: "D",
    explanation: "All four councils and their respective patrons match correctly."
  },
  {
    id: "HIS_014",
    subject: "History",
    topic: "Maurya & Gupta Empires",
    subtopic: "Gupta administration terms",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "During the Gupta period, the terms 'Uparika' and 'Vishayapati' referred to which of the following?",
    statements: [],
    options: [
      { id: "A", text: "Provincial Governor and District Head respectively." },
      { id: "B", text: "Army Chief and Head of Espionage respectively." },
      { id: "C", text: "Royal Priest and Chief Justice respectively." },
      { id: "D", text: "Tax Collector and Treasury Superintendent respectively." }
    ],
    correctAnswer: "A",
    explanation: "In Gupta times, provinces (Bhuktis) were headed by Uparikas, and districts (Vishayas) by Vishayapatis."
  },
  {
    id: "HIS_015",
    subject: "History",
    topic: "Medieval Delhi Sultanate & Mughals",
    subtopic: "Akbar Mansabdari",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding the 'Mansabdari System' introduced by Akbar:",
    statements: [
      "Mansab denoted a rank or position held by an officer in the Mughal administrative hierarchy.",
      "The rank was divided into Zat (military size/salary) and Sawar (number of cavalrymen to be maintained).",
      "The Mansabdari rank was strictly hereditary, passing from father to son."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: Mansab was not hereditary and lapsed on death."
  },
  {
    id: "HIS_016",
    subject: "History",
    topic: "Modern Indian National Movement",
    subtopic: "Non Cooperation Movement",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding the Non-Cooperation Movement (1920-22), consider the following statements:",
    statements: [
      "The resolution for Non-Cooperation was approved at the Nagpur session of the Congress in 1920.",
      "The movement saw the first large-scale participation of peasants and workers in national struggle.",
      "Mahatma Gandhi suspended the movement in 1922 due to the violent Chauri Chaura incident."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Approved at Nagpur (1920), had mass peasant support, suspended in 1922 following Chauri Chaura violence."
  },
  {
    id: "HIS_017",
    subject: "History",
    topic: "Art & Architecture",
    subtopic: "Mauryan Pillars Sandstone",
    type: "Assertion-Reason",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Given below are two statements, one labeled as Assertion (A) and the other as Reason (R):\n\nAssertion (A): Ashokan pillars were carved out of single pieces of stone (monoliths).\nReason (R): They were made of chunar sandstone, quarried near Mirzapur, and polished to a mirror-like finish.",
    statements: [],
    options: [
      { id: "A", text: "Both A and R are true and R is the correct explanation of A." },
      { id: "B", text: "Both A and R are true but R is NOT the correct explanation of A." },
      { id: "C", text: "A is true but R is false." },
      { id: "D", text: "A is false but R is true." }
    ],
    correctAnswer: "B",
    explanation: "Both are true. Pillars are monolithic (A) and made of polished Chunar sandstone (R), but R is not the cause/explanation of monolith carving."
  },
  {
    id: "HIS_018",
    subject: "History",
    topic: "Governor-Generals & Acts",
    subtopic: "Charter Act 1833",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to the Charter Act of 1833, which of the following statements is/are correct?",
    statements: [
      "It ended the monopoly of the East India Company's tea trade and trade with China.",
      "It designated the Governor-General of Bengal as the Governor-General of India.",
      "It introduced a law member into the Governor-General's Council, with Lord Macaulay being the first law member."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Banned remaining trade monopolies (1), appointed Bentinck GG of India (2), Macaulay added as Law Member (3)."
  },
  {
    id: "HIS_019",
    subject: "History",
    topic: "Modern Indian National Movement",
    subtopic: "Ghadar Party Founders",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "During the Indian freedom struggle, who among the following founded the 'Ghadar Party' in San Francisco?",
    statements: [],
    options: [
      { id: "A", text: "Lala Har Dayal and Sohan Singh Bhakna" },
      { id: "B", text: "Bhagat Singh and Chandrashekhar Azad" },
      { id: "C", text: "Rash Behari Bose and Sachin Sanyal" },
      { id: "D", text: "Subhas Chandra Bose and Mohan Singh" }
    ],
    correctAnswer: "A",
    explanation: "Ghadar Party was set up in San Francisco (1913) by immigrant Punjabis led by Lala Har Dayal and Sohan Singh Bhakna."
  },
  {
    id: "HIS_020",
    subject: "History",
    topic: "Vedic Period",
    subtopic: "Magadhan Dynasties Chronology",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "What is the correct chronological sequence of the following dynasties in ancient India?\n1. Nanda Dynasty\n2. Haryanka Dynasty\n3. Shishunaga Dynasty\n4. Maurya Dynasty",
    statements: [],
    options: [
      { id: "A", text: "2 - 3 - 1 - 4" },
      { id: "B", text: "3 - 2 - 1 - 4" },
      { id: "C", text: "2 - 1 - 3 - 4" },
      { id: "D", text: "3 - 1 - 2 - 4" }
    ],
    correctAnswer: "A",
    explanation: "Haryanka Dynasty (~544 BCE) -> Shishunaga (~413 BCE) -> Nanda (~345 BCE) -> Maurya (~322 BCE). The sequence is 2-3-1-4."
  },

  // ==================== SCIENCE & TECHNOLOGY (20 Questions - NEW ADDITION) ====================
  {
    id: "SCI_001",
    subject: "Science",
    topic: "Space Technology",
    subtopic: "Cryogenic Engines",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to Cryogenic engines used in space launch vehicles, consider the following statements:",
    statements: [
      "They use liquid oxygen as the oxidizer and liquid hydrogen as the fuel.",
      "The fuels are stored at extremely high temperatures to prevent freezing in space.",
      "India's GSLV Mk III (LVM3) uses an indigenously developed cryogenic upper stage."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "1 and 3 only" },
      { id: "C", text: "3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is correct (liquid O2/H2). Statement 2 is incorrect: Cryogenics involves storing fuels at extremely low/sub-zero temperatures, not high. Statement 3 is correct (CE-20 indigenous engine)."
  },
  {
    id: "SCI_002",
    subject: "Science",
    topic: "Biotechnology",
    subtopic: "CRISPR Cas9",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "What is Cas9 protein, frequently mentioned in scientific news in the context of biotechnology?",
    statements: [],
    options: [
      { id: "A", text: "A molecular scissors used in targeted gene editing." },
      { id: "B", text: "A biosensor used to detect pathogen outbreaks in crops." },
      { id: "C", text: "A gene that makes agricultural crops drought-resistant." },
      { id: "D", text: "A vaccine adjuvant used to trigger immune response." }
    ],
    correctAnswer: "A",
    explanation: "Cas9 is a bacterial enzyme acting as a 'molecular scissors' that cuts DNA strands at specific locations specified by guide RNA (CRISPR system)."
  },
  {
    id: "SCI_003",
    subject: "Science",
    topic: "Information Technology",
    subtopic: "5G Technology bands",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding 5G cellular network technology:",
    statements: [
      "5G networks operate in three spectrum bands: Low, Mid, and High frequency bands.",
      "The High-band spectrum offers the highest speeds but has highly limited coverage area and penetration.",
      "5G technology offers lower latency compared to 4G LTE networks."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. 5G operates in 3 bands (1), High-band (millimeter wave) is fast but easily blocked by walls/rain (2), and latency decreases to under 1 millisecond (3)."
  },
  {
    id: "SCI_004",
    subject: "Science",
    topic: "Nanotechnology",
    subtopic: "Carbon Nanotubes",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to Carbon Nanotubes (CNTs), which of the following statements is/are correct?",
    statements: [
      "They can be used as carriers of drugs and antigens in the human body.",
      "They can be made into artificial blood capillaries for injured tissues.",
      "They can be used in chemical sensors to detect gas leakages."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Carbon nanotubes have high biocompatibility for drug delivery (1), capillary scaffolding (2), and gas adsorption sensing (3)."
  },
  {
    id: "SCI_005",
    subject: "Science",
    topic: "Defense Tech",
    subtopic: "Missile Systems",
    type: "Matching Type",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Consider the following pairs of Indian missiles and their categories:\n1. Astra : Beyond-Visual-Range Air-to-Air Missile\n2. Shaurya : Surface-to-Surface Tactical Missile\n3. Akash : Short-range Surface-to-Air Missile\n\nWhich of the pairs given above is/are correctly matched?",
    statements: [],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All pairs are correctly matched. Astra (BVR air-to-air), Shaurya (tactical solid-fuel surface-to-surface), and Akash (supersonic surface-to-air defence system)."
  },
  {
    id: "SCI_006",
    subject: "Science",
    topic: "Nuclear Science",
    subtopic: "Three Stage Nuclear Program",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "In India's three-stage nuclear power program, what is the primary role of Thorium-232 in the third stage?",
    statements: [],
    options: [
      { id: "A", text: "It is directly used as a fissile fuel in pressurized heavy water reactors." },
      { id: "B", text: "It is transmuted into fissile Uranium-233 using a breeder reactor blanket." },
      { id: "C", text: "It acts as a coolant and moderator in fast breeder reactors." },
      { id: "D", text: "It is used as control rods to absorb excess thermal neutrons." }
    ],
    correctAnswer: "B",
    explanation: "Thorium-232 is fertile, not fissile. In the 3rd stage, Thorium-232 is placed as a blanket in breeder reactors to capture neutrons and transmute into fissile Uranium-233, which then powers the reactor."
  },
  {
    id: "SCI_007",
    subject: "Science",
    topic: "Biotechnology",
    subtopic: "Three Parent Baby",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "In the context of modern medicine, 'Mitochondrial Replacement Therapy' (MRT) is used for which of the following?",
    statements: [],
    options: [
      { id: "A", text: "Preventing inheritance of mitochondrial diseases from mother to offspring." },
      { id: "B", text: "Cloning transgenic animals for pharmaceutical testing." },
      { id: "C", text: "Treating chronic diabetes and obesity in adults." },
      { id: "D", text: "In-vitro production of artificial human organs." }
    ],
    correctAnswer: "A",
    explanation: "MRT (producing a 'three-parent baby') replaces damaged maternal mitochondrial DNA with healthy donor mitochondria before or during IVF to prevent passing genetic diseases to children."
  },
  {
    id: "SCI_008",
    subject: "Science",
    topic: "Information Technology",
    subtopic: "LiFi Technology",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Li-Fi' (Light Fidelity) technology, consider the following statements:",
    statements: [
      "It uses light-emitting diodes (LEDs) for the transmission of wireless data.",
      "It can transmit data at speeds significantly higher than conventional Wi-Fi.",
      "Unlike Wi-Fi, Li-Fi signals can easily penetrate solid concrete walls."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: because Li-Fi uses visible light spectrum, it cannot pass through opaque solid walls, making it highly secure but local."
  },
  {
    id: "SCI_009",
    subject: "Science",
    topic: "Physics",
    subtopic: "Gravitational Waves",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following astronomical events are capable of generating detectable Gravitational Waves?",
    statements: [
      "Collision of two black holes.",
      "Merger of binary neutron stars.",
      "Supernova explosions of massive stars."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All listed events are highly energetic, asymmetric cataclysms that warp spacetime fabric and release detectable gravitational ripples."
  },
  {
    id: "SCI_010",
    subject: "Science",
    topic: "Defense Tech",
    subtopic: "Scramjet Engines",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "What is the key structural difference between a Ramjet engine and a Scramjet engine?",
    statements: [],
    options: [
      { id: "A", text: "Ramjets use solid propellants, whereas Scramjets use cryogenic liquid fuel." },
      { id: "B", text: "Ramjets operate at subsonic combustion speeds, while Scramjets maintain supersonic combustion inside the engine." },
      { id: "C", text: "Ramjets require oxidizer tanks, whereas Scramjets are air-breathing." },
      { id: "D", text: "Ramjets have moving turbines, whereas Scramjets have no moving parts." }
    ],
    correctAnswer: "B",
    explanation: "Both are turbine-less air-breathing systems. The difference lies in combustion airflow: Ramjets slow incoming air to subsonic speeds, while Scramjets burn fuel in supersonic airflow (Supersonic Combustion Ramjet)."
  },
  {
    id: "SCI_011",
    subject: "Science",
    topic: "Information Technology",
    subtopic: "Quantum Computing qubits",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Regarding 'Quantum Computing', which of the following statements is/are correct?",
    statements: [
      "While classical computers store data as bits (0 or 1), quantum computers use qubits which can represent both states simultaneously.",
      "The principle of 'superposition' allows qubits to exist in multiple states at once.",
      "The principle of 'entanglement' links the states of two qubits regardless of the distance between them."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Qubits leverage quantum mechanics (superposition and entanglement) to calculate massive parallel combinations."
  },
  {
    id: "SCI_012",
    subject: "Science",
    topic: "Space Technology",
    subtopic: "Orbits types",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Consider the following statements regarding satellite orbits:",
    statements: [
      "A Geostationary orbit (GEO) is a circular orbit directly above the Earth's equator with a period of 24 hours.",
      "Polar orbits are low-altitude orbits that pass over or near both geographical poles of the Earth.",
      "Satellites in Geostationary orbits appear fixed relative to an observer on the Earth's surface."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. GEO orbital sync matches Earth's rotation (1,3). Polar orbits cross poles at LEO heights (2)."
  },
  {
    id: "SCI_013",
    subject: "Science",
    topic: "Biotechnology",
    subtopic: "Monoclonal Antibodies",
    type: "Conceptual Application",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "What are 'Monoclonal Antibodies' (mAbs) used in modern disease therapeutics?",
    statements: [],
    options: [
      { id: "A", text: "Laboratory-made proteins designed to mimic the immune system's ability to fight off specific pathogens." },
      { id: "B", text: "Weakened forms of viruses injected to trigger long-term active immunity." },
      { id: "C", text: "Enzymes that break down antibiotic-resistant bacterial cell walls." },
      { id: "D", text: "Transgenic microbes that synthesize insulin inside human intestines." }
    ],
    correctAnswer: "A",
    explanation: "mAbs are cloned laboratory-engineered proteins designed to bind specifically to target antigens (like cancer cells or spike proteins) and neutralize them."
  },
  {
    id: "SCI_014",
    subject: "Science",
    topic: "Information Technology",
    subtopic: "Blockchain features",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to 'Blockchain' technology, consider the following statements:",
    statements: [
      "It is a decentralized, distributed ledger that records transactions across a network of computers.",
      "Once data is recorded in a block, it cannot be retroactively altered without changing all subsequent blocks.",
      "Blockchain transactions require authorization by a central clearinghouse bank."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct (distributed ledger, immutable hashes). Statement 3 is incorrect: blockchain works strictly peer-to-peer without central clearing authority."
  },
  {
    id: "SCI_015",
    subject: "Science",
    topic: "IP Rights",
    subtopic: "Patents Acts",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Patents' in India, which of the following statements is/are correct?",
    statements: [
      "Patents in India are governed by the Patents Act, 1970.",
      "Both product patents and process patents are granted in all fields of technology including pharmaceuticals.",
      "The standard term of a patent in India is 20 years from the date of filing."
    ],
    options: [
      { id: "A", text: "1 and 3 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 2 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Governed by 1970 Act, TRIPS agreement alignment in 2005 introduced product patents for medicines, and term is 20 years."
  },
  {
    id: "SCI_016",
    subject: "Science",
    topic: "Space Technology",
    subtopic: "James Webb Telescope",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following orbits does the James Webb Space Telescope (JWST) occupy?",
    statements: [],
    options: [
      { id: "A", text: "Low Earth Orbit (LEO)" },
      { id: "B", text: "Geostationary Transfer Orbit (GTO)" },
      { id: "C", text: "Second Lagrange Point (L2) orbit" },
      { id: "D", text: "Heliosynchronus Polar Orbit" }
    ],
    correctAnswer: "C",
    explanation: "JWST operates at L2, located 1.5 million km from Earth, keeping it shielded from solar radiation and aligned with Earth's orbit."
  },
  {
    id: "SCI_017",
    subject: "Science",
    topic: "Physics",
    subtopic: "Standard Model",
    type: "Assertion-Reason",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Given below are two statements, one labeled as Assertion (A) and the other as Reason (R):\n\nAssertion (A): The Higgs Boson is known as the 'God Particle'.\nReason (R): It is the elementary particle in the Standard Model that gives mass to other particles through its associated field.",
    statements: [],
    options: [
      { id: "A", text: "Both A and R are true and R is the correct explanation of A." },
      { id: "B", text: "Both A and R are true but R is NOT the correct explanation of A." },
      { id: "C", text: "A is true but R is false." },
      { id: "D", text: "A is false but R is true." }
    ],
    correctAnswer: "A",
    explanation: "Both are true. It was nicknamed the God Particle because its associated field (Higgs field) is responsible for giving mass to fundamental particles."
  },
  {
    id: "SCI_018",
    subject: "Science",
    topic: "Biotechnology",
    subtopic: "Stem Cells therapy",
    type: "Statement-based",
    difficulty: "Standard",
    sourceType: "Static Bank",
    question: "Regarding 'Stem Cells', which of the following statements is/are correct?",
    statements: [
      "They have the unique ability to self-renew and differentiate into specialized cell types.",
      "Pluripotent stem cells can differentiate into any cell type in the adult body.",
      "Stem cells can only be sourced from human embryos."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: stem cells are also found in adult tissues (bone marrow) and can be induced in labs (iPSCs)."
  },
  {
    id: "SCI_019",
    subject: "Science",
    topic: "Information Technology",
    subtopic: "AI models",
    type: "Statement-based",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "With reference to 'Deep Learning', a subset of Artificial Intelligence, consider the following statements:",
    statements: [
      "It is based on artificial neural networks inspired by the structure of the human brain.",
      "It requires large amounts of labeled data for training compared to traditional machine learning.",
      "Deep learning models can automatically extract features from raw data without manual feature engineering."
    ],
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "D",
    explanation: "All statements are correct. Deep learning uses neural stacks (1), is data-hungry (2), and automates feature extraction (3)."
  },
  {
    id: "SCI_020",
    subject: "Science",
    topic: "Nanotechnology",
    subtopic: "Graphene properties",
    type: "Conceptual Application",
    difficulty: "UPSC",
    sourceType: "Static Bank",
    question: "Which of the following represents a key characteristic of 'Graphene'?",
    statements: [],
    options: [
      { id: "A", text: "A single layer of carbon atoms arranged in a two-dimensional honeycomb lattice." },
      { id: "B", text: "A three-dimensional crystal structure of silicon dioxide." },
      { id: "C", text: "An alloy of titanium and copper used in supercomputing." },
      { id: "D", text: "A bio-degradable plastic polymer used in drug delivery." }
    ],
    correctAnswer: "A",
    explanation: "Graphene is a 2D allotrope of carbon, one atom thick, configured in a honeycomb lattice, displaying exceptional strength and conductivity."
  }
];

// UPSC PYQ Bank (20 Questions - 2018-2024 Prelims)
const UPSC_PYQ_BANK = [
  {
    id: "PYQ_2024_01",
    year: 2024,
    subject: "Polity",
    topic: "Fundamental Rights",
    subtopic: "Article 21",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Fundamental Rights", "Right to Privacy", "Basic Structure"],
    question: "Under the Indian Constitution, the 'Right to Privacy' is protected as an intrinsic part of the Right to Life and Personal Liberty. Which of the following Articles represents this protection?",
    options: [
      { id: "A", text: "Article 14" },
      { id: "B", text: "Article 19" },
      { id: "C", text: "Article 21" },
      { id: "D", text: "Article 29" }
    ],
    correctAnswer: "C",
    explanation: "In the landmark K.S. Puttaswamy v. Union of India case (2017), the Supreme Court ruled unanimously that the Right to Privacy is a fundamental right guaranteed under Article 21 (Right to Life and Personal Liberty) and Part III of the Constitution."
  },
  {
    id: "PYQ_2024_02",
    year: 2024,
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "MCLR Rates",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Monetary Policy", "Banking transmission", "Inflation control"],
    question: "With reference to the Marginal Cost of Funds Based Lending Rate (MCLR) introduced by the RBI, which of the following statements is/are correct?\n1. MCLR is an internal benchmark rate used by banks to determine interest rates on loans.\n2. It helps improve the transmission of policy rates into lending rates of banks.",
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ],
    correctAnswer: "C",
    explanation: "Both statements are correct. MCLR is the internal benchmark rate (1) introduced in 2016 to ensure banking rates reflect RBI repo changes faster and improve policy transmission (2)."
  },
  {
    id: "PYQ_2023_01",
    year: 2023,
    subject: "Geography",
    topic: "Climatology",
    subtopic: "Monsoon Mechanisms",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Monsoon", "El Nino", "Indian Ocean Dipole"],
    question: "With reference to the 'Indian Ocean Dipole' (IOD), sometimes mentioned in the news while forecasting monsoons, which of the following statements is/are correct?\n1. IOD phenomenon is characterized by a difference in sea surface temperature between tropical Western Indian Ocean and tropical Eastern Pacific Ocean.\n2. An IOD phenomenon can influence an El Nino's impact on the monsoon.",
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ],
    correctAnswer: "B",
    explanation: "Statement 1 is incorrect: IOD is defined by temperature differences between the Western and Eastern Indian Ocean (not Pacific). Statement 2 is correct: A positive IOD can offset El Nino dry phases and bolster monsoon rains."
  },
  {
    id: "PYQ_2023_02",
    year: 2023,
    subject: "Environment",
    topic: "Biodiversity",
    subtopic: "Wetland Sinks",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Biodiversity", "Ramsar Wetlands", "Ecosystem Dynamics"],
    question: "Consider the following statements:\n1. Under the Ramsar Convention, it is mandatory on the part of the Government of India to protect all wetlands in the territory of India.\n2. The Wetlands (Conservation and Management) Rules, 2010, were framed by the Government of India based on the recommendations of the Ramsar Convention.",
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ],
    correctAnswer: "D",
    explanation: "Both statements are incorrect. Under Ramsar, countries designate specific wetlands of international importance (Ramsar sites), not all wetlands are mandated (1). The 2010 rules were framed under the Environment Protection Act 1986, not directly as a Ramsar directive (2)."
  },
  {
    id: "PYQ_2022_01",
    year: 2022,
    subject: "History",
    topic: "Indus Valley Civilization",
    subtopic: "Water Management",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Indus Valley Civilization", "Water Reservoirs", "Harappan Cities"],
    question: "Which one of the following ancient towns is well-known for its elaborate system of water harvests and storage by constructing a series of dams and channeling water into connected reservoirs?",
    options: [
      { id: "A", text: "Dholavira" },
      { id: "B", text: "Kalibangan" },
      { id: "C", text: "Lothal" },
      { id: "D", text: "Rakhigarhi" }
    ],
    correctAnswer: "A",
    explanation: "Dholavira in Rann of Kutch (Gujarat) is famous for its sophisticated water engineering system, featuring massive stone-cut reservoirs and elaborate check-dam channels."
  },
  {
    id: "PYQ_2022_02",
    year: 2022,
    subject: "Polity",
    topic: "Constitutional Bodies",
    subtopic: "Attorney General",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Constitutional Bodies", "Parliament Proceedings", "Executive Powers"],
    question: "Consider the following statements regarding the Attorney General of India:\n1. The Attorney General is appointed by the President under Article 76.\n2. The Attorney General has the right of audience in all courts in India.\n3. The Attorney General can vote in the proceedings of either House of Parliament.",
    options: [
      { id: "A", text: "1 and 2 only" },
      { id: "B", text: "2 and 3 only" },
      { id: "C", text: "1 and 3 only" },
      { id: "D", text: "1, 2 and 3" }
    ],
    correctAnswer: "A",
    explanation: "Statement 1 and 2 are correct. Statement 3 is incorrect: under Article 88, the AG can speak and take part in Parliament committees but has no right to vote."
  },
  {
    id: "PYQ_2021_01",
    year: 2021,
    subject: "Economy",
    topic: "Fiscal Policy",
    subtopic: "Govt debt",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Fiscal Policy", "Public Debt", "FRBM targets"],
    question: "With reference to the public debt in India, consider the following statements:\n1. The central government's debt constitutes more than 90% of the total public debt of India.\n2. Under the Constitution, State Governments have the power to borrow directly from external markets without Union consent.",
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ],
    correctAnswer: "D",
    explanation: "Both statements are incorrect. Central debt is ~60% of total public debt, with states comprising the rest (1). Under Article 293, states cannot borrow externally, and must obtain Union consent if they have outstanding central loans (2)."
  },
  {
    id: "PYQ_2021_02",
    year: 2021,
    subject: "Science",
    topic: "Biotechnology",
    subtopic: "DNA technology",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Biotechnology", "Recombinant DNA", "Vaccine types"],
    question: "With reference to recombinant vector vaccines, consider the following statements:\n1. Genetic engineering is applied in the development of these vaccines.\n2. Bacteria or viruses are used as vectors to carry the desired antigen gene.",
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ],
    correctAnswer: "C",
    explanation: "Both statements are correct. Recombinant vector vaccines use genetic engineering to modify a harmless carrier virus/bacteria to express antigen proteins of a target pathogen (like adenovirus vectors in Covishield)."
  },
  {
    id: "PYQ_2020_01",
    year: 2020,
    subject: "Polity",
    topic: "Judiciary",
    subtopic: "Basic Structure",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Judiciary", "Basic Structure", "Judicial Review"],
    question: "Consider the following statements:\n1. The Constitution of India defines its 'basic structure' in terms of federalism, secularism, fundamental rights and democracy.\n2. The Constitution of India provides for 'judicial review' under Article 368 specifically.",
    options: [
      { id: "A", text: "1 only" },
      { id: "B", text: "2 only" },
      { id: "C", text: "Both 1 and 2" },
      { id: "D", text: "Neither 1 nor 2" }
    ],
    correctAnswer: "D",
    explanation: "Both statements are incorrect. 'Basic Structure' is a judicial innovation from the Kesavananda Bharati case (1973) and is not defined in the constitution (1). Judicial review is a power derived from Articles 13, 32, 131-136, 226, and is not defined under Article 368 (2)."
  },
  {
    id: "PYQ_2020_02",
    year: 2020,
    subject: "Environment",
    topic: "Biodiversity",
    subtopic: "Critical Tiger Habitats",
    difficulty: "UPSC",
    sourceType: "UPSC PYQ",
    conceptMapping: ["Biodiversity", "Tiger Reserves", "Forest Rights Act"],
    question: "Which of the following protected areas is well-known for the conservation of a sub-species of the Indian Swamp Deer (Barasingha), that thrives well on hard ground and is exclusively graminivorous?",
    options: [
      { id: "A", text: "Kanha National Park" },
      { id: "B", text: "Manas National Park" },
      { id: "C", text: "Mudumalai Wildlife Sanctuary" },
      { id: "D", text: "Tal Chhapar Sanctuary" }
    ],
    correctAnswer: "A",
    explanation: "Kanha National Park in Madhya Pradesh is famous for saving the hard-ground barasingha (swamp deer) from extinction through active habitat management."
  }
];

// Generative Concept Ontology (60 Concept Nodes)
// Used by the Generative AI Engine to construct unlimited unique questions dynamically
const UPSC_CONCEPT_ONTOLOGY = [
  // polity concepts
  {
    id: "ONT_POL_001",
    subject: "Polity",
    topic: "Fundamental Rights",
    subtopic: "Article 19",
    difficulty: "Standard",
    statementTrue: "Freedom of speech and expression includes the right to remain silent and the freedom of press.",
    statementFalse: "The Constitution provides absolute, restriction-free freedom of speech and expression to all citizens.",
    explanationTrue: "The Supreme Court has interpreted Article 19(1)(a) to include freedom of the press, the right to silences, and the right to information.",
    explanationFalse: "Article 19(2) explicitly subjects freedom of speech to reasonable restrictions (public order, security of state, morality), meaning it is not absolute."
  },
  {
    id: "ONT_POL_002",
    subject: "Polity",
    topic: "Parliament",
    subtopic: "Rajya Sabha powers",
    difficulty: "UPSC",
    statementTrue: "The Rajya Sabha has the exclusive power to authorize the Parliament to create new All-India Services under Article 312.",
    statementFalse: "The Rajya Sabha has equal powers with the Lok Sabha in approving Money Bills and voting on Demands for Grants.",
    explanationTrue: "Under Article 312, if Rajya Sabha passes a resolution supported by 2/3 of members present and voting, Parliament can create new All-India Services.",
    explanationFalse: "Under Article 110/113, Money Bills and demands for grants are the exclusive override domains of the Lok Sabha; Rajya Sabha cannot reject or vote on them."
  },
  {
    id: "ONT_POL_003",
    subject: "Polity",
    topic: "Federalism",
    subtopic: "Interstate Council",
    difficulty: "Standard",
    statementTrue: "The Inter-State Council is a constitutional body established by the President under Article 263 of the Constitution.",
    statementFalse: "The Inter-State Council is chaired by the President of India and features only governors of Union Territories.",
    explanationTrue: "Article 263 empowers the President to establish the Inter-State Council to investigate and discuss disputes between states.",
    explanationFalse: "The Inter-State Council is chaired by the Prime Minister (not President) and features Chief Ministers of all states as members."
  },
  {
    id: "ONT_POL_004",
    subject: "Polity",
    topic: "Judiciary",
    subtopic: "High Court Writs",
    difficulty: "UPSC",
    statementTrue: "The writ jurisdiction of High Courts under Article 226 is wider than that of the Supreme Court under Article 32.",
    statementFalse: "The Supreme Court can issue writs for the enforcement of fundamental rights and ordinary legal rights alike.",
    explanationTrue: "High Courts can issue writs for both fundamental rights and ordinary legal rights, whereas the Supreme Court under Article 32 can only issue writs for fundamental rights.",
    explanationFalse: "Under Article 32, the Supreme Court's writ power is strictly restricted to the enforcement of Fundamental Rights (Part III) only."
  },
  {
    id: "ONT_POL_005",
    subject: "Polity",
    topic: "Constitutional Bodies",
    subtopic: "UPSC member removal",
    difficulty: "UPSC",
    statementTrue: "The President removes members of the Union Public Service Commission only after the Supreme Court conducts an inquiry and recommends removal.",
    statementFalse: "Members of the UPSC hold office during the pleasure of the President and can be dismissed without any judicial reference.",
    explanationTrue: "Under Article 317, for cases of misbehaviour, the President must refer the matter to the Supreme Court. The SC's advice is binding on the President.",
    explanationFalse: "UPSC members have security of tenure. Removal for misbehaviour requires a mandatory Supreme Court reference inquiry under Article 317."
  },

  // economy concepts
  {
    id: "ONT_ECO_001",
    subject: "Economy",
    topic: "Inflation",
    subtopic: "Cost-push inflation",
    difficulty: "Standard",
    statementTrue: "Cost-push inflation is triggered by increases in input prices such as crude oil, raw materials, or wages.",
    statementFalse: "An increase in household disposable income directly triggers cost-push inflation in manufacturing.",
    explanationTrue: "Supply-side shocks, like rising fuel prices or wages, push up production costs, causing cost-push inflation.",
    explanationFalse: "Increases in disposable income expand aggregate demand, causing demand-pull inflation (not cost-push)."
  },
  {
    id: "ONT_ECO_002",
    subject: "Economy",
    topic: "Monetary Policy",
    subtopic: "Repo Rate mechanisms",
    difficulty: "Standard",
    statementTrue: "When the RBI increases the repo rate, commercial borrowing becomes costlier, helping check excess liquidity and inflation.",
    statementFalse: "Lowering the repo rate encourages commercial banks to lock their excess reserves with the RBI, reducing market circulation.",
    explanationTrue: "Repo rate hikes increase bank borrowing costs, which transfers into higher interest rates for consumers, lowering spending.",
    explanationFalse: "Lowering repo rates makes borrowing cheaper, expanding credit and injecting liquidity. Locking reserves is done via Reverse Repo."
  },
  {
    id: "ONT_ECO_003",
    subject: "Economy",
    topic: "Banking System",
    subtopic: "Priority Sector Lending",
    difficulty: "UPSC",
    statementTrue: "Domestic commercial banks are mandated to allocate 40% of their Adjusted Net Bank Credit (ANBC) to Priority Sector Lending.",
    statementFalse: "Foreign banks operating in India are completely exempt from any Priority Sector Lending (PSL) requirements.",
    explanationTrue: "RBI guidelines mandate 40% of ANBC (or credit equivalent of off-balance sheet exposure) for priority sector targets in domestic commercial banks.",
    explanationFalse: "Foreign banks with 20 or more branches have the same 40% PSL target as domestic banks, phased in over time."
  },
  {
    id: "ONT_ECO_004",
    subject: "Economy",
    topic: "Fiscal Policy",
    subtopic: "Capital vs Revenue Expenditure",
    difficulty: "Standard",
    statementTrue: "Capital expenditure creates assets or reduces liabilities, whereas revenue expenditure does not result in asset creation.",
    statementFalse: "Salaries and pensions paid to government employees are classified as capital expenditure because they enhance human resources.",
    explanationTrue: "Capital spending (roads, schools, debt repayments) yields future returns. Revenue spending (interest, salaries) covers regular consumption.",
    explanationFalse: "Salaries and pensions are recurring operational costs that do not build physical/financial assets, classifying them as Revenue Expenditure."
  },
  {
    id: "ONT_ECO_005",
    subject: "Economy",
    topic: "Balance of Payments",
    subtopic: "Current Account Convertibility",
    difficulty: "UPSC",
    statementTrue: "India has achieved full convertibility on the current account, but maintains partial convertibility on the capital account.",
    statementFalse: "The Indian Rupee is fully convertible on both current and capital accounts under FEMA guidelines.",
    explanationTrue: "Since 1994, the rupee is fully convertible for trade/services (current account). Capital account transactions remain highly regulated.",
    explanationFalse: "Capital account transactions are only partially convertible to prevent massive capital flights during global market shocks."
  },

  // geography concepts
  {
    id: "ONT_GEO_001",
    subject: "Geography",
    topic: "Monsoon",
    subtopic: "Jet Streams impact",
    difficulty: "UPSC",
    statementTrue: "The withdrawal of the sub-tropical westerly jet stream from the Indian plains is essential for the onset of the Southwest Monsoon.",
    statementFalse: "The westerly jet stream remains stationed over northern India throughout the summer to pull monsoon winds from the south.",
    explanationTrue: "The westerly jet must shift north of Tibet, allowing the easterly jet stream and thermal low pressure to establish over northern India.",
    explanationFalse: "If the westerly jet does not retreat north of the Himalayas, the low-pressure trough cannot develop, delaying the monsoon onset."
  },
  {
    id: "ONT_GEO_002",
    subject: "Geography",
    topic: "Ocean Currents",
    subtopic: "Upwelling effect",
    difficulty: "Standard",
    statementTrue: "Cold ocean upwelling zones carry nutrient-rich deep waters to the surface, forming major commercial fishing grounds.",
    statementFalse: "Ocean upwelling typically occurs along the eastern boundaries of warm tropical oceans where thermal density is low.",
    explanationTrue: "Upwelling brings nitrates and phosphates to surface light zones, triggering phytoplankton growth which attracts massive fish schools.",
    explanationFalse: "Upwelling zones are driven by offshore winds, mostly along the western margins of continents washed by cold boundary currents."
  },
  {
    id: "ONT_GEO_003",
    subject: "Geography",
    topic: "Geomorphology",
    subtopic: "Continental Drift",
    difficulty: "Standard",
    statementTrue: "Wegener's continental drift theory cited the jigsaw fit of coastlines, fossil distribution, and glacial tillites as primary evidence.",
    statementFalse: "Alfred Wegener proposed that seafloor spreading was the primary driving force behind continental movements.",
    explanationTrue: "Wegener's evidence focused on geological fits (SA and Africa), fossils (Mesosaurus), and carboniferous tillite beds in Gondwana lands.",
    explanationFalse: "Wegener could not explain the mechanism of drift. Seafloor spreading was proposed much later by Harry Hess in the 1960s."
  },
  {
    id: "ONT_GEO_004",
    subject: "Geography",
    topic: "Climatology",
    subtopic: "Tropical Cyclones structure",
    difficulty: "UPSC",
    statementTrue: "The 'eye' of a tropical cyclone is a calm zone of descending air, characterized by exceptionally low pressure and clear skies.",
    statementFalse: "The eye wall of a cyclone has the lowest wind speeds and highest precipitation rates in the entire storm system.",
    explanationTrue: "The central eye has descending air currents which suppress cloud formation, leading to calm winds and clear skies at the pressure minimum.",
    explanationFalse: "The eye wall (surrounding the eye) has the most violent ascending winds, thickest cumulonimbus clouds, and heaviest rainfall."
  },

  // environment concepts
  {
    id: "ONT_ENV_001",
    subject: "Environment",
    topic: "Ecology",
    subtopic: "Trophic levels efficiency",
    difficulty: "Standard",
    statementTrue: "Food chains rarely exceed 4 to 5 trophic levels due to the progressive loss of energy at each successive link.",
    statementFalse: "The energy pyramid can be inverted in aquatic ecosystems because zooplankton outnumber phytoplankton.",
    explanationTrue: "Energy decreases by 90% at each step. By the 5th level, the energy residual is too low to support a viable predator population.",
    explanationFalse: "While biomass pyramids can be inverted in oceans, the Energy Pyramid is ALWAYS upright, obeying thermodynamics."
  },
  {
    id: "ONT_ENV_002",
    subject: "Environment",
    topic: "Biodiversity",
    subtopic: "Biosphere reserve zones",
    difficulty: "Standard",
    statementTrue: "The 'Core Area' of a biosphere reserve is legally protected and strictly kept free from human interference.",
    statementFalse: "Tourism, commercial research, and human settlements are actively encouraged within the Core Zone of a biosphere reserve.",
    explanationTrue: "The Core Zone is a strictly protected ecosystem used for non-disruptive monitoring, keeping nature wild and secure.",
    explanationFalse: "Human activity, tourism, and research are restricted to the Buffer and Transition zones; core zones forbid human entry."
  },
  {
    id: "ONT_ENV_003",
    subject: "Environment",
    topic: "Climate Change",
    subtopic: "Carbon offsets trading",
    difficulty: "UPSC",
    statementTrue: "The clean development mechanism (CDM) of the Kyoto Protocol allowed developed countries to meet emission targets by funding green projects in developing nations.",
    statementFalse: "Under the Paris Agreement, only developed countries are required to submit Nationally Determined Contributions (NDCs) for carbon cuts.",
    explanationTrue: "CDM (Article 12 of Kyoto) enabled certified emission reduction credits (CERs) trading from projects in developing countries.",
    explanationFalse: "The Paris Agreement requires all signatories (both developed and developing nations) to submit and update NDCs every 5 years."
  },
  {
    id: "ONT_ENV_004",
    subject: "Environment",
    topic: "Pollution & Waste",
    subtopic: "Bioremediation methods",
    difficulty: "UPSC",
    statementTrue: "Phytoremediation is a bioremediation process where plants are used to absorb, accumulate, and detoxify soil pollutants.",
    statementFalse: "Bioremediation is only effective for heavy metals and cannot degrade organic pollutants like petroleum hydrocarbons.",
    explanationTrue: "Plants act as natural filters, extracting heavy metals and toxins from contaminated groundwater/soil (phytoremediation).",
    explanationFalse: "Microorganisms are highly effective at breaking down complex organic hydrocarbons (petroleum, solvents) into harmless CO2 and water."
  },

  // history concepts
  {
    id: "ONT_HIS_001",
    subject: "History",
    topic: "Indus Valley Civilization",
    subtopic: "Harappan Agriculture",
    difficulty: "Standard",
    statementTrue: "The Harappans cultivated wheat, barley, peas, and sesame, and were the earliest known producers of cotton.",
    statementFalse: "The Harappan civilization had no knowledge of irrigation and relied entirely on seasonal rainfall.",
    explanationTrue: "Agricultural remains show extensive wheat/barley production, and Greek texts references Harappan cotton as 'Sindon'.",
    explanationFalse: "Harappans used stone/canals for water storage and irrigation (evidence at Dholavira and Shortughai in Afghanistan)."
  },
  {
    id: "ONT_HIS_002",
    subject: "History",
    topic: "Buddhism & Jainism",
    subtopic: "Eightfold Path",
    difficulty: "Standard",
    statementTrue: "Buddhism's Ashtangika Marga (Eightfold Path) is designed to eliminate desire (Tanha) and achieve Nirvana.",
    statementFalse: "The Eightfold Path requires extreme self-mortification, complete physical isolation, and starvation.",
    explanationTrue: "The Eightfold Path focuses on ethical conduct, mental discipline, and wisdom as the Middle Path to end suffering.",
    explanationFalse: "Buddha rejected extreme asceticism (which he tried) and recommended the Middle Path, avoiding both luxury and starvation."
  },
  {
    id: "ONT_HIS_003",
    subject: "History",
    topic: "Maurya & Gupta Empires",
    subtopic: "Ashokan Rock Edicts",
    difficulty: "UPSC",
    statementTrue: "Ashoka's Major Rock Edict XIII provides a detailed account of the Kalinga War and his conversion to Dhamma.",
    statementFalse: "Ashokan edicts were written exclusively in Sanskrit and aimed only at the Brahmanical priestly class.",
    explanationTrue: "Major Rock Edict 13 describes the slaughter of the Kalinga war, Ashoka's deep remorse, and his adoption of Dhamma-vijaya.",
    explanationFalse: "Edicts were written in Prakrit, Greek, and Aramaic using Brahmi/Kharosthi scripts to communicate directly with common masses."
  },
  {
    id: "ONT_HIS_004",
    subject: "History",
    topic: "Medieval Delhi Sultanate & Mughals",
    subtopic: "Iqta Land System",
    difficulty: "UPSC",
    statementTrue: "The Iqta system was a land revenue assignment method introduced in India by the Delhi Sultanate rulers.",
    statementFalse: "The holders of Iqtas (Muqtis) were granted hereditary ownership rights over the assigned lands.",
    explanationTrue: "Iltutmish formalized the Iqta system, assigning agricultural revenues to officers in lieu of salary for military maintenance.",
    explanationFalse: "Iqtas were non-hereditary revenue assignments. The state could transfer Muqtis between regions to prevent local power bases."
  },

  // science concepts
  {
    id: "ONT_SCI_001",
    subject: "Science",
    topic: "Space Technology",
    subtopic: "GPS and NavIC",
    difficulty: "Standard",
    statementTrue: "NavIC is India's regional satellite navigation system, providing coverage over India and up to 1500 km beyond its borders.",
    statementFalse: "NavIC is a global positioning system that utilizes a constellation of 24 geostationary satellites.",
    explanationTrue: "NavIC (IRNSS) is regional, using 7 satellites (3 geostationary, 4 geosynchronous) to cover India and neighborhood.",
    explanationFalse: "NavIC is regional (not global) and uses a constellation of 7 satellites, unlike GPS which is global and uses 24+ satellites."
  },
  {
    id: "ONT_SCI_002",
    subject: "Science",
    topic: "Biotechnology",
    subtopic: "RNA Vaccines",
    difficulty: "UPSC",
    statementTrue: "mRNA vaccines work by introducing a synthetic slice of messenger RNA that instructs cells to manufacture a target viral protein.",
    statementFalse: "mRNA vaccines physically alter the host cell's nuclear DNA to produce lifelong genetic immunity.",
    explanationTrue: "mRNA provides ribosomes with blueprints to make the spike protein. The immune system detects the protein and builds antibodies.",
    explanationFalse: "mRNA does not enter the cell nucleus and cannot merge with or alter human genomic DNA; it degrades quickly after protein synthesis."
  },
  {
    id: "ONT_SCI_003",
    subject: "Science",
    topic: "Nanotechnology",
    subtopic: "Graphene structures",
    difficulty: "Standard",
    statementTrue: "Graphene is a single, two-dimensional layer of carbon atoms characterized by high electrical conductivity and tensile strength.",
    statementFalse: "Graphene is an excellent thermal insulator, completely blocking heat transfer in electronic microchips.",
    explanationTrue: "Graphene is a superb conductor of electricity and heat, and is 200 times stronger than steel per unit mass.",
    explanationFalse: "Graphene is a highly efficient thermal conductor, which makes it ideal for heat dissipation in electronics, not an insulator."
  },
  {
    id: "ONT_SCI_004",
    subject: "Science",
    topic: "Information Technology",
    subtopic: "Supercomputers architecture",
    difficulty: "UPSC",
    statementTrue: "Param Siddhi-AI is India's high-performance artificial intelligence supercomputer established under the National Supercomputing Mission.",
    statementFalse: "Supercomputing speed is measured in gigahertz (GHz), representing the processor's clock cycle limits.",
    explanationTrue: "Param Siddhi-AI is a top Indian supercomputer built under NSM at C-DAC, providing advanced AI/high-performance computing resources.",
    explanationFalse: "Supercomputing speed is measured in FLOPS (Floating-Point Operations Per Second), typically Petaflops or Exaflops today."
  }
];

// Export to window/module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { UPSC_QUESTION_BANK, UPSC_PYQ_BANK, UPSC_CONCEPT_ONTOLOGY };
} else {
  window.UPSC_QUESTION_BANK = UPSC_QUESTION_BANK;
  window.UPSC_PYQ_BANK = UPSC_PYQ_BANK;
  window.UPSC_CONCEPT_ONTOLOGY = UPSC_CONCEPT_ONTOLOGY;
}
