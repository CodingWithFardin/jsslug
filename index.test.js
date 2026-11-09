import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./index.js";

test("basic", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("accents folded", () => {
  assert.equal(slugify("Crème brûlée"), "creme-brulee");
});

test("custom separator and max length", () => {
  assert.equal(slugify("a b c", { separator: "_" }), "a_b_c");
  assert.equal(slugify("abcdef gh", { maxLength: 6 }), "abcdef");
});

test("empty input", () => {
  assert.equal(slugify("!!!"), "");
});
