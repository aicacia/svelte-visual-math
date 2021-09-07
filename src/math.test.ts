import tape from "tape";
import { snappedRange } from "./math";

tape("snappedRange", (assert: tape.Test) => {
  assert.deepEqual(snappedRange(0, 15, 5), [0, 5, 10, 15]);
  assert.end();
});
