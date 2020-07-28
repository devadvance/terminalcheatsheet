FROM ubuntu:latest

RUN apt update

RUN apt install -y nano vim curl iputils-ping

RUN echo "PS1=\"user@computer\$ \"" >> /root/.bashrc

RUN echo "PROMPT_COMMAND='echo -en \"\033]0;Terminal\a\"'" >> /root/.bashrc

RUN echo "-w \"\\\n\"" >> /root/.curlrc

WORKDIR /home/user/examples

ADD examples /home/user/examples