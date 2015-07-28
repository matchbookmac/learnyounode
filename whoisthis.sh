#!/bin/sh
# whoisthis.sh

name="  ~ Ian C. MacDonald"

info=$1
case $info in
  -H|--handle)
    r="@matchbookmac"
    ;;
  -e|--email)
    r="ian@iancmacdonald.com"
    ;;
  -p|phone)
    r="(404) 281-3895"
    ;;
  -w|web)
    r="iancmacdonald.com"
    ;;
  -g|github)
    r="github.com/matchbookmac"
    ;;
esac

printf "\n$name: $r\n\n"
