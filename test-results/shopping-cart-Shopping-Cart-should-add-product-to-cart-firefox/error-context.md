# Page snapshot

```yaml
- generic [active]:
  - alert [ref=e1]
  - dialog [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - heading "Build Error" [level=1] [ref=e7]
        - paragraph [ref=e8]: Failed to compile
        - generic [ref=e9]:
          - text: Next.js (14.2.25) is outdated
          - link "(learn more)" [ref=e11] [cursor=pointer]:
            - /url: https://nextjs.org/docs/messages/version-staleness
      - generic [ref=e12]:
        - generic [ref=e13]:
          - link "./node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs" [ref=e14] [cursor=pointer]:
            - text: ./node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
            - img [ref=e15]
          - generic [ref=e20]: "Error: ENOENT: no such file or directory, open 'C:\\Users\\ASUS\\Downloads\\code\\node_modules\\@radix-ui\\react-collection\\node_modules\\@radix-ui\\react-slot\\dist\\index.mjs'"
        - contentinfo [ref=e21]:
          - paragraph [ref=e22]: This error occurred during the build process and can only be dismissed by fixing the error.
```