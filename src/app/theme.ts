import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                primary: { value: "#3182ce" }, // 自定义主色调
                secondary: { value: "#2c5282" },
            },
            fonts: {
                heading: { value: "Arial, sans-serif" },
                body: { value: "Arial, sans-serif" },
            },
        },
    },
});