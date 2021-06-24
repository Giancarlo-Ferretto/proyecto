# Proyecto

## Instalación

```
npm install 
```

## Iniciar API

```
npm start
```

Modo desarrollador
```
npm run dev
```

## Variables de entorno
Se debe crear un archivo .env en el directorio principal del proyecto que contenga las siguientes variables de entorno:
```
DB_HOST=?
DB_USER=?
DB_PASSWORD=?
DB_DATABASE=?
DB_PORT=?
API_KEY=mi_api_key
```

## Rutas
- POST auth/signin
- POST auth/signup
- GET auth/profile [SEGURO]

- POST users/ [SEGURO, ADMIN]
- GET users/ [SEGURO, ADMIN]
- GET users/:id [SEGURO, ADMIN]
- PUT users/:id [SEGURO, ADMIN]
- DELETE users/:id [SEGURO, ADMIN]

- POST tickets/ [SEGURO]
- GET tickets/ [SEGURO, ADMIN]
- GET tickets/:id [SEGURO]
- GET tickets/:id/user [SEGURO]
- GET tickets/:id/user/:status/status [SEGURO]
- PUT tickets/:id [SEGURO, ADMIN]
- DELETE tickets/:id [SEGURO, ADMIN]

- POST ticketsreply/ [SEGURO, ADMIN]
- GET ticketsreply/ [SEGURO, ADMIN]
- GET ticketsreply/:id [SEGURO]
- GET ticketsreply/:id/id [SEGURO]
- PUT ticketsreply/:id [SEGURO, ADMIN]
- DELETE ticketsreply/:id [SEGURO, ADMIN]

- GET regiones/
- GET regiones/:id/comunas

