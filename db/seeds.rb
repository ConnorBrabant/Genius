# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Joke.destroy_all
Comedian.destroy_all
Annotation.destroy_all
Comment.destroy_all
Like.destroy_all

User1 = User.create(username: 'Connor', email: 'connorbrabant@gmail.com', password: 'starwars')
User.create(username: 'demo', email: 'demo@demo.com', password: 'demopassword')

JerrySeinfeld = Comedian.create(name: 'Jerry Seinfeld', description: 'Funny guy from Massapequa New York. Created
and starred in the classic Seinfeld. Big Mets fan.')
EllenDeGeneres = Comedian.create(name: 'Ellen DeGeneres', description: 'Host of the arguably the
greatest day time talk show. Loves animals and even has a gorilla sanctuary')
JohnMulaney = Comedian.create(name: 'John Mulaney', description: 'funny guy')
EddieMurphy = Comedian.create(name: 'Eddie Murphy', description: 'GOAT of standup. Also great in Daddy Daycare')
ChrisRock = Comedian.create(name: 'Chris Rock', description: 'another funny guy ')
SebManiscalco = Comedian.create(name: 'Sebastian Maniscalco', description: 'know nothing about him')
SarahSilverman = Comedian.create(name: 'Sarah Silverman', description: 'quite a funny gal')
WandaSykes = Comedian.create(name:'Wanda Sykes', description: 'too funny for her own good')
AzizAnsari = Comedian.create(name: 'Aziz Ansari', description: 'hilarious guy. On the Parks and Rec aka the wannabe office')
AdamSandler = Comedian.create(name: 'Adam Sandler', description: 'goat actor. big daddy is elite')
PeteDavidson = Comedian.create(name: 'Pete Davidson', description: 'funny dude from NY')
DaveChappelle = Comedian.create(name: 'Dave Chappelle', description: 'does he need one?')
KevinHart = Comedian.create(name: 'Kevin Hart', description: 'short dude whos funny ')
AmySchumer = Comedian.create(name: 'Amy Schumer', description: 'Amy Schumer is funny')
BillBurr = Comedian.create(name: 'Bill Burr', description: 'Actually dont know who he is')

joke1 = Joke.create!(title: "I'm Telling You for the Last Time", comedian_id: JerrySeinfeld.id, 
joke: 'So, anyway, I’m thrilled to be back here in New York. 
I love how certain things about New York never change. They’re always constant, 
they’re always there for you. The cabbies and the BO. What is with the BO and 
these guys? How long are these shifts? Can’t we get this man a ten minute break 
for a shower? You’re in the back and it’s coming through the glass. You’re just 
going: "What in the…" Not only they put that cherry puppet stuff on the dashboard 
so you get a cherry BO. I don’t know what that’s supposed to be… Even the fruit 
showers more often than this. The funny thing about being in these cabs is that 
when you’re in Manhattan for some reason you don’t get scared, no matter how 
fast the guy goes. Well, you know, he’s driving fast and recklessly… 
but he’s a professional. He’s got a cab driver’s license, I can see it right there. 
I don’t even know what it takes to get a cab driver’s license. I think all you 
need is a face. This seems to be their big qualification. No blank heads are 
allowed driving cabs in this town. Also helps to have a name with like 8 
consonants in a row. Did you ever see some of the letters in these names? 
What is the “O” with a line through it, by the way? What planet is that from? 
You need a chart of the elements if you wanna report the guy. “Yes, officer, 
his name was Amal and then the symbol for Boron.” “No, it’s not Manganese. 
I had the periodic chart with me at the time.”', user_id: User1.id)
joke_pic1 = joke1.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/seinfeld-lasttime.jpg"), filename: "seinfeld-lasttime.jpg")

joke2 = Joke.create!(title: "Relatable", comedian_id: EllenDeGeneres.id, 
joke: 'When I’m in traffic, here’s the thing. I love to drive and I like to
drive fast and I’m safe, but I do like to go fast and so slow drivers… irritate 
me, because they’re going so slow and let’s be honest. It’s usually a Prius, 
isn’t it? They’ve got the “coexist” bumper sticker on the back 
listening to NPR knitting a hemp scarf… If I see a Prius going fast, I’m like: 
“Good for you!” I don’t know why it is. Whenever we pass someone going slow we 
have to see what they look like. We’re always like… “That’s what you look like. 
I thought so, I thought…” There’s nothing more embarrassing than 
when you pass up a slow driver to show them the proper way of driving. You go 
around them and show them how they should be driving and then you hit a red light. 
 And you’re watching them slowly creep up in your rearview mirror, and you’re just: 
 “Please, change. Please, change. Please, change.” And the light doesn’t change so 
 they just creep up alongside of you. “I’m just gonna look down here and touch that. 
 I’m gonna see what that is, right there, with that because I have to see this and… 
 No, I know you’re next to me but you’re still wrong, even though you caught up. And 
 I’m gonna do that with my finger for a while because…” 
I don’t wanna judge. You don’t know why someone’s going slow. You have no idea. 
Maybe they’re transporting a bowl of soup. I don’t know, you know. I really 
don’t like to judge, except for people who say “libary”. Then I do. 
“Libary”… Really? OK. The place with all the words? OK… You know what word’s not 
in there? “Libary”. No, I don’t like to judge ’cause… I do stupid 
things, we all do– Everyone does stupid things. But the difference is, when 
you do something stupid you’re just a person someone saw doing something stupid. 
When I do something stupid, it’s a story. I went to a gas station to put gas in 
my car And there’s a group of teenage boys across the way and they’re like… 
really cool. They were vaping and… And they were like: “It’s Ellen, oh my God, 
it’s Ellen.” And I’m like… and… then I realized I pulled up, and 
the gas pump was over here and my tank was back here, on this side of the car. 
They’re looking at me, and I’m looking at them and… I get back in the car… and 
I pull around. Now, it’s still on the wrong side… because I’ve just pulled around. 
And they’re still looking at me… And I’m like: “I don’t wanna look like an idiot.” 
So, I just filled up the back seat. I just… I’ll buy a new car, I don’t care.',
user_id: User1.id)
joke_pic2 = joke2.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/ellen-relatable.jpg"), filename: "ellen-relatable.jpg")

joke3 = Joke.create!(title: 'New in Town', 
joke: "I also watch this show called Cold Case Files. 
On Cold Case Files, they solve old murders, and it’s really interesting cause what I learned from it is that it was really easy to get away with murder before they knew about DNA. 
It was ridiculously easy. 
Like, what was even going on back then? 
What was a murder investigation like in 1935?? One cop would just walk in and be like, “Detective! We found a pool of the killer’s blood in that hallway!” and he would just be like “Hmmm… gross! Mop it up. 
Now then, back to my hunch… 
Hmmmmmm…. Look for clues. 
I’ll tell you what we’ll do! 
We’ll draw chalk around where the body is. That way, we’ll know where it was…” 
A couple years ago, I saw this movie called Public Enemies with Johnny Depp, it was about old bank robbers and stuff. 
Here’s how easy it was to get away with bank robbery back in the 30’s. 
As long as you weren’t still there when the police arrived, you had a 99% chance of getting away with it. 
To the point that, like, those old bank robbers, they take credit for the bank robberies! 
Like, they come running out of there and they’re like “Ha ha ha! And if anyone asks, you tell em it was Golden Joe and the Suggins Gang!” 
And then they like shoot “Suggins” into the side of the wall. 
It’s like, what, were bullets free back then? And they don’t even disguise themselves! 
They dress up for the bank robbery. 
They’re rolling in there in, like, big suits and hats like they’re going to church in Atlanta. 
They make a day of it!",
comedian_id: JohnMulaney.id, user_id: User1.id)
joke_pic3 = joke3.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/mulaney-newintown.jpg"), filename: "mulaney-newintown.jpg")

joke4 = Joke.create!(title: 'Raw', comedian_id: EddieMurphy.id, joke: 'Gotta be a 
good cook. I didn’t realize my mother was a good cook till after I moved out. 
When you’re a child, if your mother doesn’t take you to McDonald’s, you don’t 
think she can cook. I had one of those mothers, no matter what you want, she has 
the ingredients at home. You say, “Ma, I wanna stop and get some McDonald’s.” 
And she go, “I got hamburger meat at home.” “But I want McDonald’s hamburger.” 
“I’ll make you a hamburger better than McDonald’s.” “You cook better than McDonald’s?” 
“That’s right. You can help Mama make it.” You say, “Dang, that’s better than McDonald’s.” 
Your mother say, “OK, go get me the big frying pan.” So you hand her the frying 
pan and she say: “I want you to go in the refrigerator and get the meat and 
while you in there, get me a green pepper and a onion.” And you say: “Ain’t no 
green peppers at McDonald’s.” “I’m not making McDonald’s, I’m making Mama’s 
burger. “I need a green pepper and an onion and get me an egg out too.” 
“What you need eggs for? “I want hamburgers. “You making Egg McMuffins.” 
“I’m not making an Egg McMuffin. I don’t know what no Egg McMuffin is. Just get
me the egg and shut your mouth.” She take the egg and the green peppers and 
chop the peppers up in big chunks. Don’t even dice it. Big chunks of green 
peppers and onion and mix the egg in and put paprika and all this stuff in it 
and make a big meatball and put it in the middle of this frying pan. At McDonald’s, 
the meat is this thin. Your mother’s burger is like this or fatter. Green peppers 
hanging out of it. And there’s a big split in the middle and grease is popping out. 
You’re looking at it while it’s popping. You’re looking at the grease in the 
pan and thinking: “That don’t look like no McDonald’s.” Then your mother say, 
“Go inside the refrigerator and get me the bread out of the bread box.” And you 
go look in the bread box and you say: “Ma, we don’t have no hamburger buns. 
“All we have is Wonder Bread.” “That’s what I said. Get the bread out of the 
bread box.” “You gonna put it on square Wonder Bread?” “Bread is bread.
Bring me that bread before I slap you. “Don’t tell me about Wonder Bread. 
“As much as that bread costs, don’t tell me about Wonder Bread. “This is Wonder 
Bread. A hamburger is a hamburger.” And she’d make it and put it in the middle 
of square Wonder Bread. At McDonald’s, they use buns, the meat covers the whole 
bread. At your mother’s, the meat’s right in the middle of the bread, with grease 
running through the middle, making the bread stick to the plate. This big green 
pepper is hanging out the top of this big meatball on the bread. And you try to 
put some ketchup on it and it mixes with the grease, turn the bread into pink dough. 
Then you grab it and get fingerprinted and you got big, pink fingerprints in the 
dough. You stand there looking at it and you try to make it look like McDonald’s, 
so you rip the edges off around it, make it round. And you got green peppers and 
grease running down your hand. And your mother say, “Now, go on outside and play.” 
And the other kids got McDonald’s. They outside going, “We got McDonald’s 
hamburgers. “McDonald’s. McDonald’s. “I got McDonald’s.” And you standing there 
with this big “house burger”. And kids are honest. They say, “Where you get that 
big, welfare, green-pepper burger?” And you cry. “My mother made it.”
And long slob… When little kids cry, some long slob come out of their mouth and
it hangs this far to the ground. And it won’t break. And adults stand around 
going, “That slob gonna break?” And it won’t. The wind can blow that slob. You 
know where you see kids crying? I do it all the time, I’m sadistic. I like to go
to supermarkets and watch mothers lose it.',
user_id: User1.id)
joke4.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/murphy-raw.jpg"), filename: "murphy-raw.jpg")


joke5 = Joke.create(title: 'Never Scared', comedian_id: ChrisRock.id, 
joke: 'But let me tell you right now, the number one reason people hate America, 
the number one reason, is because of our religion. Americans worship money. 
We worship money. Separate God from school, separate God from work, separate God 
from Government, but on your money it says, “In God we trust”. All my life 
I’ve been looking for God and he’s right in my pocket. Americans worship money. 
And we all go to the same church – the church of ATM. Everywhere you look, there’s 
a new branch popping up, reminding you about how much money you got or how much 
money you don’t got. And if you got less than $20, the machine won’t even talk 
to you. The machine’s like, “You better go see a teller.” You ever go to a teller 
and try to take out $8.50? It’s disgusting. Man, you gotta wait on that long-ass 
line. People doing real transactions in front of you. You get up to the 
front, fill out your form. Eight-fifty. The teller looks at it, she looks 
at you, she looks at the chit. She don’t even take the money out the drawer, she 
take it out her pocket. “Wastin’ my time. Get outta here, damn.” I think 
every bank should have a box of ones by the door for they broke-ass customers. I 
don’t need free checking, I need lunch money. Trying to buy me some pork fried 
rice, man. Here’s the other thing, man. Drugs are illegal but ATM machines are 
open 24 hours a day. 24 hours a day. For who? Who is it open for? Have 
you ever taken out $300 at four o’clock in the morning for something positive? 
When you press that machine at four o’clock in the morning, I think a 
psychiatrist should pop up on the screen and go, “Come on, man. “Save your money, 
man. “Don’t buy drugs, buy some rims.” “They spinnin’, look at they spinnin’! 
They spinnin’! “They spinnin’, look at they spinnin’!” Americans worship money. 
You know why banks are closed on Sunday? Cos if they wasn’t church’d be empty.',
user_id: User1.id)
joke5.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/rock-neverscared.jpg"), filename: "rock-neverscared.jpg")

joke6 = Joke.create!(title: "Aren't You Embarassed", comedian_id: SebManiscalco.id,
joke: 'Here, I went to Chipotle couple weeks ago. Love Chipotle… they make a 
really nice burrito over there. It’s so terrific, the employees can’t stop eating it. 
The employees are never working. They’re always in the dining room eating. 
Ever walk in there? I’m, like, “Where are the workers?” The only guy behind there 
is the guy cutting chicken, just looking at you. Right? He’s not trained on burrito 
building. And I’m watching the people order… I mean, there’s a sneeze glass there, 
right? But people always hook the arm over the glass: “I’ll have corn; I’ll have 
more corn…” Just say, “corn.” It’s not soundproof. It goes right over the glass. 
Get your claw out of the salsa. And nobody talks to the Chipotle people. There’s 
no conversation that happens. They listen to the same shit eight hours a day, 
right? Just, “steak… “beans… cheese…” gone! I never seen anything like this. It’s 
like you’re not even… It’s like a robot. “Chicken… “peppers… lettuce…” And the 
employees… All… day… long. And God forbid if you ask for guacamole… oh, my God… 
the whole store goes into a panic attack. They don’t even know how to tell you 
it’s extra money, right? You’re, like, “Put some guac on that…?” “Uh…” “It’s $1.80 
extra. Is that o… is that okay?” Yeah… it’s okay. Most stressful job at Chipotle
has to be wrapping these damn things, right? By the time the wrapper gets it, 
his employees have populated the burrito with so much ingredients, the guy can’t 
even find the tortilla. He starts sweating. He’s, like, “How am I gonna wrap 
this damn thing?” Right? It’s a workout. He’s gotta get down, gotta use some quads, a 
little core, start… tucking and fold… tuck and fold. It took me 23 minutes to get 
a burrito out of this place, huh? I felt, at the end of this, Chipotle owed me 
something. So I asked for a water; I filled it up with Coca-Cola. Huh? Least I 
could do. 23 minutes in line, I go to the Coca-Cola machine, and I stare at them 
while I fill, like this. Coca-Cola in the see-through glass… what are you 
gonna do? What are you gonna do about it? It’s everywhere you go.', user_id: User1.id)
joke6.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/mani-embarassed.jpg"), filename: "mani-embarassed.jpg")

joke7 = Joke.create!(title: 'A Speck of Dust', comedian_id: SarahSilverman.id, 
joke: 'Can you hear me when I just talk like this? This is a good sound system. 
You can hear me when I just talk like this? I, uh, got laser hair removal. And… 
Did you just applaud that? You’re like, “Finally.” I got laser hair removal. I
waited a really long time to do it. Uh… I wanted the science to be at its peak. 
You know, like, we landed on Mars… I think it was August 2012. Are you just 
impressed that I remember the date? What I’m saying is… we landed on Mars in 
2012. I waited four more years. And then I looked up the highest-rated laser 
hair removal place within three blocks of my apartment. And I went there. It 
was called LaserAway. And, um… it wasn’t what I… I think I was naive, and I 
just thought you go, and you get… And your hair gets removed. But it’s a much 
longer process. For every section of hair you want removed, you have to go 
have eight separate sessions, you know, like on each… So, for me, I was doing,
like, from right below my belly button down to the floor. And then back up 
to about the middle of my back. And, um… Isn’t that funny that that’s funny? And 
it’s a lie. I did my arms, too. But, um… I can’t lie to you guys. I can’t. Uh… Right. 
So, they make you pay up front. Which makes so much sense, now that I think about it. 
Because… it hurts so much. By the second session you’re like, “Oh, I would gladly 
pay $3000 to never come back here again. That would be a bargain.” It’s so painful. 
And I have a… I feel like I have a high pain… I think most women have a high pain 
threshold. I’ve been punched in the face thrice. And that’s another story for 
another time. But I… It’s a different kind of pain. It’s like nerve ending… Like 
nerve damage. Like, they give you stress balls, and you squeeze them. And by the 
time you pry your fingers open, they’re just, like, pyramids of powder, basically. 
It hurts so much. I remember telling myself like, “You are a grown woman.” That 
is your money to waste. You earned that money. “Throw it out the window. It doesn’t 
matter.” And, uh, as I was walking back to my car after the second session… 
I actually can remember exactly, like, the words I was saying to myself as I was 
walking to the car. I was like: “What you just went through was trauma.” 
“That was traumatic.” And right in that moment I got a text message from my boyfriend, 
who was in Guatemala at the time with UNICEF. And it just said… It said, “I just 
spent the morning” with a woman who watched her son get murdered.” And I was like, 
“You think that’s bad?” ‘Cause I have…', user_id: User1.id)
joke7.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/silverman-speckofdust.jpg"), filename: "silverman-speckofdust.jpg")

joke8 = Joke.create!(title: 'Not Normal', comedian_id: WandaSykes.id, 
joke: 'Here’s another thing that’s not normal. Presidents, they all age while 
in office, right? They age while in office, because the job is so stressful 
that it affects you physically. We’ve seen it. Obama… First two years, President
Obama went totally gray. His face started drooping. He got all droopy in the face. 
time, I was like, “Is that Kareem Abdul-Jabbar? Who the…” “Is that what… Misha, 
is that Kareem? What the hell?” George W. Bush, he shrunk four inches. At one point, 
he was looking like Gollum from The Lord of the Rings. “Ah, my precious! My precious!” 
Bill Clinton. He grew that bulb on the tip of his nose. What was that? Bill Clinton 
looked like the man on the Operation board. But not Trump. Nope. Mm-mm. 
He’s on executive time. Trump hasn’t aged. But we have. Everybody’s looking older.
My God. I was in my car, I saw a billboard. “Cher, Vegas.” I was like, “Oh, damn, 
that’s on my bucket list. I’m going.” I get to the stop light, I look back up, 
I was like… “Oh, damn, that’s Ariana Grande. What the?” He’s messing us up. 
You know how they say some women have resting bitch face? Well, Trump has given 
me resting “what the hell?” face. Every morning, I’m looking in the mirror like,
 “What the hell? What…” I got crow’s feet. I got a divot in my forehead. 
 He has cracked black. That’s… That’s damn near impossible. I was like, 
 “We got to get rid of him. Two more years, I’mma to look like Cicely Tyson.” 
 She look good, but I ain’t ready. I ain’t ready to go there.', user_id: User1.id)
 joke8.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/sykes-notnormal.jpg"), filename: "sykes-notnormal.jpg")

joke9 = Joke.create!(title: 'Buried Alive', comedian_id: AzizAnsari.id, 
joke: "Some of these people aren’t ready to have kids, either. You know, you 
ever have friends like that? They’re about to have kids. You’re like, “What?! 
No! They’re dumb. Why? I got a friend. He got married recently. He’s kind of a 
goofball. I asked him, I said, “Hey, you’re not gonna have kids, are you?” 
He’s like, “Maybe next year.” I was like, “Dude, “you still have a chain wallet. 
“You can’t have a chain wallet and a kid at the same time. “Ah, if your wallet 
is causing you so much problem you have to chain it to your person… you’re not 
ready to bring life into the world. If you go to like, pay for the baby with a 
chain wallet, they should like, Oh, no, no, no. we got to put this one back– Whoop!” 
I’m not ready for that kind of responsibility. If someone came up to me with a baby 
like, “Hey, you got to look out for this baby.” I be like, “Sorry, I got my own 
things going on right now. I don’t have time to look out for this little, brown 
baby.” In this scenario, I’m assuming it’s a little Indian baby. If it was a white 
baby I’d be like, Get that thing away from me. It’s disgusting!” White babies are gross, 
man! I’m sorry! They’re like regular babies that aren’t ripe yet.

And look, I’m 30 years-old. That’s a totally reasonable age to have a kid, but 
me it’s still terrifying, you know. They have that show 16 and Pregnant. They’re 
should be a show called 25 and Pregnant. I’d be like, “Oh, no, those poor kids! 
“They have their whole lives ahead of them. It’s a shame things turned out that 
way. What happened?” “Me and my husband decided to start a family.” 
“Bbp! Irresponsible decisions.” That show is the most depressing television show 
I’ve ever seen. ‘Cause You know, any other reality show where there’s like a 
big fat guy or something and at the end of the episode he’s eating right, he’s exercising.  
like, “All right, things are gonna get better. “Yeah, things are gonna get better. 
Good job TV show. Things are gonna get better.” 16 and Pregnant and you’re like, 
“Whoa, that’s never getting better.” The only good thing that happened this week 
the guy almost got a job at Arby’s… and the girl won a fistfight with her mom. 
This is brutal. And they don’t do anything nice for the kids at the end of the show. 
There’s no money. There’s no new house. Come on, do something for those kids. 
Like maybe at the end of each episode Xzibit could show up. And the kids would 
be like, “Oh, my God. “Xzibit, are you here to pimp our rides?” And he’d be like, 
“No, I’m gonna raise your baby as my own! You’re free to go back as being teenagers!” 
And they’d be like, “Thank you, Xzibit. Thank you so much for our lives!” 
Then Xzibit would take the baby and put it on a bus with all the other babies he’s 
collected, and then you do a second show about Xzibit trying to raise 30 babies by himself.",
user_id: User1.id)
joke9.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/ansari-buriedalive.jpg"), filename: "ansari-buriedalive.jpg")

joke10 = Joke.create!(title: '100 Percent Fresh', comedian_id: AdamSandler.id, 
joke: "Hello. You ever… How about the times you wake up… Ever wake up like 4:30 
in the morning and you’re like, “God damn it. What am I doing up right now?” 
4:30, can’t fall asleep… I’m ruined for the day. Ever do one of those things 
where you go, “Let me just get out of bed,” and live like those people who always 
go, “Hey, I get up at 4:30 every day. I do that for me. That’s me time. I spend 
the morning alone. That’s my time and it’s the best. It sets me in the right mood.” 
You’re like, “Let me be one of those guys. I’ll get up at 4:30.” And you get up 
4:30 and you make yourself breakfast. You’re like, “Wow, this is good. making 
breakfast. I never do that.” And then you work out. You’re like, “I’m working out 
this early. Holy cow. That’s out of the way. That’s great.” And then you have 
yourself another breakfast. You’re like, “Okay, I’m running out of stuff to do.” 
And then you flip on the news and you go, “There’s news before the news? Who the 
are these people? They’re very good. They should be on the real news.” Then you 
go outside and you see a bird eating a worm. You’re like, “Is that the early bird? 
I’ve been hearing about that thing for a long time.” There he is. Wow.” Then a 
bus shows up, and your kids get on it. You’re like, “That’s how they get to school.
Nobody told me… What a day. This is interesting.” And then it’s around 11 o’clock 
and you’re in the middle of a work meeting and you’re like, “How long is this day 
gonna go for? Let me sleep!” My wife’s grandmother turned… she turned 101 years old, 
which is nice, 101 years old. That’s good for the family, you know, good to 
have that in your genes. My daughter’s got that great life. My family, we die… 
I should be dead is all I’m saying. It makes no sense that I’m here right now. 
But 101 years old… I went to her birthday, I gave her 101 punches in the shoulder… 
Just, she kept going, “Ooh.” And I was saying, “It’s tradition. We can’t break tradition, 
Grandma.” She was like, “I want to break tradition.” I was like, “Well, you can’t. 
So, just deal with 94 more.” And bam. “Oh!”", user_id: User1.id)
joke10.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/sandler-fresh.jpg"), filename:"sandler-fresh.jpg")

joke11 = Joke.create!(title: 'Alive from New York', comedian_id: PeteDavidson.id,
joke: 'My friend, uh, that I financially support, uh, had a kid, so, uh, I’m a dad. 
Yeah, I wasn’t exactly ready for it. Uh… He gave me a call. He was all excited. 
He was like, “Yo, bro. I got great news.” I was like, “You got a job?” And he was 
like, “No, bro. I had a kid.” And I was like, “Wow, that’s, like, the exact opposite 
of a job.” I can’t wait to have a kid. I’m very excited. I don’t think it’s very 
hard at all. No, ’cause all my friends are havin’ ’em, and their complaints, uh, 
they don’t, uh, bother me very much. All their complaints are the same. They’re 
like, “Bro, it cries!” And I’m like, “Oh, man, go in the other room.” Yeah, everything 
cries. You know? You try to make it stop, and then you leave. I cry all the time. 
Eventually, my friends are like, “Yo, dude, I gotta go to work. I don’t know. 
Figure it out. Get offline.” So that, they say it cries, uh, and the other complaint is, 
they’re like, “Yo, it, like, shits all the time.” And that doesn’t really bother 
me either, because, like, you know, so do I. You know, so I don’t mind cleaning 
it up at, like, a smaller scale, you know? Plus, when you clean kids, sometimes 
you see spots that, like, you might have missed on yourself, you know? Yeah. 
You know? You’re like, “Wow, I’ve never seen my butt from this angle before.” 
You’re like, “I will dab that corner when I hop out the shower.” You hop out the 
shower, you’re like, -“Son of a b.”', user_id: User1.id)
joke11.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/davidson-alivefromny.jpeg"), filename:"davidson-alivefromny.jpg")


joke12 = Joke.create!(title: 'The Age of Spin', comedian_id: DaveChappelle.id,
joke: 'Everybody’s mad at police now. I watched that– You see that show on Netflix, 
Making a Murderer? The Steven Avery story. If you haven’t seen it, check it out. 
Steven Avery is in more trouble than any white person in the history of the United 
States has ever been in! In a justice system designed for him to thrive, he’s failed 
miserably twice. I can’t even wrap my mind around it. If Making a Murderer was about 
a black dude, that shit would be called Duh! Of course everything would go wrong. 
Seems like he did it, all right. The dude even had $200,000 for his legal defense. 
That should get you off in Wisconsin. That’s like OJ money. All he needed to get off that 
he didn’t have was a single black juror. That’s all it would’ve took. Because only a black 
dude in the United States can look at other dudes and be like, “I think the police did this.” 
He’s messed up in the game. That’s how OJ got off.

I’ve been watching that new OJ show. I can’t get enough of that. Doesn’t it 
bring back good memories? But I forgot just how polarizing that OJ case was. And 
you know, I’ve met OJ Simpson on four different occasions in my life. And before 
the end of the show, I will tell you about each of those occasions. The first time 
I met OJ Simpson, I was in Santa Monica. -Santa Monica! -Yeah! I can’t believe a 
black dude was like, “Santa Monica!” You the last person I would expect to say 
that. Let me see your shoes. You got some Vans on, dude? What you got? “Santa Monica!” 
You? At the time, I was. I had done a show, and the guy from the club came up 
and was like, “Hey, OJ Simpson’s here, and he said he wants to meet you.” I said, 
“What? Hell yeah!” I ran down the steps, and OJ was down there. He’s like, “Hey,
young man. How are you? It’s very good to meet you. And you’re doing really good
work, and I hope good things happen for you in your life.” I was like, “Man, 
thanks, Mr. Juice.” Standing beside him, was– I don’t know the nice way to say 
this– his soon-to-be-slain wife. Ladies and gentlemen, man up, or you’re not 
gonna make it to the end of this show. Just man up. She’s dead. We 
already know what happened. We don’t know who did it, but we know what happened. 
I should tell you, that woman was very nice to me. She actually embraced me. She 
said, “I think you’re adorable,” and she hugged me. She goes, “Good luck to you,” 
and she held me for a long time. And I whispered in her ear, “Are you trying 
to get us both killed?” I’m just kidding. I didn’t say that, but… that was the 
first time, in a nutshell.', user_id: User1.id)
joke12.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/chappelle-ageofspin.jpg"), filename:"chappelle-ageofspin.jpg")

joke13 =  Joke.create!(title: 'Killin Them Softly', comedian_id: DaveChappelle.id, 
joke: 'Sometimes, that’s gonna be too much to deal with. That show business be crazy. 
That’s where the cultures really collide. Show business bring a lot of races together. 
Sometimes it works, sometimes it don’t. This is one thing that happens that’s funny. 
You sometimes I’ll be on a business call, right? You know, like, with… with a lawyer 
or something. You know, my lawyers be white. And uh… So like, we’ll be on a call, 
right? And they’ll be like: “OK, Dave, we’re gonna close the deal.” Is that fine 
with you? I’ll be, like, “Yeah, that’s good for me.” “Great! Great. You have a good 
weekend, Dave.” I’ll be like, “Alright. You too, man. Peace.” “Uh… all right now. 
Bye-bye.” They don’t know what to say, right? So sometimes I’ll make up stuff that’s 
not even slang. Just to see how they handle it and shit. It’ll be the same thing, 
they just go: “All right, we’re gonna close the deal. Is that fine with you, Dave?” 
“Yeah, it sounds good to me.” “Great. You have a good weekend, Dave.” “All right, buddy. 
Zip it up, and zip it out.” He’ll be like… “Uh…” All right. “Zippity-doo-dah, bye-BYE.”

Sometimes, you know, sometimes racism works out in black people’s favor. It doesn’t 
happen often. It happens very rarely. But… when it happens, it is fucking sweet. 
I’m serious. One time, racism saved my life, man. I was… I was on a plane. I was c… I was coming from overseas. 
And… I don’t know how this guy got a machine gun on the plane, but he stood up, 
man. He said: “Everybody! Get on the fucking ground.” NOBODY LOOK AT MY FACE!” 
I started freaking out. Cause he was Chinese. I was like, “Why is he talking like that?” 
He was screaming and crying. I was the only brother on the plane. Well, I thought 
I was the only brother. I looked over, there was one other black dude. He was from
Nigeria. I looked over at him, he was looking right at my face, man. He didn’t say 
two words, he was like: He didn’t need to talk. I knew just what he was talking 
about. I looked right back at him. I was like (gives thumbs up) Some white dudes 
on the front of the plane seen us. They were like: “Oh my God.” “I think those 
black guys are gonna try to save us.” Nuh-MMMM. We were just communicating that 
we understood the situation. We were both seeing the same thing. What we understood 
was simple. Terrorists don’t take black hostages. That’s the truth. I have yet to 
see one of us on the news reading a hostage letter. “Mm.” They is treating us good. 
Uh, we all chillin’. I’d like to give a shout out to Ray-Ray and Big 
Steve in… “Newport.” You’re not gonna see it. Terrorists are smart. They know 
what they’re doing. They’re, you know… They’re terrorists. They know that black 
people is bad bargaining chips. They call the White House, they say: “Hello.” 
We have got five black… “Hello?”', user_id: User1.id)
joke13.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/chappelle-killinsoftly.jpg"), filename:"chappelle-killinsoftly.jpg")

joke14 = Joke.create!(title: 'Seriously Funny', comedian_id: KevinHart.id,
joke: 'I love to talk about my babies. Two babies— Little boy and little girl. 
Now I used to talk about my son being a dumb baby. I used to. I’m serious, I did. 
I thought my baby was a dumb baby. But now I’ve realized he’s not dumb, he just 
does dumb things. Like, I don’t like the way my son throws his tantrums. You know, 
when a baby throws a tantrum he’s supposed to fall out, cry, roll on the ground. 
That’s a tantrum. This is not a joke, this is for real. This is what my son does 
when he gets mad. I’m not lying. Don’t make me laugh. Look. This is what he do. 
He goes… This is what he do. He go… It’s the most stupid thing I’ve ever seen 
in my life. I can’t say nothing. I got to wait till he’s finished then explain to 
people what happened. Then explain to people what happened. He got an attitude 
’cause he can’t get no candy. My baby is weird, man. When he gets mad he gets in 
the oven. I swear to God. He gets in the oven. Then get an attitude with me when 
I get him out. Boy, get your butt out of the damn oven. Get your butt out of the 
oven before I turn it on. When I say that he go, “hot. Hot. That thing hot, daddy.” 
I love him to death though, man.

Two— A little boy and little girl. Now my daughter, my daughter’s a different ballgame. 
My daughter’s spoiled, man. About to be five. Spoiled. I’m not gonna lie. I spoil her. 
That’s what I’m supposed to do. She’s at that age now though where she knows. She knows 
how to play me and her mom against each other. She knows how to make us fight.
Here’s how she got me in trouble the other day. She came in the room, she hit me 
with the soft voice. She’s like, “dad, can I have a cookie?” I said, “yeah, baby. 
Let’s go get a cookie.” I start walking towards the kitchen. Out of nowhere all 
I hear is, “don’t give her no goddamn cookie!” Scared me. I stopped. 
I didn’t know what it was. I thought it was Jesus at first. I went, “why can’t she 
have a cookie, Jesus? What did she do?” But here’s how smart she is. She knew how 
to get a reaction out of me. She looked at me. She said, “dad, I thought you was 
the king of the house.” When she said that, it set me off. It riled me up. So I snapped. 
I said, “what you mean she can’t have no goddamn cookie? Why’d you buy 
the cookies if can’t nobody eat a cookie? That makes you stupid for buying uneatable 
cookies. Ain’t nobody getting a cookie.” I shut the whole cookie operation down. 
I grabbed the cookies, got my ladder, put them on top of the refrigerator. Then 
I hid my ladder. It wasn’t a big ladder. Three steps. It’s a ladder for thugs. 
pap pap, real quick. Little thug ladder.', user_id: User1.id)
joke14.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/hart-seriouslyfunny.jpeg"), filename:"hart-seriouslyfunny.jpg")

joke15 = Joke.create!(title: 'The Leather Special', comedian_id: AmySchumer.id,
joke: 'I am the worst famous person, okay? I’m a bad famous person. Yes, 
I know. I always– I can’t believe it’s still going on. I say what I mean. I dress 
like garbage. Like, my sister and I… And I tried really hard. I’m like, “Okay, 
like, let’s do our best and tape it up and spackle it down and…” But after 
I leave here, I will look like a newly homeless person very quickly. Very quickly, 
trust me. My sister dresses the same, but they’ll still write about us as if we’re 
the Kardashians. They’ll be like, “The Schumer sisters stepped out today. Amy opted 
for performance fleece… and a pleather jacket from Forever 21.” And my favorite 
thing they ever wrote was, “And Kim chose to wear a bright red-and-gold beanie 
to add to her ensemble.” It was a Gryffindor hat. Like, look at this. It’s a 
Gryffindor hat. The most disappointing people ever to be photographed. 
Look at this. It looks like we were moving, and we ran out of bags, so we’re like, 
“Let’s just wear it all. We’ll just wear it all. Never a bra. Never a problem.” 
Look at my sister’s shoe game. Can you check this out? Ballet flats from Payless. 
H&M zebra pants. What’s up? What’s up now, Internet? They photographed me once, 
and this was the headline: “Schumer buys pastry so she can work out.” Kind of mean, 
right? No, they hit the nail right on the head. That’s what I do to work out. 
That’s what I do. Before I work out, I go buy a scone, and then I slowly walk 
around a reservoir, and I eat it. My workouts are like a woman in hospice. Just, 
like, nibbling on a baked good, looking at the trees and the birds. “Mmm.” I’m so 
disappointing to them as a famous person that they’ll try to make it sound sexier 
than it is. They’re like, “Schumer flaunting her legs in teeny-tiny shorts.” And 
you guys have eyes. You understand that that is not available to me. Like, 
there’s no separation between church and state up here, okay? This area does not– 
There’s no– It’s not happening. I didn’t even know what a thigh gap was. I was 
like, “Is that like the wage gap? Do we need to rally against this?” Since I’m 
ten years old, I can’t wear tiny shorts. If I take one step, all the material 
shoots up me. I have to pull it out like a magician. A dove. Just,
like, “Fly!” I have to lather deodorant in my crotch, so I don’t chafe to the 
point of bleeding out. Right here is when my thighs stop touching for the first 
time. Together. Apart. Together. Apart. Together. Apart. The teeny-tiny 
shorts. I got photographed paddleboarding, standup paddleboarding, 
which– Can we all just agree to stop pretending like that’s fun? What do we– Just what? 
“Would you like the sensation of being in a canoe, without the comfort of a seat or 
the safety of sides?” “No.” “Have you often wondered what it’s like to work on a 
gondola?” “I can’t say that I have. No.” The picture of me, I didn’t even recognize 
myself because, obviously, I don’t suck in anyway. It was just, like– I looked at 
it, and I was like, “Oh, my God, Alfred Hitchcock is alive… and loves water sports! 
Hell, yeah,” you know? I was so psyched.', user_id: User1.id)
joke15.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/schumer-leather.jpeg"), filename:"schumer-leather.jpeg")

joke16 = Joke.create!(title: 'You People Are All The Same', comedian_id: BillBurr.id,
joke: 'Speaking of no boozing, man, I been really trying to clean up my act as far 
as that boozing thing goes. Just really been laying off it, you know? I don’t know 
what it is. Your head gets big as you get older, you know? You keep boozing, 
you start getting that big Alec Baldwin / John Travolta head. And you don’t notice 
though, ’cause every day, you’re brushing your teeth and you’re seeing your head, 
it’s just getting a little bit bigger. Keep drinking. “I’ll have another one” right? 
Then one day you go to take that cell phone picture, and you’re just, like, 6 inches 
in front of everybody else. You don’t think it’s a big deal. Maybe you leaned in, 
’cause you’re feeling good, right? Then all of a sudden, you look at the picture. 
It’s like, “Yeah! Whoo!” It’s like, “I gotta lay off this shit.”

So I’ve been trying to learn… learn how to fix stuff around the house. That’s what’s 
filling up all this time of just being sober. That’s brutal, dude. You have no idea 
how long a year is until you’re stone sober. It’s fucking brutal. So I’m learning how 
to fix stuff, right? My girlfriend doesn’t like it ’cause she says I have a temper, 
you know? She’s like, “You know, it’s just not that you’re trying to fix things, 
it’s that you get frustrated, you punch the wall, the dog starts shaking. I just 
don’t think it’s a good idea. You know, you’re a comedian. You should tell jokes. 
He’s a plumber. He should plumb, right?” I’m trying to explain to her that 
losing your cool is part of the process of fixing something, right? Everybody does that. 
Right? Yeah! You buy something at Ikea. You get halfway through putting it together. 
You’re like, “Dude, where the is the… oh, there it is. There it is. 
There it is. Honey, I didn’t see it. I didn’t see it! Why, you wanna put it together? 
You wanna… well, then you put it together. You put together this particle 
board piece of crap. These instructions make no sense! I will buy another 
one! I will buy another one. I’ll buy five and smash four if I want to. 
Don’t tell me what to do! Oh, go to your mother’s. I don’t give a care. Jesus Ch… yeah, 
what story you gonna tell? This one, right? Not the part about how I pay all the bills, 
right? How was that uncalled for? How was that uncalled for? I wasn’t even talking 
to you! I was talking to the thing! I was talking to the thing! 
I know what I said. I know what I said, okay? You don’t need to tell me. I know 
what I said, yes. I am working on it. I am working on it, all right? Look… look, 
you think I wanna be this guy? You think I wanna be the guy who flips out about 
the tables? I don’t, okay? This isn’t who I am. This is who I became, 
all right? I’m working through this. You didn’t have to speak… well, you 
do things too, okay? You do things too. Well, I thought you were going to your mother’s!”',
user_id: User1.id)
joke16.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/burr-people.jpeg"), filename:"burr-people.jpg")

joke17 = Joke.create!(title: 'Jesus is Magic', comedian_id: SarahSilverman.id,
joke: 'I wear this saint Christopher medal sometimes because I’m Jewish but my 
boyfriend is Catholic and it was just…. It was cute the way he gave it to me, 
you know. He said if it doesn’t burn through my skin it will protect me. Who cares. 
Different religions, you know. I mean… I guess if you in time with an issue, I 
suppose would be like if you’re having a baby… You got to figure out like how you 
wanna raise your baby. …or whatever, you know. Which wouldn’t even still not be 
an issue for us because we’d be honest, you know… … and just say, you know like 
Mammy is one of the chosen people and … … and daddy believes that Jesus is magic. 
not nice. You know Jesus is magic you know because he turn water to wine and he… 
I think he made the Stature of Liberty disappear. … or something. You know that 
Jews got all, you know they don’t want. But then Jesus movie came out, you know, 
and but now the Jews didn’t want people to see it. Because they felt… Everybody 
blames the Jews for killing Christ and then the Jews try to pass it off on the 
Romans. I’m one of the few people that believes it was the blacks. I don’t care. 
Good. I hope the Jews did kill Christ. I’d do it again, I’d do it again 
on the second. By here is breaking stocks clacking. This way.', user_id: User1.id)
joke17.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/silverman-jesusmagic.jpeg"), filename:"silverman-jesusmagic.jpg")

joke18 = Joke.create!(title: 'Delirious', comedian_id: EddieMurphy.id,
joke: 'Remember when the ice cream man used to come to town when you was little? 
And no matter what you was doing you would stop and lose your fucking mind! 
There’s something about the ice-cream truck that makes kids lose it.
And they can hear that shit from ten blocks away. They don’t hear their mothers 
calling but they hear that motherfucking ice cream truck. And no matter what was 
going on, the iceman came, it stopped. You be getting some marbles and shit:
“ice cream! Ice cream! The ice cream man is coming! The ice cream man is coming!
Mom! Mom! Throw down some money! The ice cream man is coming!“
Then your mother come to the window and be throwing change and say:
“Get your father toasted almond boy, get your brother icy, get yourself vanilla cone and bring back my change.“
Catch all that and run down the street, top speed. Chasing the Icecream truck and:
“Icecream!“ Ice cream man always drove extra blocks away though. And I know he’s 
seen us, but I think he just be in the car with his friends and say:
“Watch me how fast I make these kids run“ You’d be behind him doing 50mph and going:
“Icecream!“ You stop, you be out of wind saying: “Icecream man, can I have this, 
I want this over there, toasted almond for my father, and give me this ice cream 
over here and vanilla cone. Thank you, icecream man! Thank you!“
I’d get my ice cream and I didn’t eat it just sing for a little while. You know how kids are.
“I have some ice cream, I have some ice cream, and I’m gonna eat it all, I’m gonna eat it all...“
The ice cream be running down your arm and shit
“You don’t have no icecream! You didn’t get none! You didn’t get none!
’cos you are on the welfare, you can’t afford it.“
Other kids would join in: “You can’t afford it, and his father is an alcoholic!“
“You dropped your ice cream, you dropped your ice cream...“
Eat it. I could drop my icecream in a pile of shit and eat it. I would be like “It’s just sprinkles“',
user_id: User1.id)
joke18.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/murphy-delirious.jpg"), filename:"murphy-delirious.jpg")

joke19 = Joke.create!(title: 'The Comeback Kid', comedian_id: JohnMulaney.id,
joke: 'I talked to a lot of people before I got engaged, you know. And I heard 
this expression about whether or not you should get married. This is an old expression. 
People say this. They say, “Why buy the cow when you can get the milk for free?” 
You ever heard that before? It’s a bananas insulting expression… to an entire gender. 
But also, it makes no sense. “Why buy the cow when you can get the milk for free?” 
You’re not allowed to milk a cow that you don’t own. That’s not even a situation. 
Was that a problem at one point? Like, in the dairy community? Was that happening 
a hundred years ago in some village? Some Dutch guy was sneaking in at night 
being like, “Ah-ha-ha, I take your milk.” And the farmer was like, “Well, then, 
this is your cow now.” And he was like, “No, no proof of purchase.” And he ran 
off into the night. That sounded Dutch, right? You know what that… you know what 
that expression means? It means, “Why would you marry a woman if she’s already 
having sex with you?” Which has nothing to do with what relationships are even 
like anymore. Now, it’s like, “Why buy the cow?” Uh, maybe because, every day, 
the cow asks you when you’re gonna buy it. And… … you live in a really small 
apartment with the cow, so you can’t avoid that question at all. And also, the 
is way better at arguing than you are. And the cow grew up in a family that knows 
how to argue. “Why buy the cow?” Uh, maybe because every time another cow gets 
bought, you have to go to the sale and you have to sit next to your cow at the 
sale, and your cow looks over at you the entire time like… And does not enjoy 
the sale at all… even though she’s the one that wanted to go to the sale. And 
she’s especially mad because that farmer and cow met, like, eight months after 
you guys met. “Why buy the cow?” Well, let’s be real here. You’re very lucky to 
have the cow that you do have. “Roping in cows and getting milk out of them was
never anything you were known for, John.” By the most liberal of estimates, there 
have been about eight cows total, several unmilked, and… a lot of people think that 
you like bulls, and if you just bought… They assume it. When you search your name, 
the third thing to come up is like, “John Mulaney bull?” And if you just bought the 
cow, nobody would say that anymore. They’ll still say it. ‘Cause there are those 
guys who, they buy a cow, and then on the side, total matador, but… But, for real, 
Chicago, why buy the cow? Let’s be real. Why buy the cow? Because you love her. 
You really do. And, yeah, yeah… Sure, she’s a bossy little Jew, but… … she takes 
care of you. And you don’t wanna be some old man stumbling around, like, “Hey, you seen any loose milk?”',
user_id: User1.id)
joke19.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/mulaney-comebackkid.jpeg"), filename:"mulaney-comebackkid.jpg")

joke20 = Joke.create!(title: 'The Beginning', comedian_id: EllenDeGeneres.id,
joke: 'There are things that need to be said that I will say… I will… I know, a 
lot of people don’t want me to say them, cause people think once something has 
stayed a certain way for a certain amount of time, leave it alone, don’t change 
it. But I think, things need to change… and I will point them out to you tonight 
I will say these things.

For instance: Do we still need directions on the back of a shampoo bottle? Oh 
yeah, I’ve said it… Whose shampooing for the first time? Anybody? And if you are, 
can’t read anyway. You’re like a wild crazy ape person that has been raised in 
the wild by monkeys or wolves or something nurturing that would raise ya. Reptiles 
won’t raise you, they don’t even raise their own young, Don’t expect them to raise 
you. Those monitor lizards don’t even look that dangerous, but those tail’ll whip 
around, slapping your head and break your neck. So if you are in the wild, try to 
catch the eye of a monkey or a wolf or something like that… Don’t look them directly 
in the eye, that is threatening to them actually… Just sideways, if you walk next 
to them, and kinda glance… Actually, if you are lower, that is even less threatening… 
just… Don’t smile, if you show your teeth, that’s also threatening. So say some 
hikers find ya… you know… That is a big find; if they find a crazy wild ape person, 
they’re gonna bring you back to civilization certainly. But they’re not gonna 
just throw you in the shower and expect you to know how to shampoo your head… 
They’re gonna shampoo your head for you… And then you would mimic that. That is 
how you survive so long in the wild by mimicking things… So who needs the directions 
on the back of a shampoo bottle? And it is not bad enough there are directions, 
there is a 0800 number on the back. In case the directions are too vague for you. 
Rinse and repeat, but how many times? To be the only thing to be more pathetic 
than calling the 0800 number is working at the 0800 number. Alright, let’s go 
through this again, shall we? Right… I am gonna stop you,… did you wet your hair 
first? You’re welcome… That’s my job. Thank you… Thank you for holding? It’s about 
the size of a quarter in the palm of your hand? No, can’t be two dimes and a nickel… 
No, can’t be three nickels and a dime. What, cause it can’t spread out that way… 
that’s why… then you just rinse and repeat… Oh my… How old are you? You should repeat 
seven more times then. What a fascinating story… What did you survive on? Nuts and 
 or what? Wolves? MY GOODNESS… And they just nuzzled you?! Aaaw… No, I can’t help 
 you with the conditioner, you’re gonna have to call that line on your own.',
 user_id: User1.id)
 joke20.photo.attach(io: open("https://ludicrous-seed.s3.amazonaws.com/ludicrous+seed+pics/degeneres-beginning.jpeg"), filename:"degeneres-beginning.jpg")