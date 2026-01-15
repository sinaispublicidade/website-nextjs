-- CreateTable
CREATE TABLE `form_budget` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cidade_estado` VARCHAR(191) NOT NULL,
    `empresa` VARCHAR(191) NOT NULL,
    `ramo_atuacao` VARCHAR(191) NOT NULL,
    `faturamento` VARCHAR(191) NOT NULL,
    `tipo_servico` VARCHAR(191) NOT NULL,
    `demanda` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
