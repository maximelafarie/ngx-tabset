import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/add/operator/map': 'Rx'
};

export default {
    entry: './dist/modules/ngx-tabset.es5.js',
    dest: './dist/bundles/ngx-tabset.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.ngxTabset',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
