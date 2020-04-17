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
