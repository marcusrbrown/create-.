#!/usr/bin/env node

async function main() {
}

module.exports = main().catch((reason) => {
  console.error(reason);
  process.exit(1);
});
