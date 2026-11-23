#!/usr/bin/env node
const fs = require("node:fs");

const ALLOWED_TYPES = [
    "feat",
    "fix",
    "docs",
    "test",
    "refactor",
    "style",
    "chore",
    "build",
    "ci",
    "perf",
    "revert",
];

const HEADER_PATTERN = new RegExp(`^(${ALLOWED_TYPES.join("|")})(\\([a-z0-9-]+\\))?: [a-z0-9].*$`);
const MAX_LENGTH = 72;

/**
 * Lee el mensaje desde un archivo, un argumento o la entrada estándar.
 *
 * @returns {string} primera línea significativa del mensaje de commit
 */
function readMessage() {
    const argument = process.argv[2];

    if (argument && fs.existsSync(argument)) {
        return fs.readFileSync(argument, "utf8");
    }

    if (argument) {
        return argument;
    }

    return fs.readFileSync(0, "utf8");
}

/**
 * Obtiene la primera línea no vacía y no comentada del mensaje.
 *
 * @param {string} message mensaje completo del commit
 * @returns {string} cabecera del commit
 */
function extractHeader(message) {
    const lines = message.split(/\r?\n/).map((line) => line.trim());
    return lines.find((line) => line.length > 0 && !line.startsWith("#")) || "";
}

/**
 * Valida que la cabecera siga Conventional Commits y explica el formato esperado.
 *
 * @returns {void}
 */
function main() {
    const header = extractHeader(readMessage());

    if (header.startsWith("Merge ")) {
        return;
    }

    const isValid =
        header.length > 0 &&
        header.length <= MAX_LENGTH &&
        HEADER_PATTERN.test(header) &&
        !header.endsWith(".");

    if (isValid) {
        return;
    }

    console.error("Mensaje de commit inválido:");
    console.error(`  ${header || "(vacío)"}`);
    console.error("");
    console.error("Formato esperado: <tipo>(<alcance>): <descripción>");
    console.error(`Tipos permitidos: ${ALLOWED_TYPES.join(", ")}`);
    console.error("La descripción debe empezar en minúscula, no terminar en punto y no superar 72 caracteres.");
    console.error("Ejemplo: feat(exercises): add calculator exercise #42");
    process.exit(1);
}

main();
