# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Connor', email: 'connorbrabant@gmail.com', password: 'starwars')
User.create(username: 'demo', email: 'demo@demo.com', password: 'demopassword')

Comedian.create(name: 'Jerry Seinfeld', description: 'Funny guy from Massapequa New York. Created
and starred in the classic Seinfeld. Big Mets fan.')
Comedian.create(name: 'Ellen DeGeneres', description: 'Host of the arguably the
greatest day time talk show. Loves animals and even has a gorilla sanctuary')
Comedian.create(name: 'John Mulaney', description: 'funny guy')

Joke.create(title: "I'm Telling You for the Last Time", comedian_id: 1, 
joke: "So, anyway, I’m thrilled to be back here in New York.
I love how certain things about New York never change. They’re always constant, 
they’re always there for you. The cabbies and the BO. What is with the BO and 
these guys? How long are these shifts? Can’t we get this man a ten minute break
for a shower? You’re in the back and it’s coming through the glass. You’re just
going: 'What in the…' Not only they put that cherry puppet stuff on the dashboard 
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
I had the periodic chart with me at the time.”", user_id: 2, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')

Joke.create(title: "Relatable", comedian_id: 2, 
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
user_id: 2, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')

Joke.create(title: 'New in Town', 
joke: "I also watch this show called Cold Case Files. 
On Cold Case Files, they solve old murders, and it’s really interesting cause what I learned from it is that it was really easy to get away with murder before they knew about DNA. 
It was ridiculously easy. 
Like, what was even going on back then? 
What was a murder investigation like in 1935?? One cop would just walk in and be like, “Detective! We found a pool of the killer’s blood in that hallway!” and he would just be like “Hmmm… gross! Mop it up. 
Now then, back to my hunch… 
Hmmmmmm…. Look for clues.
I’ll tell you what we’ll do! 
We’ll draw chalk around the body is. That way, we’ll know where it was…” 
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
comedian_id: 3, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')

Joke.create(title: 'Dummy Joke 2', joke: 'Dummy Joke 2', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
Joke.create(title: 'Dummy Joke 3', joke: 'Dummy Joke 3', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
Joke.create(title: 'Dummy Joke 4', joke: 'Dummy Joke 4', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
Joke.create(title: 'Dummy Joke 5', joke: 'Dummy Joke 5', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
Joke.create(title: 'Dummy Joke 6', joke: 'Dummy Joke 6', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
Joke.create(title: 'Dummy Joke 7', joke: 'Dummy Joke 7', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
Joke.create(title: 'Dummy Joke 8', joke: 'Dummy Joke 8', comedian_id: 1, user_id: 1, image: 'https://m.media-amazon.com/images/M/MV5BYTlmYzI2NTMtYmZmOS00ZTYzLTg2ZTUtZDhkZjhkZDVjMWQwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg')
