#!/usr/bin/env sh
set -e
yarn docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:heycn/feeling-ui-website.git
git push -u origin main
cd -