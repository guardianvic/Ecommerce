# 🖥️ Proyecto Admin, Ecommerce Angular + Backend API Laravel + Metronic con Autenticación JWT

Este proyecto es una aplicación web "MultiEcommerce" compuesta por tres módulos:

✅ **Admin**: Panel administrativo basado en Angular 17.3.17 y Metronic.
✅ **Ecommerce**: Sitio de compras en Angular 17.3.17 para los clientes finales.
✅ **API**: Backend Laravel 10.48.28 que provee servicios REST y autenticación JWT.

---

## 📦 Tecnologías Utilizadas

| Tecnología    | Versión                      |
| ------------- | ---------------------------- |
| Angular       | 17.3.17                      |
| Node.js       | 18.16.1                      |
| npm           | 9.5.1                        |
| Laravel       | 10.48.28                     |
| PHP           | >= 8.1                       |
| jwt-auth      | 2.1.1                        |
| Metronic      | Última versión compatible    |
| Base de Datos | MySQL o MariaDB recomendados |

---

## 📁 Estructura del Proyecto

```
/admin       -> Panel de administración Angular + Metronic
/ecommerce   -> Sitio Ecommerce Angular
/api         -> API REST Laravel con Autenticación JWT
```

---

## ⚙️ Requisitos Previos

* Node.js v18.16.1
* npm v9.5.1
* PHP >= 8.1
* Composer
* MySQL o MariaDB
* Acceso a la plantilla Metronic (licencia válida)

---

## 🚀 Instalación y Ejecución

### 🔧 Backend - Laravel API + JWT

```bash
cd api
composer install
cp .env.example .env
```

Configura las variables de entorno en `.env` (Base de Datos, URL, etc.)

```bash
php artisan key:generate
php artisan migrate
php artisan jwt:secret
php artisan serve
```

La API estará disponible en: `http://127.0.0.1:8000`

#### Instalación JWT-Auth

```bash
composer require tymon/jwt-auth
```

Publica la configuración:

```bash
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

Genera la clave secreta JWT:

```bash
php artisan jwt:secret
```

Laravel protegerá las rutas con el middleware `auth:api`. Ejemplo en `routes/api.php`:

```php
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
```

Para autenticación:

* `/api/login` ➜ Obtener token JWT
* `/api/register` ➜ Registrar usuario
* `/api/logout` ➜ Cerrar sesión

---

### 💻 Frontend - Admin (Angular + Metronic)

```bash
cd admin
npm install
ng serve
```

Disponible en: `http://localhost:5000`

### 🛒 Frontend - Ecommerce (Angular)

```bash
cd ecommerce
npm install
ng serve
```

Disponible en: `http://localhost:4200`

---

## 🔑 Conexión con API JWT

Tanto en `/admin/src/environments/environment.ts` como en `/ecommerce/src/environments/environment.ts`:

```ts
export const environment = {
  apiUrl: 'http://127.0.0.1:8000/api'
};
```

Los tokens JWT deben almacenarse de forma segura y enviarse en las solicitudes:

```ts
const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
```

---

## 🛠️ Comandos Útiles

### Angular (Admin y Ecommerce)

* `ng build` ➜ Compilar producción
* `ng serve` ➜ Servidor desarrollo
* `ng test` ➜ Pruebas unitarias

### Laravel

* `php artisan migrate` ➜ Migraciones
* `php artisan db:seed` ➜ Poblar base de datos
* `php artisan serve` ➜ Servidor desarrollo

---

## 📙 Documentación

* [Angular Docs](https://angular.io/docs)
* [Laravel Docs](https://laravel.com/docs)
* [jwt-auth](https://github.com/tymondesigns/jwt-auth)
* [Metronic Template](https://keenthemes.com/metronic)

---

## 💪 Recomendaciones Producción

* Compilar Admin y Ecommerce:

```bash
ng build --configuration production
```

* Usar servidor dedicado (Nginx, Apache)
* Servir el build de Angular desde `/public` en Laravel o en servidor independiente
* Configurar CORS en Laravel correctamente
* Proteger `.env` y claves JWT

---

## 👨‍💻 Autor

Proyecto desarrollado por **\[Victor Alfonso Rojas Larrarte y Leiby Iván Rodríguez Ortega "MultiEcommerce"]**

---


