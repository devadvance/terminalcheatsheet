FROM ubuntu:latest

RUN apt update

RUN apt install -y nano vim

RUN echo "PS1=\"user@computer\$ \"" >> /root/.bashrc

RUN echo "PROMPT_COMMAND='echo -en \"\033]0;Terminal\a\"'" >> /root/.bashrc

WORKDIR /home/user/examples

ADD examples /home/user/examples