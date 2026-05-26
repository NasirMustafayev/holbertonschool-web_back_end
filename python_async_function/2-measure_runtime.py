#!/usr/bin/env python3
'''This module contains a function measure_time'''
import time
import asyncio
import importlib
wait_n = importlib.import_module(
    '1-concurrent_coroutines'
).wait_n


def measure_time(n: int, max_delay: int) -> float:
    '''Measures average execution time per coroutine'''
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()

    return (end_time - start_time) / n
