const [major, minor] = process.versions.node.split('.').map(Number);

// require(esm) — needed so CommonJS (require()) consumers can load this
// ESM package — is only unflagged on Node >=20.19.0 (20.x line) or
// >=22.12.0 (22.x+ line).
const supported =
    major >= 23 ||
    (major === 22 && minor >= 12) ||
    (major === 20 && minor >= 19);

if (!supported) {
    console.error(
        `\n❌ This package requires Node.js >=20.19.0 (on the 20.x line) or ` +
        `>=22.12.0 (on the 22.x+ line) so both "import" and "require()" work.\n` +
        `   You are using Node.js ${process.versions.node}.\n` +
        `   Please upgrade Node.js to proceed.\n`
    );
    process.exit(1);
}
