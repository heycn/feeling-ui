#!/usr/bin/env sh
set -e
yarn docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git remote add origin git@gitee.com:heycn/feeling-ui.git
git push -f -u origin "master"
cd -