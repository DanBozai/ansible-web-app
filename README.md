# Web application deployment with Ansible 
Build and deploy express, react source files to a linux server with systemd and configure nginx load balancer.
## Stack:
- Express
- React
- Nginx
  
![project](https://github.com/DanBozai/ansible-web-app/assets/123987852/fb1c75da-9499-44ff-855a-154373952984)


### main_playbook.yml Key Features:
1. Install nodejs, npm, authbind to the servers specified in [frontend_servers], [backend_servers];
2. Build and deploy Express app for the [backend_servers], utilizing systemd;
3. Configure Nginx backend load blancer;
4. Build and deploy React app for the [frontend_servers], utilizing systemd;
5. Configure Nginx frontend load blancer.

#### Additional information
- for the step 2 and 4 Ansible create an unprivileged user "/bin/false" and run the server application with authbind (for more detailed information about authbind, check [this link](https://manpages.ubuntu.com/manpages/xenial/man1/authbind.1.html) and [wiki](https://en.wikipedia.org/wiki/Authbind)).

Usage:
1. install Ansible [guide installation](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html);
2. clone repo;
3. follow inventoryExamle.yml description comments to setup the variables;
5. ```run ansible -i inventoryExample.yml -m ping all ``` to ensure all the servers are up and a ssh connection can be established;
6. ```run ansible-playbook -i inventoryExample.yml main_playbook.yml -K ``` -K option will ask the user to introduce the sudo password of the servers.
