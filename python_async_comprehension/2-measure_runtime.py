#!/usr/bin/env python3
'''This module contains a function measure_runtime'''
import time
import asyncio
from typing import Callable
import importlib
async_comprehension = importlib.import_module('1-async_comprehension').async_comprehension


def measure_runtime() -> float:
    '''Measures the total runtime of async_comprehension'''
    start_time = time.time()
    asyncio.run(async_comprehension())
    end_time = time.time()
    return end_time - start_time
