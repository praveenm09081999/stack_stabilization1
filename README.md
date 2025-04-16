# Stack Stabilization (Chapter 1)

## Problem Description

There's a stack of `N` inflatable discs, with the i-th disc from the top having an initial radius of `R[i]` inches. The stack is considered unstable if it includes at least one disc whose radius is larger than or equal to that of the disc directly under it.

To stabilize the stack, you can repeatedly choose any disc and deflate it to have any strictly smaller positive integer radius. Determine the minimum number of discs that need to be deflated to make the stack stable, or return `-1` if impossible.

### Constraints

- `1 ≤ N ≤ 50` (Number of discs)
- `1 ≤ R[i] ≤ 1,000,000,000` (Disc radii)
- Deflated radii must be positive integers
