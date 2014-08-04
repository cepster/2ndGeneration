app.controller('IndexCtrl', function($scope){

});

app.controller('MembersCtrl', function($scope){
	$scope.members = [
		{name: 'Trish Soulen',
		 instrument: 'Lead Vocals',
		 imageURL: 'images/headShots/trish.jpg',
		 description: 'A 20 year show biz vet, Trish has performed all over the country from rock bars and jazz clubs to cabarets and dinner theatres. She is a published songwriter, collaborating with jazz virtuoso Tania Maria on her acclaimed “Lady From Brazil” album. Trish and musician husband Pete recently became the proud parents of a baby boy. She joined the boys of    2nd Generation early in 2004, and is now able to enjoy a dual career as both a dynamic lead vocalist and full-time mom.'},
		{name: 'Michael Loonan',
		 instrument: 'Piano/Guitar/Vocals',
		 imageURL: 'images/headShots/mike.jpg',
		 description: "Singer, songwriter, guitarist, pianist, arranger, producer-Michael does it all. He began piano lessons in the 3rd grade and taught himself guitar. He composes commercial jingles and film scores in his home recording studio, as well as original songs. His CD, Share the Disguise, received strong reviews and earned a MN Music Awards nomination. Michael created the Looney Bin Band and parody songs for KSTP-AM's The Mischke Broadcast. He has written and produced several radio/TV jingles for Mike Veeck, nationally known marketing guru."},
		{name: 'Andy Richards',
		 instrument: 'Guitar/Vocals',
		 imageURL: 'images/headShots/andy.jpg',
		 description: "Andy started his musical journey when the character he played in a high school play was required to play acoustic guitar. His early influences were, and still are, The Beatles, Crosby, Stills, Nash & Young, and Cat Stevens. Shortly after high school, he and Doug co-founded and formed the 50s and 60s group Midnight Sun. This evolved into a country band before eventually disbanding. It wasn't long before he and Doug launched 2nd Generation. Early on 2G backed up Dash Riprock regularly at the Withrow Ballroom."},
		{name: 'Doug Salmela',
		 instrument: 'Bass Guitar',
		 imageURL: 'images/headShots/doug.jpg',
		 description: "18 years after co-founding the group, Doug continues to carry the bottom for 2nd Generation with his great R & B style and solid technique. Growing up in the 60s and 70s, his influences were everything from Motown to McCartney. In addition to his musical contribution to the band, Doug's technical expertise and experience in the area of sound production and equipment acquisition continues to keep the band's sound values on the cutting edge."},
		{name: 'Martin Appelbaum',
	     instrument: 'Drums/Electronic Percussion',
	     imageURL: 'images/headShots/martin.jpg',
	     description: "After becoming frustrated and smashing his trombone in the 4th grade, Martin took up drums at the age of 12. He has performed with Crystal, 3 Faces Turned, Us, The Janes and Cactus Cadillac. Martin teaches high school in St. Paul, and is also the director of \"Drum Up Your Life!\", an eclectic presentation on the history and uses of drums from various cultures. He loves a wide variety of music, and plays African drums, latin percussion and Japanese Taiko drums."}
	];
});

app.controller('GigsCtrl', function($scope){
	$scope.gigs = [

	];
});

