/*
  Warnings:

  - You are about to drop the `form_about` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `form_ads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `form_about`;

-- DropTable
DROP TABLE `form_ads`;

-- CreateTable
CREATE TABLE `form_services` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `faturamento` VARCHAR(191) NULL,
    `produto_servico` VARCHAR(191) NULL,
    `tipo_servico` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
