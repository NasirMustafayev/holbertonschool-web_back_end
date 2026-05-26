#!/usr/bin/env python3
'''This module contains a function task_wait_random'''
import asyncio
import importlib
wait_random = importlib.import_module('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int):
    '''Returns an asyncio.Task'''
    return asyncio.create_task(wait_random(max_delay))
