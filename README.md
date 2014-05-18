# slush-angularfire [![Build Status](https://secure.travis-ci.org/arvindr21/slush-angularfire.png?branch=master)](https://travis-ci.org/arvindr21/slush-angularfire) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-angularfire.png)](http://badges.enytc.com/for/npm/slush-angularfire) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/arvindr21/slush-angularfire/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![NPM](https://nodei.co/npm/slush-angularfire.png?downloads=true&stars=true)](https://nodei.co/npm/slush-angularfire/)

> A slush generator to scaffold an Angular-Firebase App

The Generated Angular Firebase app is based on [angularFire-seed](https://github.com/firebase/angularFire-seed). I have added jQuery, Bootstrap and Modernizr support. The app uses Gulp to perform basic tasks like connect server, live reload, csslinting & jslinting. The app is intergated with Karma, so you can execute unit tests as well as e2e tests.

## Getting Started

### Installation

Install `slush-angularfire` globally:

```bash
$ npm install -g slush-angularfire
```

Remember to install `gulp` & `slush` globally as well, if you haven't already:

```bash
$ npm install -g gulp slush
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-angularfire
```

Run the generator from within the new folder:

```bash
$ cd my-slush-angularfire && slush angularfire
```

## To Run the app

Execute 

```bash
$ gulp
```

## Testing

To run Karma Unit tests execute
```bash
$ gulp karma-unit
```

To run Karma E2E tests execute
```bash
$ gulp karma-e2e
``` 

To run All tests execute
```bash
$ gulp test
```

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/arvindr21/slush-angularfire/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/arvindr21/slush-angularfire/issues).

## License 

The MIT License

Copyright (c) 2014, Arvind Ravulavaru

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

