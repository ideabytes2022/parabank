exports.config = {
    //export let config: Config = {
        //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 80000,
    allScriptsTimeout:  5000000,
    capabilities: {
        browserName: 'chrome',
    },
    
    framework: 'jasmine',
   // frameworkPath: './conf.js',
    //frameworkPath: require.resolve('protractor-cucumber-framework'),
    defaultTimeoutInterval: 90000,
    // Spec patterns are relative to this directory.
    specs: ['./JSFiles/frame.js'],
    jasmineNodeOpts: {
        //cucumberOpts: {
        // overriding default value of defaultTimeoutInterval parameter //
              defaultTimeoutInterval: 99999
           },

    
      
    //capabilities: env.capabilities,

    // baseUrl: env.baseUrl,

    //cucumberOpts: {

        //format: 'json:sample_report.json',
        //output: 'cucumber.html',
        //require: ['']
        //format:['json:.test/results.json'],
        //   tags: '@dev',
        //   format: 
        //'../JSFiles/*.
    }

