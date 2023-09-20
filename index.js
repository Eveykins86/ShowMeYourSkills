// Quiz questions and choices

let quizQuestions = [
    {
        question: "1.     A DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY TEST AND MAINTENANCE REPORT SHALL INCLUDE ALL OF THE FOLLOWING INFORMATION EXCEPT THE:",
        choices: ["A)    ADDRESS OF THE INSTALLATION", "B)    SERIAL NUMBER OF THE ASSEMBLY", "C)    TEST RESULTS OF CHECK VALVE NUMBER ONE (1)", "D)    TEST RESULTS OF CHECK VALVE NUMBER TWO (2)", "E)    DIFFERENTIAL PRESSURE RELIEF VALVE DISCHARGE READING"],
        correctAnswer: 4,
    },
    {
        question: "2.     THE BY-PASS LINE OF AN APPROVED BACKFLOW PREVENTION ASSEMBLY MUST CONTAIN AN APPROVED ASSEMBLY OF EQUAL:",
        choices: ["A)    CORROSION RESISTANCE", "B)    FLOW CAPACITY", "C)    PROTECTION", "D)    SIZE", "E)    TEMPERATURE RATING"],
        correctAnswer: 2,
    },
    {
        question: "3.     AN ATMOSPHERIC TYPE VACUUM BREAKER SHALL NOT BE SUBJECTED TO WATER PRESSURE FOR PERIODS THAN ______ HOURS.",
        choices: ["A)    SIX (6)","B)    EIGHT (8)", "C)    TWELVE (12)", "D)    TWENTY-FOUR (24)", "E)    NONE OF THE ABOVE"],
        correctAnswer: 2,
    },
    {
        question: "4.     IT IS POSSIBLE FOR A PERFECT VACUUM AT SEA LEVEL TO RAISE WATER IN A PIPE APPROXIMATELY _________  FEET.",
        choices: ["A)    TWENTY-FIVE (25)", "B)    THIRTY (30)", "C)    THIRTY-TWO (32)", "D)    THIRTY-FOUR (34)", "E)    THIRTY-SIX (36)"],
        correctAnswer: 3,
    },
    {
        question: "5.     WHAT IS THE MOST DESIRABLE PLACE TO INSTALL A BACKFLOW PREVENTION DEVICE AND/OR ASSEMBLY?",
        choices: ["A)    IN A REINFORCED CONCRETE PIT", "B)    IN AN ACCESSIBLE LOCATION ABOVE GROUND", "C)    UNDERGROUND, WITH A MINIMUM OF TWELVE (12) INCHES OF COVER", "D)    AT OR ABOVE CEILING HEIGHT, TO PROTECT IT FROM VANDALISM", "E)    BEHIND THE BOILER OR EQUIPMENT SERVED, SO IT CAN BE WORKED ON WHEN THE EQUIPMENT IS REMOVED"],
        correctAnswer: 1,
    },
    {
      question: "6.    WHICH OF THE FOLLOWING CONDITIONS COULD RESULT IN WATER CONTAMINATION THROUGH A CROSS-CONNECTION?",
      choices: ["A)    A VACUUM CREATED BY THE IMPROPER USE OF WATER HAMMER ARRESTERS", "B)    THE USE OF SELF CLOSING LAVATORY FAUCETS", "C)    TURNING OFF SERVICE TO A MULTI-STORY BUILDING AND ALLOWING THE WATER SUPPLY TO DRAIN", "D)    A VACUUM CREATED BY THE USE OF QUICK CLOSING VALVES ON THE LOWER FLOORS OF A BUILDING EXCEEDING TEN (10) FLOORS IN HEIGHT", "E)    THE INSTALLATION OF WATER CONSERVING FIXTURES, INTO A BUILDING DESIGNED PRIOR TO THEIR REQUIRED US"],
      correctAnswer: 2,
  },
  {
    question: "7.   WHAT IS ANOTHER TERM THAT DESCRIBES WATER QUALITY AS A HEALTH HAZARD RESULTING FROM BACKFLOW?",
    choices: ["A)    ISOLATION", "B)    CONTAMINATION", "C)    CROSS-CONNECTION", "D)    POLLUTION", "E)    CONTAINED"],
    correctAnswer: 1,
},
{
  question: "8.    THE VENTURI EFFECT STATES THAT WHEN THE WATER VELOCITY WITHIN THE PIPE INCREASES, THE PRESSURE:",
  choices: ["A)    WILL INCREASE PROPORTIONATELY", "B)    WILL REMAIN CONSTANT", "C)    COMPRESSES EXCESS VOLUMES OF WATER", "D)    DECREASES", "E)    CREATES BACKPRESSURE"],
  correctAnswer: 3,
},
{
  question: "9.    THE DEGREE OF HAZARD IS:",
  choices: ["A)    THE ACCEPTABLE TEMPERATURE RANGE OF A NON-POTABLE WATER SOURCE", "B)    THE ANGLE OF THE BACKFLOW PREVENTER", "C)    BASED UPON THE QUALITY OF A NON POTABLE WATER SOURCE", "D)    DISTANCE BETWEEN THE CROSS-CONNECTION AND THE BACKFLOW PREVENTER", "E)    THE ENGINEER’S SPECIFIED ELEVATION OF NON-POTABLE PIPING"],
  correctAnswer: 2,
},
{
  question: "10.   BACKFLOW MAY BE DESCRIBED AS EITHER:",
  choices: ["A)    BACKPRESSURE OR BACKSIPHONAGE", "B)    CONTAMINATION OR POLLUTION", "C)    CONTAINMENT AND ISOLATION", "D)    DIRECT AND/OR INDIRECT", "E)    HIGH TEMPERATURE OR LOW TEMPERATURE"],
  correctAnswer: 0,
},
{
  question: "11.   THE FEDERAL LAW PLACING RESPONSIBILITY FOR THE PROTECTION OF THE PUBLIC WATER SUPPLY ON THE PURVEYOR OF WATER IS THE:",
  choices: ["A)    ENVIRONMENTAL PROTECTION AGENCY’S PRIMARY DRINKING WATER REGULATIONS", "B)    OCCUPATIONAL SAFETY AND HEALTH ADMINISTRATION REGULATIONS", "C)    SAFE DRINKING WATER ACT", "D)    FOOD AND DRUG ADMINISTRATION’S UNIFORM PLUMBING CODE", "E)    CLEAN WATER ACT"],
  correctAnswer: 2,
},
{
  question: "12.   HOW MANY INCHES MUST A PRESSURE TYPE VACUUM BREAKER ASSEMBLY BE INSTALLED ABOVE ALL DOWNSTREAM PIPING?",
  choices: ["A)    SIX (6)", "B)    TWELVE (12)", "C)    EIGHTEEN (18)", "D)    TWENTY-FOUR (24)", "E)    ONE (1)"],
  correctAnswer: 1,
},
{
  question: "13.  A DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY WILL PROTECT THE POTABLE WATER SUPPLY FROM:",
  choices: ["A)    NON-HEALTH HAZARD – BACKSIPHONAGE", "B)    NON-HEALTH HAZARD – BACKPRESSURE", "C)    NON-HEALTH HAZARD – BACKPRESSURE AND BACKSIPHONAGE", "D)    HEALTH HAZARD – BACKSIPHONAGE", "E)    HEALTH HAZARD – BACKPRESSURE"],
  correctAnswer: 2,
},
{
  question: "14.  HOW MANY INCHES MUST AN ATMOSPHERIC VACUUM BREAKER BE INSTALLED ABOVE ALL DOWNSTREAM PIPING AND HIGHEST OPENING?",
  choices: ["A)    SIX (6)", "B)    NINE (9)", "C)    TWELVE (12)", "D)    EIGHTEEN (18)", "E)    ONE (1)"],
  correctAnswer: 0,
},
{
  question: "15.  AN ATMOSPHERIC VACUUM BREAKER IS INSTALLED TO PROTECT AGAINST:",
  choices: ["A)    BACKPRESSURE – NON-HEALTH HAZARD CONDITIONS ONLY", "B)    BACKPRESSURE – HEALTH HAZARD CONDITIONS ONLY", "C)    BACKSIPHONAGE – NON-HEALTH HAZARD CONDITIONS ONLY", "D)    BACKSIPHONAGE – HEALTH HAZARD CONDITIONS ONLY", "E)    BACKSIPHONAGE – HEALTH HAZARD OR NON-HEALTH HAZARD CONDITIONS"],
  correctAnswer: 4,
},
{
  question: "16. THE TERM “APPROVED REDUCED PRESSURE PRINCIPLE ASSEMBLY”, APPLIES TO AN ASSEMBLY WITH TWO SHUT-OFF VALVES, FOUR TEST COCKS AND:",
  choices: ["A)    TWO CHECK VALVES AND AN AIR INLET VALVE", "B)    TWO APPROVED CHECK VALVES AND AN AIR INLET VALVE", "C)    TWO APPROVED CHECK VALVES AND A PRESSURE RELIEF VALVE", "D)    TWO APPROVED CHECK VALVES AND A DIFFERENTIAL PRESSURE RELIEF VALVE", "E)    TWO APPROVED CHECK VALVES AND A PRESSURE REGULATING VALVE"],
  correctAnswer: 3,
},
{
  question: "17. IT IS REQUIRED THAT THE TEST GAUGE BE TESTED FOR ACCURACY AT LEAST:",
  choices: ["A)    MONTHLY", "B)    QUARTERLY", "C)    SEMI-ANNUALLY", "D)    ANNUALLY", "E)    AT THE TIME OF PURCHASE AND PRIOR TO EACH USE FOR TESTING"],
  correctAnswer: 3,
},
{
  question: "18. UNDERSIZED WATER PIPING CARRYING WATER AT HIGH VELOCITY CAN CAUSE BACKSIPHONAGE DUE TO:",
  choices: ["A)    THE VACUUM EFFECT", "B)    THE PIVOT EFFECT", "C)    THE MARGINAL EFFECT", "D)    THE ASPIRATOR EFFECT", "E)    THE VELOCITY EFFECT"],
  correctAnswer: 3,
},
{
  question: "19. AN AIR GAP SEPARATION IS MEASURED FROM THE OUTLET OF THE DISCHARGE PIPE, TO THE:",
  choices: ["A)    FIXTURE DRAIN PLUG", "B)    INLET OF THE SUPPLY", "C)    LEVEL OF THE LIQUID", "D)    FLOOD LEVEL RIM", "E)    NONE OF THE ABOVE"],
  correctAnswer: 3,
},
{
  question: "20. THE MINIMUM TYPE OF CONTAINMENT PROTECTION FOR A NON-HEALTH HAZARD, NON-CHEMICAL FIRE SPRINKLER SYSTEM IS A(N):",
  choices: ["A)    ATMOSPHERIC VACUUM BREAKER", "B)    DOUBLE CHECK DETECTOR ASSEMBLY BACKFLOW PREVENTER", "C)    PRESSURE VACUUM BREAKER ASSEMBLY", "D)    REDUCED PRESSURE DETECTOR ASSEMBLY", "E)    ALL OF THE ABOVE"],
  correctAnswer: 1,
},
{
  question: "21. THE TYPE OF PROTECTION REQUIRED FOR A CLOSED LOOP HEATING SYSTEM CONTAINING CHEMICALS IS:",
  choices: ["A)    REDUCED PRESSURE PRINCIPLE ASSEMBLY", "B)    DOUBLE CHECK VALVE ASSEMBLY", "C)    PRESSURE VACUUM BREAKER ASSEMBLY", "D)    DUAL CHECK VALVE TYPE BACKFLOW PREVENTER", "E)    ALL OF THE ABOVE"],
  correctAnswer: 0,
},
{
  question: "22. FOR CONTAINMENT PROTECTION IN A NON-HEALTH HAZARD SITUATION, THE MINIMUM PROTECTION REQUIRED SHALL BE:",
  choices: ["A)    REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER", "B)    TWO (2) SINGLE CHECK VALVES IN SERIES", "C)    DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY", "D)    ATMOSPHERIC VACUUM BREAKER", "E)    NONE OF THE ABOVE"],
  correctAnswer: 2,
},
{
  question: "23. WATER CONTINUOUSLY LEAKING FROM TEST COCK #2 DURING A TEST PROCEDURE OF A PRESSURE VACUUM BREAKER ASSEMBLY IS  PROBABLY CAUSED BY A LEAKING:",
  choices: ["A)    AIR INLET VALVE", "B)    TEST COCK #1", "C)    INLET SHUT-OFF VALVE #1", "D)    OUTLET SHUT-OFF VALVE #2", "E)    TEST COCK #2"],
  correctAnswer: 2,
},
{
  question: "24. THE REQUIRED BACKFLOW PREVENTION ASSEMBLY FOR A FIRE SUPPRESSION SYSTEM CONTAINING CHEMICALS IS:",
  choices: ["A)    REDUCED PRESSURE DETECTOR ASSEMBLY OR REDUCED PRESSURE PRINCIPLE ASSEMBLY", "B)    DOUBLE CHECK DETECTOR ASSEMBLY OR DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY", "C)    PRESSURE VACUUM BREAKER ASSEMBLY", "D)    DUAL CHECK VALVE TYPE BACKFLOW PREVENTER", "E)    NONE OF THE ABOVE"],
  correctAnswer: 0,
},
{
  question: "25. THE REQUIRED TYPE OF BACKFLOW PROTECTION FOR A CLOSED LOOP PIPING SYSTEM CONTAINING GLYCOL IS:",
  choices: ["A)    DOUBLE CHECK VALVE ASSEMBLY", "B)    REDUCED PRESSURE PRINCIPLE ASSEMBLY", "C)    ATMOSPHERIC VACUUM BREAKER", "D)    DUAL CHECK VALVE TYPE BACKFLOW PREVENTER", "E)    NONE OF THE ABOVE"],
  correctAnswer: 1,
},
{
  question: "26. THE PRIMARY CONSIDERATION IN DETERMINING WHAT TYPE OF BACKFLOW PREVENTER TO INSTALL IS:",
  choices: ["A)    COST", "B)    CUSTOMER PREFERENCE", "C)    DEGREE OF HAZARD", "D)    SYSTEM TEMPERTATURE", "E)    PERSONAL PREFERENCE"],
  correctAnswer: 2,
},
{
  question: "27. WHAT IS THE PROBABLE CAUSE OF A RELIEF VALVE FAILING TO OPEN DURING A FIELD TEST ON A REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER?",
  choices: ["A LEAKING #1 SHUT-OFF VALVE", "LOW WATER SUPPLY PRESSURE", "AIR TRAPPED INSIDE THE RELIEF VALVE", "EXCESSIVE BACKPRESSURE", "A MALFUNCTION OF THE RELIEF VALVE MECHANISM"],
  correctAnswer: 4,
},
{
  question: "28. THE REQUIRED BACKFLOW PROTECTION FOR A CHEMICALLY CHARGED SOLAR HEATING SYSTEM WITH AN EXPANSION TANK IS A(N):",
  choices: ["A)    REDUCED PRESSURE PRINCIPLE ASSEMBLY", "B)    ATMOSPHERIC VACUUM BREAKER", "C)    DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY", "D)    PRESSURE VACUUM BREAKER ASSEMBLY", "E)    NONE OF THE ABOVE"],
  correctAnswer: 0,
},
{
  question: "29. THE TYPE OF PROTECTION ASSOCIATED WITH AN AIR GAP SEPARATION IS:",
  choices: ["A)    BACKSIPHONAGE – NON-HEALTH HAZARD", "B)    BACKSIPHONAGE – HEALTH HAZARD", "C)    BACKPRESSURE – NON-HEALTH HAZARD", "D)    BACKPRESSURE – HEALTH HAZARD", "E)    ALL OF THE ABOVE"],
  correctAnswer: 4,
},
{
  question: "30. THE APPLICATION OF A PRESSURE VACUUM BREAKER ASSEMBLY IS FOR:",
  choices: ["A)    BACKPRESSURE AND ISOLATION", "B)    BACKSIPHONAGE AND ISOLATION", "C)    BACKPRESSURE OR BACKSIPHONAGE AND ISOLATION", "D)    CONTAINMENT ONLY", "E)    NONE OF THE ABOVE"],
  correctAnswer: 1,
},
{
  question: "31. HOW MANY POUNDS OF PRESSURE PER SQUARE INCH ARE EXERTED AT THE BASE OF A COLUMN OF WATER THAT IS TWO (2) FEET TALL?",
  choices: ["A)    0.33", "B)    0.78", "C)    0.86", "D)    1.29", "E)    1.44"],
  correctAnswer: 2,
},
{
  question: "32. A PRESSURE OF 75 PSI WOULD BE EQUIVALENT TO WHAT _________ HEAD OF WATER?",
  choices: ["A)    37.5 FEET", "B)    75.0 FEET", "C)    115.0 FEET", "D)    150.0 FEET", "E)    173.2 FEET"],
  correctAnswer: 4,
},
{
  question: "33. A PRESSURE GAUGE INSTALLED AT THE BOTTOM OF AN OPEN TANK, CONTAINING WATER TEN (10) FEET DEEP, WOULD INDICATE WHAT PRESSURE READING?",
  choices: ["A)    4.3 PSI", "B)    8.6 PSI", "C)    12.2 PSI", "D)    14.7 PSI", "E)    16.9 PSI"],
  correctAnswer: 0,
},
{
  question: "34. WHAT EQUIPMENT IS USED TO TEST A PRESSURE VACUUM BREAKER ASSEMBLY?",
  choices: ["A)    ATMOSPHERIC VACUUM GAUGE", "B)    DUPLEX GAUGE", "C)    DIFFERENTIAL PRESSURE GAUGE", "D)    PAIR OF BOURBON GAUGES", "E)    FORTY-TWO INCH SIGHT TUBE"],
  correctAnswer: 2,
},
{
  question: "35. TEST COCK NUMBER __________ MAY BE OPENED TO ESTABLISH FLOW THROUGH A BACKFLOW PREVENTION ASSEMBLY:",
  choices: ["A)    ONE (1)", "B)    TWO (2)", "C)    THREE (3)", "D)    FOUR (4)", "E)    ALL THE ABOVE"],
  correctAnswer: 3,
},
{
  question: "36. USC, AWWA AND MANUFACTURERS RECOMMEND THAT BACKFLOW PREVENTION ASSEMBLIES BE INSPECTED, AND THAT THEIR PROPER OPERATION IS VERIFIED BY A CERTIFIED TESTER AT LEAST:",
  choices: ["A)    ONCE EVERY MONTH", "B)    ONCE EVERY SIX (6) MONTHS", "D)    ONCE EVERY YEAR", "ONCE EVERY TWO (2) YEARS", "E)    ONCE EVERY THREE (3) YEARS"],
  correctAnswer: 2,
},
{
  question: "37. A DIFFERENTIAL PRESSURE GAUGE IS USED IN THE TESTING OF:",
  choices: ["A)    DOUBLE CHECK VALVE ASSEMBLY", "B)    OREDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY", "C)    DUAL CHECK WITH INTERMEDIATE ATMOSPHERIC VENT", "D)    BOTH A) AND B)", "E)    ALL OF THE ABOVE"],
  correctAnswer: 3,
},
{
  question: "38. FROM THE CHOICES LISTED BELOW, WHAT INFORMATION IS REQUIRED TO PROPERLY IDENTIFY THE BACKFLOW PREVENTION ASSEMBLY TO BE TESTED?",
  choices: ["A)    TYPE AND MANUFACTURER OF BACKFLOW PREVENTION ASSEMBLY", "B)    LOCATION AND SIZE OF BACKFLOW PREVENTION ASSEMBLY", "C)    MODEL AND SERIAL NUMBER OF BACKFLOW PREVENTION ASSEMBLY", "D)    ALL OF THE ABOVE", "E)    BOTH A) AND C)"],
  correctAnswer: 3,
},
{
  question: "39. THE ORIGINAL SIGNED AND DATED TEST REPORT MUST BE:",
  choices: ["A)    GIVEN TO THE OWNER OF THE PROPERTY", "B)    SUBMITTED TO THE WATER PURVEYOR",  "C)    KEPT BY THE TESTER FOR THREE YEARS", "D)    KEPT BY THE TESTER FOR TEN YEARS", "E)    NONE OF THE ABOVE"],
  correctAnswer: 1,
},
{
  question: "40. THE CRITICAL FINAL STEP IN TESTING A BACKFLOW PREVENTION ASSEMBLY IS:",
  choices: ["A)    REMOVING THE TEST COCK ADAPTERS", "B)    RETURNING THE ASSEMBLY TO NORMAL OPERATING CONDITION", "C)    RECORDING THE TEST RESULTS", "D)    REMOVING THE GAUGES", "E)    MAKING OUT THE BILL"],
  correctAnswer: 1,
},
{
  question: "41. THE DIFFERENTIAL PRESSURE RELIEF VALVE ON A REDUCED PRESSURE PRINCIPLE BACKFLOW  ASSEMBLY MUST OPEN BEFORE THE DIFFERENTIAL PRESSURE ACROSS THE INLET CHECK VALVE DROPS BELOW:",
  choices: ["A)    1.0 PSID", "B)    1.5 PSIA", "C)    2.0 PSID", "D)    2.5 PSIG", "E)    NONE OF THE ABOVE"],
  correctAnswer: 2,
},
{
  question: "42. THE MINIMUM HOSE DIAMETER FOR A PRESSURE DIFFERENTIAL GAUGE IS ________ INCH:",
  choices: ["A)    1/8", "B)    1/4", "C)    3/8", "D)    1/2", "E)    3/4"],
  correctAnswer: 1,
},
{
  question: "43. WHAT ARE THE MINIMUM SCALE INCREMENTS ALLOWED ON DIFFERENTIAL PRESSURE GAUGES USED FOR TESTING BACKFLOW PREVENTION ASSEMBLIES AND DEVICES?",
  choices: ["A)    0.1 PSIA", "B)    0.2 PSID", "C)    0.5 PSIG", "D)    1.0 PSID", "E)    2.0 PSIA"],
  correctAnswer: 1,
},
{
  question: "44. WHAT VALVE MUST BE CLOSED WHEN TESTING A REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY?",
  choices: ["A)    NUMBER ONE (1) SHUT-OFF VALVE", "B)    SERVICE CONNECTION VALVE", "C)    PRESSURE REGULATING VALVE", "D)    FLOW CONTROL VALVE", "E)    NUMBER TWO (2) SHUT-OFF VALVE"],
  correctAnswer: 4,
},
{
  question: "45. AN OCCASIONAL DISCHARGE FROM THE RELIEF VALVE OF A REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER USUALLY INDICATES:",
  choices: ["A)    A LEAKING NUMBER ONE (1) CHECK VALVE", "B)    A LEAKING NUMBER TWO (2) CHECK VALVE", "C)    A MALFUNCTION IN THE RELIEF VALVE", "D)    THE DEVICE IS WORKING PROPERLY", "E)    AN IMPROPER INSTALLATION"],
  correctAnswer: 3,
},
{
  question: "46. IF THE CHECK VALVE SPRINGS ARE INTERCHANGED ON A DOUBLE CHECK VALVE ASSEMBLY, THE ASSEMBLY:",
  choices: ["A)    WILL NOT PROTECT AGAINST BACKFLOW", "B)    WILL CREATE A SIGNIFICANT PRESSURE DROP", "C)    WILL NOT BE ADVERSELY AFFECTED BY THE INTERCHANGE", "D)    WILL MALFUNCTION DUE TO THE INTERCHANGE", "E)    WILL CREATE A STATIC CONDITION"],
  correctAnswer: 2,
},
{
  question: "47. CONSTANT DISCHARGE FROM THE RELIEF VALVE OF A REDUCED PRESSURE PRINCIPLE ASSEMBLY USUALLY INDICATES:",
  choices: ["A)    FLUCTUATING INCOMING PRESSURE", "B)    A LEAKING NUMBER ONE (1) CHECK VALVE", "C)    FLUCTUATING DOWNSTREAM PRESSURE", "D)    EXCESSIVE DOWNSTREAM PRESSURE", "E)    THE SHUT-OFF VALVES ARE NOT OPEN"],
  correctAnswer: 1,
},
{
  question: "48. THE REQUIRED NUMBER OF TEST COCKS ON A SMALL (3/4”- 2”) PRESSURE VACUUM BREAKER ASSEMBLY IS:",
  choices: ["A)    NONE", "B)    ONE (1)", "C)    TWO (2)", "D)    THREE (3)", "E)    FOUR (4)"],
  correctAnswer: 2,
},
{
  question: "49. THE REQUIRED NUMBER OF TEST COCKS ON A LARGE (2½” – 4”) ATMOSPHERIC VACUUM BREAKER IS:",
  choices: ["A)    NONE", "B)    ONE (1)", "C)    TWO (2)", "D)    THREE (3)", "E)    FOUR (4)"],
  correctAnswer: 0,
},
{
  question: "50. WHAT CRITICAL COMPONENT OF AN ATMOSPHERIC VACUUM BREAKER IS SUBJECT TO FAILURE?",
  choices: ["A)    UPSTREAM SHUT-OFF VALVE", "B)    LOADED CHECK VALVE", "C)    CANOPY", "D)    AIR INLET VALVE", "E)    DOWNSTREAM SHUT-OFF VALVE"],
  correctAnswer: 3,
},
{
  question: "51. A CHECK VALVE IN AN APPROVED BACKFLOW PREVENTION ASSEMBLY, MUST BE DRIP TIGHT WHEN:",
  choices: ["A)    THE ASSEMBLY IS SUBJECT TO ANY BACKFLOW", "B)    THE SUPPLY PRESSURE IS INCREASED", "C)    THE NUMBER ONE (1) SHUT-OFF VALVE IS CLOSED", "D)    THE TEST COCKS ARE OPEN", "E)    THERE IS ANY ATTEMPTED WATER USAGE"],
  correctAnswer: 0,
},
{
  question: "52. A LEAKING CHECK VALVE MAY BE CAUSED BY A:",
  choices: ["A)    DIRTY OR DAMAGED CHECK DISC", "B)    DAMAGED CHECK SEAT", "C)    BROKEN OR DAMAGED SPRING", "D)    GUIDE MEMBERS HANGING UP", "E)    ALL OF THE ABOVE"],
  correctAnswer: 4,
},
{
  question: "53. TEST COCK NUMBER ONE (1) OF AN APPROVED DOUBLE CHECK VALVE ASSEMBLY, IS LOCATED:",
  choices: ["A)    DOWNSTREAM OF SHUT-OFF VALVE NUMBER ONE (1)", "B)    DOWNSTREAM OF SHUT-OFF VALVE NUMBER TWO (2)", "C)    UP STREAM OF SHUT-OFF VALVE NUMBER ONE (1)", "D)    BETWEEN THE NUMBER ONE (1) AND NUMBER TWO (2) CHECK VALVES", "E)    UPSTREAM OF THE DISCHARGE PORT"],
  correctAnswer: 2,
},
{
  question: "54. ON AN APPROVED PRESSURE VACUUM BREAKER ASSEMBLY, THE SHUT-OFF VALVES:",
  choices: ["A)    ARE INSTALLED AT THE INLET OF THE ASSEMBLY ONLY", "B)    ARE NOT USED DURING A FIELD TEST PROCEDURE", "C)    ARE INSTALLED AT THE OUTLET OF THE ASSEMBLY ONLY", "D)    CONTAIN AN INLET TEST COCK ON ALL ASSEMBLIES", "E)    ARE LOCATED AT THE INLET AND OUTLET OF ALL ASSEMBLIES"],
  correctAnswer: 4,
},
{
  question: "55. TEST COCK NUMBER ONE (1) ON A SMALL (3/4” – 2”) PRESSURE VACUUM BREAKER ASSEMBLY, IS LOCATED BETWEEN THE CHECK VALVE AND THE:",
  choices: ["A)    AIR INLET VALVE", "B)    INLET VALVE COVER", "C)    SHUT-OFF VALVE NUMBER ONE (1)", "D)    SHUT-OFF VALVE NUMBER TWO (2)", "E)    TEST COCK NUMBER TWO (2)"],
  correctAnswer: 2,
},
{
  question: "56. TEST COCK NUMBER TWO (2) ON A PRESSURE VACUUM BREAKER ASSEMBLY IS LOCATED BETWEEN THE AIR INLET VALVE AND THE:",
  choices: ["A)    DOWNSTREAM CHECK VALVE", "B)    INLET SHUT-OFF VALVE NUMBER TWO (2)", "C)    TEST COCK NUMBER ONE (1)", "D)    OUTLET SHUT OFF VALVE NUMBER TWO (2)",  "E)    UPSTREAM CHECK VALVE"],
  correctAnswer: 4,
},
{
  question: "57. WHEN TESTING WITH A DIFFERENTIAL PRESSURE GAUGE, A PRESSURE VACUUM BREAKER ASSEMBLY AIR INLET VALVE, WATER PRESSURE IS BLED THROUGH THE:",
  choices: ["A)    INLET SHUT-OFF VALVE NUMBER ONE (1)",  "B)    OUTLET SHUT-OFF VALVE NUMBER TWO (2)", "C)    TEST COCK NUMBER ONE (1)", "D)    DIFFERENTIAL GAUGE", "E)    AIR INLET VALVE"],
  correctAnswer: 3,
},
{
  question: "58. TEST COCKS ARE FLUSHED FOR THE FOLLOWING REASON(S):",
  choices: ["A)    TO DETERMINE FLOW THROUGH THE DEVICE", "B)    TO PROTECT THE TEST GAUGES FROM DAMAGE", "C)    TO REMOVE LODGED FOREIGN MATERIAL", "D)    TO DETERMINE THAT THE TEST COCKS ARE NOT PLUGGED", "E)    ALL OF THE ABOVE"],
  correctAnswer: 4,
},
{
  question: "59. THE RELIEF VALVE OF A REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY IS INTERNALLY LOADED TO:",
  choices: ["A)    REDUCE THE INCOMING PRESSURE", "B)    FORCE THE NUMBER TWO (2) CHECK VALVE TO OPEN", "C)    FORCE THE RELIEF VALVE TO OPEN", "D)    FORCE THE NUMBER ONE (1) CHECK VALVE TO OPEN", "E)    FORCE THE RELIEF VALVE TO CLOSE"],
  correctAnswer: 2,
},
{
  question: "60. A REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY’S DIFFERENTIAL RELIEF VALVE OPERATES FROM THE INCOMING WATER PRESSURE AND THE WATER PRESSURE IN THE:",
  choices: ["A)    NUMBER TWO (2) SHUT-OFF VALVE",  "B)    ATMOSPHERIC VENT", "C)    NUMBER FOUR (4) TEST COCK", "D)    ZONE BETWEEN THE TWO CHECK VALVES", "E)    MOST REMOTE FIXTURE SERVED BY THE DEVICE"],
  correctAnswer: 3,
},
{
  question: "61. A REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY TEST WILL INDICATE A LEAKING NUMBER TWO (2) SHUT-OFF VALVE BY:",
  choices: ["A)    AN INCREASE IN THE DIFFERENTIAL PRESSURE READING", "B)    A DIFFERENTIAL PRESSURE DROP TO ZERO (0) PSIG", "C)    A DROP OF ONE (1) PSID PRESSURE", "D)    A DROP IN DIFFERENTIAL PRESSURE AND RELIEF VALVE DISCHARGE", "E)    NO CHANGE IN THE DIFFERENTIAL PRESSURE READING WHEN TESTING THE DIFFERENTIAL PRESSURE RELIEF VALVE"],
  correctAnswer: 4,
},
{
  question: "62. HOW CAN YOU STOP AN OCCASIONAL DISCHARGE OF WATER FROM THE RELIEF VALVE OF A REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER CAUSED BY SUPPLY PRESSURE FLUCTUATIONS?",
  choices: ["A)    BY INSTALLING A PRESSURE REGULATING VALVE ON THE SUPPLY PIPE", "B)    BY INSTALLING A SOFT SEAT CHECK VALVE UPSTREAM OF THE ASSEMBLY", "C)    BY INSTALLING A GLOBE VALVE ON THE DOWNSTREAM PIPING", "D)    BY INSTALLING A SOFT SEAT CHECK VALVE DOWNSTREAM OF THE ASSEMBLY", "E)    BY INSTALLING A STRAINER UPSTREAM OF THE ASSEMBLY"],
  correctAnswer: 1,
},
{
  question: "63. THE TERM COPPER POISONING RESULTS FROM:",
  choices: ["A)    THE CHEMICAL REACTION OF COPPER PIPING MATERIALS TO CONTAMINATED WATER",  "B)    THE CHEMICAL REACTION OF COPPER PIPING MATERIALS TO PLASTIC PIPE", "C)    THE CHEMICAL REACTION OF COPPER PIPING MATERIALS TO POLLUTED WATER", "D)    THE CHEMICAL REACTION OF COPPER PIPING MATERIALS TO CO2", "E)    NONE OF THE ABOVE"],
  correctAnswer: 3,
},
{
  question: "64. PSIG IS EQUIVALENT TO:",
  choices: ["A)    PSIA PLUS ATMOSPHERIC PRESSURE", "B)    THE PRESSURE ON A PSIA GAUGE, ABOVE OR BELOW ATMOSPHERIC PRESSURE", "C)    THE PRESSURE ON A PSIA GAUGE, ABOVE SEA LEVEL", "D)    PSIA MINUS ATMOSPHERIC PRESSURE", "E)    NONE OF THE ABOVE"],
  correctAnswer: 3,
},
{
  question: "65. A SMALL HOLE IN THE UNDERGROUND POTABLE WATER DISTRIBUTION SYSTEM MAY:",
  choices: ["A)    REDUCE THE INCOMING PRESSURE SIGNIFICANTLY", "B)    ALLOW CONTAMINATION OF THE SYSTEM FROM BACKSIPHONAGE BACKFLOW", "C)    CREATE BACKPRESSURE BACKFLOW", "D)    INCREASE THE SYSTEM PRESSURE", "E)    CAUSE THE DISTRIBUTION SYSTEM PUMPS TO SIPHON AIR"],
  correctAnswer: 1,
},
{
  question: "66. IT IS POSSIBLE TO COMPENSATE FOR A LEAKING NUMBER TWO (2) SHUT-OFF VALVE DURING THE FIELD TEST PROCEDURE OF A REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER BY ATTACHING A TEMPORARY BYPASS HOSE FROM:",
  choices: ["A)    NUMBER ONE TEST COCK TO NUMBER THREE (3) TEST COCK", "B)    NUMBER TWO (2) TEST COCK TO NUMBER FOUR (4) TEST COCK", "C)    NUMBER TWO (2) TEST COCK TO THE ANGLE STOP OF THE FIRST UPSTREAM FIXTURE", "D)    NUMBER ONE (1) TEST COCK TO NUMBER FOUR (4) TEST COCK", "E)    NUMBER THREE (3) TEST COCK TO NUMBER FOUR (4) TEST COCK"],
  correctAnswer: 3,
},
{
  question: "67. EDIBLE SYRUP INTRODUCED INTO A WATER SYSTEM THROUGH A CROSS-CONNECTION WOULD BE AN EXAMPLE OF:",
  choices: ["A)    A NUISANCE", "B)    A HEALTH HAZARD", "C)    A NON-HEALTH HAZARD", "D)    THE VENTURI EFFECT", "E)    CONTAMINATION HAZARD"],
  correctAnswer: 2,
},
{
  question: "68. ALL OF THE FOLLOWING COULD CREATE A CLOSED LOOP PIPING SYSTEM EXCEPT A:",
  choices: ["A)    PRESSURE RELIEF VALVE", "B)    GATE VALVE", "C)    DUAL CHECK VALVE TYPE BACKFLOW PREVENTER", "D)    DOUBLE CHECK VALVE BACKFLOW PREVENTION ASSEMBLY", "E)    BALL VALVE WITH AN INTEGRAL TEST PORT ON THE OUTLET SIDE OF THE VALVE"],
  correctAnswer: 0,
},
{
  question: "69. POINT OF USE BACKFLOW PREVENTION IS DEFINED AS:",
  choices: ["A)    UNNECESSARY", "B)    INTERMITTENT", "C)    CONTAINMENT", "D)    HAZARD ASSESSMENT", "E)    ISOLATION"],
  correctAnswer: 4,
},
{
  question: "70. AN AIR GAP SEPARATION IS DETERMINED FROM THE OUTLET PIPING’S _____________ DIAMETER.",
  choices: ["A)    INSIDE", "B)    OUTSIDE", "C)    EFFECTIVE", "D)    NOMINAL", "E)    GREATEST"],
  correctAnswer: 2,
},
{
  question: "71. IF NOT MARKED, THE CRITICAL LEVEL (CL) OF A PRESSURE VACUUM BREAKER ASSEMBLY IS ASSUMED TO BE THE LEVEL OF THE:",
  choices: ["A)    AIR INLET VALVE", "B)    BOTTOM OF THE INLET PIPING", "C)    SHUT-OFF VALVE NUMBER TWO (2)", "D)    BOTTOM OF THE VALVE BODY", "E)    BOTTOM OF THE DISCHARGE PIPING"],
  correctAnswer: 3,
},
{
  question: "72. THE REASON FOR THE METER ON A DOUBLE CHECK DETECTOR ASSEMBLY BACKFLOW PREVENTER IS TO:",
  choices: ["A)    DETECT ANY BACKFLOW", "B)    BYPASS THE WATER METER", "C)    TEST THE ALARM SYSTEM", "D)    DETERMINE THE DIRECTION OF FLOW", "E)    DETECT UNAUTHORIZED WATER USAGE"],
  correctAnswer: 4,
},
{
  question: "73. A SPILL RESISTANT VACUUM BREAKER (SVB) IS A MODIFIED:",
  choices: ["A)    DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY", "B)    REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY", "C)    PRESSURE VACUUM BREAKER ASSEMBLY", "D)    AIR GAP SEPARATION", "E)    ATMOSPHERIC VACUUM BREAKER"],
  correctAnswer: 2,
},
{
  question: "74. THE MINIMUM VERTICAL DISTANCE BETWEEN THE RELIEF VALVE DISCHARGE PORT OF A REDUCED PRESSURE PRINCIPLE BACKFLOW  ASSEMBLY AND THE FLOOR PLANE IS:",
  choices: ["A)    SIX (6) INCHES", "B)    TWELVE (12) INCHES", "C)    EIGHTEEN (18) INCHES", "D)    TWENTY-FOUR (24) INCHES", "E)    THIRTY (30) INCHES"],
  correctAnswer: 1,
},
{
  question: "75. THE MINIMUM REQUIREMENT FOR AN APPROVED AIR GAP SEPARATION SHALL BE AT LEAST:",
  choices: ["A)    ONE HALF THE DIAMETER OF THE SUPPLY PIPE", "B)    SIX (6) INCHES ABOVE THE OUTLET OF THE SUPPLY PIPE", "C)    TWICE THE DIAMETER OF THE SUPPLY PIPE, BUT NOT LESS THAN ONE (1) INCH", "D)    TWELVE (12) INCHES ABOVE THE SURROUNDING GROUND OR FLOOR", "E)    THAT RECOMMENDED BY THE MANUFACTURER OF THE PHYSICAL AIR GAP"],
  correctAnswer: 2,
},
{
  question: "76. THE TYPE OF PROTECTION PROVIDED BY A BAROMETRIC LOOP IS:",
  choices: ["A)    PREVENTS BACKPRESSURE BACKFLOW", "B)    IT PROVIDES AN ATMOSPHERIC BREAK", "C)    PREVENTS BACKSIPHONAGE BACKFLOW", "D)    PREVENTS BACKPRESSURE AND BACKSIPHONAGE BACKFLOW", "E)    THAT IT ENSURES THE REQUIRED PRESSURE DROP DOWNSTREAM OF THE LOOP"],
  correctAnswer: 2,
},
{
  question: "77. THE PROPER INSTALLATION OF AN ATMOSPHERIC VACUUM BREAKER ON AN IRRIGATION SYSTEM WOULD PERMIT THE DOWNSTREAM PIPING TO BE ELEVATED ABOVE THE ATMOSPHERIC VACUUM BREAKER, PROVIDED:",
  choices: ["A)    THERE ARE NO CONTROL VALVES DOWNSTREAM", "B)    THE SPRINKLER HEADS ARE AT LEAST SIX (6) INCHES BELOW THE AVB", "C)    A HOSE BIB IS INSTALLED DOWNSTREAM TO DRAIN THE PIPING", "D)    A SHUT-OFF VALVE IS INSTALLED DOWNSTREAM, PRIOR TO THE SPRINKLER HEADS", "E)    THIS IS NEVER AN ACCEPTABLE PRACTICE"],
  correctAnswer: 4,
},
{
  question: "78. EVERY VACUUM BREAKER IS DESIGNED TO:",
  choices: ["A)    PREVENT ATMOSPHERE FROM ENTERING THE DOWNSTREAM SYSTEM", "B)    PREVENT BACKSIPHONAGE BACKFLOW", "C)    PREVENT BACKPRESSURE BACKFLOW",  "D)    PREVENT BACKSIPHONAGE AND BACK-PRESSURE BACKFLOW", "E)    PROMOTE AND ALLOW SIPHONAGE UNDER ANY CONDITION"],
  correctAnswer: 1,
},
{
  question: "79. AN UNPROTECTED BYPASS AROUND A BACKFLOW PREVENTION ASSEMBLY OR DEVICE:",
  choices: ["A)    IS CONSIDERED TO BE A CROSS-CONNECTION AND IS NEVER PERMITTED", "B)    MUST BE WITHIN THREE (3) FEET OF THE DEVICE TO ALLOW INSPECTION", "C)    MUST BE EQUIPPED WITH A SWING OR SPRING LOADED CHECK VALVE", "D)    MUST BE OF AN EQUIVALENT PIPE SIZE", "E)    SHALL BE PROVIDED WITH FULL PORT VALVES TO ALLOW FOR ISOLATION AND REPAIR"],
  correctAnswer: 0,
},
{
  question: "80. A POTENTIAL BACKPRESSURE BACKFLOW PLUMBING CONNECTION IS A(N):",
  choices: ["A)    PROCESS WATER LINE", "B)    ASPIRATOR",  "C)    WATER CLOSET", "D)    FLUSHOMETER", "E)    MOP SINK WITH AN OPEN END HOSE CONNECTED"],
  correctAnswer: 0,
},
{
  question: "81. WHEN TESTING A SPILL RESISTANT VACUUM BREAKER (SVB) THE __________ IS TESTED BY REMOVING THE VENT SCREW",
  choices: ["A)    THE #2 CHECK VALVE", "B)    THE AIR INLET VALVE", "C)    THE #1 SHUTOFF VALVE", "D)    THE CHECK VALVE", "E)    NONE OF THE ABOVE"],
  correctAnswer: 3,
},
{
  question: "82. WHICH FACILITY MAY NOT BE REQUIRED TO INSTALL A REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTION ASSEMBLY ON THEIR SERVICE CONNECTION:",
  choices: ["A)    COMMERCIAL CAR WASH", "B)    SEWAGE TREATMENT PLANT", "C)    CHEMICAL OR PLATING PLANT", "D)    A TALL BUILDING WHERE THE HIGHEST OUTLET IS 80 FT OR MORE ABOVE THE METER", "E)    HOSPITAL"],
  correctAnswer: 3,
},
{
  question: "83. A CHEMICALLY TREATED BOILER SYSTEM WOULD REQUIRE WHAT TYPE OF BACKFLOW PROTECTION ON THE POTABLE WATER MAKE-UP LINE:",
  choices: ["A)    DOUBLE CHECK VALVE ASSEMBLY", "B)    REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY", "C)    DUAL CHECK VALVE TYPE BACKFLOW PREVENTER", "D)    BACKFLOW PREVENTER WITH INTERMEDIATE ATMOSPHERIC VENT", "E)    AN APPROVED DETECTOR CHECK WITH AN INTEGRAL ALARM"],
  correctAnswer: 1,
},
{
  question: "84. THE RECOMMENDED BACKFLOW PROTECTION FOR THE POTABLE WATER SUPPLY TO A PUMP USED FOR HANDLING RAW SEWAGE IS A(N):",
  choices: ["A)    DOUBLE CHECK DETECTOR ASSEMBLY BACKFLOW PREVENTER", "B)    AIR GAP",  "C)    REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER", "D)    PRESSURE VACUUM BREAKER ASSEMBLY", "E)    ATMOSPHERIC VACUUM BREAKER"],
  correctAnswer: 1,
},
{
  question: "85. THE POTABLE WATER SUPPLY TO A URINAL EQUIPPED WITH A FLUSHOMETER VALVE IS NORMALLY PROTECTED BY A(N):",
  choices: ["A)    REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTION ASSEMBLY", "B)    DOUBLE CHECK BACKFLOW PREVENTION ASSEMBLY", "C)    ATMOSPHERIC VACUUM BREAKER", "D)    DUAL CHECK VALVE TYPE BACKFLOW PREVENTER", "E)    PRESSURE VACUUM BREAKER ASSEMBLY"],
  correctAnswer: 2,
},
{
  question: "86. AN ABSOLUTE VACUUM AT SEA LEVEL CAN LIFT A COLUMN OF WATER A MAXIMUM DISTANCE OF:",
  choices: ["A)    2.3 FEET",  "B)    4.34 FEET", "C)    14.7 FEET", "D)    33.9 FEET", "E)    8.33 FEET"],
  correctAnswer: 3,
},
{
  question: "87. WHEN TESTING A DOUBLE CHECK VALVE BACKFLOW PREVENTION ASSEMBLY, THE NUMBER TWO (2) SHUT-OFF VALVE MUST BE CLOSED FIRST TO:",
  choices: ["A)    PREVENT BACKPRESSURE DURING THE TEST", "B)    PREVENT BACKSIPHONAGE DURING THE TEST", "C)    MAINTAIN ZERO (0) PSIG AT THE OUTLET", "D)    HOLD WATER IN THE DOWNSTREAM PIPING", "E)    MAINTAIN PRESSURE IN THE ASSEMBLY"],
  correctAnswer: 4,
},
{
  question: "88. WHILE TESTING A REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY, A FLUCTUATION IN THE PRESSURE DIFFERENTIAL DURING A STATIC CONDITION IS CAUSED BY:",
  choices: ["A)    RAPIDLY CHANGING SUPPLY PRESSURE", "B)    BACKPRESSURE BACKFLOW", "LEAKING NUMBER ONE (1) CHECK VALVE", "C)    BACKSIPHONAGE BACKFLOW", "E)    LEAKING NUMBER TWO (2) CHECK VALVE"],
  correctAnswer: 0,
},
{
  question: "89. THE WEIGHT OF A CUBIC FOOT OF WATER AT SEA LEVEL IS:",
  choices: ["A)    7.5 POUNDS", "B)    8.33 POUNDS", "C)    33.9 POUNDS",  "D)    62.4 POUNDS", "E)    EASILY MEASURED WITH A DIFFERENTIAL PRESSURE GAUGE"],
  correctAnswer: 3,
},
{
  question: "90. AN ABSOLUTE PRESSURE OF TWENTY-FIVE (25) PSIA (AT SEA LEVEL) IS EQUAL TO APPROXIMATELY:",
  choices: ["A)    FIVE (5) PSIG", "B)    TEN (10) PSIG", "C)    FIFTEEN (15) PSIG", "D)    TWENTY (20) PSIG", "E)    TWENTY-FIVE (25) PSIG"],
  correctAnswer: 1,
},
{
  question: "91. TO EXERT A PRESSURE OF ONE (1) PSIG AT THE BASE OF A COLUMN OF WATER, THE COLUMN OF WATER WOULD HAVE TO BE _____ IN HEIGHT:",
  choices: ["A)    4.34 INCHES", "B)    12.0 INCHES", "C)    14.7 INCHES", "D)    27.75 INCHES", "E)    TEN (10) FEET"],
  correctAnswer: 3,
},
{
  question: "92. WHEN TESTING A BACKFLOW PREVENTION ASSEMBLY, THE TESTER MUST FIRST:",
  choices: ["A)    CLOSE THE SHUT-OFF VALVES", "B)    RECORD THE SERIAL NUMBER", "C)    DETERMINE THE DIRECTION OF FLOW", "D)    NOTIFY THE OWNER",  "E)    FLUSH THE TEST COCK"],
  correctAnswer: 3,
},
{
  question: "93. IF DURING THE FIELD TEST OF A REDUCED PRESSURE PRINCIPLE BACKFLOW ASSEMBLY, THE RELIEF VALVE FAILS TO OPEN, THE PROBABLE CAUSE IS:",
  choices: ["A)    A MALFUNCTION OF THE DIFFERENTIAL PRESSURE RELIEF VALVE MECHANISM", "B)    A LEAKING NUMBER ONE (1) CHECK VALVE", "C)    THE TESTER FORGOT TO BLEED THE TEST COCKS PRIOR TO TESTING", "D)    AIR TRAPPED INSIDE THE RELIEF VALVE", "E)    BOTH C) AND D)"],
  correctAnswer: 0,
},
{
  question: "94. WHEN FIELD TESTING THE AIR INLET VALVE ON A PRESSURE VACUUM BREAKER ASSEMBLY, THE TEST GAUGE ELEVATION SHALL BE:",
  choices: ["A)    AT LEAST SIX (6) INCHES HIGHER THAN THE ASSEMBLY", "B)    THE SAME LEVEL AS THE ASSEMBLY", "C)    THE SAME LEVEL AS THE AIR INLET VALVE", "D)    AT LEAST TWELVE (12) INCHES HIGHER THAN THE ASSEMBLY", "E)    ALWAYS LOWER THAN THE DEVICE OR ASSEMBLY BEING TESTED"],
  correctAnswer: 2,
},
{
  question: "95. IF THE AIR INLET VALVE OF A PRESSURE VACUUM BREAKER ASSEMBLY WILL NOT SEAT, THE:",
  choices: ["A)    AIR INLET VALVE SHOULD BE PHYSICALLY MANIPULATED UNTIL IT OPERATES PROPERLY", "B)    CHECK VALVE SHOULD BE REMOVED AND CHECKED FOR PROPER SPRING TENSION", "C)    CANOPY COVER MUST BE REPLACE AND SPECIFIED CLEARANCES VERIFIED", "D)    SUPPLY PRESSURE IS TOO LOW", "E)    AIR INLET VALVE MUST BE REMOVED"],
  correctAnswer: 3,
},
{
  question: "96. THE SPRINGS ON THE TWO (2) CHECK VALVES OF A REDUCED PRESSURE PRINCIPLE BACKFLOW PREVENTER ARE:",
  choices: ["A)    LOCATED OUTSIDE THE BODY OF THE ASSEMBLY", "B)    EXTERNALLY LOADED", "C)    ARE NOT INTERCHANGEABLE", "D)    MECHANICALLY INTERCONNECTED", "E)    ARE INTERCHANGEABLE"],
  correctAnswer: 2,
},
{
  question: "97. THE NUMBER TWO (2) TEST COCK OF A DOUBLE CHECK VALVE ASSEMBLY IS LOCATED:",
  choices: ["A)    UPSTREAM OF SHUT-OFF VALVE NUMBER ONE (1)", "B)    DOWNSTREAM OF SHUT-OFF VALVE NUMBER ONE (1) AND UPSTREAM OF CHECK VALVE NUMBER ONE (1)", "C)    DOWNSTREAM OF SHUT-OFF VALVE NUMBER TWO (2)", "D)    DOWNSTREAM OF THE NUMBER TWO (2) CHECK VALVE AND UPSTREAM OF NUMBER TWO (2) SHUT-OFF VALVE", "E)    BETWEEN THE NUMBER ONE (1) AND NUMBER TWO (2) CHECK VALVE"],
  correctAnswer: 1,
},
{
  question: "98. A TWO (2) INCH ATMOSPHERIC VACUUM BREAKER, INSTALLED ON A TWO (2) INCH WATER SUPPLY TO A TANK MUST BE AT LEAST _________ ABOVE THE FLOOD LEVEL RIM OF THE TANK:",
  choices: ["A)    TWO (2) INCHES", "B)    FOUR (4) INCHES", "C)    SIX (6) INCHES", "D)    TWELVE (12) INCHES", "E)    TWENTY-FOUR (24) INCHES"],
  correctAnswer: 2,
},
{
  question: "99. A 1/4 INCH DIAMETER POTABLE WATER SUPPLY SHALL HAVE AT LEAST A _________ AIR GAP SEPARATION BETWEEN THE SUPPLY PIPE AND THE FLOOD LEVEL RIM:",
  choices: ["A)    ONE HALF (1/2) INCH", "B)    ONE(1) INCH", "C)    TWO (2) INCH", "D)    SIX (6) INCH", "E)    ONE QUARTER (1/4) INCH"],
  correctAnswer: 1,
},
{
  question: "100. THE FOLLOWING IS AN ACCEPTABLE BACKFLOW PREVENTION DEVICE IN THE STATE OF TEXAS:",
  choices: ["A)    A VENTED DUAL CHECK", "B)    TWO (2) CHECK VALVES, FABRICATED AND INSTALLED BY A LICENSED PLUMBER", "C)    A STAINLESS BALL CHECK WITH A MINIMUM FIVE (5) PSI SPRING TENSION", "D)    SPRING CHECKS ON VERTICAL PIPING", "E)    NONE OF THE ABOVE"],
  correctAnswer: 4,
}
];

