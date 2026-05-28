# Los Unicos FC — Plan Estructural MVP
### Sitio Web Oficial · Primera Version · Documento de Arquitectura de Producto

---

## 1. OBJETIVO DEL MVP

### Problema que resuelve
- Los aficionados del club no tienen un punto oficial centralizado donde consultar informacion actualizada del equipo (noticias, partidos, plantilla).
- El club carece de presencia digital profesional que proyecte identidad de marca y genere comunidad.
- La gestion de contenidos se realiza de forma dispersa (redes sociales, grupos de mensajeria) sin control editorial ni trazabilidad.

### Valor entregado a los aficionados
- Acceso inmediato a noticias, resultados y calendario de partidos desde cualquier dispositivo.
- Conocimiento oficial de la plantilla (jugadores, posiciones, dorsal).
- Canal de contacto directo con el club.
- Experiencia visual moderna que refuerza la identidad del equipo.

### Funcionalidades minimas para salir a produccion
- Publicacion y visualizacion de noticias.
- Directorio de jugadores con informacion basica.
- Calendario de partidos con resultados.
- Galeria de fotos.
- Formulario de contacto.
- Panel de administracion basico (CRUD de contenidos).
- Autenticacion para roles administrativos.

---

## 2. ALCANCE DEL MVP

### Entra en la primera version
- Sitio web publico informativo (lectura para visitantes).
- Modulo de noticias con editor basico.
- Directorio de jugadores de la plantilla activa.
- Calendario de partidos (proximos y pasados con resultado).
- Galeria de imagenes por album.
- Pagina de contacto con formulario funcional.
- Panel de administracion protegido por autenticacion.
- Gestion de roles: Administrador y Editor.
- Diseno responsive mobile-first.
- SEO basico (metaetiquetas, Open Graph).
- Subida de imagenes a almacenamiento en la nube.

### Queda fuera del MVP (futuras versiones)
- Tienda oficial / e-commerce de merchandising.
- Venta o reserva de entradas.
- Sistema de membresias o suscripciones de pago.
- Streaming en vivo de partidos.
- Estadisticas avanzadas de jugadores.
- Aplicacion movil nativa.
- Foro de aficionados / comunidad.
- Integracion con redes sociales (publicacion automatica).
- Sistema de notificaciones push.
- Multiidioma.
- Portal de prensa acreditada.

---

## 3. SITEMAP SIMPLIFICADO DEL MVP

```
losUnicosFC.com/
│
├── / (Inicio)
│   ├── Hero / Banner principal
│   ├── Ultimas noticias (3-5 cards)
│   ├── Proximo partido
│   └── Resultados recientes
│
├── /noticias
│   ├── /noticias          → Listado paginado
│   └── /noticias/:slug    → Detalle de noticia
│
├── /plantilla
│   ├── /plantilla         → Listado por posicion
│   └── /plantilla/:id     → Perfil del jugador
│
├── /partidos
│   ├── /partidos          → Vista unificada
│   ├── /partidos/proximos → Proximos encuentros
│   └── /partidos/resultados → Historial
│
├── /galeria
│   ├── /galeria           → Listado de albumes
│   └── /galeria/:album    → Imagenes del album
│
├── /contacto
│   └── Formulario + datos institucionales
│
└── /admin (requiere autenticacion)
    ├── /admin/login
    ├── /admin/dashboard
    ├── /admin/noticias
    ├── /admin/jugadores
    ├── /admin/partidos
    ├── /admin/galeria
    └── /admin/usuarios    (solo Administrador)
```

---

## 4. FUNCIONALIDADES MINIMAS VIABLES

### 4.1 Gestion de Noticias
- Crear, editar, eliminar y publicar/despublicar noticias.
- Campos: titulo, slug auto-generado, cuerpo (editor de texto enriquecido basico), imagen destacada, categoria, fecha de publicacion, estado (borrador / publicado).
- Listado paginado en el panel con filtro por estado.
- Vista de detalle publica con metaetiquetas para SEO.

### 4.2 Gestion de Jugadores
- CRUD de jugadores de la plantilla.
- Campos: nombre completo, dorsal, posicion, nacionalidad, fecha de nacimiento, foto de perfil, estado (activo / inactivo).
- Agrupacion publica por posicion (Porteros, Defensas, Centrocampistas, Delanteros).
- Perfil publico basico del jugador.

