# Esempio 02

Creare un ambiente sviluppo con:
	- server gitlab ce
	- server jupyter notebooks lab con git extension attivato

connettendosi dal jupyter notebooks e' possibile fare commit e clone sul server gitlab conteinerizzato

## Setup

build delle immagini

`$ docker-compose build`


## Run

run dei conteiner

`$ docker-compose up`

## Setup delle SSH-keys del container jupyter

Connettersi sul container git-jupyter e aggiungere la rsa.pub key su gitlab

`$ docker ps `
`$ docker exec -it <container_id> bash`

Sul container git-jupyter copiare la rsa.pub su gitlab
`$ cat .ssh/rsa.pub`

Su gitlab fare l'accesso con l'utente con cui si lavora su git-jupyter.
Andare nella sezione Settings->Profile->SSH Keys incollare la rsa.pub

riconnettersi al conteiner git-jupiter e provare questo comando:

`$ ssh -Tv git@172.19.0.3`

Se viene stampato un `Welcome` la configurazione e' completa.

### References

https://gitlab.com/gitlab-org/gitlab-foss/-/issues/18371
https://gitlab.com/gitlab-org/gitlab-foss/-/issues/26022
https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent