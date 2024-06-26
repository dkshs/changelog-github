import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    environment: "node",
    coverage: {
      include: ["**/*.test.{ts,tsx,js,jsx}"],
      exclude: [...configDefaults.exclude],
    },
  },
});
