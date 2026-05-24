#!/usr/bin/env python3
'''This module contains a type-annotated function element_length
that takes a list of strings as argument and returns a list of tuples,
where each tuple contains a string from the input list and its length.'''
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    '''Returns a list of tuples, where each tuple contains
    a string from the input list and its length'''
    return [(i, len(i)) for i in lst]
