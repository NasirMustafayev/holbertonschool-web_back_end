#!/usr/bin/env python3
'''This module contains a function task_wait_n'''
import asyncio
import importlib
from typing import List
task_wait_random = importlib.import_module('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    '''Returns a list of all the delays (float values)'''
    tasks = []
    for i in range(n):
        tasks.append(task_wait_random(max_delay))
    delays = await asyncio.gather(*tasks)

    return sorted(delays)
