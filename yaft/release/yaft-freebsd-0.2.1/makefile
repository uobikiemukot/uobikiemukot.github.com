SHELL = /bin/bash
CC = gcc
CFLAGS += -std=c99 -pedantic -Wall
LDFLAGS +=

HDR = *.h
DST = yaft
SRC = freebsd/yaft.c
DESTDIR =
PREFIX = $(DESTDIR)/usr
TERMCAP = /usr/share/misc/termcap

all: $(DST)

$(DST): mkfont

mkfont: tools/mkfont.c tools/font.h tools/bdf.h
	$(CC) -o $@ $< $(CFLAGS) $(LDFLAGS)

$(DST): $(SRC) $(HDR)
	./mkfont table/alias fonts/{milkjf_8x16r.bdf,milkjf_8x16.bdf,milkjf_k16.bdf} > glyph.h
	$(CC) -o $@ $< $(CFLAGS) $(LDFLAGS)

install:
	cat info/yaft.cap >> $(TERMCAP)
	cap_mkdb $(TERMCAP)
	install -Dm755 {./,$(PREFIX)/bin/}yaft
	install -Dm755 {./,$(PREFIX)/bin/}yaft_wall

uninstall:
	rm -rf $(PREFIX)/bin/yaft
	rm -rf $(PREFIX)/bin/yaft_wall

clean:
	rm -f $(DST) mkfont glyph.h
