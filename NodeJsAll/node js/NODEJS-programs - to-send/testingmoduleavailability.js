try {
    console.log(require.resolve("express"));
} catch(e) {
    console.error("express is not found");
    process.exit(e.code);
}