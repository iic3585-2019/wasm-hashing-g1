FROM node:11.13.0

ENV APP_HOME /wasm-asd-g1
ENV YARN_CACHE_FOLDER /yarn

WORKDIR $APP_HOME
RUN mkdir -p $YARN_CACHE_FOLDER
RUN mkdir -p $APP_HOME

RUN apt-get update -qq && apt-get install -y git libsodium-dev
RUN yarn config set cache-folder $YARN_CACHE_FOLDER

ADD package.json yarn.lock $APP_HOME/

RUN git clone https://github.com/emscripten-core/emsdk.git /emsdk
RUN cd /emsdk && git pull && ./emsdk install latest && ./emsdk activate latest
RUN /bin/bash -c "source /emsdk/emsdk_env.sh"

ENV PATH=":/emsdk:/emsdk/clang/e1.38.30_64bit:/emsdk/node/8.9.1_64bit/bin:/emsdk/emscripten/1.38.30:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:${PATH}"

ADD . $APP_HOME
