#!/bin/bash

#Não fazer alterações a este ficheiro. Fazer "sudo cp /home/operador/brandiB/brandiB_repo_update.sh /home/operador/brandiB_repo_update.sh"
#Necessário fornecer permissões ao script exemplo: chmod 777 brandiB_repo_update.sh
#./brandiB_repo_update.sh

sudo rm -R /home/operador/brandiB/
cd
mkdir brandiB
sudo git clone https://github.com/iptomar/Brandi-2018-2019-Turma-B  /home/operador/brandiB
cd brandiB/Frontend/notes-app-client/
sudo npm install --save react-mdl
cd
./brandiB_update.sh