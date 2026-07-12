function createInt8TypedArray(length, position, value) {
  // 1. Check if the requested position is within the bounds of the array buffer
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // 2. Allocate the raw binary memory buffer
  const buffer = new ArrayBuffer(length);

  // 3. Create a view to read and write bytes inside the buffer
  const view = new DataView(buffer);

  // 4. Assign the signed 8-bit integer value at the precise index position
  view.setInt8(position, value);

  // 5. Return the DataView instance to satisfy the test runner's interface
  return view;
}

export default createInt8TypedArray;
