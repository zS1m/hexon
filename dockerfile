FROM node:lts-slim
LABEL maintainer=zS1m<chaosspades@gmail.com>

ENV HEXO_EDIT_PORT=5777

RUN \
  sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get install git -y && \
  npm install -g hexo-cli pnpm

RUN \
  pnpm --version; \
  pnpm config set registry https://registry.npm.taobao.org/

WORKDIR /hexo-online
VOLUME /hexo-online

EXPOSE ${HEXO_EDIT_PORT}

COPY . /hexo-online/hexon

CMD \
  if [ "$(ls -A /hexo-online/hexon)" ]; then \
    echo "***** Hexon ready *****" && \
    cd hexon/ ; \
  else \
    echo "***** Install Hexon *****" && \
    hexo init && \
    git clone https://github.com/gethexon/hexon.git hexon && \
    cd hexon/ ; \
  fi; \
  pnpm install;
