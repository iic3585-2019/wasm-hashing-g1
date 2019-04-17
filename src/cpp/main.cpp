// Copyright 2012 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

#include <math.h>
#include <cstring>
#include <emscripten/emscripten.h>
#include "levenshtein.cpp"

extern "C" {
int EMSCRIPTEN_KEEPALIVE int_sqrt(int x) {
  return sqrt(x);
}

unsigned long EMSCRIPTEN_KEEPALIVE hash(unsigned char *str) {
    unsigned long hash = 5381;
    int c;

    while (c = *str++)
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */

    return hash;
}

int EMSCRIPTEN_KEEPALIVE distance(char *a, char *b) {
    return levenshtein(a, b);
}
}
