console.log(`Starting directory: ${process.cwd()}`);

// or

console.log("current directory is:",process.cwd());

//or

console.log("current directory is:",process.env.PWD);

// PWD is the current working directory when the process is started, but it is constant.
// process.cwd() is asking the underlying system for the process's current directory,
//  which can be changed with process.chdir(). PWD is also a POSIX environmental variable,
//  which means it won't work on Windows. process.cwd() on the other hand, will.
