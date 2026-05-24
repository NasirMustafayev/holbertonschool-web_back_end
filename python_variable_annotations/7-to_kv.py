#!/usr/bin/env python3
'''This module contains a type-annotated function to_kv that takes a string
k and an int v as arguments and returns a tuple.
The first element of the tuple is the string k and
the second element is the square of v.'''
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''Returns a tuple containing the string k and the square of v'''
    return (k, float(v ** 2))