### 4.3 Gestion de Partidos
- CRUD de partidos (local y visitante).
- Campos: equipo rival, fecha y hora, sede, competicion, tipo (local / visitante), resultado opcional, estado (programado / finalizado / cancelado).
- Vista publica separada entre proximos partidos y resultados historicos.
- Resaltado del proximo partido en la pagina de inicio.

### 4.4 Gestion Multimedia (Galeria)
- Creacion y eliminacion de albumes con nombre y descripcion.
- Subida multiple de imagenes por album.
- Almacenamiento en cloud storage (Cloudinary).
- Visualizacion publica en formato grid con lightbox basico.

### 4.5 Panel Administrativo
- Autenticacion con JWT (email + contrasena).
- Dashboard con resumen de contenidos (conteos por entidad).
- Acceso segmentado por rol.
- Cierre de sesion y expiracion de token.
- Proteccion de rutas privadas.

---

## 5. ROLES DE USUARIO

| Rol           | Capacidades                                                                                     |
|---------------|-------------------------------------------------------------------------------------------------|
| Administrador | Acceso total: CRUD de todas las entidades, gestion de usuarios, cambio de roles.               |
| Editor        | Crear y editar noticias, partidos, jugadores y galeria. No puede gestionar usuarios ni eliminar registros criticos. |
| Visitante     | Solo lectura del sitio publico. Puede enviar formulario de contacto.                           |

---

## 6. ARQUITECTURA TECNOLOGICA RECOMENDADA

### Frontend
- **Framework:** React 18+ con Vite
- **Estilo:** Tailwind CSS
- **Enrutamiento:** React Router v6
- **Estado y datos remotos:** TanStack Query
- **Formularios:** React Hook Form + Zod
- **Editor de texto:** TipTap
- **Galeria / Lightbox:** yet-another-react-lightbox

### Backend
- **Framework:** NestJS (TypeScript, modular)
- **Patron:** REST API con modulos por dominio
- **Validacion:** class-validator + class-transformer (DTOs)
- **ORM:** Prisma
- **Autenticacion:** Passport.js + JWT

### Base de Datos
- **Motor:** PostgreSQL
- **Hosting BD:** Railway o Supabase (free tier)

### Hosting
- **Frontend:** Vercel (CDN global, deploy automatico desde Git)
- **Backend:** Render.com o Railway

### Autenticacion
- JWT en httpOnly cookie
- Refresh token con rotacion basica
- Guards de NestJS por rol en cada endpoint protegido

### Almacenamiento Multimedia
- **Proveedor:** Cloudinary (free tier: 25 GB, optimizacion WebP automatica)
- **Alternativa:** Supabase Storage

### Envio de Correo
- **Proveedor:** Resend o Brevo (free tier suficiente para MVP)

---

## 7. ARQUITECTURA DEL PROYECTO

### 7.1 Estructura de Carpetas — Frontend (React/Vite)

