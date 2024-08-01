export default defineConfig({
  plugins: [react()],
  root: 'src',  // Specify the source directory if it's different
  build: {
    outDir: '../dist',  // Change the output directory if needed
  }
});
