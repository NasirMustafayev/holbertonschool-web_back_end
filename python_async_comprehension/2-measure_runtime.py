#!/usr/bin/env python3
'''This module contains a coroutine measure_runtime'''
import time
import asyncio
import importlib
async_comprehension = importlib.import_module('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''Measures the total runtime of async_comprehension running 4 times in parallel'''
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.time()
    return end_time - start_time
