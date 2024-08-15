import random

def play():
    user = input("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors\n")
    computer = random.choice(['r', 'p', 's'])

    if user == computer:
        return print("It's a tie")

    # r > s, s > p, p > r
    if is_win(user, computer):
        return print("You won! :D")

    return print("You lost... D:")


def is_win(player, opponent):
    # return true if player wins
    # r > s, s > P, p > r
    if (player == 'r' and opponent == 's') or (player == 's' and opponent == 'p') \
            or (player == 'p' and opponent == 'r'):
        return True

if __name__ == "__main__":
    play()
