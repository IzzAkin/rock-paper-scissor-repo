import random

def play():
    user_wins = 0
    while user_wins < 2:
        user = input("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors\n")
        computer = random.choice(['r', 'p', 's'])

        if user == computer:
            print("It's a tie")
        elif is_win(user, computer):
            user_wins += 1
            print(f"You won this round! Total wins: {user_wins}")
        else:
            print("You lost this round...")

    print("You won the game! :D")


def is_win(player, opponent):
    # return true if player wins
    # r > s, s > p, p > r
    return (player == 'r' and opponent == 's') or (player == 's' and opponent == 'p') or (player == 'p' and opponent == 'r')

if __name__ == "__main__":
    play()
