def arithmetic_arranger(problems, args = False):
    import sys

    num_problems = len(problems)
    result = list()
    arranged_problems = str()


    # Rule1:
    # If there are too many problems supplied to the function.
    # The limit is five, anything more will return: Error: Too many problems.
    if num_problems > 5:
        return ('Error: Too many problems.')

    for problem in problems:
        # Rule2:
        # The appropriate operators the function will accept are addition and subtraction.
        # Multiplication and division will return an error.
        # Other operators not mentioned in this bullet point will not need to be tested.
        # The error returned will be: Error: Operator must be '+' or '-'.
        if ('+' not in problem) and ('-' not in problem):
            return ('Error: Operator must be \'+\' or \'-\'.')

        # Rule3:
        # Each number (operand) should only contain digits.
        # Otherwise, the function will return: Error: Numbers must only contain digits.
        if '+' in problem:
            operator = '+'
            elem_problem = problem.split('+')
        else:
            operator = '-'
            elem_problem = problem.split('-')
        if elem_problem[0].strip().isdigit() and elem_problem[1].strip().isdigit():
            num1 = int(elem_problem[0])
            num2 = int(elem_problem[1])
        else:
            return ('Error: Numbers must only contain digits.')


        # Rule4:
        # Each operand (aka number on each side of the operator) has a max of four digits in width.
        # Otherwise, the error string returned will be:
        # Error: Numbers cannot be more than four digits.
        len1 = len(str(num1))
        len2 = len(str(num2))
        if len1 > 4 or len2 > 4:
            return ('Error: Numbers cannot be more than four digits.')


        # store the result
        width = max(len1,len2) + 2
        if operator == '+':
            result.append([width, str(num1), str(num2), str(num1 + num2), len1, len2, operator])
        else:
            result.append([width, str(num1), str(num2), str(num1 - num2), len1, len2, operator])

    # print out the result

    for i in range(num_problems-1):
        arranged_problems = arranged_problems + result[i][1].rjust(result[i][0], ' ') + ' ' * 4
    arranged_problems = arranged_problems + result[i+1][1].rjust(result[i+1][0], ' ') + '\n'
    for i in range(num_problems - 1):
        arranged_problems = arranged_problems + result[i][6] + result[i][2].rjust(result[i][0] - 1, ' ') + ' ' * 4
    arranged_problems = arranged_problems + result[i+1][6] + result[i+1][2].rjust(result[i+1][0] - 1, ' ') + '\n'

    for i in range(num_problems - 1):
        arranged_problems = arranged_problems + '-' * result[i][0] + ' ' * 4
    arranged_problems = arranged_problems + '-' * result[num_problems-1][0]

    if args == True:
        arranged_problems = arranged_problems + '\n'
        for i in range(num_problems - 1):
            arranged_problems = arranged_problems + result[i][3].rjust(result[i][0], ' ') + ' ' * 4
        arranged_problems = arranged_problems + result[i+1][3].rjust(result[i+1][0], ' ')

    return arranged_problems