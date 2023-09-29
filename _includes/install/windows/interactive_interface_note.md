**This is an important note for Windows users**: When using anvi'o in WSL, you will always need to add `-I localhost` to any interactive interface command.

Here is an example with `anvi-interactive`:
```
anvi-interactive -c CONTIGS.db -p MERGED/PROFILE.db -I localhost
```
The link for the interactive interface should look like this (with default port):
```
http://localhost:8080
```

This will likely impact the outcomes of tests below, and if you don't see a browser at the very end of your `anvi-self-test` command, don't worry.

---
