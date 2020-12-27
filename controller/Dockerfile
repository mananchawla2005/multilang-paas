FROM ubuntu:18.04
RUN groupadd --gid 5000 newuser \
    && useradd --home-dir /home/newuser --create-home --uid 5000 \
        --gid 5000 --shell /bin/sh --skel /dev/null newuser

RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install wget -y
RUN apt-get install sudo -y
RUN apt install software-properties-common -y
RUN apt-get install unzip -y
RUN apt-get install build-essential -y
RUN apt install openssh-server -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN sudo apt -y install nodejs
RUN npm i -g yarn
RUN sudo apt-get install vim -y
RUN apt install default-jre -y
RUN apt install git -y
USER newuser