```
frontend/
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx
│   ├── features/
│   │   ├── noticias/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── types.ts
│   │   ├── jugadores/
│   │   ├── partidos/
│   │   ├── galeria/
│   │   └── contacto/
│   ├── admin/
│   │   ├── components/
│   │   ├── pages/
│   │   └── guards/
│   ├── shared/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── lib/
│   │   └── utils/
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

### 7.2 Estructura de Carpetas — Backend (NestJS)

```
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── strategies/
│   │   ├── guards/
│   │   └── decorators/
│   ├── users/
│   ├── noticias/
│   │   ├── noticias.module.ts
│   │   ├── noticias.controller.ts
│   │   ├── noticias.service.ts
│   │   └── dto/
│   ├── jugadores/
│   ├── partidos/
│   ├── galeria/
│   ├── contacto/
│   ├── media/
│   └── common/
│       ├── filters/
│       ├── interceptors/
│       ├── pipes/
│       └── pagination/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
└── tsconfig.json
```

### 7.3 Patrones clave — Frontend
- Feature-Based Architecture: cada dominio es un modulo autocontenido.
- Layouts diferenciados: PublicLayout y AdminLayout.
- Proteccion de rutas: ProtectedRoute + RoleGuard.
- Estado de servidor: TanStack Query (sin duplicacion en estado global).
- Estado de UI: useState local; Zustand solo si hay estado global complejo compartido.

### 7.4 Patrones clave — Backend
- Modulo por dominio con inyeccion de dependencias nativa de NestJS.
- Respuesta estandarizada: interceptor global { data, message, statusCode }.
- RBAC por decoradores: @Roles(Role.ADMIN) evaluado por RolesGuard.
- DTOs con validacion fuerte en todos los inputs.
- HttpExceptionFilter global para errores consistentes.

### 7.5 APIs REST — Endpoints

#### Auth
| Metodo | Endpoint     | Descripcion                          |
|--------|--------------|--------------------------------------|
| POST   | /auth/login  | Login con email + password, JWT      |
| POST   | /auth/logout | Invalida sesion                      |
| GET    | /auth/me     | Perfil del usuario autenticado       |

#### Noticias
| Metodo | Endpoint              | Descripcion                         |
|--------|-----------------------|-------------------------------------|
| GET    | /noticias             | Listado publico paginado            |
| GET    | /noticias/:slug       | Detalle por slug                    |
| GET    | /admin/noticias       | Listado admin con filtros           |
| POST   | /admin/noticias       | Crear noticia                       |
| PATCH  | /admin/noticias/:id   | Editar noticia                      |
| DELETE | /admin/noticias/:id   | Eliminar noticia                    |

#### Jugadores
| Metodo | Endpoint              | Descripcion                         |
|--------|-----------------------|-------------------------------------|
| GET    | /jugadores            | Listado publico por posicion        |
| GET    | /jugadores/:id        | Perfil de jugador                   |
| POST   | /admin/jugadores      | Crear jugador                       |
| PATCH  | /admin/jugadores/:id  | Editar jugador                      |
| DELETE | /admin/jugadores/:id  | Eliminar jugador                    |

#### Partidos
| Metodo | Endpoint                  | Descripcion                     |
|--------|---------------------------|---------------------------------|
| GET    | /partidos/proximos        | Proximos partidos               |
| GET    | /partidos/resultados      | Historial de resultados         |
| POST   | /admin/partidos           | Crear partido                   |
| PATCH  | /admin/partidos/:id       | Editar / registrar resultado    |
| DELETE | /admin/partidos/:id       | Eliminar partido                |

#### Galeria
| Metodo | Endpoint                        | Descripcion              |
|--------|---------------------------------|--------------------------|
| GET    | /galeria                        | Listado de albumes       |
| GET    | /galeria/:id                    | Imagenes de un album     |
| POST   | /admin/galeria/albumes          | Crear album              |
| POST   | /admin/galeria/imagenes         | Subir imagen a album     |
| DELETE | /admin/galeria/imagenes/:id     | Eliminar imagen          |
| DELETE | /admin/galeria/albumes/:id      | Eliminar album           |

#### Media / Contacto / Usuarios
| Metodo | Endpoint              | Descripcion                          |
|--------|-----------------------|--------------------------------------|
| POST   | /media/upload         | Subida a Cloudinary, retorna URL     |
| POST   | /contacto             | Envio de formulario (dispara email)  |
| GET    | /admin/usuarios       | Listado de usuarios admin            |
| POST   | /admin/usuarios       | Crear editor                         |
| PATCH  | /admin/usuarios/:id   | Cambiar rol / estado                 |
| DELETE | /admin/usuarios/:id   | Eliminar usuario                     |

---

## 8. MODELO DE DATOS (Prisma Schema)

### Diagrama de relaciones

```
User ──────────────── Noticia
 │                      │
 │              (authorId FK)
 │
 └──── (createdBy en Partido, Jugador, Album)

Noticia ──────────── NoticiaCategoria (enum)
Jugador ──────────── Posicion (enum)
Partido ──────────── EstadoPartido (enum)
                  └── TipoPartido (enum)

