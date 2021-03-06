# Tips

Below are some tips that will improve your experience and help you  avoiding gotchas while using **FuseBox**.

## General tips

* Don't import **FuseBox** in your code, 
it will cause issues, it is already added to your bundle and 
available globally and you can access it anywhere in your code like  when you access `window`  on client or ` global` in `Node.js`. 
for example to import a file  just use  `FuseBox.import('./myfile')`
* Use the [EnvPlugin](#envplugin) to pass Environmental variables on both client and server, you can even use packages like [safe-env](https://www.npmjs.com/package/safe-env) with it.
* **FuseBox** `API` has neat `isServer` and `isBrowser` methods, use them to check the environment the code is running in. for example `FuseBox.isServer` will return `true` if you are running your code in `Node.js`

## TypeScript tips
* You don't have to worry about `module` option in **TypeScript** compiler options, Fuse will automatically set it up for you, even if you forget to add it.
