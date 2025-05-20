-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2025 a las 22:45:47
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce_2024`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attributes`
--

CREATE TABLE `attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `type_attribute` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 es Activo y 2 es Inactivo',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `attributes`
--

INSERT INTO `attributes` (`id`, `name`, `type_attribute`, `state`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'TALLAS', 3, 1, '2025-04-14 12:41:07', '2025-04-14 12:41:07', NULL),
(2, 'COLORES', 3, 1, '2025-04-14 13:08:13', '2025-04-14 13:48:59', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 es Activo y 2 es Inactivo',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `imagen`, `state`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'SONY', NULL, 1, NULL, NULL, NULL),
(2, 'SAMSUNG', NULL, 1, NULL, NULL, NULL),
(3, 'NIKE', NULL, 1, NULL, NULL, NULL),
(4, 'REEBOK', NULL, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `icon` text DEFAULT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 es activo y 2 es inactivo',
  `imagen` varchar(250) DEFAULT NULL,
  `categorie_second_id` bigint(25) UNSIGNED DEFAULT NULL,
  `categorie_third_id` bigint(25) UNSIGNED DEFAULT NULL,
  `position` double UNSIGNED NOT NULL DEFAULT 1,
  `type_categorie` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 es departamento, 2 es categoria y 3 subcategoria',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `icon`, `state`, `imagen`, `categorie_second_id`, `categorie_third_id`, `position`, `type_categorie`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 'Computers', '<svg _ngcontent-ng-c2513673852=\"\" width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-ng-c2513673852=\"\" d=\"M14.5 1H2.5C1.67157 1 1 1.67157 1 2.5V10C1 10.8284 1.67157 11.5 2.5 11.5H14.5C15.3284 11.5 16 10.8284 16 10V2.5C16 1.67157 15.3284 1 14.5 1Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path _ngcontent-ng-c2513673852=\"\" d=\"M5.5 14.5H11.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path _ngcontent-ng-c2513673852=\"\" d=\"M8.5 11.5V14.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>', 1, 'categories/quzkwamijd3ZArxMUye6Y2t6WZg6byvhZfI3URZX.jpg', NULL, NULL, 1, 1, '2025-05-17 15:12:59', '2025-05-17 15:15:33', NULL),
(8, 'Desktop', NULL, 1, 'categories/1ZwdiK9AkOyM4Mm27vzUs9GRD4Nj2qg8NMEdIqfS.jpg', 7, NULL, 1, 2, '2025-05-17 15:16:17', '2025-05-17 15:18:22', NULL),
(9, 'Gaming', NULL, 1, 'categories/QJ89Lysu1WOL5Eij5ph7jtl9jI0u4s2SMCdpzNcm.jpg', 8, 7, 1, 3, '2025-05-17 15:17:46', '2025-05-17 15:17:46', NULL),
(10, 'Sports', '<svg width=\"18\" height=\"17\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">                                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.92384 11.3525C10.1178 11.3525 12.8477 11.8365 12.8477 13.7698C12.8477 15.7032 10.136 16.201 6.92384 16.201C3.72902 16.201 1 15.7213 1 13.7871C1 11.8529 3.71084 11.3525 6.92384 11.3525Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>                                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.92383 8.59311C4.82685 8.59311 3.1264 6.89354 3.1264 4.79656C3.1264 2.69958 4.82685 1 6.92383 1C9.01994 1 10.7204 2.69958 10.7204 4.79656C10.7282 6.88575 9.03986 8.58532 6.95067 8.59311H6.92383Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>                                                <path d=\"M12.8906 7.60761C14.2768 7.41281 15.3443 6.22319 15.3469 4.78336C15.3469 3.3643 14.3123 2.18681 12.9556 1.96429\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>                                                <path d=\"M14.7195 10.9416C16.0623 11.1416 17 11.6126 17 12.5823C17 13.2498 16.5584 13.6827 15.845 13.9537\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>                                                </svg>', 1, 'categories/Q0TIZJKPDGW9001D8Fzyd7ex6OiBkaTmIweHhn3C.jpg', NULL, NULL, 2, 1, '2025-05-17 15:24:27', '2025-05-17 15:24:27', NULL),
(11, 'Calzado', NULL, 1, 'categories/3BPfv3WnbCNFvIX6aIyaHfKfBgmoSYBCugZPF7lw.jpg', 10, NULL, 2, 2, '2025-05-17 15:24:56', '2025-05-17 15:24:56', NULL),
(12, 'Unisex', NULL, 1, NULL, 11, 10, 2, 3, '2025-05-17 15:26:29', '2025-05-17 15:26:29', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(250) NOT NULL,
  `slug` text NOT NULL,
  `sku` varchar(50) NOT NULL,
  `price_cop` double NOT NULL,
  `price_usd` double NOT NULL,
  `description` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `resumen` longtext NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 es pendiente y 2 es publico',
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `categorie_first_id` bigint(20) UNSIGNED NOT NULL,
  `categorie_second_id` bigint(20) UNSIGNED DEFAULT NULL,
  `categorie_third_id` int(20) UNSIGNED DEFAULT NULL,
  `stock` double NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `sku`, `price_cop`, `price_usd`, `description`, `resumen`, `imagen`, `state`, `tags`, `brand_id`, `categorie_first_id`, `categorie_second_id`, `categorie_third_id`, `stock`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Nike Prominia', 'nike-prominia', 'Nike', 100000, 43.14, '<p>Nike prominia color azul con franja verde</p>', 'Confort y Elegancia', 'products/wQDwRgJoYFQhslDizCYzTbUiXe37VzxUWtT8ewKk.jpg', 1, '[{\"item_id\":1747758968441,\"item_text\":\"Nike\"}]', 3, 10, 11, 12, 0, '2025-05-20 16:37:39', '2025-05-20 16:37:39', NULL),
(2, 'Teclado Gaming', 'teclado-gaming', 'Teclado Gaming-2024', 100000, 23.73, '<p>Teclado retroiluminado&nbsp;</p>', 'Teclado del año', 'products/s6hbwCR1amtuU8NRfmnoYC3hxvtaA4SYjI13eMke.jpg', 1, '[{\"item_id\":1747763490710,\"item_text\":\"Teclado\"},{\"item_id\":1747763499702,\"item_text\":\"Samsung\"}]', 2, 7, NULL, NULL, 0, '2025-05-20 17:52:06', '2025-05-20 17:52:06', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `code` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `properties`
--

INSERT INTO `properties` (`id`, `attribute_id`, `name`, `code`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, 'Rojo', '#f20707', '2025-04-22 20:35:52', '2025-04-22 20:35:52', NULL),
(2, 1, 'L', NULL, '2025-04-22 20:50:55', '2025-04-22 20:50:55', NULL),
(3, 1, 'M', NULL, '2025-04-22 20:51:16', '2025-04-22 20:51:16', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) NOT NULL,
  `title` varchar(250) NOT NULL,
  `subtitle` varchar(250) DEFAULT NULL,
  `label` varchar(250) DEFAULT NULL,
  `imagen` varchar(250) NOT NULL,
  `link` text DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 es activo 2 es inactivo',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sliders`