var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("timer");
var gameInterval;

// Track current question and user's score
var currentQuestion = 0;
var score = 0;

//Placeholder for displaying "CORRECT!" and "WRONG!" text
var feedbackElement = document.getElementById("feedback");

// Function to start game
function startGame() {
  startButton.style.display = "none";

  // Reset feedback text
  feedbackElement.textContent = "";

  // Clear the previous interval if any
  clearInterval(gameInterval);

  timeLeft = 20;
  function updateTimer() {
    timeLeft--;
    timerElement.textContent = "Time Remaining: " + timeLeft + " seconds";
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        timeLeft = 0; // Ensure timeLeft is not negative
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            displayQuestion(); // Move to the next question
            startGame(); // Start the timer for the new question
        } else {
            // Quiz is over, display the final score
            showFinalScore();
        }
    }
}

// Initial call to updateTimer
updateTimer();

// Set an interval to call updateTimer every second
gameInterval = setInterval(updateTimer, 1000);
}

// Function to display the current question and choices
function displayQuestion() {
  // Reset the timer to 20 seconds when displaying a new question
  timeLeft = 20;
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");

  questionElement.textContent = "";
  choicesElement.innerHTML = "";

  if (currentQuestion < quizQuestions.length) {
      questionElement.textContent = quizQuestions[currentQuestion].question;

      for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
          var choice = document.createElement("li");
          choice.textContent = quizQuestions[currentQuestion].choices[i];
          choice.setAttribute("data-index", i);
          choice.onclick = checkSelectedAnswer;
          choicesElement.appendChild(choice);
      }
  } else {
      // Quiz is over, display the final score
      showFinalScore();
  }
}

