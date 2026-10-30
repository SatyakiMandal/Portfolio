#!/usr/bin/env bash
# QA screenshots of three pages at 360, 768 and 1440 px into qa/. Needs the site running on :3000.
CH="/c/Program Files/Google/Chrome/Application/chrome.exe"
PROF="C:/Users/USER/AppData/Local/Temp/qaprof"
OUT="$(cd "$(dirname "$0")/.." && pwd -W)/qa"
mkdir -p "$OUT"
for page in "home:/" "case:/work/tata-steel" "competition:/competitions/tenet-2026"; do
  name=${page%%:*}; path=${page#*:}
  for w in 360 768 1440; do
    timeout 60 "$CH" --headless=new --user-data-dir="$PROF" --hide-scrollbars --virtual-time-budget=3000 --force-prefers-reduced-motion ${EXTRA} \
      --window-size=$w,${H:-6000} --screenshot="$OUT/$name-$w${SUFFIX}.png" "http://localhost:3000$path" >/dev/null 2>&1
  done
done
ls "$OUT"
