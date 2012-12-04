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
	./mkfont table/alias fonts/milkjf_8x16r.bdf fonts/milkjf_8x16.bdf fonts/milkjf_k16.bdf > glyph.h
	$(CC) -o $@ $< $(CFLAGS) $(LDFLAGS)

install:
	cat info/yaft.cap >> $(TERMCAP)
	cap_mkdb $(TERMCAP)
	install -Dm755 ./$(DST) $(PREFIX)/bin/$(DST)
	install -Dm755 ./yaft_wall $(PREFIX)/bin/yaft_wall

uninstall:
	rm -f $(PREFIX)/bin/$(DST)
	rm -f $(PREFIX)/bin/yaft_wall

clean:
	rm -f $(DST) mkfont glyph.h
