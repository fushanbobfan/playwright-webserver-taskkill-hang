# playwright-webserver-taskkill-hang

On Windows, Playwright's `webServer` teardown waits forever when `taskkill` fails.

`fake-taskkill/taskkill.cmd` exits with code 1 and ends no process, standing in for a `taskkill` run that fails. It
also appends each call to `fake-taskkill/calls.log`. With that folder first on `PATH`, the teardown's
`taskkill /pid <pid> /T /F` runs it.

In a Command Prompt (cmd.exe) on Windows:

```bat
npm ci
npx playwright test
set PATH=%CD%\fake-taskkill;%PATH%
set DEBUG=pw:webserver
npx playwright test
```

The first `npx playwright test` prints `1 passed` and exits. The second passes the test, prints
`pw:webserver Terminating the WebServer`, and never exits; `node server.mjs` keeps answering on port 41733.
