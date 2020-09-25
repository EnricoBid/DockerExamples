# ESEMPIO 1

Esempio Docker di un http server in node js. 

Il server espone un servizio di navigazione dei file all'interno di subdirectory che l'utente puo' visualizzare su broswer inserendo il path del file nella richiesta GET.

Il server ridireziona il traffico sull'apertura di un file di default. 

## How To Run

` docker run -e "IMAGE_PORT=1234" -p 1234:8080 bid/webserver `


