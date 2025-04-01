L'obiettivo dell'esercizio è la creazione di una prima API di post per il nostro blog andando ad introdurre e approfondire concetti come:

- il ruolo del controller;
- le operazioni CRUD e le varie rotte;
- i middleware.

La durata dell'esercizio prevista è di tre giorni in cui ogni giorno verrà implementata una sezione del progetto in questione.

# Express Blog API CRUD 

## Day one

Il primo giorno abbiamo introdotto il tema dei **controller**, ovvero file al cui interno possiamo inserire le nostre funzioni deputate allo svolgimento del codice che vogliamo far eseguire alle diverse rotte. 
Come prima cosa perciò ho creato una cartella "controllers" all'interno della quale ho poi aggiunto il file per l'inserimento delle funzioni in cui ci sarà la parte logica delle operazioni CRUD (*Index, Show, Store, Update, Destroy*).
In questo modo il router avrà il compito di conservare le rotte e smistare le richieste, mentre il controller si occuperà di preparare la risposta e inviarla al client. 

Il focus del primo giorno è l'inserimento della parte logica all'interno delle rotte Index, Show e Destroy:

- **Index**: con il verbo http *get*, restituirà la lista dei post (/posts) in formato JSON. Se viene inserita la query string andando a specificare un determinato tag, possiamo filtrare i post in base al tag inserito;
- **Show**: sempre con il verbo http *get*, restituirà stavolta un singolo post grazie all'aggiunta del parametro dinamico (/posts/:id). Nel caso in cui il post non venisse trovato, verrà restituito lo status 404 (Not Found);
- **Destroy**: con il verbo http *delete*, verrà eliminato un singolo post dalla lista temporaneamente, ovvero finchè non verrà riavviato il server. In questo caso lo status sarà 204 per avvertire il client della cancellazione avvenuta con successo e 404 se il post sarà inesistente.

# Express Blog API CRUD 

## Day two

Il secondo giorno abbiamo introdotto il concetto di **Request body**, ovvero l'inserimento dei dati di un nuovo elemento tramite il body della richiesta HTTP e l'implementazione delle rotte *Store* e *Update*.
Tutto questo lo si può fare tramite Postman che permette di inserire i dati del nuovo post in formato JSON.

Il focus del secondo giorno è quindi l'inserimento della parte logica all'interno delle rotte Store, Update e Modify: 

- **Store**: con il verbo http *post*, restituirà il nuovo elemento creato che verrà aggiunto alla lista dei post (/posts) in formato JSON. Per fare ciò verrà inserita come corpo della nostra request un oggetto che rappresenta un nuovo post;
- **Update**: con il verbo http *put*, verrà effettuata una modifica integrale di un determinato post (/posts/:id). Nel caso in cui il post non venisse trovato, verrà restituito lo status 404 (Not Found);
- **Modify**: con il verbo http *patch*, verrà effettuata una modifica parziale di un determinato post (/posts/:id). Nel caso in cui il post non venisse trovato, verrà restituito lo status 404 (Not Found);

Tutto ciò è possibile grazie all'impostazione del body parser ovvero delle funzioni che permettono al server di decodificare il request body.

# Express Blog Middlewares

## Day Three

Il terzo giorno abbiamo introdotto il concetto di **Middlewares**: funzioni che vengono eseguite prima o dopo dell'azione associata ad una rotta.

In questo caso sono stati inseriti due middleware:
- un middleware per la gestione delle rotte inesistenti che restiuirà uno status 404 e un messaggio in formato JSON se la rotta è inesistente;
- un middleware per la gestione degli errori che restituirà uno status 500 e un messaggio in formato JSON se ci sono errori all'interno dell'applicazione.

In entrambi i casi la registrazione è avvenuta globalmente in modo che i middleware vengano chiamati per ogni rotta dell'applicazione.
