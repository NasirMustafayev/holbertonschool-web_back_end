#!/usr/bin/env python3
'''This module contains an async function measure_runtime'''
import time
import asyncio
import importlib
wait_n = importlib.import_module(
    '1-concurrent_coroutines'
).wait_n


async def measure_time(n: int, max_delay: int) -> float:
    '''Measures the total runtime of wait_n(n)'''
    start_time = time.time()
    await asyncio.gather(*[wait_n(i, max_delay) for i in range(n)])
    end_time = time.time()
    return end_time - start_time
