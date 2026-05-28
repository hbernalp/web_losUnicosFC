# Los Unicos FC — Plan de Ejecucion & Stack Tecnico
## MVP Sitio Web Oficial

---

## 1. STACK TECNICO DEFINITIVO

### Frontend
| Tecnologia | Version | Proposito |
|---|---|---|
| React | 18+ | UI framework |
| Vite | 5+ | Bundler / dev server |
| TypeScript | 5+ | Tipado estatico |
| Tailwind CSS | 3+ | Estilos utilitarios |
| React Router v6 | 6.x | Enrutamiento |
| TanStack Query | 5.x | Estado servidor / fetching |
| React Hook Form | 7.x | Formularios |
| Zod | 3.x | Validacion esquemas |
| TipTap | 2.x | Editor texto enriquecido |
| yet-another-react-lightbox | 3.x | Galeria lightbox |
| Lucide React | ultima | Iconos |
| date-fns | 3.x | Manejo fechas |
| axios | 1.x | HTTP client |

### Backend
| Tecnologia | Version | Proposito |
|---|---|---|
| NestJS | 10+ | Framework backend |
| TypeScript | 5+ | Tipado estatico |
| Prisma | 5+ | ORM + migrations |
| Passport.js | - | Estrategia autenticacion |
| JWT (jsonwebtoken) | 9.x | Tokens acceso |
| bcrypt | 5.x | Hashing passwords |
| class-validator + class-transformer | - | DTOs / validacion |
| nodemailer | 6.x | Envio correos |

### Base de Datos
| Tecnologia | Version | Proposito |
|---|---|---|
| PostgreSQL | 15+ | Base de datos relacional |
| Supabase (free tier) | - | Hosting BD + Storage (alternativa) |

### Infraestructura
| Servicio | Proposito | Costo |
|---|---|---|
| Vercel (Hobby) | Hosting frontend + CDN | Gratuito |
| Render.com / Railway | Hosting backend API | Gratuito (limite) |
| Cloudinary (Free) | Storage imagenes + optimizacion | Gratuito (25 GB) |
| Resend / Brevo (Free) | Email transaccional | Gratuito (100-300 emails/dia) |
| GitHub | Repositorio + CI/CD | Gratuito |

### Herramientas Desarrollo
| Herramienta | Proposito |
|---|---|
| ESLint + Prettier | Linting + formateo |
| Husky + lint-staged | Pre-commit hooks |
| GitHub Actions | CI basico (lint + build) |
| dotenv | Variables entorno |
| Postman / Bruno | Testing endpoints |

---

## 2. FASES DE EJECUCION

### FASE 0 — Fundacion (Dias 1-3)
**Objetivo:** Repositorio, boilerplate, conexion BD, deploy baseline.

| # | Tarea | Entrega |
|---|---|---|
| 0.1 | Crear repositorio GitHub con README + .gitignore + licencia | Repo inicializado |
| 0.2 | Inicializar backend NestJS + Prisma + PostgreSQL | `backend/` funcional |
| 0.3 | Definir schema.prisma completo + primera migracion | BD creada |
| 0.4 | Inicializar frontend React + Vite + Tailwind + Router | `frontend/` funcional |
| 0.5 | Configurar variables entorno (local + preview) | `.env` files |
| 0.6 | Hacer deploy basico frontend (Vercel) + backend (Render) | URLs publicas |
| 0.7 | Configurar ESLint + Prettier + Husky | Calidad codigo |
| 0.8 | Seed inicial: config_sitio + usuario ADMIN | Datos base |

### FASE 1 — Autenticacion & Admin Shell (Dias 4-7)
**Objetivo:** Login funcional, panel admin con layout, proteccion rutas.