Album ─────────────── Imagen (1:N)
```

### Schema completo

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─────────────────────────────────────────────
// ENUMS
// ─────────────────────────────────────────────

enum Role {
  ADMIN
  EDITOR
}

enum EstadoContenido {
  BORRADOR
  PUBLICADO
}

enum NoticiaCategoria {
  EQUIPO
  CLUB
  INSTITUCION
}

enum Posicion {
  PORTERO
  DEFENSA
  CENTROCAMPISTA
  DELANTERO
}

enum TipoPartido {
  LOCAL
  VISITANTE
}

enum EstadoPartido {
  PROGRAMADO
  FINALIZADO
  CANCELADO
  APLAZADO
}

// ─────────────────────────────────────────────
// USUARIOS Y AUTENTICACION
// ─────────────────────────────────────────────

model User {
  id             String    @id @default(uuid())
  email          String    @unique
  password       String    // hash bcrypt
  nombre         String
  role           Role      @default(EDITOR)
  activo         Boolean   @default(true)
  refreshToken   String?   // hash del refresh token activo

  // Relaciones de autoria
  noticias       Noticia[]
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt

  @@map("users")
}

// ─────────────────────────────────────────────
// NOTICIAS
// ─────────────────────────────────────────────

model Noticia {
  id              String           @id @default(uuid())
  titulo          String
  slug            String           @unique
  resumen         String?          // texto breve para cards y SEO description
  cuerpo          String           // HTML generado por TipTap
  imagenUrl       String?          // URL de Cloudinary
  categoria       NoticiaCategoria @default(EQUIPO)
  estado          EstadoContenido  @default(BORRADOR)
  destacada       Boolean          @default(false)  // aparece en hero de inicio
  metaTitle       String?
  metaDescription String?

  // Auditoria
  autorId         String
  autor           User             @relation(fields: [autorId], references: [id])
  publicadoEn     DateTime?        // null si es borrador
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt

  @@index([slug])
  @@index([estado, publicadoEn])
  @@map("noticias")
}

// ─────────────────────────────────────────────
// PLANTILLA — JUGADORES
// ─────────────────────────────────────────────

model Jugador {
  id              String    @id @default(uuid())
  nombre          String
  apellido        String
  dorsal          Int       @unique
  posicion        Posicion
  nacionalidad    String
  fechaNacimiento DateTime?
  fotoPrincipal   String?   // URL de Cloudinary
  biografia       String?
  activo          Boolean   @default(true)
  orden           Int       @default(0)  // orden de aparicion en la lista

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@index([posicion, activo])
  @@map("jugadores")
}

// ─────────────────────────────────────────────
// PARTIDOS
// ─────────────────────────────────────────────

model Partido {
  id              String        @id @default(uuid())
  equipoRival     String
  logoRival       String?       // URL de Cloudinary
  tipo            TipoPartido   // LOCAL | VISITANTE
  competicion     String        // ej. "Liga Departamental"
  sede            String?       // nombre del estadio o cancha
  fechaHora       DateTime
  estado          EstadoPartido @default(PROGRAMADO)

  // Resultado (solo si estado = FINALIZADO)
  golesLocal      Int?
  golesVisitante  Int?

  // Informacion adicional
  jornada         String?       // ej. "Jornada 5"
  observaciones   String?

  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  @@index([fechaHora, estado])
  @@map("partidos")
}

// ─────────────────────────────────────────────
// GALERIA MULTIMEDIA
// ─────────────────────────────────────────────

model Album {
  id          String    @id @default(uuid())
  nombre      String
  descripcion String?
  portadaUrl  String?   // primera imagen o imagen manual de portada
  publicado   Boolean   @default(true)
  imagenes    Imagen[]

  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@map("albumes")
}

model Imagen {
  id          String    @id @default(uuid())
  url         String    // URL de Cloudinary
  publicId    String    // Cloudinary public_id para eliminacion directa
  altText     String?
  orden       Int       @default(0)

  albumId     String
  album       Album     @relation(fields: [albumId], references: [id], onDelete: Cascade)

  createdAt   DateTime  @default(now())

  @@index([albumId, orden])
  @@map("imagenes")
}

// ─────────────────────────────────────────────
// CONTACTO
// ─────────────────────────────────────────────

model MensajeContacto {
  id          String    @id @default(uuid())
  nombre      String
  email       String
  asunto      String
  mensaje     String
  leido       Boolean   @default(false)
  ip          String?   // para control de spam basico

  createdAt   DateTime  @default(now())

  @@map("mensajes_contacto")
}

// ─────────────────────────────────────────────
// CONFIGURACION GENERAL DEL SITIO (clave-valor)
// ─────────────────────────────────────────────

model ConfigSitio {
  clave       String    @id    // ej. "nombre_club", "telefono", "email_contacto"
  valor       String
  descripcion String?

  updatedAt   DateTime  @updatedAt

  @@map("config_sitio")
}
```

### Notas del modelo de datos

**User**
- `password` almacena el hash bcrypt, nunca la contrasena en texto plano.
- `refreshToken` almacena el hash del token activo; al hacer logout se pone en `null`.
- Un `User` puede ser autor de muchas `Noticia`. Jugadores, Partidos y Albumes no tienen autor asignado en MVP para simplificar (se gestiona por roles de acceso).

**Noticia**
- `slug` se genera automaticamente desde el `titulo` en el servicio (slugify), con sufijo numerico si hay colision.
- `resumen` es independiente del cuerpo; se usa en cards de listado y como `meta description`.
- `publicadoEn` se asigna al momento de cambiar `estado` a `PUBLICADO`; permite programar fechas futuras en versiones posteriores.
- `destacada` controla si la noticia aparece en el hero de la pagina de inicio (solo una activa a la vez, validado por el servicio).

