#!/usr/bin/env python3
'''Write a type-annotated function sum_mixed_list that takes a list of integers
and floats and returns their sum as a float.'''


def sum_mixed_list(mxd_lst: list[int | float]) -> float:
    '''Returns the sum of a list of integers and floats'''
    return sum(mxd_lst)
