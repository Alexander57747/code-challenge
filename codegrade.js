
Copy code
def calculate_grade(mark):
    if mark > 79:
        return 'A'
    elif mark >= 60:
        return 'B'
    elif mark >= 50:
        return 'C'
    elif mark >= 40:
        return 'D'
    else:
        return 'E'

        def main():
        try:
            mark = float(input("Enter the student's mark (between 0 and 100): "))
            if 0 <= mark <= 100:
                grade = calculate_grade(mark)
                print(f"The grade for {mark} is {grade}.")
            else:
                print("Mark should be between 0 and 100.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")
    
    if __name__ == "__main__":
        main()