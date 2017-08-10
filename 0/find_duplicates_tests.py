import unittest
from find_duplicates import find_duplicates
from random import shuffle


class FindDuplicatesTests(unittest.TestCase):
    """ Run tests on find_duplicates().
        Useage: $ python find_duplicates_tests.py """


    def test_specification(self):

        n = 1000000
        duplicate = 3578 # choose any from 1 to n     
        input_list = list(range(1, n + 1)) # as per spec        
        input_list.append(duplicate)
        shuffle(input_list)

        expected_return = []
        expected_return.append(duplicate)        

        self.assertEqual(find_duplicates(input_list), expected_return)


    def test_multiple_duplicates(self):

        input_list = [5,4,4,3,2,1,2]
        expected_return = [2, 4]
        self.assertEqual(find_duplicates(input_list), expected_return)


    def test_chars(self):

        input_list = ['a', 'b', 'c', 'c', 'd']
        expected_return = ['c']
        self.assertEqual(find_duplicates(input_list), expected_return)


    def test_no_duplicates(self):

        no_duplicate_list = [5,4,3,2,1,0]
        expected_return = []        
        self.assertEqual(find_duplicates(no_duplicate_list), expected_return)  


    def test_empty_input(self):

        empty_list = []
        expected_return = []
        self.assertEqual(find_duplicates(empty_list), expected_return)


    def test_non_list(self):

        non_list = 'cow'
        with self.assertRaises(TypeError):
            find_duplicates(non_list) 



if __name__ == '__main__':
    unittest.main()
