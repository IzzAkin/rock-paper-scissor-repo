import random

def play():
    user = input("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors\n")
    computer = random.choice(['r', 'p', 's'])

    if user == computer:
        print("It's a tie")
        return 0  # No winner, no point

    # r > s, s > p, p > r
    if is_win(user, computer):
        print("You won! :D")
        return 1  # Player wins, return 1 point
    else:
        print("You lost... D:")
        return -1  # Computer wins, return -1 point

def is_win(player, opponent):
    # return true if player wins
    # r > s, s > p, p > r
    return (player == 'r' and opponent == 's') or \
           (player == 's' and opponent == 'p') or \
           (player == 'p' and opponent == 'r')

def main():
    player_wins = 0
    cpu_wins = 0

    while player_wins < 2 and cpu_wins < 2:
        result = play()
        if result == 1:
            player_wins += 1
        elif result == -1:
            cpu_wins += 1

        print(f"Player Wins: {player_wins}, CPU Wins: {cpu_wins}")

    if player_wins == 2:
        print("You won the game!")
    elif cpu_wins == 2:
        print("CPU won the game!")

if __name__ == "__main__":
    main()
