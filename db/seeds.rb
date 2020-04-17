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