app.controller('SongListCtrl', function($scope){
	$scope.songs = [
		{
			title:'A Little Bit of Bad',
			artist:'NRBQ',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:"Ain't Too Proud to Beg",
			artist:'Temptations',
			genre:'Motown',
			date:'6/11/66',
			billboard:'#13'
		},
		{
			title:'Alison',
			artist:'Elvis Costello',
			genre:'Slow 70s',
			date:'',
			billboard:''
		},
		{
			title:"All My Lovin'",
			artist:'The Beatles',
			genre:'Fast 60s',
			date:'1964',
			billboard:''
		},
		{
			title:'And I Love Her',
			artist:'The Beatles',
			genre:'Slow 60s',
			date:'8/6/64',
			billboard:'#12'
		},
		{
			title:'Baby It\'s You',
			artist:'The Beatles',
			genre:'Slow 60s',
			date:'1/6/62',
			billboard:'#8'
		},
		{
			title:'Because',
			artist:'Dave Clark 5',
			genre:'Slow 60s',
			date:'8/8/64',
			billboard:'#3'
		},
		{
			title:'Beer Barrel/No Beer/Too Fat Polka',
			artist:'Various',
			genre:'Polka',
			date:'',
			billboard:''
		},
		{
			title:'Birthday',
			artist:'The Beatles',
			genre:'Fast 60s',
			date:'1968',
			billboard:''
		},
		{
			title:'Blue Suede Shoes',
			artist:'Carl Perkins/Elvis',
			genre:'Fast 50s',
			date:'3/10/56',
			billboard:'#2'
		},
		{
			title:'Build Me Up Buttercup',
			artist:'Foundations',
			genre:'Fast 60s',
			date:'',
			billboard:''
		},
		{
			title:'Burning Love',
			artist:'Elvis Presley',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'California Love',
			artist:'The Rivieras',
			genre:'Fast 60s',
			date:'2/1/64',
			billboard:'#5'
		},
		{
			title:'Can\'t Take My Eyes Off Of You',
			artist:'Frankie Valli',
			genre:'',
			date:'6/13/67',
			billboard:'#2'
		},
		{
			title:'Chains',
			artist:'Cookies/Beatles',
			genre:'',
			date:'12/1/62',
			billboard:'#17'
		},
		{
			title:'Cherry Cherry',
			artist:'Neil Diamon',
			genre:'Fast 60s',
			date:'9/10/66',
			billboard:'#6'
		},
		{
			title:'Crazy',
			artist:'Patsy Cline',
			genre:'Slow Country',
			date:'11/6/61',
			billboard:'#9'
		},
		{
			title:'Dancing in the Street',
			artist:'Martha and the Vandellas',
			genre:'Motown',
			date:'9/6/1964',
			billboard:'#2'
		},
		{
			title:'Devil With The Blue Dress',
			artist:'Mitch Ryder & The Detroit Wheels',
			genre:'Fast 60s',
			date:'10/22/66',
			billboard:'#4'
		},
		{
			title:'Do You Love Me?',
			artist:'Contours/Dave Clark 5',
			genre:'Fast 60s',
			date:'9/22/62',
			billboard:'#3'
		},
		{
			title:'Don\'t Know Why',
			artist:'Norah Jones',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Every Day',
			artist:'Buddy Holly',
			genre:'Fast 50s',
			date:'',
			billboard:''
		},
		{
			title:'Fire',
			artist:'Pointer Sisters',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Follow Me',
			artist:'Uncle Kracker',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Folsom Prison Blues',
			artist:'Johnny Cash',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Friends in Low Places',
			artist:'Garth Brooks',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Get Down Tonight',
			artist:'KC and the Sunshine Band',
			genre:'Disco',
			date:'8/2/75',
			billboard:'#1'
		},
		{
			title:'Get Ready',
			artist:'The Temptations',
			genre:'Motown',
			date:'4/4/70',
			billboard:'#4'
		},
		{
			title:'Gimme Some Lovin\'',
			artist:'Spencer Davis Group',
			genre:'Fast 60s',
			date:'1/28/67',
			billboard:'#7'
		},
		{
			title:'Give Me One Reason',
			artist:'Tracy Chapman',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Gloria',
			artist:'Shadows FF Night',
			genre:'Fast 60s',
			date:'4/16/66',
			billboard:'#10'
		},
		{
			title:'Good Lovin\'',
			artist:'Young Rascals',
			genre:'Fast 60s',
			date:'3/26/66',
			billboard:'#1'
		},
		{
			title:'Goodbye to You',
			artist:'Scandal',
			genre:'Fast 80s',
			date:'',
			billboard:''
		},
		{
			title:'Heatwave',
			artist:'Martha and the Vandellas',
			genre:'Fast 60s',
			date:'8/17/63',
			billboard:'#4'
		},
		{
			title:'Higher and Higher',
			artist:'Jackie Wilson',
			genre:'Fast 60s',
			date:'',
			billboard:''
		},
		{
			title:'Hit Me With Your Best Shot',
			artist:'Pat Benatar',
			genre:'Fast 80s',
			date:'10/18/80',
			billboard:''
		},
		{
			title:'Hokey Pokey',
			artist:'Various/Little Richard',
			genre:'Other',
			date:'',
			billboard:''
		},
		{
			title:'Hot Hot Hot',
			artist:'',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'House Is a Rockin\'',
			artist:'Stevie Ray Vaughn',
			genre:'Fast 90s',
			date:'',
			billboard:''
		},
		{
			title:'How Far is Heaven',
			artist:'Los Lonely Boys',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Hurt So Good',
			artist:'John Mellencamp',
			genre:'Fast 80s',
			date:'5/22/82',
			billboard:'#2'
		},
		{
			title:'I Got You (I Feel Good)',
			artist:'James Brown',
			genre:'Fast 60s',
			date:'11/20/65',
			billboard:'#3'
		},
		{
			title:'I Knew the Bride',
			artist:'Nick Lowe',
			genre:'Fast 80s',
			date:'',
			billboard:''
		},
		{
			title:'I Only Have Eyes For You',
			artist:'The Flamingos',
			genre:'Slow 50s',
			date:'6/8/59',
			billboard:'#11'
		},
		{
			title:'I Saw Her Standing There',
			artist:'The Beatles',
			genre:'Fast 60s',
			date:'1/25/64',
			billboard:'#14'
		},
		{
			title:'I Will Survive',
			artist:'Gloria Gaynor',
			genre:'Disco',
			date:'1/20/79',
			billboard:'#1'
		},
		{
			title:'I\'m a Believer',
			artist:'The Monkees',
			genre:'Fast 60s',
			date:'12/17/66',
			billboard:'#1'
		},
		{
			title:'I\'m Into Something Good',
			artist:'Herman\'s Hermits',
			genre:'Fast 60s',
			date:'11/14/64',
			billboard:'#13'
		},
		{
			title:'It\'s Not Unusual',
			artist:'Tom Jones',
			genre:'Fast 60s',
			date:'5/1/65',
			billboard:'#10'
		},
		{
			title:'I\'ve Got the Music In Me',
			artist:'Kiki Dee',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Just Because',
			artist:'Various',
			genre:'Polka',
			date:'',
			billboard:''
		},
		{
			title:'Knockin\' On Heavens Door',
			artist:'Bob Dylan',
			genre:'Slow 70s',
			date:'9/29/73',
			billboard:'#12'
		},
		{
			title:'Lady Marmalade',
			artist:'',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Last Kiss',
			artist:'J. Frank Wilson and the Cavaliers',
			genre:'Slow 60s',
			date:'',
			billboard:''
		},
		{
			title:'Limbo Rock',
			artist:'Various',
			genre:'Other',
			date:'9/29/62',
			billboard:'#2'
		},
		{
			title:'Little Bit of Soul',
			artist:'Music Explosion',
			genre:'Fast 60s',
			date:'5/27/67',
			billboard:'#2'
		},
		{
			title:'Little Wing',
			artist:'Jimi Hendrix',
			genre:'Slow 70s',
			date:'',
			billboard:''
		},
		{
			title:'Love is All Around',
			artist:'The Troggs',
			genre:'Slow 60s',
			date:'3/23/68',
			billboard:'#7'
		},
		{
			title:'Love Shack',
			artist:'B 52s',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Man I Feel Like a Woman',
			artist:'Shania Twain',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Margaritaville',
			artist:'Jimmy Buffet',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Maybe Baby',
			artist:'Buddy Holly',
			genre:'Fast 50s',
			date:'3/10/58',
			billboard:'#17'
		},
		{
			title:'Maybe I\'m Amazed',
			artist:'Paul McCartney',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Mountain of Love',
			artist:'Johnny Rivers',
			genre:'Fast 60s',
			date:'11/14/64',
			billboard:'#13'
		},
		{
			title:'My Girl',
			artist:'The Temptations',
			genre:'Motown',
			date:'1/30/65',
			billboard:'#1'
		},
		{
			title:'Natural Woman',
			artist:'Aretha Franklin',
			genre:'Slow 60s',
			date:'10/7/67',
			billboard:'#8'
		},
		{
			title:'Never Ending Love Song',
			artist:'Various',
			genre:'Polka',
			date:'1971',
			billboard:''
		},
		{
			title:'Night and Day',
			artist:'Brasil 66',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Oh Darlin\'',
			artist:'The Beatles',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'One After 909',
			artist:'The Beatles',
			genre:'Fast 60s',
			date:'1970',
			billboard:''
		},
		{
			title:'Our Lips Are Sealed',
			artist:'The Go Gos',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Play That Funky Music White Boy',
			artist:'Wild Cherry',
			genre:'Disco',
			date:'7/3/76',
			billboard:'#1'
		},
		{
			title:'Pretty Woman',
			artist:'Roy Orbison',
			genre:'Fast 60s',
			date:'9/5/64',
			billboard:'#1'
		},
		{
			title:'Pride and Joy',
			artist:'Stevie Ray Vaughn',
			genre:'Fast 90s',
			date:'',
			billboard:''
		},
		{
			title:'Respect',
			artist:'Aretha Franklin',
			genre:'Fast 60s',
			date:'5/6/67',
			billboard:'#1'
		},
		{
			title:'Rock Around the Clock',
			artist:'Bill Haley and the Comets',
			genre:'Fast 50s',
			date:'5/14/55',
			billboard:'#1'
		},
		{
			title:'Rock in the USA',
			artist:'John Mellencamp',
			genre:'Fast 80s',
			date:'2/5/86',
			billboard:'#9'
		},
		{
			title:'Rock This Town',
			artist:'Stray Cats',
			genre:'Fast 80s',
			date:'10/23/82',
			billboard:'#9'
		},
		{
			title:'Sea of Love',
			artist:'Phil Phillips',
			genre:'Slow 50s',
			date:'7/20/59',
			billboard:'#2'
		},
		{
			title:'Sleepwalk',
			artist:'Santo and Johnny',
			genre:'Slow 50s',
			date:'8/17/59',
			billboard:'#1'
		},
		{
			title:'Slow Down',
			artist:'The Beatles',
			genre:'Fast 60s',
			date:'9/26/64',
			billboard:'#25'
		},
		{
			title:'Stand By Me',
			artist:'Ben E. King',
			genre:'Slow 60s',
			date:'5/22/61',
			billboard:'#4'
		},
		{
			title:'Summertime Blues',
			artist:'Eddie Cochran',
			genre:'Fast 50s',
			date:'8/25/58',
			billboard:''
		},
		{
			title:'Sweet Caroline',
			artist:'Neil Diamond',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Take Me To The River',
			artist:'Commitments',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Tears on My Pillow',
			artist:'Little Anthony and the Imperials',
			genre:'Slow 50s',
			date:'8/18/58',
			billboard:'#4'
		},
		{
			title:'Tennessee Waltz',
			artist:'Patti Page',
			genre:'Slow Country',
			date:'7/4/64',
			billboard:'#35'
		},
		{
			title:'The Look of Love',
			artist:'Dusty Springfield',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'This Magic Moment',
			artist:'Jay and the Americans',
			genre:'Slow 60s',
			date:'1/25/69',
			billboard:'#6'
		},
		{
			title:'To Sir With Love',
			artist:'Lulu',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Turn the Beat Around',
			artist:'Vicky Sue Robinson',
			genre:'',
			date:'',
			billboard:''
		},
		{
			title:'Twist and Shout',
			artist:'The Beatles',
			genre:'Fast 60s',
			date:'3/21/64',
			billboard:'#2'
		},
		{
			title:'Unchained Melody',
			artist:'The Righteous Brothers',
			genre:'Slow 60s',
			date:'7/31/65',
			billboard:'#4'
		},
		{
			title:'Under the Boardwalk',
			artist:'The Drifters',
			genre:'Slow 60s',
			date:'7/11/64',
			billboard:'#4'
		},
		{
			title:'Walkin\' on Sunshine',
			artist:'Katrina and the Waves',
			genre:'Fast 80s',
			date:'4/85',
			billboard:'#9'
		},
		{
			title:'What I Like About You',
			artist:'The Romantics',
			genre:'Fast 70s',
			date:'',
			billboard:''
		},
		{
			title:'What\'s Up',
			artist:'Four Non Blondes',
			genre:'Slow 90s',
			date:'6/5/93',
			billboard:'#14'
		},
		{
			title:'Whiter Shade of Pale',
			artist:'Procol Harum',
			genre:'Slow 60s',
			date:'7/1/67',
			billboard:'#5'
		},
		{
			title:'Wild Night',
			artist:'Van Morrison (Mellencamp Vers.)',
			genre:'Fast 70s',
			date:'11/20/71',
			billboard:'#28'
		},
		{
			title:'Will You Still Love Me Tomorrow?',
			artist:'Shirrells',
			genre:'Slow 60s',
			date:'12/12/60',
			billboard:'#1'
		},
		{
			title:'Wipeout',
			artist:'The Surfaris',
			genre:'Fast 60s',
			date:'7/6/63',
			billboard:'#2'
		},
		{
			title:'Wonderful Tonight',
			artist:'Eric Clapton',
			genre:'Slow 70s',
			date:'6/10/78',
			billboard:'#16'
		},
		{
			title:'Words of Love',
			artist:'Buddy Holly/The Beatles',
			genre:'Slow 50s',
			date:'',
			billboard:''
		},
		{
			title:'You Can\'t Hurry Love',
			artist:'The Supremes',
			genre:'Motown',
			date:'8/20/66',
			billboard:'#1'
		},
		{
			title:'You Really Got a Hold On Me',
			artist:'Smokey Robinson',
			genre:'Motown',
			date:'1/12/63',
			billboard:''
		},
		{
			title:'You Shook Me All Night Long',
			artist:'AC/DC',
			genre:'',
			date:'',
			billboard:''
		}
	];
});

app.controller('PhotosCtrl', function($scope){

});

app.controller('DemoCtrl', function($scope){

});

app.controller('SilverHammerCtrl', function($scope){

});

app.controller('SilverHammerMediaCtrl', function($scope){

});

app.controller('SilverHammerSongListCtrl', function($scope){

});