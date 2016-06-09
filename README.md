# access-control-system

## Installation
### Boost library (experimental)
For installation use
```{r, engine='bash', count_lines}
$ sudo apt-get install libboost-all-dev
$ sudo apt-get install aptitude
$ aptitude search boost
```
and compile with
```{r, engine='bash', count_lines}
$ g++ -L/usr/incluce/boost/ -lboost_system -pthread -o boostserver boostserver.cpp -std=c++11
```
Test with
```{r, engine='bash', count_lines}
$ ./boostserver
```

### touchatag reader
For touchatag reader you need to have this library `libnfc`.
#### libnfc
We are using `libnfc` in version 1.7.1. For installation just follow these steps. For more information just check out their [page](http://nfc-tools.org/).

First make sure you have required dependencies
```{r, engine='bash', count_lines}
$ sudo apt-get install libusb-dev
```

Then download and extract `libnfc` archive
```{r, engine='bash', count_lines}
$ git clone https://github.com/nfc-tools/libnfc.git
$ cd libnfc
$ git checkout libnfc-1.7.1
$ git clean -d -f -x
$ # rm ../libnfc*.deb #not mandatory
$ git remote|grep -q anonscm||git remote add anonscm git://anonscm.debian.org/collab-maint/libnfc.git
$ git fetch anonscm
$ git checkout remotes/anonscm/master debian
$ git reset
$ dpkg-buildpackage -uc -us -b
```

Now make sure you have required run-time dependencies
```{r, engine='bash', count_lines}
$ sudo apt-get install libusb-0.1-4
```

Install `libnfc`
```{r, engine='bash', count_lines}
$ sudo dpkg -i ../libnfc*.deb
```

Now plug your NFC device and test it via command (you can find more commands typing `nfc-`<kbd>TAB</kbd>)
```{r, engine='bash', count_lines}
$ nfc-list
$ nfc-poll
```
The first command just lists all devices but the second can read your tag via device.

## Problems
#### Port is in use
Check running procceses with
```{r, engine='bash', count_lines}
$ sudo netstat -lptu
```
and then just with
```{r, engine='bash', count_lines}
$ kill PID
```
