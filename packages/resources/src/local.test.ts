import { describe, it, expect } from "vitest";
import { parsePost } from "./local";

describe("parsePost", () => {
    it("should parse valid frontmatter", () => {
        const content = `---
title: Hello World
publishedAt: 2023-01-01
updatedAt: 2023-01-02
---
# Content`;
        const id = "hello-world";
        const result = parsePost(content, id);

        expect(result).toEqual({
            kind: "external",
            category: "internal",
            title: "Hello World",
            href: "/articles/hello-world",
            publishedAt: new Date("2023-01-01").toISOString(),
            updatedAt: new Date("2023-01-02").toISOString(),
        });
    });

    it("should throw error if frontmatter is missing", () => {
        const content = `# Content only`;
        const id = "no-frontmatter";
        expect(() => parsePost(content, id)).toThrowError(/Frontmatter not found/);
    });

    it("should throw error if frontmatter is invalid yaml", () => {
        const content = `---
title: : invalid
---`;
        const id = "invalid-yaml";
        expect(() => parsePost(content, id)).toThrow();
    });

    it("should throw error if schema validation fails", () => {
        const content = `---
title: Missing dates
---`;
        const id = "invalid-schema";
        expect(() => parsePost(content, id)).toThrow();
    });
});
