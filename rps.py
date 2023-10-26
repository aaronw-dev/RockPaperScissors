import random

gameover = False

validchoices = ["1","2","3"]

alignments = [
    "rock",
    "paper",
    "scissors"
]
battles = {
    "rock":{
        "beats":"scissors",
        "action":"smashes"
    },
    "paper":{
        "beats":"rock",
        "action":"covers"
    },
    "scissors":{
        "beats":"paper",
        "action":"cuts"
    },
}
while gameover == False:
    choice = input(
    '''Make your choice:
[1] Rock
[2] Paper
[3] Scissors \n'''
)
    if choice in validchoices:
        bot_choice = random.randint(0,2)

        playerbattle = battles[alignments[int(choice) - 1]]
        botbattle = battles[alignments[int(bot_choice)]]

        playeraction = playerbattle["action"]
        botaction = botbattle["action"]

        playerbeats = playerbattle["beats"]
        botbeats = botbattle["beats"]

        bot_word = alignments[bot_choice]
        player_word = alignments[int(choice) - 1]
        
        if playerbeats == bot_word:
            print(" ".join([player_word.capitalize(),playeraction,bot_word]))
            print("player wins")
        elif botbeats == player_word:
            print(" ".join([bot_word.capitalize(),botaction,player_word]))
            print("bot wins")
        elif bot_word == player_word:
            print("draw!")