--

INSERT INTO `sliders` (`id`, `title`, `subtitle`, `label`, `imagen`, `link`, `color`, `state`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'The best tablet Collection 2024', 'The best tablet 20% in collection', NULL, 'sliders/3oiiku0v45reon46Qr1VkQbpE4e3ukjEKiqxoOjl.jpg', NULL, '#9407f2', 1, '2025-04-24 19:08:04', '2025-05-01 03:29:57', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `uniqd` varchar(100) DEFAULT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  `type_user` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 es administrador y 2 es cliente',
  `code_verified` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `phone`, `uniqd`, `avatar`, `type_user`, `code_verified`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Victor', 'Rojas', '3206431109', '67db075242d86', NULL, 1, NULL, 'guardianrojas@gmail.com', NULL, '$2y$12$4aCDSAGqzABmcwI453DXduT7W5Ew.WZrzZnsFoQDYz5Lb2kbmxZnW', NULL, '2025-03-19 23:05:06', '2025-03-19 23:05:06', NULL),
(2, 'ferney', 'rojas', '325645897', '67db3598eaaa5', NULL, 2, NULL, 'guardianvic@gmail.com', NULL, '$2y$12$ta65YxgzQtTSxQS90YW7V.qx8IkGlVFct4KZXCbYDgZ1ZdvzKarim', NULL, '2025-03-20 02:22:33', '2025-03-22 07:50:06', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
