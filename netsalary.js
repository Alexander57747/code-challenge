# Constants based on the provided links
# Tax rates for calculating PAYE (Progressive Tax Rates)
tax_rates = [
    (24000, 10),
    (16800, 15),
    (12000, 20),
    (8800, 25),
    (0, 30)
]

# NHIF Deductions
nhif_deductions = {
    0: 150,
    5999: 300,
    7999: 400,
    11999: 500,
    14999: 600,
    19999: 750,
    24999: 850,
    29999: 900,
    34999: 1000,
    39999: 1100,
    44999: 1200,
    49999: 1300,
    59999: 1400,
    69999: 1500,
    79999: 1600,
    89999: 1700,
    99999: 1800,
    109999: 1900,
    119999: 2000,
    129999: 2100,
    139999: 2200,
    149999: 2300,
    159999: 2400,
    169999: 2500,
    179999: 2600,
    189999: 2700,
    199999: 2800,
    209999: 2900,
    219999: 3000,
    229999: 3100,
    239999: 3200,
    249999: 3300,
    259999: 3400,
    269999: 3500,
    279999: 3600,
    289999: 3700,
    299999: 3800,
    309999: 3900,
    319999: 4000,
    329999: 4100,
    339999: 4200,
    349999: 4300,
    359999: 4400,
    369999: 4500,
    379999: 4600,
    389999: 4700,
    399999: 4800,
    409999: 4900,
    419999: 5000,
    429999: 5100,
    439999: 5200,
    449999: 5300,
    459999: 5400,
    469999: 5500,
    479999: 5600,
    489999: 5700,
    499999: 5800,
    509999: 5900,
    519999: 6000,
    529999: 6100,
    539999: 6200,
    549999: 6300,
    559999: 6400,
    569999: 6500,
    579999: 6600,
    589999: 6700,
    599999: 6800,
    609999: 6900,
    619999: 7000,
    629999: 7100,
    639999: 7200,
    649999: 7300,
    659999: 7400,
    669999: 7500,
    679999: 7600,
    689999: 7700,
    699999: 7800,
    709999: 7900,
    719999: 8000,
    729999: 8100,
    739999: 8200,
    749999: 8300,
    759999: 8400,
    769999: 8500,
    779999: 8600,
    789999: 8700,
    799999: 8800,
    809999: 8900,
    819999: 9000,
    829999: 9100,
    839999: 9200,
    849999: 9300,
    859999: 9400,
    869999: 9500,
    879999: 9600,
    889999: 9700,
    899999: 9800,
    909999: 9900,
    919999: 10000,
    929999: 10100,
    939999: 10200,
    949999: 10300,
    959999: 10400,
    969999: 10500,
    979999: 10600,
    989999: 10700,
    999999: 10800
}

# NSSF Deductions percentage
nssf_percentage = 6

def calculate_paye(gross_salary):
    """
    Calculate PAYE (Tax) based on the given gross salary using the provided tax rates.
    """
    taxable_income = gross_salary - 24000
    if taxable_income <= 0:
        return 0
    
    tax_payable = 0
    cumulative_taxable_income = 0
    
    for threshold, rate in tax_rates:
        if taxable_income > threshold:
            tax_payable += (taxable_income - cumulative_taxable_income) * rate / 100
            cumulative_taxable_income = threshold
        else:
            tax_payable += (taxable_income - cumulative_taxable_income) * rate / 100
            break
    
    return tax_payable

def calculate_nhif(basic_salary):
    """
    Calculate NHIF deduction based on the given basic salary using the NHIF table.
    """
    for threshold, amount in nhif_deductions.items():
        if basic_salary <= threshold:
            return amount
    return 10800  # If basic_salary is above the highest threshold in NHIF table, return the highest amount

def calculate_nssf(basic_salary):
    """
    Calculate NSSF deduction based on the given basic salary using a fixed percentage.
    """
    return basic_salary * nssf_percentage / 100

def calculate_net_salary(basic_salary, benefits):
    """
    Calculate net salary based on basic salary and benefits.
    """
    gross_salary = basic_salary + benefits
    paye = calculate_paye(gross_salary)
    nhif = calculate_nhif(basic_salary)
    nssf = calculate_nssf(basic_salary)
    
    total_deductions = paye + nhif + nssf
    net_salary = gross_salary - total_deductions
    
    return gross_salary, paye, nhif, nssf, net_salary

# Main program
if __name__ == "__main__":
    # Input collection
    basic_salary = float(input("Enter basic salary: "))
    benefits = float(input("Enter benefits: "))
    
    # Calculate net salary
    gross_salary, paye, nhif, nssf, net_salary = calculate_net_salary(basic_salary, benefits)
    
    # Print the results
    print(f"\nGross Salary: {gross_salary:.2f} KES")
    print(f"PAYE (Tax): {paye:.2f} KES")
    print(f"NHIF Deductions: {nhif:.2f} KES")
    print(f"NSSF Deductions: {nssf:.2f} KES")
    print(f"\nNet Salary: {net_salary:.2f} KES")
Explanation:
Constants: tax_rates, nhif_deductions, and nssf_percentage are defined based on the provided links.
Functions:
calculate_paye: Computes the PAYE (Tax) based on progressive tax rates.
calculate_nhif: Computes NHIF deductions based on the basic salary using a lookup table.
calculate_nssf: Computes NSSF deductions based on a fixed percentage of the basic salary.
calculate_net_salary: Orchestrates the calculation of gross salary, deductions, and net salary.
Main Program:
Collects inputs for basic salary and benefits.
Calls calculate_net_salary to compute all required values.
Prints out the results formatted to two decimal places for clarity.
This program should give you a good starting point to calculate net salaries accurately based on the inputs provided. Adjustments to constants and tables may be necessary based on updated tax and deduction information from the provided links.




