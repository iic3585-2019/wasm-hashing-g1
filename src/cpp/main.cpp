// Copyright 2012 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

#include <math.h>
#include <iostream>
#include "karatsuba.cpp"

using namespace std;

extern "C" {
int int_sqrt(int x) {
  return sqrt(x);
}

unsigned long
hash(unsigned char *str)
{
    unsigned long hash = 5381;
    int c;

    while (c = *str++)
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */

    return hash;
}

int mult(int u, int v) {
  return multiplica(u, v);
}

}
