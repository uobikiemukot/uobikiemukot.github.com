CC = gcc
CPP = g++
CFLAGS = -march=native -O3 -pipe

DST = bdf2yaft yaftmerge checkwidth yaft2char char2yaft
SRC = *.cpp

all: $(DST)

bdf2yaft: bdf2yaft.cpp
	$(CPP) -o $@ $< $(CFLAGS) $(LDFLAGS)

yaftmerge: yaftmerge.cpp
	$(CPP) -o $@ $< $(CFLAGS) $(LDFLAGS)

checkwidth: checkwidth.cpp
	$(CPP) -o $@ $< $(CFLAGS) $(LDFLAGS)

yaft2char: yaft2char.cpp
	$(CPP) -o $@ $< $(CFLAGS) $(LDFLAGS)

char2yaft: char2yaft.cpp
	$(CPP) -o $@ $< $(CFLAGS) $(LDFLAGS)

clean:
	rm -f $(DST)