| # | Tarea | Entrega |
|---|---|---|
| 1.1 | Modulo Auth: login, logout, refresh token, me | POST /auth/* |
| 1.2 | Guards por rol (ADMIN, EDITOR) + decoradores | RBAC funcional |
| 1.3 | Frontend: pagina login + AuthContext + token storage | Login visual |
| 1.4 | AdminLayout: sidebar + topbar + routing protegido | Shell admin |
| 1.5 | Admin Dashboard: resumen conteos por entidad | Dashboard |
| 1.6 | ProtectedRoute + RoleGuard en frontend | Rutas seguras |
| 1.7 | Tests de autenticacion (login valido, invalido, expirado) | Tests pass |

### FASE 2 — Modulo Noticias (Dias 8-12)
**Objetivo:** CRUD noticias + vista publica + listado admin.

| # | Tarea | Entrega |
|---|---|---|
| 2.1 | Backend: CRUD noticias + DTOs + validacion + filtros | POST /admin/noticias/* |
| 2.2 | Slugify automatico + manejo colisiones | Slug unico |
| 2.3 | Editor TipTap integrado en formulario | Editor funcional |
| 2.4 | Admin pages: listado (DataTable) + crear/editar noticia | Admin noticias |
| 2.5 | Pagina publica: listado noticias + detalle por slug | /noticias, /noticias/:slug |
| 2.6 | Componente SEOHead por pagina (title, description, og) | Meta tags |
| 2.7 | Pagina inicio: ultimas noticias (3-5 cards) | Home dinamico |

### FASE 3 — Modulo Jugadores (Dias 13-16)
**Objetivo:** CRUD jugadores + directorio publico por posicion.

| # | Tarea | Entrega |
|---|---|---|
| 3.1 | Backend: CRUD jugadores + agrupacion por posicion | POST /admin/jugadores/* |
| 3.2 | Admin pages: listado + formulario jugador | Admin jugadores |
| 3.3 | Subida foto perfil a Cloudinary con preview | ImageUploader |
| 3.4 | Pagina publica: listado por posicion (Porteros, Defensas, etc.) | /plantilla |
| 3.5 | Perfil individual de jugador | /plantilla/:id |
| 3.6 | Orden manual de jugadores (drag & drop basico) | Reordenable |

### FASE 4 — Modulo Partidos (Dias 17-20)
**Objetivo:** CRUD partidos + calendario publico + resultados.

| # | Tarea | Entrega |
|---|---|---|
| 4.1 | Backend: CRUD partidos + endpoints proximos/resultados | POST /admin/partidos/* |
| 4.2 | Admin pages: listado + formulario partido (con resultado) | Admin partidos |
| 4.3 | Pagina publica: proximos partidos + resultados historicos | /partidos |
| 4.4 | Proximo partido destacado en Home | Hero dinamico |
| 4.5 | Badge de estado (programado, finalizado, cancelado) | UI consistente |

### FASE 5 — Galeria Multimedia (Dias 21-24)
**Objetivo:** CRUD albumes + subida imagenes + galeria publica.

| # | Tarea | Entrega |
|---|---|---|
| 5.1 | Backend: CRUD albumes + subida/baja imagenes a Cloudinary | POST /admin/galeria/* |
| 5.2 | Admin pages: listado albumes + gestor imagenes por album | Admin galeria |
| 5.3 | Subida multiple (drag & drop) con preview + progreso | Upload fluido |
| 5.4 | Pagina publica: listado albumes | /galeria |
| 5.5 | Vista album con grid + lightbox | /galeria/:album |
| 5.6 | Eliminacion en cascada (BD + Cloudinary) | Consistencia |

### FASE 6 — Contacto & Utilidades (Dias 25-27)
**Objetivo:** Formulario contacto + config sitio + pagina inicio completa.

| # | Tarea | Entrega |
|---|---|---|
| 6.1 | Backend: POST /contacto + persistencia BD + email | Formulario funcional |
| 6.2 | Frontend: formulario contacto con validacion + feedback | /contacto |
| 6.3 | Admin: bandeja mensajes (listado + marcar leido) | Admin contacto |
| 6.4 | CRUD config sitio desde admin (clave-valor) | Admin config |
| 6.5 | Integrar datos institucionales en footer + contacto | Datos dinamicos |
| 6.6 | Pagina inicio completa: hero, proximo partido, noticias, resultados | Home final |

### FASE 7 — Pulido & Deploy Final (Dias 28-30)
**Objetivo:** SEO, rendimiento, testing integral, puesta en produccion.

| # | Tarea | Entrega |
|---|---|---|
| 7.1 | SEO: sitemap.xml, robots.txt, Open Graph en todas las paginas | SEO completo |
| 7.2 | Performance: lazy loading imagenes, code splitting, Lighthouse >85 | Optimizado |
| 7.3 | Responsive QA: mobile, tablet, desktop | Responsive OK |
| 7.4 | Pruebas end-to-end flujos criticos (login, CRUD, contacto) | E2E pass |
| 7.5 | Correccion bugs + pulido UX (loading states, errores, empty) | Pulido final |
| 7.6 | Deploy produccion: dominio personalizado + SSL + CI/CD | PRODUCCION |

---

## 3. DEPENDENCIAS CRITICAS

```
Fase 0 (Fundacion) ──┬── Fase 1 (Auth) ──┬── Fase 2 (Noticias) ── Fase 7 (Pulido)
                      │                   │
                      │                   ├── Fase 3 (Jugadores) ─┘
                      │                   │
                      │                   ├── Fase 4 (Partidos) ──┘
                      │                   │
                      │                   └── Fase 5 (Galeria) ───┘
                      │
                      └────────────────────── Fase 6 (Contacto)
```

- **Fase 0** es prerequisito de **todas** las demas.
- **Fase 1** (Auth) debe completarse antes de cualquier modulo admin.
- **Fases 2-5** son independientes entre si (se pueden paralelizar con 2 developers).
- **Fase 6** depende solo de Fase 0 + Fase 1.
- **Fase 7** requiere que todas las fases 2-6 esten completas.

---

## 4. MILESTONES

| Milestone | Descripcion | Fecha estimada |
|---|---|---|
| M0 | Fundacion: repo + boilerplate + BD + deploy baseline | Dia 3 |
| M1 | Admin funcional: login + layout + dashboard | Dia 7 |
| M2 | Contenido publicable: noticias + jugadores | Dia 16 |
| M3 | Calendario completo: partidos + galeria | Dia 24 |
| M4 | Sitio completo: contacto + config + home | Dia 27 |
| M5 | PRODUCCION: SEO + performance + deploy final | Dia 30 |

---

## 5. ARQUITECTURA DE COMUNICACIONES

```
Cliente (Browser)
     │
     ├── Vercel CDN ── frontend (React SPA)
     │                    │
     │                    ├── /api/* ────── HTTP (axios) ──┐
     │                    │                                │
     │                    └── /admin/* ──── HTTP (axios) ──┤
     │                                                     │
     │                              ┌──────────────────────┘
     │                              ▼
     │                   Render.com / Railway
     │                   ┌── Backend NestJS ────┐
     │                   │                      │
     │                   ├── AuthModule         │
     │                   ├── NoticiasModule     │
     │                   ├── JugadoresModule    ├── Prisma ── PostgreSQL (Supabase)
     │                   ├── PartidosModule     │
     │                   ├── GaleriaModule      │
     │                   ├── ContactoModule     │
     │                   └── MediaModule ───────┴── Cloudinary (API externa)
     │                                                     │
     └─────────────────────────────────────────────────────┘
                                                           │
                                          Resend / Brevo (Email)
```

---

## 6. CONFIGURACION INICIAL RECOMENDADA

### Variables de Entorno (`.env`)

```env
# Backend
DATABASE_URL=postgresql://...
JWT_SECRET=<random-64-char>
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=<random-64-char>
REFRESH_TOKEN_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
FRONTEND_URL=http://localhost:5173

# Frontend
VITE_API_URL=http://localhost:4000/api
```

### Scripts package.json (Backend)
```json
{
  "scripts": {
    "start:dev": "nest start --watch",
    "build": "nest build",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:seed": "ts-node prisma/seed.ts",
    "lint": "eslint src/",
    "test": "jest"
  }
}
```

### Scripts package.json (Frontend)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src/",
    "test": "vitest"
  }
}
```

---

## 7. ESTRATEGIA DE DESPLIEGUE

### Branch Strategy
```
main ── produccion (deploy automatico Vercel + Render)
  │
  ├── develop ── integration branch
  │     │
  │     ├── feature/auth
  │     ├── feature/noticias
  │     ├── feature/jugadores
  │     ├── feature/partidos
  │     ├── feature/galeria
  │     └── feature/contacto
  │
  └── hotfix/* ── desde main para bugs en produccion
```

### CI/CD (GitHub Actions)
- **Push a main:** build + test + deploy a produccion
- **Push a develop:** build + test + deploy a preview
- **PR a develop:** lint + build + test
- **PR a main:** lint + build + test + deploy staging

---

## 8. ESTIMACION DE ESFUERZO

| Fase | Horas estimadas | Developer(s) |
|---|---|---|
| Fase 0 — Fundacion | 12h | 1 full-stack |
| Fase 1 — Auth & Admin | 20h | 1 full-stack |
| Fase 2 — Noticias | 24h | 1 full-stack |
| Fase 3 — Jugadores | 18h | 1 full-stack |
| Fase 4 — Partidos | 16h | 1 full-stack |
| Fase 5 — Galeria | 20h | 1 full-stack |
| Fase 6 — Contacto & Utilidades | 14h | 1 full-stack |
| Fase 7 — Pulido & Deploy | 16h | 1 full-stack |
| **TOTAL** | **140h** | **1 developer ~ 30 dias** |

*Con 2 developers en paralelo (Fases 2-5): ~18-20 dias calendario*

---

## 9. DEFINICION DE LISTO (Definition of Done)

Cada tarea debe cumplir:
- [ ] Codigo en branch feature/* con PR a develop
- [ ] Code review aprobado (minimo 1 reviewer)
- [ ] Lint + build pasan sin errores
- [ ] Tests unitarios de la funcionalidad (cobertura >70%)
- [ ] Prueba manual en entorno preview
- [ ] Responsive verificado (mobile + tablet + desktop)
- [ ] Documentacion minima: README actualizado si aplica

---

*Documento generado a partir de `losUnicosFC_MVP_Plan.md` — Version 1.0*
