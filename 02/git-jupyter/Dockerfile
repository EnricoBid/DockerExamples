# Start from a core stack version
FROM jupyter/base-notebook:latest

USER root
RUN apt update && \
	apt install --yes git

USER $NB_USER
COPY --chown=$NB_USER:$NB_GID .ssh .ssh

RUN jupyter labextension install @jupyterlab/git && \
	pip install --upgrade jupyterlab-git && \
	jupyter serverextension enable --py jupyterlab_git && \
	eval $(ssh-agent) && \
	ssh-keygen -t rsa -N '' -f ~/.ssh/id_rsa && \
    ssh-add ~/.ssh/id_rsa 
   
WORKDIR ./work

# expose the port
EXPOSE 8888