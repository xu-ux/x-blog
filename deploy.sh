#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
if [ -z "$GITHUB_TOKEN" ]; then
  msg='自行编译 deploy'
  githubUrl=git@github.com:xu-ux/x-blog.git
else
  msg='github actions deploy'
  githubUrl=https://xu-ux:${GITHUB_TOKEN}@github.com/xu-ux/x-blog.git
  git config --global user.name "xu-ux"
  git config --global user.email "270271412@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
