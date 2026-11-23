#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const IGNORED_DIRECTORIES = new Set([".git", "node_modules", "target", ".idea", ".vscode"]);

const REQUIRED_PATHS = [
    ".editorconfig",
    ".gitattributes",
    ".gitignore",
    ".github/CODEOWNERS",
    ".github/dependabot.yml",
    ".github/PULL_REQUEST_TEMPLATE.md",
    ".github/workflows/ci.yml",
    ".github/workflows/pr-validation.yml",
    ".github/workflows/stale.yml",
    ".husky/pre-commit",
    ".husky/commit-msg",
    ".husky/pre-push",
    ".mvn/wrapper/maven-wrapper.properties",
    "checkstyle.xml",
    "pom.xml",
    "mvnw",
    "mvnw.cmd",
    "package.json",
    "package-lock.json",
    "LICENSE",
    "README.md",
    "CONTRIBUTING.md",
    "CODE_OF_CONDUCT.md",
    "SECURITY.md",
    "SUPPORT.md",
    "CHANGELOG.md",
    "ROADMAP.md",
    "docs/getting-started/installation.md",
    "docs/learning-path/README.md",
    "docs/guides/git-basics.md",
    "docs/governance/roles.md",
    "exercises/README.md",
    "projects/README.md",
    "resources/README.md",
    "src/main/java/org/opendev/Main.java",
    "src/test/java/org/opendev/MainTest.java",
];

/**
 * Comprueba si una ruta existe dentro del repositorio.
 *
 * @param {string} relativePath ruta relativa a la raíz del repositorio
 * @returns {boolean} `true` si la ruta existe
 */
function exists(relativePath) {
    return fs.existsSync(path.join(ROOT, relativePath));
}

/**
 * Recorre un directorio y devuelve los que no contienen ningún archivo.
 *
 * @param {string} directory directorio absoluto que se va a revisar
 * @returns {string[]} rutas relativas de directorios vacíos
 */
function findEmptyDirectories(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    const files = entries.filter((entry) => entry.isFile());
    const subdirectories = entries.filter(
        (entry) => entry.isDirectory() && !IGNORED_DIRECTORIES.has(entry.name),
    );

    const emptyNested = subdirectories.flatMap((entry) =>
        findEmptyDirectories(path.join(directory, entry.name)),
    );

    if (files.length === 0 && subdirectories.length === 0) {
        return [path.relative(ROOT, directory)];
    }

    return emptyNested;
}

/**
 * Valida la estructura mínima del repositorio y falla con un mensaje claro.
 *
 * @returns {void}
 */
function main() {
    const missing = REQUIRED_PATHS.filter((relativePath) => !exists(relativePath));
    const emptyDirectories = findEmptyDirectories(ROOT);

    if (missing.length === 0 && emptyDirectories.length === 0) {
        console.log("Estructura del repositorio válida.");
        return;
    }

    if (missing.length > 0) {
        console.error("Faltan rutas obligatorias:");
        missing.forEach((relativePath) => console.error(`  - ${relativePath}`));
    }

    if (emptyDirectories.length > 0) {
        console.error("Hay directorios vacíos; añade un README o un archivo que explique su propósito:");
        emptyDirectories.forEach((relativePath) => console.error(`  - ${relativePath}`));
    }

    process.exit(1);
}

main();
