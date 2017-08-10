def find_duplicates(input_list):

    """ Take a list of values, return a list of any duplicate values.
        Return empty list if no duplicates. """


    if type(input_list) is not list:
        raise TypeError('Input parameter must be of type list')

    # first sort the list to avoid O(n^2) time complexity
    sorted_list = sorted(input_list)

    duplicates = []
    length = len(sorted_list)

    # find duplicates
    for index, value in enumerate(sorted_list):

        # avoid out-of-range error at end of list (could avoid this in a simple for-loop but python doesn't have them)
        if (index == length - 1):
            break

        if sorted_list[index] == sorted_list[index + 1]:
            duplicates.append(sorted_list[index])

    return duplicates
