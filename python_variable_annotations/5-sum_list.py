#!/usr/bin/env python3
'''Write a type-annotated function sum_list that takes a list of floats as argument
and returns the sum of the floats as a float.'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''Returns the sum of a list of floats'''
    return sum(input_list)