**Jugador**
- `dorsal` es unico a nivel de tabla; la logica de negocio valida reasignacion si un jugador se marca como inactivo.
- `orden` permite al admin reordenar la plantilla manualmente sin depender de fecha de creacion.

**Partido**
- `golesLocal` y `golesVisitante` son nullable; solo se registran cuando `estado = FINALIZADO`.
- `tipo LOCAL` significa que Los Unicos FC juega en casa; `tipo VISITANTE` significa que juega fuera.
- El campo `golesLocal` siempre representa los goles del equipo propio, independientemente del tipo de partido.

**Album / Imagen**
- `onDelete: Cascade` en `Imagen` garantiza que al eliminar un `Album` se eliminan todas sus imagenes en base de datos.
- La eliminacion en Cloudinary debe ejecutarse en el servicio antes de eliminar el registro (usando `publicId`).
- `portadaUrl` se actualiza automaticamente con la primera imagen del album al subir o al eliminar la imagen de portada.

**MensajeContacto**
- Se persiste en BD para que el admin pueda revisar mensajes desde el panel aunque el email falle.
- `leido` permite marcar mensajes revisados desde el dashboard.

**ConfigSitio**
- Tabla clave-valor para datos institucionales (nombre del club, telefono, redes sociales, email de contacto) editables desde el panel sin necesidad de redeploy.
- Claves predefinidas al hacer seed inicial.

### Seed inicial recomendado

```
ConfigSitio:
  nombre_club       → "Los Unicos FC"
  email_contacto    → (email institucional)
  telefono          → (telefono del club)
  ciudad            → (ciudad del club)
  fundacion         → (ano de fundacion)
  instagram_url     → ""
  facebook_url      → ""
  youtube_url       → ""

User (admin inicial):
  email             → (email del administrador)
  role              → ADMIN
  activo            → true
```

---

## 9. DISENO UX/UI RECOMENDADO

### Estilo visual deportivo moderno
- Composicion de alto contraste: fondos oscuros con acentos en el color institucional del club.
- Uso de imagenes de gran formato (hero, banners de seccion).
- Tipografia de alto impacto para titulares (condensada / bold).
- Micro-animaciones sutiles en hover de tarjetas y botones (transiciones CSS).
- Iconografia consistente con una unica libreria (Lucide React o Heroicons).

### Responsive Design — Mobile-First
- Breakpoints base: sm (480px), md (768px), lg (1024px), xl (1280px).
- Navegacion en mobile: menu hamburguesa con drawer lateral.
- Grids adaptables: 1 columna en mobile → 2 en tablet → 3-4 en desktop.
- Imagenes con aspect-ratio fijo y object-fit: cover para coherencia visual.
- Touch targets minimos de 44px en elementos interactivos.

### Componentes Reutilizables — Sistema base
- `<Card />` — base para noticias, jugadores, partidos y galeria.
- `<Button />` — variantes: primary, secondary, ghost, danger; tamanios sm, md, lg.
- `<Badge />` — etiquetas de posicion, categoria, estado.
- `<Spinner />` — estado de carga global y por seccion.
- `<Modal />` — confirmacion de acciones destructivas en el admin.
- `<DataTable />` — tabla paginada reutilizable para el panel admin.
- `<ImageUploader />` — drag & drop con preview para subida de imagenes.
- `<RichTextEditor />` — wrapper sobre TipTap para el editor de noticias.
- `<PageHero />` — banner reutilizable por seccion (imagen de fondo + titulo).
- `<EmptyState />` — pantalla vacia estandarizada para listados sin datos.
- `<SEOHead />` — inyeccion de metaetiquetas (title, description, og) por pagina.

### Navegacion publica
- Navbar fija en scroll con logo, enlaces principales y acceso discreto al admin.
- Footer con informacion institucional, redes sociales y navegacion secundaria.
- Breadcrumb en paginas de detalle (noticia individual, perfil de jugador).

### Panel de Administracion
- Layout con sidebar colapsable a la izquierda y topbar superior.
- Sidebar: navegacion por modulo con iconos y etiquetas.
- Toasts de exito/error tras operaciones CRUD.
- Formularios con validacion en tiempo real.
- Confirmacion modal obligatoria para acciones de eliminacion.

---

*Documento de arquitectura MVP — Los Unicos FC · Version 1.0*
