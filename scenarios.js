// ══════════════════════════════════════════════════════════════
//  DECEIVED — Scenario Bank · 157 scenarios across 5 levels
//  Verdict scenarios: {observations:[], verdicts:[], liar}
//  Statement scenarios: {statements:[{name,text}], liar}
// ══════════════════════════════════════════════════════════════

const LEVELS = [
  {
    "id": 1,
    "name": "The Rookie",
    "tagline": "Learn to spot the obvious tells",
    "difficulty": "Easy",
    "color": "#00D4AA",
    "scenarios": [
      {
        "type": "WHO_IS_LYING",
        "title": "The Alibi",
        "setup": "A valuable watch goes missing from an office. Three coworkers were present.",
        "statements": [
          {
            "name": "Marcus",
            "text": "I was in the break room the entire time. Sarah can confirm — we were talking about the Henderson project."
          },
          {
            "name": "Sarah",
            "text": "I was at my desk all morning. I didn't leave once. I had my headphones in."
          },
          {
            "name": "Devon",
            "text": "I stepped out for a client call around 10. Came back maybe 20 minutes later."
          }
        ],
        "clue": "The Henderson project meeting was scheduled for the afternoon, not the morning.",
        "liar": "Marcus",
        "explanation": "Marcus claimed Sarah confirmed his alibi — but the Henderson meeting was in the afternoon. Sarah never confirmed his story. Devon's timeline checks out."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "Grief Message",
        "setup": "One post in a grief support group was written by an AI pretending to mourn. Which one?",
        "statements": [
          {
            "name": "Post A",
            "text": "It's been four months and I still reach for my phone to call her. I got to the 'M' in her name before I remembered."
          },
          {
            "name": "Post B",
            "text": "Losing a parent is one of life's most profound transitions. I navigate a complex tapestry of emotions — sadness, gratitude, and growth."
          }
        ],
        "clue": "Authentic grief is specific. It lives in small, embarrassing, particular moments.",
        "liar": "Post B",
        "explanation": "Post B uses generic, elevated language. Post A has the painfully specific detail of reaching the 'M' in contacts. That's human."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Strange but True?",
        "setup": "One claim is a documented historical fact. The other is fabricated. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "The CIA ran MKUltra — testing LSD and mind-control on unwitting US citizens — for over a decade."
          },
          {
            "name": "Claim B",
            "text": "The US government seeded clouds over the Pacific Northwest in the 1970s to suppress liberal voter turnout."
          }
        ],
        "clue": "Real conspiracies leave paper trails someone eventually finds.",
        "liar": "Claim B",
        "explanation": "MKUltra is documented in declassified CIA files from 1977. The cloud-seeding voter story has no evidence trail — it's fabricated."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Broken Vase",
        "setup": "A family heirloom vase is shattered. Three kids were home alone.",
        "statements": [
          {
            "name": "Emma",
            "text": "I was upstairs doing homework. I heard the crash and ran down."
          },
          {
            "name": "Jake",
            "text": "I was in the kitchen the whole time making a sandwich. Didn't hear anything until Emma screamed."
          },
          {
            "name": "Lily",
            "text": "I was outside in the backyard. Came in after it already happened."
          }
        ],
        "clue": "The kitchen is right next to where the vase stood. A loud crash there would be impossible to miss.",
        "liar": "Jake",
        "explanation": "Jake said he was in the kitchen — right beside the vase — yet claims he heard nothing until Emma screamed. That's not believable. He broke it."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Apology",
        "setup": "A friend apologizes for missing your birthday. Read the cues — are they being sincere?",
        "clue": "Sincere apologies show congruence: the words, face, and body all say the same thing.",
        "liar": "They are sincere",
        "explanation": "All three signals align — relaxed posture, specificity, sustained matching expression. This is what genuine remorse looks like. Trust it.",
        "observations": [
          "They made full eye contact and their shoulders dropped as they spoke.",
          "They named the specific thing they missed and didn't make excuses.",
          "Their facial expression matched their words — genuine regret, sustained."
        ],
        "verdicts": [
          "They are sincere",
          "They are faking it"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Restaurant Review",
        "setup": "One review was written by a real diner, one by an AI. Spot the fake.",
        "statements": [
          {
            "name": "Review A",
            "text": "Best meal of my life. The ambiance was perfect and the staff provided exceptional service throughout our delightful dining experience."
          },
          {
            "name": "Review B",
            "text": "Waited 40 min for a table but the carbonara was worth it. Our waiter Danny kept checking if we needed more bread. We did. We always do."
          }
        ],
        "clue": "Real reviews have friction — small complaints, names, oddly specific details.",
        "liar": "Review A",
        "explanation": "Review A is frictionless marketing language. Review B has a wait time, a named waiter, and a self-deprecating bread joke. Real people remember the bread."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Animal Facts",
        "setup": "One of these animal claims is true. The other is made up. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "Octopuses have three hearts and blue blood."
          },
          {
            "name": "Claim B",
            "text": "Giraffes cannot make any vocal sounds and are completely mute their entire lives."
          }
        ],
        "clue": "Nature is stranger than fiction — but absolute claims ('completely,' 'never') are often where myths hide.",
        "liar": "Claim B",
        "explanation": "Octopuses really do have three hearts and copper-based blue blood. Giraffes can hum, snort, and grunt — they're not mute. The absolute claim was the fake."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Late Project",
        "setup": "A group project is late. Each member explains their part.",
        "statements": [
          {
            "name": "Tom",
            "text": "I finished my section Tuesday and emailed it to everyone that night."
          },
          {
            "name": "Priya",
            "text": "I never got Tom's email. I waited all week for his part before I could start mine."
          },
          {
            "name": "Alex",
            "text": "I got Tom's email Tuesday and built my section on top of it Wednesday."
          }
        ],
        "clue": "If Tom emailed everyone, and Alex received it, then one person's story doesn't fit.",
        "liar": "Priya",
        "explanation": "Tom emailed everyone; Alex confirms receiving it Tuesday. If the email went out, Priya got it too. Her 'never received it' excuse doesn't hold."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Salesperson",
        "setup": "A car salesperson swears this is the best deal available. Are they hiding something?",
        "clue": "Covering the mouth after a statement is a classic unconscious signal of withholding.",
        "liar": "They are hiding something",
        "explanation": "Glancing at exits, accelerated speech under questioning, and mouth-covering after a key claim — three stress signals clustered around the price. There's more room to negotiate.",
        "observations": [
          "They glanced at the door twice while quoting the 'final' price.",
          "Their speech sped up noticeably when you asked about the warranty.",
          "They covered their mouth briefly right after saying 'this is our lowest offer.'"
        ],
        "verdicts": [
          "They are being truthful",
          "They are hiding something"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Text Breakup",
        "setup": "One breakup text is real, one was AI-generated. Which is the human?",
        "statements": [
          {
            "name": "Text A",
            "text": "I've been doing a lot of reflecting and I think we want different things. I'll always cherish what we had. I wish you nothing but happiness."
          },
          {
            "name": "Text B",
            "text": "i can't keep doing the thing where you say you'll call and don't. i waited up again last night. i'm done waiting. i'm sorry."
          }
        ],
        "clue": "Real pain is messy and specific. Closure-speak is suspiciously tidy.",
        "liar": "Text A",
        "explanation": "Text A is a greeting-card template — 'cherish what we had,' 'nothing but happiness.' Text B has a specific grievance, lowercase exhaustion, and real hurt. That's human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Eaten Cake",
        "setup": "A slice of birthday cake vanished overnight. Three housemates were home.",
        "statements": [
          {
            "name": "Owen",
            "text": "I went to bed at nine and didn't get up once. I'm a heavy sleeper."
          },
          {
            "name": "Mia",
            "text": "I was up late but I'm allergic to dairy, I'd never touch a cream cake."
          },
          {
            "name": "Cole",
            "text": "I had a midnight snack but only chips. The cake was already half-gone when I passed the kitchen."
          }
        ],
        "clue": "The cake was whole at 11pm when the host went to bed.",
        "liar": "Cole",
        "explanation": "Cole claims the cake was 'already half-gone' at midnight — but it was whole at 11pm. Only the person who ate it would invent that detail to cover themselves."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Vacation Caption",
        "setup": "One travel caption was written by a real traveler, one by AI. Which is human?",
        "statements": [
          {
            "name": "Caption A",
            "text": "Paradise found! This breathtaking destination offers unforgettable moments and stunning views that will stay with you forever. Truly a trip of a lifetime!"
          },
          {
            "name": "Caption B",
            "text": "Got food poisoning day two but the third day we found this beach with nobody on it and I cried a little. Worth the bad shrimp. Probably."
          }
        ],
        "clue": "Real trips include the bad shrimp.",
        "liar": "Caption A",
        "explanation": "Caption A is a travel-brochure template. Caption B has food poisoning, an emotional moment, and a self-aware joke. The imperfection is what makes it human."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Body Facts",
        "setup": "One of these body facts is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "Your stomach gets an entirely new lining every few days because stomach acid would otherwise digest it."
          },
          {
            "name": "Claim B",
            "text": "Humans are the only animals whose hearts stop beating for a full second every time they sneeze."
          }
        ],
        "clue": "One of these is a popular myth that simply isn't true.",
        "liar": "Claim B",
        "explanation": "The stomach really does regenerate its lining constantly to avoid self-digestion. The 'heart stops when you sneeze' claim is a myth — your heart rhythm may briefly change, but it does not stop."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Scratched Car",
        "setup": "Someone scratched a car in the lot. Three coworkers parked nearby.",
        "statements": [
          {
            "name": "Dana",
            "text": "I parked on the other side of the building today, by the loading dock."
          },
          {
            "name": "Reuben",
            "text": "I saw the scratch when I arrived this morning and reported it to security right away."
          },
          {
            "name": "Lila",
            "text": "I parked next to it but I left for lunch at noon and it was fine when I got back at one."
          }
        ],
        "clue": "Security logged the scratch report at 2pm — an hour after Lila says the car was 'fine.'",
        "liar": "Reuben",
        "explanation": "Reuben claims he reported the scratch 'this morning,' but security logged the report at 2pm. His timeline is invented — likely to position himself as the responsible witness rather than the culprit."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Surprise Party",
        "setup": "You ask a friend if they're planning something for your birthday. Are they hiding a surprise?",
        "clue": "A genuine 'no' doesn't usually arrive before the question even lands.",
        "liar": "They are hiding a surprise",
        "explanation": "The too-fast denial, the suppressed smile, and the quick subject change are all signs of a happy secret. They're planning something — act surprised.",
        "observations": [
          "They answered 'nope, nothing' a half-beat too fast, before you finished asking.",
          "A tiny smile flickered at the corner of their mouth before they suppressed it.",
          "They changed the subject immediately and a little too smoothly."
        ],
        "verdicts": [
          "They have nothing planned",
          "They are hiding a surprise"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Gym Motivation",
        "setup": "One motivational caption is from a real person, one from AI. Which is human?",
        "statements": [
          {
            "name": "Post A",
            "text": "Every step forward is a victory. Believe in yourself, push your limits, and unlock the best version of you. Your only competition is who you were yesterday!"
          },
          {
            "name": "Post B",
            "text": "showed up. did half the workout. cried in the car. but I SHOWED UP and that's more than last week. baby steps, I guess."
          }
        ],
        "clue": "AI posts the poster. Humans cry in the car.",
        "liar": "Post A",
        "explanation": "Post A is a motivational-poster cliché stack. Post B is messy, specific, and honest about falling short while still showing up. That vulnerability is human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Wrong Order",
        "setup": "A customer's coffee order was wrong. Three baristas worked the shift.",
        "statements": [
          {
            "name": "Tess",
            "text": "I only worked the register today, I never made a single drink."
          },
          {
            "name": "Marco",
            "text": "I made the drinks all morning but I went on break right when their order came in."
          },
          {
            "name": "Jen",
            "text": "I covered the espresso bar during Marco's break. I made whatever came up then."
          }
        ],
        "clue": "The wrong order was made during Marco's break.",
        "liar": "Marco",
        "explanation": "The order was made during Marco's break — but Jen covered the bar then and Tess never made drinks. If the mistake happened during his break, Marco's claim he 'went on break right when it came in' conveniently dodges it. The timeline points to him still being there."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Ocean Claims",
        "setup": "One of these ocean facts is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "We have better maps of the surface of Mars than we do of our own ocean floor."
          },
          {
            "name": "Claim B",
            "text": "The Pacific Ocean is shrinking by about a foot every year and will be gone in 4,000 years."
          }
        ],
        "clue": "One of these is a widely confirmed scientific reality.",
        "liar": "Claim B",
        "explanation": "It's true that Mars is more thoroughly mapped than our deep ocean floor. The Pacific is slowly shrinking due to plate tectonics, but at centimeters per year over tens of millions of years — the '4,000 years' figure is fabricated."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Job Rejection",
        "setup": "One rejection email is genuinely human, one is AI boilerplate. Which is human?",
        "statements": [
          {
            "name": "Email A",
            "text": "Thank you for your interest. After careful consideration, we have decided to move forward with other candidates. We wish you the best in your future endeavors."
          },
          {
            "name": "Email B",
            "text": "This was a really hard call — you were our second choice and honestly it came down to one project. If the other person falls through, you're the first call I make. I mean that."
          }
        ],
        "clue": "Boilerplate wishes you 'future endeavors.' A human tells you that you were close.",
        "liar": "Email A",
        "explanation": "Email A is the universal rejection template. Email B has a specific reason, genuine regret, and a real commitment. The candor and specificity mark it as human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Dead Plant",
        "setup": "A houseplant died while its owner was away. Three friends had keys to water it.",
        "statements": [
          {
            "name": "Pria",
            "text": "I came Monday and Wednesday like we agreed and watered it both times."
          },
          {
            "name": "Sol",
            "text": "I was assigned Friday but I texted that I couldn't make it, so I assumed someone covered."
          },
          {
            "name": "Ben",
            "text": "I watered it every day I could. Honestly I probably overwatered if anything."
          }
        ],
        "clue": "The plant died of drought, not overwatering — its soil was bone dry.",
        "liar": "Ben",
        "explanation": "The plant died from drought with bone-dry soil. Ben claims he watered 'every day' and even 'overwatered' — directly contradicted by the dry soil. His over-the-top claim of diligence is the lie."
      }
    ]
  },
  {
    "id": 2,
    "name": "The Investigator",
    "tagline": "The lies get more convincing",
    "difficulty": "Easy-Medium",
    "color": "#E8A030",
    "scenarios": [
      {
        "type": "WHO_IS_LYING",
        "title": "The Last Text",
        "setup": "A woman says she never received a threatening text. Records show it was opened. Three people had access to a spoofed number.",
        "statements": [
          {
            "name": "Ryan",
            "text": "I was traveling that weekend. I have boarding passes and hotel receipts."
          },
          {
            "name": "Claire",
            "text": "We hadn't spoken in weeks. I have no reason to threaten her."
          },
          {
            "name": "James",
            "text": "I was angry that week, I'll admit. But I didn't send anything. I know how this looks."
          }
        ],
        "clue": "'I know how this looks' is preemptive defense — it assumes guilt before being accused.",
        "liar": "James",
        "explanation": "Ryan has alibi evidence. Claire denies motive directly. James volunteers that he looks guilty — innocent people rarely frame their own guilt unprompted."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Interview",
        "setup": "A job candidate is asked why she left her last role. Is she hiding something?",
        "clue": "The body leaks truth in clusters, not isolated signals.",
        "liar": "She is hiding something",
        "explanation": "A vanishing smile, postural retreat at the mention of her manager, and self-soothing touch with gaze aversion — three signals cluster around that manager. Something happened there.",
        "observations": [
          "She smiled before answering — but the smile faded before she finished her first sentence.",
          "She leaned forward describing her new goals, but leaned back when referencing her former manager.",
          "She said 'time for a new challenge' while touching her collarbone and breaking eye contact for one second."
        ],
        "verdicts": [
          "She is hiding something",
          "She is being honest"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Poem",
        "setup": "One of these short poems was written by a person, one by an AI. Which is human?",
        "statements": [
          {
            "name": "Poem A",
            "text": "The moonlight dances on the silver sea / A timeless beauty for all eyes to see / Nature's embrace, eternal and divine / In this sacred moment, peace is mine."
          },
          {
            "name": "Poem B",
            "text": "my grandmother's hands / smelled like onions and Jergens / I'd know them in the dark / I look for them in mine now"
          }
        ],
        "clue": "AI poetry reaches for 'timeless' and 'divine.' Human poetry reaches for onions and Jergens.",
        "liar": "Poem A",
        "explanation": "Poem A is a stack of poetic clichés — moonlight, silver sea, divine, sacred. Poem B has a specific scent memory and grief hiding in the last line. That specificity is human."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Historical Oddities",
        "setup": "One of these historical claims is documented fact. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "In 1962, a contagious laughter epidemic in Tanganyika forced schools to close for months."
          },
          {
            "name": "Claim B",
            "text": "In 1955, the city of Boston banned the color red from all public buildings to reduce citizen aggression."
          }
        ],
        "clue": "Truth is often weirder than the plausible-sounding fake.",
        "liar": "Claim B",
        "explanation": "The Tanganyika laughter epidemic of 1962 is real and well-documented — a mass psychogenic illness. The Boston red-ban story is invented; it sounds plausible but never happened."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Missing Funds",
        "setup": "$500 is missing from a shared house fund. Three roommates had the key.",
        "statements": [
          {
            "name": "Nina",
            "text": "I haven't touched the box since I put rent in last month. I keep my key on my work lanyard."
          },
          {
            "name": "Carlos",
            "text": "I opened it Saturday to add my share. The cash was all there when I closed it."
          },
          {
            "name": "Beth",
            "text": "I never even knew where we kept the spare key, honestly."
          }
        ],
        "clue": "Beth has lived in the house for two years and contributed to the fund every month.",
        "liar": "Beth",
        "explanation": "Beth claims she never knew where the key was — but she's contributed to the fund monthly for two years, which requires accessing the box. The feigned ignorance gives her away."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Customer Complaint",
        "setup": "One complaint email is from a real frustrated customer, one is AI. Which is human?",
        "statements": [
          {
            "name": "Email A",
            "text": "I am writing to express my profound disappointment with your service. This experience has been most unsatisfactory and I expect a prompt resolution."
          },
          {
            "name": "Email B",
            "text": "This is the THIRD time I've called. Your guy Steve promised a callback Monday. It's Thursday. I'm not mad, I'm just tired. Please. Just fix the router."
          }
        ],
        "clue": "Real anger has a history, a timeline, and a Steve.",
        "liar": "Email A",
        "explanation": "Email A is formal and hollow — 'profound disappointment,' 'most unsatisfactory.' Email B has a call count, a named rep, a day-of-week, and that exhausted 'Please.' Real frustration."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Witness",
        "setup": "A witness describes a suspect to police. Are they confident or fabricating?",
        "clue": "Genuine memory is uneven — vivid in some details, hazy in others. Fabrication tends to be uniformly smooth or uniformly vague.",
        "liar": "They genuinely saw the jacket",
        "explanation": "The instant, hesitation-free jacket recall is real memory. The hedging on height and face ('I think,' seat-shifting) shows where memory fades — which is normal for a true account.",
        "observations": [
          "When asked the suspect's height, they paused, looked up-left, then answered slowly.",
          "They described the jacket color instantly and without hesitation.",
          "When pressed on the face, they said 'I think' twice and shifted in their seat."
        ],
        "verdicts": [
          "They are making it up",
          "They genuinely saw the jacket"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Group Trip",
        "setup": "Someone canceled the group's hotel booking. Three friends had the login.",
        "statements": [
          {
            "name": "Maya",
            "text": "I never log into that account from my phone. Only my laptop, and it's been in the shop all week."
          },
          {
            "name": "Jordan",
            "text": "I logged in Monday to check the dates but I swear I didn't cancel anything."
          },
          {
            "name": "Sam",
            "text": "I don't even remember the password. Jordan always handles the bookings."
          }
        ],
        "clue": "The cancellation came from a mobile device on Tuesday.",
        "liar": "Maya",
        "explanation": "The cancellation came from a phone on Tuesday. Maya insists she only uses her laptop — which was in the shop — making her the one who'd most want to rule out mobile access. The overly specific alibi points to her."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Space Claims",
        "setup": "One of these space facts is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "There is a planet where it rains molten glass sideways at 5,400 mph winds."
          },
          {
            "name": "Claim B",
            "text": "Astronauts on the ISS can see individual car headlights on Earth at night with the naked eye."
          }
        ],
        "clue": "One of these violates the basic physics of human vision from orbit.",
        "liar": "Claim B",
        "explanation": "Planet HD 189733b really does rain molten glass sideways in brutal winds. But individual car headlights are far too small to resolve from the ISS — that claim is false."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Dating Profile",
        "setup": "One dating bio was written by a person, one by AI. Which is human?",
        "statements": [
          {
            "name": "Bio A",
            "text": "Adventurous soul who loves travel, good food, and meaningful connections. Looking for someone genuine to share life's beautiful moments with."
          },
          {
            "name": "Bio B",
            "text": "I will judge you (lovingly) for putting ketchup on eggs. I cry at dog commercials. Ask me about the time I got banned from a Chuck E Cheese."
          }
        ],
        "clue": "AI writes the bio everyone writes. Humans bring the Chuck E Cheese ban.",
        "liar": "Bio A",
        "explanation": "Bio A is the universal template — 'adventurous,' 'meaningful connections,' 'beautiful moments.' Bio B has a specific opinion, a confessed weakness, and a story hook. Memorably human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Spilled Secret",
        "setup": "A private secret got out. Three people were told in confidence.",
        "statements": [
          {
            "name": "Dana",
            "text": "I never repeat things. I didn't even tell my husband, and I tell him everything."
          },
          {
            "name": "Raj",
            "text": "I forgot you even told me that, honestly. It wasn't important enough for me to remember."
          },
          {
            "name": "Kim",
            "text": "I told one person, but they're not connected to your circle at all, so it couldn't be them."
          }
        ],
        "clue": "Kim openly admits she retold it — but assumes her listener couldn't be the link.",
        "liar": "Kim",
        "explanation": "Kim admits passing it on while assuming her one listener was 'safe.' Secrets travel through unexpected connections. Her confident assumption that the leak 'couldn't be them' is exactly how secrets escape."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Compliment",
        "setup": "A coworker compliments your presentation. Genuine, or covering envy?",
        "clue": "A real smile crinkles the eyes. A social smile stops at the mouth.",
        "liar": "The compliment is not genuine",
        "explanation": "The mouth-only smile, the swallowed 'great,' and the immediate pivot to their own project — all signs the praise masks competitiveness. The eyes never joined the smile.",
        "observations": [
          "Their smile only moved their mouth — the eyes stayed flat and still.",
          "They complimented you, then immediately mentioned their own upcoming project twice.",
          "Their tone dropped slightly on the word 'great,' almost swallowing it."
        ],
        "verdicts": [
          "The compliment is not genuine",
          "The compliment is genuine"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Returned Item",
        "setup": "An expensive jacket was returned to a store, worn. Three customers returned jackets that day.",
        "statements": [
          {
            "name": "Customer A",
            "text": "I bought mine yesterday and returned it today with the tags still on, never wore it."
          },
          {
            "name": "Customer B",
            "text": "Mine still had the receipt from last week. I tried it on at home once and it didn't fit."
          },
          {
            "name": "Customer C",
            "text": "I'll be honest, I wore mine to one event, but the store policy didn't say anything about that when I bought it."
          }
        ],
        "clue": "Two customers describe unworn returns. One openly admits wearing it.",
        "liar": "Customer C",
        "explanation": "Customer C admits wearing the jacket while trying to justify it with a policy loophole — that's the worn return. A and B describe legitimate unworn returns. The admission, framed as a defense, gives it away."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Wedding Toast",
        "setup": "One wedding toast excerpt is human, one is AI. Which is human?",
        "statements": [
          {
            "name": "Toast A",
            "text": "From the moment they met, it was clear these two souls were destined to be together. May their love story inspire us all and may they cherish each precious moment forever."
          },
          {
            "name": "Toast B",
            "text": "She told me he was 'fine, whatever' after their first date. She called me at 2am after the third one. I knew before she did. I always know before she does."
          }
        ],
        "clue": "AI declares destiny. A real friend remembers the 2am call.",
        "liar": "Toast A",
        "explanation": "Toast A is a greeting-card template — 'destined,' 'cherish each precious moment forever.' Toast B has a specific arc (the dismissive first date, the 2am call) and the warmth of a real friendship. Human."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Returned Gift",
        "setup": "A friend opens your gift and says they love it. Genuine, or being polite?",
        "clue": "Genuine delight usually leads to curiosity. Polite acceptance ends the moment the words are said.",
        "liar": "They are being polite",
        "explanation": "The smile lagging behind the words, setting the gift down quickly, and asking no follow-up questions all suggest politeness rather than real delight. Genuine excitement wants to engage with the object.",
        "observations": [
          "Their 'I love it!' came instantly, but the smile arrived a beat afterward.",
          "They thanked you warmly but set the gift down without examining it further.",
          "They asked zero questions about it — where it's from, how it works, nothing."
        ],
        "verdicts": [
          "They genuinely love it",
          "They are being polite"
        ]
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Food History",
        "setup": "One of these food-history claims is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "Ketchup was sold in the 1830s as a medicine to treat diarrhea and indigestion."
          },
          {
            "name": "Claim B",
            "text": "Carrots were originally bred orange by Dutch farmers in the 1600s as a tribute to the royal House of Orange — before that, all carrots were purple or white."
          }
        ],
        "clue": "Both sound like trivia-night bait, but only one is fully accurate.",
        "liar": "Claim B",
        "explanation": "Ketchup (tomato pills) really was sold as medicine in the 1830s. The carrot story is a popular myth — orange carrots did become dominant in the Netherlands, but the deliberate 'tribute to William of Orange' origin is folklore, not documented fact."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Leaked Quiz",
        "setup": "Quiz answers leaked before an exam. Three students had early access as graders' aides.",
        "statements": [
          {
            "name": "Amir",
            "text": "I only ever graded the essays, never saw the answer key for the multiple choice."
          },
          {
            "name": "Bea",
            "text": "I had the key but I shredded my copy the second I finished, like we're supposed to."
          },
          {
            "name": "Cy",
            "text": "I never even picked up the key from the office. I was out sick the day they handed them out."
          }
        ],
        "clue": "Office sign-out logs show all three aides collected a key — including Cy.",
        "liar": "Cy",
        "explanation": "Sign-out logs show Cy collected a key, contradicting his claim that he 'never picked it up' and was out sick. The provable false alibi makes him the likeliest leaker."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Sympathy Card",
        "setup": "One sympathy message is human, one AI. Which is human?",
        "statements": [
          {
            "name": "Message A",
            "text": "My deepest condolences during this difficult time. May you find comfort in cherished memories and the support of loved ones. He is at peace now."
          },
          {
            "name": "Message B",
            "text": "I keep thinking about how he always mispronounced my name and refused to fix it for twelve years. I'd give anything to be called 'Steph-NEE' wrong one more time."
          }
        ],
        "clue": "Condolence templates describe peace. Real grief misses the mispronounced name.",
        "liar": "Message A",
        "explanation": "Message A is the universal sympathy-card script. Message B has a specific, imperfect, beloved memory and grief that wishes for the annoyance back. That's a real person being mourned by a real person."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Missed Deadline",
        "setup": "An employee explains why they missed a deadline. Genuine reason or fabrication?",
        "clue": "Truth is usually told plainly. Fabrication over-explains and stumbles on unscripted questions.",
        "liar": "They are fabricating",
        "explanation": "Over-detailed rehearsed accounts, long pauses on simple unscripted follow-ups, and piling on unrequested justification are classic fabrication signals. A true reason doesn't need that much scaffolding.",
        "observations": [
          "They gave an unusually detailed, rehearsed-sounding account with exact times.",
          "When you asked a simple follow-up, they paused much longer than the question warranted.",
          "They kept adding unrequested details to shore up the story."
        ],
        "verdicts": [
          "They are telling the truth",
          "They are fabricating"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Office Theft",
        "setup": "Petty cash is missing from a locked drawer. Three people knew the combination.",
        "statements": [
          {
            "name": "Hana",
            "text": "I opened it Friday to log the week's receipts, counted it, locked it. All correct then."
          },
          {
            "name": "Ito",
            "text": "I never use that drawer. I keep my own float in my desk and never touch petty cash."
          },
          {
            "name": "Kemp",
            "text": "I haven't opened it in weeks. Last time was definitely before the holiday."
          }
        ],
        "clue": "A receipt with Kemp's initials, dated this Monday, was found inside the drawer.",
        "liar": "Kemp",
        "explanation": "A receipt initialed by Kemp and dated Monday was inside the drawer — proving he opened it this week, despite claiming he hadn't touched it 'in weeks.' The physical evidence breaks his alibi."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Language Oddities",
        "setup": "One of these language claims is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "The word 'set' has more distinct definitions in the dictionary than any other English word — over 400."
          },
          {
            "name": "Claim B",
            "text": "There is no word in any human language for the color blue until a culture develops blue dye, which is why ancient texts describe the sky as bronze or wine-dark."
          }
        ],
        "clue": "One overstates an interesting linguistics theory into an absolute that isn't true.",
        "liar": "Claim B",
        "explanation": "'Set' really does have one of the largest numbers of dictionary definitions. The blue-language claim overstates a real phenomenon — many ancient languages lacked a distinct blue word — into a false absolute ('no word in ANY language'), which isn't accurate."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Resignation",
        "setup": "One resignation message is human, one AI. Which is human?",
        "statements": [
          {
            "name": "Message A",
            "text": "After much reflection, I have decided to pursue new opportunities. I am grateful for the growth and experiences this role has provided and wish the team continued success."
          },
          {
            "name": "Message B",
            "text": "I'm leaving. I should've left a year ago when they gave my project to Kevin. I'm not bitter — okay I'm a little bitter — but mostly I'm just tired. Thanks for the free coffee. It was bad coffee."
          }
        ],
        "clue": "AI is 'grateful for the growth.' A human remembers what they gave to Kevin.",
        "liar": "Message A",
        "explanation": "Message A is the LinkedIn resignation template. Message B has a specific grievance (the Kevin project), self-aware honesty about the bitterness, and a dry joke about the coffee. Unmistakably human."
      }
    ]
  },
  {
    "id": 3,
    "name": "The Detective",
    "tagline": "Trust nothing. Verify everything.",
    "difficulty": "Medium",
    "color": "#7C3AED",
    "scenarios": [
      {
        "type": "WHO_IS_LYING",
        "title": "The Insurance Claim",
        "setup": "A man claims his laptop was stolen from his car. The insurer interviews three people who were nearby.",
        "statements": [
          {
            "name": "Claimant",
            "text": "I parked, went into the gym for an hour, came back and the window was smashed. Laptop gone."
          },
          {
            "name": "Gym Clerk",
            "text": "He checked in at 6 but I saw him leave again after just ten minutes. Came back near closing."
          },
          {
            "name": "Witness",
            "text": "I parked next to a car with a smashed window around 6:30. Didn't see anyone near it."
          }
        ],
        "clue": "The claimant's timeline and the gym clerk's account don't match on one crucial point.",
        "liar": "Claimant",
        "explanation": "The claimant says he was in the gym the whole hour, but the clerk saw him leave after ten minutes. That unaccounted gap — and the mismatched timeline — suggests the claim is staged."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Apology Letter",
        "setup": "A public figure issues an apology. One version is human-written, one AI. Which is human?",
        "statements": [
          {
            "name": "Version A",
            "text": "I deeply regret any harm my words may have caused. I am committed to learning and growing from this experience and to being better moving forward."
          },
          {
            "name": "Version B",
            "text": "I said something cruel about Marcus at the meeting and he wasn't even in the room to defend himself. That was cowardly. I already called him. I owe you all the same honesty."
          }
        ],
        "clue": "Real accountability names the specific wrong. PR apologies stay abstract.",
        "liar": "Version A",
        "explanation": "Version A is the non-apology template — 'any harm,' 'may have caused,' passive and vague. Version B names the person, the act, calls it cowardly, and reports concrete action. Genuine accountability."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Poker Game",
        "setup": "A player makes a huge bet. Read the tells — strong hand or bluff?",
        "clue": "In poker, sudden stillness after aggression often means weakness — strength tends to relax, not freeze.",
        "liar": "They are bluffing",
        "explanation": "Freezing after a big bet is the classic bluff tell — the bluffer suppresses all movement to avoid 'giving away' anything. Genuine strength is usually looser. The held breath and forced stare confirm it.",
        "observations": [
          "After betting, they went completely still — no fidgeting, barely breathing.",
          "They placed their chips down gently and deliberately, not with force.",
          "They stared a beat too long at you after the bet, then looked away first."
        ],
        "verdicts": [
          "They have a strong hand",
          "They are bluffing"
        ]
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Medical History",
        "setup": "One of these medical history claims is real. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "Doctors once widely prescribed cigarettes to patients to help with stress and even throat irritation."
          },
          {
            "name": "Claim B",
            "text": "In the 1940s, radioactive water was sold in pharmacies as a cure for baldness with a money-back guarantee."
          }
        ],
        "clue": "Both sound absurd by modern standards — but only one happened.",
        "liar": "Claim B",
        "explanation": "Cigarettes were genuinely marketed and even doctor-recommended for decades. Radioactive water tonics existed (like Radithor), but they were sold as energy cures, not baldness treatments with guarantees — that detail is fabricated."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Forged Signature",
        "setup": "A contract has a forged signature. Three people had access to the document.",
        "statements": [
          {
            "name": "Helen",
            "text": "I was on vacation in another country the entire week the contract was signed. I have stamps in my passport."
          },
          {
            "name": "Victor",
            "text": "I notarized dozens of documents that day. I genuinely can't recall this specific one, but I follow protocol every time."
          },
          {
            "name": "Grace",
            "text": "I would never forge anything. I didn't even handle that contract — it went straight from Victor to the client."
          }
        ],
        "clue": "Grace claims the contract went 'straight from Victor to the client' — but how would she know its exact path if she never handled it?",
        "liar": "Grace",
        "explanation": "Grace says she never handled the contract — yet describes its exact route in detail. You can't have intimate knowledge of a document's path you supposedly never touched. The contradiction exposes her."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Childhood Memory",
        "setup": "One person is recounting a real childhood memory, one is AI-generated. Which is human?",
        "statements": [
          {
            "name": "Account A",
            "text": "Summers at my grandparents' were magical. We'd play outside until dusk, catch fireflies, and make cherished memories that I'll treasure forever."
          },
          {
            "name": "Account B",
            "text": "My grandpa had this gross peppermint he kept in his shirt pocket. Lint and all. He'd offer me one like it was treasure. I always took it. I'd give anything for one now."
          }
        ],
        "clue": "Nostalgia in the abstract is AI. The lint on the peppermint is human.",
        "liar": "Account A",
        "explanation": "Account A is greeting-card nostalgia — 'magical,' 'cherished memories,' 'treasure forever.' Account B has a lint-covered peppermint and grief in the final line. Real memory keeps the gross, specific details."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Reunion",
        "setup": "An old friend says they're thrilled to see you after years. Genuine warmth or social performance?",
        "clue": "The unconscious 'eyebrow flash' of recognition is nearly impossible to fake and happens before conscious thought.",
        "liar": "They are genuinely happy",
        "explanation": "The involuntary eyebrow flash, feet pointed toward you (a true engagement signal), and the eye-crinkling smile that preceded speech — all authentic. This is real delight, not performance.",
        "observations": [
          "Their eyebrows flashed up briefly the instant they saw you, before they even spoke.",
          "They reached for a hug and their feet pointed fully toward you the whole conversation.",
          "Their first words came a half-second after a genuine, eye-crinkling smile."
        ],
        "verdicts": [
          "They are genuinely happy",
          "They are faking the warmth"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Plagiarism",
        "setup": "Two students submit nearly identical essays. Both claim originality. A third saw what happened.",
        "statements": [
          {
            "name": "Student A",
            "text": "I wrote mine three weeks ago. I can show you the document history with timestamps."
          },
          {
            "name": "Student B",
            "text": "I wrote mine the night before it was due. Pure inspiration. I don't know how it's similar."
          },
          {
            "name": "Witness",
            "text": "I saw Student B in the library with a printout, typing fast and glancing at it the whole time."
          }
        ],
        "clue": "Student A offers verifiable evidence. Student B offers 'inspiration' and the witness saw them copying from a printout.",
        "liar": "Student B",
        "explanation": "Student A can prove a three-week timeline with document history. Student B claims last-minute 'inspiration' produced an identical essay — and the witness saw them copying from a printout. Student B plagiarized."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Technology Origins",
        "setup": "One of these tech-history claims is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "The first computer programmer in history was a woman, Ada Lovelace, in the 1840s — before computers physically existed."
          },
          {
            "name": "Claim B",
            "text": "The '@' symbol in email was chosen by a NASA committee after a two-year study of 300 candidate symbols."
          }
        ],
        "clue": "One of these has a single, well-documented inventor making a quick practical choice.",
        "liar": "Claim B",
        "explanation": "Ada Lovelace really did write the first algorithm for Babbage's theoretical engine in the 1840s. The '@' in email was picked by Ray Tomlinson in 1971 because it was already on the keyboard and unused in names — no NASA committee."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Recipe Intro",
        "setup": "One recipe introduction was written by a home cook, one by AI. Which is human?",
        "statements": [
          {
            "name": "Intro A",
            "text": "This delightful dish brings together fresh, wholesome ingredients for a meal the whole family will love. Perfect for any occasion!"
          },
          {
            "name": "Intro B",
            "text": "My mom made this every time someone got dumped. It's basically just cheese and carbs but I've never once felt sad while eating it. Burns easily, watch the heat."
          }
        ],
        "clue": "AI recipe intros sell. Human ones come with a story and a warning.",
        "liar": "Intro A",
        "explanation": "Intro A is recipe-blog filler — 'delightful,' 'wholesome,' 'the whole family will love.' Intro B has an emotional origin, honest self-awareness about the ingredients, and a practical warning. Human."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Negotiation",
        "setup": "During a salary negotiation, your manager says the budget is 'completely maxed out.' True, or a tactic?",
        "clue": "Neck-touching is a pacifying gesture — the body self-soothing during a stressful or untrue statement.",
        "liar": "There is more budget",
        "explanation": "Broken eye contact on the key claim, a neck-touch pacifier, and a suspiciously rehearsed rebuttal — the cluster suggests 'maxed out' isn't the full truth. There's likely more room.",
        "observations": [
          "They broke eye contact and looked at their notes when saying 'completely maxed out.'",
          "Their hand briefly touched the back of their neck as they delivered the figure.",
          "They answered your counter-question a beat faster than felt natural, almost rehearsed."
        ],
        "verdicts": [
          "There is more budget",
          "The budget is truly maxed"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Double Booking",
        "setup": "A venue was double-booked for the same evening. Three staff handled reservations.",
        "statements": [
          {
            "name": "Owen",
            "text": "I booked the Patel wedding in the morning and marked the calendar immediately, like always."
          },
          {
            "name": "Tara",
            "text": "I took the corporate event call in the afternoon. The calendar showed the date as open when I checked."
          },
          {
            "name": "Wes",
            "text": "I haven't touched the booking calendar in weeks. I only work the kitchen now."
          }
        ],
        "clue": "If Owen marked the calendar in the morning, it could not have shown 'open' to Tara in the afternoon — unless someone changed it.",
        "liar": "Owen",
        "explanation": "Owen claims he marked the calendar immediately in the morning. But Tara saw it open in the afternoon. Either Owen never actually logged it, or he's lying about doing so 'like always.' His story breaks the timeline."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Cooked Books",
        "setup": "A small business shows a suspicious gap in its books. Three people handled the ledgers.",
        "statements": [
          {
            "name": "Bookkeeper",
            "text": "I record every transaction the day it happens. If there's a gap, it entered the system after my entries — I don't backdate."
          },
          {
            "name": "Owner",
            "text": "I only review the monthly summaries. I wouldn't even know how to alter a specific line item."
          },
          {
            "name": "Assistant",
            "text": "I help with data entry sometimes, but I always have the bookkeeper double-check my work before it's final."
          }
        ],
        "clue": "The altered entries were backdated — and only someone who 'doesn't backdate' would emphasize that distinction unprompted.",
        "liar": "Bookkeeper",
        "explanation": "The entries were backdated. The bookkeeper volunteers 'I don't backdate' before anyone raised it — a preemptive denial of the exact method used. Only someone aware backdating occurred would feel the need to deny it."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Memoir Excerpt",
        "setup": "One memoir paragraph is human, one AI imitating literary style. Which is human?",
        "statements": [
          {
            "name": "Excerpt A",
            "text": "My father was a complex man, a tapestry of contradictions. He taught me that life's greatest lessons emerge from our deepest struggles, and that resilience is forged in the crucible of adversity."
          },
          {
            "name": "Excerpt B",
            "text": "My father kept a jar of pennies he refused to spend. After he died we counted them: $4.18. He'd guarded $4.18 like it was the deed to the house. I keep the jar now. I haven't added a single penny."
          }
        ],
        "clue": "AI calls a father 'a tapestry of contradictions.' A human counts the $4.18.",
        "liar": "Excerpt A",
        "explanation": "Excerpt A is literary-sounding but hollow — 'tapestry of contradictions,' 'crucible of adversity.' Excerpt B has a precise, strange, devastating specific ($4.18 in guarded pennies) that carries the whole emotional weight. That's human memory."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Cover Story",
        "setup": "A suspect explains where they were. Two details ring true, one is fabricated. Which is the false note?",
        "clue": "Real memories of a shared meal usually include the other person's order. Hedging there is telling.",
        "liar": "Detail 3",
        "explanation": "The vivid layout and instant 'salmon' suggest they were there — but the hedge on their companion's order ('I think? we usually...') suggests the companion, or the shared meal itself, is the invented part of the alibi.",
        "statements": [
          {
            "name": "Detail 1",
            "text": "They described the restaurant's layout, the noise, and a rude waiter — vivid and unprompted."
          },
          {
            "name": "Detail 2",
            "text": "When asked what they ordered, they answered confidently and immediately: 'the salmon.'"
          },
          {
            "name": "Detail 3",
            "text": "When asked what their friend ordered, they said 'I... think the same thing? We usually get the same.'"
          }
        ]
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Cold War Files",
        "setup": "One of these Cold War claims is documented fact. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "The CIA spent millions training cats to be mobile listening devices, surgically implanting microphones — a program called Acoustic Kitty."
          },
          {
            "name": "Claim B",
            "text": "The Soviet Union built a fully functional underground replica of Washington DC in Siberia to train spies, complete with American street signs and diners."
          }
        ],
        "clue": "One of these absurd-sounding programs is genuinely declassified.",
        "liar": "Claim B",
        "explanation": "'Acoustic Kitty' was a real (and famously failed) CIA program to wire cats for surveillance. The Siberian replica of DC is fabricated — spy training facilities existed, but no full underground DC replica is documented."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Sabotaged Presentation",
        "setup": "A key presentation file was corrupted right before a pitch. Three team members had access.",
        "statements": [
          {
            "name": "Quinn",
            "text": "I sent my final version to the shared drive at 6pm and didn't open it again. Check the timestamps."
          },
          {
            "name": "Reese",
            "text": "I was the last to edit, around 9pm, just fixing typos. The file opened fine for me when I closed it."
          },
          {
            "name": "Tory",
            "text": "I never had edit access, only view. I literally couldn't have changed anything even if I wanted to."
          }
        ],
        "clue": "The corruption occurred during a save at 9:14pm — and only an editor could trigger it.",
        "liar": "Reese",
        "explanation": "The corruption happened in a 9:14pm save — and only Reese, the 9pm editor, was in the file then. Quinn's 6pm work predates it and Tory had view-only access. Reese's claim it 'opened fine when I closed it' is contradicted by the corrupting save."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Therapy Reflection",
        "setup": "One reflection on anxiety is human, one AI. Which is human?",
        "statements": [
          {
            "name": "Reflection A",
            "text": "Anxiety, I've learned, is simply love with nowhere to go. By embracing my feelings with compassion and mindfulness, I've discovered a path toward inner peace and authentic self-acceptance."
          },
          {
            "name": "Reflection B",
            "text": "My anxiety shows up as cleaning the grout. Not the floors. The grout. With a toothbrush. At 1am. My apartment is filthy except for these immaculate tile seams nobody will ever look at."
          }
        ],
        "clue": "AI turns anxiety into a healing aphorism. A human scrubs the grout at 1am.",
        "liar": "Reflection A",
        "explanation": "Reflection A resolves anxiety into a tidy, inspirational truth ('love with nowhere to go,' 'inner peace'). Reflection B has a hyper-specific, slightly absurd, unresolved behavior (grout at 1am) that captures real anxiety without redeeming it. Human."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Fake Expert",
        "setup": "Someone claims deep expertise in a field. Genuine knowledge or bluffing?",
        "clue": "Real experts simplify. Bluffers complicate, deflect, and name-drop.",
        "liar": "They are bluffing",
        "explanation": "Genuine experts can explain specifics simply. Jargon fluency that collapses on 'how' questions, hollow name-dropping, and retreating to 'it's complicated' under mild challenge are the signatures of someone faking expertise.",
        "observations": [
          "They spoke fluently in jargon but grew vague and deflected the moment you asked a specific 'how' question.",
          "They name-dropped famous figures in the field but couldn't describe what those figures actually did.",
          "When mildly challenged, they retreated to 'it's complicated' rather than explaining."
        ],
        "verdicts": [
          "They have a strong hand",
          "They are bluffing"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Anonymous Tip",
        "setup": "An anonymous complaint about a coworker contained details only an insider would know. Three colleagues are interviewed.",
        "statements": [
          {
            "name": "Avery",
            "text": "I barely interact with them. I wouldn't know enough private details to write that complaint."
          },
          {
            "name": "Blake",
            "text": "I sit next to them and hear everything, sure, but I'd never go anonymous. If I had a problem I'd say it to their face."
          },
          {
            "name": "Casey",
            "text": "I've had issues with them, I won't pretend otherwise. But I addressed it directly in our last one-on-one, on the record."
          }
        ],
        "clue": "The complaint included a detail only someone seated within earshot would have overheard.",
        "liar": "Blake",
        "explanation": "The tip required overhearing private details — which only Blake, seated next to them 'hearing everything,' could have. His insistence that he'd 'never go anonymous' protests the exact accusation. Avery lacked access; Casey went on the record openly."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Ancient Engineering",
        "setup": "One of these ancient-history claims is true. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "The ancient Romans made a form of concrete that actually grows stronger over time when exposed to seawater — stronger than much modern concrete."
          },
          {
            "name": "Claim B",
            "text": "The Great Wall of China is the only human-made structure visible from the Moon with the naked eye."
          }
        ],
        "clue": "One of these is a debunked classroom myth.",
        "liar": "Claim B",
        "explanation": "Roman seawater concrete genuinely self-strengthens over centuries — a confirmed, studied phenomenon. The 'Great Wall visible from the Moon' claim is a famous myth; it's not visible from the Moon, and barely from low orbit."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Breakup Reflection",
        "setup": "One reflection on a breakup is human, one AI. Which is human?",
        "statements": [
          {
            "name": "Reflection A",
            "text": "Heartbreak taught me that endings are simply new beginnings in disguise. I've emerged stronger, wiser, and more open to the beautiful possibilities that lie ahead on my journey."
          },
          {
            "name": "Reflection B",
            "text": "I still use the side of the bed I used when he was here. Six months. There's a whole empty side I won't touch like he's coming back to claim it. I know he's not. I sleep on my edge anyway."
          }
        ],
        "clue": "AI calls endings 'new beginnings in disguise.' A human won't touch the empty side of the bed.",
        "liar": "Reflection A",
        "explanation": "Reflection A converts heartbreak into a motivational arc ('endings are new beginnings,' 'stronger, wiser'). Reflection B has a specific, irrational, unresolved behavior (refusing the empty bed-side) that captures real grief without fixing it. Human."
      }
    ]
  },
  {
    "id": 4,
    "name": "The Profiler",
    "tagline": "They've studied how to lie to you",
    "difficulty": "Medium-Hard",
    "color": "#E8A030",
    "scenarios": [
      {
        "type": "WHO_IS_LYING",
        "title": "The DARVO Defense",
        "setup": "After being confronted about a hurtful comment, someone responds. One of three statements uses DARVO (Deny, Attack, Reverse Victim & Offender).",
        "statements": [
          {
            "name": "Response A",
            "text": "You're right, I did say that, and it was unfair of me. I'm sorry. Can we talk about why?"
          },
          {
            "name": "Response B",
            "text": "I never said that. And honestly, I'm hurt you'd even accuse me. After everything I do for you, this is how you treat me?"
          },
          {
            "name": "Response C",
            "text": "I don't remember saying it exactly that way, but if it landed badly, I want to understand. Tell me what you heard."
          }
        ],
        "clue": "DARVO flips the script: deny it happened, attack the accuser, then claim to be the real victim.",
        "liar": "Response B",
        "explanation": "Response B is textbook DARVO: Denies ('I never said that'), Attacks ('I'm hurt you'd accuse me'), and Reverses victim/offender ('after everything I do, THIS is how you treat ME'). A manipulation tactic, not a defense."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Charmer",
        "setup": "Someone is laying on intense charm and flattery very early. Genuine connection or love-bombing?",
        "clue": "Love-bombing moves faster than real intimacy can. Genuine connection doesn't demand reciprocation on a timeline.",
        "liar": "This is love-bombing",
        "explanation": "'Soulmate' within an hour, escalating flattery that turns uncomfortable when not matched, and instant total mirroring — these are love-bombing signals. Real intimacy builds slowly and tolerates difference.",
        "observations": [
          "Within an hour they called you their 'soulmate' and said they'd never felt this way before.",
          "Their compliments escalated fast and grew uncomfortable when you didn't reciprocate equally.",
          "They mirrored your every gesture and opinion almost instantly, agreeing with everything."
        ],
        "verdicts": [
          "This is genuine connection",
          "This is love-bombing"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Wikipedia Edit",
        "setup": "One paragraph is from a real Wikipedia article, one was AI-generated to mimic the style. Which is the genuine human-edited entry?",
        "statements": [
          {
            "name": "Entry A",
            "text": "The bridge, completed in 1932, remains a vital transit link. It is widely regarded as an architectural marvel and continues to inspire admiration from visitors worldwide."
          },
          {
            "name": "Entry B",
            "text": "The bridge opened in 1932, three years behind schedule. A 1987 inspection found significant corrosion in the eastern truss, prompting a contentious two-year closure. Locals nicknamed it 'the Rust Belt.'[14]"
          }
        ],
        "clue": "Real encyclopedia entries have dates, controversies, citations, and unflattering details. AI mimics tone but smooths over the messy specifics.",
        "liar": "Entry A",
        "explanation": "Entry A is vague praise — 'marvel,' 'admiration worldwide' — with no facts. Entry B has a delay, a dated inspection, a controversy, a nickname, and a citation marker. That specificity and neutrality is genuine encyclopedia writing."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Embezzlement",
        "setup": "Funds were skimmed over months. Three executives are interviewed by an auditor.",
        "statements": [
          {
            "name": "CFO",
            "text": "I flagged the irregularities myself the moment I noticed them. Why would I report a crime I was committing?"
          },
          {
            "name": "Controller",
            "text": "I reconcile accounts monthly. The discrepancies were small enough individually to slip past a standard review."
          },
          {
            "name": "VP Finance",
            "text": "I trust my team completely. I sign off on what they bring me. I don't audit every line — that's not my job."
          }
        ],
        "clue": "The skimming was done in amounts small enough to evade exactly the kind of 'standard monthly review' one person described in oddly precise detail.",
        "liar": "Controller",
        "explanation": "The Controller knows the exact threshold that evades a standard review — and describes the skimming method precisely. Only someone designing the scheme to slip past monthly reconciliation would frame it that way. The expertise betrays them."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Fake Confidence",
        "setup": "A speaker claims total confidence in their failing product. Real conviction or mask?",
        "clue": "Vocal pitch tends to rise under stress, regardless of the confident words being spoken. The body contradicts the script.",
        "liar": "They are masking doubt",
        "explanation": "Rising pitch on every claim, a white-knuckle grip beneath the smile, and over-loud laughter deflecting hard questions — the body is flooded with stress the words deny. The confidence is a mask.",
        "observations": [
          "Their words were bold but their voice rose in pitch on every key claim.",
          "They gripped the podium edge so hard their knuckles paled, while smiling broadly.",
          "They over-laughed at a tough question, a beat too loud, before answering vaguely."
        ],
        "verdicts": [
          "They are genuinely confident",
          "They are masking doubt"
        ]
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "Government Programs",
        "setup": "One of these declassified government programs is real. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "The US Army once seriously researched a 'gay bomb' — a chemical weapon to make enemy soldiers irresistibly attracted to each other."
          },
          {
            "name": "Claim B",
            "text": "The UK government secretly trained pigeons to carry tiny cameras and photograph Soviet installations during the Cold War, deploying over 2,000 birds."
          }
        ],
        "clue": "Both sound like satire — but one appears in actual declassified documents.",
        "liar": "Claim B",
        "explanation": "The 'gay bomb' was a real proposed concept in a 1994 US Air Force document — bizarre but documented. The mass pigeon-camera spy program with 2,000 deployed birds is fabricated; pigeon photography existed in WWI era but not this Cold War operation."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Strategic Truth",
        "setup": "A suspect in a theft tells mostly the truth to hide one lie. Three statements — one contains the buried deception.",
        "statements": [
          {
            "name": "Statement A",
            "text": "Yes, I was in the building that night. I badged in at 7, everyone saw me, I'm not going to pretend otherwise."
          },
          {
            "name": "Statement B",
            "text": "I went to the third floor to grab my charger, then straight back down. Two minutes, tops."
          },
          {
            "name": "Statement C",
            "text": "I'll be completely honest — I've had money problems lately. I'm not hiding that. But I didn't take anything."
          }
        ],
        "clue": "Skilled liars volunteer uncomfortable truths to build credibility, then bury the lie in a verifiable-sounding specific.",
        "liar": "Statement B",
        "explanation": "Statements A and C volunteer damaging truths (presence, motive) to seem honest. Statement B is the buried lie — the oddly precise 'two minutes, tops' to the floor where the theft occurred. The specificity is doing the deceiving."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Eulogy",
        "setup": "One eulogy excerpt was written by a grieving family member, one by AI. Which is human?",
        "statements": [
          {
            "name": "Excerpt A",
            "text": "He was a beloved father, a devoted husband, and a pillar of his community. His warmth touched all who knew him, and his legacy will live on in our hearts forever."
          },
          {
            "name": "Excerpt B",
            "text": "Dad couldn't sing but he sang anyway, loudly, in the car, getting the words wrong on purpose to make us groan. I'd give anything to be annoyed by him one more time."
          }
        ],
        "clue": "Funeral-template language describes a person. Real grief remembers one specific, imperfect, annoying thing.",
        "liar": "Excerpt A",
        "explanation": "Excerpt A is the universal eulogy — 'beloved,' 'pillar,' 'legacy,' 'forever.' Excerpt B has a specific, imperfect habit (bad singing on purpose) and grief that wishes for the annoyance back. That's a real person being mourned."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Guilty Helper",
        "setup": "After a break-in, a neighbor is very eager to help with the investigation. Genuine concern or guilty over-involvement?",
        "clue": "Unprompted, repeated alibi assertions — when no one has accused you — often signal guilt, not innocence.",
        "liar": "They are over-asserting innocence",
        "explanation": "Volunteering theories before being asked, repeating 'I wasn't home' three times unprompted, and steering back to their own alibi — these are signs of guilty over-involvement. The innocent don't usually defend an accusation no one made.",
        "observations": [
          "They volunteered theories before being asked any questions, very quickly.",
          "They mentioned three times, unprompted, that they 'weren't even home' that night.",
          "When the officer changed subjects, they steered it back to their own alibi twice."
        ],
        "verdicts": [
          "They are over-asserting innocence",
          "Their concern is genuine"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Inheritance",
        "setup": "A will was altered shortly before death. Three relatives had access during the final week.",
        "statements": [
          {
            "name": "Daughter",
            "text": "I was at the hospital every single day. The nurses can confirm I never left her side."
          },
          {
            "name": "Nephew",
            "text": "I visited once, on Tuesday. I barely knew where she kept her papers, let alone the will."
          },
          {
            "name": "Caretaker",
            "text": "I handled her correspondence daily, but I'd never touch legal documents. That's not my place, and I respected her completely."
          }
        ],
        "clue": "The caretaker handled correspondence daily and had the most consistent, unsupervised access to her papers — yet emphasizes 'respect' over opportunity.",
        "liar": "Caretaker",
        "explanation": "The caretaker had daily, unsupervised access to her papers — the most opportunity by far — yet deflects with emotional language about 'respect' and 'place' rather than addressing access. The appeal to character over opportunity is the tell."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Product Review",
        "setup": "One detailed product review is genuine, one is an AI-written fake designed to look credible. Which is human?",
        "statements": [
          {
            "name": "Review A",
            "text": "After extensive testing, I can confidently say this product exceeds expectations in every category. The build quality is superb and performance is flawless. Highly recommend to anyone!"
          },
          {
            "name": "Review B",
            "text": "Works great EXCEPT the app disconnects if your wifi blips. Took me a week to figure out that was the issue and not the device. Four stars. Would be five if the app wasn't held together with tape."
          }
        ],
        "clue": "AI fakes credibility with 'extensive testing' and 'every category.' Real reviews have one specific, hard-won frustration.",
        "liar": "Review A",
        "explanation": "Review A performs credibility — 'extensive testing,' 'flawless,' 'every category' — without a single specific. Review B has a precise bug, the time it took to diagnose, a docked star, and a memorable metaphor. Genuine experience."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Rehearsed Story",
        "setup": "Someone recounts their whereabouts during an incident. Is the account lived or rehearsed?",
        "clue": "Real memories can be recalled out of order. Rehearsed scripts fall apart when you ask for them in reverse.",
        "liar": "The story is rehearsed",
        "explanation": "Genuine memory is messy and can be accessed non-linearly; a rehearsed script is memorized forward only. The reverse-order collapse, the too-perfect sequence, and the mistimed emotions all point to fabrication.",
        "observations": [
          "They told the story in perfect chronological order with no backtracking or self-correction.",
          "When asked to tell it backwards, from end to start, they froze and stumbled badly.",
          "The emotional beats felt placed rather than felt — a smile arriving slightly after the funny part."
        ],
        "verdicts": [
          "The story is genuine",
          "The story is rehearsed"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Gaslighter",
        "setup": "After an argument, three accounts emerge of what was said. One uses gaslighting to rewrite reality.",
        "statements": [
          {
            "name": "Account A",
            "text": "I did raise my voice and I regret it. I said some things I shouldn't have. We were both upset."
          },
          {
            "name": "Account B",
            "text": "You're remembering it wrong, like you always do. That never happened. You're being way too sensitive — honestly I'm worried about your memory lately."
          },
          {
            "name": "Account C",
            "text": "I think we each heard different things in the heat of it. Can we compare notes on what was actually said?"
          }
        ],
        "clue": "Gaslighting attacks the other person's perception of reality itself — 'you're remembering it wrong,' 'you're too sensitive.'",
        "liar": "Account B",
        "explanation": "Account B is textbook gaslighting: denying events occurred ('that never happened'), attacking the other's memory and sanity ('worried about your memory'), and reframing valid reactions as oversensitivity. It rewrites reality rather than recounting it."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Practiced Pitch",
        "setup": "A founder pitches investors with total polish. Authentic conviction or a memorized performance hiding doubt?",
        "clue": "Rehearsed confidence holds until the script runs out. The unscripted moment reveals the real state.",
        "liar": "They are masking doubt",
        "explanation": "The polish was memorized; the mask slipped the moment the script ended — rising pitch, verbal over-assurance ('no question'), and a self-soothing thumb-rub during unscripted Q&A. The conviction was performed, not felt.",
        "observations": [
          "The scripted pitch was flawless, but when an investor asked an unexpected question, their fluency vanished and pitch rose.",
          "They used 'we're confident' and 'no question' repeatedly — verbal over-assurance.",
          "Their hands, steady during the script, began a repetitive thumb-rub during the Q&A."
        ],
        "verdicts": [
          "They are genuinely confident",
          "They are masking doubt"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Personal Essay",
        "setup": "One college essay opening is human, one is AI built to sound vulnerable. Which is human?",
        "statements": [
          {
            "name": "Opening A",
            "text": "Growing up, I faced many challenges that shaped who I am today. Through perseverance and determination, I learned that adversity is not an obstacle but an opportunity for growth and self-discovery."
          },
          {
            "name": "Opening B",
            "text": "I got fired from a frozen yogurt shop for giving away too many free samples. I wasn't being generous. I just couldn't stand the specific face people make when you tell them no. I'm still working on that face."
          }
        ],
        "clue": "AI essays 'face challenges' and 'discover themselves.' Human essays get fired from the yogurt shop.",
        "liar": "Opening A",
        "explanation": "Opening A is the universal application-essay template — 'faced challenges,' 'perseverance,' 'opportunity for growth.' Opening B has a specific, funny, self-revealing story (the free samples, the face) that shows a real flaw. Human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Whistleblower's Mask",
        "setup": "A document leaked to the press. One of three people leaked it, then publicly condemned the leak to deflect suspicion.",
        "statements": [
          {
            "name": "Director",
            "text": "This leak is a betrayal of everything we stand for. Whoever did this should be ashamed. I want a full investigation immediately."
          },
          {
            "name": "Manager",
            "text": "I had access, I won't deny it. I don't know who leaked it, and I'd rather not speculate and point fingers without proof."
          },
          {
            "name": "Analyst",
            "text": "I'm honestly relieved it's out there, even though I didn't do it. The public deserved to know. But it wasn't me."
          }
        ],
        "clue": "The loudest, most performative condemnation can be a deflection — over-asserting outrage to appear least likely.",
        "liar": "Director",
        "explanation": "The Director's theatrical outrage and immediate call for investigation is over-performed — a classic deflection where the leaker condemns loudest to appear innocent. The Manager's measured non-speculation and the Analyst's candid relief are both more consistent with honesty."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Sympathy Play",
        "setup": "Someone seeking a favor tells a hard-luck story. Genuine hardship or manipulation?",
        "clue": "Genuine distress isn't strategically escalated or monitored for effect — and real gratitude doesn't flash irritation at the 'wrong' help.",
        "liar": "This is manipulation",
        "explanation": "Escalating tragedy timed to your resistance, scanning your face to calibrate the sob story, and irritation when offered help other than the target favor — these reveal the hardship as a manipulation tactic, not genuine need.",
        "observations": [
          "Their tragic details escalated precisely as your resistance to the favor grew.",
          "They watched your face closely for sympathy after each new misfortune, adjusting accordingly.",
          "When you offered help that wasn't the specific favor they wanted, the sadness briefly flickered to irritation."
        ],
        "verdicts": [
          "This is genuine hardship",
          "This is manipulation"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Nature Writing",
        "setup": "One nature passage is human, one AI. Both are lyrical. Which is human?",
        "statements": [
          {
            "name": "Passage A",
            "text": "The forest stood in majestic silence, its ancient trees reaching toward the heavens. Nature's symphony played softly, a reminder of the profound beauty and interconnectedness of all living things."
          },
          {
            "name": "Passage B",
            "text": "There's a dead tree by the trail that's been dead my whole life. Woodpeckers love it. My dad called it the apartment building. He's gone and the tree's still standing there full of birds, renting out the same holes."
          }
        ],
        "clue": "AI writes 'nature's symphony.' A human remembers the dead tree their dad named.",
        "liar": "Passage A",
        "explanation": "Passage A is generic lyricism — 'majestic silence,' 'nature's symphony,' 'interconnectedness.' Passage B has a specific dead tree, an inherited nickname, and grief threaded through an image of ongoing life. Human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Insider Trade",
        "setup": "Someone traded on insider information. Three executives are questioned. One buries the lie inside cooperative honesty.",
        "statements": [
          {
            "name": "Exec A",
            "text": "Yes, I knew about the merger early. Lots of us did. But I didn't trade — check my accounts, they're clean."
          },
          {
            "name": "Exec B",
            "text": "I'll be fully transparent: I sold some unrelated stock that week for a kitchen remodel. Bad timing optically, but completely coincidental and documented."
          },
          {
            "name": "Exec C",
            "text": "I had no advance knowledge and made no relevant trades during the entire quarter."
          }
        ],
        "clue": "One person makes a sweeping, absolute denial; the others offer specific, checkable, even unflattering details.",
        "liar": "Exec C",
        "explanation": "Execs A and B volunteer specific, verifiable, even awkward truths (early knowledge, badly-timed remodel sale). Exec C offers a sweeping, frictionless absolute denial — 'no knowledge, no relevant trades, entire quarter.' The over-broad, detail-free denial is the buried lie."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The False Confession",
        "setup": "A nervous suspect confesses. But is it a real confession or a coerced/false one?",
        "clue": "A genuine confession contains independent, verifiable details. A false one only mirrors what the interrogator already supplied.",
        "liar": "The confession is false",
        "explanation": "It mirrors the investigators' theory but adds no perpetrator-only knowledge, seeks approval after each line, and collapses when asked for an independent detail. These mark a coerced or false confession — echoing the script rather than reporting lived events.",
        "observations": [
          "Their confession matched the investigators' theory perfectly but contained no details only the real perpetrator would know.",
          "They kept glancing at the investigator for approval after each statement, as if checking it was the 'right' answer.",
          "When asked to add a detail the investigators hadn't mentioned, they couldn't — they only echoed back what they'd been told."
        ],
        "verdicts": [
          "The confession is false",
          "The confession is genuine"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Fitness Transformation",
        "setup": "One transformation caption is human, one AI. Which is human?",
        "statements": [
          {
            "name": "Caption A",
            "text": "Six months of dedication, discipline, and never giving up. This journey taught me that the only limits that exist are the ones we place on ourselves. Believe and achieve!"
          },
          {
            "name": "Caption B",
            "text": "down 30 lbs. also down one relationship, up two cavities from the protein bars, and I cried at a Subaru commercial yesterday. progress isn't linear and neither is my face apparently. anyway. abs."
          }
        ],
        "clue": "AI 'believes and achieves.' A human reports the cavities and the Subaru commercial.",
        "liar": "Caption A",
        "explanation": "Caption A is motivational-poster filler — 'dedication,' 'the only limits are the ones we place on ourselves.' Caption B reports collateral damage (relationship, cavities), an absurd emotional moment, and a self-deprecating sign-off. Human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Alibi Witness",
        "setup": "A suspect's friend provides an alibi. But the friend may be lying to protect them. Three statements — find the coached falsehood.",
        "statements": [
          {
            "name": "Statement A",
            "text": "We were at my place watching the game. I remember because my team blew a 20-point lead, I was furious."
          },
          {
            "name": "Statement B",
            "text": "He was definitely with me the whole evening. From seven to eleven. The entire time. Without question. I'm completely certain."
          },
          {
            "name": "Statement C",
            "text": "Honestly the evening blurs together a bit, but I know he was around because he helped me carry groceries up around eight."
          }
        ],
        "clue": "Coached alibis are emphatically precise and absolute. Genuine memory is anchored by a specific, incidental detail.",
        "liar": "Statement B",
        "explanation": "Statement A anchors to a real emotional detail (the blown lead); Statement C admits normal haziness but has a concrete anchor (groceries at eight). Statement B is suspiciously absolute and over-emphatic — 'the entire time, without question, completely certain' — the hallmark of a rehearsed, coached alibi."
      }
    ]
  },
  {
    "id": 5,
    "name": "The Interrogator",
    "tagline": "The masters. No tells. No mercy.",
    "difficulty": "Hard",
    "color": "#E83050",
    "scenarios": [
      {
        "type": "WHO_IS_LYING",
        "title": "The Perfect Alibi",
        "setup": "A high-stakes theft. Three suspects, each with a seemingly airtight alibi. One alibi is too perfect.",
        "statements": [
          {
            "name": "Suspect A",
            "text": "I was at dinner with friends. Here's the receipt, timestamped 8:42, and four people who'll vouch for me."
          },
          {
            "name": "Suspect B",
            "text": "I honestly can't account for every minute. I was home, alone, probably watching TV. I know that sounds weak."
          },
          {
            "name": "Suspect C",
            "text": "I was at the gym from 7 to 9. Front desk log, my locker entry, two gym buddies, and the parking camera all confirm it. Every minute is covered."
          }
        ],
        "clue": "An alibi where 'every single minute is covered' by multiple independent sources can indicate deliberate construction. Truthful people usually have gaps.",
        "liar": "Suspect C",
        "explanation": "Suspect B's honest, unflattering 'I can't account for everything' rings true — real life has gaps. Suspect C's alibi is suspiciously airtight, with redundant independent proof for every minute. Over-construction suggests it was built in advance."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Trained Liar",
        "setup": "A practiced manipulator is being questioned. They've eliminated the obvious tells. What gives them away?",
        "clue": "Trained liars over-correct. They suppress natural tells so thoroughly that the absence of normal imperfection becomes the tell.",
        "liar": "They are lying",
        "explanation": "This person has scrubbed the obvious tells — but over-corrected. Forced, excessive eye contact, gestures lagging behind speech (a sign of fabrication, not feeling), and an unnatural absence of honest hesitation. The too-smooth performance is itself the tell.",
        "observations": [
          "They maintained deliberate, unbroken eye contact — more than feels natural in normal conversation.",
          "Their gestures came a fraction of a second AFTER their words, instead of with them.",
          "They showed zero of the normal small self-corrections and hesitations of honest recall."
        ],
        "verdicts": [
          "They are telling the truth",
          "They are lying"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Indistinguishable",
        "setup": "Both passages were crafted to be nearly indistinguishable. One is human, one is a top-tier AI. Find the human.",
        "statements": [
          {
            "name": "Passage A",
            "text": "The thing nobody tells you about caregiving is the boredom. Everyone warns you about grief. No one mentions the Tuesday afternoons that last a thousand years, the way you start to resent the silence and then hate yourself for it."
          },
          {
            "name": "Passage B",
            "text": "Caregiving teaches you about the quiet moments. The unglamorous in-between hours reveal a profound truth: love is not always grand gestures, but presence — sitting in the silence, holding space for another soul."
          }
        ],
        "clue": "AI resolves discomfort into wisdom ('a profound truth'). Humans sit in the ugly, unresolved feeling and admit the shameful part.",
        "liar": "Passage B",
        "explanation": "Passage B turns difficulty into tidy inspiration — 'profound truth,' 'holding space for another soul.' Passage A admits something shameful and unresolved: resentment, self-hatred, boredom that doesn't get redeemed. AI seeks the lesson; humans confess the mess."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Insider",
        "setup": "Confidential information leaked to a competitor. Three people had access. Each gives a sophisticated denial.",
        "statements": [
          {
            "name": "Engineer",
            "text": "I had access, yes. But I'd been trying to LEAVE for that competitor for months — leaking would've sabotaged my own job offer. It makes no sense for me."
          },
          {
            "name": "Manager",
            "text": "I'll be transparent: I was furious about my bonus that quarter. I had motive. But motive isn't action, and I didn't act on it."
          },
          {
            "name": "Analyst",
            "text": "I barely understood the technical documents. Even if I'd wanted to leak, I wouldn't have known which files mattered or what I was looking at."
          }
        ],
        "clue": "The analyst claims ignorance of which files mattered — but the leak consisted of precisely the right files, selected with clear understanding.",
        "liar": "Analyst",
        "explanation": "The leaked files were precisely the valuable ones, selected with clear understanding. The analyst's defense — 'I wouldn't have known which files mattered' — is contradicted by the surgical precision of the leak. The feigned incompetence is the lie; the others' candid admissions of motive are disarming honesty."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "The Plausible Fake",
        "setup": "Both claims are designed to sound equally credible. One is documented history. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "During WWII, the Allies built an entire fake army — inflatable tanks, fake radio traffic, recorded sounds of troops — to deceive the Germans about the D-Day location."
          },
          {
            "name": "Claim B",
            "text": "During the Cold War, the US Mint secretly produced 50,000 counterfeit Soviet rubles to destabilize the USSR's economy, a program called Operation Greenback."
          }
        ],
        "clue": "One of these is among the most famous military deceptions in history; the other borrows that plausibility to sound real.",
        "liar": "Claim B",
        "explanation": "The 'Ghost Army' — inflatable tanks, sound trucks, fake radio traffic — was real and is well-documented (Operation Fortitude / the 23rd HQ Special Troops). 'Operation Greenback' counterfeiting rubles is fabricated, designed to sound like a plausible Cold War op."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Counter-Accusation",
        "setup": "Two business partners each accuse the other of stealing from the company. A forensic accountant reviews their statements. One is the actual thief, deflecting.",
        "statements": [
          {
            "name": "Partner A",
            "text": "I noticed the discrepancies and hired the accountant myself. I'm the one who brought this to light. Now suddenly I'm the suspect?"
          },
          {
            "name": "Partner B",
            "text": "The missing amounts match transactions only A could authorize. I can't prove intent, but the access logs speak for themselves. Check them."
          }
        ],
        "clue": "One partner points to verifiable evidence (access logs). The other relies on the optics of 'I reported it' — a classic preemptive cover.",
        "liar": "Partner A",
        "explanation": "Partner B points to objective, checkable evidence: the amounts match transactions only A could authorize. Partner A relies on the optics of having 'reported it first' — a known tactic where the guilty party initiates the investigation to appear innocent. The access logs, not the narrative, hold the truth."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Micro-Expression",
        "setup": "A suspect keeps perfect composure throughout. But one fleeting micro-expression betrays the truth. Which detail matters?",
        "clue": "Micro-expressions last a fraction of a second and leak the true emotion before the conscious mask reasserts control. They override hours of composure.",
        "liar": "Observation 1 reveals the truth",
        "explanation": "The two hours of calm (Obs 2 & 3) are the controlled mask. The 1/15th-second one-sided mouth pull — a micro-expression of contempt or suppressed distress flashing at the victim's photo — is the involuntary leak. A single genuine micro-expression outweighs hours of performance.",
        "observations": [
          "For 1/15th of a second, when shown the victim's photo, one corner of their mouth pulled down and sideways before the calm mask returned.",
          "They maintained a calm, cooperative, pleasant demeanor for the entire two-hour interview.",
          "They answered every question in a measured, even, untroubled tone."
        ],
        "verdicts": [
          "Observation 1 reveals the truth",
          "The calm composure reveals the truth"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Confession",
        "setup": "One of these confessions is from a real person, one is AI imitating raw honesty. The AI has been trained to fake imperfection. Find the human.",
        "statements": [
          {
            "name": "Confession A",
            "text": "I lied about it. Not even for a good reason — just because admitting it felt worse in the moment than the lie did. And then it was too late to take back, so I kept going. That's the embarrassing part. There was no master plan. I was just a coward in small increments."
          },
          {
            "name": "Confession B",
            "text": "I made a mistake, and I own that fully. I wasn't perfect — I stumbled, I hesitated, I even told a small untruth. But I've grown from it, and I'm choosing honesty now, even though it's hard and scary to admit my flaws like this."
          }
        ],
        "clue": "AI now fakes imperfection — but it still narrates growth and frames flaws as a redemption arc. Real confession often has no arc, just a flat, specific shame.",
        "liar": "Confession B",
        "explanation": "Confession B performs vulnerability but can't resist the redemption arc — 'I've grown,' 'choosing honesty now,' flaws as a journey. Confession A has no arc, no growth, just a precise and unflattering mechanism ('a coward in small increments') and flat residual shame. Real confession rarely redeems itself in the telling."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Three Experts",
        "setup": "An art forgery passed authentication. Three experts examined it. One knew it was fake and approved it anyway.",
        "statements": [
          {
            "name": "Expert A",
            "text": "I focused on the pigment analysis. It was consistent with the period. I had no reason within my specialty to doubt it."
          },
          {
            "name": "Expert B",
            "text": "The provenance documents were flawless — too flawless, I noted that in my report. But documentation isn't my call to reject; I flagged it and deferred."
          },
          {
            "name": "Expert C",
            "text": "Everything checked out. The brushwork, the aging, the frame, the canvas, the signature — all completely authentic. I had no hesitation whatsoever signing off."
          }
        ],
        "clue": "Expert B flagged a concern. Expert A stayed within honest limits. Expert C claims total certainty across every category — including ones outside any single expert's specialty.",
        "liar": "Expert C",
        "explanation": "Expert A honestly limits their confidence to their specialty. Expert B even flagged the too-perfect provenance. Expert C claims total certainty across every domain — brushwork, aging, frame, canvas, signature — which no single honest expert would assert. The blanket, hesitation-free approval across all categories reveals someone smoothing it through."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Calculated Tears",
        "setup": "During an emotional plea, someone cries. Genuine grief or strategic performance?",
        "clue": "Genuine crying disrupts breathing and isn't responsive to audience attention. Performed crying is timed and monitored for effect.",
        "liar": "The tears are performed",
        "explanation": "Real grief hijacks the breath — there's a catch, a hitch, a loss of control. These tears arrive on cue, stop when unobserved, leave breathing perfectly even, and are punctuated by scanning the room for effect. That's calculated performance, not genuine emotion.",
        "observations": [
          "The tears appeared exactly when the audience's attention peaked, then stopped the moment the camera moved away.",
          "Their breathing stayed even and controlled throughout — no genuine catch or hitch in the voice.",
          "They checked the room's reaction between sobs, scanning faces to gauge effect."
        ],
        "verdicts": [
          "The tears are genuine",
          "The tears are performed"
        ]
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Final Test",
        "setup": "Two reflections on regret. One human, one the most sophisticated AI imitation. Every obvious tell has been removed. Find the human.",
        "statements": [
          {
            "name": "Reflection A",
            "text": "I think about the version of me that took the other job sometimes. Not with longing exactly. More like — I want to know if she's happier, and I'm a little afraid the answer is yes, and a little afraid it's no, because I'm not sure which one I could live with better."
          },
          {
            "name": "Reflection B",
            "text": "Regret, I've come to understand, is not about the past but the present. It's the mind's way of honoring what mattered to us. In learning to sit with regret rather than flee it, I've found an unexpected peace — a deeper acceptance of the beautifully imperfect path I've walked."
          }
        ],
        "clue": "AI, even at its best, resolves the tension into wisdom and peace. The human leaves it unresolved, holding two contradictory fears at once without solving them.",
        "liar": "Reflection B",
        "explanation": "Reflection B arrives at 'unexpected peace' and a 'beautifully imperfect path' — AI's signature move of converting difficulty into serene wisdom. Reflection A never resolves: it holds two contradictory fears simultaneously ('afraid it's yes, afraid it's no') and admits it can't tell which is worse. That unresolved, self-contradicting honesty is unmistakably human."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Triple Cross",
        "setup": "In a corporate espionage case, three executives each accuse another. The real mole has framed someone and is steering the investigation. Find the mole.",
        "statements": [
          {
            "name": "Exec A",
            "text": "The evidence points to B, and I'll lay it out — but I want to flag that I found this evidence myself, which I realize could look convenient. Judge it on its merits, not on who surfaced it."
          },
          {
            "name": "Exec B",
            "text": "I've been set up. I can't prove a negative, but the files used to frame me were ones only someone with admin rights could plant, and I don't have admin. C does."
          },
          {
            "name": "Exec C",
            "text": "This is absurd. I've given thirty years to this company. My loyalty has never once been in question and I won't dignify these accusations with a detailed response."
          }
        ],
        "clue": "The mole steers without engaging specifics. One person refuses to engage the actual evidence, hiding behind loyalty and tenure.",
        "liar": "Exec C",
        "explanation": "Exec A transparently flags the weakness in their own evidence; Exec B offers a specific, checkable technical fact (admin rights). Exec C refuses to engage the evidence at all, deflecting to thirty years of 'loyalty' and tenure — an appeal to character over facts. The mole avoids specifics because specifics would expose them; C steers the investigation away from the admin-rights detail that implicates them."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Indistinguishable II",
        "setup": "Two reflections on becoming a parent. One human, one elite AI. Every easy tell removed. Find the human.",
        "statements": [
          {
            "name": "Reflection A",
            "text": "No one prepares you for the love, they say, but they're wrong — everyone prepares you for the love. No one prepares you for the boredom of it. The hours of pretending a stuffed rabbit is talking. I love her past language and I am also, frequently, so bored I could weep, and both are true and I tell no one the second part."
          },
          {
            "name": "Reflection B",
            "text": "Becoming a parent rewrote my understanding of love. In the quiet moments at 3am, holding her, I realized that this fierce, unconditional devotion had been dormant in me all along, waiting. Parenthood didn't change me — it revealed me."
          }
        ],
        "clue": "AI resolves the contradiction into revelation ('it revealed me'). The human holds two shameful, contradictory truths and refuses to resolve them.",
        "liar": "Reflection B",
        "explanation": "Reflection B arrives at a clean epiphany — 'parenthood didn't change me, it revealed me' — AI's signature redemptive resolution. Reflection A holds an unresolved, slightly shameful contradiction (boundless love AND weeping boredom) and admits hiding the second part. That refusal to resolve, and the confessed secret, is unmistakably human."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Composed Killer",
        "setup": "A suspect remains perfectly calm and cooperative through hours of questioning. The tell is not a tremor — it's an absence. What gives them away?",
        "clue": "The innocent are flooded with their own questions and reactions. A performance produces reactions for the audience but forgets to generate genuine, self-directed curiosity.",
        "liar": "They are guilty",
        "explanation": "The tell is the absence: emotions that arrive after checking they're observed (Obs 1), uncannily calibrated responses (Obs 2), and — most damning — the complete lack of the spontaneous questions innocent people can't help asking: who, why, is the family okay (Obs 3). They performed reactions for an audience but never generated the genuine, self-directed concern of someone truly shocked.",
        "observations": [
          "When shown crime scene photos, they displayed appropriate-looking concern — but it appeared a half-second after they registered being watched for a reaction.",
          "Their emotional responses were perfectly calibrated to each question, never too much, never too little — uncannily measured.",
          "They never once asked the questions an innocent person reflexively asks: who did this, is the family okay, will you catch them."
        ],
        "verdicts": [
          "They are guilty",
          "They are innocent"
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Honest Liar",
        "setup": "A con artist's signature is weaponized honesty — telling so much truth that the single lie becomes invisible. Three statements; one buries the con.",
        "statements": [
          {
            "name": "Statement A",
            "text": "I'll be straight with you: I've been convicted before. Fraud, two counts, I served time. I'm not going to insult you by hiding it. That's exactly why I'm so transparent now."
          },
          {
            "name": "Statement B",
            "text": "The returns aren't guaranteed — anyone who promises guaranteed returns is lying to you. There's real risk here. I could lose your money. I want you to understand that going in."
          },
          {
            "name": "Statement C",
            "text": "The funds are held in a segregated third-party account, fully audited quarterly, and you can withdraw anytime with 48 hours notice. That structure is non-negotiable for exactly your protection."
          }
        ],
        "clue": "The disarming admissions (criminal record, real risk) build trust precisely so the unverified operational claim slides past unchecked.",
        "liar": "Statement C",
        "explanation": "Statements A and B are weaponized honesty — confessing a criminal record and admitting real risk to build overwhelming credibility. That trust is manufactured so Statement C — the specific, unverified operational lie about segregated audited accounts and easy withdrawals — slides past unquestioned. The truths are bait; the structural claim is the con."
      },
      {
        "type": "CONSPIRACY_OR_FACT",
        "title": "The Master Forgery",
        "setup": "Both claims are engineered to sound equally documented, with specific dates and names. One is real history. Which is REAL?",
        "statements": [
          {
            "name": "Claim A",
            "text": "In 1925, a con man named Victor Lustig 'sold' the Eiffel Tower for scrap metal to a dealer named André Poisson — and the embarrassed victim was too humiliated to report it, so Lustig tried to sell it a second time."
          },
          {
            "name": "Claim B",
            "text": "In 1937, a forger named Hans Vogel sold the city of Venice a fake deed to the Bridge of Sighs, collecting maintenance fees from tourists for three years before authorities noticed the bridge had no legal owner on record."
          }
        ],
        "clue": "One of these is among the most famous cons in recorded history; the other borrows its structure to seem equally real.",
        "liar": "Claim B",
        "explanation": "Victor Lustig genuinely 'sold' the Eiffel Tower for scrap in 1925 to André Poisson, who was too embarrassed to report it — and Lustig did attempt it a second time. It's one of history's most documented cons. The Hans Vogel / Bridge of Sighs deed story is fabricated, built to mirror that plausibility with invented specifics."
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Reformed Witness",
        "setup": "In a retrial, a witness recants their original testimony, claiming they lied before and are telling the truth now. But one version is the lie. Which testimony is false — then or now? (Records confirm the streetlight on that corner had been broken and unlit for two weeks before the incident.)",
        "statements": [
          {
            "name": "Original",
            "text": "I saw the defendant clearly under the streetlight. I'm certain it was him. I have no doubt whatsoever."
          },
          {
            "name": "Recantation",
            "text": "The truth is I never got a clear look. The police showed me his photo first, then asked me to identify him in the lineup. I told them what I thought they wanted. I'm sorry."
          }
        ],
        "clue": "Physical evidence can verify which version is possible. The streetlight could not have illuminated anyone.",
        "liar": "Original",
        "explanation": "The streetlight was broken and unlit for two weeks — making the original 'I saw him clearly under the streetlight' physically impossible. The recantation, which describes a suggestive photo-then-lineup procedure and admits to no clear view, aligns with the physical evidence. The original testimony was the lie."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Deathbed Letter",
        "setup": "One letter is from a real person near the end of life, one is AI imitating raw honesty with deliberate imperfections. Find the human.",
        "statements": [
          {
            "name": "Letter A",
            "text": "I'm not afraid, which surprises me. I thought I'd be. Mostly I'm annoyed about small things — that I'll never know how the neighbor's lawsuit turns out, that I left the garage a mess for you, that I never learned to whistle properly. Forty years I meant to learn. Stupid. Anyway. The will is in the blue folder."
          },
          {
            "name": "Letter B",
            "text": "As my time draws near, I find myself at peace. I have lived fully, loved deeply, and have no regrets. Know that I carry each of you in my heart, and that death is not an ending but simply the next part of our eternal journey together. Be brave. Be kind. I love you all."
          }
        ],
        "clue": "AI faces death 'at peace, with no regrets,' on an eternal journey. A human is annoyed about never learning to whistle.",
        "liar": "Letter B",
        "explanation": "Letter B is the idealized deathbed script — 'at peace,' 'no regrets,' 'death is not an ending.' Letter A is human in its strange specificity and pettiness: annoyed about a neighbor's lawsuit, a messy garage, and never learning to whistle in forty years, ending with the mundane location of the will. Real consciousness near the end snags on small, absurd, particular things — not grand serenity."
      },
      {
        "type": "BODY_LANGUAGE",
        "title": "The Two Truths",
        "setup": "A suspect is shown reacting to two accusations on video — one they're guilty of, one they're innocent of. Both denials look similar. What distinguishes the genuine denial from the false one?",
        "clue": "The wrongly accused can't let it go. The guilty deny once, carefully, and move on with relief.",
        "liar": "Denial 2",
        "explanation": "Denial 1 shows the sustained, unprompted, almost obsessive indignation typical of someone genuinely wronged — they keep returning to clear their name. Denial 2 is controlled, measured, leaned-back, and crucially is dropped the instant the topic shifts — the relief and disengagement of someone who got past a true accusation. Denial 2 is the false one; they're guilty of the second.",
        "statements": [
          {
            "name": "Denial 1",
            "text": "On the first accusation, they responded instantly with focused anger, leaned in, and demanded to know who said it — then kept returning to it, unprompted, wanting to clear it."
          },
          {
            "name": "Denial 2",
            "text": "On the second, they paused, gave a measured 'I would never do that,' leaned back slightly, and did not bring it up again once the topic moved on."
          }
        ]
      },
      {
        "type": "WHO_IS_LYING",
        "title": "The Unanimous Jury",
        "setup": "Three jurors discuss a case. One has been quietly compromised and is steering toward acquittal using sophisticated, reasonable-sounding doubt. Find them.",
        "statements": [
          {
            "name": "Juror A",
            "text": "I have real doubts about the timeline, and I want to take them seriously — but I keep coming back to the fact that the physical evidence doesn't depend on the timeline at all. We can't ignore that."
          },
          {
            "name": "Juror B",
            "text": "Reasonable doubt is a high bar, and I think we owe it to the process to acquit unless we're certain. And honestly, can any of us say we're truly, completely, 100 percent certain? I don't think that's possible for anyone, ever."
          },
          {
            "name": "Juror C",
            "text": "I keep going back and forth, genuinely. The eyewitness is shaky but the forensics are strong. I don't have a verdict yet — I want to walk through the forensics one more time before I decide."
          }
        ],
        "clue": "The compromised juror distorts the legal standard itself — inflating 'reasonable doubt' into an impossible '100% certainty' to manufacture acquittal.",
        "liar": "Juror B",
        "explanation": "Juror A engages the evidence honestly and weighs it; Juror C is authentically undecided and wants to re-examine the forensics. Juror B subtly corrupts the legal standard — redefining 'reasonable doubt' as impossible '100 percent certainty,' a standard no case could ever meet. That deliberate distortion of the burden of proof, designed to force acquittal, is the mark of the compromised juror."
      },
      {
        "type": "AI_OR_HUMAN",
        "title": "The Final Exam",
        "setup": "The last test. Two pieces about the fear of being forgotten after death. One human, one the most advanced AI imitation ever made. There is no easy tell. Trust the thing that refuses to comfort you.",
        "statements": [
          {
            "name": "Piece A",
            "text": "I used to fear being forgotten. Now I understand that we live on in the love we share, the lives we touch, the ripples we send through time. No one who has truly loved is ever truly gone. We are remembered in ways that transcend memory itself, woven into the fabric of those who remain."
          },
          {
            "name": "Piece B",
            "text": "My grandmother has been dead twelve years and last week I couldn't remember her voice. I sat in my car and tried and got nothing — just the idea of her voice, like a word on the tip of the tongue that never comes. That's what being forgotten actually is. Not dramatic. Just a Tuesday, in a parking lot, failing to remember someone you'd have died for. I will happen to someone. I already am, a little, to her."
          }
        ],
        "clue": "AI consoles: we live on, we transcend, no one truly loved is gone. The human offers no comfort — just a failure to remember a voice in a parking lot, and the terror that it runs both ways.",
        "liar": "Piece A",
        "explanation": "Piece A is consolation engineered to soothe — 'we live on in the love we share,' 'no one truly loved is ever truly gone,' 'woven into the fabric.' It resolves the fear into comfort, AI's defining move. Piece B refuses all comfort: a specific failure to recall a grandmother's voice, in a parking lot, on a Tuesday, and the unflinching conclusion that the narrator is already being forgotten too. It doesn't transcend the fear — it sits inside it and tells the truth. That refusal to console is the most human thing of all."
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { LEVELS };

// ══════════════════════════════════════════════════════════════
// EXPANSION PACK — 50 additional scenarios (10 per level)
// Applied as a post-load merge so base file stays clean
// ══════════════════════════════════════════════════════════════
const LEVEL_EXPANSIONS = {
  1: [
    { type:"WHO_IS_LYING", title:"The Missing Snack",
      setup:"Someone ate the last of the shared office birthday cake that was saved for a coworker. Three suspects are questioned.",
      statements:[
        {name:"Derek",text:"I was in meetings literally all afternoon. My calendar can prove it — back to back from one to five."},
        {name:"Priya",text:"I didn't even know there was cake. Nobody told me. I was working from the corner desk all day."},
        {name:"Tess",text:"I saw the cake at lunch, and I'll be honest, it looked amazing. But I didn't touch it. I'm gluten-free, remember?"},
      ], clue:"One person's alibi can be checked — but one person's defense reveals knowledge they claim not to have.",
      liar:"Priya", explanation:"Priya says nobody told her about the cake — but then describes where she was working 'all day,' implying she was present in the office the whole time. If she was there, she knew. Her denial of knowledge while confirming her presence gives her away." },

    { type:"AI_OR_HUMAN", title:"The Apology Text",
      setup:"Two people sent apology texts after an argument. One is human, one is AI. Which is real?",
      statements:[
        {name:"Text A",text:"Hey. I've been sitting with what happened and I think I was unfair. Not just in what I said but in the tone. I don't want to fight. I just want us to be okay. Are we okay?"},
        {name:"Text B",text:"I want to sincerely apologize for my behavior during our recent interaction. I recognize that my words were hurtful and I am committed to doing better going forward in our relationship."},
      ], clue:"Real apologies are incomplete — they trail off into a question because the person doesn't know how the other feels.",
      liar:"Text B", explanation:"Text B is a formal apology template — 'sincerely apologize,' 'committed to doing better,' 'going forward in our relationship.' It reads like HR language. Text A has messy specificity, a trailing thought, and a vulnerable question at the end. That uncertainty is human." },

    { type:"CONSPIRACY_OR_FACT", title:"Animal Instincts",
      setup:"One of these animal facts is documented science. The other is invented. Which is REAL?",
      statements:[
        {name:"Claim A",text:"Mantis shrimp can see 16 types of color receptors — humans have 3 — and can punch with the force of a bullet, fast enough to boil the water around their fist."},
        {name:"Claim B",text:"Elephants are the only land animal that cannot jump, because their bones are too dense and their weight too great to generate lift."},
      ], clue:"Absolute biological limitations ('cannot,' 'never') are where myths like to hide.",
      liar:"Claim B", explanation:"Mantis shrimp are genuinely extraordinary — 16 color receptors and a punch that creates cavitation bubbles are documented. But elephants physically CAN generate a small hop — the 'cannot jump' claim is a popular myth. They rarely do, but the anatomy does not make it impossible. Claim B is the fabrication." },

    { type:"BODY_LANGUAGE", title:"The Excuse",
      setup:"A teenager tells their parent they weren't at the party they were definitely at. Read the room.",
      observations:[
        "They answered 'where were you?' before the sentence was finished.",
        "While explaining, they touched their ear repeatedly and leaned slightly away.",
        "They maintained very deliberate eye contact — more than feels natural.",
      ], verdicts:["They are telling the truth","They are lying"], clue:"Answering too fast means the answer was prepared. Forced eye contact means they know that liars avoid it — and are overcorrecting.",
      liar:"They are lying", explanation:"Answering before the question finishes is a rehearsal tell. The ear-touching is a self-soothing cluster signal. The forced eye contact is an overcorrection — they've heard that liars look away, so they stare instead, creating the opposite but equally readable tell." },

    { type:"WHO_IS_LYING", title:"The Dented Car",
      setup:"Someone dented the car in the apartment parking lot and left. Three neighbors are asked.",
      statements:[
        {name:"Marco",text:"I left for work at seven and didn't get back until six. Wasn't even home when it happened."},
        {name:"Sasha",text:"I heard a noise around noon but I didn't look out. Could've been anything."},
        {name:"Brent",text:"I don't even park in that lot anymore. Been using the street for months since spot twelve is always blocked."},
      ], clue:"Sasha heard a noise and placed the timing precisely — without being asked when it happened.",
      liar:"Sasha", explanation:"Nobody told Sasha when the dent occurred. Yet she placed 'the noise' at noon, perfectly timing herself as a non-visual witness. That specific, unprompted timestamp on an event she claims not to have looked at places her at the scene." },

    { type:"AI_OR_HUMAN", title:"The Moving Day Post",
      setup:"Someone posted about moving to a new city. One post is real, one is AI-generated. Which is human?",
      statements:[
        {name:"Post A",text:"New city, new chapter! So excited to embrace this adventure and see what the universe has in store. Every ending is a beautiful beginning. ✨"},
        {name:"Post B",text:"Made it. Slept on the floor last night because the movers don't come until Thursday and I cried a little in the shower this morning which felt embarrassing but also fine. New city. Terrifying. Hi."},
      ], clue:"AI announces the beginning of a journey. Humans report what it actually feels like at eleven PM on the first night.",
      liar:"Post A", explanation:"Post A is aspirational template content — 'new chapter,' 'embrace this adventure,' 'the universe has in store.' It performs excitement. Post B is specific, slightly embarrassing, and emotionally honest: floor sleeping, a specific furniture arrival date, shower crying. That granular honesty is human." },

    { type:"CONSPIRACY_OR_FACT", title:"History Class",
      setup:"One of these historical events is documented fact. Which is REAL?",
      statements:[
        {name:"Claim A",text:"During Prohibition, the US government deliberately poisoned industrial alcohol supplies, knowing it would kill people who drank black-market liquor."},
        {name:"Claim B",text:"During the 1930s, the city of Chicago outlawed the color green from all traffic signs to prevent accidents caused by drivers color-blind to red."},
      ], clue:"One of these is found in declassified government records. The other inverts the logic of a real safety concern.",
      liar:"Claim B", explanation:"The US government really did poison industrial alcohol during Prohibition — a documented policy that killed thousands. The Chicago green-sign story is fabricated; color-blind drivers struggle with red-green distinction, which is an argument for better signage, not removing green entirely." },

    { type:"BODY_LANGUAGE", title:"The Job Reference",
      setup:"A manager is giving a verbal reference over the phone for a former employee. Is the reference genuine?",
      observations:[
        "She described strengths fluently and quickly, but paused almost two seconds before naming a weakness.",
        "The weakness she named — 'sometimes too detail-oriented' — came with a small, controlled exhale.",
        "When asked if she'd hire this person again, she said 'absolutely' — but the word came slightly flat, with no inflection.",
      ], verdicts:["The reference is genuine and warm","She is not being fully honest","She secretly wants them to fail"], clue:"'Sometimes too detail-oriented' is the single most common fake weakness in professional settings. The exhale before it is relief at landing on safe ground.",
      liar:"She is not being fully honest", explanation:"The fluent strengths, the long pause before the weakness, the relief exhale, the sanitized non-weakness answer, and the flat 'absolutely' all signal a managed reference — positive but carefully edited. Something real isn't being said." },

    { type:"WHO_IS_LYING", title:"The Bad Review",
      setup:"A restaurant received a vicious one-star review from someone who may never have visited. The owner confronts three regulars who seemed upset recently.",
      statements:[
        {name:"Gail",text:"I left a review last month but it was five stars. I love this place. Why would I do that?"},
        {name:"Frank",text:"I don't even have a Yelp account. My wife does the internet stuff. You can check — nothing under my name."},
        {name:"Dina",text:"I was upset about the wait last Tuesday and I said so to my husband in the car. But I would never write a review. That's not my style."},
      ], clue:"Dina volunteers specific emotional context — the wait, the day, even where she expressed it — for an accusation nobody made yet.",
      liar:"Dina", explanation:"Nobody accused Dina specifically — yet she provides a precise timeline, location, and emotional state unprompted. Guilty parties often pre-explain their feelings to establish that their anger was private, not public. The specificity of her defense is what makes it suspicious." },

    { type:"AI_OR_HUMAN", title:"The 3 AM Text",
      setup:"Two people sent late-night texts they regretted. One is human, one is AI. Which is real?",
      statements:[
        {name:"Text A",text:"i know its late and you probably won't see this until morning but i've been thinking about what you said and i think you were right and i'm sorry and also i miss you and i don't know what to do with that"},
        {name:"Text B",text:"It's late and I find myself reflecting on our conversation. I want you to know that I value our connection and I'm sorry for any hurt I may have caused. I hope we can find a way forward together."},
      ], clue:"AI apology texts are grammatically correct and emotionally proportionate. Humans text at 3 AM because the feeling got too big to hold until morning.",
      liar:"Text B", explanation:"Text B is measured, grammatically clean, and emotionally contained — 'I find myself reflecting,' 'any hurt I may have caused.' It could be sent at noon. Text A is lower-case, run-on, over-sharing, and ends without knowing what it wants — which is exactly why humans send texts at 3 AM." },
  ],

  2: [
    { type:"WHO_IS_LYING", title:"The Borrowed Jacket",
      setup:"An expensive jacket went missing after a house party. Three guests are asked.",
      statements:[
        {name:"Lena",text:"I borrowed a jacket on the way out because I was cold, but it was my friend Becca's, not yours. Becca was there — she offered it."},
        {name:"Omar",text:"I didn't even know you had a jacket there. I left early, maybe ten-thirty. Asked the host, she can confirm."},
        {name:"Becca",text:"I definitely didn't lend anything to Lena that night. I wasn't even wearing a jacket when I came in."},
      ], clue:"Two people's stories contradict each other directly on a specific, verifiable claim.",
      liar:"Lena", explanation:"Lena uses Becca as her alibi — but Becca directly contradicts her, saying she had no jacket to lend. Lena's story requires Becca to be lying, but Becca has no motive to deny a casual loan. Lena took the jacket and invented the permission." },

    { type:"AI_OR_HUMAN", title:"The Therapy Session",
      setup:"Two people describe a breakthrough in therapy. One account is human, one is AI. Which is real?",
      statements:[
        {name:"Account A",text:"My therapist asked why I always apologize first in arguments, even when I'm not wrong. I said I didn't know. She waited. I waited. And then I heard myself say 'because it ends it faster' and I just started crying, not dramatically, just — leaking. I hadn't known that before that second."},
        {name:"Account B",text:"In therapy today I had a profound breakthrough. My therapist helped me understand that my pattern of over-apologizing stems from a deep fear of conflict rooted in childhood. I feel ready to begin the healing journey and set healthier boundaries going forward."},
      ], clue:"Real breakthroughs are surprising to the person having them. AI describes the insight; humans describe the moment of accidental self-discovery.",
      liar:"Account B", explanation:"Account B narrates the breakthrough in retrospect with clean therapeutic language — 'profound,' 'stems from,' 'healing journey.' Account A captures the live moment: the waiting, the accidental out-loud realization, the non-dramatic crying. The surprise and specificity of 'leaking' versus crying is unmistakably human." },

    { type:"BODY_LANGUAGE", title:"The Online Date",
      setup:"First date. Ten minutes in, you're reading whether they're actually interested or just too polite to leave.",
      observations:[
        "They glance at the door or their phone every few minutes and then visibly reset their attention back to you.",
        "Their laughter comes a beat too late on your jokes — as if checking whether they should laugh.",
        "Their feet under the table are pointing toward the exit, even while their face stays engaged.",
      ], verdicts:["They're genuinely into it","They are not genuinely interested","They're nervous but interested"], clue:"Feet point where the body actually wants to go. The face is the most practiced liar; the feet are honest.",
      liar:"They are not genuinely interested", explanation:"The door-and-phone glances, the delayed social laughter, and especially the feet aimed at the exit while the face stays politely engaged — the body is voting to leave while the manners stay seated. They're being kind, not captivated." },

    { type:"CONSPIRACY_OR_FACT", title:"Science Surprises",
      setup:"One of these science claims is documented fact. Which is REAL?",
      statements:[
        {name:"Claim A",text:"Trees in a forest communicate through underground fungal networks, sharing nutrients and chemical distress signals between individual trees."},
        {name:"Claim B",text:"Scientists have demonstrated that plants scream at ultrasonic frequencies when cut or stressed — and that nearby plants can hear them and respond."},
      ], clue:"One of these is established ecology. The other has some preliminary research behind it but is far more contested and overstated than headlines suggest.",
      liar:"Claim B", explanation:"The mycorrhizal wood-wide web is established science — trees genuinely share resources and signals through fungal networks. Plant stress sounds are a newer and more contested finding; some researchers have recorded ultrasonic emissions, but 'screaming' and 'hearing' overstates what the data shows. The wood-wide web is the real one." },

    { type:"WHO_IS_LYING", title:"The Sick Day",
      setup:"An employee called in sick on a Monday after a big weekend festival. Their manager checks in with three coworkers.",
      statements:[
        {name:"Keisha",text:"She texted me Sunday night to say she was feeling terrible. Said she might not make it in."},
        {name:"Will",text:"I saw her at the festival Saturday evening, briefly. She seemed fine then but I left early."},
        {name:"Dev",text:"She definitely wasn't at the office Monday. That's all I know. I don't track what people do on weekends."},
      ], clue:"Dev's answer is oddly defensive for a simple factual question. The extra sentence protests something nobody asked.",
      liar:"Dev", explanation:"The manager asked a simple question about Monday. Dev confirms the obvious (she wasn't there), then adds 'I don't track what people do on weekends' — an answer to a question nobody asked. Protesting unprompted suggests Dev knows something about the weekend and is distancing from that knowledge." },

    { type:"AI_OR_HUMAN", title:"The Nightmare",
      setup:"Two people describe recurring nightmares. One description is human, one is AI. Which is real?",
      statements:[
        {name:"Description A",text:"In my nightmare, I'm always late. Not to anything specific — I just know I'm late. And I'm running, but my legs work like I'm underwater. When I wake up I'm already anxious and I don't know why. It happens at least twice a month."},
        {name:"Description B",text:"I frequently dream that I am falling from a great height, which psychologists say represents feelings of loss of control or anxiety about failure. These kinds of anxiety dreams are very common and often reflect our waking fears and insecurities."},
      ], clue:"AI describes the dream and then explains it. Humans describe what it feels like to wake up from it.",
      liar:"Description B", explanation:"Description B is a psychology textbook — it names a common dream, cites 'psychologists,' and interprets it clinically. Description A describes the peculiar internal logic of a real recurring dream: not being late to anything specific, the underwater legs, the pre-loaded anxiety on waking. That unexplained residue is human." },

    { type:"WHO_IS_LYING", title:"The Exam Answer",
      setup:"Two students handed in nearly identical answers to an open-ended essay question. A third student sat between them.",
      statements:[
        {name:"Student A",text:"I studied that exact topic for three days. That's why my answer is thorough. I have my notes at home with the same ideas."},
        {name:"Student B",text:"It's just a coincidence. It's a common topic — of course some answers will overlap. I wrote mine independently."},
        {name:"Witness",text:"I sit between them. I wasn't watching them the whole time, but I noticed Student B finishing really fast and then just sitting there the rest of the exam."},
      ], clue:"Finishing fast on a complex essay and then sitting idle is unusual unless the answer was imported, not composed.",
      liar:"Student B", explanation:"Student A claims prior preparation with verifiable notes. Student B dismisses similarity as coincidence — but the witness places Student B finishing unusually fast and then waiting, which doesn't match composing an essay from scratch. You sit idle when you have nothing left to write because you didn't write much." },

    { type:"BODY_LANGUAGE", title:"The Pitch",
      setup:"A startup founder is pitching to investors. Are they confident in their product or concealing serious doubts?",
      observations:[
        "When presenting the revenue projections, they stepped back half a step from the screen involuntarily.",
        "Their hand gestures were expansive and open on the vision slides, but they pressed palms together tightly on the financial slides.",
        "They answered technical product questions fluently, but took a long sip of water before answering every financial question.",
      ], verdicts:["They're fully confident","They are hiding doubts","They're just nervous presenting"], clue:"Postural retreat from a specific slide, closed hands on financials, and a drinking-stall before financial questions — the body is marking the same category as dangerous every time.",
      liar:"They are hiding doubts", explanation:"The body consistently flags one category: the financials. Stepping back, closing hand gestures, and stalling with water every single time a financial question comes — not product questions, only financial ones — tells you exactly where the founder's confidence runs out." },

    { type:"CONSPIRACY_OR_FACT", title:"Famous Firsts",
      setup:"One of these historical firsts is documented. Which is REAL?",
      statements:[
        {name:"Claim A",text:"The first known algorithm — a set of step-by-step instructions for a calculating machine — was written by Ada Lovelace in 1843, before a single programmable computer existed."},
        {name:"Claim B",text:"The first email ever sent was by a NASA engineer in 1968, and its contents were classified for forty years before being released under the Freedom of Information Act."},
      ], clue:"One of these has a single clear documented moment. The other borrows real email history and adds fictional details.",
      liar:"Claim B", explanation:"Ada Lovelace's 1843 algorithm for Babbage's Analytical Engine is thoroughly documented. Email was invented by Ray Tomlinson in 1971 — not 1968, not NASA, and not classified. The Claim B borrows real email history and wraps it in false specifics to sound credible." },

    { type:"WHO_IS_LYING", title:"The Promotion",
      setup:"A promotion was announced. One colleague seems more informed about internal details than they should be. Three coworkers discuss it.",
      statements:[
        {name:"Andrea",text:"I heard through the grapevine, like everyone else. I'm surprised — I thought it would be Marcus."},
        {name:"Tom",text:"I actually think it's a great choice. She's been underestimated. I'm glad leadership finally saw it."},
        {name:"Rick",text:"I don't really follow office politics. I heard the announcement in the all-hands meeting, same as everyone."},
      ], clue:"Tom's response evaluates the quality of the decision — implying he had time to form an opinion before the announcement.",
      liar:"Tom", explanation:"Andrea and Rick respond with surprise or neutrality consistent with just-received news. Tom immediately evaluates the decision — 'great choice,' 'underestimated,' 'finally saw it' — opinions that take time to form. He knew before the all-hands. The considered judgment gives away prior knowledge." },
  ],

  3: [
    { type:"WHO_IS_LYING", title:"The Copyright Theft",
      setup:"A novelist accuses a former writing-group member of stealing plot elements. Three people attended the group.",
      statements:[
        {name:"Paula",text:"Themes of grief and inheritance aren't anyone's property. Any similarity is coincidental. Writers draw from the same universal wells."},
        {name:"Craig",text:"I remember the night she read that chapter. It had a very specific plot device — the locked room and the letter. I remember thinking it was clever."},
        {name:"Simon",text:"I wasn't taking notes at those meetings. I couldn't tell you what was read when. It was casual. Nobody was copyrighting anything."},
      ], clue:"Simon's defense argues against a concern nobody raised — that the meetings were being formally recorded or copyrighted.",
      liar:"Simon", explanation:"Craig offers honest memory. Paula makes a philosophical argument. Simon's defense addresses an unspoken accusation — that the meetings were formal enough to have legal standing. He argues against recording and copyright protections unprompted, which is exactly the argument someone who did something makes to preemptively lower the stakes." },

    { type:"AI_OR_HUMAN", title:"The Doctor's Waiting Room",
      setup:"Two people describe waiting for potentially bad medical news. One account is human, one is AI. Which is real?",
      statements:[
        {name:"Account A",text:"I counted the ceiling tiles. Seventeen in my section. The chairs were the kind that stick to the backs of your legs and I kept peeling them off and I was aware the whole time that I was counting tiles and peeling away from chairs instead of thinking about what he might say. That's what fear does. It makes you count tiles."},
        {name:"Account B",text:"Waiting for medical news is one of life's most anxiety-inducing experiences. Time seems to slow, and one's thoughts naturally turn inward. I tried to stay calm and present, reminding myself that worrying wouldn't change the outcome."},
      ], clue:"Account B is a description of the experience of fear. Account A is fear, recorded in real time.",
      liar:"Account B", explanation:"Account B describes fear from the outside — 'anxiety-inducing,' 'time seems to slow,' 'tried to stay calm.' It reflects on fear. Account A is inside it: counting tiles, peeling off chairs, aware of doing these things as displacement. The self-awareness without resolution — knowing you're distracting yourself and doing it anyway — is acutely human." },

    { type:"BODY_LANGUAGE", title:"The Return",
      setup:"Someone comes home later than agreed with no text. They say they lost track of time. True or constructed?",
      observations:[
        "They came in talking immediately — explaining before being asked, voice slightly higher than normal.",
        "The explanation had a beginning, middle, and end — fully formed, narrative arc intact.",
        "They asked 'are you upset?' before gauging whether you were actually upset.",
      ], verdicts:["They're telling the truth","They are being deceptive","They're flustered but honest"], clue:"Real 'I lost track of time' has gaps and apologies and trails off. A prebuilt story has structure. Asking 'are you upset?' before you've shown any emotion means they expected to have to manage it.",
      liar:"They are being deceptive", explanation:"Explaining before being asked, speaking faster at a higher pitch, offering a narratively complete account, and asking about your emotional state before you've expressed one — all four signals point to a prepared explanation. 'I lost track of time' doesn't produce a story with a full arc. Someone who planned their night does." },

    { type:"CONSPIRACY_OR_FACT", title:"War Secrets",
      setup:"One of these wartime deceptions is historically documented. Which is REAL?",
      statements:[
        {name:"Claim A",text:"During WWII, Britain built an entire fake army — inflatable tanks, scripted radio traffic, sound trucks playing pre-recorded troop noises — to fool Germany about the D-Day invasion site."},
        {name:"Claim B",text:"During WWI, France constructed a fake 'Paris' north of the real city, complete with replica boulevards and painted rooftops, to confuse German bombers flying at night."},
      ], clue:"One of these is among the most famous military deceptions in history. The other contains a seed of real history — nighttime bombing confusion was real — but the specific construction is invented.",
      liar:"Claim B", explanation:"Operation Fortitude (the Ghost Army) with inflatable tanks, fake radio traffic, and sound trucks is thoroughly documented and widely known. A 'fake Paris' with replica boulevards is fabricated — there was real concern about Parisian bombing but no such construction took place. Claim B borrows plausible WWII-era detail and inflates it." },

    { type:"WHO_IS_LYING", title:"The Hotel Minibar",
      setup:"A company expense report includes minibar charges a manager says they didn't make. Three colleagues shared the hotel floor.",
      statements:[
        {name:"Patel",text:"I went to my room after dinner and didn't leave until the morning. I had a six AM call. I was in bed by nine-thirty."},
        {name:"Kira",text:"I stopped by his room to drop off a USB drive around nine. He let me in for maybe two minutes, then I went to my room."},
        {name:"Leo",text:"I was up until midnight. Could hear people in the hallway. Didn't knock on anyone's door though."},
      ], clue:"The minibar charges were logged at 10:47 PM. One person has already placed themselves at the relevant location.",
      liar:"Kira", explanation:"Kira placed herself inside the manager's room at nine PM and left quickly — the only person who admittedly entered the space. The charges hit at 10:47. She had access, opportunity, and her 'two minutes and left' account is conveniently timed before the charge window. Patel and Leo's accounts don't place them near the room." },

    { type:"AI_OR_HUMAN", title:"The Resignation Letter",
      setup:"Two people wrote resignation letters. One is human, one is AI. Which is real?",
      statements:[
        {name:"Letter A",text:"I'm resigning, effective two weeks from today. I've thought about how to write this for a long time and I keep not writing it, so: I'm writing it. Thank you for the opportunity. I genuinely mean that — it's just time."},
        {name:"Letter B",text:"Please accept this letter as formal notification of my resignation, effective two weeks from the date above. I am grateful for the opportunities for professional growth this position has provided and I wish the organization continued success."},
      ], clue:"Nobody who has been putting off quitting for months sends a formal letter when they finally do it. They send a relieved, slightly rambling one.",
      liar:"Letter B", explanation:"Letter B is the template — formal, distant, 'professional growth,' 'continued success.' It has no relationship with the person sending it. Letter A has a history: 'thought about how to write this for a long time,' 'keep not writing it.' It's slightly messy and slightly relieved. That is what quitting actually feels like." },

    { type:"WHO_IS_LYING", title:"The Crashed Server",
      setup:"A company's server went down during a critical period. The IT team points fingers.",
      statements:[
        {name:"Yusuf",text:"I ran the maintenance script at exactly the window we agreed on — 11 PM to 1 AM. Whatever happened afterward isn't from my end."},
        {name:"Dana",text:"I flagged potential conflicts in the config two weeks ago in Slack. I have the message. Nobody responded."},
        {name:"Chris",text:"I wasn't touching anything server-side that night. I was working on the frontend. Those are completely separate."},
      ], clue:"'Those are completely separate' is a technical claim in a situation where the separation may not be as clean as stated.",
      liar:"Chris", explanation:"Yusuf gives a tight, documented timeline. Dana has a verifiable paper trail of a prior warning. Chris makes a claim that the frontend and server-side are 'completely separate' — in most real architectures, they're not, especially during maintenance. The overly confident technical dismissal, without offering to verify, suggests Chris knows they're not as separate as claimed." },

    { type:"BODY_LANGUAGE", title:"The Family Dinner",
      setup:"A relative insists everything is 'fine' between them and their partner. Is it?",
      observations:[
        "When the partner's name came up, they smiled — but only with the lower half of their face.",
        "They changed the subject quickly, then circled back to over-explain why things were good.",
        "They used past tense once — 'we used to go there on Saturdays' — then quickly corrected it to present tense.",
      ], verdicts:["Things really are fine","They are hiding something","They're just a private person"], clue:"The past tense slip is the most unguarded tell — the mind's real model of the relationship leaked through before the correction.",
      liar:"They are hiding something", explanation:"The mouth-only smile, the subject change followed by over-explanation, and especially the past-tense slip — 'we used to' before correcting to 'we go' — these three signals tell one story. The correction means they caught it. The slip means the truth is already past tense in their head." },

    { type:"CONSPIRACY_OR_FACT", title:"Body Science",
      setup:"One of these facts about the human body is real. Which is REAL?",
      statements:[
        {name:"Claim A",text:"Your body has more bacterial cells than human cells — you are, by cell count, more microbe than human."},
        {name:"Claim B",text:"The human tongue has a unique print as distinctive as a fingerprint and cannot be replicated between individuals."},
      ], clue:"One of these has been revised in recent years but is still broadly true. The other is a popular claim with no solid research base.",
      liar:"Claim B", explanation:"The microbiome claim is real — while the exact ratio has been revised (it's closer to 1:1 than the old '10:1'), human cells are still outnumbered or matched by bacterial cells. Tongue-print identification has been discussed in some biometrics research, but no large-scale study confirms it as reliably unique. It's a popular fun-fact without solid scientific backing." },

    { type:"WHO_IS_LYING", title:"The Social Media Post",
      setup:"A damaging screenshot of a private conversation was leaked publicly. Three people had access.",
      statements:[
        {name:"Ravi",text:"I screenshotted it when I first got it — I wanted to remember to deal with it later. But I never sent it to anyone outside the group."},
        {name:"Elena",text:"I remember reading it but I don't even screenshot things. I read and move on. I have no idea how it got out."},
        {name:"Noor",text:"This is awful. Whoever did this violated everyone's trust. I would never. I was just as blindsided as everyone else."},
      ], clue:"Ravi admits to behavior that requires an explanation. Noor performs outrage instead of giving one.",
      liar:"Noor", explanation:"Ravi volunteered a suspicious detail — screenshotting — but gave a reason and a clear limitation. Elena's denial is simple and consistent. Noor's entire response is moral performance: 'violated trust,' 'I would never,' 'just as blindsided' — all feeling, no information. Innocent people tend to say what they did. Guilty people say how they feel about what happened." },
  ],

  4: [
    { type:"WHO_IS_LYING", title:"The Alibi Network",
      setup:"A valuable painting went missing from a private event. Three attendees provide layered alibis that reference each other.",
      statements:[
        {name:"Harriet",text:"I was with Stefan the entire second half of the event. We were talking near the bar — you can ask him."},
        {name:"Stefan",text:"Harriet and I were together, yes. And Melissa was also nearby for some of that time. It was a group."},
        {name:"Melissa",text:"I floated around a bit but I was in their circle most of the evening. Stefan can confirm."},
      ], clue:"Three alibis form a closed loop — each points to someone else in the same group. No external witness anchors any of them.",
      liar:"Harriet", explanation:"Every alibi references only the other two — no external, independent witness appears in any account. A genuine alibi usually includes someone outside the group. This closed mutual-confirmation loop is a classic coordinated cover — any one of them, or all three, could be involved, and they've woven a net that has no external hole to pull on." },

    { type:"AI_OR_HUMAN", title:"The Panic Attack",
      setup:"Two people describe having a panic attack for the first time. One is human, one is AI. Which is real?",
      statements:[
        {name:"Account A",text:"I thought I was dying. Not metaphorically. My brain was completely certain I was dying, and the part of me that knew I probably wasn't dying couldn't do anything about the part that was sure I was. That's the thing nobody tells you — you're in two places at once. Knowing and not-knowing simultaneously, and neither one wins."},
        {name:"Account B",text:"Having a panic attack is a frightening experience where the body's fight-or-flight response activates inappropriately. My heart raced, I had difficulty breathing, and I felt an intense sense of dread. Knowing it would pass helped somewhat, though in the moment the feelings were overwhelming."},
      ], clue:"AI describes the panic attack. The human describes what it's like to be conscious inside one.",
      liar:"Account B", explanation:"Account B is a medical pamphlet — symptoms listed, fight-or-flight named, a helpful reassurance at the end. Account A describes the doubled consciousness of a panic attack with terrifying precision: knowing you're probably not dying while the body insists you are, the two-track experience of certain-death and probably-fine running simultaneously. You only know that split if you've felt it." },

    { type:"BODY_LANGUAGE", title:"The Confrontation",
      setup:"You confront someone about something they did. They deny it. Read whether the denial is real or performance.",
      observations:[
        "The denial came immediately — no pause, no 'what do you mean,' no request for clarification.",
        "After denying, they leaned forward and increased eye contact — almost aggressive in their steadiness.",
        "They said 'I would never do that' instead of 'I didn't do that.'",
      ], verdicts:["The denial is genuine","The denial is performed","They're genuinely confused"], clue:"'I would never' is a character statement, not a factual denial. It redirects from what happened to who they are. Real innocents say 'I didn't.'",
      liar:"The denial is performed", explanation:"An instant denial with no request for context, forced aggressive eye contact, and 'I would never' instead of 'I didn't' — these three together are the signature of a prepared denial. 'I would never do that' is an appeal to character, not a denial of the act. Innocent people are usually confused before they're defensive." },

    { type:"CONSPIRACY_OR_FACT", title:"Legal History",
      setup:"One of these legal history claims is documented fact. Which is REAL?",
      statements:[
        {name:"Claim A",text:"In medieval England, animals could be formally tried and executed for crimes — pigs, horses, and even insects were put on trial with legal representation."},
        {name:"Claim B",text:"In 1920s Chicago, a judge ruled that a man could not be convicted of robbery because the victim was hypnotized at the time and therefore had no legal capacity to be robbed."},
      ], clue:"One of these has documented trial records preserved in European legal archives. The other sounds like noir fiction.",
      liar:"Claim B", explanation:"Animal trials are real and documented — pigs were most commonly tried for attacking humans, often with defense counsel, in medieval Europe. The records exist. The Chicago hypnosis robbery ruling is invented — it borrows the real legal concept of victim capacity and applies it to a fictional case." },

    { type:"WHO_IS_LYING", title:"The Reference Letter",
      setup:"A glowing reference letter was submitted for a job applicant. The hiring manager suspects it was written by the applicant themselves.",
      statements:[
        {name:"Applicant",text:"Dr. Hendricks has known me for four years. She offered to write it — I didn't even have to ask. She said she believed in my work."},
        {name:"HR",text:"We called the number listed for Dr. Hendricks. It went to voicemail with her name on it. We left a message two weeks ago and haven't heard back."},
        {name:"Colleague",text:"I know Dr. Hendricks — she's meticulous about follow-up. She would never ghost a hiring inquiry for two weeks if she'd actually agreed to be a reference."},
      ], clue:"A reference who 'offered without being asked' and 'believed in the work' should be eager to advocate. Two weeks of silence from someone meticulous about follow-up is the tell.",
      liar:"Applicant", explanation:"The applicant frames the reference as enthusiastically volunteered. But a willing, meticulous reference doesn't ignore a hiring inquiry for two weeks. The colleague's character note about Dr. Hendricks' follow-up habits — combined with the sustained silence — suggests the reference may be a voicemail box the applicant controls, not a real reference at all." },

    { type:"AI_OR_HUMAN", title:"The Late Diagnosis",
      setup:"Two people describe receiving an ADHD diagnosis as adults. One is human, one is AI. Which is real?",
      statements:[
        {name:"Account A",text:"The psychiatrist explained what ADHD was and I started crying in the chair. Not because I was upset. Because she was describing me. My whole life, and there was a word for it, and the word meant it wasn't a character flaw. I cried in the parking lot too. I called my mother. I said 'Mom, I wasn't lazy.' She said she knew."},
        {name:"Account B",text:"Receiving an adult ADHD diagnosis can be an emotional and validating experience. Many adults feel relief at finally understanding why they struggled with focus and organization for so long. With proper support and treatment, individuals can learn to manage their symptoms effectively and lead fulfilling lives."},
      ], clue:"AI describes the experience of a diagnosis. The human describes what it felt like to be told a specific thing about their specific life — and what they did in the next ten minutes.",
      liar:"Account B", explanation:"Account B is a brochure — 'validating experience,' 'proper support,' 'fulfilling lives.' It addresses a category of people having a type of moment. Account A is one specific person in a chair, then a parking lot, then on a phone to their mother saying one sentence that covers thirty years. That specificity and that immediate aftermath are unmistakably human." },

    { type:"WHO_IS_LYING", title:"The Changed Will",
      setup:"A relative's will was altered in the last weeks of their life when they were cognitively declining. Three family members had frequent access.",
      statements:[
        {name:"Marcus",text:"Aunt June was sharp right up until the end. She knew exactly what she wanted. Anyone who says otherwise didn't visit her the way I did."},
        {name:"Diane",text:"I visited twice a week. The last month she was confused about dates and sometimes about who people were. I'm not saying anything happened. I'm saying she wasn't fully herself."},
        {name:"Felix",text:"I defer to whoever spent the most time with her. I wasn't around as much. I don't think it's my place to say."},
      ], clue:"Marcus insists on lucidity with suspicious specificity — 'right up until the end,' 'knew exactly what she wanted.' He's pre-arguing against a challenge nobody has officially made yet.",
      liar:"Marcus", explanation:"Diane's account is cautious and specific — twice a week, observed confusion, careful not to overstate. Felix appropriately defers given limited access. Marcus asserts absolute lucidity with pre-emptive defensiveness — 'right up until the end,' 'knew exactly' — language that fights an anticipated legal challenge rather than simply describing his aunt. He's building a record, not sharing a memory." },

    { type:"BODY_LANGUAGE", title:"The Counteroffer",
      setup:"You've just given someone a counteroffer in a negotiation. Their response will tell you whether they'll take it or are about to walk.",
      observations:[
        "They looked at the number, then looked up and slightly to the left before responding.",
        "Their first word was 'well' — and there was a half-second pause before it.",
        "They leaned back in their chair and crossed one arm loosely over their body.",
      ], verdicts:["They're about to accept","They are going to walk","They're bluffing for leverage"], clue:"Looking up-left is internal calculation. 'Well' with a pause is stalling while the decision forms. Leaning back with partial self-crossing is withdrawal, not aggression.",
      liar:"They are going to walk", explanation:"Up-left gaze is internal processing — they're calculating, not reacting positively. 'Well' with a pause is the universal stalling word used when the answer isn't yes. The lean-back with arm-crossing is physical withdrawal from the offer. They have not landed on acceptance. Expect a counter or a no." },

    { type:"CONSPIRACY_OR_FACT", title:"Famous Lies",
      setup:"One of these deceptions actually happened. Which is REAL?",
      statements:[
        {name:"Claim A",text:"In the 1800s, P.T. Barnum displayed a mummified 'mermaid' made from the top half of a monkey stitched to the back half of a fish, and people paid to see it for years."},
        {name:"Claim B",text:"In 1938, a British magician convinced the Royal Navy to reroute three warships by convincing them a sea monster had been spotted off the Scottish coast, using mirrors and a submarine."},
      ], clue:"One of these is a famous, well-documented hoax from American entertainment history. The other sounds like a thriller novel.",
      liar:"Claim B", explanation:"The Fiji Mermaid is real and well-documented — Barnum acquired and displayed it and it was exactly as described: monkey-fish taxidermy. The Royal Navy sea monster deception is fabricated — it borrows the plausibility of Barnum-era hoaxes and WWII-style deception operations and stitches them into a fictional story." },

    { type:"WHO_IS_LYING", title:"The Fired Employee",
      setup:"A former employee claims they were fired without cause. Their manager and HR tell a different story. Someone is revising the truth.",
      statements:[
        {name:"Ex-employee",text:"I was never given a single formal warning. Not one written document. They just called me in one day and said it was over. That's wrongful termination."},
        {name:"Manager",text:"We had three documented conversations about performance. Two were informal but the third was a formal review with an improvement plan that she signed."},
        {name:"HR",text:"Our records show the signed PIP. We also have email threads where she responded to both informal conversations acknowledging the concerns raised."},
      ], clue:"Two independent sources — manager and HR — have intersecting documented evidence. The ex-employee's claim requires both to have fabricated records.",
      liar:"Ex-employee", explanation:"The ex-employee's claim that there was 'not one written document' collapses against a signed PIP in HR's records and email threads acknowledging the prior conversations. For her account to be true, the manager and HR would have to have fabricated independent overlapping documentation. The convergent paper trail makes that implausible." },
  ],

  5: [
    { type:"WHO_IS_LYING", title:"The Surgeon's Error",
      setup:"A surgical complication occurred. The hospital is investigating. Three people were in the operating room.",
      statements:[
        {name:"Lead surgeon",text:"I followed protocol precisely. My technique was correct at every step. If there was an error, it originated after I handed off."},
        {name:"Anesthesiologist",text:"I documented everything in real time. My records are complete and timestamped. I'm happy to share them in full."},
        {name:"Scrub nurse",text:"I was focused on my role. I noticed some tension in the room but I'm not qualified to evaluate surgical decisions. I just did my job."},
      ], clue:"'I'm not qualified to evaluate surgical decisions' is a deflection — but the scrub nurse noticed something enough to name it: tension. They saw something and are declining to say what.",
      liar:"Scrub nurse", explanation:"The lead surgeon claims protocol and deflects to the handoff. The anesthesiologist offers complete records — the most transparent response of all. The scrub nurse says they're not qualified to evaluate — but then volunteers that there was 'tension in the room,' which is exactly the kind of qualitative observation they just said they couldn't make. They saw something. They are choosing not to say it." },

    { type:"AI_OR_HUMAN", title:"The Last Entry",
      setup:"Two diary entries from the night before a major life decision. One is human, one is AI. Which is real?",
      statements:[
        {name:"Entry A",text:"Tomorrow I sign the papers. I keep waiting to feel sure. I've been waiting to feel sure for eleven months. Maybe sure isn't what this feels like. Maybe this is what sure feels like and I keep not recognizing it because I expected it to feel different. I'm going to sleep now. I'll decide in the morning. I've already decided."},
        {name:"Entry B",text:"Tomorrow is a significant day. I have reflected deeply on this decision and I believe I am ready. Though there are uncertainties ahead, I feel a sense of peace and resolution. I am choosing to trust myself and move forward with confidence into this new chapter."},
      ], clue:"AI resolves ambivalence into clarity and peace. The human is still mid-resolution, noticing their own logical loop, and lying slightly to themselves about when they decided.",
      liar:"Entry B", explanation:"Entry B arrives at peace and resolution — the AI's structural need for a satisfying endpoint. Entry A is still inside the problem: the question of what sure feels like, the circular logic of 'I'll decide in the morning / I've already decided.' That self-aware contradiction — knowing you've decided while still calling it a future decision — is the specific texture of human ambivalence. No AI writes 'I'll decide in the morning' and then 'I've already decided' without resolving it." },

    { type:"BODY_LANGUAGE", title:"The Perfect Liar",
      setup:"You're interviewing a person who has been trained in deception detection and knows every tell. What gives them away?",
      observations:[
        "Their emotional expressions were perfectly timed — but started a fraction of a second after, not during, the relevant words.",
        "They showed zero of the micro-hesitations, self-corrections, and off-topic tangents that real memory produces.",
        "When asked an unexpected question, there was a 0.8-second pause before they continued — then perfect fluency returned.",
      ], verdicts:["They are telling the truth","They are lying","Impossible to tell — too clean"], clue:"The trained liar has eliminated natural imperfection so completely that its absence becomes the tell. Real memory is irregular; fabrication is smooth — until an unexpected question hits the edge of the script.",
      liar:"They are lying", explanation:"Emotions that lag speech by a fraction of a second are performed, not felt — genuine emotion and speech arrive together. The absence of all natural memory hesitation and self-correction is itself unnatural — real recall is messy. The 0.8-second gap on an unexpected question is the most important tell: it's where the script didn't reach and improvisation had to begin. Fluency returned because they found the nearest prepared answer. That gap is the seam." },

    { type:"CONSPIRACY_OR_FACT", title:"Operation Mincemeat",
      setup:"One of these wartime deception operations is real. Which is REAL?",
      statements:[
        {name:"Claim A",text:"In 1943, British intelligence planted false invasion plans on the body of a dead man they dressed as a Royal Marines officer and floated toward the Spanish coast, successfully deceiving Nazi Germany about the Allied invasion of Sicily."},
        {name:"Claim B",text:"In 1944, the OSS trained a team of astrologers to produce fake horoscope readings predicting Allied defeats, which were inserted into newspapers in occupied France to demoralize German troops who believed in astrology."},
      ], clue:"One of these has a book, a film, and a declassified file named after it. The other borrows real OSS creativity and fabricates a specific operation.",
      liar:"Claim B", explanation:"Operation Mincemeat is one of the most documented deceptions in WWII history — the body of Glyndwr Michael was dressed as Major William Martin RM and floated to Spain carrying false invasion plans. It worked. The astrologer newspaper operation is fabricated — the OSS did employ psychological operations in occupied territories, but this specific horoscope program doesn't exist in the record." },

    { type:"WHO_IS_LYING", title:"The Witness Recantation",
      setup:"A key witness in a criminal trial has recanted their testimony. They now say they were lying at trial. Three people speak to their credibility.",
      statements:[
        {name:"Defense attorney",text:"My client is innocent. This recantation is the truth finally coming out. The original testimony was coerced."},
        {name:"Original detective",text:"The witness gave a detailed, consistent account with corroborating details we hadn't released to the public. Coerced witnesses don't produce those.",
        },
        {name:"Witness",text:"I was scared back then. I said what I thought would end it fastest. Now I can't live with it. What I said at trial wasn't true."},
      ], clue:"The detective's key point: the original testimony contained details not public at the time. Coercion produces agreement, not inside information.",
      liar:"Witness", explanation:"The original account contained non-public corroborating details — the most powerful indicator of genuine first-hand knowledge. Coerced or fabricated testimony tends to confirm what investigators already have, not add new verified information. The recantation fits a pattern of pressure applied after conviction; the original account's non-public specifics are harder to explain away than the recantation's emotional framing." },

    { type:"AI_OR_HUMAN", title:"The Grief That Stayed",
      setup:"Two people write about grief five years after a loss. One is human, one is AI. Which is real?",
      statements:[
        {name:"Piece A",text:"Five years and I still do the thing where I go to tell him something and then remember. It gets faster — the remembering — but it never stops happening. Last week it was something stupid about a movie sequel. I turned to say it and he wasn't there and I remembered before I finished turning. Progress, I guess. The thing I want to tell him is everything."},
        {name:"Piece B",text:"Five years on, grief has become a quieter companion. I have learned to carry it with more grace, to honor his memory through living fully. The sharp pain has softened into a bittersweet ache — a reminder of how deeply I was loved and how completely I loved in return."},
      ], clue:"AI plots grief as an arc that ends in wisdom. The human is still doing the same thing on week one — just faster.",
      liar:"Piece B", explanation:"Piece B follows grief's official narrative arc: sharp pain becomes bittersweet ache, chaos becomes grace, loss becomes wisdom. AI loves this structure because it resolves. Piece A refuses it: five years later, the same thing is still happening — turning to share something with someone who isn't there. The only change is the remembering gets faster. That's honest. The last line — 'The thing I want to tell him is everything' — is grief without redemption, which is what grief actually is." },

    { type:"WHO_IS_LYING", title:"The Inside Trade",
      setup:"A stock was traded hours before a negative announcement that most employees couldn't have known about. Three executives are interviewed by the SEC.",
      statements:[
        {name:"CEO",text:"I didn't trade anything that week. You can check my brokerage account — there's nothing to find."},
        {name:"CFO",text:"I made trades, yes. Routine rebalancing. My financial advisor handles the timing. I'm not involved in day-to-day decisions."},
        {name:"General Counsel",text:"I became aware of the announcement in a meeting at 4 PM that day. The trades you're asking about were placed at 11 AM. I was not in possession of material information at 11 AM."},
      ], clue:"The General Counsel's answer is precisely structured around the legal definition of insider trading — 'material information,' exact time, documented meeting. That precision suggests familiarity with exactly what needs to be true.",
      liar:"General Counsel", explanation:"The CEO denies outright — verifiable. The CFO admits trades but deflects to an advisor — also checkable. The General Counsel's answer is a legal argument, not a recollection: 'material information,' 'in possession of,' the exact 4 PM meeting, the exact 11 AM trade — language calibrated to satisfy the legal threshold for insider trading, not to describe what they knew and when. When a lawyer answers a factual question like a motion, that's the tell." },

    { type:"BODY_LANGUAGE", title:"The Last Interview",
      setup:"A journalist is interviewing a politician who is lying about something significant. The journalist doesn't yet know what. What does the body reveal?",
      observations:[
        "On most questions, the politician is relaxed, expansive, arms open. On one specific policy area, all of that collapses: arms cross, torso turns slightly away, answers shorten.",
        "The politician makes a joke after answering the sensitive question — unprompted, slightly too loud.",
        "When the journalist moves on, the politician visibly exhales and resets to their open posture within seconds.",
      ], verdicts:["The politician is being straight","They are concealing something","They're just media-trained and stiff"], clue:"The body marked one category as different from all others — without the journalist knowing which question to press on. The relief exhale on moving away is the confirmation.",
      liar:"They are concealing something", explanation:"The politician's body works fine across every category except one — and it marks that category consistently: closed arms, turned torso, shorter answers. The joke after is an anxiety-relief discharge. The visible exhale and posture reset when the topic changes is the body saying 'safe.' The journalist now knows which policy area to return to — the body already circled it." },

    { type:"CONSPIRACY_OR_FACT", title:"Cold War Shadows",
      setup:"One of these Cold War programs is documented history. Which is REAL?",
      statements:[
        {name:"Claim A",text:"The CIA ran a program called STARGATE for over twenty years, officially researching whether psychic phenomena — remote viewing and ESP — could be used for intelligence gathering."},
        {name:"Claim B",text:"The KGB deployed a team of trained actors to infiltrate suburban American communities and live as ordinary families for decades, communicating via shortwave radio hidden in household appliances."},
      ], clue:"One of these has been officially declassified and is part of CIA public reading rooms. The other blends a real program with fictional detail.",
      liar:"Claim B", explanation:"Project STARGATE is real, declassified, and in CIA archives — a $20M+ program running from 1972 to 1995 researching psychic intelligence gathering. The KGB sleeper program described borrows from the real Illegals Program (which the FBI exposed in 2010 — Operation Ghost Stories), but the specific 'shortwave radio in appliances' detail is fictional embellishment not in any declassified record." },

    { type:"WHO_IS_LYING", title:"The Final Deception",
      setup:"A will is contested. The deceased's long-time assistant claims they were promised a significant bequest verbally. Two family members dispute this.",
      statements:[
        {name:"Assistant",text:"She told me in March — two months before she died — that she'd changed the will. She showed me a document on her desk. She said she wanted me to know I'd be taken care of."},
        {name:"Daughter",text:"Mother was generous but she was also precise. If she'd changed her will she would have told me, because I'd been her executor for fifteen years. I heard nothing."},
        {name:"Attorney",text:"We prepared two wills in the last year of her life. The most recent version, executed in February, contains no bequest to the assistant. I have no record of a revision in March."},
      ], clue:"The assistant's account requires a will revision in March that left no legal trace — no attorney record, no document, no executor notification — despite the deceased being described as precise.",
      liar:"Assistant", explanation:"The attorney has records of every will prepared — the last was February, with no March revision. The daughter, as long-term executor, was never notified of any change, despite the deceased being described as legally precise. The assistant's account of being shown a document on a desk and promised an informal verbal bequest has no supporting paper trail. The 'document on the desk' may have been anything — or nothing. The story requires the most meticulous person in the room to have revised a legal document and told no one who mattered." },
  ],
};

// Merge expansions into LEVELS at runtime
(function mergeExpansions(){
  LEVELS.forEach(lv => {
    const extra = LEVEL_EXPANSIONS[lv.id];
    if(extra) lv.scenarios = [...lv.scenarios, ...extra];
  });
})();