// Function to check the selected answer and increase score
function checkSelectedAnswer() {
  var selectedOption = parseInt(this.getAttribute("data-index"));

  if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
    score++;
    this.textContent = "CORRECT!";
    this.classList.remove("wrong");
    this.classList.add("correct");
  } else {
    this.textContent = "WRONG!";
    this.classList.remove("correct");
    this.classList.add("wrong");
  }

  // Move to the next question
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
      setTimeout(displayQuestion, 2000); // Wait for 2 seconds
  } else {
      // Quiz is over, display the final score
      showFinalScore();
  }
}


// Function to show the final score
function showFinalScore() {
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");

  var finalScore = score;
  var showFinalScoreElement = document.createElement("p");
  showFinalScoreElement.textContent = "Your Score: " + finalScore + "!";
  showFinalScoreElement.id = "final-score";
  document.body.appendChild(showFinalScoreElement);

  questionElement.textContent = "";
  choicesElement.innerHTML = "";

  // Prompt player to enter initials
  alert("Your Score: " + finalScore + "!");
  var playerInitials = prompt("Enter your initials:");

  if (finalScore <= 69) {
      alert("Nice Try! Keep Studying!");
  } else {
      alert("WOW! That was AMAZING!!");
  }

  // Store the player initials and high score in local storage
  localStorage.setItem("playerInitials", playerInitials);
  localStorage.setItem("highScore", finalScore);
  window.location.href = "highscores.html";
}

startButton.addEventListener("click", function () {
  startGame();
  displayQuestion();
  alert("Score is based on how many you get correct. Are you ready?");
});
