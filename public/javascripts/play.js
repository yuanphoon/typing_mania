// Variables

// Set the variable of the target
var targetWord = $('.target').text();
console.log("the targetWord is " + targetWord);

// Set the variable of the answer
var answerWord = $('.answer').val();
console.log("the value in the answer box is " + answerWord);

// The score
var score = 0;

// The array of random words
var dictionary = [];

// Random words
var wordCollection = "sadly lacey hurst colin finca janey trade lomax louie vhf verny nopal hexyl nasby jane urea donor elam enrol clea epha riel softa epoch focus abut jabir reid aisha foe sulla ava brill food motey wispy jurat gills som drab koppa aoli ainu knies podes cns chiru jowly grace grove ural wirer birse patd ran feme down exult biisk maud rock dan dobby lowl style cliff pipit tiv label crept sinal musca arak bowie ocie ceb aries oater boko grey hover inlay hemin douse ida dmso roca larva typo occur mmhg atty phew luzon ferd right sine dbe pis gal calorifically patinous chalkboard allopath fars cartridge mythologic trigonometer greedless striplight ileus laryngectomy boadicea jaunty overinclination carboloy indemnificatory thrombus fertility arsino geniture canaanitish muscadel keegan longly scampish subhead accommodational plodge Flayer sheerlegs peacock roughcast creator afflated noncellular cladophyll achalasia contagiously tartrazine nonoppression retaste conceptualize byronically polydomous habutae chalkpit aveyron tetroxid poisson baller defrayment sumatra smit vermiculating sarpanch dehumidifier afterimage Noncontending presecular sloganeer tessellation palatinate scantiest leon saprozoic denticulation dengue lvov urus obscure romain pax lactiferousness macrolinguistically shuffle reductionism quicksilvery overelaborate unbound gruis gabriela gauzelike symonds hyperaesthete unstentorian thyestes Backfill subcutaneously ambitiously autist unoverflowing boluses hexapod salpingotomy tension amphigenously hambro hopkins stourbridge amuse nubian deniker frailly alpenstock nonsatiable anagoge kangarooing semiblasphemous picotee unanimousness earhart sulfur encoded flapperish screwball Triradiated egocentricity electrocuted chalcopyrite problematic amphidamas respiced checker kodaly crusaded sheepfold hadfield hortensia mongoloid incrassated hypodermic convulsionary reoxidised antheus theban anisophylly readaptive hame aluminography word concenter shantytown dittersdorf wreck Psychographic preship daredevilry multiengined reforest centesimal gnar fragmentized drybrush stones untenable tulwar snapperback prescribed preoppression enfaced thorough unshredded acme vulcanise predecessor uprisen sentimentalized gymnasiast perfin farawayness alkalescency lauric precontributing Spiritless catholicity disillusive cycloparaffin populational publican laminitis bunkum manage iconium feelingless conventionalist delighter halloa moreen receivable nonpenalized eliminate portliest arrowwood overpopular foursome aubade helium boyard heliades microdontic preconizer ungentlemanlike Postnuptial antisupernaturalist mimical saltarello gasteropod hairif queanish flocculently multitubular israelitish tyrannizingly outdrive icaaaa whitish cumulet personage overvaluable fauxbourdon peptizing vasoconstriction apteria nonamendable cloudlessness intenerate floretty flamboyancy hiatuses salinity d''s Luster unhieratical gladsomeness uncrystallizable undervitalized albatross justly groat preascetic monclova mycostat sciuroid drossier str impede sacrilegiousness crystallinity catenate unhelved frisson hunan extrasystole proconfiscation mobcap egyptianizing flipflopping raspings recklinghausen nasally Lardier uncholeric hallucinate cora preallege linguistician preresponsible yahveh pargeting premillenarianism diaphanous divisi laureling compactedly plagiarist carelessness natation tranquillizing undergroan methodicalness protï¿¥ï¾½gï¿¥ï¾½e maledictory selenology beautiful demeritoriously joaqun uncommonness bilabial voided Krafft grasse bookplate outbulged bladdernose affiance categoricalness celeuthea hennig spitzenberg progressive blacksmith viipuri bethel unprognosticated nylghau operatable representationalistic singlestick dragon archaizing winteriest mini hesitate acetylic olympic abo asbestus snatchily Gnarly carrre audibility unpatriotic unstunted unmodernized credulity proclaimer yetta cravatted ambassadress descriptive nonsalutarily pamela nondissident unalike lawn amphimacer nonheritor sharra liquescence unhomiletical granjon perkin profaned chicaner velma outskip uncorrupted Trapball ungoaded howe carunculated plover epeisodia buzzer ossietzky viceregency sumo killock unwarlike chazan hardpan bessie plumbiferous unopined interpolar nonacceptance wastebasket luting adhesively popishness disburdenment whoa venomousness monopteral corrado drawbridge Alcazar garniture barenboim waldensian alcides zebeck varicelloid nonextant bhaunagar preexpounder churchwards pneumatograph hydrostat nucha mispublicized unelating footpath sinewless kutaisi unrenunciable retyping verier dipstick blastoporic reposedly cet ponce adhesion interwork Calif prodemocratic womanness access suborganically unsurging cancelli nemea boarding neurofibril microsegment overinfluencing mousepox arborvitae polyploidy grabbler uncongruous clarify legislating forthwith finchley commutuality unenlisted bowdlerism documentation unskilful baring smithfield candied Semirural nonindigenous christiania unfreeze rescrub compromise heartfelt postdisapproved unsizable spice intermittent glagolitic chainstitch denaturation preconquer prouniformity unendowed interblended prosser factiously ganglioid sermonized gauffer ctenidial interramal capstone hairiness readjournment superpious Mcgregor precipitation cassia cunt salto antiskidding gastrotomy lantern hemathermal hypothesizing premonition falkner centre lament tantaliser unabstracted fanning taylorite auster existentialist undergardener disbandment merkin penseroso myogenicity pseudopregnant ducatoon overloan teaching Noteworthily content misc determinative palankeen unremonstrative amphitrichate bridler inhospitably subintroductive unconstricted crunchiest jehovic hardiment monodimetric orrin gallantly apothegmatic billingsgate prejudice thokk fountainless hemimorphism chevrony unreasonable shrapnel epithalamia shaba flexible Penannular overmoist mercenariness leawood knur coalesce homely disproportionableness vitreosity noncompressibility pleiocene squamoseness reeligibility springboard pompon penetrometer repletely difficulty battle uninvaded incapacitating tale misassertion superartificial cleanhandedness dyspnoic mercier firenze metaphen Epipaleolithic spasmolysant premanhood zanu pieria faithfulness definiens melburnian nondense she''s aerialist oxidasic pertinaciously recode priestlike fluyt thrombose cementum sales torbay somniferous concoction extricable tigris sensiltising substratum nonspirited unassimilable pharmacy ";

dictionary = wordCollection.split(" ");

console.log("the number of objects " + dictionary.length);

console.log("the array of random words is " + dictionary);

// Random integer between 0 and 100
var randNum = Math.floor(Math.random()*dictionary.length);

var randWord = dictionary[randNum];

// When a key in the answer box is pressed, run function.
$('.answer').keyup(updateVals);

$('.answer').keydown(function(e) {
  if(e.which == 13) {
    $('.answer').val("");
  }
});

function updateVals() {
  answerWord = $('.answer').val();
  targetWord = $('.target').text();

  console.log("the value in the answer input is: " + answerWord);
  
  // If the answer matches the target, run the code within
  if (answerWord === targetWord) {
    // Increase the score by 1
    score++;

    // Generate a new random number
    randNum = Math.floor(Math.random()*100);
    console.log("The random number is " + randNum);
    // Generate a new randomword
    randWord = dictionary[randNum];
    console.log("The random word is " + randWord);  

    // Clear the answer box
    $('.answer').val("");
    //Insert the new word into the target box
    $('.target').text(randWord);

  }
  
  // Write the score into the scoreboard
  $('.score-number').text(score);
}



