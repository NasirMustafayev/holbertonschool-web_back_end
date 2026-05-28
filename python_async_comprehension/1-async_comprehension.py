#!/usr/bin/env python3
'''This module contains a function async_comprehension'''
import asyncio
from typing import List
import importlib
async_generator = importlib.import_module('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    '''Collects 10 random numbers using an async comprehensing over
    async_generator'''
    return [i async for i in async_generator()]
