#!/usr/bin/env python3
'''This module contains an async function wait_n'''
import asyncio
import importlib
from typing import List
wait_random = importlib.import_module('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    '''Returns a list of delays'''
    tasks = []
    for i in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        tasks.append(task)
    return await asyncio.gather(*tasks)
