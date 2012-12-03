SHELL = /bin/bash
CC = gcc
CFLAGS += -std=c99 -pedantic -Wall -I/usr/X11R6/include
LDFLAGS += -lX11 -L/usr/X11R6/lib

HDR = *.h
DST = yaftx
SRC = x/yaft.c
DESTDIR =
PREFIX = $(DESTDIR)/usr

all: $(DST)

$(DST): mkfont

mkfont: tools/mkfont.c tools/font.h tools/bdf.h
	$(CC) -o $@ $< $(CFLAGS) $(LDFLAGS)

$(DST): $(SRC) $(HDR)
	./mkfont table/alias fonts/{milkjf_8x16r.bdf,milkjf_8x16.bdf,milkjf_k16.bdf} > glyph.h
	$(CC) -o $@ $< $(CFLAGS) $(LDFLAGS)

install:
	mkdir -p $(PREFIX)/share/terminfo
	tic -o $(PREFIX)/share/terminfo info/yaft.src
	install -Dm755 {./,$(PREFIX)/bin/}yaftx
	install -Dm755 {./,$(PREFIX)/bin/}yaft_wall

uninstall:
	rm -rf $(PREFIX)/bin/yaftx
	rm -rf $(PREFIX)/bin/yaft_wall

clean:
	rm -f $(DST) mkfont glyph.h
