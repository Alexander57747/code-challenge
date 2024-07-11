def calculate_demerit_points(speed):
    speed_limit = 70
    demerit_points = 0
    
    if speed <= speed_limit:
        print("Ok")
    else:
        demerit_points = (speed - speed_limit) // 5
        print(f"Points: {demerit_points}")
        
        if demerit_points > 12:
            print("License suspended")

def main():
    try:
        speed = int(input("Enter the speed of the car in km/h: "))
        if speed >= 0:
            calculate_demerit_points(speed)
        else:
            print("Speed cannot be negative.")
    except ValueError:
        print("Invalid input. Please enter a valid number.")

if __name__ == "__main__":
    main()